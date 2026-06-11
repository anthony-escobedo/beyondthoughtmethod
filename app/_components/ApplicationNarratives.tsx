"use client";

import { useMemo, useState } from "react";

import type { ApplicationsContent } from "@/content";

type ApplicationNarrativesProps = {
  content: ApplicationsContent;
};

export function ApplicationNarratives({ content }: ApplicationNarrativesProps) {
  const [activeApplicationId, setActiveApplicationId] = useState(content.items[0]?.id ?? "");
  const activeApplication = useMemo(
    () =>
      content.items.find((item) => item.id === activeApplicationId) ??
      content.items[0],
    [activeApplicationId, content.items],
  );

  if (!activeApplication) {
    return null;
  }

  return (
    <section className="section applicationSection" id="applications">
      <div className="applicationHeader">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
        {content.intro ? <p>{content.intro}</p> : null}
      </div>

      <div className="applicationLensList" aria-label={content.title} role="group">
        {content.items.map((item) => (
          <button
            aria-pressed={activeApplication.id === item.id}
            className="applicationLensButton"
            key={item.id}
            onClick={() => setActiveApplicationId(item.id)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>

      <article className="applicationNarrative" key={activeApplication.id}>
        <p className="applicationLabel">{activeApplication.label}</p>
        <p>{activeApplication.narrative}</p>
        <p>{activeApplication.supportingText}</p>
      </article>
    </section>
  );
}
