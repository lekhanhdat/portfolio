# PROGRESS — Portfolio Le Khanh Dat

> Cập nhật: **2026-10-22** · Phase hiện tại: **Phase 1 — Foundation: XONG LOCAL, chờ push + bật Pages để xác minh deploy** · Tiếp theo: **Phase 2 — Design System**

## 1. Tiến độ
| Phase | Trạng thái |
|---|---|
| 0 Planning | ✅ |
| 1 Foundation | 🟡 code xong, check/build pass, đã commit local; chờ push + Pages + secret (P1.9b, P1.10, P1.11) |
| 2–8 | ⏳ |

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
  - Kết quả kiểm tra: `pnpm check` → 0 errors / 0 warnings / 0 hints; ESLint sạch; Prettier sạch; `pnpm build` → 2 trang + sitemap; guard pass (12 từ khoá), test âm tính đúng.
  - Preview local: `/portfolio/` 200, CSS 200, favicon 200, sitemap 200, đường dẫn sai → 404; có meta `noindex`.

## 3. Decision Log
| # | Quyết định | Trạng thái |
|---|---|---|
| D1 | Danh xưng **Frontend Software Developer**; không dùng "Junior" | ✅ Chốt |
| D2 | Concept "Spec Sheet" (tokens, Geist, motion tiết chế) | Đề xuất (chưa có phản hồi khác) |
| D3 | **Astro 7 + React 19 + TS + Tailwind v4 + MDX**, Node 22, pnpm | ✅ Chốt (U#6, U#9) |
| D4 | Repo `lekhanhdat/portfolio` → **`https://lekhanhdat.github.io/portfolio/`** (`base: '/portfolio'`); không dùng custom domain | ✅ Chốt (U#1) |
| D5 | Tổng kinh nghiệm **"1.5+ years"**; thời gian theo công ty lấy từ CV (AvePoint Feb 2026–Sep 2026, MIND Feb 2025–Jan 2026); **không** có thời gian theo dự án | ✅ Chốt (U#2) |
| D6 | **Tách trang** `/company-projects/` và `/personal-projects/`. Thứ tự company: C1 → C2 → C3 → C4. Khi gộp chung: Travel → C1 → C2 → C3 → C4 | ✅ Chốt (U#4) |
| D7 | Home: Company Projects trước Personal Project (giữ định vị Web) | Đề xuất — có thể đảo |
| D8 | Tên mô tả, không nêu tên khách hàng (bảng ở PROJECT_CONTENT §0) | ✅ Chốt (U#7) |
| D9 | Mục "Factory Manufacturing Monitoring" trong CV = chủ yếu C2, có gộp C3 → bullet CV được tính 👤 cho hai dự án | ✅ Chốt (U#8) |
| D10 | Travel: vai trò "Lead developer — end to end"; README features đã hoàn thành (trừ offline maps); RAG hoạt động; demo dashboard có link | ✅ Chốt (U#11, #13, #14) |
| D11 | Link các repo GitHub bình thường | ✅ Chốt (U#3) |
| D12 | AvePoint: giữ MSSQL/PostgreSQL; **không nhắc tên sản phẩm của AvePoint** | ✅ Chốt (U#15) |
| D13 | Luồng AI dùng sơ đồ từ slide (anh cung cấp sau); trong lúc chờ dùng `FlowSteps` HTML | ✅ Chốt (U#5) |
| D14 | ~~Planning docs gitignored~~ → **Commit PLAN/TASKLIST/PROGRESS/CLAUDE** ở dạng public-safe (mã C1–C4); chỉ `input/`, `PROJECT_CONTENT.md`, `private/` bị gitignore; thêm guard từ khoá cấm ở Phase 1 | ✅ Chốt (yêu cầu 2026-10-22) |
| D15 | Open to Work: Hero + Contact, một cờ `availability` | Đề xuất |
| D16 | Placeholder trung tính, không UI giả; company dùng SchematicFigure | ✅ Chốt |
| D17 | **TypeScript 6.0.x** thay vì 7.x — `@astrojs/check` (^5 \|\| ^6) và `typescript-eslint` (<6.1) chưa hỗ trợ TS 7 | ✅ Phase 1 |
| D18 | `eslint-plugin-jsx-a11y-x` thay cho `eslint-plugin-jsx-a11y` — Bản gốc chưa hỗ trợ ESLint 10; fork được `eslint-plugin-astro` công nhận | ✅ Phase 1 |
| D19 | Không dùng `robots.txt`; dùng meta robots — Project site không kiểm soát được `/robots.txt` ở gốc host | ✅ Phase 1 |
| D20 | Guard không in từ khoá ra log — Log Actions của repo public ai cũng xem được | ✅ Phase 1 |

## 4. Open Questions (không chặn Phase 1)
| # | Câu hỏi | Mặc định nếu không trả lời |
|---|---|---|
| Q-N1 | Anh ghi "tổng thời gian … Feb 2026 – Sep 2026". Tôi hiểu là **Feb 2025 – Sep 2026** (khớp với 1.5+ years). Đúng không? | Dùng Feb 2025 – Sep 2026; site chỉ ghi "1.5+ years" |
| Q-N2 | Câu số 10: tôi đề xuất **không** ghi tên GVHD, không đặt "Graduation thesis" làm badge; chỉ có 1 dòng trong Context ("Began as my graduation thesis at VKU…") và 1 link ở Education. Đồng ý? | Áp dụng đề xuất |
| Q-N3 | Có tạo tài khoản demo read-only cho dashboard không? | Không; chỉ link "admin login required" |
| Q-N4 | Có link thêm repo `travel-admin-frontend` và `travel-admin-backend` không? | Có |
| Q-N5 | Chức danh hiển thị ở cả 2 công ty là "Frontend Software Developer"? | Có |
| Q-T7 | 2–4 thách thức kỹ thuật thật của Travel + lessons learned | Chặn mục 10 của case study (Phase 5) |

## 5. Ghi chú
- Repo `lekhanhdat/portfolio`: Public. Branch làm việc: **`dev`** (Phase 0 `392b800` đã có trên `main` và `dev`). Commit Phase 1 nằm ở `dev` local, chưa push. Deploy chạy khi push vào `main`.
- File React runtime (`dist/_astro/client.*.js`, khoảng 220 KB) được build ra nhưng không trang nào tải. Sẽ chỉ được dùng khi có island ở Phase 2.
- Theme hiện chỉ có light; script chuyển theme (dark) làm ở Phase 2.
- Các repo dự án cá nhân: anh sẽ refactor; portfolio link bình thường (U#3).
- Ở Phase 5, đối chiếu lại source Travel về điểm nối chat UI ↔ RAG trước khi viết.

## 6. Next Steps
1. 👤 Thêm secret `CONFIDENTIAL_TERMS` (Settings → Secrets and variables → Actions) = nội dung `private/confidential-terms.txt`, bỏ các dòng `#`.
2. 👤 Settings → Pages → Source: **GitHub Actions**.
3. 👤 Push `dev` (đã có commit `feat: Phase 1`) rồi merge `dev` → `main` (workflow deploy chỉ chạy trên `main`) → kiểm tra tab Actions → mở `https://lekhanhdat.github.io/portfolio/`. Có thể cho phép Claude làm bước này.
4. 👤 Backup `PROJECT_CONTENT.md`, `input/`, `private/`.
5. 🤖 Sau khi deploy được xác nhận: đánh dấu P1.11, rồi chờ lệnh bắt đầu Phase 2.

## 7. Môi trường
Windows 10 · Git Bash · Node 22.23.4 · pnpm 12.15.0 · Python 3.12 · `pdftotext` có, `pdftoppm` không.
Đã cài (Phase 1): astro 7.4.2 · @astrojs/react 7.1.1 · @astrojs/mdx 8.1.1 · @astrojs/sitemap 3.7.4 · react/react-dom 19.3.1 · tailwindcss + @tailwindcss/vite 4.3.3 · typescript 6.0.3 · @astrojs/check 0.9.12 · eslint 10.13.0 · typescript-eslint 8.72.0 · eslint-plugin-astro 3.2.1 · eslint-plugin-jsx-a11y-x 0.2.0 · eslint-plugin-react-hooks 7.1.1 · prettier 3.9.10. Actions: checkout@v7 · setup-node@v7 · pnpm/action-setup@v6 · upload-pages-artifact@v5 · deploy-pages@v5.
