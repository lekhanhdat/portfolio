# PROGRESS — Portfolio Le Khanh Dat

> Cập nhật: **2026-10-23** · 🚀 **LIVE từ 2026-10-23** tại https://lekhanhdat.github.io/portfolio/ · Còn: Search Console (P8.2), link portfolio trên LinkedIn (P8.3)

## 1. Tiến độ
| Phase | Trạng thái |
|---|---|
| 0 Planning | ✅ |
| 1 Foundation | ✅ PR #1 · live tại https://lekhanhdat.github.io/portfolio/ |
| 2 Design System | ✅ PR #2 · đã deploy và duyệt |
| 3 Home | ✅ Đã deploy và duyệt |
| 4 Projects System | ✅ Đã duyệt |
| 5 Content | ✅ Đã duyệt |
| 6 Media | ✅ Đã duyệt |
| 7 Quality | ✅ Hoàn thành (anh đã test thiết bị thật) |
| 8 Launch | 🚀 Live 2026-10-23 (PR #4); còn P8.2, P8.3 (LinkedIn) |
| 9 Polish | ✅ Xong trên `dev`, chờ duyệt |

## 2. Lịch sử
- **rev. 1:** phân tích CV; kế hoạch dùng Next.js + Vercel.
- **rev. 2:** đọc slide; phân tích read-only 7 codebase; xác minh luồng AI và thông tin công ty; chuyển sang Astro + GitHub Pages; tạo PROJECT_CONTENT.md.
- **rev. 3:** áp dụng 16 xác nhận của người dùng.
  - Tạo `.gitignore`; gỡ `input/` và 5 planning docs khỏi git staging (`git rm --cached`, file trên đĩa giữ nguyên).
  - Xác minh chéo số liệu 9,3 triệu lượt khách qua Báo Đà Nẵng.
  - Viết lại PLAN (v3), TASKLIST; cập nhật PROJECT_CONTENT, CLAUDE.
- **rev. 4:** planning docs được commit ở dạng public-safe (mã C1–C4).
- **Phase 1 (2026-10-22):**
  - Khởi tạo Astro 7.4.2 + React 19.3 + TS 6.0.3 strict + Tailwind 4.3.3 + MDX + sitemap; `base: '/portfolio'`; `withBase()`, `cn()`.
  - ESLint 10 (ts strict, astro, jsx-a11y-strict, react-hooks) + Prettier; `.editorconfig`, `.gitattributes`, `.nvmrc`.
  - Trang coming soon + 404; khung thư mục.
  - Guard từ khoá cấm (pre-commit + CI); workflows `ci.yml`, `deploy.yml`.
  - Kiểm tra: `pnpm check` 0/0/0; `pnpm build` 2 trang + sitemap; guard pass (12 từ khoá), test âm tính đúng.
  - Deploy: PR #1 (`dev` → `main`). Lần chạy 1 lỗi `404 Not Found` vì Pages chưa bật; lần 2 thành công, guard chạy với secret.
  - Site live: `/portfolio/`, CSS, favicon, sitemap đều 200; trang 404 tuỳ chỉnh đúng; có canonical; `noindex, nofollow`.
- **Phase 2 (2026-10-23):**
  - Design system: tokens, type scale, fonts, theme light/dark, primitives, media placeholder, device frame, schematic figure, layout (skip link, header, mobile nav, footer), reveal-on-scroll, trang `/styleguide/`.
  - Kiểm tra: `pnpm check` 0/0/0; guard pass; build 3 trang; light/dark và mobile 375px đúng; menu mobile và theme toggle dùng được bằng bàn phím; font Geist tự host.
  - Thêm deps: `@fontsource-variable/geist`, `@fontsource-variable/geist-mono` 5.3.0, `lucide-react` 1.61.0.
  - Deploy: PR #2; anh đã duyệt look & feel.
- **Phase 3 (2026-10-23):**
  - Dọn tài liệu: cập nhật trạng thái PLAN, cây thư mục §7.1, tick P0.11 / sửa P1.10, bỏ ghi chú cũ; RAG được xác nhận đã hoàn thành (Phase 5 chỉ cần nhắc anh cung cấp ảnh minh hoạ).
  - Data: `experience.ts`, `projects.ts`, `skills.ts`, `education.ts`; `navigation.ts` thêm `sectionIds`. Nội dung lấy từ CV và PROJECT_CONTENT (✅/👤), không thêm số liệu.
  - Home gồm 8 section (`src/components/sections/*.tsx`, ghép trong `HomePage.tsx`): Hero, Summary, Experience, Company Projects, Personal Project, Skills, Education, Contact. Header hiện lại nav.
  - Component mới: `ProjectCard` (Schematic + badge Confidential), `SocialLinks` (dùng chung cho Hero và Footer).
  - Script mới: `active-section.ts` (`aria-current` trên link nav), `copy-email.ts` (nút Copy chỉ hiện khi có JS và Clipboard API).
  - Xoá file thừa: `ComingSoon.tsx`, thư mục rỗng `src/hooks/`, các `.gitkeep` ở thư mục đã có file.
  - Kiểm tra: `pnpm check` 0/0/0; ESLint, Prettier sạch; build 3 trang; guard pass.
    - DOM: đúng 1 `h1`; mọi anchor nội bộ có đích; mọi `role="img"` có nhãn; không tràn ngang ở 360 / 768 / 1024 / 1280 / 1440.
    - Active nav: Experience → Contact được đánh dấu đúng ở header và mobile nav; Summary / Education không đánh dấu.
    - JS inline khoảng 3,1 KB (≈1,3 KB gzip) mỗi trang, không tải React runtime.
    - Chưa xem được ảnh chụp toàn trang (pane bị ẩn nên screenshot lỗi) → anh xem trên site live ở P3.9.
    - Chưa xác nhận được lúc copy thành công (pane chặn Clipboard API); nhánh báo lỗi hoạt động đúng.
  - Anh đã deploy và duyệt.
- **Phase 4 (2026-10-23):**
  - Content Collections (`src/content.config.ts`): `company-projects`, `personal-projects`; id = tên file = slug; mọi entry đang `draft: true`, vẫn hiển thị tới launch qua cờ `SHOW_DRAFTS` (`src/lib/projects.ts`), trang có badge "Draft".
  - 5 file MDX: 4 brief C1–C4 (Overview · My contributions · Product scope · Engineering highlights) và case study Travel (Context → What I'd improve; 3 luồng AI bằng `FlowSteps`). Nội dung chỉ lấy ✅/👤; mục Challenges chờ Q-T7; số liệu 9,3 triệu để Phase 5 (cần URL nguồn đầy đủ).
  - Trang mới: `/company-projects/` (card + bảng chỉ mục), 4 brief (confidentiality Callout, prev/next), `/personal-projects/`, case study (TOC dính cột phải từ lg, gallery placeholder IMG-D1…D5 / IMG-M1…M6, Links, Next).
  - Home đọc từ collection; bỏ `src/data/projects.ts`. Nav: Company/Personal trỏ tới trang index (ở Home vẫn là anchor), có `aria-current="page"`. Hero "See the case study", dòng Thesis, chip Experience trỏ tới trang chi tiết.
  - `active-section.ts` dùng chung cho TOC (heading `h2` kéo dài tới mục kế tiếp).
  - CSS `.prose-content` tự viết cho MDX (không thêm plugin typography).
  - Xoá file thừa: `src/data/projects.ts`, `.gitkeep` trong `src/content/*`.
  - Kiểm tra: `pnpm check` 0/0/0; ESLint, Prettier sạch; build 10 trang; guard pass; sitemap 8 URL (không có styleguide/404).
    - Audit `dist/`: không có link nội bộ / anchor hỏng; mỗi trang 1 `h1`; mọi trang `noindex`; nav đánh dấu đúng trang.
    - Không tràn ngang ở 360 / 768 / 1440 trên Home, 2 index, brief, case study.
    - TOC case study đánh dấu đúng cả 12 mục; ảnh chụp brief và case study hiển thị đúng bố cục.
  - Đưa sơ đồ AI vào tài nguyên (2026-10-23, D36): 3 file `flow-*.png` trong `src/assets/images/personal/da-nang-smart-tourism/`, chèn bằng `<Image>` của `astro:assets` ngay trong MDX (không qua React). Build pass; trang chỉ tải WebP 13–72 KB mỗi sơ đồ.
  - Bổ sung theo yêu cầu (2026-10-23):
    - Anchor Home về kebab-case: `#company-projects`, `#personal-project` (khớp PLAN §4.1).
    - Case study: thêm số liệu "nearly 9.3 million visitor stays…" kèm link Báo Đà Nẵng (đã đối chiếu bài gốc ngày 05/11/2024, nguồn Cục Thống kê Đà Nẵng).
    - Mục Challenges & lessons (4 mục) viết từ lịch sử commit + tài liệu trong các repo Travel (đọc read-only): đồng bộ index tìm kiếm, giới hạn của data backend, gọi AI chậm/tốn phí, đưa dự án lên hạ tầng mới. Không nêu credential, mã project cloud hay số tiền.
    - Audit lại `dist/`: không link/anchor hỏng; check, build, guard pass.

- **Phase 5 (2026-10-23):**
  - Ảnh chân dung: crop 4:5 (1200×1500), bỏ EXIF → `src/assets/images/profile/portrait.jpg`; React nhận ảnh đã tối ưu qua `getImage()` (`src/lib/image.ts`), xuất WebP 320/480/640.
  - Résumé: `public/resume.pdf` (CV Sep 2026); `profile.resumePath` bật nút Résumé ở header, Hero, Contact.
  - Case study: Architecture mô tả bằng chữ (At launch: 4 lớp; Now: Cloud Run + Neon) thay cho placeholder IMG-A1; nhãn link sơ đồ gọn lại.
  - 4 brief C1–C4 rút gọn, tổng quát (D35): bỏ chi tiết như thao tác timeline, hướng điều hướng, phiên bản API, guard tài khoản.
  - Copy Summary / Experience / Contact: đối chiếu CV mới — nội dung CV không đổi, không cần sửa.
  - Kiểm tra: `pnpm check` 0/0/0; build 10 trang; guard pass; portrait tải WebP 320px; `resume.pdf` 200 `application/pdf`; không tràn ngang ở 360 / 768 (Home, case study, brief).
  - Sau duyệt (2026-10-23): đổi chức danh toàn project → "Frontend Software Engineer" (code, MDX, docs, `package.json`; vai trò: Frontend engineer / Mobile engineer / Lead engineer); Résumé: header + Hero "View résumé" mở PDF ở tab mới, Contact thêm "Download PDF"; bỏ `draft` ở 5 MDX. Build không còn chữ "developer" và badge Draft.

- **Phase 6 (2026-10-23):**
  - 11 ảnh Travel anh cung cấp: 5 dashboard (overview, locations, form modal, reviews, transactions) + 6 mobile (home, AI search, map, route, AI camera, chat assistant).
  - Schema: thêm `showcase` (ảnh browser + phone); `gallery[].image` có ảnh thật. `src/lib/image.ts`: `resolveShowcase()`, `resolveGallery()` tạo WebP nhiều kích thước ở trang `.astro`, truyền props xuống React (D38). Placeholder vẫn tự hiện nếu entry chưa có ảnh.
  - Gallery: mỗi ảnh là link mở bản gốc ở tab mới — thay cho lightbox, không cần React island (D40).
  - `resume.pdf` thay bằng bản mới (chỉ thêm dòng link Portfolio).
  - Kiểm tra: `pnpm check` 0/0/0; build 10 trang; guard pass; 65 URL ảnh / link ảnh trả 200; mọi `<img>` có alt; không tràn ngang ở 360 / 768 / 1440 (Home, `/personal-projects/`, case study).

- **Phase 7 (2026-10-23):**
  - SEO: `src/components/seo/Seo.astro` + `src/lib/seo.ts`; OG/Twitter card cho mọi trang; JSON-LD Person + WebSite (Home), CreativeWork (5 trang dự án); 404 không canonical, không JSON-LD; ảnh OG 1200×630 (21 KB) tạo một lần bằng sharp theo token màu dark.
  - Test: Playwright 1.64 + `@axe-core/playwright` 4.14 (devDeps, D41). `scripts/serve-dist.mjs` phục vụ `dist/` như GitHub Pages (base `/portfolio/`, 404.html, status 404) — không đụng `pnpm preview` đang chạy. Scripts: `pnpm test:e2e`, `pnpm test` (build + e2e).
  - Kết quả: 71 passed / 5 skipped (test chỉ dành cho desktop hoặc mobile) trên desktop + Pixel 7; axe 0 vi phạm ở 9 trang × 2 theme.
  - Sửa a11y: link logo header dùng chữ hiển thị làm tên ("LKD Le Khanh Dat — home"), bỏ `aria-label` lệch (WCAG 2.5.3).
  - Hiệu năng: bỏ reveal ở Hero (chữ trên màn hình đầu hiện ngay), `fetchpriority="high"` cho ảnh showcase đầu trang, nhúng CSS vào HTML (`inlineStylesheets: 'always'`, CSS ~7 KB gzip) → hết request chặn render.
  - Lighthouse mobile (`pnpm dlx lighthouse@12`, không cài vào project): Perf 98–100 · A11y 100 · Best practices 100 · CLS 0 · LCP 1,65–1,95s ở trang chữ, 2,1–2,3s ở 2 trang mở đầu bằng ảnh dashboard. SEO 63–66 chỉ do `noindex`.
  - CI (`ci.yml`): chạy khi push `dev` và PR; thêm cài Chromium + `pnpm test:e2e`, upload `test-results/` khi lỗi (`upload-artifact@v7`).
  - Xoá file thừa: `tests/e2e/.gitkeep`, kết quả Lighthouse/test tạm.

- **Phase 8 (2026-10-23):**
  - Bỏ `noindex` mặc định (`BaseLayout`); chỉ 404 và `/styleguide/` còn `noindex` (styleguide vẫn ngoài sitemap). `SHOW_DRAFTS = false`; bỏ badge Draft (không còn được render).
  - Test cập nhật: trang thật không có meta robots; 404 + styleguide có `noindex`; sitemap chứa đủ 8 route, không có styleguide.
  - `deploy.yml`: chạy thêm Playwright + axe trước khi upload — test đỏ thì không deploy.
  - Kiểm tra cuối: `pnpm check` 0/0/0; build 10 trang; 73 passed / 5 skipped; guard pass; sitemap 8 URL.
  - Chưa đo lại Lighthouse sau khi bỏ `noindex` (lệnh bị chặn trong phiên); trước đó audit SEO duy nhất trượt là `is-crawlable` do `noindex`.
  - **Launch 2026-10-23:** anh merge PR #4 (`dev` → `main`). Kiểm tra site live: 8 trang + `resume.pdf` + sitemap + ảnh OG trả 200; đường dẫn sai trả 404; trang thật không có meta robots.

- **Phase 9 — Polish (2026-10-23):**
  - Header: bỏ logo LKD (bỏ luôn `profile.initials`); link "Personal Project" trỏ thẳng tới case study ở mọi trang.
  - Home full-page: `Section` có prop `fullPage` (min-height = viewport − header, nội dung căn giữa, `snap-start`); Hero và Personal project dùng chung class. `BaseLayout` nhận `snap` → `html[data-snap]`. Catalog `SectionCatalog.tsx` (8 mục, dùng lại `active-section.ts`).
  - Bố cục để vừa 1 màn hình ở 1440×900: Experience 2 cột; card công ty dạng compact (4 cột từ xl, ẩn sơ đồ dưới xl, nút "All company projects" lên ngang tiêu đề); padding section gọn hơn.
  - `SpecList` row thiết kế lại; Section có thêm slot `action`.
  - Education: 2 ảnh tốt nghiệp (`graduation-ceremony.jpg`, `graduation-diploma.jpg`), resize 1600px, bỏ EXIF, làm mờ dòng mã sinh viên; crop 4:5 bằng `object-position`, bấm để mở ảnh gốc.
  - Contact: "Email me" (`mailto:`) + "Copy address" tách riêng; nhóm "Profiles & résumé".
  - Nội dung: rút gọn Hero, Summary, highlight Experience (AvePoint 3 ý, MIND 4 ý; thêm Vite vào stack), summary + thân bài 4 brief, case study (Challenges theo Problem / Fix / Lesson). Không thêm dữ kiện mới.
  - Test: thêm test catalog + Personal Project → case study; test email kiểm tra `mailto:` và nút Copy address.
  - Kiểm tra: `pnpm check` 0/0/0; build 10 trang; guard pass; e2e 75 passed / 7 skipped (axe 0 vi phạm, 2 theme); không tràn ngang ở 1440 / 1280 / 768 / 390. Ở 1440×900 cả 8 section vừa đúng 1 màn hình; ở 1280×720 Summary / Experience / Company projects dài hơn màn hình ~100px (vẫn cuộn được bên trong section).
  - Vòng 2 (theo phản hồi):
    - Gộp Summary vào Intro: trái là pitch + tóm tắt + CTA (đã bỏ "Focus" và "How I work" theo yêu cầu), phải là chân dung + bảng thông tin (Experience, Based in, Education, English, Status). Xoá `Summary.tsx`; Home còn 7 section, đánh số 01–06; catalog 7 mục.
    - Education: dùng 2 ảnh gốc anh tự thay (không che, không crop), xếp chồng theo khổ ngang 3:2. `toResponsiveImage` nhận `quality`; ảnh gốc > 2000px không bao giờ thành ứng viên srcset (xuất WebP q90 480/960/1440, 38–324 KB); link vẫn mở JPEG gốc. EXIF không có GPS.
    - Header: "Company Projects" luôn mở `/company-projects/`; bỏ cơ chế `homeHref`.
    - `SchematicFigure`: 4 variant mới, mỗi dự án một hình (D45), có nhãn mono ngắn nêu module, không có số liệu.
    - Bỏ `SiteFooter` khỏi toàn site; thêm `BackToTop` (nút tròn cố định góc phải, hiện khi cuộn quá 60% màn hình, script trong `header.ts`).
    - Kiểm tra: `pnpm check` 0/0/0; build 10 trang; guard pass; e2e 78 passed / 8 skipped (thêm test Company Projects → index, back-to-top). Ở 1440×900 cả 7 section vừa 1 màn hình; không tràn ngang ở 1440 / 1280 / 390.

## 3. Decision Log
| # | Quyết định | Trạng thái |
|---|---|---|
| D1 | Danh xưng **Frontend Software Engineer** (đổi từ "…Developer" ngày 2026-10-23); không dùng "Junior", không dùng "Developer" | ✅ Chốt |
| D2 | Concept "Spec Sheet" (tokens, Geist, motion tiết chế) | ✅ Duyệt cùng Phase 2 |
| D3 | **Astro 7 + React 19 + TS + Tailwind v4 + MDX**, Node 22, pnpm | ✅ Chốt (U#6, U#9) |
| D4 | Repo `lekhanhdat/portfolio` → **`https://lekhanhdat.github.io/portfolio/`** (`base: '/portfolio'`); không dùng custom domain | ✅ Chốt (U#1) |
| D5 | Tổng kinh nghiệm **"1.5+ years"**; thời gian theo công ty lấy từ CV (AvePoint Feb 2026–Sep 2026, MIND Feb 2025–Jan 2026); **không** có thời gian theo dự án | ✅ Chốt (U#2) |
| D6 | **Tách trang** `/company-projects/` và `/personal-projects/`. Thứ tự company: C1 → C2 → C3 → C4. Khi gộp chung: Travel → C1 → C2 → C3 → C4 | ✅ Chốt (U#4) |
| D7 | Home: Company Projects trước Personal Project (giữ định vị Web) | Đề xuất — có thể đảo (áp dụng ở Phase 3) |
| D8 | Tên mô tả, không nêu tên khách hàng (bảng ở PROJECT_CONTENT §0) | ✅ Chốt (U#7) |
| D9 | Mục "Factory Manufacturing Monitoring" trong CV = chủ yếu C2, có gộp C3 → bullet CV được tính 👤 cho hai dự án | ✅ Chốt (U#8) |
| D10 | Travel: vai trò "Lead engineer — end to end"; README features đã hoàn thành (trừ offline maps); RAG hoạt động; demo dashboard có link | ✅ Chốt (U#11, #13, #14) |
| D11 | Link các repo GitHub bình thường | ✅ Chốt (U#3) |
| D12 | AvePoint: giữ MSSQL/PostgreSQL; **không nhắc tên sản phẩm của AvePoint** | ✅ Chốt (U#15) |
| D13 | Luồng AI dùng sơ đồ từ slide (anh cung cấp sau); trong lúc chờ dùng `FlowSteps` HTML | ✅ Chốt (U#5) |
| D14 | ~~Planning docs gitignored~~ → **Commit PLAN/TASKLIST/PROGRESS/CLAUDE** ở dạng public-safe (mã C1–C4); chỉ `input/`, `PROJECT_CONTENT.md`, `private/` bị gitignore; thêm guard từ khoá cấm ở Phase 1 | ✅ Chốt (yêu cầu 2026-10-22) |
| D15 | Open to Work: Hero + Contact, một cờ `availability` | Đề xuất (áp dụng ở Phase 3) |
| D16 | Placeholder trung tính, không UI giả; company dùng SchematicFigure | ✅ Chốt |
| D17 | **TypeScript 6.0.x** thay vì 7.x — `@astrojs/check` (^5 \|\| ^6) và `typescript-eslint` (<6.1) chưa hỗ trợ TS 7 | ✅ Phase 1 |
| D18 | `eslint-plugin-jsx-a11y-x` thay cho `eslint-plugin-jsx-a11y` — Bản gốc chưa hỗ trợ ESLint 10; fork được `eslint-plugin-astro` công nhận | ✅ Phase 1 |
| D19 | Không dùng `robots.txt`; dùng meta robots — Project site không kiểm soát được `/robots.txt` ở gốc host | ✅ Phase 1 |
| D20 | Guard không in từ khoá ra log — Log Actions của repo public ai cũng xem được | ✅ Phase 1 |
| D21 | Fonts: Astro Fonts API, provider `local` (file `.woff2` từ `@fontsource-variable/geist*`, latin + latin-ext) — provider `npm` lỗi do đọc qua `file://` trên Windows; self-host, không cần mạng | ✅ Phase 2 |
| D22 | Tương tác bằng script thuần TS thay cho React island (ThemeToggle, MobileNav, header) — hydrate React kéo theo khoảng 72 KB gzip | ✅ Phase 2 |
| D23 | Thêm token `--border-control` (light `#858a93`, dark `#666c78`) cho viền nút/control đạt ≥ 3:1 (WCAG 1.4.11); `--border-strong` chỉ dùng trang trí | ✅ Phase 2 |
| D24 | Icon: `lucide-react` (render tĩnh). Logo GitHub/LinkedIn tự nhúng SVG: Primer Octicons (MIT), Simple Icons (CC0), vì lucide v1 đã bỏ icon thương hiệu | ✅ Phase 2 |
| D25 | **Mọi thao tác git ghi lịch sử (commit, push, merge) do anh tự làm**; Claude chỉ sửa working tree | ✅ Chốt (xác nhận lại 2026-10-23) |
| D26 | ~~Dữ liệu card dự án ở `src/data/projects.ts`~~ → thay bằng D29 | Thay thế (Phase 4) |
| D27 | Active-section nav dùng scroll listener + `getBoundingClientRect` thay vì IntersectionObserver — đơn giản, xác định rõ section "hiện tại" (kể cả section không có trong nav), và kiểm thử được | ✅ Phase 3 |
| D28 | ~~Link tạm khi chưa có trang chi tiết~~ → đã đổi sang trang thật ở P4.6 | Hết hiệu lực (Phase 4) |
| D29 | **Content Collections là nguồn dữ liệu duy nhất cho dự án**: Home, index và trang chi tiết cùng đọc qua `src/lib/projects.ts` — tránh trùng dữ liệu giữa `data/` và MDX | ✅ Phase 4 |
| D30 | Entry `draft` vẫn được build và gắn badge "Draft" trong lúc site còn `noindex`; ở launch đặt `SHOW_DRAFTS = false` (P8.1) — để anh duyệt được trang thật trước khi nội dung hoàn chỉnh | ✅ Phase 4 |
| D31 | Layout `.astro` bọc slot MDX bằng thẻ HTML thường (cùng class với `Container`), không đặt slot trong component React — tuân CLAUDE.md §3 | ✅ Phase 4 |
| D32 | Prose MDX dùng CSS `.prose-content` tự viết (≈15 quy tắc) thay cho `@tailwindcss/typography` — không thêm dependency cho vài phần tử | ✅ Phase 4 |
| D33 | Mục Challenges & lessons của Travel do Claude viết từ lịch sử commit và tài liệu repo (anh giao, 2026-10-23); giữ `draft` tới khi anh duyệt | ✅ Phase 4 |
| D34 | Mỗi Phase chỉ push lên `dev` và anh kiểm tra ở local; **chỉ merge `main` một lần khi hoàn thành toàn bộ dự án** | ✅ Chốt (2026-10-23) |
| D35 | **Chỉ Travel được trình bày sâu** (case study, ảnh thật, sơ đồ). Dự án công ty giữ brief ngắn, tổng quát, chỉ dùng SchematicFigure — vì chính sách bảo mật | ✅ Chốt (2026-10-23) |
| D36 | Sơ đồ AI từ slide: semantic search (slide 9); RAG dùng **bản tiếng Anh** (slide 10); AI camera **giữ nguyên ảnh slide 11** (anh quyết). Caption ghi "from my thesis presentation"; riêng camera ghi thêm "the steps below describe the current implementation" vì ảnh ghi OpenAI Vision còn source dùng Google Lens + GPT-4o-mini. Ảnh resize 1920px PNG (~0,75–1 MB), Astro xuất WebP 720/1080/1440; bấm vào để xem bản đầy đủ | ✅ Chốt (2026-10-23) |
| D37 | Không dùng sơ đồ kiến trúc slide 8; mục Architecture chỉ mô tả bằng chữ | ✅ Chốt (2026-10-23) |
| D38 | Ảnh cho component React tạo sẵn bằng `getImage()` ở trang `.astro` rồi truyền props (`ResponsiveImage`) — `<Image>` là component Astro, không render trong React | ✅ Phase 5 |
| D39 | Résumé: nút chính mở PDF ở tab mới (xem được, trình duyệt có sẵn nút tải); Contact có thêm "Download PDF" (`download="Le-Khanh-Dat-Resume.pdf"`) | ✅ Phase 5 |
| D40 | Gallery không dùng lightbox: ảnh link tới bản gốc (tab mới) — giữ site 0 React runtime, bàn phím và screen reader dùng được sẵn | ✅ Phase 6 |
| D41 | Thêm devDeps `@playwright/test` + `@axe-core/playwright` (P7.2–P7.3, đã có trong PLAN). Lighthouse chạy qua `pnpm dlx`, không thêm dependency | ✅ Phase 7 |
| D42 | Nhúng CSS vào HTML (`build.inlineStylesheets: 'always'`) — stylesheet ~7 KB gzip; bỏ một request chặn render, giảm FCP/LCP | ✅ Phase 7 |
| D43 | Full-page scroll ở Home bằng **CSS scroll snap**, không dùng JS bắt sự kiện wheel: chạy trên compositor (mượt), giữ nguyên bàn phím, anchor, screen reader, 0 KB JS. `mandatory` khi màn hình ≥ 1024×640 và không bật reduced motion; còn lại `proximity` để section dài hơn màn hình (mobile) vẫn cuộn tự do | ✅ Phase 9 |
| D45 | Mỗi dự án công ty một sơ đồ riêng (`records-governance`, `production-monitoring`, `digital-factory`, `energy-mobile`) thay cho 3 hình dùng chung; nhãn chỉ nêu module có trong brief, vòng/biểu đồ chỉ minh hoạ — vẫn là SchematicFigure, không mô phỏng UI thật (D16, D35) | ✅ Phase 9 |
| D46 | Bỏ footer toàn site (anh yêu cầu); chỉ giữ nút "Back to top" nổi. Link GitHub/LinkedIn/Email vẫn có ở Intro và Contact | ✅ Phase 9 |
| D44 | Catalog section ở Home: rail cố định bên trái; có nhãn đầy đủ từ 1440px, dưới đó chỉ còn rail (nhãn hiện khi hover/focus); ẩn dưới `md` (mobile dùng menu) | ✅ Phase 9 |
| D43 | CI chạy cả khi push `dev` (không chỉ PR) — anh push `dev` theo từng Phase và chỉ merge `main` ở cuối (D34) | ✅ Phase 7 |
| D44 | Hero không dùng reveal-on-scroll — nội dung màn hình đầu phải hiện ngay (LCP); reveal giữ cho các section bên dưới | ✅ Phase 7 |
| D45 | Launch: trang thật index được; 404 + styleguide giữ `noindex`; entry draft bị loại khỏi build (`SHOW_DRAFTS = false`) | ✅ Phase 8 |
| D46 | `deploy.yml` chạy e2e + axe trước khi deploy — `main` chỉ được merge một lần (D34) nên cổng chặn cuối nằm ở workflow deploy | ✅ Phase 8 |

## 4. Open Questions
| # | Câu hỏi | Mặc định nếu không trả lời |
|---|---|---|
| Q-N1 | Anh ghi "tổng thời gian … Feb 2026 – Sep 2026". Tôi hiểu là **Feb 2025 – Sep 2026** (khớp với 1.5+ years). Đúng không? | Dùng Feb 2025 – Sep 2026; site chỉ ghi "1.5+ years" |
| Q-N2 | Không ghi tên GVHD, không đặt "Graduation thesis" làm badge; chỉ có 1 dòng trong Context ("Began as my graduation thesis at VKU…") và 1 link ở Education. Đồng ý? | Áp dụng đề xuất (Education đã có dòng "Thesis: Da Nang Smart Tourism →") |
| Q-N3 | Có tạo tài khoản demo read-only cho dashboard không? | Không; chỉ ghi "Live dashboard · Admin login required" |
| Q-N4 | Có link thêm repo `travel-admin-frontend` và `travel-admin-backend` không? | Có (đã áp dụng ở case study; cả 3 repo public, kiểm tra 2026-10-23) |
| Q-N5 | ~~Chức danh ở cả 2 công ty~~ | ✅ "Frontend Software Engineer" (D1) |
| Q-T7 | ~~2–4 thách thức kỹ thuật thật của Travel + lessons learned~~ | ✅ Đã có bản nháp từ lịch sử commit (D33); anh duyệt ở P5.5 |
| Q-N6 | ~~`resume.pdf` có SĐT và title "Software Engineer"~~ | ✅ Giữ nguyên, cho xem và tải bình thường (anh đồng ý public SĐT) |

## 5. Ghi chú
- Repo `lekhanhdat/portfolio`: Public. Quy trình: làm trên **`dev`** → anh commit + PR → merge vào `main` → tự động deploy.
- Notice "ubuntu-latest will migrate to Ubuntu 26" trên Actions chỉ mang tính thông báo, không cần xử lý.
- File React runtime (`dist/_astro/client.*.js`, khoảng 220 KB) được build ra nhưng không trang nào tải (D22).
- Các repo dự án cá nhân: anh sẽ refactor; portfolio link bình thường (U#3).
- RAG của Travel đã hoàn thành. Khi viết phần AI workflows (Phase 5), nhắc anh cung cấp ảnh minh hoạ.
- Nút Résumé (header, Hero, Contact) tự hiện khi `profile.resumePath` được đặt (cần U.M6).

## 6. Next Steps
1. 👤 P8.2: Google Search Console — property URL prefix `https://lekhanhdat.github.io/portfolio/`, xác minh bằng file HTML (bỏ vào `public/`) hoặc meta tag (gửi Claude chuỗi `content`), rồi submit `sitemap-index.xml`.
2. 👤 P8.3: LinkedIn — thêm link portfolio vào Contact info (Website · Portfolio) và mục Featured.
3. Sau launch: sửa nội dung trên `dev` → kiểm tra local → merge `main` khi muốn cập nhật site.

### Đo Lighthouse (tuỳ chọn)
```bash
pnpm dlx lighthouse@12 https://lekhanhdat.github.io/portfolio/ --view --form-factor=mobile
```

### Kiểm tra local trước khi push
```bash
pnpm install          # lần đầu hoặc khi lockfile đổi
pnpm check            # astro check + eslint + prettier
pnpm check:confidential
pnpm build
pnpm test:e2e         # Playwright + axe (lần đầu: pnpm exec playwright install chromium)
pnpm preview          # mở http://localhost:4321/portfolio/
```

## 7. Môi trường
Windows 10 · Git Bash · Node 22.23.4 · pnpm 12.15.0 · Python 3.12 · `pdftotext` có, `pdftoppm` không.
Đã cài: astro 7.4.2 · @astrojs/react 7.1.1 · @astrojs/mdx 8.1.1 · @astrojs/sitemap 3.7.4 · react/react-dom 19.3.1 · tailwindcss + @tailwindcss/vite 4.3.3 · typescript 6.0.3 · @astrojs/check 0.9.12 · eslint 10.13.0 · typescript-eslint 8.72.0 · eslint-plugin-astro 3.2.1 · eslint-plugin-jsx-a11y-x 0.2.0 · eslint-plugin-react-hooks 7.1.1 · prettier 3.9.10 · @fontsource-variable/geist(-mono) 5.3.0 · lucide-react 1.61.0. Actions: checkout@v7 · setup-node@v7 · pnpm/action-setup@v6 · upload-pages-artifact@v5 · deploy-pages@v5.
