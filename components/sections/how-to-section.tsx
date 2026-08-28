import Image from "next/image";
import { Parallax } from "@/components/ui/parallax";

// BASEの利用シーン
const scenes = [
  "一人で静かに飲みたい夜",
  "豊富なお酒を楽しみたい",
  "デート",
  "仕事終わりの夜ご飯",
  "飲み会後の締めカレー",
  "酒を飲まない人と一緒に",
];

export function HowToSection() {
  return (
    <section id="how-to" className="[--base:390] md:[--base:1280] w-full">
      {/* ウイスキー棚の写真（強めのパララックス） */}
      <div className="grid w-full overflow-hidden aspect-[390/300] md:aspect-[1280/604]">
        <Parallax
          offset={160}
          scaleWithViewport
          className="col-start-1 row-start-1 flex h-full min-h-0 w-full items-center"
        >
          <Image
            src="/main/how-to/whisky-shelf.jpg"
            alt="ウイスキーボトルが並ぶバックバーの棚"
            width={1179}
            height={782}
            className="
              [--h:510] md:[--h:1027]
              w-full max-w-none shrink-0 object-cover
              h-[calc(100vw*var(--h)/var(--base))]
            "
            sizes="100vw"
          />
        </Parallax>
      </div>
      <div
        className="
          [--px:24] md:[--px:0]
          [--py:64] md:[--py:100]
          mx-auto flex w-full max-w-[1280px] flex-col
          px-[min(calc(100vw*var(--px)/var(--base)),calc(var(--px)*1px))]
          pt-[min(calc(100vw*var(--py)/var(--base)),calc(var(--py)*1px))]
          md:items-center
          lg:flex-row lg:items-start
        "
      >
        {/* 見出し・利用シーン */}
        <div
          className="
            [--left:0] lg:[--left:100]
            ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
          "
        >
          {/* 見出し */}
          <h2
            className="
              [--fs:36] md:[--fs:60]
              font-normal
              text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
              leading-[1.2]
            "
          >
            HOW TO ENJOY
          </h2>
          <p
            className="
              [--fs:17] md:[--fs:20]
              [--top:8] md:[--top:10]
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
              leading-[1.6] tracking-[0.1em] text-[#cbb394]
            "
          >
            こんな夜にBaseへ
          </p>
          {/* 飾り線 */}
          <span
            aria-hidden="true"
            className="
              [--w:83]
              [--top:20] md:[--top:25]
              block
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              h-0.5 bg-[#7D5C36]
            "
          />
          {/* 利用シーン一覧 */}
          <ul
            className="
              [--top:40] md:[--top:56]
              [--gap:20] md:[--gap:28]
              grid grid-cols-1
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              gap-y-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
              md:grid-cols-2 md:gap-x-[min(calc(100vw*60/var(--base)),60px)]
            "
          >
            {scenes.map((scene) => (
              <li
                key={scene}
                className="
                  [--gap:14] md:[--gap:16]
                  flex items-center
                  gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    [--w:20] md:[--w:24]
                    w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
                    h-px shrink-0 bg-[#cbb394]
                  "
                />
                <span className="[--fs:17] md:[--fs:20] text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))] leading-[1.9] tracking-[0.06em]">
                  {scene}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* ウイスキーグラスの写真 */}
        <Image
          src="/main/how-to/whisky-glasses.jpg"
          alt="果皮を添えたウイスキーグラスが並ぶ様子"
          width={1360}
          height={1020}
          className="
            [--w:260] md:[--w:358]
            [--top:40] lg:[--top:64]
            [--right:0] lg:[--right:60]
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            mr-[min(calc(100vw*var(--right)/var(--base)),calc(var(--right)*1px))]
            w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
            aspect-[358/237] border border-[#cbb394]/60 object-cover
            shadow-[0px_8px_11px_0px_rgba(0,0,0,0.25)]
            lg:ml-auto
          "
          sizes="(min-width: 768px) 28vw, 66vw"
        />
      </div>
    </section>
  );
}
