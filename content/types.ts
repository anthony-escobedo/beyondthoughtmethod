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

export type EcosystemItem = {
  id: string;
  title: string;
  label: string;
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

export type MethodDemoLanguageId = "en" | "es" | "pt-br";

export type MethodDemoSceneId =
  | "interpretation-shift"
  | "ai-prompt-transformation"
  | "observation-vs-assumption";

export type MethodDemoLayerTone = "observed" | "assumption" | "unclear" | "movement";

export type MethodDemoLanguage = {
  id: MethodDemoLanguageId;
  label: string;
  shortLabel: string;
};

export type MethodDemoLayer = {
  label: string;
  text: string | string[];
  tone: MethodDemoLayerTone;
  annotation?: string;
};

export type MethodDemoScene = {
  id: MethodDemoSceneId;
  order: string;
  title: string;
  shortTitle: string;
  description: string;
  inputLabel: string;
  input: string;
  layers: MethodDemoLayer[];
  movementLabel: string;
  movement: string;
};

export type MethodDemosContent = {
  eyebrow: string;
  title: string;
  intro: string;
  interactionHint: string;
  languageSelectorLabel: string;
  languages: MethodDemoLanguage[];
  scenesByLanguage: Record<MethodDemoLanguageId, MethodDemoScene[]>;
};

export type ApplicationNarrative = {
  id: string;
  label: string;
  narrative: string;
  supportingText: string;
};

export type ApplicationsContent = {
  eyebrow: string;
  title: string;
  intro?: string;
  items: ApplicationNarrative[];
};

export type EcosystemContent = {
  eyebrow: string;
  title: string;
  intro: string;
  items: EcosystemItem[];
  closing: string;
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
  methodDemos: MethodDemosContent;
  experience: {
    eyebrow: string;
    headline: string;
    demoCards: DemoCard[];
  };
  applications: ApplicationsContent;
  doesNotDo: {
    eyebrow: string;
    headline: string;
    text: string;
  };
  ecosystem: EcosystemContent;
};
