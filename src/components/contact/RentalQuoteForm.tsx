"use client";

import { FormEvent, useState } from "react";
import { SITE } from "@/lib/constants";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Button } from "@/components/ui/button";

type Status = "idle" | "sending" | "sent" | "error";

export function RentalQuoteForm({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const { rentalQuote } = dict;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const equipment = rentalQuote.equipmentTypes
      .filter((item) => data.get(`equipment-${item.id}`) === "on")
      .map((item) => item.label);

    setStatus("sending");

    try {
      const response = await fetch("/api/rental-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: data.get("company"),
          contact: data.get("contact"),
          quantity: data.get("quantity"),
          message: data.get("message"),
          equipment,
          locale,
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="rental-company" className="text-sm font-medium">
          {rentalQuote.company}
        </label>
        <input
          id="rental-company"
          name="company"
          required
          className="mt-2 h-12 w-full rounded-2xl border border-border bg-white px-4 text-sm outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
          placeholder={rentalQuote.companyPlaceholder}
        />
      </div>

      <div>
        <label htmlFor="rental-contact" className="text-sm font-medium">
          {rentalQuote.contactField}
        </label>
        <input
          id="rental-contact"
          name="contact"
          required
          className="mt-2 h-12 w-full rounded-2xl border border-border bg-white px-4 text-sm outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
          placeholder={rentalQuote.contactPlaceholder}
        />
      </div>

      <fieldset>
        <legend className="text-sm font-medium">
          {rentalQuote.equipmentLabel}
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {rentalQuote.equipmentTypes.map((item) => (
            <label
              key={item.id}
              className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 text-sm transition hover:border-primary/25"
            >
              <input
                type="checkbox"
                name={`equipment-${item.id}`}
                className="size-4 rounded border-border text-primary focus:ring-primary/30"
              />
              <span>{item.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="rental-quantity" className="text-sm font-medium">
          {rentalQuote.quantity}
        </label>
        <input
          id="rental-quantity"
          name="quantity"
          className="mt-2 h-12 w-full rounded-2xl border border-border bg-white px-4 text-sm outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
          placeholder={rentalQuote.quantityPlaceholder}
        />
      </div>

      <div>
        <label htmlFor="rental-message" className="text-sm font-medium">
          {rentalQuote.message}
        </label>
        <textarea
          id="rental-message"
          name="message"
          rows={4}
          className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
          placeholder={rentalQuote.messagePlaceholder}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={status === "sending"}
      >
        {status === "sending" ? rentalQuote.submitting : rentalQuote.submit}
      </Button>

      {status === "sent" ? (
        <p aria-live="polite" className="text-sm font-medium text-primary">
          {rentalQuote.formSuccess}
        </p>
      ) : null}
      {status === "error" ? (
        <p aria-live="polite" className="text-sm text-muted">
          {rentalQuote.formError}{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="font-medium text-primary underline underline-offset-4"
          >
            {SITE.email}
          </a>
        </p>
      ) : null}
    </form>
  );
}
