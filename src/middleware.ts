import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, locales } from "@/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // static files
  ) {
    return NextResponse.next();
  }

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const header = request.headers.get("accept-language") || "";
  const preferred = header
    .split(",")
    .map((part) => part.split(";")[0]?.trim().toLowerCase())
    .find((lang) => lang?.startsWith("th") || lang?.startsWith("en"));

  const locale =
    preferred?.startsWith("en") ? "en" : preferred?.startsWith("th") ? "th" : defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${isLocale(locale) ? locale : defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
