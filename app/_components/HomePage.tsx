import type { HomeContent } from "@/content";

type HomePageProps = {
  content: HomeContent;
};

export function HomePage({ content }: HomePageProps) {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">{content.hero.eyebrow}</p>
        <h1>{content.hero.headline}</h1>
        <p className="heroText">{content.hero.subheadline}</p>
        <div className="heroActions" aria-label={content.hero.ctasLabel}>
          {content.hero.ctas.map((cta) => (
            <a href={cta.href} key={cta.href}>
              {cta.label}
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">{content.problem.eyebrow}</p>
        <h2>{content.problem.headline}</h2>
        <p>{content.problem.text}</p>
      </section>

      <section className="section">
        <p className="eyebrow">{content.method.eyebrow}</p>
        <h2>{content.method.headline}</h2>
        <div className="frameGrid">
          {content.method.clarityFrame.map((item, index) => (
            <article className="frameCard" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">{content.experience.eyebrow}</p>
        <h2>{content.experience.headline}</h2>
        <div className="demoGrid">
          {content.experience.demoCards.map((card) => (
            <article className="demoCard" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">{content.applications.eyebrow}</p>
          <h2>{content.applications.headline}</h2>
        </div>
        <ul className="pillList">
          {content.applications.items.map((application) => (
            <li key={application}>{application}</li>
          ))}
        </ul>
      </section>

      <section className="section quiet">
        <p className="eyebrow">{content.doesNotDo.eyebrow}</p>
        <h2>{content.doesNotDo.headline}</h2>
        <p>{content.doesNotDo.text}</p>
      </section>

      <section className="section">
        <p className="eyebrow">{content.connectedWork.eyebrow}</p>
        <h2>{content.connectedWork.headline}</h2>
        <div className="connectedGrid">
          {content.connectedWork.items.map((item) => (
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
