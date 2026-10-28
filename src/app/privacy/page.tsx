import type { Metadata } from "next";
import { StaticMarketingPage } from "@/components/pages/static-marketing-page";
import { buildPageMetadata } from "@/lib/seo";
import { contactDetails } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata("/privacy");

export default function PrivacyPage() {
  return <StaticMarketingPage path="/privacy" content={{
    eyebrow: "Privacy notice", title: "Your enquiry, handled with care.", description: "How this website handles the information you choose to share. Updated 28 October 2026.", primaryCta: "Contact BracketDex", secondaryCta: "View Services",
    sections: [
      { label: "Project enquiries", title: "You choose what to share.", description: "The contact form prepares an email brief in your browser. It does not submit that brief to a website database. You review and send it using your email provider, or copy it into your webmail. Your email provider's own privacy terms apply." },
      { label: "When you contact us", title: "Information used to discuss your request.", description: "If you send us an enquiry, your name, email address, company and project description can be used to reply, clarify requirements and discuss working together. Please do not send passwords, payment credentials or sensitive personal information through an initial enquiry." },
      { label: "Website preferences", title: "A few details help the site work.", description: "Your browser may store a color-theme preference and a session flag so the introductory animation need not repeat. The hosting service may process technical request information, such as IP addresses and browser details, to serve and secure the website." },
      { label: "Questions and requests", title: "Contact us about your information.", description: `Email ${contactDetails.email} to ask about information you have shared or request a correction or deletion. Any retention or disclosure obligations relevant to an engagement will be discussed with you as part of that work.` },
    ],
  }} />;
}
