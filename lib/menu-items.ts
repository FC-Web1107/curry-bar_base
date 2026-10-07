// BASEの楽しみ方のメニュー項目（カード・サブページ共通データ）
export type MenuItem = {
  slug: string;
  no: string;
  title: string;
  subtitle: string;
  /** 説明文（カード・サブページ共通。デザイン上の改行位置で区切る） */
  descriptionLines: string[];
  /** カードのボタン文言 */
  linkLabel: string;
  /** 外部サイトへ飛ばす場合のリンク先（指定時はサブページを作らず、カードから新しいタブで開く） */
  externalUrl?: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const menuItems: MenuItem[] = [
  {
    slug: "curry",
    linkLabel: "カレーを見る",
    no: "01",
    title: "CURRY",
    subtitle: "Baseのカレー",
    descriptionLines: [
      "野菜をじっくり溶かし込み、",
      "甘みからスパイスの余韻へ。",
      "夜の締めに合うBaseカレー",
    ],
    image: {
      src: "/main/mood/curry.jpg",
      alt: "鉄鍋で提供されるカレー",
      width: 680,
      height: 1020,
    },
  },
  {
    slug: "story-cocktail",
    linkLabel: "物語を選ぶ",
    // 物語を選ぶ（カクテル図鑑）
    externalUrl: "https://story-collection-pi.vercel.app",
    no: "02",
    title: "STORY COCKTAIL",
    subtitle: "物語カクテル",
    descriptionLines: [
      "一杯のカクテルに、",
      "一つの物語を。",
      "味と物語を楽しむ、",
      "Baseだけの一杯",
    ],
    image: {
      src: "/main/concept/olvo-cocktail.png",
      alt: "オリジナルカクテル「Olvo」とサインボード",
      width: 945,
      height: 513,
    },
  },
  {
    slug: "bar-selection",
    linkLabel: "ドリンクを見る",
    no: "03",
    title: "BAR SELECTION",
    subtitle: "豊富なお酒とカクテル",
    descriptionLines: [
      "定番から少し珍しいものまで",
      "幅広いラインナップ。",
      "豊富なカクテル/鹿児島のお酒/",
      "ウイスキー/ワインセラー完備",
    ],
    image: {
      src: "/main/how-to/whisky-shelf.jpg",
      alt: "ウイスキーボトルが並ぶバックバーの棚",
      width: 1179,
      height: 782,
    },
  },
  {
    slug: "gacha-bingo",
    linkLabel: "ガチャで遊ぶ",
    // カクテルガチャビンゴ
    externalUrl: "https://cocktail-gacha-bingo-preview.pages.dev",
    no: "04",
    title: "GACHA BINGO",
    subtitle: "カクテルガチャビンゴ",
    descriptionLines: [
      "何が出るかわからない楽しさと",
      "ビンゴを組み合わせた",
      "Baseの遊び体験",
    ],
    image: {
      src: "/main/mood/cocktail-lineup.jpg",
      alt: "色とりどりのカクテルが並ぶバックバー",
      width: 1179,
      height: 734,
    },
  },
  {
    slug: "bar-con",
    linkLabel: "イベントを見る",
    // BAR CON（少人数交流イベント）
    externalUrl: "https://bar-con-event.pages.dev",
    no: "05",
    title: "BAR CON",
    subtitle: "少人数交流イベント",
    descriptionLines: [
      "少人数で話しやすい、",
      "一人参加も歓迎の",
      "Baseで開催する交流イベント",
    ],
    image: {
      src: "/main/cocktail/bar-con-event.webp",
      alt: "明るい店内でカレーやドリンクを囲み、店員と談笑する参加者たちのイラスト",
      width: 1122,
      height: 1402,
    },
  },
];
