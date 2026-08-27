"use client";

import { useEffect, useRef } from "react";

type ParallaxProps = {
  children: React.ReactNode;
  /** スクロールに応じて上下に動かす量（px） */
  offset?: number;
  className?: string;
};

export function Parallax({ children, offset = 50, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const appliedY = useRef(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;
    const update = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      // transform適用前の位置に戻してから進行度を計算する
      const baseCenter = rect.top - appliedY.current + rect.height / 2;
      const progress =
        (baseCenter - viewportHeight / 2) / ((viewportHeight + rect.height) / 2);
      const clamped = Math.max(-1, Math.min(1, progress));
      // スクロールした方向へ遅れてついてくる動き（下へスクロール→下方向へ移動）
      const y = -clamped * offset;
      appliedY.current = y;
      element.style.transform = `translateY(${y.toFixed(1)}px)`;
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
  }, [offset]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
