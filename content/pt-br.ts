import { enContent } from "./en";
import type { HomeContent } from "./types";

export const ptBrContent: HomeContent = {
  ...enContent,
  locale: "pt-br",
  seo: {
    title: "Beyond Thought Method | Infraestrutura pré-interpretativa",
    description:
      "Um método para examinar a interpretação antes que ela se torne ação.",
    ogTitle: "Beyond Thought Method | Infraestrutura pré-interpretativa",
    ogDescription:
      "Ajuda a distinguir o que é observado, o que é suposto e o que permanece incerto antes que a compreensão passe para decisões, colaboração ou IA.",
    canonicalPath: "/pt-br",
    locale: "pt_BR",
    languageTag: "pt-BR",
  },
  navigation: {
    ...enContent.navigation,
  },
  hero: {
    ...enContent.hero,
    eyebrow: "Beyond Thought Method",
    headline: "Infraestrutura pré-interpretativa",
    subheadline: "Um método para examinar a interpretação antes que ela se torne ação.",
    supportingLine:
      "Ajuda a distinguir o que é observado, o que é suposto e o que permanece incerto antes que a compreensão passe para decisões, colaboração ou IA.",
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
    eyebrow: "Demos do método",
    title: "Uma frase se torna uma estrutura.",
    intro:
      "Estes exemplos estáticos mostram como o mesmo método pode separar uma frase inicial em observação, suposição, incerteza e próximo movimento responsável.",
    interactionHint:
      "Escolha uma cena e altere o idioma do demo para comparar a mesma estrutura.",
    languageSelectorLabel: "Idioma do demo",
  },
  applications: {
    eyebrow: "Aplicações",
    title: "Onde o framework pode ajudar",
    items: [
      {
        id: "education",
        label: "Educação",
        narrative:
          "O aprendizado se torna mais claro quando os estudantes conseguem distinguir o que é observado, o que é suposto e o que permanece incerto. O método ajuda a tornar essa distinção visível antes que as conclusões fiquem fixas.",
        supportingText:
          "A clareza ajuda o raciocínio a ficar mais fácil de perceber, questionar e conversar.",
      },
      {
        id: "ai-prompts",
        label: "Prompts de IA",
        narrative:
          "A IA não recebe apenas um pedido; ela também recebe o enquadramento que esse pedido carrega. Quando observação, interpretação e incerteza estão mais claras, é menos provável que a IA incorpore uma suposição não examinada na resposta.",
        supportingText:
          "Prompts melhores geralmente começam com um contexto mais claro.",
      },
      {
        id: "teams",
        label: "Equipes",
        narrative:
          "Grupos muitas vezes enfrentam dificuldades porque as pessoas respondem a sentidos diferentes dentro da mesma situação. O método ajuda a tornar as suposições visíveis para que o grupo possa perceber o que é compartilhado, o que diverge e o que permanece sem resolução.",
        supportingText:
          "A clareza compartilhada melhora quando as suposições se tornam visíveis.",
      },
      {
        id: "communication",
        label: "Comunicação",
        narrative:
          "Conversas podem se tornar reativas quando conclusões chegam antes do contexto. Distinguir observação de interpretação cria mais espaço para compreensão.",
        supportingText: "A clareza pode reduzir escaladas desnecessárias.",
      },
      {
        id: "decisions",
        label: "Decisões",
        narrative:
          "Muitas decisões são influenciadas por suposições que parecem fatos estabelecidos. O método ajuda a distinguir o que está fundamentado do que permanece incerto.",
        supportingText:
          "A incerteza visível frequentemente melhora a qualidade das decisões.",
      },
      {
        id: "facilitation",
        label: "Facilitação",
        narrative:
          "A facilitação pode ajudar um grupo a desacelerar o suficiente para perceber o que se sabe, o que está sendo suposto e o que ainda precisa de atenção. O método dá uma estrutura mais clara a essa pausa.",
        supportingText:
          "Um enquadramento mais claro pode favorecer um diálogo mais produtivo.",
      },
    ],
  },
  ecosystem: {
    eyebrow: "Trabalho conectado",
    title: "Uma mesma linha de trabalho, três formas",
    intro:
      "Beyond Thought, Beyond Thought Method e VIREKA Space não são direções separadas. São expressões diferentes da mesma investigação: como a interpretação influencia o que percebemos, decidimos, desenhamos e levamos à ação.",
    items: [
      {
        id: "beyond-thought",
        title: "Beyond Thought",
        label: "A investigação",
        description:
          "Uma exploração da consciência, da interpretação e de como o significado influencia o que construímos.",
      },
      {
        id: "beyond-thought-method",
        title: "Beyond Thought Method",
        label: "O método",
        description:
          "Uma forma prática de examinar a interpretação antes que ela se torne ação.",
      },
      {
        id: "vireka-space",
        title: "VIREKA Space",
        label: "A prática",
        description:
          "Um espaço onde o contexto esclarecido pode apoiar decisões, colaboração e trabalho com IA.",
      },
    ],
    closing:
      "Juntos, eles avançam da investigação para o método e depois para a prática, sem reduzir a clareza a uma funcionalidade de produto.",
  },
};
