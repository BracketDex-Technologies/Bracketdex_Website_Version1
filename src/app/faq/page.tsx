import type { Metadata } from "next";
import { FaqSection } from "@/components/marketing/faq-section";
import { Footer } from "@/components/marketing/footer";
import { Navbar } from "@/components/marketing/navbar";
import { HeroSection } from "@/components/marketing/hero-section";
import { marketingContent } from "@/content/marketing";
import { buildPageMetadata, buildFaqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = buildPageMetadata("/faq");
export default function FaqPage() {
  return <main id="main-content" tabIndex={-1} className="min-h-screen bg-background text-foreground">
    <JsonLd data={buildFaqJsonLd()} />
    <Navbar brandName={marketingContent.company.name} items={marketingContent.navigation} ctaHref="/contact" ctaLabel="Start a Conversation" activeHref="/faq" />
    <HeroSection eyebrow="FAQ" headline="A few things worth knowing." subheadline="Clear answers about scope, delivery, existing systems and working with BracketDex." primaryCta={{href:"#answers",label:"Explore the Answers"}} secondaryCta={{href:"/contact",label:"Ask a Question"}} />
    <section className="content-shell bd-faq-page" id="answers" aria-label="Frequently asked questions"><FaqSection defaultOpenFirst items={marketingContent.faqs} /></section>
    <Footer brandName={marketingContent.company.name} description={marketingContent.company.footerDescription} navigation={marketingContent.navigation} />
  </main>;
}
