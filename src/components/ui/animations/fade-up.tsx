"use client";
import { Easing, motion, type Transition, type Variants } from "framer-motion";

export type FadeDirection = "up" | "down" | "left" | "right" | "none";
export interface RevealProps {
  children: React.ReactNode;
  direction?: FadeDirection;
  delay?: number;
  duration?: number;
  className?: string;
}

const DISTANCE = 124;
const EASE: Easing = [0.21, 0.47, 0.32, 0.98];

const DIRECTION_OFFSET: Record<FadeDirection, { x: number; y: number }> = {
  up: { x: 0, y: DISTANCE },
  down: { x: 0, y: -DISTANCE },
  left: { x: -DISTANCE, y: 0 },
  right: { x: DISTANCE, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className,
}: RevealProps) {
  const { x, y } = DIRECTION_OFFSET[direction];

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  const transition: Transition = {
    duration,
    delay,
    ease: EASE,
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-128px" }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
