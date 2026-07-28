# COSMA Website — Project Status

**อัปเดตล่าสุด:** 28 กรกฎาคม 2026  
**สถานะปัจจุบัน:** Phase 3 — Content System **เสร็จแล้ว** → พร้อมเข้า **Phase 4 — Backend**

---

## สรุปสั้นๆ

| Phase | ชื่อ | สถานะ |
|-------|------|--------|
| 0 | Concept & Planning | เสร็จ |
| 1 | MVP | เสร็จ |
| 2 | Depth | เสร็จ |
| 3 | Content System | เสร็จ |
| 4 | Backend | ยังไม่เริ่ม |

**ตอนนี้อยู่ที่:** จบ Phase 3 แล้ว ขั้นถัดไปคือ Phase 4

---

## Phase 3 — Content System

สถานะ: **เสร็จ**

- [x] Insights ด้วย MDX (4 บทความ × TH/EN)
- [x] Case studies (2 กรณีศึกษา × TH/EN)
- [x] หน้ารายการ + หน้ารายละเอียด `/insights/[slug]` และ `/case-studies/[slug]`
- [x] Content loader (`src/lib/content.ts`) + MDX renderer
- [x] Home insights preview ลิงก์ไปบทความจริง
- [x] Sitemap รวม content slugs
- [x] เมนู Case Studies

### โครงสร้าง content
```text
content/
  insights/{en,th}/*.mdx
  case-studies/{en,th}/*.mdx
```

### วิธีเพิ่มบทความใหม่
1. สร้างไฟล์ `.mdx` ใน `content/insights/{locale}/slug.mdx`
2. ใส่ frontmatter: `title`, `description`, `category`, `publishedAt`, `featured`
3. Build ใหม่ — หน้าจะ generate อัตโนมัติ

---

## Phase 4 — Backend *(ถัดไป)*

สถานะ: **ยังไม่เริ่ม**

- [ ] Supabase สำหรับ contact / lead tracking

---

## บันทึกการอัปเดต

| วันที่ | รายการ |
|--------|--------|
| 2026-07-28 | Phase 3 เสร็จ: MDX insights + case studies, detail pages, sitemap |
| 2026-07-28 | Phase 2 เสร็จ: Solutions/Industries depth, logo, OG image |
| 2026-07-28 | Phase 1 MVP + i18n TH/EN |

---

## วิธีรัน

```bash
npm run dev
```

- บทความ: http://localhost:3000/th/insights  
- กรณีศึกษา: http://localhost:3000/th/case-studies
