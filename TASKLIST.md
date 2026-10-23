# TASKLIST — Portfolio Le Khanh Dat (v3)

> `[x]` xong · `[ ]` chưa làm · `[~]` đang làm · `[!]` bị chặn · 👤 người dùng làm · 🤖 Claude làm
> Quy tắc: **chỉ làm một Phase mỗi lần**. Kết thúc Phase → cập nhật file này và PROGRESS.md → chờ duyệt.

## Phase 0 — Research & Planning
- [x] P0.1–P0.8 🤖 Phân tích CV, slide, 7 codebase (read-only), thông tin công ty, stack; tạo tài liệu (rev. 1–2)
- [x] P0.9 👤 Trả lời các câu hỏi chặn (16 xác nhận ngày 2026-10-22)
- [x] P0.10 🤖 (rev. 3) Áp dụng xác nhận; tạo `.gitignore`; gỡ các file private khỏi git staging
- [x] P0.11 👤 Duyệt PLAN v3 (các câu hỏi còn mở chuyển sang U.4 / U.5)

## Phase 1 — Foundation
**Phụ thuộc:** P0.11, U.1 (Node 22), U.2 (repo public) — ✅ · **Trạng thái: ✅ HOÀN THÀNH (2026-10-22)**
- [x] P1.1 🤖 Kiểm tra phiên bản và peer dependencies (TS 7 không tương thích → dùng TS 6.0.3; ESLint 10 → dùng `eslint-plugin-jsx-a11y-x`)
- [x] P1.2 🤖 Khởi tạo Astro 7.4.2 bằng pnpm; `@astrojs/react`, `@astrojs/mdx`, `@astrojs/sitemap`, Tailwind 4.3.3
- [x] P1.3 🤖 `astro.config.mjs`: `site`, `base: '/portfolio'`, `trailingSlash: 'always'`, `build.format: 'directory'`; alias `@/`; tsconfig strict
- [x] P1.4 🤖 `withBase()` (`src/lib/with-base.ts`) + `cn()`
- [x] P1.5 🤖 ESLint 10 + Prettier; scripts `dev`, `build`, `preview`, `typecheck`, `lint`, `format`, `check`, `check:confidential`
- [x] P1.6 🤖 Cây thư mục theo PLAN §7.1 (`.gitkeep`)
- [x] P1.7 🤖 Trang "coming soon" (`noindex`) + `404.astro` (không có canonical); token màu cơ bản trong `global.css`
- [x] P1.8 🤖 `.github/workflows/deploy.yml` (push `main` → Pages) và `ci.yml` (PR)
- [x] P1.9 🤖 Guard `scripts/check-confidential.mjs` (không phân biệt hoa/thường và dấu, có word boundary, không in từ khoá ra log) + `.githooks/pre-commit` + bước CI
- [x] P1.9b 🤖👤 `private/confidential-terms.txt` (local) + secret `CONFIDENTIAL_TERMS` trên GitHub
- [x] P1.9c 🤖 `git status` + guard sạch; danh sách file commit đã trình bày
- [x] P1.10 👤 Commit → push `dev` → PR #1 merge vào `main`; Pages Source = GitHub Actions
- [x] P1.11 👤🤖 Site live tại `https://lekhanhdat.github.io/portfolio/` (run 2 thành công; lần 1 lỗi 404 vì lúc đó Pages chưa bật)
- [x] P1.12 🤖 Cập nhật PROGRESS / TASKLIST

**Acceptance:** build/check sạch ở local và CI; trang coming soon live tại `/portfolio/` với asset load đúng; repo không có file private.

## Phase 2 — Design System
**Trạng thái: ✅ HOÀN THÀNH (2026-10-23, PR #2 — đã deploy và duyệt)**
- [x] P2.1 🤖 Tokens light/dark (+ `--border-control` cho viền control ≥ 3:1); contrast AA: mọi cặp chữ/nền 4.8–17.3:1
- [x] P2.2 🤖 Fonts Geist Sans/Mono qua Astro Fonts API (provider `local`, latin + latin-ext, preload Geist, fallback tối ưu) + fluid type scale
- [x] P2.3 🤖 Theme: script inline chống flash + `ThemeToggle` (markup TSX tĩnh + `src/scripts/theme.ts`, theo OS cho tới khi người dùng chọn)
- [x] P2.4 🤖 Primitives `.tsx`: Button/LinkButton, Tag/TagList, Badge, SpecList (row/stack), Callout, Container, Section, SectionHeader, BrandIcon
- [x] P2.5 🤖 `MediaPlaceholder`, `DeviceFrame` (browser/phone), `SchematicFigure` (dashboard-grid, data-table-workflow, mobile-web-pair)
- [x] P2.6 🤖 SkipLink, SiteHeader (viền hairline khi cuộn), MobileNav (`<dialog>` native), SiteFooter
- [x] P2.7 🤖 Reveal-on-scroll (IntersectionObserver, chỉ chạy khi có JS, tắt khi reduced motion)
- [x] P2.8 🤖 `/styleguide/` (noindex, không có trong sitemap)
- [x] P2.9 👤 Duyệt look & feel trên site live: `/portfolio/` và `/portfolio/styleguide/`
- [x] P2.10 🤖 Cập nhật PROGRESS / TASKLIST

## Phase 3 — Home
**Trạng thái: code xong, đã kiểm tra local; chờ anh duyệt bố cục và copy (P3.9)**
- [x] P3.1 🤖 `data/`: `profile.ts`, `experience.ts` (thời gian theo CV), `projects.ts` (dữ liệu card), `skills.ts`, `education.ts`, `navigation.ts` (`sectionIds`)
- [x] P3.2 🤖 Hero + dải spec (1.5+ years, Open to work + hình thức/địa điểm); CTA tới anchor; nút Résumé ẩn tới khi có PDF (U.M6)
- [x] P3.3 🤖 Summary (IMG-01 placeholder, "How I work", SpecList)
- [x] P3.4 🤖 Work Experience (AvePoint, MIND Technology; chip link tới card dự án; total 1.5+ years)
- [x] P3.5 🤖 Company Projects preview: `ProjectCard` + SchematicFigure, thứ tự C1 → C2 → C3 → C4 (chưa có link "Read brief" — thêm ở Phase 4)
- [x] P3.6 🤖 Personal Project band (Travel, IMG-02/03 placeholder trong DeviceFrame, link Live dashboard + GitHub)
- [x] P3.7 🤖 Skills (lưới 3×2), Education (honours, dòng Thesis), Contact / Open to Work (nút Copy email: `src/scripts/copy-email.ts`)
- [x] P3.8 🤖 Active-section nav (`src/scripts/active-section.ts`, `aria-current`); không tràn ngang ở 360 / 768 / 1024 / 1280 / 1440
- [ ] P3.9 👤 Duyệt bố cục và copy nháp (sau khi anh commit + merge `main`, xem trên site live)
- [x] P3.10 🤖 Cập nhật PROGRESS / TASKLIST

## Phase 4 — Projects System
- [ ] P4.1 🤖 `content.config.ts`: collections `company-projects`, `personal-projects` (PLAN §7.2)
- [ ] P4.2 🤖 `ProjectIndexTable`; thêm `href` (Read brief) cho `ProjectCard` đã có từ Phase 3
- [ ] P4.3 🤖 `/company-projects/` index + `[slug]` (brief template + confidentiality Callout + prev/next)
- [ ] P4.4 🤖 `/personal-projects/` index + `[slug]` (case study template: sticky TOC, `FlowSteps`, `ScreenshotGallery`)
- [ ] P4.5 🤖 5 file MDX khung (draft) với nội dung đã xác minh; slug khớp `data/projects.ts` (D26)
- [ ] P4.6 🤖 Đổi link nav/CTA (Company/Personal, "See the case study", Thesis) sang trang index/case study
- [ ] P4.7 🤖 Kiểm tra CI: grep tên khách hàng trong `src/` phải không có kết quả
- [ ] P4.8 🤖 Cập nhật PROGRESS / TASKLIST

## Phase 5 — Content
- [ ] P5.1 🤖 Nhắc anh cung cấp ảnh minh hoạ RAG (tính năng đã hoàn thành) trước khi viết phần AI workflows
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
- [ ] P7.1 🤖 `<Seo>`, JSON-LD, sitemap, OG (meta robots; không có robots.txt cho project site)
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
