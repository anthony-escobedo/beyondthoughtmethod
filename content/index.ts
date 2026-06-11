import { enContent } from "./en";
import { esContent } from "./es";
import { ptBrContent } from "./pt-br";
import type { HomeContent, Locale, MethodDemoLanguageId } from "./types";

const localeContent: Record<Locale, HomeContent> = {
  en: enContent,
  es: esContent,
  "pt-br": ptBrContent,
};

export const locales = Object.keys(localeContent) as Locale[];

export function isSupportedLocale(locale: string): locale is Locale {
  return locale in localeContent;
}

export function getLocaleContent(locale: Locale): HomeContent {
  return localeContent[locale];
}

export function getDefaultMethodDemoLanguage(locale?: string | null): MethodDemoLanguageId {
  const candidate = locale ?? "";
  return isSupportedLocale(candidate) ? candidate : "en";
}

export type {
  HomeContent,
  Locale,
  MethodDemoLanguageId,
  MethodDemoSceneId,
  MethodDemosContent,
} from "./types";
