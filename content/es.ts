import { enContent } from "./en";
import type { HomeContent } from "./types";

export const esContent: HomeContent = {
  ...enContent,
  locale: "es",
  seo: {
    title: "Beyond Thought Method | Infraestructura preinterpretativa",
    description:
      "Un método para examinar la interpretación antes de que se convierta en acción.",
    ogTitle: "Beyond Thought Method | Infraestructura preinterpretativa",
    ogDescription:
      "Ayuda a distinguir lo que se observa, lo que se supone y lo que sigue siendo incierto antes de que la comprensión pase a decisiones, colaboración o IA.",
    canonicalPath: "/es",
    locale: "es",
    languageTag: "es",
  },
  navigation: {
    ...enContent.navigation,
    label: "Navegación de la página",
    items: [
      {
        label: "Método",
        href: "#method",
      },
      {
        label: "Demos",
        href: "#demos",
      },
      {
        label: "Usos",
        href: "#applications",
      },
      {
        label: "Trabajo conectado",
        href: "#connected-work",
      },
      {
        label: "VIREKA Space",
        href: "https://vireka.space",
        external: true,
      },
    ],
  },
  hero: {
    ...enContent.hero,
    eyebrow: "Beyond Thought Method",
    headline: "Infraestructura preinterpretativa",
    subheadline:
      "Un método para examinar la interpretación antes de que se convierta en acción.",
    supportingLine:
      "Ayuda a distinguir lo que se observa, lo que se supone y lo que sigue siendo incierto antes de que la comprensión pase a decisiones, colaboración o IA.",
    ctas: [
      {
        label: "→ Explorar VIREKA Space",
        href: "https://vireka.space",
      },
      {
        label: "→ Leer la indagación de base",
        href: "https://vireka.space/beyond-thought",
      },
    ],
  },
  problem: {
    eyebrow: "EL PROBLEMA",
    headline: "La interpretación muchas veces ocurre antes de que nos demos cuenta.",
    paragraphs: [
      "Decisiones, mensajes, prompts de IA, conclusiones de equipo y juicios muchas veces comienzan desde un encuadre que ya se formó.",
      "Un momento se vuelve una historia. Una señal se vuelve un motivo. Una brecha se vuelve una conclusión. Las suposiciones pueden quedar incorporadas antes de ser examinadas.",
      "El método ayuda a hacer visible ese encuadre antes de que la interpretación se convierta en acción, para que las personas y los sistemas de IA puedan trabajar con distinciones más claras.",
    ],
  },
  method: {
    eyebrow: "EL MÉTODO",
    headline: "Estructura de claridad en cinco partes",
    intro:
      "El Beyond Thought Method no elimina la interpretación. Le da una estructura visible a la interpretación, para que la incertidumbre pueda permanecer presente en lugar de resolverse prematuramente.",
    clarityFrame: [
      {
        title: "Lo que se observa",
        description:
          "Nombra lo que está directamente disponible antes de añadir motivo, significado o conclusión.",
      },
      {
        title: "Lo que puede estar siendo supuesto",
        description:
          "Separa posibles interpretaciones de aquello que la propia situación ya estableció.",
      },
      {
        title: "Lo que permanece incierto",
        description:
          "Mantén visibles las preguntas abiertas en vez de llenarlas con una respuesta conveniente.",
      },
      {
        title: "Lo que puede estar influyendo en el encuadre",
        description:
          "Observa el contexto, la presión, la emoción, el hábito o las restricciones del sistema que puedan moldear la interpretación.",
      },
      {
        title: "Lo que puede seguir adelante con responsabilidad",
        description:
          "Elige un próximo movimiento que corresponda a lo que se sabe, respetando lo que aún permanece incierto.",
      },
    ],
    note:
      "La estructura desacelera la conclusión lo suficiente para que observación, interpretación supuesta, incertidumbre, influencia y movimiento responsable puedan verse juntos.",
  },
  methodDemos: {
    ...enContent.methodDemos,
    eyebrow: "DEMOS DEL MÉTODO",
    title: "Una frase se convierte en una estructura.",
    intro:
      "Estos ejemplos estáticos muestran cómo el mismo método puede separar una frase inicial en observación, interpretación supuesta, incertidumbre y próximo movimiento responsable.",
    interactionHint:
      "Elige una escena y cambia el idioma del demo para comparar la misma estructura.",
    languageSelectorLabel: "Idioma del demo",
  },
  applications: {
    eyebrow: "USOS",
    title: "Dónde puede ayudar el método",
    items: [
      {
        id: "education",
        label: "Educación",
        narrative:
          "El aprendizaje se vuelve más claro cuando los estudiantes pueden distinguir lo que se observa, lo que está siendo supuesto y lo que sigue siendo incierto. El método ayuda a hacer visible esa distinción antes de que las conclusiones queden fijadas.",
        supportingText:
          "La claridad ayuda a que el razonamiento sea más fácil de ver, cuestionar y conversar.",
      },
      {
        id: "ai-prompts",
        label: "Prompts de IA",
        narrative:
          "La IA no recibe solo una solicitud; también recibe el encuadre que esa solicitud lleva consigo. Cuando la observación, la interpretación y la incertidumbre están más claras, es menos probable que la IA incorpore una suposición no examinada en su respuesta.",
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
          "Un encuadre más claro puede favorecer un diálogo más productivo.",
      },
    ],
  },
  ecosystem: {
    eyebrow: "TRABAJO CONECTADO",
    title: "Una misma línea de trabajo, tres formas",
    intro:
      "Beyond Thought, Beyond Thought Method y VIREKA Space no son direcciones separadas. Son expresiones distintas de una misma indagación: cómo la interpretación influye en lo que percibimos, decidimos, diseñamos y ponemos en acción.",
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
