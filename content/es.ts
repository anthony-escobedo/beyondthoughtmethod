import { enContent } from "./en";
import type { HomeContent } from "./types";

// Placeholder-equivalent content for the locale route. Full Spanish localization
// can replace these values without changing route or rendering code.
export const esContent: HomeContent = {
  ...enContent,
  locale: "es",
  seo: {
    title: "Beyond Thought Method | Infraestructura preinterpretativa (placeholder ES)",
    description:
      "Ruta en español con contenido equivalente provisional para el marco Beyond Thought Method; la localización final queda pendiente.",
    ogTitle: "Beyond Thought Method | Infraestructura preinterpretativa (placeholder ES)",
    ogDescription:
      "Ruta en español con contenido equivalente provisional para el marco Beyond Thought Method; la localización final queda pendiente.",
    canonicalPath: "/es",
    locale: "es",
    languageTag: "es",
  },
};
