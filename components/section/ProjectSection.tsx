"use client";

import { SectionLayout } from "@/components/layout/SectionLayout";
import { SectionLayoutContent } from "@/components/layout/SectionLayoutContent";
import { Project } from "@/components/section/Project";
import { ProjectSectionContainer } from "@/components/section/ProjectSectionContainer";
import { PROJECT_DATA } from "@/constants/project";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const ProjectSection = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <ProjectSectionContainer>
      {PROJECT_DATA.slice(0, 3).map((project, index) => (
        <Project key={index} {...project} />
      ))}

      <AnimatePresence initial={false}>
        {showAll && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4 }}
            style={{ overflow: "hidden" }}
          >
            {PROJECT_DATA.slice(3).map((project, index) => (
              <Project key={index + 3} {...project} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {PROJECT_DATA.length > 3 && (
        <SectionLayout className="bg-charcoal border-black">
          <SectionLayoutContent className="border-black">
            <div className="flex justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-blue-custom h-15 w-full cursor-pointer rounded-4xl text-xl text-white uppercase transition-[all] duration-200 ease-out hover:rounded-none"
              >
                {showAll ? "Show less" : "Show more"}
              </button>
            </div>
          </SectionLayoutContent>
        </SectionLayout>
      )}
    </ProjectSectionContainer>
  );
};
