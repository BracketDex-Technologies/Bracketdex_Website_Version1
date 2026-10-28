"use client";

import { useEffect } from "react";

const NAVBAR_GLASS_SCROLL_THRESHOLD_PX = 40;

type NavbarScrollStateProps = {
  transparentOnHero: boolean;
};

export function NavbarScrollState({ transparentOnHero }: NavbarScrollStateProps) {
  useEffect(() => {
    const root = document.documentElement;
    let animationFrame = 0;
    const closeMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const menu = document.querySelector<HTMLDetailsElement>(".bd-mobile-menu[open]");
      if (menu) { menu.open = false; menu.querySelector("summary")?.focus(); }
    };
    const closeMenuOnNavigation = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest(".bd-mobile-panel a");
      const menu = link?.closest("details");
      if (menu) menu.open = false;
    };

    const updateNavbarState = () => {
      const shouldUseSolidNav = transparentOnHero && window.scrollY > NAVBAR_GLASS_SCROLL_THRESHOLD_PX;
      root.toggleAttribute("data-nav-glass", shouldUseSolidNav);
    };

    const requestNavbarUpdate = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateNavbarState);
    };

    updateNavbarState();
    window.addEventListener("scroll", requestNavbarUpdate, { passive: true });
    window.addEventListener("resize", requestNavbarUpdate);
    window.addEventListener("keydown", closeMenuOnEscape);
    window.addEventListener("click", closeMenuOnNavigation);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestNavbarUpdate);
      window.removeEventListener("resize", requestNavbarUpdate);
      window.removeEventListener("keydown", closeMenuOnEscape);
      window.removeEventListener("click", closeMenuOnNavigation);
      root.removeAttribute("data-nav-glass");
    };
  }, [transparentOnHero]);

  return null;
}
