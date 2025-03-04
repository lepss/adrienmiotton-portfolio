import clsx from "clsx";
import { ReactNode } from "react";

interface SectionLayoutContentProps {
  children: ReactNode;
  className?: string;
}

export const SectionLayoutContent = ({
  children,
  className,
}: SectionLayoutContentProps) => {
  return (
    <div className={clsx("col-start-2 col-end-3 border-x", className)}>
      {children}
    </div>
  );
};
