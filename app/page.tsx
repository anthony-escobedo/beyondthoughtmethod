import { HomePage } from "./_components/HomePage";
import { getLocaleContent } from "@/content";

export default function Home() {
  return <HomePage content={getLocaleContent("en")} />;
}
