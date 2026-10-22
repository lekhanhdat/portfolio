# TASKLIST — Portfolio Le Khanh Dat (v3)

> `[x]` xong · `[ ]` chưa làm · `[~]` đang làm · `[!]` bị chặn · 👤 người dùng làm · 🤖 Claude làm
> Quy tắc: **chỉ làm một Phase mỗi lần**. Kết thúc Phase → cập nhật file này và PROGRESS.md → chờ duyệt.

## Phase 0 — Research & Planning
- [x] P0.1–P0.8 🤖 Phân tích CV, slide, 7 codebase (read-only), thông tin công ty, stack; tạo tài liệu (rev. 1–2)
- [x] P0.9 👤 Trả lời các câu hỏi chặn (16 xác nhận ngày 2026-10-22)
- [x] P0.10 🤖 (rev. 3) Áp dụng xác nhận; tạo `.gitignore`; gỡ các file private khỏi git staging
- [ ] P0.11 👤 Duyệt PLAN v3 và trả lời các câu hỏi còn mở (PROGRESS §4: Q-N1…Q-N5, Q-T7; không chặn Phase 1)

## Phase 1 — Foundation
**Phụ thuộc:** P0.11, U.1 (Node 22), U.2 (repo public)
- [ ] P1.1 🤖 Kiểm tra lại phiên bản và docs của Astro, Tailwind, Playwright; ghi vào PROGRESS
- [ ] P1.2 🤖 Khởi tạo Astro (TS strict) bằng pnpm; thêm `@astrojs/react`, `@astrojs/mdx`, `@astrojs/sitemap`, Tailwind v4
- [ ] P1.3 🤖 `astro.config.mjs`: `site`, **`base: '/portfolio'`**, `trailingSlash: 'always'`, `build.format: 'directory'`; alias `@/`
- [ ] P1.4 🤖 Helper `withBase()` (link nội bộ và asset `public/`)
- [ ] P1.5 🤖 ESLint (TS, astro, jsx-a11y) + Prettier; scripts `dev`, `build`, `preview`, `check`, `lint`, `format`
- [ ] P1.6 🤖 Cây thư mục theo PLAN §7.1 (chỉ khung)
- [ ] P1.7 🤖 Trang "coming soon" (`noindex`) + `404.astro`
- [ ] P1.8 🤖 `.github/workflows/deploy.yml` (push `main` → Pages) và `ci.yml` (PR)
- [ ] P1.9 🤖 Guard từ khoá cấm: `scripts/check-confidential` + pre-commit hook (đọc `private/confidential-terms.txt`) + bước CI (đọc secret `CONFIDENTIAL_TERMS`)
- [ ] P1.9b 👤 Tạo `private/confidential-terms.txt` (mỗi dòng một từ khoá, Claude soạn sẵn nội dung) + thêm secret `CONFIDENTIAL_TERMS` trên GitHub
- [ ] P1.9c 🤖 Kiểm tra `git status` và guard; trình bày danh sách file sẽ commit (gồm 4 planning docs) để anh duyệt
- [ ] P1.10 👤 Commit và push (hoặc cho phép Claude commit); Settings → Pages → Source: GitHub Actions
- [ ] P1.11 👤🤖 Xác nhận `https://lekhanhdat.github.io/portfolio/` hoạt động (CSS/asset đúng base)
- [ ] P1.12 🤖 Cập nhật PROGRESS / TASKLIST

**Acceptance:** build/check sạch ở local và CI; trang coming soon live tại `/portfolio/` với asset load đúng; repo không có file private.

## Phase 2 — Design System
- [ ] P2.1 🤖 Tokens light/dark + kiểm tra contrast AA
- [ ] P2.2 🤖 Fonts Geist (self-host, preload) + fluid type scale
- [ ] P2.3 🤖 Theme: script inline chống flash + `ThemeToggle` island
- [ ] P2.4 🤖 Primitives `.tsx`: Button/LinkButton, Tag, Badge, SpecList, Callout, Container, Section, SectionHeader
- [ ] P2.5 🤖 `MediaPlaceholder`, `DeviceFrame` (browser/phone), `SchematicFigure` (3 biến thể)
- [ ] P2.6 🤖 SkipLink, SiteHeader, MobileNav island, SiteFooter
- [ ] P2.7 🤖 Reveal-on-scroll (có hỗ trợ reduced motion)
- [ ] P2.8 🤖 `/styleguide/` (noindex, loại khỏi sitemap)
- [ ] P2.9 👤 Duyệt look & feel trên site live
- [ ] P2.10 🤖 Cập nhật PROGRESS / TASKLIST

## Phase 3 — Home
- [ ] P3.1 🤖 `data/profile.ts` (availability), `experience.ts` (thời gian theo CV), `skills.ts`, `education.ts`, `navigation.ts`
- [ ] P3.2 🤖 Hero + dải spec (1.5+ years, Open to work)
- [ ] P3.3 🤖 Summary (IMG-01 placeholder)
- [ ] P3.4 🤖 Work Experience (AvePoint, MIND Technology; chip link dự án; total 1.5+ years)
- [ ] P3.5 🤖 Company Projects preview (4 card, thứ tự C1 → C2 → C3 → C4)
- [ ] P3.6 🤖 Personal Project band (Travel, IMG-02/03 placeholder)
- [ ] P3.7 🤖 Skills, Education, Contact / Open to Work
- [ ] P3.8 🤖 Active-section nav; responsive 360 → 1440
- [ ] P3.9 👤 Duyệt bố cục và copy nháp
- [ ] P3.10 🤖 Cập nhật PROGRESS / TASKLIST

## Phase 4 — Projects System
- [ ] P4.1 🤖 `content.config.ts`: collections `company-projects`, `personal-projects` (PLAN §7.2)
- [ ] P4.2 🤖 `ProjectCard`, `ProjectIndexTable`
- [ ] P4.3 🤖 `/company-projects/` index + `[slug]` (brief template + confidentiality Callout + prev/next)
- [ ] P4.4 🤖 `/personal-projects/` index + `[slug]` (case study template: sticky TOC, `FlowSteps`, `ScreenshotGallery`)
- [ ] P4.5 🤖 5 file MDX khung (draft) với nội dung đã xác minh
- [ ] P4.6 🤖 Kiểm tra CI: grep tên khách hàng trong `src/` phải không có kết quả
- [ ] P4.7 🤖 Cập nhật PROGRESS / TASKLIST

## Phase 5 — Content
- [ ] P5.1 🤖 Đối chiếu lại source Travel mới nhất (điểm nối chat UI ↔ RAG) trước khi viết
- [ ] P5.2 🤖 Case study Travel đầy đủ (PLAN §5.3)
- [ ] P5.3 🤖 Briefs: Data Lifecycle Management, Factory Manufacturing Monitoring, Paper Mill OEE, Energy Management System
- [ ] P5.4 🤖 Copy EN: Summary, Experience bullets, Contact
- [ ] P5.5 👤 Duyệt nội dung (bảo mật và tính trung thực)
- [ ] P5.6 🤖 Cập nhật PROGRESS / TASKLIST

## Phase 6 — Media
- [ ] P6.1 🤖 Thay placeholder bằng ảnh thật (U.M*) qua `astro:assets`; sơ đồ từ slide (IMG-F*, IMG-A1)
- [ ] P6.2 🤖 Alt text chính thức; poster và captions cho video
- [ ] P6.3 👤 Duyệt ảnh (không lộ dữ liệu thật hay tên khách hàng)
- [ ] P6.4 🤖 Cập nhật PROGRESS / TASKLIST

## Phase 7 — Quality
- [ ] P7.1 🤖 `<Seo>`, JSON-LD, sitemap, robots, OG
- [ ] P7.2 🤖 Playwright: mọi route, link đúng base, nav, theme, menu, copy email, gallery, trang 404
- [ ] P7.3 🤖 axe cho cả 2 theme; thêm vào CI
- [ ] P7.4 🤖 Lighthouse mobile ≥ 95
- [ ] P7.5 👤 Test trên thiết bị thật
- [ ] P7.6 🤖 Cập nhật PROGRESS / TASKLIST

## Phase 8 — Launch
- [ ] P8.1 🤖 Bỏ `noindex`; kiểm tra cuối
- [ ] P8.2 👤 Google Search Console + submit sitemap
- [ ] P8.3 👤 Cập nhật link trên LinkedIn, GitHub profile, CV; bật Open to Work trên LinkedIn
- [ ] P8.4 🤖 Ghi ngày launch

---

## 👤 Việc người dùng cần làm
**Trước Phase 1**
- [x] U.1a Cài Node 22 (đã có v22.11.0)
- [x] U.1b Nâng Node lên v22.23.4 (đạt yêu cầu ≥ 22.23.4 của Astro 7.4)
- [x] U.1c pnpm 12.15.0 qua corepack
- [x] U.2 Repo `lekhanhdat/portfolio` đã Public
- [ ] U.3 Backup `PROJECT_CONTENT.md` + `input/` (cloud drive hoặc repo private riêng) — hai mục này không lên repo public

**Nội dung (trước Phase 5)**
- [ ] U.4 Q-T7: 2–4 thách thức kỹ thuật thật của Travel + lessons learned
- [ ] U.5 Q-N1…Q-N5 (PROGRESS §4)

**Media (trước Phase 6)**
- [ ] U.M1 Portrait 4:5 (≥ 1200×1500)
- [ ] U.M2 Dashboard Travel: 5–6 ảnh chụp 1440×900 @2x
- [ ] U.M3 Mobile Travel: 8–10 ảnh 1080×2340
- [ ] U.M4 Sơ đồ từ slide: semantic search, RAG, camera, kiến trúc (PNG/SVG ≥ 1920px)
- [ ] U.M5 Video demo 60–90 giây (tuỳ chọn)
- [ ] U.M6 `resume.pdf` bản public (khuyến nghị bỏ số điện thoại; title "Frontend Software Developer")
- [ ] U.M7 (Tuỳ chọn) ảnh dự án công ty nếu được phép, không có tên hay logo khách hàng
