import type { Metadata } from "next";
import "./globals.css";

const title = "顔出しなしで作るAI動画｜無料完全ガイド";
const description = "顔出し・撮影・専門スキルなしで始めるAI動画制作。月間約1,500万再生のアカウントで実際に使っている制作手順を無料公開します。";
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const metadata: Metadata = {
  metadataBase: new URL(productionHost ? `https://${productionHost}` : "http://localhost:3000"),
  title,
  description,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ja_JP",
    images: [{ url: "/assets/og-image.webp", width: 1200, height: 630, alt: "AI動画無料完全ガイド" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/og-image.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className="scroll-smooth antialiased">
      <body>{children}</body>
    </html>
  );
}
