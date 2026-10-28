"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function PageMotion() {
  const pathname = usePathname();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    let active = true;
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        document.querySelectorAll<HTMLElement>("main:not(.bd-landing) > section, footer").forEach(section => {
          gsap.fromTo(section, { y: 12 }, { y: 0, duration: .6, ease: "power2.out", clearProps: "transform", scrollTrigger: { trigger: section, start: "top 96%", once: true } });
        });
      });
      return () => context.revert();
    });
    document.fonts.ready.then(() => { if (active) ScrollTrigger.refresh(); });
    return () => { active = false; media.revert(); };
  }, [pathname]);
  return null;
}
