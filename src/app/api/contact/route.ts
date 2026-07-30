import { sendMail } from "@/lib/mailer";

type ContactRequest = {
  name?: string;
  contact?: string;
  message?: string;
  locale?: string;
  website?: string;
};

const MAX_LENGTH = 4000;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, MAX_LENGTH) : "";
}

export async function POST(request: Request) {
  let payload: ContactRequest;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "invalid_body" }, { status: 400 });
  }

  // Honeypot field: silently accept automated spam without sending mail.
  if (clean(payload.website)) {
    return Response.json({ ok: true });
  }

  const name = clean(payload.name);
  const contact = clean(payload.contact);
  const message = clean(payload.message);
  const isThai = payload.locale === "th";

  if (!name || !contact || !message) {
    return Response.json({ error: "missing_fields" }, { status: 400 });
  }

  const labels = isThai
    ? {
        subject: "คำขอนัดปรึกษาจาก",
        name: "ชื่อ",
        contact: "อีเมลหรือโทรศัพท์",
        message: "ข้อความ",
      }
    : {
        subject: "Consultation request from",
        name: "Name",
        contact: "Email or phone",
        message: "Message",
      };

  try {
    await sendMail({
      subject: `${labels.subject} ${name}`,
      text: [
        `${labels.name}: ${name}`,
        `${labels.contact}: ${contact}`,
        "",
        `${labels.message}:`,
        message,
      ].join("\n"),
      replyTo: contact.includes("@") ? contact : undefined,
    });
  } catch (error) {
    console.error("Failed to send contact request", error);
    return Response.json({ error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
