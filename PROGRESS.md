# PROGRESS — Portfolio Le Khanh Dat

> Cập nhật: **2026-10-22** · Phase hiện tại: **Phase 0 rev. 3 — HOÀN THÀNH, chờ duyệt** · Tiếp theo: **Phase 1 — Foundation** (khi có U.1, U.2 và lệnh bắt đầu)

## 1. Tiến độ
| Phase | Trạng thái |
|---|---|
| 0 Planning | ✅ rev. 3 xong; chờ P0.11 |
| 1 Foundation | ⏳ chờ Node 22 + repo public |
| 2–8 | ⏳ |

## 2. Lịch sử
- **rev. 1:** phân tích CV; kế hoạch dùng Next.js + Vercel.
- **rev. 2:** đọc slide; phân tích read-only 7 codebase; xác minh luồng AI và thông tin công ty; chuyển sang Astro + GitHub Pages; tạo PROJECT_CONTENT.md.
- **rev. 3:** áp dụng 16 xác nhận của người dùng.
  - Tạo `.gitignore`; gỡ `input/` và 5 planning docs khỏi git staging (`git rm --cached`, file trên đĩa giữ nguyên).
  - Xác minh chéo số liệu 9,3 triệu lượt khách qua Báo Đà Nẵng.
  - Viết lại PLAN (v3), TASKLIST; cập nhật PROJECT_CONTENT, CLAUDE.

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
- Repo `lekhanhdat/portfolio`: **Public** ✓, branch `main`, chưa có commit. Chưa stage file nào.
- Node v22.23.4 ✓ · pnpm 12.15.0 ✓ · git user `@datlk.21it <lekhanhdat03@gmail.com>` ✓ · remote chưa có branch nào.
- Các repo dự án cá nhân: anh sẽ refactor; portfolio link bình thường (U#3).
- Ở Phase 5, đối chiếu lại source Travel về điểm nối chat UI ↔ RAG trước khi viết.

## 6. Next Steps
1. 👤 Duyệt commit đầu tiên (5 file); backup PROJECT_CONTENT.md + input/; trả lời Q-N* nếu muốn khác mặc định.
2. 🤖 Khi anh nói "bắt đầu Phase 1": thực hiện Phase 1 — Foundation, rồi dừng.

## 7. Môi trường
Windows 10 · Git Bash · Node 22.23.4 · pnpm 12.15.0 · Python 3.12 · `pdftotext` có, `pdftoppm` không. Phiên bản npm (2026-10-22): astro 7.4.2 · @astrojs/react 7.1.1 · @astrojs/mdx 8.1.1 · @astrojs/sitemap 3.7.4 · react 19.3.1 · tailwindcss 4.3.3 · typescript 7.0.2 · @playwright/test 1.64.1.
