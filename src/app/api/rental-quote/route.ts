import { sendMail } from "@/lib/mailer";

type QuoteRequest = {
  company?: string;
  contact?: string;
  equipment?: string[];
  quantity?: string;
  message?: string;
  locale?: string;
};

const MAX_LENGTH = 2000;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, MAX_LENGTH) : "";
}

export async function POST(request: Request) {
  let payload: QuoteRequest;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "invalid_body" }, { status: 400 });
  }

  const company = clean(payload.company);
  const contact = clean(payload.contact);
  const quantity = clean(payload.quantity);
  const message = clean(payload.message);
  const equipment = Array.isArray(payload.equipment)
    ? payload.equipment.map(clean).filter(Boolean).slice(0, 20)
    : [];
  const isThai = payload.locale === "th";

  if (!company || !contact) {
    return Response.json({ error: "missing_fields" }, { status: 400 });
  }

  const labels = isThai
    ? {
        subject: "คำขอใบเสนอราคาเช่าอุปกรณ์ IT จาก",
        company: "ชื่อ / บริษัท",
        contact: "อีเมลหรือโทรศัพท์",
        equipment: "อุปกรณ์ที่สนใจ",
        quantity: "จำนวนและระยะเวลาเช่า",
        message: "รายละเอียดเพิ่มเติม",
      }
    : {
        subject: "IT rental quote request from",
        company: "Name / Company",
        contact: "Email or phone",
        equipment: "Equipment of interest",
        quantity: "Quantity & rental period",
        message: "Additional details",
      };

  const text = [
    `${labels.company}: ${company}`,
    `${labels.contact}: ${contact}`,
    "",
    `${labels.equipment}:`,
    equipment.length > 0 ? equipment.map((item) => `- ${item}`).join("\n") : "-",
    "",
    `${labels.quantity}: ${quantity || "-"}`,
    "",
    `${labels.message}:`,
    message || "-",
  ].join("\n");

  const replyTo = contact.includes("@") ? contact : undefined;

  try {
    await sendMail({
      subject: `${labels.subject} ${company}`,
      text,
      replyTo,
    });
  } catch (error) {
    console.error("Failed to send rental quote request", error);
    return Response.json({ error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
