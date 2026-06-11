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
  methodDemos: {
    ...enContent.methodDemos,
    eyebrow: "Demos del método",
    title: "Una frase se convierte en una estructura.",
    intro:
      "Estos ejemplos estáticos muestran cómo el mismo método puede separar una frase inicial en observación, suposición, incertidumbre y próximo movimiento responsable.",
    interactionHint:
      "Elige una escena y cambia el idioma del demo para comparar la misma estructura.",
    languageSelectorLabel: "Idioma del demo",
  },
  applications: {
    eyebrow: "Aplicaciones",
    title: "Dónde puede ayudar el marco",
    items: [
      {
        id: "education",
        label: "Educación",
        narrative:
          "El aprendizaje se vuelve más claro cuando los estudiantes pueden distinguir lo que se observa, lo que se supone y lo que sigue siendo incierto. El método ayuda a hacer visible esa distinción antes de que las conclusiones queden fijadas.",
        supportingText:
          "La claridad ayuda a que el razonamiento sea más fácil de ver, cuestionar y conversar.",
      },
      {
        id: "ai-prompts",
        label: "Prompts de IA",
        narrative:
          "La IA no recibe solo una solicitud; también recibe el marco que esa solicitud lleva consigo. Cuando la observación, la interpretación y la incertidumbre están más claras, es menos probable que la IA incorpore una suposición no examinada en su respuesta.",
        supportingText: "Los mejores prompts suelen comenzar con un contexto más claro.",
      },
      {
        id: "teams",
        label: "Equipos",
        narrative:
          "Los grupos a menudo tienen dificultades porque las personas responden a significados distintos dentro de la misma situación. El método ayuda a hacer visibles las suposiciones para que el grupo pueda ver qué se comparte, qué difiere y qué sigue sin resolverse.",
        supportingText:
          "La claridad compartida mejora cuando las suposiciones se vuelven visibles.",
      },
      {
        id: "communication",
        label: "Comunicación",
        narrative:
          "Las conversaciones pueden volverse reactivas cuando las conclusiones llegan antes que el contexto. Distinguir la observación de la interpretación crea más espacio para la comprensión.",
        supportingText: "La claridad puede reducir escaladas innecesarias.",
      },
      {
        id: "decisions",
        label: "Decisiones",
        narrative:
          "Muchas decisiones están influenciadas por suposiciones que parecen hechos establecidos. El método ayuda a distinguir entre lo que está fundamentado y lo que sigue siendo incierto.",
        supportingText:
          "La incertidumbre visible suele mejorar la calidad de las decisiones.",
      },
      {
        id: "facilitation",
        label: "Facilitación",
        narrative:
          "La facilitación puede ayudar a un grupo a desacelerar lo suficiente para ver qué se sabe, qué se está suponiendo y qué todavía necesita atención. El método le da una estructura más clara a esa pausa.",
        supportingText:
          "Un marco más claro puede favorecer un diálogo más productivo.",
      },
    ],
  },
  ecosystem: {
    eyebrow: "Trabajo conectado",
    title: "Una misma línea de trabajo, tres formas",
    intro:
      "Beyond Thought, Beyond Thought Method y VIREKA Space no son direcciones separadas. Son expresiones distintas de una misma indagación: cómo la interpretación influye en lo que percibimos, decidimos, diseñamos y llevamos a la acción.",
    items: [
      {
        id: "beyond-thought",
        title: "Beyond Thought",
        label: "La indagación",
        description:
          "Una exploración de la conciencia, la interpretación y la manera en que el significado influye en lo que construimos.",
      },
      {
        id: "beyond-thought-method",
        title: "Beyond Thought Method",
        label: "El método",
        description:
          "Una forma práctica de examinar la interpretación antes de que se convierta en acción.",
      },
      {
        id: "vireka-space",
        title: "VIREKA Space",
        label: "La práctica",
        description:
          "Un espacio donde el contexto aclarado puede apoyar decisiones, colaboración y trabajo con IA.",
      },
    ],
    closing:
      "Juntos, avanzan de la indagación al método y luego a la práctica, sin reducir la claridad a una función de producto.",
  },
};
