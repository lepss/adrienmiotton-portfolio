"use client";

import { SectionLayout } from "@/components/layout/SectionLayout";
import { SectionLayoutContent } from "@/components/layout/SectionLayoutContent";
import { Project } from "@/components/section/Project";
import { ProjectSectionContainer } from "@/components/section/ProjectSectionContainer";
import { PROJECT_DATA } from "@/constants/project";
import { useState } from "react";

export const ProjectSection = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? PROJECT_DATA : PROJECT_DATA.slice(0, 3);

  return (
    <ProjectSectionContainer>
      {displayedProjects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
      {PROJECT_DATA.length > 3 && (
        <SectionLayout className="bg-charcoal border-black">
          <SectionLayoutContent className="border-black">
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="rounded bg-black px-4 py-2 text-white transition hover:bg-gray-800"
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
