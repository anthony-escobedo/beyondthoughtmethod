import type { HomeContent } from "./types";

export const enContent: HomeContent = {
  locale: "en",
  seo: {
    title: "Beyond Thought Method | Pre-Interpretive Infrastructure",
    description:
      "A practical framework for distinguishing observation, assumption, uncertainty, influence, and responsible next movement before interpretation becomes conclusion.",
    ogTitle: "Beyond Thought Method | Pre-Interpretive Infrastructure",
    ogDescription:
      "A practical framework for distinguishing observation, assumption, uncertainty, influence, and responsible next movement before interpretation becomes conclusion.",
    canonicalPath: "/",
    locale: "en_US",
    languageTag: "en",
  },
  navigation: {
    label: "Page navigation",
    homeLabel: "Beyond Thought Method",
    items: [
      {
        label: "Method",
        href: "#method",
      },
      {
        label: "Demos",
        href: "#demos",
      },
      {
        label: "Applications",
        href: "#applications",
      },
      {
        label: "Connected Work",
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
    eyebrow: "Beyond Thought Method",
    headline: "Pre-Interpretive Infrastructure for Human and AI-Aided Understanding",
    subheadline:
      "The Beyond Thought Method helps distinguish observation, assumption, uncertainty, influence, and responsible next movement before interpretation hardens into conclusion.",
    ctasLabel: "Primary links",
    ctas: [
      {
        label: "→ Explore VIREKA Space",
        href: "https://vireka.space",
      },
      {
        label: "→ Read the source inquiry",
        href: "https://vireka.space/beyond-thought",
      },
    ],
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
    eyebrow: "Method Demos",
    title: "A sentence becomes a structure.",
    intro:
      "These static examples show how the same method can separate an initial sentence into observation, assumption, uncertainty, and responsible next movement.",
    interactionHint: "Choose a scene, then switch demo language to compare the same structure.",
    languageSelectorLabel: "Demo language",
    languages: [
      {
        id: "en",
        label: "English",
        shortLabel: "EN",
      },
      {
        id: "es",
        label: "Spanish",
        shortLabel: "ES",
      },
      {
        id: "pt-br",
        label: "Brazilian Portuguese",
        shortLabel: "PT-BR",
      },
    ],
    scenesByLanguage: {
      en: [
        {
          id: "interpretation-shift",
          order: "01",
          title: "Interpretation Shift",
          shortTitle: "Interpretation",
          description:
            "See how one statement can separate into what happened, what may be assumed, what remains unclear, and what can responsibly move forward.",
          inputLabel: "Initial statement",
          input: "They did not invite me to the meeting.",
          layers: [
            {
              label: "Observation",
              text: "I was not invited to the meeting.",
              tone: "observed",
            },
            {
              label: "Possible assumptions",
              text: [
                "They excluded me intentionally.",
                "They do not value my participation.",
                "The invitation list may have been limited.",
              ],
              tone: "assumption",
            },
            {
              label: "What remains unclear",
              text: [
                "Who created the invitation list.",
                "Why I was not included.",
                "Whether my participation was expected.",
              ],
              tone: "unclear",
            },
          ],
          movementLabel: "Responsible next movement",
          movement: "Seek additional context before concluding intent.",
        },
        {
          id: "ai-prompt-transformation",
          order: "02",
          title: "AI Prompt Transformation",
          shortTitle: "AI Prompt",
          description:
            "See how AI receives a frame before it generates action, and how preserving uncertainty changes the request.",
          inputLabel: "Initial prompt frame",
          input: "My team ignored my proposal. Write an email confronting them.",
          layers: [
            {
              label: "Assumption-led prompt",
              text: "My team ignored my proposal. Write an email confronting them.",
              tone: "assumption",
              annotation: "Intent is already concluded.",
            },
            {
              label: "Assumed intent",
              text: "The team ignored the proposal.",
              tone: "assumption",
              annotation: "The reason for the silence is treated as known.",
            },
            {
              label: "Clarified prompt",
              text:
                "My proposal has not received a response. I feel ignored, but I do not know the reason. Write an email seeking clarity while preserving a constructive relationship.",
              tone: "observed",
              annotation: "Uncertainty remains visible.",
            },
            {
              label: "What remains unclear",
              text: [
                "Why the proposal has not received a response.",
                "Whether the team saw it.",
                "Whether timing, priorities, or process shaped the silence.",
              ],
              tone: "unclear",
            },
          ],
          movementLabel: "Responsible next movement",
          movement:
            "Give AI context that separates observation, feeling, and uncertainty before asking for action.",
        },
        {
          id: "observation-vs-assumption",
          order: "03",
          title: "Observation vs Assumption",
          shortTitle: "Observation",
          description:
            "See how one sentence can contain both an observable event and an interpretation that has not been established.",
          inputLabel: "Mixed statement",
          input: "The manager rejected my idea because they don't respect my work.",
          layers: [
            {
              label: "Observation",
              text: "The idea was not accepted.",
              tone: "observed",
            },
            {
              label: "Assumption",
              text: "The manager does not respect my work.",
              tone: "assumption",
            },
            {
              label: "What remains unclear",
              text: "Why the idea was not accepted.",
              tone: "unclear",
            },
          ],
          movementLabel: "Responsible next movement",
          movement: "Ask what criteria or constraints shaped the decision.",
        },
      ],
      es: [
        {
          id: "interpretation-shift",
          order: "01",
          title: "Cambio de interpretación",
          shortTitle: "Interpretación",
          description:
            "Observa cómo una frase puede separar lo que ocurrió, lo que puede estar asumido, lo que sigue sin estar claro y lo que puede avanzar responsablemente.",
          inputLabel: "Declaración inicial",
          input: "No me invitaron a la reunión.",
          layers: [
            {
              label: "Observación",
              text: "No fui invitado a la reunión.",
              tone: "observed",
            },
            {
              label: "Posibles suposiciones",
              text: [
                "Me excluyeron intencionalmente.",
                "No valoran mi participación.",
                "La lista de invitados pudo haber sido limitada.",
              ],
              tone: "assumption",
            },
            {
              label: "Lo que sigue sin estar claro",
              text: [
                "Quién creó la lista de invitados.",
                "Por qué no fui incluido.",
                "Si se esperaba mi participación.",
              ],
              tone: "unclear",
            },
          ],
          movementLabel: "Próximo movimiento responsable",
          movement: "Buscar más contexto antes de concluir intención.",
        },
        {
          id: "ai-prompt-transformation",
          order: "02",
          title: "Transformación de prompt para IA",
          shortTitle: "Prompt IA",
          description:
            "Observa cómo la IA recibe un marco antes de generar una acción, y cómo preservar la incertidumbre cambia la solicitud.",
          inputLabel: "Marco inicial del prompt",
          input: "Mi equipo ignoró mi propuesta. Escribe un correo para confrontarlos.",
          layers: [
            {
              label: "Prompt guiado por suposición",
              text: "Mi equipo ignoró mi propuesta. Escribe un correo para confrontarlos.",
              tone: "assumption",
              annotation: "La intención ya está concluida.",
            },
            {
              label: "Intención asumida",
              text: "El equipo ignoró la propuesta.",
              tone: "assumption",
              annotation: "La razón del silencio se trata como conocida.",
            },
            {
              label: "Prompt aclarado",
              text:
                "Mi propuesta no ha recibido respuesta. Me siento ignorado, pero no sé la razón. Escribe un correo para pedir claridad mientras preservo una relación constructiva.",
              tone: "observed",
              annotation: "La incertidumbre sigue visible.",
            },
            {
              label: "Lo que sigue sin estar claro",
              text: [
                "Por qué la propuesta no ha recibido respuesta.",
                "Si el equipo la vio.",
                "Si el momento, las prioridades o el proceso influyeron en el silencio.",
              ],
              tone: "unclear",
            },
          ],
          movementLabel: "Próximo movimiento responsable",
          movement:
            "Dar a la IA un contexto que separe observación, sensación e incertidumbre antes de pedir una acción.",
        },
        {
          id: "observation-vs-assumption",
          order: "03",
          title: "Observación vs suposición",
          shortTitle: "Observación",
          description:
            "Observa cómo una frase puede contener un hecho observable y una interpretación que todavía no ha sido establecida.",
          inputLabel: "Declaración mixta",
          input: "El gerente rechazó mi idea porque no respeta mi trabajo.",
          layers: [
            {
              label: "Observación",
              text: "La idea no fue aceptada.",
              tone: "observed",
            },
            {
              label: "Suposición",
              text: "El gerente no respeta mi trabajo.",
              tone: "assumption",
            },
            {
              label: "Lo que sigue sin estar claro",
              text: "Por qué la idea no fue aceptada.",
              tone: "unclear",
            },
          ],
          movementLabel: "Próximo movimiento responsable",
          movement: "Preguntar qué criterios o restricciones influyeron en la decisión.",
        },
      ],
      "pt-br": [
        {
          id: "interpretation-shift",
          order: "01",
          title: "Mudança de interpretação",
          shortTitle: "Interpretação",
          description:
            "Veja como uma frase pode separar o que aconteceu, o que pode estar sendo presumido, o que ainda não está claro e o que pode avançar com responsabilidade.",
          inputLabel: "Declaração inicial",
          input: "Não me convidaram para a reunião.",
          layers: [
            {
              label: "Observação",
              text: "Eu não fui convidado para a reunião.",
              tone: "observed",
            },
            {
              label: "Possíveis suposições",
              text: [
                "Eles me excluíram intencionalmente.",
                "Eles não valorizam minha participação.",
                "A lista de convidados pode ter sido limitada.",
              ],
              tone: "assumption",
            },
            {
              label: "O que ainda não está claro",
              text: [
                "Quem criou a lista de convidados.",
                "Por que eu não fui incluído.",
                "Se a minha participação era esperada.",
              ],
              tone: "unclear",
            },
          ],
          movementLabel: "Próximo movimento responsável",
          movement: "Buscar mais contexto antes de concluir intenção.",
        },
        {
          id: "ai-prompt-transformation",
          order: "02",
          title: "Transformação de prompt para IA",
          shortTitle: "Prompt IA",
          description:
            "Veja como a IA recebe um quadro antes de gerar uma ação, e como preservar a incerteza muda a solicitação.",
          inputLabel: "Quadro inicial do prompt",
          input: "Minha equipe ignorou minha proposta. Escreva um e-mail para confrontá-los.",
          layers: [
            {
              label: "Prompt guiado por suposição",
              text: "Minha equipe ignorou minha proposta. Escreva um e-mail para confrontá-los.",
              tone: "assumption",
              annotation: "A intenção já está concluída.",
            },
            {
              label: "Intenção presumida",
              text: "A equipe ignorou a proposta.",
              tone: "assumption",
              annotation: "A razão do silêncio é tratada como conhecida.",
            },
            {
              label: "Prompt esclarecido",
              text:
                "Minha proposta ainda não recebeu resposta. Eu me sinto ignorado, mas não sei o motivo. Escreva um e-mail pedindo clareza enquanto preservo uma relação construtiva.",
              tone: "observed",
              annotation: "A incerteza permanece visível.",
            },
            {
              label: "O que ainda não está claro",
              text: [
                "Por que a proposta ainda não recebeu resposta.",
                "Se a equipe a viu.",
                "Se timing, prioridades ou processo influenciaram o silêncio.",
              ],
              tone: "unclear",
            },
          ],
          movementLabel: "Próximo movimento responsável",
          movement:
            "Dar à IA um contexto que separe observação, sensação e incerteza antes de pedir uma ação.",
        },
        {
          id: "observation-vs-assumption",
          order: "03",
          title: "Observação vs suposição",
          shortTitle: "Observação",
          description:
            "Veja como uma frase pode conter um evento observável e uma interpretação que ainda não foi estabelecida.",
          inputLabel: "Declaração mista",
          input: "O gerente rejeitou minha ideia porque não respeita meu trabalho.",
          layers: [
            {
              label: "Observação",
              text: "A ideia não foi aceita.",
              tone: "observed",
            },
            {
              label: "Suposição",
              text: "O gerente não respeita meu trabalho.",
              tone: "assumption",
            },
            {
              label: "O que ainda não está claro",
              text: "Por que a ideia não foi aceita.",
              tone: "unclear",
            },
          ],
          movementLabel: "Próximo movimento responsável",
          movement: "Perguntar quais critérios ou restrições influenciaram a decisão.",
        },
      ],
    },
  },
  experience: {
    eyebrow: "Experience the Method",
    headline: "Lightweight demos for applied clarity",
    demoCards: [
      {
        title: "Interpretation Shift Demo",
        text: "Practice noticing where a conclusion has entered before the available evidence can support it.",
      },
      {
        title: "AI Prompt Transformation Demo",
        text: "See how a prompt changes when observation, uncertainty, and responsible next movement are made explicit.",
      },
      {
        title: "Educational Distinction Demo",
        text: "Use simple distinctions to help learners separate what is seen from what is inferred.",
      },
    ],
  },
  applications: {
    eyebrow: "Applications",
    title: "Where the framework can help",
    items: [
      {
        id: "education",
        label: "Education",
        narrative:
          "Learning becomes clearer when students can distinguish what is observed, what is assumed, and what remains uncertain. The method helps make that distinction visible before conclusions become fixed.",
        supportingText:
          "Clarity helps reasoning become easier to see, question, and discuss.",
      },
      {
        id: "ai-prompts",
        label: "AI prompts",
        narrative:
          "AI does not only receive a request; it receives the frame carried by that request. When observation, interpretation, and uncertainty are clearer, AI is less likely to carry an unexamined assumption into its response.",
        supportingText: "Better prompts often begin with clearer context.",
      },
      {
        id: "teams",
        label: "Teams",
        narrative:
          "Groups often struggle because people respond to different meanings inside the same situation. The method helps make assumptions visible so the group can see what is shared, what differs, and what remains unresolved.",
        supportingText: "Shared clarity improves when assumptions become visible.",
      },
      {
        id: "communication",
        label: "Communication",
        narrative:
          "Conversations can become reactive when conclusions arrive before context. Distinguishing observation from interpretation creates more room for understanding.",
        supportingText: "Clarity can reduce unnecessary escalation.",
      },
      {
        id: "decisions",
        label: "Decisions",
        narrative:
          "Many decisions are shaped by assumptions that appear factual. The method helps distinguish what is established from what remains uncertain.",
        supportingText: "Visible uncertainty often improves decision quality.",
      },
      {
        id: "facilitation",
        label: "Facilitation",
        narrative:
          "Facilitation can help a group slow down enough to see what is known, what is being assumed, and what still needs attention. The method gives that pause a clearer structure.",
        supportingText: "A clearer frame can support more productive dialogue.",
      },
    ],
  },
  doesNotDo: {
    eyebrow: "What the method does not do",
    headline: "It keeps judgment human.",
    text:
      "It does not decide what is true, force agreement, diagnose, persuade, or replace human judgment.",
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
