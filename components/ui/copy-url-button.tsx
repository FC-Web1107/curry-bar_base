"use client";

import { useState } from "react";
import { ChevronRight } from "@/components/ui/chevron-right";

type CopyUrlButtonProps = {
  /** コピーするURL */
  url: string;
  className?: string;
};

export function CopyUrlButton({ url, className }: CopyUrlButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // クリップボードが使えない環境では何もしない
    }
  };

  return (
    <button type="button" onClick={handleCopy} className={className}>
      {copied ? "コピーしました" : "URLをコピー"}
      <ChevronRight className="h-[8px] w-[6px]" />
    </button>
  );
}
