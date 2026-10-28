import Link from "next/link";
import { Footer } from "@/components/marketing/footer";
import { Navbar } from "@/components/marketing/navbar";
import { marketingContent } from "@/content/marketing";

export default function NotFound() {
  return <main id="main-content" tabIndex={-1} className="min-h-screen bg-background text-foreground">
    <Navbar brandName={marketingContent.company.name} items={marketingContent.navigation} ctaHref="/contact" ctaLabel="Start a Conversation" />
    <section className="content-shell py-24 sm:py-32"><p className="mb-6 text-sm font-semibold uppercase tracking-widest text-primary">404 / Page not found</p><h1>Let’s get you back on track.</h1><p className="my-6 max-w-xl text-lg leading-8 text-muted-foreground">This address does not lead to a page. Explore our work or tell us what you are looking for.</p><div className="flex flex-wrap gap-4"><Link href="/" className="bd-email-action">Back to Home</Link><Link href="/projects" className="bd-copy-action">Explore Projects</Link></div></section>
    <Footer brandName={marketingContent.company.name} description={marketingContent.company.footerDescription} navigation={marketingContent.navigation} />
  </main>;
}
