import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Recommandation Google app-ads.txt crawler
      // https://support.google.com/admob/answer/9776740
      {
        userAgent: "Google-adstxt",
        allow: "/",
      },
      {
        userAgent: "Mediapartners-Google",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/"],
      },
    ],
    sitemap: "https://pixcard.app/sitemap.xml",
    host: "https://pixcard.app",
  };
}

