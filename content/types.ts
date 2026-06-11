export type Locale = "en" | "es" | "pt-br";

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

export type HomeContent = {
  locale: Locale;
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
