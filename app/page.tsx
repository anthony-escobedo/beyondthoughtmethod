const clarityFrame = [
  "What is observed",
  "What may be assumed",
  "What remains unclear",
  "What may be influencing the frame",
  "What can responsibly move forward",
];

const demoCards = [
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
];

const applications = [
  "Education",
  "AI prompts",
  "Teams",
  "Communication",
  "Decisions",
  "Facilitation",
];

const connectedWork = [
  {
    name: "Beyond Thought",
    role: "source inquiry",
  },
  {
    name: "Beyond Thought Method",
    role: "applied framework",
  },
  {
    name: "VIREKA Space",
    role: "software implementation",
  },
  {
    name: "ANAKARA Space",
    role: "later symbolic/pattern inquiry",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Beyond Thought Method</p>
        <h1>Pre-Interpretive Infrastructure for Human and AI-Aided Understanding</h1>
        <p className="heroText">
          The Beyond Thought Method helps distinguish observation, assumption,
          uncertainty, influence, and responsible next movement before
          interpretation hardens into conclusion.
        </p>
        <div className="heroActions" aria-label="Primary links">
          <a href="https://vireka.space">Explore VIREKA Space</a>
          <a href="https://vireka.space/beyond-thought">Read the source inquiry</a>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">The Problem</p>
        <h2>Interpretation often happens before we notice it.</h2>
        <p>
          A moment becomes a story. A signal becomes a motive. A gap becomes a
          conclusion. The method creates space before that hardening, so people
          and AI systems can work with clearer distinctions.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">The Method</p>
        <h2>Five-part clarity frame</h2>
        <div className="frameGrid">
          {clarityFrame.map((item, index) => (
            <article className="frameCard" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Experience the Method</p>
        <h2>Lightweight demos for applied clarity</h2>
        <div className="demoGrid">
          {demoCards.map((card) => (
            <article className="demoCard" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Applications</p>
          <h2>Where the framework can help</h2>
        </div>
        <ul className="pillList">
          {applications.map((application) => (
            <li key={application}>{application}</li>
          ))}
        </ul>
      </section>

      <section className="section quiet">
        <p className="eyebrow">What the method does not do</p>
        <h2>It keeps judgment human.</h2>
        <p>
          It does not decide what is true, force agreement, diagnose, persuade,
          or replace human judgment.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">Connected Work</p>
        <h2>A small ecosystem of inquiry and application</h2>
        <div className="connectedGrid">
          {connectedWork.map((item) => (
            <article className="connectedCard" key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.role}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
