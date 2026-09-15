import Link from "next/link";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { ReservationButton } from "@/components/ui/reservation-button";
import { navItems } from "@/lib/nav-items";

/**
 * FVのグローバルナビ。
 * - SPはハンバーガーボタン（右上）＋全画面メニュー
 * - md以上は横並びナビ＋予約サイトへのボタン
 */
export function FvNav() {
  return (
    <>
      {/* SP: ハンバーガーボタン＋全画面メニュー */}
      <MobileMenu />

      {/* md以上: 横並びナビ。右下に予約サイトへのボタン */}
      <nav
        className="
          md:[--top:8]
          md:[--gap:16]
          hidden shrink-0 flex-col items-end
          mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
          gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
          md:flex
        "
      >
        <ul
          className="
            [--gap:10] md:[--gap:14]
            flex flex-wrap items-center
            gap-x-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
            gap-y-2
          "
        >
          {navItems.map((item, index) => (
            <li
              key={item.en}
              className="
                flex items-center
                gap-x-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
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
                  leading-[1.5]
                "
              >
                {item.en}
              </Link>
            </li>
          ))}
        </ul>
        <ReservationButton variant="solid" />
      </nav>
    </>
  );
}
