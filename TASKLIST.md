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
**Trạng thái: ✅ HOÀN THÀNH (2026-10-23, đã deploy và duyệt)**
- [x] P3.1 🤖 `data/`: `profile.ts`, `experience.ts` (thời gian theo CV), `projects.ts` (dữ liệu card), `skills.ts`, `education.ts`, `navigation.ts` (`sectionIds`)
- [x] P3.2 🤖 Hero + dải spec (1.5+ years, Open to work + hình thức/địa điểm); CTA tới anchor; nút Résumé ẩn tới khi có PDF (U.M6)
- [x] P3.3 🤖 Summary (IMG-01 placeholder, "How I work", SpecList)
- [x] P3.4 🤖 Work Experience (AvePoint, MIND Technology; chip link tới card dự án; total 1.5+ years)
- [x] P3.5 🤖 Company Projects preview: `ProjectCard` + SchematicFigure, thứ tự C1 → C2 → C3 → C4 (chưa có link "Read brief" — thêm ở Phase 4)
- [x] P3.6 🤖 Personal Project band (Travel, IMG-02/03 placeholder trong DeviceFrame, link Live dashboard + GitHub)
- [x] P3.7 🤖 Skills (lưới 3×2), Education (honours, dòng Thesis), Contact / Open to Work (nút Copy email: `src/scripts/copy-email.ts`)
- [x] P3.8 🤖 Active-section nav (`src/scripts/active-section.ts`, `aria-current`); không tràn ngang ở 360 / 768 / 1024 / 1280 / 1440
- [x] P3.9 👤 Duyệt bố cục và copy nháp
- [x] P3.10 🤖 Cập nhật PROGRESS / TASKLIST

## Phase 4 — Projects System
**Trạng thái: ✅ HOÀN THÀNH (2026-10-23, đã duyệt)**
- [x] P4.1 🤖 `content.config.ts`: collections `company-projects`, `personal-projects` (loader `glob`, schema Zod 4; id = tên file = slug; `draft` mặc định `true`)
- [x] P4.2 🤖 `ProjectIndexTable` (bảng từ md, danh sách ở mobile); `ProjectCard` có link "Read brief" (stretched link)
- [x] P4.3 🤖 `/company-projects/` index + `[slug]`: `BriefHeader` (badges, SpecList, Schematic) + MDX + `BriefFooter` (Tech stack, confidentiality Callout, prev/next C1 → C4)
- [x] P4.4 🤖 `/personal-projects/` index + `[slug]`: `CaseStudyHeader`, `AtAGlance`, sticky `CaseStudyToc` (từ lg), `FlowSteps`, `ScreenshotGallery` (placeholder), `CaseStudyFooter` (Links + Next)
- [x] P4.5 🤖 5 file MDX (draft) với nội dung đã xác minh; Home đọc dữ liệu từ collection (bỏ `data/projects.ts`, D26 → D29)
- [x] P4.6 🤖 Anchor Home về kebab-case (`#company-projects`, `#personal-project`, theo yêu cầu 2026-10-23). Link nav: Company/Personal → trang index (ở Home vẫn là anchor), `aria-current="page"`; Hero "See the case study", dòng Thesis, chip Experience → trang chi tiết
- [x] P4.7 🤖 Kiểm tra từ khoá cấm trên CI: guard đã quét toàn bộ file (gồm `src/`) ở cả `ci.yml` và `deploy.yml` — không cần thêm bước
- [x] P4.8 🤖 Cập nhật PROGRESS / TASKLIST
- [x] P4.9 👤 Duyệt các trang dự án ở local (bố cục + câu chữ brief/case study)

## Phase 5 — Content
**Trạng thái: ✅ HOÀN THÀNH (2026-10-23, đã duyệt)**
- [x] P5.1 🤖 Ảnh minh hoạ RAG: đã có (slide 10, bản tiếng Anh)
- [x] P5.2 🤖 Case study Travel: số liệu 9,3 triệu + nguồn; 3 sơ đồ AI; Architecture chỉ mô tả bằng chữ (At launch / Now, không dùng ảnh slide 8); Challenges & lessons
- [x] P5.3 🤖 4 brief C1–C4 rút gọn, tổng quát theo D35 (bỏ chi tiết UI quá cụ thể)
- [x] P5.4 🤖 Copy EN Summary / Experience / Contact / meta: rà lại theo CV mới (Sep 2026, nội dung trùng bản cũ) — không cần sửa
- [x] P5.4b 🤖 Ảnh chân dung (IMG-01, crop 4:5, bỏ EXIF) + `public/resume.pdf`; nút Résumé hiện ở header, Hero, Contact (tên file tải về `Le-Khanh-Dat-Resume.pdf`)
- [x] P5.5 👤 Duyệt nội dung → đã bỏ `draft` ở 5 file MDX
- [x] P5.7 🤖 Đổi chức danh toàn project sang "Frontend Software Engineer" (không dùng "Developer"); Résumé: xem (tab mới) + tải PDF
- [x] P5.6 🤖 Cập nhật PROGRESS / TASKLIST

## Phase 6 — Media
**Trạng thái: ✅ HOÀN THÀNH (2026-10-23, đã duyệt)**
- [x] P6.0 🤖 Sơ đồ 3 luồng AI từ slide (IMG-F1…F3)
- [x] P6.1 🤖 11 ảnh Travel (5 dashboard + 6 mobile) → `src/assets/images/personal/da-nang-smart-tourism/`; showcase (browser + phone) ở Home, `/personal-projects/`, header case study; gallery case study (bấm mở bản đầy đủ, không dùng lightbox JS)
- [x] P6.2 🤖 Alt text tiếng Anh cho mọi ảnh; nhãn gallery cập nhật theo ảnh thật (Map + Route thay cho Donation QR). Không có video (U.M5 tuỳ chọn)
- [x] P6.3 👤 Duyệt ảnh (giữ cả ảnh Transactions)
- [x] P6.4 🤖 Cập nhật PROGRESS / TASKLIST; `resume.pdf` thay bằng bản mới (thêm link Portfolio)

## Phase 7 — Quality
**Trạng thái: code xong, đã kiểm tra local; còn P7.5 (anh test thiết bị thật)**
- [x] P7.1 🤖 `Seo.astro` (title, description, canonical, robots, Open Graph, Twitter card) + JSON-LD (`src/lib/seo.ts`: Person + WebSite ở Home, CreativeWork ở trang dự án); ảnh OG `public/og/default.png` (1200×630); sitemap giữ nguyên
- [x] P7.2 🤖 Playwright (`tests/e2e/`, desktop + Pixel 7): mọi route, link/asset đúng base và trả 200, nav + `aria-current`, theme, menu mobile, copy email, résumé, gallery, prev/next, trang 404, JSON-LD — chạy trên `dist/` qua `scripts/serve-dist.mjs` (giả lập GitHub Pages)
- [x] P7.3 🤖 axe (WCAG 2.0/2.1/2.2 A–AA + best-practice) cho 9 trang × 2 theme × 2 thiết bị → 0 lỗi (đã sửa: tên link logo khớp chữ hiển thị); CI chạy check + build + e2e khi push `dev` và khi mở PR
- [x] P7.4 🤖 Lighthouse mobile: Performance 98–100, Accessibility 100, Best practices 100, CLS 0; SEO 63–66 chỉ vì `noindex` (đạt khi bỏ ở P8.1)
- [ ] P7.5 👤 Test trên thiết bị thật (điện thoại + máy tính, cả 2 theme)
- [x] P7.6 🤖 Cập nhật PROGRESS / TASKLIST

## Phase 8 — Launch
- [ ] P8.1 🤖 Bỏ `noindex`; đặt `SHOW_DRAFTS = false` (`src/lib/projects.ts`); kiểm tra cuối
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
- [x] U.4 Q-T7: anh giao Claude tự viết từ lịch sử commit (2026-10-23) → đã có bản nháp 4 mục, anh duyệt ở P5.5
- [ ] U.5 Q-N1…Q-N4 (PROGRESS §4) — đều có mặc định, không chặn

**Media (trước Phase 6)**
- [x] U.M1 Portrait 4:5 (≥ 1200×1500)
- [x] U.M2 Dashboard Travel: 5 ảnh (1920×~925)
- [x] U.M3 Mobile Travel: 6 ảnh
- [x] U.M4 Sơ đồ từ slide: semantic search, RAG, camera (kiến trúc: chỉ mô tả bằng chữ, D37)
- [ ] U.M5 Video demo 60–90 giây (tuỳ chọn)
- [x] U.M6 `resume.pdf` (bản CV Sep 2026, giữ nguyên — anh đồng ý public SĐT)
- [ ] U.M7 (Tuỳ chọn) ảnh dự án công ty nếu được phép, không có tên hay logo khách hàng
