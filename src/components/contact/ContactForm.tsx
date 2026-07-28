"use client";

import { FormEvent, useState } from "react";
import { SITE } from "@/lib/constants";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Button } from "@/components/ui/button";

export function ContactForm({ dict }: { dict: Dictionary }) {
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(
      `${dict.contact.mailSubject} ${name}`,
    );
    const body = encodeURIComponent(
      `${dict.contact.name}: ${name}\n${dict.contact.contactField}: ${contact}\n\n${dict.contact.message}:\n${message}`,
    );

    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setStatus("opened");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium">
          {dict.contact.name}
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-2 h-12 w-full rounded-2xl border border-border bg-white px-4 text-sm outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
          placeholder={dict.contact.namePlaceholder}
        />
      </div>
      <div>
        <label htmlFor="contact" className="text-sm font-medium">
          {dict.contact.contactField}
        </label>
        <input
          id="contact"
          name="contact"
          required
          className="mt-2 h-12 w-full rounded-2xl border border-border bg-white px-4 text-sm outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
          placeholder={dict.contact.contactPlaceholder}
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">
          {dict.contact.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
          placeholder={dict.contact.messagePlaceholder}
        />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        {dict.common.bookConsultation}
      </Button>
      {status === "opened" ? (
        <p className="text-sm text-muted">{dict.contact.formSuccess}</p>
      ) : null}
    </form>
  );
}
