import type { Locale } from "@/i18n/config";

export type SolutionDetail = {
  overview: string;
  capabilities: string[];
  outcomes: string[];
};

export type IndustryDetail = {
  overview: string;
  challenges: string[];
  approach: string[];
  solutions: string[];
};

const en: Record<string, SolutionDetail> = {
  infrastructure: {
    overview:
      "Build resilient foundations for modern operations — from servers and data centers to on-premise environments designed for control, performance, and long-term stability.",
    capabilities: [
      "Server and storage architecture",
      "On-premise and hybrid infrastructure",
      "Face recognition and access devices",
      "IoT device integration",
      "Hardware lifecycle planning",
    ],
    outcomes: [
      "Stable systems that support daily operations",
      "Infrastructure aligned with security and compliance needs",
      "A scalable base for future digital growth",
    ],
  },
  software: {
    overview:
      "Design and deliver software that fits how your organization actually works — from cooperative and enterprise systems to mobile apps and custom platforms.",
    capabilities: [
      "Cooperative and enterprise management systems",
      "ERP and business platforms",
      "Mobile applications",
      "AI-ready software architecture",
      "Custom development and enhancement",
    ],
    outcomes: [
      "Software that improves workflow efficiency",
      "Systems tailored to your business processes",
      "Better visibility across operations and reporting",
    ],
  },
  ai: {
    overview:
      "Apply AI where it creates measurable value — automation, intelligent workflows, and platforms that help teams work faster without adding complexity.",
    capabilities: [
      "AI platform design and deployment",
      "Process automation and intelligent workflows",
      "Data preparation for AI use cases",
      "Integration with existing business systems",
      "Practical adoption planning and support",
    ],
    outcomes: [
      "Reduced manual work in high-volume processes",
      "Better decision support from usable data",
      "AI initiatives tied to business ROI",
    ],
  },
  cloud: {
    overview:
      "Move to the cloud with confidence — architecture, migration, and ongoing cloud operations that balance accessibility, cost, and control.",
    capabilities: [
      "Cloud architecture and strategy",
      "Migration planning and execution",
      "Cloud infrastructure management",
      "Hybrid cloud design",
      "Always-on accessibility for distributed teams",
    ],
    outcomes: [
      "Lower server maintenance burden",
      "Secure access from anywhere",
      "Flexible infrastructure that scales with demand",
    ],
  },
  security: {
    overview:
      "Protect people, data, and systems with security built into every layer — from network design to monitoring and PDPA-aligned practices.",
    capabilities: [
      "Cybersecurity assessment and design",
      "Network and endpoint protection",
      "Security monitoring and response planning",
      "PDPA-aligned data protection approaches",
      "Security reviews for cloud and on-premise systems",
    ],
    outcomes: [
      "Reduced risk across critical systems",
      "Stronger compliance posture",
      "Confidence for leadership and stakeholders",
    ],
  },
  network: {
    overview:
      "Connect your organization with reliable, secure, and well-designed networks — from office connectivity to enterprise-wide infrastructure.",
    capabilities: [
      "Network design and implementation",
      "Wired and wireless infrastructure",
      "Performance and redundancy planning",
      "Network security integration",
      "Monitoring and optimization",
    ],
    outcomes: [
      "Stable connectivity across locations",
      "Better performance for business applications",
      "Network architecture ready for growth",
    ],
  },
  integration: {
    overview:
      "Connect legacy and modern systems so information flows where it is needed — payroll, banking, ERP, and custom platforms working as one.",
    capabilities: [
      "Legacy-to-modern system integration",
      "Payroll and HR system connectivity",
      "Banking and financial integrations",
      "API and middleware design",
      "Data synchronization across platforms",
    ],
    outcomes: [
      "Less manual data transfer between systems",
      "Faster, more accurate business processes",
      "Unified visibility across departments",
    ],
  },
  managed: {
    overview:
      "Stay focused on your business while COSMA supports, monitors, and improves your technology environment over the long term.",
    capabilities: [
      "Ongoing system monitoring and support",
      "Preventive maintenance and updates",
      "Incident response and troubleshooting",
      "Performance optimization",
      "Technology roadmap guidance",
    ],
    outcomes: [
      "Predictable support for critical systems",
      "Reduced downtime and operational disruption",
      "A partner that grows with your organization",
    ],
  },
};

const th: Record<string, SolutionDetail> = {
  infrastructure: {
    overview:
      "สร้างรากฐานที่มั่นคงสำหรับการดำเนินงานยุคใหม่ ตั้งแต่เซิร์ฟเวอร์และศูนย์ข้อมูล ไปจนถึงระบบติดตั้งภายในองค์กรที่ออกแบบเพื่อการควบคุม ประสิทธิภาพ และความเสถียรระยะยาว",
    capabilities: [
      "สถาปัตยกรรมเซิร์ฟเวอร์และระบบจัดเก็บข้อมูล",
      "โครงสร้างพื้นฐาน On-Premise และ Hybrid",
      "เครื่องสแกนใบหน้าและอุปกรณ์ควบคุมการเข้าถึง",
      "การเชื่อมต่ออุปกรณ์ IoT",
      "การวางแผนวงจรชีวิตฮาร์ดแวร์",
    ],
    outcomes: [
      "ระบบที่เสถียรรองรับการทำงานประจำวัน",
      "โครงสร้างพื้นฐานที่สอดคล้องความปลอดภัยและการปฏิบัติตามกฎ",
      "ฐานที่พร้อมขยายสู่การเติบโตทางดิจิทัล",
    ],
  },
  software: {
    overview:
      "ออกแบบและพัฒนาซอฟต์แวร์ให้ตรงกับการทำงานจริงขององค์กร ตั้งแต่ระบบสหกรณ์และองค์กร ไปจนถึงแอปมือถือและแพลตฟอร์มเฉพาะทาง",
    capabilities: [
      "ระบบบริหารงานสหกรณ์และองค์กร",
      "ERP และแพลตฟอร์มธุรกิจ",
      "แอปพลิเคชันมือถือ",
      "สถาปัตยกรรมซอฟต์แวร์ที่รองรับ AI",
      "พัฒนาและปรับปรุงระบบตามความต้องการ",
    ],
    outcomes: [
      "ซอฟต์แวร์ที่ช่วยให้งานมีประสิทธิภาพมากขึ้น",
      "ระบบที่ออกแบบตามกระบวนการขององค์กร",
      "มองเห็นภาพรวมการดำเนินงานและรายงานได้ดีขึ้น",
    ],
  },
  ai: {
    overview:
      "นำ AI มาใช้ในจุดที่สร้างคุณค่าได้จริง ทั้งระบบอัตโนมัติ ขั้นตอนงานอัจฉริยะ และแพลตฟอร์มที่ช่วยให้ทีมทำงานได้เร็วขึ้นโดยไม่ซับซ้อนเกินไป",
    capabilities: [
      "ออกแบบและติดตั้งแพลตฟอร์ม AI",
      "ระบบอัตโนมัติและ workflow อัจฉริยะ",
      "เตรียมข้อมูลสำหรับ use case ของ AI",
      "เชื่อมต่อกับระบบธุรกิจที่มีอยู่",
      "วางแผนและสนับสนุนการนำ AI มาใช้จริง",
    ],
    outcomes: [
      "ลดงาน manual ในกระบวนการที่มีปริมาณสูง",
      "ตัดสินใจได้ดีขึ้นจากข้อมูลที่ใช้งานได้จริง",
      "โครงการ AI ที่เชื่อมโยงกับผลตอบแทนทางธุรกิจ",
    ],
  },
  cloud: {
    overview:
      "ย้ายสู่คลาวด์อย่างมั่นใจ ทั้งการออกแบบสถาปัตยกรรม การย้ายระบบ และการดูแล cloud ที่สมดุลระหว่างการเข้าถึง ต้นทุน และการควบคุม",
    capabilities: [
      "สถาปัตยกรรมและกลยุทธ์คลาวด์",
      "วางแผนและดำเนินการย้ายระบบ",
      "การจัดการ cloud infrastructure",
      "ออกแบบ Hybrid Cloud",
      "การเข้าถึงระบบได้จากทุกที่อย่างปลอดภัย",
    ],
    outcomes: [
      "ลดภาระการดูแลเซิร์ฟเวอร์",
      "เข้าถึงระบบได้อย่างปลอดภัยจากทุกที่",
      "โครงสร้างที่ยืดหยุ่นและขยายตามความต้องการ",
    ],
  },
  security: {
    overview:
      "ปกป้องคน ข้อมูล และระบบด้วยความปลอดภัยที่ฝังอยู่ในทุกชั้น ตั้งแต่การออกแบบเครือข่าย การเฝ้าระวัง ไปจนถึงแนวทางที่สอดคล้อง PDPA",
    capabilities: [
      "ประเมินและออกแบบความปลอดภัยไซเบอร์",
      "ป้องกันเครือข่ายและ endpoint",
      "วางแผนการเฝ้าระวังและตอบสนองเหตุการณ์",
      "แนวทางปกป้องข้อมูลตาม PDPA",
      "ตรวจสอบความปลอดภัยระบบ cloud และ on-premise",
    ],
    outcomes: [
      "ลดความเสี่ยงในระบบสำคัญ",
      "เสริมความมั่นใจด้านการปฏิบัติตามกฎ",
      "สร้างความเชื่อมั่นให้ผู้บริหารและผู้มีส่วนได้ส่วนเสีย",
    ],
  },
  network: {
    overview:
      "เชื่อมต่อองค์กรด้วยเครือข่ายที่เชื่อถือได้ ปลอดภัย และออกแบบมาอย่างดี ตั้งแต่การเชื่อมต่อในออฟฟิศไปจนถึงโครงสร้างระดับองค์กร",
    capabilities: [
      "ออกแบบและติดตั้งเครือข่าย",
      "โครงสร้างเครือข่ายมีสายและไร้สาย",
      "วางแผนประสิทธิภาพและ redundancy",
      "ผสานความปลอดภัยเข้ากับเครือข่าย",
      "ติดตามและปรับปรุงประสิทธิภาพ",
    ],
    outcomes: [
      "การเชื่อมต่อที่เสถียรในทุกพื้นที่",
      "ประสิทธิภาพที่ดีขึ้นสำหรับแอปพลิเคชันธุรกิจ",
      "สถาปัตยกรรมเครือข่ายที่พร้อมขยาย",
    ],
  },
  integration: {
    overview:
      "เชื่อมระบบเดิมกับระบบใหม่ให้ข้อมูลไหลไปยังจุดที่ต้องการ ทั้งเงินเดือน ธนาคาร ERP และแพลตฟอร์มเฉพาะทางให้ทำงานเป็นหนึ่งเดียว",
    capabilities: [
      "เชื่อมต่อระบบ legacy กับระบบใหม่",
      "เชื่อมระบบเงินเดือนและ HR",
      "เชื่อมต่อระบบธนาคารและการเงิน",
      "ออกแบบ API และ middleware",
      "ซิงค์ข้อมูลข้ามแพลตฟอร์ม",
    ],
    outcomes: [
      "ลดการโอนข้อมูลด้วยมือระหว่างระบบ",
      "กระบวนการธุรกิจเร็วและแม่นยำขึ้น",
      "มองเห็นภาพรวมข้ามแผนกได้ชัดเจน",
    ],
  },
  managed: {
    overview:
      "ให้ COSMA ดูแล ติดตาม และพัฒนาสภาพแวดล้อมเทคโนโลยีของคุณในระยะยาว ขณะที่คุณโฟกัสกับธุรกิจหลัก",
    capabilities: [
      "ติดตามและสนับสนุนระบบอย่างต่อเนื่อง",
      "บำรุงรักษาเชิงป้องกันและอัปเดต",
      "ตอบสนองเหตุขัดข้องและแก้ปัญหา",
      "ปรับปรุงประสิทธิภาพระบบ",
      "ให้คำปรึกษา roadmap เทคโนโลยี",
    ],
    outcomes: [
      "การสนับสนุนระบบสำคัญที่คาดการณ์ได้",
      "ลด downtime และการหยุดชะงัก",
      "พาร์ทเนอร์ที่เติบโตไปพร้อมองค์กร",
    ],
  },
};

const industriesEn: Record<string, IndustryDetail> = {
  government: {
    overview:
      "Public-sector organizations need technology that is secure, reliable, and built for accountability. COSMA helps government teams modernize without compromising control.",
    challenges: [
      "Legacy systems that limit service delivery",
      "Strict security and compliance requirements",
      "Need for data sovereignty and PDPA alignment",
    ],
    approach: [
      "Security-first architecture and deployment models",
      "On-premise, cloud, or hybrid based on policy needs",
      "Integration with existing government workflows",
    ],
    solutions: [
      "Infrastructure & Network",
      "System Integration",
      "Cyber Security",
      "Managed Services",
    ],
  },
  healthcare: {
    overview:
      "Healthcare environments require platforms that protect sensitive data while keeping clinical and administrative teams connected and efficient.",
    challenges: [
      "Protecting patient and operational data",
      "Reliability for critical daily operations",
      "Connecting departments and legacy systems",
    ],
    approach: [
      "Secure infrastructure and access control",
      "Stable software and integration layers",
      "Long-term support and monitoring",
    ],
    solutions: [
      "Software Development",
      "Cyber Security",
      "Network",
      "System Integration",
    ],
  },
  manufacturing: {
    overview:
      "Manufacturing organizations need connected operations — from production environments to enterprise systems that support planning, inventory, and reporting.",
    challenges: [
      "Disconnected shop-floor and office systems",
      "Downtime that impacts production schedules",
      "Scaling technology across facilities",
    ],
    approach: [
      "Reliable network and infrastructure design",
      "Integration between operational and business systems",
      "IoT and monitoring where appropriate",
    ],
    solutions: [
      "Infrastructure",
      "Network",
      "System Integration",
      "AI Solutions",
    ],
  },
  education: {
    overview:
      "Schools and education institutions need modern platforms for administration, learning support, and secure access — without overwhelming limited IT resources.",
    challenges: [
      "Managing student and administrative data securely",
      "Limited internal IT capacity",
      "Need for scalable, easy-to-use systems",
    ],
    approach: [
      "Practical software and cloud solutions",
      "Secure network and access design",
      "Ongoing support through managed services",
    ],
    solutions: [
      "Software Development",
      "Cloud",
      "Network",
      "Managed Services",
    ],
  },
  enterprise: {
    overview:
      "Large organizations require scalable architecture, strong security, and the ability to integrate complex systems across departments and locations.",
    challenges: [
      "Complex legacy and multi-vendor environments",
      "Security and compliance at scale",
      "Digital transformation without disruption",
    ],
    approach: [
      "Enterprise architecture and phased rollout",
      "Integration across ERP, HR, finance, and custom systems",
      "Long-term partnership and managed operations",
    ],
    solutions: [
      "Cloud",
      "System Integration",
      "Cyber Security",
      "Managed Services",
    ],
  },
  sme: {
    overview:
      "Growing businesses need technology that is practical, affordable to operate, and ready to scale — without enterprise-level complexity.",
    challenges: [
      "Limited budget and IT staff",
      "Systems that outgrow quickly",
      "Need for fast implementation and clear ROI",
    ],
    approach: [
      "Right-sized infrastructure and software",
      "Cloud and hybrid options for flexibility",
      "Support models that reduce operational burden",
    ],
    solutions: [
      "Software Development",
      "Cloud",
      "Managed Services",
      "Cyber Security",
    ],
  },
};

const industriesTh: Record<string, IndustryDetail> = {
  government: {
    overview:
      "องค์กรภาครัฐต้องการเทคโนโลยีที่ปลอดภัย เชื่อถือได้ และรองรับการตรวจสอบ COSMA ช่วยให้หน่วยงานรัฐพัฒนาระบบได้โดยไม่เสียการควบคุม",
    challenges: [
      "ระบบเก่าที่จำกัดการให้บริการประชาชน",
      "ข้อกำหนดด้านความปลอดภัยและการปฏิบัติตามกฎที่เข้มงวด",
      "ความต้องการควบคุมข้อมูลและสอดคล้อง PDPA",
    ],
    approach: [
      "สถาปัตยกรรมและรูปแบบติดตั้งที่ให้ความสำคัญกับความปลอดภัย",
      "On-Premise, Cloud หรือ Hybrid ตามนโยบาย",
      "เชื่อมต่อกับ workflow ภาครัฐที่มีอยู่",
    ],
    solutions: [
      "โครงสร้างพื้นฐานและเครือข่าย",
      "เชื่อมต่อระบบ",
      "ความปลอดภัยไซเบอร์",
      "บริการดูแลระบบ",
    ],
  },
  healthcare: {
    overview:
      "สภาพแวดล้อมด้านสุขภาพต้องการแพลตฟอร์มที่ปกป้องข้อมูลอ่อนไหว พร้อมเชื่อมทีมงานทางคลินิกและการบริหารให้ทำงานได้อย่างมีประสิทธิภาพ",
    challenges: [
      "การปกป้องข้อมูลผู้ป่วยและการดำเนินงาน",
      "ความเสถียรสำหรับงานสำคัญประจำวัน",
      "การเชื่อมต่อแผนกและระบบเดิม",
    ],
    approach: [
      "โครงสร้างพื้นฐานและการควบคุมการเข้าถึงที่ปลอดภัย",
      "ซอฟต์แวร์และชั้นการเชื่อมต่อที่เสถียร",
      "การสนับสนุนและติดตามระยะยาว",
    ],
    solutions: [
      "พัฒนาซอฟต์แวร์",
      "ความปลอดภัยไซเบอร์",
      "เครือข่าย",
      "เชื่อมต่อระบบ",
    ],
  },
  manufacturing: {
    overview:
      "องค์กรการผลิตต้องการการดำเนินงานที่เชื่อมต่อกัน ตั้งแต่หน้างานไปจนถึงระบบองค์กรที่รองรับการวางแผน สต็อก และรายงาน",
    challenges: [
      "ระบบหน้างานและสำนักงานไม่เชื่อมกัน",
      " downtime กระทบตารางการผลิต",
      "การขยายเทคโนโลยีข้ามโรงงาน",
    ],
    approach: [
      "ออกแบบเครือข่ายและโครงสร้างพื้นฐานที่เชื่อถือได้",
      "เชื่อมระบบปฏิบัติการกับระบบธุรกิจ",
      "IoT และการติดตามเมื่อเหมาะสม",
    ],
    solutions: [
      "โครงสร้างพื้นฐาน",
      "เครือข่าย",
      "เชื่อมต่อระบบ",
      "โซลูชัน AI",
    ],
  },
  education: {
    overview:
      "สถาบันการศึกษาต้องการแพลตฟอร์มสมัยใหม่สำหรับการบริหาร การเรียนรู้ และการเข้าถึงที่ปลอดภัย โดยไม่เพิ่มภาระ IT ที่มีจำกัด",
    challenges: [
      "จัดการข้อมูลนักเรียนและการบริหารอย่างปลอดภัย",
      "ทีม IT ภายในมีจำกัด",
      "ต้องการระบบที่ใช้งานง่ายและขยายได้",
    ],
    approach: [
      "ซอฟต์แวร์และ cloud ที่ใช้งานได้จริง",
      "ออกแบบเครือข่ายและการเข้าถึงอย่างปลอดภัย",
      "สนับสนุนต่อเนื่องผ่าน managed services",
    ],
    solutions: [
      "พัฒนาซอฟต์แวร์",
      "คลาวด์",
      "เครือข่าย",
      "บริการดูแลระบบ",
    ],
  },
  enterprise: {
    overview:
      "องค์กรขนาดใหญ่ต้องการสถาปัตยกรรมที่ขยายได้ ความปลอดภัยที่แข็งแกร่ง และความสามารถในการเชื่อมระบบที่ซับซ้อนข้ามแผนกและสาขา",
    challenges: [
      "สภาพแวดล้อม legacy และหลาย vendor ที่ซับซ้อน",
      "ความปลอดภัยและ compliance ในระดับองค์กร",
      "การเปลี่ยนผ่านสู่ดิจิทัลโดยไม่กระทบการดำเนินงาน",
    ],
    approach: [
      "สถาปัตยกรรมองค์กรและ rollout แบบเป็นขั้นตอน",
      "เชื่อม ERP, HR, การเงิน และระบบเฉพาะทาง",
      "พาร์ทเนอร์ระยะยาวและการดูแลระบบ",
    ],
    solutions: [
      "คลาวด์",
      "เชื่อมต่อระบบ",
      "ความปลอดภัยไซเบอร์",
      "บริการดูแลระบบ",
    ],
  },
  sme: {
    overview:
      "ธุรกิจที่กำลังเติบโตต้องการเทคโนโลยีที่ใช้งานได้จริง ดูแลง่าย และพร้อมขยาย โดยไม่ซับซ้อนระดับองค์กรใหญ่",
    challenges: [
      "งบประมาณและทีม IT จำกัด",
      "ระบบที่โตเร็วเกินไป",
      "ต้องการติดตั้งเร็วและเห็น ROI ชัดเจน",
    ],
    approach: [
      "โครงสร้างพื้นฐานและซอฟต์แวร์ที่เหมาะสมกับขนาด",
      "ตัวเลือก cloud และ hybrid ที่ยืดหยุ่น",
      "รูปแบบสนับสนุนที่ลดภาระการดำเนินงาน",
    ],
    solutions: [
      "พัฒนาซอฟต์แวร์",
      "คลาวด์",
      "บริการดูแลระบบ",
      "ความปลอดภัยไซเบอร์",
    ],
  },
};

export function getSolutionDetail(locale: Locale, id: string): SolutionDetail | undefined {
  const map = locale === "th" ? th : en;
  return map[id];
}

export function getIndustryDetail(locale: Locale, id: string): IndustryDetail | undefined {
  const map = locale === "th" ? industriesTh : industriesEn;
  return map[id];
}

export const pageLabels = {
  en: {
    capabilities: "Capabilities",
    outcomes: "Business outcomes",
    challenges: "Industry challenges",
    approach: "Our approach",
    relatedSolutions: "Related solutions",
  },
  th: {
    capabilities: "ความสามารถ",
    outcomes: "ผลลัพธ์ทางธุรกิจ",
    challenges: "ความท้าทายในอุตสาหกรรม",
    approach: "แนวทางของเรา",
    relatedSolutions: "โซลูชันที่เกี่ยวข้อง",
  },
} as const;

export function getPageLabels(locale: Locale) {
  return pageLabels[locale];
}
