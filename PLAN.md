# PLAN — Personal Portfolio của Le Khanh Dat (v3)

> Trạng thái: **v3 đã duyệt** — đang triển khai theo Phase (xem PROGRESS.md) · Cập nhật: 2026-10-23
> Liên quan: [TASKLIST.md](TASKLIST.md) · [PROGRESS.md](PROGRESS.md) · [CLAUDE.md](CLAUDE.md) · [PROJECT_CONTENT.md](PROJECT_CONTENT.md) (🔒 private)
> v3 áp dụng 16 xác nhận của người dùng (PROGRESS §3), gồm:
> - URL `lekhanhdat.github.io/portfolio`;
> - timeline theo CV, ghi tổng "1.5+ years";
> - tách trang Company / Personal;
> - tên mô tả cho các dự án khách hàng;
> - stack Astro được chốt.

Quy ước: `[CV]` · `[SRC]` source đã xác minh · `[PUB]` nguồn công khai · `[USR]` người dùng xác nhận · `❓` cần xác nhận. Chi tiết từng dự án: `PROJECT_CONTENT.md`.

---

## 1. Tổng quan
| Mục | Nội dung |
|---|---|
| Mục tiêu | Portfolio chuyên nghiệp để ứng tuyển **Frontend Software Developer (React/TypeScript)** |
| Đối tượng | Recruiters/HR, Technical Interviewers, Engineering Managers |
| Phong cách | Professional, concept **"Spec Sheet"** |
| Nội dung | Tiếng Anh; chuyên nghiệp; không phóng đại |
| Kiến trúc | Static site; không backend, không database |
| Repo | `https://github.com/lekhanhdat/portfolio` (branch `main`) `[USR]` |
| URL | **`https://lekhanhdat.github.io/portfolio/`** `[USR]`; không dùng custom domain |
| Chi phí | 0 đồng |

---

## 2. Portfolio Strategy

### 2.1 Positioning
- Danh xưng: **Frontend Software Developer**. Không dùng "Junior".
- Định vị: Frontend developer chuyên React + TypeScript; **1.5+ years** làm ứng dụng web doanh nghiệp nhiều dữ liệu (data governance, manufacturing monitoring/OEE, energy management). Có kinh nghiệm mobile và đã tự xây trọn một sản phẩm full-stack tích hợp AI. **Thế mạnh và định hướng là Web Frontend.**
- Brand pillars:
  1. Data-rich web interfaces.
  2. Enterprise workflows.
  3. End-to-end product thinking.

### 2.2 Open to Work
Một cờ duy nhất `profile.availability` điều khiển cả 3 điểm hiển thị:
1. **Hero (dải spec):** `● Open to work`, kèm dòng "Frontend roles · Onsite or remote · Da Nang · Ho Chi Minh City · Ha Noi".
2. **Header:** nút `Résumé` luôn hiện.
3. **Contact:** tiêu đề "Open to Frontend Software Developer roles", liệt kê hình thức làm việc và địa điểm; CTA Email, LinkedIn, Résumé.

Không dùng banner hay pop-up.

### 2.3 Hero (EN, draft)
> **Eyebrow:** FRONTEND SOFTWARE DEVELOPER · REACT · TYPESCRIPT
> **Headline:** I build clear, reliable interfaces for data-heavy web applications.
> **Sub:** Frontend developer in Da Nang, Vietnam with 1.5+ years of experience building enterprise data platforms, manufacturing monitoring dashboards, and an AI-assisted travel product I built end to end with React and TypeScript.
> **CTAs:** `View company projects` (primary) · `See the case study` · `Download résumé` · icon GitHub / LinkedIn / Email
> **Dải spec:** EXPERIENCE 1.5+ years · BASED IN Da Nang, VN · FOCUS React · TypeScript · Web · STATUS ● Open to work

### 2.4 Điểm mạnh cần làm nổi bật
1. React + TypeScript tại 2 công ty.
2. Server state & API: TanStack Query; search/sort/filter/pagination phía server; huỷ request; retry/backoff.
3. Visualization: OEE, telemetry, chart, camera playback (HLS), 2D/360°/3D.
4. Enterprise UI: Fluent UI / Ant Design; approval workflows; permissions; i18n.
5. Tích hợp AI vào sản phẩm: semantic search, RAG, nhận diện ảnh.
6. Hiểu hệ thống end-to-end: tự xây REST API cho chính frontend của mình.
7. Học vấn (Distinction) và tiếng Anh B2.

### 2.5 Work Experience
| Công ty (hiển thị) | Dòng phụ | Thời gian (theo CV) | Dự án liên kết |
|---|---|---|---|
| **AvePoint** | AvePoint Vietnam · Da Nang — data management software for Microsoft 365 & cloud | Feb 2026 – Sep 2026 | Data Lifecycle Management Platform |
| **MIND Technology** | Da Nang, Vietnam — Industrial IoT & MES solutions | Feb 2025 – Jan 2026 | Factory Manufacturing Monitoring · Paper Mill OEE Monitoring · Factory Energy Management System |

- Hiển thị thời gian **theo công ty** như CV; tổng kinh nghiệm hiển thị **"1.5+ years"**.
- **Không** hiển thị thời gian của từng dự án.
- Mỗi công ty gồm: chức danh "Frontend Software Developer" ❓(Q-N5), 3–4 bullet tổng hợp từ CV, và chip link sang các dự án.

---

## 3. UI/UX Design Direction (giữ nguyên)
Concept "Spec Sheet":
- Nhãn mono `01 — Section`, dải SpecList, hairline 1px.
- Lưới 12 / 8 / 4 cột; container 1200px; prose 720px.
- Một accent cobalt; light/dark mode; English only.

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#FAFAF8` | `#0D0F12` |
| `--surface` | `#FFFFFF` | `#15181D` |
| `--surface-muted` | `#F2F2EE` | `#1B1F25` |
| `--border` | `#E3E3DD` | `#272B32` |
| `--text` | `#14161A` | `#E8E9EB` |
| `--text-muted` | `#5A606B` | `#9BA1AB` |
| `--accent` | `#2B4BC9` | `#8FA3FF` |
| `--accent-subtle` | `#E9EDFC` | `#1C2340` |
| `--status-ok` | `#15803D` | `#4ADE80` |

- **Typography:** Geist Sans + Geist Mono, self-host và preload. Fluid scale: Display 44→72, H2 30→40, H3 20→24, Body 16→18, Mono label 12–13 (viết hoa, tracking 0.08em).
- **Motion:** reveal một lần (fade + 8px, 200–300ms); hover đổi màu viền và mũi tên dịch nhẹ; tôn trọng `prefers-reduced-motion`. Không parallax, không 3D, không typing effect.
- **A11y:** WCAG 2.2 AA ở cả hai theme; điều khiển được hoàn toàn bằng bàn phím; skip link; focus ring 2px; mỗi trang một `h1`. Kiểm thử ở các độ rộng 360 / 390 / 768 / 1024 / 1280 / 1440.

---

## 4. Sitemap & Layout

### 4.1 Sitemap — tách Company và Personal `[USR]`
Mọi đường dẫn đều nằm dưới base `/portfolio/`:
```
/portfolio/                                        Home
  #summary #experience #company-projects #personal-project #skills #education #contact
/portfolio/company-projects/                       Index 4 dự án công ty (cards + bảng chỉ mục)
  /portfolio/company-projects/data-lifecycle-management/
  /portfolio/company-projects/factory-manufacturing-monitoring/
  /portfolio/company-projects/paper-mill-oee-monitoring/
  /portfolio/company-projects/energy-management-system/
/portfolio/personal-projects/                      Index (hiện có 1 dự án; sẵn sàng thêm pet project mới)
  /portfolio/personal-projects/da-nang-smart-tourism/   Case study
/portfolio/resume.pdf
/portfolio/404.html  (được dùng cho mọi đường dẫn sai dưới /portfolio/; xem §7.4)
sitemap-index.xml · OG images  (robots.txt không áp dụng: crawler chỉ đọc robots.txt ở gốc host)
```
**Thứ tự cố định `[USR]`:**
- Company: **C1 Data Lifecycle Management (AvePoint) → C2 Factory Manufacturing Monitoring → C3 Paper Mill OEE Monitoring → C4 Energy Management System**.
- Personal: Travel.
- Nếu có chỗ gộp chung (bảng tổng hợp, sitemap): **Travel → C1 → C2 → C3 → C4**.

**Thứ tự section trên Home:** Hero → Summary → Experience → **Company Projects** → **Personal Project** → Skills → Education → Contact.
- Lý do: Experience dẫn tự nhiên sang các dự án công ty (phần lớn là Web) để giữ định vị Web trước. Travel có một băng full-width nổi bật riêng và trang case study riêng.
- Phương án thay thế: đưa Personal Project lên trước Company Projects. Chỉ cần đổi thứ tự trong `navigation.ts`.

### 4.2 Wireframes (Desktop ≥1024 | Mobile ~390)
`▢[IMG-xx]` là placeholder (§4.4).

**Header**
```
Desktop: [LKD] Le Khanh Dat   Experience  Company Projects  Personal Project  Skills  Contact   [◐] [Résumé ↓]
Mobile : [LKD]                                                                         [◐] [☰] → sheet menu
```
Link "Company Projects" / "Personal Project" ở Home trỏ tới anchor; ở trang khác trỏ tới index page tương ứng.

**01 · Hero**
```
Desktop                                                   Mobile
┌──────────────────────────────────────────────────┐      ┌───────────────────────┐
│ FRONTEND SOFTWARE DEVELOPER · REACT · TYPESCRIPT │      │ FRONTEND SOFTWARE …   │
│ I build clear, reliable interfaces               │      │ Headline (3–4 dòng)   │
│ for data-heavy web applications.                 │      │ Sub-copy              │
│ Sub-copy (≤ 60ch)                                │      │ [View company proj. →]│
│ [View company projects →] [See the case study]   │      │ [See the case study]  │
│ [Download résumé]   GH  in  ✉                    │      │ [Résumé]  GH in ✉     │
│──────────────────────────────────────────────────│      │───────────────────────│
│ EXPERIENCE │ BASED IN   │ FOCUS       │ STATUS   │      │ EXPERIENCE │ BASED IN │
│ 1.5+ years │ Da Nang,VN │ React · TS  │ ● Open   │      │ FOCUS      │ STATUS   │
│            │            │             │ Onsite/Remote · DN · HCMC · HN       │      │ (lưới 2×2)            │
└──────────────────────────────────────────────────┘      └───────────────────────┘
```

**02 · Professional Summary**
```
Desktop: [col 1–7] 90–120 từ + "How I work" (3 dòng)   [col 9–12] ▢[IMG-01 portrait 4:5] + SpecList
Mobile : portrait 160px → đoạn văn → How I work → SpecList 2 cột
SpecList: Experience 1.5+ yrs · Education VKU, Distinction · English B2 · Open to Onsite / Remote
```

**03 · Work Experience**
```
Desktop: [col 1–3] mono: Feb 2026 — Sep 2026 · Da Nang   [col 4–12] AvePoint · Frontend Software Developer
                                                                    1 dòng mô tả công ty · 3–4 bullets
                                                                    Projects: [Data Lifecycle Management →]
         (tương tự MIND Technology: chips C2 · C3 · C4 theo tên mô tả)
         Cuối section, dòng mono: TOTAL EXPERIENCE · 1.5+ YEARS
Mobile : dates phía trên → company → bullets → chips wrap
```

**04 · Company Projects** (Home, preview 4 dự án)
```
Desktop:
┌ AvePoint — Data Lifecycle Management (6 col) ┐ ┌ Factory Manufacturing Monitoring (6 col) ┐
│ ▢[Schematic 16:10]                           │ │ ▢[Schematic 16:10 / IMG nếu được phép]    │
│ AVEPOINT · WEB · CONFIDENTIAL                │ │ MIND TECHNOLOGY · WEB · CONFIDENTIAL      │
│ Title · 2 dòng summary · tags · Read brief → │ │ …                                         │
└──────────────────────────────────────────────┘ └───────────────────────────────────────────┘
┌ Paper Mill OEE Monitoring (6 col) ┐ ┌ Factory Energy Management System (6 col, compact) ┐
└───────────────────────────────────┘ └──────────────────────────────────────────────────┘
[All company projects →]  (sang /company-projects/)
Mobile: 1 cột; ảnh/schematic ở trên, text ở dưới
```

**05 · Personal Project** (băng full-width, nền `--surface`)
```
Desktop: [col 1–5] PERSONAL PROJECT · WEB ADMIN + MOBILE · AI
                   Da Nang Smart Tourism · tagline · SpecList (Role / Surfaces / Stack)
                   [Read the case study →] [Live dashboard ↗] [GitHub ↗]
         [col 6–12] ▢[IMG-02 browser 16:10 dashboard] + ▢[IMG-03 phone 9:19.5] chồng góc phải
Mobile : ảnh browser (phone ẩn) → text → nút full-width
```

**06 · Technical Skills**
Lưới 3×2: Core · Data & APIs · UI & Styling · Visualization · Tooling & Practice · Also experienced with (Mobile, Backend, AI). Không thanh %. Trên mobile xếp 1 cột.

**07 · Education**
VKU · B.Eng. Global IT · Distinction · GPA 3.32/4.0 · Honours. Kèm dòng "Thesis: Da Nang Smart Tourism →" ❓(Q-N2).

**08 · Contact / Open to Work**
```
Desktop: [col 1–7] H2 "Open to Frontend Software Developer roles"
                   Onsite or remote · Da Nang · Ho Chi Minh City · Ha Noi
                   lekhanhdat03@gmail.com [Copy]
                   [Email me →] [LinkedIn] [GitHub] [Résumé]
         [col 9–12] SpecList: Based in Da Nang · Languages EN/VI
Mobile : xếp dọc, nút full-width
```

**Footer:** © năm · "Built with Astro, React & TypeScript" · Source · Back to top.

### 4.3 Index pages
**`/company-projects/`**
```
Header: 01 — Company Projects · intro 2 dòng (bảo mật: "details generalized")
Cards: 4 card theo thứ tự cố định (cùng component với Home, biến thể đầy đủ hơn)
Bảng chỉ mục: PROJECT │ COMPANY │ DOMAIN │ PLATFORM │ MY ROLE │ CORE STACK │ →
              (không có cột năm; trên mobile chuyển thành list)
```
**`/personal-projects/`**: header, card lớn Travel, và một dòng "More side projects coming soon" (ẩn khi chỉ có 1 dự án ❓ — mặc định ẩn).

### 4.4 Project detail
**A. Company Project Brief**
```
← Company projects
COMPANY · PLATFORM · CONFIDENTIAL (badges)
Title (H1) · 1 câu summary
SpecList: Company · My role · Domain · Platform · Core stack      (không có Period)
▢[Schematic 16:9] / ▢[IMG 16:10 nếu được phép]
## Overview · ## My contributions · ## Product scope · ## Engineering highlights · ## Tech stack
[Callout] Confidentiality note
← Prev | Next → (theo thứ tự C1 → C2 → C3 → C4)
```
**B. Personal Case Study:** §5.3. Cột nội dung 720px; sticky TOC ở cột phải (từ `lg`); gallery rộng 1200px.

### 4.5 Image placeholders
Placeholder là khung trung tính có nhãn mono, ví dụ `IMAGE · 16:10 · Admin dashboard — locations table`. **Không vẽ UI giả.** Component `MediaPlaceholder(ratio, label, alt)`.

| ID | Vị trí | Tỷ lệ | Nguồn | Hiển thị | Alt (draft) |
|---|---|---|---|---|---|
| IMG-01 | Summary portrait | 4:5 | 1200×1500 | 320 / 160px | "Portrait of Le Khanh Dat" |
| IMG-02 | Personal band + case study header — dashboard | 16:10 | 2880×1800 | ~640px | "Travel admin dashboard showing the locations table with search and filters" |
| IMG-03 | Personal band — phone | 9:19.5 | 1080×2340 | ~180px | "Da Nang Smart Tourism app home screen" |
| IMG-C1..C4 | Company cards/briefs | 16:10 | 2880×1800 | ~560px | Mặc định Schematic; ảnh chỉ khi được phép |
| IMG-D* | Case study — dashboard gallery | 16:10 | 2880×1800 | 2 cột / 1 cột | theo màn hình |
| IMG-M* | Case study — mobile gallery | 9:19.5 | 1080×2340 | hàng 3 / scroll-snap | theo màn hình |
| IMG-F1..F3 | Case study — sơ đồ AI từ slide (semantic search, RAG, camera) | theo ảnh gốc (thường 16:9) | PNG/SVG ≥ 1920px | full prose width, có thể phóng to | "Diagram: semantic search pipeline…" |
| IMG-A1 | Case study — kiến trúc từ slide | 16:9 | ≥ 1920px | rộng 1200px | "System architecture diagram…" |
| VID-01 | Case study — demo | 16:9 / 9:19.5 | MP4 ≤ 10MB + poster | không autoplay, có controls và captions | "Demo video: …" |
| OG-* | Social preview | 1200×630 | PNG | — | — |

Ảnh xử lý bằng `astro:assets` (AVIF/WebP, srcset, width/height cố định, lazy-load). Khi đã có ảnh sơ đồ từ slide (IMG-F*), vẫn giữ phần mô tả bằng chữ hoặc `FlowSteps` để đảm bảo accessibility.

---

## 5. Project Presentation

### 5.1 Danh sách chính thức `[USR]`
| Thứ tự | Tên hiển thị | Nhóm | Platform | Vai trò hiển thị | Visual |
|---|---|---|---|---|---|
| P1 | **Da Nang Smart Tourism** | Personal | Web admin + Mobile + API/AI | Lead developer — end to end | Ảnh thật |
| C1 | **Data Lifecycle Management Platform** | AvePoint | Web | Frontend developer | Schematic `data-table-workflow` |
| C2 | **Factory Manufacturing Monitoring Platform** | MIND Technology | Web | Frontend developer (main contributor) | Schematic `dashboard-grid` |
| C3 | **Paper Mill Production & OEE Monitoring** | MIND Technology | Web | Frontend developer | Schematic `dashboard-grid` (biến thể) |
| C4 | **Factory Energy Management System** | MIND Technology | Web + Mobile | Mobile app developer | Schematic `mobile-web-pair` |

Không nêu tên khách hàng hay đối tác (danh sách nằm trong file private `PROJECT_CONTENT.md`) ở bất kỳ đâu trên site hoặc trong repo, kể cả slug, alt, metadata và tên file.

### 5.2 Giữ định vị Web
- 4/5 dự án có Web.
- Trên Home, Company Projects đứng trước Personal Project.
- Trong case study Travel, **Web Admin Dashboard đứng trước Mobile App**.
- Kỹ năng mobile nằm trong nhóm "Also experienced with".
- Meta và OG chỉ nói về Frontend / React / TypeScript.

### 5.3 Case study — Da Nang Smart Tourism
Tagline: *"An AI-assisted travel platform for Da Nang — a web dashboard for administrators and a mobile app for visitors, built end to end."*

| # | Mục | Nội dung |
|---|---|---|
| 1 | Header | Badges: Personal · Web admin + Mobile · AI. SpecList: Role **Lead developer — end to end** · Surfaces · Stack · Links (GitHub mobile app, Live dashboard ↗ ❓ thêm repo dashboard Q-N4). Không có Period. |
| 2 | At a glance | 3 cột: Web Admin · Mobile App · API & AI services |
| 3 | Context & Problem | Dòng thesis ❓(Q-N2). Số liệu: *"Nearly 9.3 million visitor stays at accommodation establishments in Da Nang in the first ten months of 2024"* kèm link nguồn. 3 pain points: dữ liệu phân mảnh, thiếu tương tác thông minh, rào cản ngôn ngữ |
| 4 | Solution & ecosystem | Sơ đồ D1 (SVG) hoặc IMG-A1 |
| 5 | **Web Admin Dashboard** | Quản lý locations, festivals, objects, users, reviews, transactions; table phía server; form modal; JWT; retry/backoff; staggered loading; demo link |
| 6 | Mobile App | Discover · Navigate (Mapbox: turn-by-turn, voice, alternatives, clustering) · Recognize · Ask · Festivals & reminders · Newsfeed · Multilingual · Donate (PayOS) — theo README `[USR]`, trừ "offline maps" |
| 7 | **AI workflows** | Semantic search · RAG assistant · AI camera. Mỗi luồng gồm: mục tiêu, sơ đồ (IMG-F* hoặc `FlowSteps`), các bước, quyết định UX/frontend, xử lý lỗi |
| 8 | Architecture | Ngắn gọn: "At launch" và "Now — migrating to Cloud Run + Neon PostgreSQL" |
| 9 | Engineering decisions | Timeout và loading cho AI; ngưỡng similarity + fallback keyword; ưu tiên dữ liệu đã kiểm duyệt trước LLM; cache bản dịch; feature flags trong lúc migration |
| 10 | Challenges & lessons | ❓ Q-T7 — anh cung cấp |
| 11 | What I'd improve | Gom các lời gọi AI về backend; auth phía server; hoàn tất migration; thêm test |
| 12 | Gallery · Links · Next | |

**Luồng AI** (theo source; chi tiết ở PROJECT_CONTENT §1.6):
```
D2 Semantic search
Query ─▶ POST /search/semantic ─▶ text-embedding-3-small ─▶ FAISS cosine top-k
      ─▶ ranked results + scores ─▶ UI: score > 0.5 (else best matches)
                                  └▶ empty / error ─▶ keyword fallback

D3 RAG assistant
Message ─▶ Retrieve (semantic index, top 5) + user preferences + last 5 turns
        ─▶ Augment prompt ─▶ GPT-4o-mini ─▶ answer + sources + suggested actions ─▶ Chat UI (markdown, images)

D4 AI camera
Capture / pick ─▶ Preview ─▶ Upload (/detect, timeout) ─▶ Visual search ─▶ LLM extracts landmark
              ─▶ match curated objects ─▶ description: database ▸ local ▸ LLM fallback ─▶ result modal
```
- Wording: dùng "grounds answers in curated local data to reduce hallucinations"; không dùng "eliminates".
- RAG đã hoàn thành trong app (xác nhận 2026-10-23). Khi viết phần này, nhắc người dùng cung cấp ảnh minh hoạ.

### 5.4 Company projects — bảo mật
- Chỉ dùng nội dung ✅/👤.
  - Câu về việc anh làm: "I built…".
  - Câu về sản phẩm: "The product includes…".
- Không dùng ảnh, logo, tên khách hàng, URL, API, dữ liệu, ngưỡng hay tên thiết bị.
- Callout trên mỗi trang: "Details are generalized to respect confidentiality. No proprietary code, data, or client materials are shown."
- AvePoint: chỉ dùng nội dung từ CV (giữ MSSQL/PostgreSQL trong stack). **Không nhắc tên sản phẩm của AvePoint.**

---

## 6. Technology Stack — ✅ CHỐT `[USR]`
**Astro 7 + React 19 + TypeScript strict + Tailwind CSS v4 + MDX**, deploy GitHub Pages, Node ≥ 22.23.4, pnpm.

Phiên bản cài thực tế ở Phase 1: astro 7.4.2, react 19.3.1, tailwindcss 4.3.3, **typescript 6.0.3** (TS 7 chưa tương thích với `@astrojs/check` và `typescript-eslint`), eslint 10.13.0, pnpm 12.15.0.

| Hạng mục | Lựa chọn |
|---|---|
| Framework | Astro 7: `output: 'static'`, `site: 'https://lekhanhdat.github.io'`, **`base: '/portfolio'`**, `trailingSlash: 'always'`, `build.format: 'directory'` |
| UI | React 19 (`@astrojs/react`) render tĩnh. Mọi UI component viết bằng `.tsx`; `.astro` chỉ cho pages, layouts, head. Tương tác nhỏ dùng script thuần TS (`src/scripts/`); React island (`client:*`) chỉ khi thật cần |
| Styling | Tailwind v4 (`@tailwindcss/vite`) + CSS variable tokens; `clsx` + `tailwind-merge` |
| Content | Content Collections (Zod) + MDX (`@astrojs/mdx`); `src/data/*.ts` |
| Ảnh | `astro:assets` + sharp |
| SEO | `<Seo>` tự viết, `@astrojs/sitemap`, meta robots (noindex tới khi launch), JSON-LD `Person`, OG PNG. Không dùng `robots.txt` vì project site không có quyền với file ở gốc host |
| Quality | ESLint 10 (typescript-eslint strict, eslint-plugin-astro + `jsx-a11y-strict`, `eslint-plugin-jsx-a11y-x`, react-hooks) + Prettier (astro, tailwind) + `astro check`; guard từ khoá cấm; Playwright + `@axe-core/playwright` (Phase 7) |

**Lưu ý với `base: '/portfolio'`:**
- Mọi link nội bộ và asset trong `public/` phải đi qua helper `withBase()`, dùng `import.meta.env.BASE_URL`. Ảnh dùng qua `astro:assets` thì Astro tự xử lý.
- Lint/test sẽ có bước bắt lỗi link thiếu base.
- Lý do chọn stack (so sánh với Next.js static export và Vite SPA) giữ như bản v2: static-first, tối ưu ảnh lúc build, có action deploy chính thức, JS gần bằng 0, UI vẫn viết bằng React TSX.

---

## 7. Technical Architecture

### 7.1 Folder structure
```
D:\Project\Portfolio  (repo lekhanhdat/portfolio)
├─ .gitignore                    ✅ đã tạo
├─ PLAN.md · TASKLIST.md · PROGRESS.md · CLAUDE.md          ✅ commit (public-safe, chỉ dùng mã C1–C4)
├─ input/ · PROJECT_CONTENT.md · private/                   🔒 gitignored
├─ public/  resume.pdf · favicon.svg · og/ · fonts/
├─ scripts/check-confidential.mjs · .githooks/pre-commit · private/confidential-terms.txt (🔒)
├─ src/
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ company-projects/index.astro · [slug].astro
│  │  ├─ personal-projects/index.astro · [slug].astro
│  │  ├─ styleguide.astro  (noindex, ngoài sitemap)
│  │  └─ 404.astro
│  ├─ layouts/        BaseLayout.astro · ProjectLayout.astro (brief) · CaseStudyLayout.astro
│  ├─ components/
│  │  ├─ ui/          Button, Tag, Badge, SpecList, Callout, Container, Section, SectionHeader, MediaPlaceholder, BrandIcon
│  │  ├─ layout/      SiteHeader, MobileNav, ThemeToggle, SkipLink, SiteFooter  (hành vi: src/scripts/*.ts)
│  │  ├─ sections/    HomePage, Hero, Summary, Experience, CompanyProjects, PersonalProject, Skills, Education, Contact,
│  │  │               CompanyProjectsIndex, PersonalProjectsIndex, NotFound
│  │  ├─ projects/    ProjectCard, ProjectIndexTable, SchematicFigure, DeviceFrame, ProjectShowcase, BriefHeader, BriefFooter,
│  │  │               PrevNextNav, BackLink, CaseStudyHeader, CaseStudyToc, AtAGlance, FlowSteps, ScreenshotGallery*, CaseStudyFooter
│  │  ├─ styleguide/  StyleguideContent
│  │  └─ seo/         Seo.astro, JsonLd.astro
│  ├─ content/
│  │  ├─ company-projects/*.mdx
│  │  └─ personal-projects/*.mdx
│  ├─ content.config.ts
│  ├─ data/           profile.ts · experience.ts · skills.ts · education.ts · navigation.ts
│  ├─ assets/images/  personal/da-nang-smart-tourism/… · profile/…
│  ├─ lib/            cn.ts · with-base.ts · projects.ts (đọc collection) · seo.ts
│  ├─ scripts/        theme.ts · header.ts · mobile-nav.ts · reveal.ts · active-section.ts · copy-email.ts
│  └─ styles/         global.css
├─ tests/e2e/
├─ .github/workflows/ ci.yml · deploy.yml
└─ astro.config.mjs · tsconfig.json · eslint.config.js · prettier.config.mjs · playwright.config.ts
(* = có thể thành island nếu cần lightbox ở Phase 6)
```

### 7.2 Content schema (`src/content.config.ts`, Phase 4)
```ts
// chung cho hai collection — id của entry = tên file = slug URL
{ title, summary, order: number, platforms: ('Web'|'Mobile'|'API'|'AI')[], myRole, domain,
  stack: string[], draft: boolean /* mặc định true */ }
// company-projects bổ sung
{ company: 'AvePoint' | 'MIND Technology', visibility: 'confidential',
  schematic: 'dashboard-grid' | 'data-table-workflow' | 'mobile-web-pair' }
// personal-projects bổ sung
{ tagline, surfaces: { name, description }[],
  links: { repos: { label, url }[]; demo?: { label, url, note? } },
  gallery: { surface: 'dashboard' | 'mobile'; label; alt; image?: ImageMetadata }[] }
```
- Không có trường `period`, vì không hiển thị thời gian dự án. Thời gian công ty nằm trong `data/experience.ts`.
- Mọi nơi (Home, index, trang chi tiết) đọc qua `src/lib/projects.ts` (sắp theo `order`, lọc draft khi `SHOW_DRAFTS = false`).

### 7.3 Rendering · SEO · Performance
- Mọi trang là HTML tĩnh.
- Tương tác: script thuần TS (theme, header, mobile-nav, reveal; sau này là copy email, TOC active). Island React dự kiến chỉ cho ScreenshotGallery nếu cần lightbox. Phase 2 đo được: khoảng 1,8 KB JS inline mỗi trang, không có React runtime.
- Budget JS Home ≲ 30 KB gzip.
- SEO: title template `%s · Le Khanh Dat — Frontend Software Developer`; canonical (có `/portfolio/`); OG; sitemap; JSON-LD.
- Lighthouse mobile ≥ 95; LCP < 2.0s; CLS < 0.05.

### 7.4 GitHub Pages với project site `/portfolio/`
- **404:** `404.astro` build ra `dist/404.html`. GitHub Pages dùng file này cho các đường dẫn sai **dưới `/portfolio/`**. Các đường dẫn ngoài `/portfolio/` (ví dụ `lekhanhdat.github.io/abc`) vẫn hiện 404 mặc định của GitHub; điều này nằm ngoài phạm vi repo nên chấp nhận được. Asset trong trang 404 phải dùng đường dẫn có base (sẽ kiểm tra ở Phase 7).
- **Header & redirect:** không cấu hình được; CSP chỉ đặt qua `<meta>`.
- **Repo public:** GitHub Free chỉ cho bật Pages với repo public.
  - Repo `lekhanhdat/portfolio` đã ở chế độ **Public** (xác minh 2026-10-22).
- Không có preview deploy cho PR. Bù lại bằng CI build check và `astro preview` ở local.

### 7.5 Deployment workflow
1. 👤 Repo `lekhanhdat/portfolio` → Public; Settings → Pages → Source: **GitHub Actions**.
2. `deploy.yml` chạy khi push lên `main` hoặc khi trigger thủ công:
   1. checkout → pnpm + Node 22 → `pnpm install --frozen-lockfile`;
   2. `pnpm check` → `pnpm build`;
   3. `actions/upload-pages-artifact` (`dist/`) → `actions/deploy-pages`.
   - Có thể dùng `withastro/action` thay cho các bước build.
   - Permissions: `pages: write`, `id-token: write`; concurrency group `pages`.
3. `ci.yml` chạy trên PR: lint, typecheck, build, Playwright và axe.
4. Không dùng custom domain `[USR]`.

### 7.6 Bảo vệ thông tin
- **Commit:** PLAN, TASKLIST, PROGRESS, CLAUDE.
  - Các file này giữ ở dạng public-safe: dùng mã C1–C4, không tên khách hàng, không chi tiết source nội bộ.
  - Lý do commit: giữ bối cảnh và quy ước khi đổi máy, đồng thời tracking được tiến độ.
- **Không commit:** `input/`, `PROJECT_CONTENT.md`, `private/`, `.env*`, build/test output.
- **Guard (Phase 1):** script `scripts/check-confidential` quét các file sắp commit theo danh sách từ khoá cấm.
  - Danh sách lấy từ file gitignored `private/confidential-terms.txt` khi chạy local (pre-commit hook).
  - Trên CI, danh sách lấy từ GitHub Actions secret `CONFIDENTIAL_TERMS`.
  - Nhờ vậy danh sách từ khoá không bao giờ nằm trong repo.
- Trước mỗi commit: kiểm tra `git status`.
- 👤 Backup `PROJECT_CONTENT.md` + `input/` qua cloud drive hoặc một repo private riêng.

---

## 8. Development Phases
| Phase | Tên | Mục tiêu | Phụ thuộc |
|---|---|---|---|
| 0 | Planning | v3 được duyệt | — |
| 1 | Foundation | Astro + React + TS + Tailwind; `base: '/portfolio'`; tooling; CI; deploy "coming soon" | Duyệt P0; Node 22; repo public |
| 2 | Design System | Tokens, fonts, theme, primitives, MediaPlaceholder, SchematicFigure, DeviceFrame, styleguide | P1 |
| 3 | Home | 8 section với nội dung CV và placeholder | P2 |
| 4 | Projects System | 2 collection, 2 index page, template brief + case study, FlowSteps | P3 |
| 5 | Content | Viết nội dung 5 dự án và copy tiếng Anh | P4 + Q-T7 |
| 6 | Media | Ảnh/video/sơ đồ thật thay placeholder | P5 + media |
| 7 | Quality | SEO, OG, a11y, performance, tests | P6 |
| 8 | Launch | Bỏ noindex, kiểm tra cuối, Search Console, cập nhật profile | P7 |

---

## 9. Risks
| Rủi ro | Giảm thiểu |
|---|---|
| Planning docs (public) lộ thông tin nhạy cảm | Rule public-safe trong CLAUDE.md; mã C1–C4; guard từ khoá cấm (pre-commit + CI) |
| File private bị commit nhầm | `.gitignore` + kiểm tra `git status` + guard |
| Lỗi link do thiếu `base` | Helper `withBase()`; test link trong Playwright |
| Trang 404 mất CSS/ảnh khi mở từ URL lồng sâu | Dùng đường dẫn tuyệt đối có base; test ở Phase 7 |
| Lộ tên khách hàng | Tên mô tả; checklist trước khi publish; grep tên khách hàng trong `src/` ở CI |
| Mobile lấn át định vị Web | Thứ tự section, dashboard trước, wording thống nhất |
| Astro 7 cần Node 22 | 👤 cài Node 22 LTS |

---

## 10. Acceptance Criteria (v1)
- [ ] Danh xưng "Frontend Software Developer"; tổng kinh nghiệm "1.5+ years"; không có "Junior"; không có thời gian theo dự án.
- [ ] Open to Work hiển thị ở Hero và Contact.
- [ ] Trang Company và Personal tách riêng; thứ tự C1 → C2 → C3 → C4; Travel có case study riêng.
- [ ] Không có tên khách hàng hay đối tác, kể cả trong slug, alt và metadata. Không nhắc tên sản phẩm AvePoint.
- [ ] Mọi câu "I built…" có căn cứ 👤; câu về sản phẩm có căn cứ ✅; có confidentiality note.
- [ ] Case study có 3 luồng AI, Web Admin đứng trước Mobile, ghi chú migration ngắn gọn.
- [ ] Đúng wireframe ở desktop và mobile; đạt AA ở 2 theme; reduced motion; điều khiển bằng bàn phím.
- [ ] CI xanh (check, build, e2e, axe); Lighthouse mobile ≥ 95.
- [ ] Live tại `https://lekhanhdat.github.io/portfolio/`; mọi link nội bộ đúng base; sitemap và OG hoạt động.
- [ ] Repo public không chứa `input/`, `PROJECT_CONTENT.md` hay bất kỳ tên khách hàng / chi tiết nội bộ nào (guard pass).
