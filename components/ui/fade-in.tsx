"use client";

import { useEffect, useRef, useState } from "react";

type FadeInProps = {
  children: React.ReactNode;
  /** 表示を遅らせる時間（ms）。上から順に表示させたいときに使う */
  delay?: number;
  className?: string;
};

/**
 * 画面内に入ったら下から少し持ち上げながらフェードインさせる。
 * - 一度表示したら元に戻さない
 * - prefers-reduced-motion では最初から表示する
 */
export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const check = () => {
      const rect = element.getBoundingClientRect();
      // 画面下から12%手前に入ったら表示する（非表示中の要素は高さ0なので対象外）
      const isVisible =
        rect.height > 0 &&
        rect.top < window.innerHeight * 0.88 &&
        rect.bottom > 0;
      if (isVisible) {
        setShown(true);
        window.removeEventListener("scroll", check);
        window.removeEventListener("resize", check);
      }
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);

    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <div
      ref={ref}
      // 遅延時間は呼び出し側から渡す動的な値のためインラインで指定する
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transition-[opacity,transform] duration-700 ease-out
        motion-reduce:transition-none
        ${shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
        ${className ?? ""}
      `}
    >
      {children}
    </div>
  );
}
