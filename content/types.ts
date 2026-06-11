export type Locale = "en" | "es" | "pt-br";

export type SeoLocale = "en_US" | "es" | "pt_BR";

export type LanguageTag = "en" | "es" | "pt-BR";

export type CanonicalPath = "/" | "/es" | "/pt-br";

export type SeoContent = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  canonicalPath: CanonicalPath;
  locale: SeoLocale;
  languageTag: LanguageTag;
};

export type DemoCard = {
  title: string;
  text: string;
};

export type ConnectedWork = {
  name: string;
  role: string;
};

export type CallToAction = {
  label: string;
  href: string;
};

export type NavigationItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type HomeContent = {
  locale: Locale;
  seo: SeoContent;
  navigation: {
    label: string;
    items: NavigationItem[];
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    ctasLabel: string;
    ctas: CallToAction[];
  };
  problem: {
    eyebrow: string;
    headline: string;
    text: string;
  };
  method: {
    eyebrow: string;
    headline: string;
    clarityFrame: string[];
  };
  experience: {
    eyebrow: string;
    headline: string;
    demoCards: DemoCard[];
  };
  applications: {
    eyebrow: string;
    headline: string;
    items: string[];
  };
  doesNotDo: {
    eyebrow: string;
    headline: string;
    text: string;
  };
  connectedWork: {
    eyebrow: string;
    headline: string;
    items: ConnectedWork[];
  };
};
