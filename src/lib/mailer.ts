import nodemailer from "nodemailer";
import { SITE } from "@/lib/constants";

type MailPayload = {
  subject: string;
  text: string;
  replyTo?: string;
};

function readSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !user || !pass) return null;

  const port = Number(process.env.SMTP_PORT ?? 587);

  return {
    host,
    port,
    secure: port === 465,
    requireTLS: port === 587,
    auth: { user, pass },
    from: process.env.SMTP_FROM ?? user,
    to: process.env.MAIL_TO ?? SITE.email,
  };
}

export async function sendMail({ subject, text, replyTo }: MailPayload) {
  const config = readSmtpConfig();
  if (!config) {
    throw new Error("SMTP is not configured");
  }

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    requireTLS: config.requireTLS,
    auth: config.auth,
  });

  await transporter.sendMail({
    from: `"${SITE.name}" <${config.from}>`,
    to: config.to,
    subject,
    text,
    replyTo,
  });
}

export function isMailConfigured() {
  return readSmtpConfig() !== null;
}
