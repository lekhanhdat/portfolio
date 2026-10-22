import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y-x';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default defineConfig(
  {
    ignores: ['dist/', '.astro/', 'node_modules/', 'input/', 'private/', 'coverage/'],
  },
  js.configs.recommended,
  tseslint.configs.strict,
  eslintPluginAstro.configs.recommended,
  eslintPluginAstro.configs['jsx-a11y-strict'],
  {
    files: ['**/*.{jsx,tsx}'],
    extends: [jsxA11y.configs.strict, reactHooks.configs.flat.recommended],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['scripts/**/*.{js,mjs}', '*.config.{js,mjs}'],
    languageOptions: { globals: globals.node },
  },
  {
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
);
