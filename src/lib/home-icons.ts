import type { LucideIcon } from "lucide-react";
import {
  Award,
  Brain,
  Briefcase,
  Building2,
  Cloud,
  CloudUpload,
  Code2,
  Factory,
  GraduationCap,
  Handshake,
  HardDrive,
  Headphones,
  HeartPulse,
  Landmark,
  Lock,
  Network,
  RefreshCw,
  Server,
  Shield,
  ShieldCheck,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";

export const challengeIcons: LucideIcon[] = [
  HardDrive,
  CloudUpload,
  Sparkles,
  Shield,
  RefreshCw,
];

export const solutionIcons: Record<string, LucideIcon> = {
  infrastructure: Server,
  software: Code2,
  ai: Brain,
  cloud: Cloud,
  security: Shield,
  network: Network,
  integration: Workflow,
  managed: Headphones,
};

export const industryIcons: Record<string, LucideIcon> = {
  government: Landmark,
  healthcare: HeartPulse,
  manufacturing: Factory,
  education: GraduationCap,
  enterprise: Building2,
  sme: Store,
};

export const whyIcons: LucideIcon[] = [
  Award,
  Briefcase,
  ShieldCheck,
  Target,
  Handshake,
];

export const processIcons: LucideIcon[] = [
  Target,
  Handshake,
  Briefcase,
  Workflow,
  Server,
  Headphones,
  TrendingUp,
];

export const ecosystemIcons: Record<string, LucideIcon> = {
  hardware: Server,
  software: Code2,
  cloud: Cloud,
  ai: Brain,
  security: Shield,
  network: Network,
  integration: Workflow,
};

export const heroOrbitKeys = [
  "hardware",
  "software",
  "ai",
  "cloud",
  "security",
  "network",
] as const;

export const heroOrbitPositions: Record<
  (typeof heroOrbitKeys)[number],
  { top: string; left: string }
> = {
  ai: { top: "8%", left: "58%" },
  cloud: { top: "28%", left: "86%" },
  security: { top: "68%", left: "80%" },
  network: { top: "88%", left: "46%" },
  software: { top: "62%", left: "6%" },
  hardware: { top: "22%", left: "8%" },
};
