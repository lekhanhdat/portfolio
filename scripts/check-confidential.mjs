#!/usr/bin/env node
/**
 * Blocks confidential terms (e.g. client names) from entering this public repository.
 *
 * Terms are never stored in the repo. They come from:
 *   - env CONFIDENTIAL_TERMS (GitHub Actions secret), one term per line or comma-separated, or
 *   - private/confidential-terms.txt (gitignored), one term per line, `#` for comments.
 *
 * Matching is case- and diacritic-insensitive and requires word boundaries, so a term
 * like "abc" will not match inside hashes or longer words.
 *
 * Output never prints the terms themselves: CI logs of a public repo are public.
 *
 * Usage:
 *   node scripts/check-confidential.mjs            # scan all tracked + untracked (non-ignored) files
 *   node scripts/check-confidential.mjs --staged   # scan staged files only (pre-commit)
 */
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';

const TERMS_FILE = 'private/confidential-terms.txt';
const isCI = Boolean(process.env.CI);
const stagedOnly = process.argv.includes('--staged');

function normalize(text) {
  return text
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase();
}

function loadTerms() {
  const raw =
    process.env.CONFIDENTIAL_TERMS ??
    (existsSync(TERMS_FILE) ? readFileSync(TERMS_FILE, 'utf8') : '');
  return raw
    .split(/[\n,]/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'))
    .map(normalize);
}

function listFiles() {
  const args = stagedOnly
    ? ['diff', '--cached', '--name-only', '--diff-filter=ACMR', '-z']
    : ['ls-files', '--cached', '--others', '--exclude-standard', '-z'];
  return execFileSync('git', args, { encoding: 'utf8' }).split('\0').filter(Boolean);
}

function readContent(file) {
  if (!stagedOnly) return existsSync(file) ? readFileSync(file) : null;
  // Check the staged version, not the working copy.
  return execFileSync('git', ['show', `:${file}`], { maxBuffer: 64 * 1024 * 1024 });
}

const terms = loadTerms();
if (terms.length === 0) {
  const message = `No confidential terms configured (set CONFIDENTIAL_TERMS or create ${TERMS_FILE}). Skipping check.`;
  console.warn(isCI ? `::warning::${message}` : `⚠ ${message}`);
  process.exit(0);
}

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const patterns = terms.map(
  (term) =>
    new RegExp(`(?<![\\p{L}\\p{N}])${escape(term).replace(/\s+/g, '\\s+')}(?![\\p{L}\\p{N}])`, 'u'),
);

const findings = [];
for (const file of listFiles()) {
  patterns.forEach((pattern, index) => {
    if (pattern.test(normalize(file))) findings.push(`${file} (path) — term #${index + 1}`);
  });

  const buffer = readContent(file);
  if (!buffer || buffer.includes(0)) continue; // missing or binary

  normalize(buffer.toString('utf8'))
    .split('\n')
    .forEach((line, lineIndex) => {
      patterns.forEach((pattern, index) => {
        if (pattern.test(line)) findings.push(`${file}:${lineIndex + 1} — term #${index + 1}`);
      });
    });
}

if (findings.length > 0) {
  console.error(`✖ Confidential terms found in ${findings.length} place(s):`);
  for (const finding of findings) {
    console.error(isCI ? `::error::${finding}` : `  ${finding}`);
  }
  console.error('Replace them with public-safe wording (see CLAUDE.md §2).');
  process.exit(1);
}

console.log(`✓ No confidential terms found (${terms.length} term(s) checked).`);
