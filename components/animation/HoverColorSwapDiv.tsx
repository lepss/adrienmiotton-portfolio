"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import React from "react";

interface HoverColorSwapDivProps {
  className?: string;
  backgroundColor: string;
  once?: boolean;
  repeatDelay?: number;
  children: React.ReactNode;
}

export const HoverColorSwapDiv = ({
  className,
  backgroundColor,
  children,
}: HoverColorSwapDivProps) => {
  return (
    <motion.div
      whileHover={{ backgroundColor: backgroundColor }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  );
};
