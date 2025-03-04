import clsx from "clsx";
import { ReactNode } from "react";

interface SectionLayoutProps {
  children: ReactNode;
  className?: string;
}

export const SectionLayout = ({ children, className }: SectionLayoutProps) => {
  return (
    <div
      className={clsx(
        "grid-cols-xs sm:grid-cols-sm lg:grid-cols-lg xl:grid-cols-xl relative -my-[1px] grid border-y",
        className,
      )}
    >
      {children}
    </div>
  );
};
