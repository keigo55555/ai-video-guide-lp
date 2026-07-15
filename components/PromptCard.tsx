"use client";

import { useEffect, useRef, useState } from "react";

type PromptCardProps = {
  step: number;
  title: string;
  description: string;
  prompt: string;
  note?: string;
};

type CopyStatus = "idle" | "copied" | "error";

export default function PromptCard({
  step,
  title,
  description,
  prompt,
  note,
}: PromptCardProps) {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  const copyPrompt = async () => {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API is not available");
      }

      await navigator.clipboard.writeText(prompt);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }

    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopyStatus("idle"), 3000);
  };

  const buttonLabel =
    copyStatus === "copied"
      ? "コピーしました"
      : copyStatus === "error"
        ? "コピーに失敗しました"
        : "プロンプトをコピー";

  return (
    <article className="overflow-hidden rounded-[18px] border border-[#E5E7EB] bg-white shadow-sm sm:rounded-[20px]">
      <div className="border-b border-[#E5E7EB] px-5 py-6 sm:px-8 sm:py-7">
        <p className="text-xs font-bold tracking-[0.1em] text-[#6B7280]">
          STEP {step}
        </p>
        <h2 className="mt-2 text-[22px] font-black leading-[1.4] tracking-[-0.025em] text-[#111111] sm:text-[26px]">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-[1.8] text-[#666666] sm:text-base">
          {description}
        </p>
      </div>

      <div className="p-5 sm:p-8">
        <pre className="overflow-x-auto whitespace-pre-wrap break-words rounded-[12px] border border-[#E5E7EB] bg-[#F3F4F6] p-5 text-[13px] leading-[1.9] text-[#111111] sm:p-6 sm:text-[15px]">
          <code>{prompt}</code>
        </pre>

        {note ? (
          <p className="mt-4 rounded-r-lg border-l-[3px] border-[#9CA3AF] bg-[#F9FAFB] px-4 py-3 text-xs font-medium leading-[1.75] text-[#4B5563] sm:text-sm">
            <span className="font-black">補足：</span>
            {note}
          </p>
        ) : null}

        <button
          type="button"
          onClick={copyPrompt}
          className={`mt-5 flex min-h-12 w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-black transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#9CA3AF]/35 sm:w-auto sm:min-w-52 ${
            copyStatus === "copied"
              ? "bg-[#E7F4EB] text-[#176534]"
              : copyStatus === "error"
                ? "bg-[#FCE8E5] text-[#9A2F20]"
                : "bg-[#111827] text-white hover:bg-[#374151]"
          }`}
          aria-live="polite"
        >
          {buttonLabel}
        </button>
      </div>
    </article>
  );
}
