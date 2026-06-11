import { notFound } from "next/navigation";

import { HomePage } from "../_components/HomePage";
import { getLocaleContent, isSupportedLocale, locales } from "@/content";
import { buildPageMetadata } from "@/content/metadata";

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== "en")
    .map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale) || locale === "en") {
    return {};
  }

  return buildPageMetadata(getLocaleContent(locale));
}

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale) || locale === "en") {
    notFound();
  }

  return <HomePage content={getLocaleContent(locale)} />;
}
