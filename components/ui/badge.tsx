import { motion } from "motion/react";
interface BadgeProps {
  text: string;
  hoverColor: string;
}

export const Badge = ({ text, hoverColor }: BadgeProps) => {
  return (
    <motion.div
      whileHover={{ backgroundColor: hoverColor, rotateX: 20, rotateY: 10 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      style={{ perspective: 1000 }}
      className="bg-canyon flex min-h-6 items-center justify-center rounded-4xl px-3 py-1 text-center text-xs whitespace-nowrap text-black"
    >
      <div className="relative">
        <span className="inset-0">{text}</span>
      </div>
    </motion.div>
  );
};
