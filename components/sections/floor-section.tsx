import Image from "next/image";
import { asset } from "@/lib/utils";

const bodyParagraphClass =
  "text-[14px] [--fs:20] md:text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))] leading-[1.9] md:leading-[1.7] tracking-[0.02em]";

// 店内写真（SPの横流しとmd以上のレイアウトで共用）
const floorPhotos = [
  {
    src: "/main/floor/counter.png",
    alt: "赤い間接照明に照らされたカウンター席",
    width: 868,
    height: 654,
    spClass: "[--w:318] aspect-[371/217]",
  },
  {
    src: "/main/floor/interior-shelf.png",
    alt: "ボトルや小物が並ぶ店内の棚",
    width: 602,
    height: 814,
    spClass: "[--w:280] aspect-[327/182]",
  },
  {
    src: "/main/floor/cabinet.png",
    alt: "木漏れ日のような照明が当たるキャビネット",
    width: 604,
    height: 810,
    spClass: "[--w:318] aspect-[381/254]",
  },
  {
    src: "/main/floor/cabinet.png",
    alt: "木漏れ日のような照明が当たるキャビネット",
    width: 604,
    height: 810,
    spClass: "[--w:280] aspect-[333/222]",
  },
];

export function FloorSection() {
  return (
    <section
      id="floor"
      className="
        [--base:390] md:[--base:1280]
        [--top:96] md:[--top:80]
        [--bottom:96] md:[--bottom:108]
        w-full
        pt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
        pb-[min(calc(100vw*var(--bottom)/var(--base)),calc(var(--bottom)*1px))]
      "
    >
      {/* 店内案内パネル */}
      <div
        className="
          [--w:366] md:[--w:1049]
          [--py:56] md:[--py:78]
          [--bottom:56] md:[--bottom:111]
          mx-auto
          w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
          bg-[#202021] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
          pt-[min(calc(100vw*var(--py)/var(--base)),calc(var(--py)*1px))]
          pb-[min(calc(100vw*var(--bottom)/var(--base)),calc(var(--bottom)*1px))]
        "
      >
        <div className="flex flex-col md:flex-row md:items-start">
          {/* 見出し・本文 */}
          <div
            className="
              [--left:24] md:[--left:80]
              [--right:24] md:[--right:0]
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              mr-[min(calc(100vw*var(--right)/var(--base)),calc(var(--right)*1px))]
            "
          >
            {/* 見出し */}
            <h2
              className="
                [--fs:44] md:[--fs:69]
                font-normal
                text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                leading-[1.2]
              "
            >
              FLOOR
            </h2>
            <p
              className="
                [--fs:17] md:[--fs:20]
                [--top:6] md:[--top:8]
                mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                text-[clamp(min(16px,calc(var(--fs)*1px)),calc(100vw*var(--fs)/var(--base)),calc(var(--fs)*1px))]
                leading-[1.6]
              "
            >
              店内のご案内
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
            {/* 本文 */}
            <div
              className="
                [--w:576]
                [--top:24] md:[--top:27]
                [--gap:16] md:[--gap:17]
                flex flex-col
                mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
                md:w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              "
            >
              <p className={bodyParagraphClass}>
                オレンジ色の螺旋階段を降りた先にある、Curry & Bar Base。
              </p>
              <p className={bodyParagraphClass}>
                地下にに広がるのは、秘密基地のような遊び心のある空間。
              </p>
              <p className={bodyParagraphClass}>
                棚に並ぶさまざまなお酒。
                <br />
                自由に楽しめるボードゲームや本。店主が好きなものを、
                <br />
                少しずつ集めてつくりました。
              </p>
              <p className={bodyParagraphClass}>
                一人で静かに過ごしたい夜も、誰かとゆっくり語りたい夜も。
              </p>
              {/* TODO: 後半2行はデザイナーからの申し送りと思われる文言（正式文言の確定待ち） */}
              <p className={bodyParagraphClass}>
                肩の力を抜いて、自分らしい時間を過ごせる、
                <br />
                アットホームな夜の秘密基地です。
                <br />
                アクセス、ニュースはお任せします。
                <br />
                他に必要なことがあれば教えてください
              </p>
            </div>
          </div>
          {/* 店内写真（右列。SPは下の横流しで表示する） */}
          <div
            className="
              md:[--left:16]
              md:[--right:0]
              md:[--top:105]
              hidden flex-col
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              mr-[min(calc(100vw*var(--right)/var(--base)),calc(var(--right)*1px))]
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              md:flex md:shrink-0
            "
          >
            <Image
              src={asset(floorPhotos[0].src)}
              alt={floorPhotos[0].alt}
              width={floorPhotos[0].width}
              height={floorPhotos[0].height}
              className="
                [--w:318] md:[--w:371]
                w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
                aspect-[371/217] border border-[#cbb394]/60 object-cover
              "
              sizes="(min-width: 768px) 29vw, 82vw"
            />
            <Image
              src={asset(floorPhotos[1].src)}
              alt={floorPhotos[1].alt}
              width={floorPhotos[1].width}
              height={floorPhotos[1].height}
              className="
                [--w:280] md:[--w:327]
                [--top:32] md:[--top:75]
                [--left:0] md:[--left:76]
                self-end
                mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
                ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
                w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
                aspect-[327/182] border border-[#cbb394]/60 object-cover
                md:self-start
              "
              sizes="(min-width: 768px) 26vw, 72vw"
            />
          </div>
        </div>
        {/* SP: 店内写真を右から左へ流す（ホバー中は停止） */}
        <div
          className="
            [--top:32]
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            overflow-hidden
            motion-reduce:overflow-x-auto
            md:hidden
          "
        >
          <ul
            className="
              [--gap:16]
              flex w-max items-start
              gap-[min(calc(100vw*var(--gap)/var(--base)),calc(var(--gap)*1px))]
              animate-marquee-left
              hover:[animation-play-state:paused]
              motion-reduce:animate-none
            "
          >
            {[0, 1].map((copy) =>
              floorPhotos.map((photo, index) => (
                <li key={`${copy}-${index}`} className="shrink-0">
                  <Image
                    src={asset(photo.src)}
                    // 2組目は読み上げ不要
                    alt={copy === 0 ? photo.alt : ""}
                    aria-hidden={copy === 1}
                    width={photo.width}
                    height={photo.height}
                    className={`
                      w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
                      border border-[#cbb394]/60 object-cover
                      ${photo.spClass}
                    `}
                    sizes="82vw"
                  />
                </li>
              )),
            )}
          </ul>
        </div>
        {/* 店内写真（下段。SPは上の横流しで表示する） */}
        <div
          className="
            md:[--top:56]
            hidden flex-col
            mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
            md:flex md:flex-row md:items-start
          "
        >
          <Image
            src={asset(floorPhotos[2].src)}
            alt={floorPhotos[2].alt}
            width={floorPhotos[2].width}
            height={floorPhotos[2].height}
            className="
              [--w:318] md:[--w:381]
              [--left:24] md:[--left:107]
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              aspect-[381/254] border border-[#cbb394]/60 object-cover
            "
            sizes="(min-width: 768px) 30vw, 82vw"
          />
          <Image
            src={asset(floorPhotos[3].src)}
            alt={floorPhotos[3].alt}
            width={floorPhotos[3].width}
            height={floorPhotos[3].height}
            className="
              [--w:280] md:[--w:333]
              [--top:32] md:[--top:111]
              [--left:0] md:[--left:59]
              [--right:24] md:[--right:0]
              self-end
              mt-[min(calc(100vw*var(--top)/var(--base)),calc(var(--top)*1px))]
              ml-[min(calc(100vw*var(--left)/var(--base)),calc(var(--left)*1px))]
              mr-[min(calc(100vw*var(--right)/var(--base)),calc(var(--right)*1px))]
              w-[min(calc(100vw*var(--w)/var(--base)),calc(var(--w)*1px))]
              aspect-[333/222] border border-[#cbb394]/60 object-cover
              md:self-start
            "
            sizes="(min-width: 768px) 26vw, 72vw"
          />
        </div>
      </div>
    </section>
  );
}
