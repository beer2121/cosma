export const SITE = {
  name: "COSMA Solution",
  legalName: "COSMA Solution Co., Ltd.",
  legalNameTh: "บริษัท คอสม่า โซลูชั่น จำกัด",
  url: "https://www.cosma.co.th",
  email: "sales@cosma.co.th",
  taxId: "0125546005628",
  address: {
    en: "12 Moo 1, Khiri Wong, Plai Phraya, Krabi 81160, Thailand",
    th: "12 หมู่ที่ 1 ตำบลคีรีวง อำเภอปลายพระยา จังหวัดกระบี่ 81160",
  },
} as const;

export const ECOSYSTEM_NODES = [
  { id: "hardware", angle: -90 },
  { id: "software", angle: -38 },
  { id: "cloud", angle: 14 },
  { id: "ai", angle: 66 },
  { id: "security", angle: 118 },
  { id: "network", angle: 170 },
  { id: "integration", angle: 222 },
] as const;

export const ECOSYSTEM_SOLUTION_IDS: Record<
  (typeof ECOSYSTEM_NODES)[number]["id"],
  string
> = {
  hardware: "infrastructure",
  software: "software",
  cloud: "cloud",
  ai: "ai",
  security: "security",
  network: "network",
  integration: "integration",
};
