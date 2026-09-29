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
      "野菜をじっくり溶かし込んだ",
      "甘みからスパイスの",
      "余韻へ変化する",
      "欧風スパイスカレー",
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
    no: "02",
    title: "STORY COCKTAIL",
    subtitle: "物語カクテル",
    descriptionLines: [
      "一杯のカクテルに",
      "一つの物語を。",
      "舞子の旅シリーズなど",
      "Baseならではのカクテル体験",
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
    slug: "non-alcohol",
    linkLabel: "ノンアルを見る",
    no: "05",
    title: "NON-ALCOHOL",
    subtitle: "ノンアルカクテル",
    descriptionLines: [
      "お酒を飲まない夜でも",
      "カクテルらしい特別感や",
      "物語を楽しめる一杯",
    ],
    image: {
      src: "/main/mood/blue-cocktail.png",
      alt: "カウンターに置かれた青いカクテル",
      width: 816,
      height: 1020,
    },
  },
];
