import type { Locale } from "@/i18n/config";

export const contentLabels = {
  en: {
    insightsSection: "Articles",
    caseStudiesSection: "Case Studies",
    viewCaseStudies: "View all case studies",
    backToInsights: "Back to insights",
    backToCaseStudies: "Back to case studies",
    minRead: "min read",
    industry: "Industry",
    client: "Client",
    noArticles: "No articles published yet.",
    noCaseStudies: "No case studies published yet.",
  },
  th: {
    insightsSection: "บทความ",
    caseStudiesSection: "กรณีศึกษา",
    viewCaseStudies: "ดูกรณีศึกษาทั้งหมด",
    backToInsights: "กลับไปหน้าบทความ",
    backToCaseStudies: "กลับไปหน้ากรณีศึกษา",
    minRead: "นาทีในการอ่าน",
    industry: "อุตสาหกรรม",
    client: "ลูกค้า",
    noArticles: "ยังไม่มีบทความเผยแพร่",
    noCaseStudies: "ยังไม่มีกรณีศึกษาเผยแพร่",
  },
} as const;

export function getContentLabels(locale: Locale) {
  return contentLabels[locale];
}
