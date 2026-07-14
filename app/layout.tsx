import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://ai-video-guide-lp.vercel.app";
const title = "顔出しなしのInstagramリールで約1か月1,687万再生｜AI動画無料ガイド";
const description = "顔出し・撮影・専門スキルなしで始めるAI動画制作。AIを使って作ったInstagramリールが、2026年5月10日から6月10日までの約1か月で合計16,873,128再生。実際に使っているAI・設定・プロンプト・操作画面を制作手順とあわせて無料公開。最初の1本まで7日間サポート付き。";

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
    images: [{ url: "/assets/og-image.webp", width: 1200, height: 630, alt: "AIを使って作ったInstagramリールが約1か月で合計1,687万再生" }],
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
