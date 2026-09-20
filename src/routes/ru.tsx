import { createFileRoute } from "@tanstack/react-router";
import { LocalizedHome } from "@/components/LocalizedHome";
import { headForLang } from "@/lib/i18n";

export const Route = createFileRoute("/ru")({
  staticData: { sitemap: true },
  head: () => headForLang("ru"),
  component: () => <LocalizedHome lang="ru" />,
});
