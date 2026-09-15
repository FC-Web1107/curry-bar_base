"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { ReservationButton } from "@/components/ui/reservation-button";
import { navItems } from "@/lib/nav-items";

/**
 * SP用のハンバーガーボタン＋全画面メニュー（FV上部と追従ヘッダーで共用）。
 * md以上では表示しない。
 * 全画面メニューは body 直下に描画する（追従ヘッダーの transform / backdrop-filter の
 * 内側に置くと fixed がヘッダーの高さに閉じ込められるため）。
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuId = useId();

  // createPortal は document が必要なのでマウント後に描画する
  useEffect(() => {
    setMounted(true);
  }, []);

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
      {/* ハンバーガーボタン */}
      <button
        type="button"
        aria-label="メニューを開く"
        aria-expanded={open}
        aria-controls={menuId}
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

      {/* 全画面メニュー（追従ヘッダーより前面に出す） */}
      {mounted &&
        createPortal(
          <div
            id={menuId}
            className={`
              [--base:390]
              [--px:20] [--py:24]
              fixed inset-0 z-[60] flex flex-col
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
            {/* 項目の間は横の境界線で区切る。最後に予約サイトへのボタン */}
            <nav className="flex grow flex-col items-center justify-center">
              <ul
                className="
                  [--gap:20] [--w:180]
                  flex flex-col items-center
                  gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
                  w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
                "
              >
                {navItems.map((item, index) => (
                  <li
                    key={item.en}
                    className="
                      flex w-full flex-col items-center
                      gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
                    "
                  >
                    {index > 0 && (
                      <span aria-hidden="true" className="h-px w-full bg-current opacity-40" />
                    )}
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      tabIndex={open ? 0 : -1}
                      className="
                        [--fs:20]
                        text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                        leading-[1.5]
                      "
                    >
                      {item.en}
                    </Link>
                  </li>
                ))}
              </ul>
              <ReservationButton
                tabIndex={open ? 0 : -1}
                className="
                  [--top:40]
                  mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                "
              />
            </nav>
          </div>,
          document.body,
        )}
    </>
  );
}
