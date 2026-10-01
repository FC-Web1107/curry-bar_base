"use client";

import { useEffect, useRef } from "react";

type GrowLineProps = {
  /** 線の位置・サイズのクラス（幅・高さ・余白など）。色は付けない */
  className?: string;
};

/**
 * スクロールに合わせて上から下へ伸びていく縦線。
 * 線の先端が「画面の上から70%の位置」についてくる（その位置を線が越えた分だけ表示する）。
 * - 伸びる部分は背景の長さ（background-size）で表現する。
 *   transform や clip-path を使うと重なり順が変わり、写真の下に通している線が前面に出てしまうため
 * - prefers-reduced-motion では最初から全体を表示する
 */
export function GrowLine({ className }: GrowLineProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.style.setProperty("--grow", "1");
      return;
    }

    let frame = 0;
    const update = () => {
      const rect = element.getBoundingClientRect();
      const progress = (window.innerHeight * 0.7 - rect.top) / rect.height;
      element.style.setProperty("--grow", String(Math.max(0, Math.min(1, progress))));
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={`
        block
        bg-[linear-gradient(#fff,#fff)] bg-no-repeat
        bg-[length:100%_calc(var(--grow,0)*100%)]
        ${className ?? ""}
      `}
    />
  );
}
