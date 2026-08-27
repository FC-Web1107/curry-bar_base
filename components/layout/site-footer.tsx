import Link from "next/link";

const footerNavItems = [
  { label: "Home", href: "#home" },
  { label: "How to", href: "#how-to" },
  { label: "Cocktail", href: "#cocktail" },
  { label: "Floor", href: "#floor" },
  { label: "Map", href: "#map" },
];

// TODO: アクセス・営業時間・定休日はFigma上でも空欄（正式情報の確定待ち）
const footerInfoItems = [
  {
    label: "住所",
    lines: ["〒892-0844", "鹿児島県鹿児島市山之口町12−26　桜屋ビル B1F"],
  },
  { label: "アクセス", lines: [] },
  { label: "営業時間", lines: [] },
  { label: "定休日", lines: [] },
];

export function SiteFooter() {
  return (
    <footer
      className="
        [--base:390] md:[--base:1280]
        w-full bg-[url('/main/common/texture-bg.png')] bg-cover bg-bottom
      "
    >
      <div>
        <div
          className="
            [--top:64] md:[--top:150]
            mx-auto flex w-full max-w-[1280px] flex-col items-center
            pt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            md:flex-row md:items-start
          "
        >
          {/* ロゴ・店名・電話番号 */}
          <div
            className="
              [--left:0] md:[--left:237]
              flex flex-col items-center
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              md:items-start
            "
          >
            <p
              className="
                [--fs:30] md:[--fs:35]
                text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                leading-[1.3]
              "
            >
              Curry&Bar Base
            </p>
            <div
              className="
                [--top:32] md:[--top:38]
                [--left:0] md:[--left:134]
                [--w:160] md:[--w:220]
                flex flex-col items-center
                mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
                w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              "
            >
              <p className="text-[14px] md:text-[20px] leading-[17px] md:leading-[1.6]">Curry&Bar Base</p>
              {/* 電話番号 */}
              <p
                className="
                  [--top:23]
                  mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                  w-full border-y border-[#7D5C36] py-2.5 text-center
                  text-[18px] md:text-[22px] leading-[17px] md:leading-[1.5]
                "
              >
                tel.050-1792-3067
              </p>
            </div>
          </div>
          {/* 店舗情報 */}
          <dl
            className="
              [--top:48] md:[--top:7]
              [--right:0] md:[--right:90]
              [--gap:24] md:[--gap:32]
              flex flex-col
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              mr-[min(calc(100vw*var(--right)/var(--base)),calc(var(--right)*1px))]
              gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
              md:ml-auto
            "
          >
            {footerInfoItems.map((item) => (
              <div
                key={item.label}
                className="
                  [--gap:40] md:[--gap:44]
                  flex items-start
                  gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
                "
              >
                <dt className="w-[48px] md:w-[96px] shrink-0 text-[12px] md:text-[20px] leading-[17px] md:leading-[1.6]">
                  {item.label}
                </dt>
                <dd className="flex min-w-0 flex-col">
                  {item.lines.map((line, index) => (
                    <span
                      key={line}
                      className={
                        index === 0
                          ? "text-[14px] md:text-[20px] leading-[17px] md:leading-[1.6]"
                          : "mt-0.5 text-[11px] md:text-[20px] leading-[17px] md:leading-[1.7]"
                      }
                    >
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        {/* フッターナビ */}
        <nav
          className="
            [--top:48] md:[--top:63]
            [--h:66] md:[--h:77]
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            w-full bg-[#362b21]
          "
        >
          <ul
            className="
              [--gap:16] md:[--gap:18]
              flex h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
              flex-wrap items-center justify-center
              gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
            "
          >
            {footerNavItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="
                    [--fs:16] md:[--fs:20]
                    text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                    leading-[1.5]
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* 最下部の余白帯 */}
        <div
          aria-hidden="true"
          className="
            [--h:48] md:[--h:83]
            h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))]
          "
        />
      </div>
    </footer>
  );
}
