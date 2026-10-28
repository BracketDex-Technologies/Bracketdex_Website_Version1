import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(120, "Keep your name under 120 characters."),
  email: z.string().trim().email("Enter a valid email address.").max(254),
  company: z.string().trim().max(160).optional(),
  service: z.string().trim().max(160).optional(),
  message: z.string().trim().min(10, "Share a short project or business challenge.").max(4000, "Keep your brief under 4,000 characters."),
});

export type Enquiry = z.infer<typeof enquirySchema>;

export function prepareEnquiry(values: Enquiry, recipient: string) {
  const brief = enquirySchema.parse(values);
  const subject = `Project enquiry${brief.service ? `: ${brief.service}` : ""}`;
  const body = [`Name: ${brief.name}`, `Email: ${brief.email}`, `Company: ${brief.company || "Not specified"}`, `Interest: ${brief.service || "Let's discuss"}`, "", brief.message].join("\n");
  return { body, href: `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` };
}
