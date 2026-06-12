"use client";

import { useMemo, useState } from "react";

import type { MethodDemoLanguageId, MethodDemoSceneId, MethodDemosContent } from "@/content";

type MethodDemoStageClientProps = {
  content: MethodDemosContent;
  initialDemoLanguage: MethodDemoLanguageId;
};

const initialSceneId: MethodDemoSceneId = "interpretation-shift";

function renderLayerText(text: string | string[]) {
  if (Array.isArray(text)) {
    return (
      <ul>
        {text.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return <p>{text}</p>;
}

export function MethodDemoStageClient({
  content,
  initialDemoLanguage,
}: MethodDemoStageClientProps) {
  const safeInitialLanguage = content.scenesByLanguage[initialDemoLanguage]
    ? initialDemoLanguage
    : "en";
  const [activeSceneId, setActiveSceneId] = useState<MethodDemoSceneId>(initialSceneId);
  const [activeDemoLanguage, setActiveDemoLanguage] =
    useState<MethodDemoLanguageId>(safeInitialLanguage);

  const activeScenes = content.scenesByLanguage[activeDemoLanguage] ?? content.scenesByLanguage.en;
  const sceneMenu = activeScenes;
  const activeScene = useMemo(
    () =>
      activeScenes.find((scene) => scene.id === activeSceneId) ??
      activeScenes[0] ??
      content.scenesByLanguage.en[0],
    [activeSceneId, activeScenes, content.scenesByLanguage.en],
  );

  return (
    <section className="section demoSection" id="demos">
      <div className="demoSectionHeader">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
        <p>{content.intro}</p>
        <p className="demoHint">{content.interactionHint}</p>
      </div>

      <div className="demoControls">
        <div className="sceneSelector" aria-label={content.title} role="group">
          {sceneMenu.map((scene) => (
            <button
              aria-pressed={activeSceneId === scene.id}
              className="sceneButton"
              key={scene.id}
              onClick={() => setActiveSceneId(scene.id)}
              type="button"
            >
              <span>{scene.order}</span>
              {scene.shortTitle}
            </button>
          ))}
        </div>

        <div className="languageSelector" aria-label={content.languageSelectorLabel} role="group">
          {content.languages.map((language) => (
            <button
              aria-pressed={activeDemoLanguage === language.id}
              className="languageButton"
              key={language.id}
              onClick={() => setActiveDemoLanguage(language.id)}
              type="button"
            >
              <span>{language.shortLabel}</span>
            </button>
          ))}
        </div>
      </div>

      <div
        className="demoStage"
        data-active-scene={activeScene.id}
        data-demo-language={activeDemoLanguage}
      >
        <div className="sceneComposition" key={activeScene.id}>
          <div className="demoSceneHeader">
            <p>{activeScene.order}</p>
            <div>
              <h3>{activeScene.title}</h3>
              <p>{activeScene.description}</p>
            </div>
          </div>

          <div className="inputPanel">
            <p>{activeScene.inputLabel}</p>
            <blockquote>{activeScene.input}</blockquote>
          </div>

          <div className="layerStack" aria-label={activeScene.title}>
            {activeScene.layers.map((layer) => (
              <article className="meaningLayer" data-tone={layer.tone} key={layer.label}>
                <div>
                  <p className="layerLabel">{layer.label}</p>
                  {renderLayerText(layer.text)}
                </div>
                {layer.annotation ? <aside>{layer.annotation}</aside> : null}
              </article>
            ))}
          </div>

          <div className="movementPanel">
            <p>{activeScene.movementLabel}</p>
            <h3>{activeScene.movement}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
