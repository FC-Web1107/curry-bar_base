"use client";

import { useEffect } from "react";

/**
 * ページ内の [data-reveal] 要素（見た目は reveal-class.ts の revealClass）を監視し、要素の上端が画面の上から70%の位置に入ったら
 * data-shown="true" を付けて表示する。
 * - 一度表示したら元に戻さない
 * - 読み込み時点ですでに画面より上にある要素は、すぐに表示する
 * - prefers-reduced-motion では最初から表示する（CSS側でも即時表示にしている）
 */
export function RevealObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const show = (element: Element) => element.setAttribute("data-shown", "true");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach(show);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
            show(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      // 画面の下30%を判定範囲から外す＝上から70%の位置を越えたら表示
      { rootMargin: "0px 0px -30% 0px" },
    );
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
