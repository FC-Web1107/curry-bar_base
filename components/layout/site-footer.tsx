import Link from "next/link";
import { navItems } from "@/lib/nav-items";
import { asset } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer
      className="[--base:390] md:[--base:1280] w-full bg-cover bg-bottom" style={{ backgroundImage: `url('${asset("/main/common/texture-bg.png")}')` }}
    >
      {/* フッターナビ（項目の間は縦の境界線で区切る） */}
      <nav
        className="
          [--h:66] md:[--h:77]
          w-full bg-[#362b21]
        "
      >
        <ul
          className="
            [--gap:8] md:[--gap:12]
            flex h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
            flex-wrap items-center justify-center
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
                  leading-[1.5]
                "
              >
                {item.en}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* コピーライト */}
      <p
        className="
          [--fs:12] md:[--fs:14]
          [--py:24] md:[--py:32]
          text-center
          py-[min(calc(100vw*var(--py)/var(--base)),calc(var(--py)*1px))]
          text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
          leading-[1.5]
        "
      >
        ©︎Curry&amp;Bar Base All Rights Reserved.
      </p>
    </footer>
  );
}
