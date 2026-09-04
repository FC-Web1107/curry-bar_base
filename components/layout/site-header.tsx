"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/nav-items";

/** スクロールが止まったと判定するまでの時間（ms） */
const SCROLL_STOP_DELAY = 150;

/**
 * 追従ヘッダー。
 * - FVの固定表示が終わり、後続セクションが画面トップに達してから追従を開始する
 * - スクロール中は隠し、スクロールが止まったら表示する
 * - SHOP INFORMATIONが見え始めたら追従を終了する
 */
export function SiteHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stopTimer = 0;

    // スクロールが止まったタイミングで、追従して表示してよい位置かを判定する
    const showIfInRange = () => {
      const afterFv = document.getElementById("after-fv");
      const shopInfo = document.getElementById("map");
      // FV直下のブロックが画面トップに到達したか
      const passedFv = afterFv ? afterFv.getBoundingClientRect().top <= 0 : false;
      // SHOP INFORMATIONが画面内に入り始めたか
      const shopInfoVisible = shopInfo
        ? shopInfo.getBoundingClientRect().top <= window.innerHeight
        : false;
      setVisible(passedFv && !shopInfoVisible);
    };

    const onScroll = () => {
      // スクロール中は隠し、止まってから判定し直す
      setVisible(false);
      window.clearTimeout(stopTimer);
      stopTimer = window.setTimeout(showIfInRange, SCROLL_STOP_DELAY);
    };

    showIfInRange();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(stopTimer);
    };
  }, []);

  return (
    <header
      className={`
        [--base:390] md:[--base:1280]
        [--h:56] md:[--h:72]
        [--px:12] md:[--px:75]
        fixed inset-x-0 top-0 z-50
        flex items-center justify-center
        h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
        border-b border-white/15 bg-[#101010]/70 backdrop-blur-[6px]
        transition-[transform,opacity,visibility] duration-300 ease-out
        motion-reduce:transition-none
        md:justify-start
        md:border-[#cbb394]/40 md:bg-[#101010]/95 md:backdrop-blur-[12px]
        md:shadow-[0_2px_16px_rgba(0,0,0,0.55)]
        ${visible ? "visible translate-y-0 opacity-100" : "invisible -translate-y-full opacity-0"}
      `}
    >
      <div
        className="
          mx-auto flex w-full max-w-[1280px] items-center justify-center
          px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
          md:justify-between
        "
      >
        {/* ロゴ（SPはナビのみ表示） */}
        <Link
          href="#home"
          className="
            [--fs:20]
            hidden
            text-[min(calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
            leading-[1.4] tracking-[0.04em]
            md:block
          "
        >
          Curry&amp;Bar Base
        </Link>
        {/* グローバルナビ（項目の間は縦の境界線で区切る） */}
        <nav>
          <ul
            className="
              [--gap:8] md:[--gap:14]
              flex items-center
              gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
            "
          >
            {navItems.map((item, index) => (
              <li
                key={item.en}
                className="
                  flex items-center
                  gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
                "
              >
                {index > 0 && (
                  <span aria-hidden="true" className="h-[1.2em] w-px bg-current opacity-40" />
                )}
                <Link
                  href={item.href}
                  className="
                    [--fs:16] md:[--fs:20]
                    whitespace-nowrap
                    text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                    md:text-[min(calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                    leading-[1.5]
                  "
                >
                  {item.en}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
