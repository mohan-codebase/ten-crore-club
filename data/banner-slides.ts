import { Target, TrendingUp, ShieldCheck } from "lucide-react";
import type { BannerSlide } from "@/types";

export const bannerSlides: BannerSlide[] = [
  {
    eyebrow: "The Ten Crore Method™",
    title: "Your ₹10 Crore is {a plan, not a dream.}",
    subtitle:
      "A structured SIP roadmap built around your income, your age, and your goal — so wealth becomes a decision, not a gamble.",
    icon: Target,
    primaryCta: { label: "Calculate My ₹10 Crore Plan", href: "/calculators" },
    secondaryCta: { label: "See the Method", href: "/framework" },
  },
  {
    eyebrow: "Compounding Works While You Sleep",
    title: "Every year you wait {costs you crores.}",
    subtitle:
      "Starting a ₹50,000 SIP at 30 instead of 35 can mean ₹3–4 crore more at retirement. The math is unforgiving — and unforgettable.",
    icon: TrendingUp,
    primaryCta: { label: "See the Delay Cost", href: "/calculators" },
    secondaryCta: { label: "Read Member Stories", href: "/stories" },
  },
  {
    eyebrow: "Private Wealth Community · Est. 2024",
    title: "Don't build it {alone. Build it with us.}",
    subtitle:
      "340+ disciplined investors, AMFI-registered guidance, and behavioral coaching that keeps your SIP running through every market storm.",
    icon: ShieldCheck,
    primaryCta: { label: "Book a Free Strategy Call", href: "/book" },
    secondaryCta: { label: "Explore the Community", href: "/community" },
  },
];
