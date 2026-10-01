// サーバーコンポーネントからも文字列として使えるよう、"use client" のファイル（RevealObserver）とは分けている
/**
 * スクロールで表示させたい要素に付けるクラス。data-reveal 属性と一緒に使う。
 * ぼかし（blur）＋透明の状態から、くっきり表示された状態へフェードインする。
 * 表示後は filter を none に戻す（filter が残ると重なり順が変わるため）
 */
export const revealClass = `
  opacity-0 [filter:blur(12px)]
  transition-[opacity,filter] duration-1000 ease-out
  data-[shown=true]:opacity-100 data-[shown=true]:[filter:none]
  motion-reduce:opacity-100 motion-reduce:[filter:none] motion-reduce:transition-none
`;
