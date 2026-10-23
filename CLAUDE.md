# CLAUDE.md — Portfolio Le Khanh Dat

Bối cảnh cho mọi Claude session. **Đọc theo thứ tự:** `CLAUDE.md` → `PROGRESS.md` → mục Phase hiện tại trong `TASKLIST.md` → `PLAN.md` (khi cần chi tiết) → `PROJECT_CONTENT.md` (khi viết nội dung dự án).

## 1. Project Context
- Portfolio của **Le Khanh Dat — Frontend Software Engineer** (React · TypeScript), Da Nang, Vietnam, **1.5+ years**.
  - **Open to work:** onsite hoặc remote; Da Nang / Ho Chi Minh City / Ha Noi.
- Định hướng: **Web Frontend**. Có kinh nghiệm Mobile và Full-stack nhưng không được làm lu mờ định vị này.
- Dự án — tên hiển thị là tên mô tả, **không nêu tên khách hàng**:
  - **Personal:** Da Nang Smart Tourism (web admin + mobile + API/AI; Lead engineer end to end).
  - **Company, theo thứ tự:**
    1. Data Lifecycle Management Platform (AvePoint)
    2. Factory Manufacturing Monitoring Platform (MIND Technology)
    3. Paper Mill Production & OEE Monitoring (MIND Technology)
    4. Factory Energy Management System — web + mobile (MIND Technology; vai trò: mobile)
  - Khi gộp chung: Travel đứng đầu, sau đó theo thứ tự company ở trên.
- Stack: **Astro 7 + React 19 (render tĩnh; island chỉ khi thật cần) + TypeScript 6 strict + Tailwind v4 + MDX + Content Collections**, Node ≥ 22.23.4 (`.nvmrc`), pnpm 12.
- Lệnh chính: `pnpm dev` · `pnpm build` · `pnpm preview` · `pnpm check` (astro check + eslint + prettier) · `pnpm check:confidential` · `pnpm test:e2e` (Playwright + axe trên `dist/`) · `pnpm format`. Pre-commit hook (`.githooks/`, bật qua `pnpm install`) chạy guard từ khoá cấm.
- Deploy: **GitHub Pages** từ repo `lekhanhdat/portfolio` → `https://lekhanhdat.github.io/portfolio/` (`base: '/portfolio'`). Không dùng custom domain.
- Ngôn ngữ: site bằng tiếng Anh; trao đổi và tài liệu kế hoạch bằng tiếng Việt.

## 2. Project Rules (bắt buộc)
1. **Một Phase mỗi lần.** Cuối Phase: cập nhật TASKLIST + PROGRESS → dừng → chờ duyệt.
2. **Không bịa.** Chỉ dùng CV, source đã xác minh, nguồn công khai, hoặc xác nhận của người dùng (ghi trong PROGRESS Decision Log / PROJECT_CONTENT). Thiếu dữ liệu → `draft: true` hoặc `[TBD]` + Open Question.
3. **Phân loại nội dung:** ✅ product · 👤 personal · ❓ cần xác nhận · 🔒 confidential. Site chỉ dùng ✅/👤. Phân biệt rõ "I built…" và "The product includes…".
4. **Bảo mật company:**
   - Source công ty chỉ đọc, không chạy.
   - Không copy code, cấu hình, URL, credentials, dữ liệu hay tài liệu nội bộ.
   - Không ảnh hay logo khi chưa được phép; mặc định dùng SchematicFigure; mỗi trang có confidentiality note.
   - **Không nêu tên khách hàng** (danh sách trong `PROJECT_CONTENT.md`, private) ở bất kỳ đâu trong repo: `src/`, docs, slug, alt, metadata, tên file, commit message.
   - **Không nhắc tên sản phẩm của AvePoint.**
5. **Thời gian:** site chỉ hiển thị tổng "1.5+ years" và thời gian theo công ty (theo CV). **Không** có thời gian theo dự án.
6. Không dùng "Junior"; không phóng đại (không skill bars, không superlatives, không số liệu tự tạo).
7. **Repo public:**
   - **Được commit:** `PLAN.md`, `TASKLIST.md`, `PROGRESS.md`, `CLAUDE.md`. Các file này phải luôn "public-safe": chỉ dùng mã C1–C4, không tên khách hàng, không chi tiết source/kiến trúc nội bộ, không số liệu commit, không lỗ hổng bảo mật, không thông tin cá nhân ngoài những gì đã có trên site.
   - **Không bao giờ commit:** `input/`, `PROJECT_CONTENT.md`, `private/`, `.env*` (đã có trong `.gitignore`).
   - Mọi chi tiết nhạy cảm ghi vào `PROJECT_CONTENT.md`.
   - **Claude KHÔNG commit, KHÔNG push, KHÔNG merge, KHÔNG amend/reset commit.** Người dùng tự làm toàn bộ thao tác git ghi lịch sử. Claude chỉ để thay đổi ở working tree, hoặc stage (`git add`) khi được yêu cầu, rồi báo danh sách file và gợi ý commit message. Lệnh git chỉ đọc (`status`, `diff`, `log`) thì được dùng.
   - Trước khi người dùng commit: Claude chạy `git status` + `pnpm check:confidential` để báo kết quả.
   - Làm việc trên branch `dev`; `main` = production (merge vào `main` sẽ deploy).
8. **Travel:** phân biệt "at launch" và "now — migrating to Cloud Run + Neon PostgreSQL"; DevOps chỉ nói ngắn. Luồng AI phải khớp source (PROJECT_CONTENT §1.6). Không dùng "eliminates hallucinations".
9. Không overengineering: không backend, DB, CMS, global state, animation hay 3D library. Dependency mới phải có lý do và ghi vào Decision Log.

## 3. Architecture & Conventions
- Cấu trúc theo PLAN §7.1.
- `.astro` chỉ dùng cho pages, layouts, head/SEO, và chỉ để ghép component. **Mọi UI viết bằng React `.tsx`** (render tĩnh lúc build).
  - Không truyền markup Astro làm prop cho component React (lỗi "Objects are not valid as a React child"). Phần thân trang đặt trong component `.tsx`.
- **Tương tác mặc định là script thuần TS** trong `src/scripts/*.ts`, gắn vào markup qua `data-*` (theme, header, mobile-nav, reveal), import một lần ở BaseLayout. Không dùng React island cho tương tác nhỏ: hydrate kéo theo React DOM, khoảng 70 KB gzip.
  - Chỉ dùng `client:*` khi state UI phức tạp thật sự (ví dụ gallery lightbox), và ghi lý do vào Decision Log.
- **Base path:** mọi link nội bộ và asset trong `public/` đi qua `withBase()` (`import.meta.env.BASE_URL`). Không hard-code `"/..."`.
- Nội dung: `src/content/{company-projects,personal-projects}/*.mdx` (schema Zod trong `content.config.ts`); `src/data/*.ts` cho profile, experience, skills, education, navigation.
- Ảnh qua `astro:assets`, bắt buộc alt. Chưa có ảnh → `MediaPlaceholder`. Không dùng ảnh giả làm screenshot.

## 4. Design Principles
- "Spec Sheet": nhãn mono, SpecList, hairline, lưới 12 cột, container 1200px, prose 720px.
- Chỉ dùng tokens (`--bg`, `--surface`, `--surface-muted`, `--border`, `--text`, `--text-muted`, `--accent`, `--accent-subtle`, `--status-ok`); một accent cobalt; Geist Sans/Mono.
- Motion 150–300ms, reveal một lần, tắt khi reduced motion.
- WCAG 2.2 AA ở cả 2 theme; điều khiển được bằng bàn phím; mỗi trang một `h1`; mobile-first, kiểm tra 360 → 1440.

## 5. Coding Standards
- TS strict, không `any`; named export; PascalCase component; alias `@/`; Tailwind + `cn()`.
- Trước khi báo xong: `pnpm check` và `pnpm build` phải pass; chạy Playwright nếu đã có.
- Comment chỉ để giải thích "tại sao". Commit theo Conventional Commits.

## 6. Vai trò các file
| File | Ai sửa | Vai trò |
|---|---|---|
| `CLAUDE.md` | Claude đề xuất, **người dùng duyệt** khi đổi rule | Luật chơi và bối cảnh, đọc đầu mỗi session |
| `PLAN.md` | Claude; **người dùng duyệt** khi đổi chiến lược/thiết kế/stack | Kế hoạch tổng thể (ít thay đổi) |
| `TASKLIST.md` | Claude cập nhật mỗi Phase; người dùng tick các việc 👤 (hoặc báo để Claude tick) | Checklist thực thi |
| `PROGRESS.md` | Claude cập nhật mỗi Phase; người dùng trả lời Open Questions | Trạng thái, quyết định, câu hỏi mở — **file người dùng nên theo dõi chính** |
| `PROJECT_CONTENT.md` | Claude; người dùng xác nhận/sửa dữ kiện | Nguồn sự thật nội dung dự án, gồm cả ánh xạ C1–C4 → tên nội bộ (🔒 **không commit**; người dùng tự backup) |
| `input/` | Người dùng bỏ tài liệu nguồn vào | Claude chỉ đọc |
| `.gitignore` | Claude (đã tạo); người dùng không cần sửa | Chặn `input/`, `PROJECT_CONTENT.md`, `private/`, `.env*` |

**Commit hay không:** PLAN / TASKLIST / PROGRESS / CLAUDE → ✅ commit (giữ bối cảnh khi đổi máy). `PROJECT_CONTENT.md`, `input/` → ❌ không commit; backup qua OneDrive/Google Drive hoặc một repo **private** riêng (vd. `portfolio-private`).
| `src/`, config, workflows (từ Phase 1) | Claude viết; người dùng review qua site live/diff | Mã nguồn portfolio |

## 7. Cập nhật tiến độ & bối cảnh
- **Đầu session:** đọc file theo thứ tự ở đầu tài liệu; xác nhận Phase sẽ làm.
- **Trong session:**
  - Task đang làm `[~]`, xong `[x]`, bị chặn `[!]` kèm lý do.
  - Quyết định mới → Decision Log.
  - Thông tin mới từ người dùng → đóng Open Question; cập nhật PROJECT_CONTENT (❓ → ✅/👤); cập nhật PLAN nếu ảnh hưởng chiến lược.
- **Cuối Phase:** cập nhật TASKLIST + PROGRESS (ngày, việc đã làm, kết quả check/build/test, version, tồn đọng, Next Steps) → dừng.
- Các file này là nguồn sự thật duy nhất; không dựa vào trí nhớ của hội thoại cũ.
