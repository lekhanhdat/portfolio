# PROGRESS — Portfolio Le Khanh Dat

> Cập nhật: **2026-10-23** · Phase hiện tại: **Phase 3 — Home: code xong, chờ anh commit + duyệt (P3.9)** · Tiếp theo: **Phase 4 — Projects System**

## 1. Tiến độ
| Phase | Trạng thái |
|---|---|
| 0 Planning | ✅ |
| 1 Foundation | ✅ PR #1 · live tại https://lekhanhdat.github.io/portfolio/ |
| 2 Design System | ✅ PR #2 · đã deploy và duyệt |
| 3 Home | 🟡 Code xong + kiểm tra local; chờ commit/deploy + duyệt (P3.9) |
| 4–8 | ⏳ |

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

## 3. Decision Log
| # | Quyết định | Trạng thái |
|---|---|---|
| D1 | Danh xưng **Frontend Software Developer**; không dùng "Junior" | ✅ Chốt |
| D2 | Concept "Spec Sheet" (tokens, Geist, motion tiết chế) | ✅ Duyệt cùng Phase 2 |
| D3 | **Astro 7 + React 19 + TS + Tailwind v4 + MDX**, Node 22, pnpm | ✅ Chốt (U#6, U#9) |
| D4 | Repo `lekhanhdat/portfolio` → **`https://lekhanhdat.github.io/portfolio/`** (`base: '/portfolio'`); không dùng custom domain | ✅ Chốt (U#1) |
| D5 | Tổng kinh nghiệm **"1.5+ years"**; thời gian theo công ty lấy từ CV (AvePoint Feb 2026–Sep 2026, MIND Feb 2025–Jan 2026); **không** có thời gian theo dự án | ✅ Chốt (U#2) |
| D6 | **Tách trang** `/company-projects/` và `/personal-projects/`. Thứ tự company: C1 → C2 → C3 → C4. Khi gộp chung: Travel → C1 → C2 → C3 → C4 | ✅ Chốt (U#4) |
| D7 | Home: Company Projects trước Personal Project (giữ định vị Web) | Đề xuất — có thể đảo (áp dụng ở Phase 3) |
| D8 | Tên mô tả, không nêu tên khách hàng (bảng ở PROJECT_CONTENT §0) | ✅ Chốt (U#7) |
| D9 | Mục "Factory Manufacturing Monitoring" trong CV = chủ yếu C2, có gộp C3 → bullet CV được tính 👤 cho hai dự án | ✅ Chốt (U#8) |
| D10 | Travel: vai trò "Lead developer — end to end"; README features đã hoàn thành (trừ offline maps); RAG hoạt động; demo dashboard có link | ✅ Chốt (U#11, #13, #14) |
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
| D26 | Dữ liệu card dự án cho Home nằm ở `src/data/projects.ts`; trang chi tiết ở Phase 4 dùng Content Collections với slug trùng — Home cần dữ liệu card trước khi có collection; tránh dựng collection dở dang ở Phase 3 | ✅ Phase 3 |
| D27 | Active-section nav dùng scroll listener + `getBoundingClientRect` thay vì IntersectionObserver — đơn giản, xác định rõ section "hiện tại" (kể cả section không có trong nav), và kiểm thử được | ✅ Phase 3 |
| D28 | Trước khi có trang chi tiết (Phase 4): CTA thứ hai của Hero là "See the personal project" (anchor), chip dự án ở Experience trỏ tới card trên Home, card chưa có "Read brief" — không để link chết | ✅ Phase 3 (đổi ở P4.6) |

## 4. Open Questions
| # | Câu hỏi | Mặc định nếu không trả lời |
|---|---|---|
| Q-N1 | Anh ghi "tổng thời gian … Feb 2026 – Sep 2026". Tôi hiểu là **Feb 2025 – Sep 2026** (khớp với 1.5+ years). Đúng không? | Dùng Feb 2025 – Sep 2026; site chỉ ghi "1.5+ years" |
| Q-N2 | Không ghi tên GVHD, không đặt "Graduation thesis" làm badge; chỉ có 1 dòng trong Context ("Began as my graduation thesis at VKU…") và 1 link ở Education. Đồng ý? | Áp dụng đề xuất (Education đã có dòng "Thesis: Da Nang Smart Tourism →") |
| Q-N3 | Có tạo tài khoản demo read-only cho dashboard không? | Không; chỉ ghi "Dashboard requires an admin login" |
| Q-N4 | Có link thêm repo `travel-admin-frontend` và `travel-admin-backend` không? | Có (áp dụng ở Phase 4/5) |
| Q-N5 | Chức danh hiển thị ở cả 2 công ty là "Frontend Software Developer"? | Có (đang dùng ở Experience) |
| Q-T7 | 2–4 thách thức kỹ thuật thật của Travel + lessons learned | Chặn mục 10 của case study (Phase 5) |

## 5. Ghi chú
- Repo `lekhanhdat/portfolio`: Public. Quy trình: làm trên **`dev`** → anh commit + PR → merge vào `main` → tự động deploy.
- Notice "ubuntu-latest will migrate to Ubuntu 26" trên Actions chỉ mang tính thông báo, không cần xử lý.
- File React runtime (`dist/_astro/client.*.js`, khoảng 220 KB) được build ra nhưng không trang nào tải (D22).
- Các repo dự án cá nhân: anh sẽ refactor; portfolio link bình thường (U#3).
- RAG của Travel đã hoàn thành. Khi viết phần AI workflows (Phase 5), nhắc anh cung cấp ảnh minh hoạ.
- Nút Résumé (header, Hero, Contact) tự hiện khi `profile.resumePath` được đặt (cần U.M6).

## 6. Next Steps
1. 👤 Review thay đổi Phase 3 → commit vào `dev` → PR/merge vào `main` để deploy.
2. 👤 Duyệt bố cục và copy nháp trên site live `/portfolio/` (P3.9): thử desktop, mobile, cả 2 theme; góp ý câu chữ ở Hero, Summary, "How I work", Experience và card dự án.
3. 🤖 Sau khi duyệt: Phase 4 — Projects System.

## 7. Môi trường
Windows 10 · Git Bash · Node 22.23.4 · pnpm 12.15.0 · Python 3.12 · `pdftotext` có, `pdftoppm` không.
Đã cài: astro 7.4.2 · @astrojs/react 7.1.1 · @astrojs/mdx 8.1.1 · @astrojs/sitemap 3.7.4 · react/react-dom 19.3.1 · tailwindcss + @tailwindcss/vite 4.3.3 · typescript 6.0.3 · @astrojs/check 0.9.12 · eslint 10.13.0 · typescript-eslint 8.72.0 · eslint-plugin-astro 3.2.1 · eslint-plugin-jsx-a11y-x 0.2.0 · eslint-plugin-react-hooks 7.1.1 · prettier 3.9.10 · @fontsource-variable/geist(-mono) 5.3.0 · lucide-react 1.61.0. Actions: checkout@v7 · setup-node@v7 · pnpm/action-setup@v6 · upload-pages-artifact@v5 · deploy-pages@v5.
