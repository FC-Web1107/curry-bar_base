import Image from "next/image";
import { ChevronRight } from "@/components/ui/chevron-right";
import { CopyUrlButton } from "@/components/ui/copy-url-button";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=%E9%B9%BF%E5%85%90%E5%B3%B6%E7%9C%8C%E9%B9%BF%E5%85%90%E5%B3%B6%E5%B8%82%E5%B1%B1%E4%B9%8B%E5%8F%A3%E7%94%BA12-26";

// TODO: 右列の各項目と「アクセス」はFigma上でも空欄（正式情報の確定待ち）
const infoRight = [
  "営業時間",
  "定休日",
  "駐車場",
  "総席数",
  "貸切",
  "クレジットカード",
];

const labelClass = "shrink-0 text-[14px] md:text-[20px] leading-[17px] md:leading-[1.6]";

const buttonClass =
  "[--w:247] [--h:39] [--px:30] flex items-center justify-between w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))] h-[min(calc(100vw*var(--h)/var(--base)),calc(var(--h)*1px))] border border-[#d9d9d9] px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))] text-[14px] md:text-[20px]";

export function ShopInfoSection() {
  return (
    <section
      id="map"
      className="
        [--base:390] md:[--base:1280]
        [--top:96] md:[--top:124]
        [--bottom:96] md:[--bottom:102]
        w-full bg-[#362b22]
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
            <div className="flex items-start gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))] [--gap:0] border-b border-white pb-[min(calc(100vw*var(--bottom)/var(--base)),calc(var(--bottom)*1px))] [--bottom:26] md:[--bottom:32]">
              <dt className={`${labelClass} w-[98px]`}>店名</dt>
              <dd className="text-[14px] md:text-[20px] leading-[17px] md:leading-[1.6]">Curry&Bar Base</dd>
            </div>
            <div className="flex items-start border-b border-white pb-[min(calc(100vw*var(--bottom)/var(--base)),calc(var(--bottom)*1px))] [--bottom:11]">
              <dt className={`${labelClass} w-[98px]`}>電話番号</dt>
              <dd className="flex min-w-0 flex-col">
                <span className="text-[18px] md:text-[22px] leading-[1.4]">050-1792-3067</span>
                <span className="mt-0.5 text-[11px] md:text-[20px] leading-[17px] md:leading-[1.7]">
                  ホームページを見たとお伝えいただけるとスムーズです。
                </span>
              </dd>
            </div>
            <div className="flex items-start border-b border-white pb-[min(calc(100vw*var(--bottom)/var(--base)),calc(var(--bottom)*1px))] [--bottom:14]">
              <dt className={`${labelClass} w-[98px]`}>住所</dt>
              <dd className="flex min-w-0 flex-col">
                <span className="text-[14px] md:text-[20px] leading-[17px] md:leading-[1.6]">〒892-0844</span>
                <span className="mt-0.5 text-[11px] md:text-[20px] leading-[17px] md:leading-[1.7]">
                  鹿児島県鹿児島市山之口町12−26　桜屋ビル B1F
                </span>
              </dd>
            </div>
            <div className="flex items-start border-b border-white pb-[min(calc(100vw*var(--bottom)/var(--base)),calc(var(--bottom)*1px))] [--bottom:23]">
              <dt className={`${labelClass} w-[98px]`}>アクセス</dt>
              <dd />
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
            {infoRight.map((label, index) => (
              <div
                key={label}
                className={`flex items-start border-b border-white pb-[min(calc(100vw*var(--bottom)/var(--base)),calc(var(--bottom)*1px))] ${
                  index === 0 ? "[--bottom:26] md:[--bottom:32]" : "[--bottom:13]"
                }`}
              >
                <dt className={labelClass}>{label}</dt>
                <dd />
              </div>
            ))}
          </dl>
        </div>
        {/* 地図（Figma掲載の地図画像。TODO: 埋め込み地図へ差し替える場合は要確認） */}
        <div
          className="
            [--w:796]
            [--top:48] md:[--top:65]
            [--left:24] md:[--left:242]
            [--right:24] md:[--right:0]
            grid overflow-hidden
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
            mr-[min(calc(100vw*var(--right)/var(--base)),calc(var(--right)*1px))]
            md:mr-0
            md:w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
            aspect-[796/399]
          "
        >
          <Image
            src="/main/shop-info/map.png"
            alt="Curry&Bar Base周辺の地図（鹿児島市山之口町12−26）"
            width={1024}
            height={554}
            className="h-full w-full object-cover object-bottom"
            sizes="(min-width: 768px) 62vw, 88vw"
          />
        </div>
        {/* 地図関連ボタン */}
        <div
          className="
            [--top:40] md:[--top:41]
            [--gap:24] md:[--gap:79]
            flex flex-col items-center justify-center
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
            md:flex-row
          "
        >
          {/* TODO: 「地図を印刷」の挙動が未確定のため、仮でGoogleマップを新しいタブで開く */}
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            地図を印刷
            <ChevronRight className="h-[8px] w-[6px]" />
          </a>
          <CopyUrlButton url={MAP_URL} className={buttonClass} />
        </div>
      </div>
    </section>
  );
}
