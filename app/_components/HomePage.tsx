import type { HomeContent } from "@/content";

import { ApplicationNarratives } from "./ApplicationNarratives";
import { MethodDemoStage } from "./MethodDemoStage";

type HomePageProps = {
  content: HomeContent;
};

export function HomePage({ content }: HomePageProps) {
  return (
    <>
      <header className="siteHeader">
        <a className="siteMark" href="/">
          {content.navigation.homeLabel}
        </a>
        <nav aria-label={content.navigation.label} className="siteNav">
          {content.navigation.items.map((item) => (
            <a
              href={item.href}
              key={item.href}
              rel={item.external ? "noreferrer" : undefined}
              target={item.external ? "_blank" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1>{content.hero.headline}</h1>
          <p className="heroText">{content.hero.subheadline}</p>
          <p className="heroSupport">{content.hero.supportingLine}</p>
          <div className="heroActions" aria-label={content.hero.ctasLabel}>
            {content.hero.ctas.map((cta) => (
              <a className="spatialLink" href={cta.href} key={cta.href}>
                {cta.label}
              </a>
            ))}
          </div>
        </section>

        <section className="section">
          <p className="eyebrow">{content.problem.eyebrow}</p>
          <h2>{content.problem.headline}</h2>
          <div className="textStack">
            {content.problem.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="section" id="method">
          <p className="eyebrow">{content.method.eyebrow}</p>
          <h2>{content.method.headline}</h2>
          <p className="sectionIntro">{content.method.intro}</p>
          <div className="frameGrid">
            {content.method.clarityFrame.map((item, index) => (
              <article className="frameCard" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <p className="methodNote">{content.method.note}</p>
        </section>

        <MethodDemoStage content={content.methodDemos} locale={content.locale} />

        <ApplicationNarratives content={content.applications} />

        <section className="section ecosystemSection" id="connected-work">
          <p className="eyebrow">{content.ecosystem.eyebrow}</p>
          <h2>{content.ecosystem.title}</h2>
          <p className="sectionIntro">{content.ecosystem.intro}</p>
          <div className="ecosystemList">
            {content.ecosystem.items.map((item) => (
              <article className="ecosystemItem" key={item.id}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.label}</p>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <p className="ecosystemClosing">{content.ecosystem.closing}</p>
        </section>
      </main>
    </>
  );
}
