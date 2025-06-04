import { SectionLayoutContent } from "@/components/layout/SectionLayoutContent";
import clsx from "clsx";
import { ReactNode } from "react";
import { SectionLayout } from "../layout/SectionLayout";

interface ProjectSectionContainerProps {
  children?: ReactNode;
  className?: string;
}
export const ProjectSectionContainer = ({
  children,
  className,
}: ProjectSectionContainerProps) => {
  return (
    <>
      <SectionLayout
        className={clsx("bg-charcoal border-black text-white", className)}
      >
        <SectionLayoutContent className="border-black">
          <div className="-m-[0.5px] flex min-h-20 grid-cols-1 items-center justify-center p-7 text-center text-lg leading-4 uppercase">
            <h2 className="text-2xl">Projects</h2>
          </div>
        </SectionLayoutContent>
      </SectionLayout>
      {children}
    </>
  );
};
