"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { enquirySchema, prepareEnquiry, type Enquiry } from "@/lib/enquiry";
import { contactDetails } from "@/lib/site";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [draft, setDraft] = useState<ReturnType<typeof prepareEnquiry> | null>(null);
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    setValue,
  } = useForm<Enquiry>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      company: "",
      email: "",
      message: "",
      name: "",
      service: "",
    },
  });

  useEffect(() => {
    setReady(true);
    const params = new URLSearchParams(window.location.search);
    const interest = params.get("project") || params.get("service");
    if (interest) setValue("service", interest.slice(0, 160));
  }, [setValue]);

  function onSubmit(values: Enquiry) {
    setDraft(prepareEnquiry(values, contactDetails.email));
    setStatus("Your brief is ready. Open the email draft below and send it from your email app. Nothing has been sent yet.");
  }

  async function copyBrief() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(draft.body);
      setStatus("Brief copied. Paste it into an email and send it to " + contactDetails.email + ".");
    } catch {
      setStatus("Copy is unavailable in this browser. Select the brief below to copy it, or open the email draft.");
    }
  }

  return (
    <form
      method="post"
      aria-describedby="contact-form-description"
      className="rounded-xl border border-border bg-card p-6 shadow-soft"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="sr-only" id="contact-form-description">
        Share your name, email, company, and project message so BracketDex can review your requirement.
      </p>
      <FieldGroup>
        <div><h3 className="text-xl font-semibold">Prepare your project enquiry</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">We use these details to prepare an email for you to review and send. Required fields are marked *.</p></div>
        <Field data-invalid={Boolean(errors.name)}>
          <FieldLabel htmlFor="name">Name *</FieldLabel>
          <Input aria-required="true" maxLength={120} aria-describedby={errors.name ? "name-error" : undefined} aria-invalid={Boolean(errors.name)} autoComplete="name" id="name" {...register("name")} />
          <FieldError errors={[errors.name]} id="name-error" />
        </Field>
        <Field data-invalid={Boolean(errors.email)}>
          <FieldLabel htmlFor="email">Email *</FieldLabel>
          <Input aria-required="true" maxLength={254} aria-describedby={errors.email ? "email-error" : undefined} aria-invalid={Boolean(errors.email)} autoComplete="email" id="email" type="email" {...register("email")} />
          <FieldError errors={[errors.email]} id="email-error" />
        </Field>
        <Field>
          <FieldLabel htmlFor="company">Company (optional)</FieldLabel>
          <Input maxLength={160} autoComplete="organization" id="company" {...register("company")} />
        </Field>
        <Field>
          <FieldLabel htmlFor="service">What are you interested in? (optional)</FieldLabel>
          <Input maxLength={160} id="service" placeholder="e.g. a new product, automation, an existing system" {...register("service")} />
        </Field>
        <Field data-invalid={Boolean(errors.message)}>
          <FieldLabel htmlFor="message">Project brief *</FieldLabel>
          <Textarea aria-required="true" maxLength={4000} aria-describedby={errors.message ? "message-error" : undefined} aria-invalid={Boolean(errors.message)} id="message" rows={5} {...register("message")} />
          <FieldError errors={[errors.message]} id="message-error" />
        </Field>
        <Button aria-disabled={!ready || isSubmitting || undefined} disabled={!ready || isSubmitting} type="submit">
          {isSubmitting ? "Preparing…" : draft ? "Update enquiry brief" : "Prepare enquiry"}
        </Button>
        <noscript><p>JavaScript is needed to prepare a brief here. Please email {contactDetails.email} directly or call {contactDetails.phone}.</p></noscript>
        <p className="text-sm leading-6 text-muted-foreground">By emailing us, you share your details so we can discuss your enquiry. Read our <Link href="/privacy" className="underline underline-offset-4">privacy notice</Link>. Please leave out passwords and sensitive personal data.</p>
        {status ? (
          <p aria-live="polite" className="text-sm leading-6 text-muted-foreground" role="status">
            {status}
          </p>
        ) : null}
        {draft && <div className="bd-enquiry-preview">
          <h4 className="font-semibold">Review your brief</h4><pre>{draft.body}</pre>
          <div className="flex flex-wrap gap-3"><a className="bd-email-action" href={draft.href}>Open email draft</a><button className="bd-copy-action" onClick={copyBrief} type="button">Copy brief</button></div>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">No email app configured? Copy the brief into your webmail and send it to {contactDetails.email}.</p>
        </div>}
      </FieldGroup>
    </form>
  );
}
