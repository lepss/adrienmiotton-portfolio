"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import React from "react";

interface ColorSwapDivProps {
  className?: string;
  backgroundColor: string;
  once?: boolean;
  repeatDelay?: number;
  children: React.ReactNode;
}

const defaultAnimation = {
  hidden: {},
  visible: {},
};

export const ColorSwapDiv = ({
  className,
  backgroundColor,
  once,
  repeatDelay,
  children,
}: ColorSwapDivProps) => {
  return (
    <motion.div
      whileHover={{ backgroundColor: backgroundColor }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  );
};
