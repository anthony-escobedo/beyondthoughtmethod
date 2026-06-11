import {
  getDefaultMethodDemoLanguage,
  type Locale,
  type MethodDemosContent,
} from "@/content";

import { MethodDemoStageClient } from "./MethodDemoStageClient";

type MethodDemoStageProps = {
  content: MethodDemosContent;
  locale?: Locale;
};

export function MethodDemoStage({ content, locale }: MethodDemoStageProps) {
  return (
    <MethodDemoStageClient
      content={content}
      initialDemoLanguage={getDefaultMethodDemoLanguage(locale)}
    />
  );
}
