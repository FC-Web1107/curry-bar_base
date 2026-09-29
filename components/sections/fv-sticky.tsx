"use client";

import { useEffect, useRef } from "react";

type FvStickyProps = {
  children: React.ReactNode;
};

/**
 * FVを背景として固定し、後続セクションを上に重ねて競り上がらせるラッパー。
 * - 通常はロゴ・ナビが画面トップに達した位置（SP 24px / PC 88px 分上）で固定する
 * - FVが画面より高い場合（SPの小さい画面など）は、FVの下端が画面下端に来た位置で固定し、
 *   下部のボタン・バッジが隠れたままにならないようにする
 *   （FVの高さをCSS変数 --fv-h に入れ、top を min() で小さい方に決める）
 */
export function FvSticky({ children }: FvStickyProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }
    const updateHeight = () => {
      element.style.setProperty("--fv-h", `${element.offsetHeight}px`);
    };
    // 初回は即時に測り、以降はフォント・画像読み込みや画面幅変更による高さの変化に追従する
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="
        [--base:390] md:[--base:1280]
        [--top:24] md:[--top:88]
        sticky z-0
        top-[min(calc(-1*min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))),calc(100svh-var(--fv-h,0px)))]
      "
    >
      {children}
    </div>
  );
}
