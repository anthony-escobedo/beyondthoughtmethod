import { HomePage } from "./_components/HomePage";
import { getLocaleContent } from "@/content";
import { buildPageMetadata } from "@/content/metadata";

const content = getLocaleContent("en");

export function generateMetadata() {
  return buildPageMetadata(content);
}

export default function Home() {
  return <HomePage content={content} />;
}
