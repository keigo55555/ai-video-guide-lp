import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://ai-video-guide-lp.vercel.app";
const title = "顔出しなしのAI動画で約1か月1,687万閲覧｜無料制作ガイド";
const description = "顔出し・撮影・専門スキルなしで始めるAI動画制作。Instagramで約1か月16,873,128閲覧を記録した制作手順を、プロンプトと操作画面付きで無料公開。最初の1本まで7日間サポート付き。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    siteName: "AI動画無料ガイド",
    locale: "ja_JP",
    images: [{ url: "/assets/og-image.webp", width: 1200, height: 630, alt: "顔出しなし・撮影なしで作るAI動画無料ガイド" }],
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
      <head>
        <link rel="preload" as="image" href="/assets/hero-poster.webp" type="image/webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}
