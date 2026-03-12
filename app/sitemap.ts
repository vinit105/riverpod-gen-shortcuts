import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://riverpod-gen-shortcuts.vercel.app";

  const routes = [
    "",
    "/docs",
    "/docs/installation",
    "/docs/quick-start",
    "/docs/provider",
    "/docs/state-provider",
    "/docs/future-provider",
    "/docs/stream-provider",
    "/docs/notifier-provider",
    "/docs/async-notifier-provider",
    "/docs/codegen-overview",
    "/docs/shortcuts",
    "/docs/annotations",
    "/docs/build-runner",
    "/docs/family",
    "/docs/auto-dispose",
    "/docs/testing",
    "/docs/migration",
    "/docs/examples",
    "/docs/faq",
    "/docs/changelog",
    "/about",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : route === "/docs" ? 0.9 : 0.7,
  }));
}
