"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const POST_HERO_MOTION_SCOPE = "[data-post-hero-design]" as const;
export const POST_HERO_FLOW_TARGET = "[data-diagram-node]" as const;

export function PostHeroMotion() {
  useGSAP(() => {
    const root = document.querySelector<HTMLElement>(POST_HERO_MOTION_SCOPE);
    if (!root) return;

    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-motion-section]").forEach((section) => {
        gsap.fromTo(section, { y: 16 }, { y: 0, duration: 0.65, clearProps: "transform", ease: "power2.out", scrollTrigger: { trigger: section, start: "top 94%", once: true } });
      });
      gsap.utils.toArray<HTMLElement>("[data-motion-visual]").forEach((visual) => {
        gsap.fromTo(visual, { y: 12 }, { y: 0, clearProps: "transform", duration: 0.7, ease: "power2.out", scrollTrigger: { trigger: visual, start: "top 94%", once: true } });
      });
      gsap.utils.toArray<HTMLElement>(POST_HERO_FLOW_TARGET).forEach((node, index) => {
        gsap.fromTo(node, { opacity: 0.45 }, { opacity: 1, duration: 0.35, delay: (index % 6) * 0.05, scrollTrigger: { trigger: node.closest(".bd-system-visual, .bd-cloud-visual"), start: "top 75%", once: true } });
      });
    }, root);
    return () => context.revert();
    });
    return () => media.revert();
  }, []);

  return null;
}
