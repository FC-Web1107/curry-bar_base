"use client";

import { motion, useReducedMotion } from "framer-motion";

type ScrollRevealProps = {
  children: React.ReactNode;
  /** 表示開始までの遅延（秒）。横並び要素の時間差表示に使用 */
  delay?: number;
  className?: string;
};

/** スクロールで画面に入ったときに、下からふわっとフェードインさせる共通ラッパー */
export function ScrollReveal({
  children,
  delay = 0,
  className,
}: ScrollRevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
