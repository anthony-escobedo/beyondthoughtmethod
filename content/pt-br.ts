import { enContent } from "./en";
import type { HomeContent } from "./types";

// Placeholder-equivalent content for the locale route. Full Brazilian
// Portuguese localization can replace these values without changing route or
// rendering code.
export const ptBrContent: HomeContent = {
  ...enContent,
  locale: "pt-br",
  seo: {
    title: "Beyond Thought Method | Infraestrutura preinterpretativa (placeholder PT-BR)",
    description:
      "Rota em português brasileiro com conteúdo equivalente provisório para o framework Beyond Thought Method; a localização final fica pendente.",
    ogTitle: "Beyond Thought Method | Infraestrutura preinterpretativa (placeholder PT-BR)",
    ogDescription:
      "Rota em português brasileiro com conteúdo equivalente provisório para o framework Beyond Thought Method; a localização final fica pendente.",
    canonicalPath: "/pt-br",
    locale: "pt_BR",
    languageTag: "pt-BR",
  },
};
