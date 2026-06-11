import { enContent } from "./en";
import type { HomeContent } from "./types";

// Placeholder-equivalent content for the locale route. Full Spanish localization
// can replace these values without changing route or rendering code.
export const esContent: HomeContent = {
  ...enContent,
  locale: "es",
};
