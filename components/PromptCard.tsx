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
    <article className="overflow-hidden rounded-[22px] border border-[#28345C]/15 bg-white shadow-[0_12px_32px_rgba(21,21,21,0.06)] sm:rounded-[26px]">
      <div className="border-b border-[#28345C]/10 px-5 py-6 sm:px-8 sm:py-7">
        <p className="text-xs font-black tracking-[0.12em] text-[#E85A2A]">
          STEP {step}
        </p>
        <h2 className="mt-2 text-[22px] font-black leading-[1.4] tracking-[-0.025em] text-[#151515] sm:text-[26px]">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-[1.8] text-[#6B6862] sm:text-base">
          {description}
        </p>
      </div>

      <div className="p-5 sm:p-8">
        <pre className="overflow-x-auto whitespace-pre-wrap break-words rounded-[16px] bg-[#17203A] p-5 text-[13px] leading-[1.9] text-white sm:p-6 sm:text-[15px]">
          <code>{prompt}</code>
        </pre>

        {note ? (
          <p className="mt-4 rounded-xl border border-[#C6A46A]/35 bg-[#FBF7EE] px-4 py-3 text-xs font-medium leading-[1.75] text-[#5D513D] sm:text-sm">
            <span className="font-black">補足：</span>
            {note}
          </p>
        ) : null}

        <button
          type="button"
          onClick={copyPrompt}
          className={`mt-5 flex min-h-12 w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-black transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#28345C]/25 sm:w-auto sm:min-w-52 ${
            copyStatus === "copied"
              ? "bg-[#E7F4EB] text-[#176534]"
              : copyStatus === "error"
                ? "bg-[#FCE8E5] text-[#9A2F20]"
                : "bg-[#28345C] text-white hover:bg-[#202A4B]"
          }`}
          aria-live="polite"
        >
          {buttonLabel}
        </button>
      </div>
    </article>
  );
}
