"use client";

import { useEffect, useRef } from "react";

type FvStickyProps = {
  children: React.ReactNode;
};

/** ロゴ・ナビを画面トップまで上げるのに必要な移動量（Figma値。SP / PC） */
const LOGO_OFFSET_SP = 24;
const LOGO_OFFSET_PC = 88;
/** md ブレークポイント（tailwind.config.ts の md と合わせる） */
const MD_BREAKPOINT = 600;

/**
 * FVを背景として固定し、後続セクション（#after-fv）を上に重ねて競り上がらせるラッパー。
 * - FVは最初から画面トップに固定し、中身だけをスクロールに合わせて上へずらす。
 *   ずらす量は「ロゴ・ナビが画面トップに届く量（SP 24px / PC 88px）」と
 *   「FVが画面より高い場合に下端のボタン・バッジまで見える量」の大きい方。
 * - ずらし方は減速カーブ（easeOutCubic）にし、次のセクションが画面を覆い切る時点でちょうど止まる。
 *   途中で急に止まる切り替えがないため、FV → 次のセクションへのスクロールがなめらかにつながる
 * - 次のセクションがせり上がるにつれて、FVに重ねた黒を濃くする
 *   （上端が画面下端にある時 0% → 画面上端に達した時 100%）
 * - スクロール中は transform と opacity だけを直接書き換え、FV全体のスタイル再計算を起こさない
 */
export function FvSticky({ children }: FvStickyProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const dimRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    const dim = dimRef.current;
    const next = document.getElementById("after-fv");
    if (!content || !dim || !next) {
      return;
    }

    // レイアウトに依存する値（画面幅・FVの高さが変わった時だけ測り直す）
    let maxShift = 0;
    let travel = 1;
    const measure = () => {
      const width = window.innerWidth;
      const logoOffset =
        width >= MD_BREAKPOINT
          ? Math.min((width * LOGO_OFFSET_PC) / 1280, LOGO_OFFSET_PC)
          : Math.min((width * LOGO_OFFSET_SP) / 390, LOGO_OFFSET_SP);
      maxShift = Math.max(logoOffset, content.offsetHeight - window.innerHeight);
      // 次のセクションの上端が画面トップに届くまでのスクロール量
      travel = Math.max(1, next.getBoundingClientRect().top + window.scrollY);
    };

    let frame = 0;
    const update = () => {
      const progress = Math.max(0, Math.min(1, window.scrollY / travel));
      const eased = 1 - (1 - progress) ** 3;
      content.style.transform = `translate3d(0, ${(-maxShift * eased).toFixed(1)}px, 0)`;
      const cover = 1 - next.getBoundingClientRect().top / window.innerHeight;
      dim.style.opacity = String(Math.max(0, Math.min(1, cover)));
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();
    // フォント・画像の読み込みでFVの高さが変わった時も測り直す
    const observer = new ResizeObserver(onResize);
    observer.observe(content);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="sticky top-0 z-0 grid grid-cols-[minmax(0,1fr)]">
      <div ref={contentRef} className="col-start-1 row-start-1 will-change-transform">
        {children}
      </div>
      {/* FVの上に重ねる黒（Gridの同一セル。操作の邪魔をしないよう pointer-events-none） */}
      <div
        ref={dimRef}
        aria-hidden="true"
        className="pointer-events-none relative z-30 col-start-1 row-start-1 bg-black opacity-0"
      />
    </div>
  );
}
