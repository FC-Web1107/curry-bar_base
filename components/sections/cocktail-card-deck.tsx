"use client";

import { Children, useEffect, useRef, useState } from "react";

/** 1枚あたりの切り替え間隔（ms）。一定速度で回し続ける */
const SWITCH_INTERVAL = 2000;
/** スワイプで送る判定に必要な横移動量（px） */
const SWIPE_THRESHOLD = 40;
/** ここを超えて動いたらドラッグ扱いにし、リンク遷移を止める（px） */
const DRAG_START_DISTANCE = 4;

type CocktailCardDeckProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * SP用。カードを重ねて置き、一定速度で1枚ずつ手前から奥へ送る
 * （トランプを切るような切り替え）。
 * - 左右スワイプ／ドラッグで手動送りができる
 * - ホバー中とドラッグ中は自動送りを止め、離れたら再開する
 */
export function CocktailCardDeck({ children, className }: CocktailCardDeckProps) {
  const cards = Children.toArray(children);
  const total = cards.length;

  const [front, setFront] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const draggedRef = useRef(false);

  const paused = hovered || dragging;

  useEffect(() => {
    if (total <= 1 || paused) {
      return;
    }
    const timer = window.setInterval(() => {
      setFront((current) => (current + 1) % total);
    }, SWITCH_INTERVAL);

    return () => window.clearInterval(timer);
  }, [total, paused]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = event.clientX;
    draggedRef.current = false;
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) {
      return;
    }
    const distance = event.clientX - dragStartX.current;
    if (Math.abs(distance) > DRAG_START_DISTANCE) {
      draggedRef.current = true;
    }
    setDragX(distance);
  };

  const handlePointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    const startX = dragStartX.current;
    dragStartX.current = null;
    setDragging(false);
    setDragX(0);
    if (startX === null) {
      return;
    }
    const distance = event.clientX - startX;
    if (distance <= -SWIPE_THRESHOLD) {
      setFront((current) => (current + 1) % total);
    } else if (distance >= SWIPE_THRESHOLD) {
      setFront((current) => (current - 1 + total) % total);
    }
  };

  // スワイプ後にリンクへ遷移してしまうのを防ぐ
  const handleClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (draggedRef.current) {
      event.preventDefault();
      event.stopPropagation();
      draggedRef.current = false;
    }
  };

  return (
    <div
      className={`grid touch-pan-y select-none justify-items-center ${className ?? ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      onClickCapture={handleClickCapture}
    >
      {cards.map((card, index) => {
        // 0が一番手前。奥へいくほど上へずらし、傾けて小さくする
        const depth = (index - front + total) % total;
        const isFront = depth === 0;

        return (
          <div
            key={index}
            className={`col-start-1 row-start-1 ${
              isFront && dragging
                ? ""
                : "transition-transform duration-700 ease-in-out motion-reduce:transition-none"
            }`}
            style={{
              transform: `translate(${isFront ? dragX : 0}px, ${-depth * 8}px) rotate(${
                (depth % 2 === 0 ? -1 : 1) * depth * 1.5
              }deg) scale(${1 - depth * 0.03})`,
              zIndex: total - depth,
            }}
          >
            {card}
          </div>
        );
      })}
    </div>
  );
}
