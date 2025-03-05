"use client";

import clsx from "clsx";
import { motion } from "motion/react";

interface SwapTextProps {
  text: string | string[];
  className?: string;
  once?: boolean;
  repeatDelay?: number;
}

const DURATION = 0.25;
const STAGGER = 0.025;

export const SwapText = ({ text, className, once }: SwapTextProps) => {
  const textArray = Array.isArray(text) ? text : [text];
  // const isInView = useInView(ref, { amount: 0.5, once });

  return (
    <div className={clsx("", className)}>
      <span className="sr-only">{text}</span>
      <motion.span aria-hidden>
        {textArray.map((line, _i) => (
          <span key={_i} className="block">
            {line.split(" ").map((word, _j) => (
              <motion.div
                initial="hidden"
                animate="visible"
                // transition={{ staggerChildren: 0.02 }}
                key={_j}
                className="relative inline-block overflow-hidden whitespace-nowrap"
                style={{ lineHeight: 0.8 }}
              >
                <div>
                  {word.split("").map((char, _k) => (
                    <motion.span
                      className="inline-block"
                      key={_k}
                      variants={{ hidden: { y: 0 }, visible: { y: "-100%" } }}
                      transition={{
                        delay: STAGGER * _k + _j * 0.2,
                        duration: DURATION,
                        ease: "easeInOut",
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <span className="inline-block">&nbsp;</span>
                </div>
                <div className="absolute inset-0">
                  {word.split("").map((char, _k) => (
                    <motion.span
                      className="inline-block"
                      key={_k}
                      variants={{ hidden: { y: "100%" }, visible: { y: 0 } }}
                      transition={{
                        delay: STAGGER * _k + _j * 0.2,
                        duration: DURATION,
                        ease: "easeInOut",
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <span className="inline-block">&nbsp;</span>
                </div>
              </motion.div>
            ))}
          </span>
        ))}
      </motion.span>
    </div>
  );
};
