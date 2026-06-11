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
  description: string;
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

export type MethodFrameItem = {
  title: string;
  description: string;
};

export type FutureWork = {
  eyebrow: string;
  name: string;
  description: string;
};

export type HomeContent = {
  locale: Locale;
  seo: SeoContent;
  navigation: {
    label: string;
    homeLabel: string;
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
    paragraphs: string[];
  };
  method: {
    eyebrow: string;
    headline: string;
    intro: string;
    clarityFrame: MethodFrameItem[];
    note: string;
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
    intro: string;
    items: ConnectedWork[];
    futureWork: FutureWork;
  };
};
