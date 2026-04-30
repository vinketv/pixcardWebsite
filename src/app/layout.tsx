import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const SITE_URL = "https://pixcard.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PixCard — Photo recto/verso en 1 image pour cartes TCG",
    template: "%s — PixCard",
  },
  description:
    "PixCard crée une photo recto + verso en une seule image pour tes cartes TCG. Idéal pour montrer l’état et publier rapidement sur Cardmarket.",
  applicationName: "PixCard",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "PixCard",
    title: "PixCard — Photo recto/verso en 1 image pour cartes TCG",
    description:
      "Prends une photo du recto, puis du verso. PixCard génère une seule image claire pour montrer l’état et publier sur Cardmarket.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "PixCard",
      },
    ],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "PixCard — Photo recto/verso en 1 image pour cartes TCG",
    description:
      "Deux photos (recto/verso) → une seule image propre, prête à publier sur Cardmarket.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={spaceMono.variable}>
      <body>{children}</body>
    </html>
  );
}
