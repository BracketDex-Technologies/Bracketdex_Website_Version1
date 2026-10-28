"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { ArrowUp, ArrowUpRight, Moon, Sun, Mail, Phone, MapPin } from "lucide-react";
import type { NavigationItem } from "@/content/marketing";
import { contactDetails } from "@/lib/site";
import { useSmoothScroll } from "@/components/motion/smooth-scroll";

type FooterProps = { brandName: string; description: string; navigation: readonly NavigationItem[] };

export function Footer({ brandName, description, navigation }: FooterProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const { scrollTo } = useSmoothScroll();
  return (
    <footer className="bd-complete-footer" id="site-footer" role="contentinfo" aria-label="Site footer">
      <div className="content-shell">
        <div className="bd-footer-top">
          <div><Link className="bd-footer-brand" href="/" aria-label={`${brandName} home`}>{"{BracketDex}"}</Link><p>{description}</p><span className="bd-footer-location"><MapPin size={16} aria-hidden="true" />{contactDetails.location}</span></div>
          <nav aria-label="Footer navigation"><h2>Explore</h2>{navigation.map(item => <Link href={item.href} key={item.href}>{item.label}</Link>)}<Link href="/faq">FAQ</Link></nav>
          <div className="bd-footer-contact"><h2>Bring us your next challenge.</h2><p>A new product, an existing workflow or a system that needs to grow with you.</p><a href={`mailto:${contactDetails.email}`}><Mail size={17} aria-hidden="true" />{contactDetails.email}</a><a href={contactDetails.phoneHref}><Phone size={17} aria-hidden="true" />{contactDetails.phone}</a><Link className="bd-footer-cta" href="/contact">Start a conversation <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
        </div>
        <div className="bd-footer-base"><p>© {new Date().getFullYear()} {brandName}</p><div><Link href="/privacy">Privacy notice</Link><button type="button" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} aria-label="Toggle color theme"><Sun className="hidden dark:block" size={17} aria-hidden="true" /><Moon className="dark:hidden" size={17} aria-hidden="true" />Theme</button><button type="button" onClick={() => scrollTo(0)}>Back to top <ArrowUp size={16} aria-hidden="true" /></button></div></div>
      </div>
    </footer>
  );
}
