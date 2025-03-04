"use client";

import clsx from "clsx";
import { motion, useAnimation, useInView } from "motion/react";
import { JSX, useEffect, useRef } from "react";

interface AnimatedTextProps {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
}

const defaultAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      type: "srping",
    },
  },
};

export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  once,
  repeatDelay,
}: AnimatedTextProps) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }
    return () => clearTimeout(timeout);
  }, [isInView]);

  return (
    <Wrapper className={clsx(className)}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.02 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, _index) => (
          <span key={_index} className="block">
            {line.split(" ").map((word, _index) => (
              <span key={_index} className="inline-block">
                {word.split("").map((char, _index) => (
                  <motion.span
                    className="inline-block"
                    variants={defaultAnimation}
                    key={_index}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
