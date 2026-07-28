# COSMA Solution — Website Concept

เอกสารคอนเซ็ปต์เว็บไซต์บริษัท **COSMA Solution Co., Ltd.**  
ใช้เป็นแนวทางออกแบบ พัฒนา และขยายฟีเจอร์ในระยะถัดไป

---

## 1. Project Snapshot

| Item | Detail |
|------|--------|
| Company | COSMA Solution Co., Ltd. / บริษัท คอสม่า โซลูชั่น จำกัด |
| Brand position | Technology Partner |
| Business type | One-Stop Technology Solution |
| Primary goal | Generate leads · Increase trust · Build premium brand · Show capability |
| Domain | cosma.co.th |
| Stack (MVP) | Next.js · TypeScript · Tailwind CSS · Motion · GSAP · Lenis |

---

## 2. Brand Core

### Positioning

เรา **ไม่ใช่** ผู้ขายฮาร์ดแวร์  
เรา **ไม่ใช่** ซอฟต์แวร์เวนเดอร์  

เราคือ **Technology Partner**  
ช่วยองค์กรออกแบบ สร้าง เชื่อมต่อ และดูแลโซลูชันเทคโนโลยีสมัยใหม่

### Brand promise

**English:** One Partner. Every Solution.  
**Thai:** พาร์ทเนอร์ด้านเทคโนโลยีแบบครบวงจร

### Tagline

SMART TECHNOLOGY, BETTER FUTURE.

### Personality

Premium · Professional · Reliable · Modern · Elegant · Innovative · Confident · Minimal · Enterprise · Human

### Design philosophy

> Complex Technology. Simple Experience.

เทคโนโลยีต้องรู้สึกใช้งานง่าย  
ทุกอย่างออกแบบรอบ **business value** ไม่ใช่รอบรายการสินค้า

---

## 3. Target Audience

- Government
- Enterprise
- SME
- Manufacturing
- Healthcare
- Education

น้ำเสียง: อธิบายแบบ Stripe (ชัดเรื่องธุรกิจ) · สร้างความเชื่อใจแบบ IBM · นำเสนอแบบ Apple (เรียบ หรู มีเรื่องเล่า)

---

## 4. Visual Direction

### Inspiration (ไม่ก็อป)

| Brand | ใช้เป็นแรงบันดาลใจด้าน |
|-------|------------------------|
| Apple | Storytelling, motion, typography, white space |
| Stripe | Layout, business explanation, premium UI |
| IBM | Enterprise trust, professional tone |
| Linear | Modern software craft |

### Look & feel

- Luxury technology
- Future · Minimal · Light glassmorphism
- Soft gradient · Subtle motion
- Abstract technology only (network, energy, AI, cloud, data flow)
- **ห้าม:** stock photo, fake people, neon, text shadow, auto carousel, popup, visual noise

### Color system

| Token | Hex | Role |
|-------|-----|------|
| Primary | `#5B3DF5` | Corporate purple |
| Secondary | `#8B5CF6` | Soft purple support |
| Dark | `#1B1238` | Deep text / premium CTA |
| Background | `#FAFAFC` | Clean light canvas |
| Accent | `#67E8F9` | Fresh tech highlight |
| Logo gold (S) | `#F5A623` | Brand mark accent only |

### Typography

| Language | Font |
|----------|------|
| English | Plus Jakarta Sans |
| Thai | IBM Plex Sans Thai |

หลักการ: หัวข้อใหญ่ · ช่องว่างกว้าง · อ่านง่าย · สะอาดมาก

### Motion principle

Motion ต้องเล่าเรื่อง ไม่ตกแต่งเปล่าๆ  
รู้สึกแพง นุ่ม ไม่ฉูดฉาด

- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`
- Durations: `0.4` · `0.8` · `1.2` · `1.6`
- Hero: GSAP
- Scroll reveal / page transition: Motion
- Smooth scroll: Lenis
- Respect `prefers-reduced-motion`

---

## 5. Information Architecture

```text
/{locale}
├── Solutions
├── Industries
├── Technology
├── Insights
├── Company
└── Contact
```

Locales: `th` (default) · `en`  
Switcher: TH | EN in navbar  
`/` redirects by Accept-Language (fallback: Thai)

### Route map

| Path | Purpose | MVP depth |
|------|---------|-----------|
| `/{locale}` | Full brand experience | Complete (10 sections) |
| `/{locale}/solutions` | Capability catalog | Scaffold + SEO |
| `/{locale}/industries` | Sector relevance | Scaffold + SEO |
| `/{locale}/technology` | Ecosystem & delivery models | Scaffold + SEO |
| `/{locale}/insights` | Thought leadership | Scaffold placeholders |
| `/{locale}/company` | Trust & legal entity | Scaffold + company data |
| `/{locale}/contact` | Lead capture | Form + contact details |

---

## 6. Home Page Story (10 Sections)

ลำดับสำคัญ: **เริ่มจากปัญหาของลูกค้า** ก่อนโชว์โซลูชัน

### 01 — Hero

- Headline: Technology Partner for Modern Business
- Sub: COSMA designs, develops and supports modern technology solutions including Infrastructure, Software, AI, Cloud and Cyber Security
- CTA: Talk with an Expert · Explore Solutions
- Fullscreen · premium motion

### 02 — Trusted By

- แสดง capability / technology stack
- ยังไม่ใส่โลโก้ปลอมถ้าไม่มีของจริง

### 03 — Business Challenges

Pain points ก่อนบริการ:

- Legacy Infrastructure
- Cloud Migration
- AI Adoption
- Cyber Security
- Digital Transformation

### 04 — Solutions

- Infrastructure
- Software Development
- AI Solutions
- Cloud
- Cyber Security
- Network
- System Integration
- Managed Services

### 05 — Technology Ecosystem

Interactive visualization:

- Center: COSMA
- Around: Hardware · Software · Cloud · AI · Security · Network · Integration

### 06 — Industries

Government · Healthcare · Manufacturing · Education · Enterprise · SME

### 07 — Why COSMA

- Technology Expertise
- Professional Services
- Security First
- Customer Success
- Long-term Partnership

### 08 — Process (timeline)

Business Challenge → Consultation → Analysis → Solution Design → Implementation → Support → Growth

### 09 — Insights

Preview cards: AI · Cloud · Security · Digital Transformation  
(เนื้อหาเต็มในเฟสถัดไป)

### 10 — CTA

- Headline: Ready to Build Your Next Technology Project?
- Button: Book Consultation

---

## 7. Content Principles

1. พูดภาษาธุรกิจก่อนภาษาเทคนิค
2. เน้น partnership ไม่ใช่รายการสินค้า
3. เก็บจุดแข็งท้องถิ่นจากเอกสารเดิมไว้ใน Solutions/Technology:
   - On-Premise / Cloud / Hybrid
   - PDPA alignment
   - System integration (legacy ↔ modern, payroll, banking)
4. ภาษาบนเว็บ: **Thai (`/th`) เป็นค่าเริ่มต้น** และ **English (`/en`)** สลับได้จาก Navbar
   รองรับ hreflang / alternate ใน SEO

---

## 8. Company Facts (ใช้ใน Company / Contact / Footer)

| Field | Value |
|-------|-------|
| Legal EN | COSMA Solution Co., Ltd. |
| Legal TH | บริษัท คอสม่า โซลูชั่น จำกัด (สำนักงานใหญ่) |
| Address | 12 หมู่ที่ 1 ต.คีรีวง อ.ปลายพระยา จ.กระบี่ 81160 |
| Tax ID | 0125546005628 |
| Mobile | 0818662958 |
| Email | jr@cosma.co.th |
| Website | www.cosma.co.th |

---

## 9. UX / UI Rules

### Do

- Sticky transparent navbar → solid on scroll
- Mega menu สำหรับ Solutions / Industries
- Glass cards เบาๆ
- Large white space
- One job per section
- Mobile first
- Accessibility + keyboard focus

### Don’t

- No slider / auto carousel
- No popups
- No stock photos / fake people
- No cheap icon clutter
- No over-animation
- No neon / heavy glow / text shadow

---

## 10. SEO & Performance Targets

ทุกหน้าควรมี:

- Meta title / description
- Open Graph + Twitter card
- Canonical
- Structured data (Organization + Breadcrumb)
- Sitemap + robots

เป้าหมายคุณภาพ:

- Performance 95+
- SEO 100
- Accessibility 100
- Best Practices 100

---

## 11. Technical Architecture (MVP)

```text
src/
  app/                  # routes + SEO (sitemap, robots)
  components/
    home/               # 10 home sections
    layout/             # Navbar, Footer, Logo
    motion/             # Reveal, Lenis, PageTransition
    contact/            # Contact form
    shared/             # PageHero, Breadcrumb, JsonLd
    ui/                 # Button, Section primitives
  lib/                  # constants, seo, utils
public/assets/          # brand assets
```

- Component-driven · type-safe · no duplicated content blobs
- Contact form MVP: `mailto:` (ยังไม่ต่อ Supabase)

---

## 12. Roadmap After MVP

### Phase 2 — Depth

- เติมเนื้อหา Solutions / Industries แบบเต็ม
- โลโก้จริง + Open Graph image
- ~~QR LINE~~ (ตัดออก — ไม่ทำในเฟสนี้)
- Partner logos จริง (เมื่อมีไฟล์จากลูกค้า)

### Phase 3 — Content system

- Insights ด้วย MDX
- Case studies
- (ทำแล้วใน Phase 3)

### Phase 4 — Backend

- Supabase สำหรับ contact / lead tracking
- (Bilingual TH/EN — ทำแล้วใน MVP)

---

## 13. Success Feeling

เมื่อเข้าเว็บ ผู้เยี่ยมชมต้องรู้สึกทันทีว่า:

> “This is a technology partner I can trust.”

เว็บต้องสื่อ **ความมั่นใจ ความมืออาชีพ นวัตกรรม และการเป็นพาร์ทเนอร์ระยะยาว**  
รู้สึก timeless · elegant · enterprise-grade

**Think like Apple. Explain like Stripe. Build trust like IBM. Execute like Vercel.**
