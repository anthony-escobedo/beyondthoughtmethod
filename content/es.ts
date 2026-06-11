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
  navigation: {
    ...enContent.navigation,
  },
  problem: {
    eyebrow: "The Problem",
    headline: "Interpretation often happens before we notice it.",
    paragraphs: [
      "Decisions, messages, AI prompts, team conclusions, and judgments often begin from a frame that has already formed.",
      "A moment becomes a story. A signal becomes a motive. A gap becomes a conclusion. Assumptions can become embedded before they have been examined.",
      "The method helps make that frame visible before interpretation becomes action, so people and AI systems can work with clearer distinctions.",
    ],
  },
  method: {
    eyebrow: "The Method",
    headline: "Five-part clarity frame",
    intro:
      "The Beyond Thought Method does not remove interpretation. It gives interpretation a visible structure, so uncertainty can remain present instead of being prematurely resolved.",
    clarityFrame: [
      {
        title: "What is observed",
        description: "Name what is directly available before adding motive, meaning, or conclusion.",
      },
      {
        title: "What may be assumed",
        description: "Separate possible interpretations from what the situation itself has established.",
      },
      {
        title: "What remains unclear",
        description: "Keep open questions visible instead of filling them with a convenient answer.",
      },
      {
        title: "What may be influencing the frame",
        description: "Notice context, pressure, emotion, habit, or system constraints that may shape interpretation.",
      },
      {
        title: "What can responsibly move forward",
        description: "Choose a next movement that fits what is known while respecting what is still uncertain.",
      },
    ],
    note:
      "The frame is meant to slow conclusion just enough for observation, assumption, uncertainty, influence, and responsible movement to be seen together.",
  },
  connectedWork: {
    eyebrow: "Connected Work",
    headline: "How the projects relate",
    intro:
      "These projects belong to the same inquiry, but they do different work. The relationship is intentionally simple.",
    items: [
      {
        name: "Beyond Thought",
        role: "source inquiry",
        description:
          "Asks the source question: what becomes possible when interpretation is seen before it hardens into conclusion?",
      },
      {
        name: "Beyond Thought Method",
        role: "applied framework",
        description:
          "Makes the inquiry usable through a practical structure for observation, assumption, uncertainty, influence, and responsible next movement.",
      },
      {
        name: "VIREKA Space",
        role: "software implementation",
        description:
          "Applies the method in software, especially where human reflection and AI-aided understanding need clearer boundaries.",
      },
    ],
    futureWork: {
      eyebrow: "Optional future extension",
      name: "ANAKARA Space",
      description:
        "A future symbolic and pattern-oriented inquiry that may extend the broader exploration beyond the current method and software implementation.",
    },
  },
};
