"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activated, setActivated] = useState(false);
  const [playing, setPlaying] = useState(false);

  const togglePlayback = () => {
    if (!activated) {
      setActivated(true);
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-[30px] border border-black/10 bg-black shadow-[0_18px_45px_rgba(23,23,23,0.16)]">
      {activated ? (
        <video
          ref={videoRef}
          className="block size-full bg-black object-contain"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/hero-poster.webp"
          aria-label="顔出しなしで制作した9対16のAI動画作例"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
          お使いのブラウザは動画の再生に対応していません。
        </video>
      ) : (
        <Image
          src="/assets/hero-poster.webp"
          alt="顔出しなしで制作したAI動画作例のポスター"
          width={1080}
          height={1920}
          priority
          className="size-full object-contain"
          sizes="(max-width: 768px) 82vw, 350px"
        />
      )}
      <button
        type="button"
        onClick={togglePlayback}
        className="absolute bottom-3 right-3 min-h-11 rounded-full border border-white/20 bg-black/65 px-4 text-xs font-bold text-white backdrop-blur-sm transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
        aria-label={!activated || !playing ? "AI動画を再生する" : "AI動画を一時停止する"}
      >
        {!activated || !playing ? "再生" : "一時停止"}
      </button>
    </div>
  );
}
