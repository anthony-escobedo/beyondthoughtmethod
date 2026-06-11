import { enContent } from "./en";
import type { HomeContent } from "./types";

// Placeholder-equivalent content for the locale route. Full Brazilian
// Portuguese localization can replace these values without changing route or
// rendering code.
export const ptBrContent: HomeContent = {
  ...enContent,
  locale: "pt-br",
};
