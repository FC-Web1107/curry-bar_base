"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/nav-items";

/**
 * FVのグローバルナビ。
 * - SPはハンバーガーボタン（右上）＋全画面メニュー
 * - md以上は従来どおりの横並びナビ
 */
export function FvNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }
    // メニューを開いている間は背面をスクロールさせない
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      {/* SP: ハンバーガーボタン */}
      <button
        type="button"
        aria-label="メニューを開く"
        aria-expanded={open}
        aria-controls="fv-menu"
        onClick={() => setOpen(true)}
        className="
          [--w:24] [--h:2] [--gap:6]
          flex shrink-0 flex-col items-end justify-center
          gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
          p-2
          md:hidden
        "
      >
        {[0, 1, 2].map((line) => (
          <span
            key={line}
            aria-hidden="true"
            className="
              block bg-white
              w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
            "
          />
        ))}
      </button>

      {/* SP: 全画面メニュー */}
      <div
        id="fv-menu"
        className={`
          [--px:20] [--py:24]
          fixed inset-0 z-40 flex flex-col
          bg-[#101010]/95 backdrop-blur-[6px]
          px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
          py-[min(calc(100vw*var(--py)/var(--base)),calc(var(--py)*1px))]
          transition-[opacity,visibility] duration-200 ease-out
          motion-reduce:transition-none
          md:hidden
          ${open ? "visible opacity-100" : "invisible opacity-0"}
        `}
      >
        {/* 閉じるボタン（ハンバーガーと同じ右上の位置） */}
        <button
          type="button"
          aria-label="メニューを閉じる"
          onClick={() => setOpen(false)}
          className="[--w:24] [--h:2] grid shrink-0 self-end p-2"
          tabIndex={open ? 0 : -1}
        >
          {[0, 1].map((line) => (
            <span
              key={line}
              aria-hidden="true"
              className={`
                col-start-1 row-start-1 block bg-white
                w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
                h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
                ${line === 0 ? "rotate-45" : "-rotate-45"}
              `}
            />
          ))}
        </button>
        <nav className="flex grow items-center justify-center">
          <ul
            className="
              [--gap:28]
              flex flex-col items-center
              gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
            "
          >
            {navItems.map((item) => (
              <li key={item.en}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="
                    [--fs:20]
                    [--gap:8]
                    flex items-baseline
                    gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
                    text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
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

      {/* md以上: 従来の横並びナビ */}
      <nav
        className="
          md:[--top:8]
          hidden
          mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
          md:block
        "
      >
        <ul
          className="
            [--gap:20] md:[--gap:28]
            flex flex-wrap items-baseline
            gap-x-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
            gap-y-2
          "
        >
          {navItems.map((item) => (
            <li key={item.en}>
              <Link
                href={item.href}
                className="
                  [--fs:16] md:[--fs:20]
                  [--gap:8] md:[--gap:12]
                  flex items-baseline
                  gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
                  text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                  leading-[1.5]
                "
              >
                {item.en}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
