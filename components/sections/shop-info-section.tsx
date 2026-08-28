import Link from "next/link";
import { InstagramIcon } from "@/components/ui/instagram-icon";

const infoRight = [
  {
    label: "営業時間",
    lines: ["月・火・水・木・日：18:00~03:00", "金・土：18:00~05:00"],
  },
  { label: "定休日", lines: ["無し"] },
  { label: "駐車場", lines: ["無し"] },
  {
    label: "総席数",
    lines: ["9席（カウンター：7席 / テーブル：2席）", "全席喫煙"],
  },
];

// Googleマップ埋め込み（APIキー不要の共有埋め込み形式）
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=%E9%B9%BF%E5%85%90%E5%B3%B6%E7%9C%8C%E9%B9%BF%E5%85%90%E5%B3%B6%E5%B8%82%E5%B1%B1%E4%B9%8B%E5%8F%A3%E7%94%BA12-26%20%E6%A1%9C%E5%B1%8B%E3%83%93%E3%83%AB&hl=ja&z=17&output=embed";

const labelClass =
  "[--w:98] w-[98px] md:w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))] shrink-0 text-[14px] [--fs:20] md:text-[min(calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))] leading-[17px] md:leading-[1.6]";

const rowClass =
  "flex items-start border-b border-[#c9803f] pb-[min(calc(100vw*var(--bottom)/var(--base)),calc(var(--bottom)*1px))]";

const valueClass = "text-[14px] [--fs:20] md:text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))] leading-[17px] md:leading-[1.6]";

export function ShopInfoSection() {
  return (
    <section
      id="map"
      className="
        [--base:390] md:[--base:1280]
        [--top:96] md:[--top:124]
        [--bottom:96] md:[--bottom:102]
        w-full bg-[#362b22] text-[#c9803f]
        pt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
        pb-[min(calc(100vw*var(--bottom)/var(--base)),calc(var(--bottom)*1px))]
      "
    >
      <div className="mx-auto w-full max-w-[1280px]">
        {/* 見出し */}
        <h2
          className="
            [--fs:28] md:[--fs:36]
            text-center font-normal
            text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
            leading-[1.4]
          "
        >
          SHOP INFORMATION
        </h2>
        {/* 店舗情報 */}
        <div
          className="
            [--top:40]
            [--left:24] md:[--left:240]
            [--right:24] md:[--right:0]
            [--gap:32] md:[--gap:41]
            flex flex-col
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
            mr-[min(calc(100vw*var(--right)/var(--base)),calc(var(--right)*1px))]
            gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
            md:flex-row md:items-start
          "
        >
          {/* 左列 */}
          <dl
            className="
              [--w:398]
              [--gap:8] md:[--gap:9]
              flex w-full flex-col
              gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
              md:w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
            "
          >
            <div className={`${rowClass} [--bottom:26] md:[--bottom:32]`}>
              <dt className={labelClass}>店名</dt>
              <dd className={valueClass}>Curry & Bar Base</dd>
            </div>
            <div className={`${rowClass} [--bottom:11]`}>
              <dt className={labelClass}>電話番号</dt>
              <dd className="flex min-w-0 flex-col">
                <span className="text-[18px] [--fs:22] md:text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))] leading-[1.4]">050-1792-3067</span>
                <span className="mt-0.5 text-[11px] [--fs:20] md:text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))] leading-[17px] md:leading-[1.7]">
                  ホームページを見たとお伝えいただけるとスムーズです。
                </span>
              </dd>
            </div>
            <div className={`${rowClass} [--bottom:14]`}>
              <dt className={labelClass}>住所</dt>
              <dd className="flex min-w-0 flex-col">
                <span className={valueClass}>〒892-0844</span>
                <span className="mt-0.5 text-[11px] [--fs:20] md:text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))] leading-[17px] md:leading-[1.7]">
                  鹿児島県鹿児島市山之口町12−26　桜屋ビル B1F
                </span>
              </dd>
            </div>
          </dl>
          {/* 右列 */}
          <dl
            className="
              [--w:398]
              [--gap:8] md:[--gap:9]
              flex w-full flex-col
              gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
              md:w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
            "
          >
            {infoRight.map((item) => (
              <div key={item.label} className={`${rowClass} [--bottom:13]`}>
                <dt className={labelClass}>{item.label}</dt>
                <dd className="flex min-w-0 flex-col">
                  {item.lines.map((line, index) => (
                    <span key={line} className={index === 0 ? valueClass : `mt-0.5 ${valueClass}`}>
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        {/* 地図（Googleマップ埋め込み）とSNSリンク */}
        <div
          className="
            [--w:796]
            [--top:48] md:[--top:65]
            [--left:24] md:[--left:242]
            [--right:24] md:[--right:0]
            flex flex-col items-end
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
            mr-[min(calc(100vw*var(--right)/var(--base)),calc(var(--right)*1px))]
            md:mr-0
            md:w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
          "
        >
          <div className="w-full overflow-hidden aspect-[796/399]">
            <iframe
              src={MAP_EMBED_URL}
              title="Curry&Bar Base周辺の地図（鹿児島市山之口町12−26 桜屋ビル B1F）"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
          {/* 地図枠外・右下のSNSリンク（TODO: InstagramアカウントのURL未確定のため仮で「#」） */}
          <Link
            href="#"
            aria-label="Instagram"
            className="
              [--top:16] md:[--top:24]
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            "
          >
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
