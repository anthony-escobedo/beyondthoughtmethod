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
    label: "Navegação da página",
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
        label: "Trabalho conectado",
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
    eyebrow: "MÉTODO PARA INTERPRETAÇÃO ANTES DA AÇÃO",
    headline: "Infraestrutura pré-interpretativa",
    subheadline: "Um método para examinar a interpretação antes que ela se torne ação.",
    supportingLine:
      "Ajuda a distinguir o que é observado, o que é suposto e o que permanece incerto antes que a compreensão passe para decisões, colaboração ou IA.",
    ctas: [
      {
        label: "→ Explorar VIREKA Space",
        href: "https://vireka.space/pt-br",
      },
      {
        label: "→ Ler a investigação de base",
        href: "https://vireka.space/pt-br/beyond-thought",
      },
    ],
  },
  problem: {
    eyebrow: "O PROBLEMA",
    headline: "A interpretação muitas vezes acontece antes que a gente perceba.",
    paragraphs: [
      "Decisões, mensagens, prompts de IA, conclusões de equipe e julgamentos muitas vezes começam a partir de um enquadramento que já se formou.",
      "Um momento vira uma história. Um sinal vira um motivo. Uma lacuna vira uma conclusão. Suposições podem se incorporar antes de serem examinadas.",
      "O método ajuda a tornar esse enquadramento visível antes que a interpretação se torne ação, para que pessoas e sistemas de IA possam trabalhar com distinções mais claras.",
    ],
  },
  method: {
    eyebrow: "O MÉTODO",
    headline: "Estrutura de clareza em cinco partes",
    intro:
      "O Beyond Thought Method não remove a interpretação. Ele dá uma estrutura visível à interpretação, para que a incerteza possa permanecer presente em vez de ser resolvida prematuramente.",
    clarityFrame: [
      {
        title: "O que é observado",
        description:
          "Nomeie o que está diretamente disponível antes de acrescentar motivo, significado ou conclusão.",
      },
      {
        title: "O que pode estar sendo presumido",
        description:
          "Separe possíveis interpretações daquilo que a própria situação já estabeleceu.",
      },
      {
        title: "O que permanece incerto",
        description:
          "Mantenha perguntas abertas visíveis em vez de preenchê-las com uma resposta conveniente.",
      },
      {
        title: "O que pode estar influenciando o enquadramento",
        description:
          "Observe contexto, pressão, emoção, hábito ou restrições do sistema que possam moldar a interpretação.",
      },
      {
        title: "O que pode seguir com responsabilidade",
        description:
          "Escolha um próximo movimento que corresponda ao que se sabe, respeitando o que ainda permanece incerto.",
      },
    ],
    note:
      "A estrutura desacelera a conclusão o suficiente para que observação, interpretação presumida, incerteza, influência e movimento responsável possam ser vistos juntos.",
  },
  methodDemos: {
    ...enContent.methodDemos,
    eyebrow: "DEMOS DO MÉTODO",
    title: "Uma frase se torna uma estrutura.",
    intro:
      "Estes exemplos estáticos mostram como o mesmo método pode separar uma frase inicial em observação, interpretação presumida, incerteza e próximo movimento responsável.",
    interactionHint:
      "Escolha uma cena e altere o idioma do demo para comparar a mesma estrutura.",
    languageSelectorLabel: "Idioma do demo",
  },
  applications: {
    eyebrow: "USOS",
    title: "Onde o método pode ajudar",
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
    eyebrow: "TRABALHO CONECTADO",
    title: "Uma mesma linha de trabalho, três formas",
    intro:
      "Beyond Thought, Beyond Thought Method e VIREKA Space não são direções separadas. São expressões diferentes da mesma investigação: como a interpretação influencia o que percebemos, decidimos, desenhamos e colocamos em ação.",
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
