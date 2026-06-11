import { notFound } from "next/navigation";

import { HomePage } from "../_components/HomePage";
import { getLocaleContent, isSupportedLocale, locales } from "@/content";

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== "en")
    .map((locale) => ({ locale }));
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
