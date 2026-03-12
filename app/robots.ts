import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://riverpod-gen-shortcuts.vercel.app/sitemap.xml",
  };
}
