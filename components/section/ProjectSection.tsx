import { SectionLayoutContent } from "@/components/layout/SectionLayoutContent";
import { STACKS_DATA } from "@/constants/stacks";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import Image from "next/image";
import { SectionLayout } from "../layout/SectionLayout";
import { Badge } from "../ui/badge";

interface ProjectSectionProps {
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  url?: string;
  githubUrl?: string;
  stacks: string[];
}

const MOBILE_BOTTOM_MARGIN = "1.5rem";

export const ProjectSection = ({
  title,
  description,
  imagePath,
  imageAlt,
  url,
  githubUrl,
  stacks,
}: ProjectSectionProps) => {
  return (
    <SectionLayout className="bg-charcoal border-black text-white">
      <SectionLayoutContent className="border-black">
        <div
          className={`-m-[0.5px] grid grid-cols-1 grid-rows-[auto_1.5rem_auto] lg:grid-cols-[minmax(0,1fr)_35rem] lg:grid-rows-[19.6875rem_3.5rem] xl:grid-cols-[minmax(0,1fr)_42rem] xl:grid-rows-[23.625rem_3.5rem]`}
        >
          <div className="flex flex-col">
            <div className="relative -m-[0.5px] flex justify-between border border-black p-4">
              <h3 className="text-xl font-bold uppercase">{title}</h3>
              <div className="flex flex-row gap-4">
                {url && (
                  <a target="_blank" href={url}>
                    <ExternalLinkIcon />
                  </a>
                )}
                {githubUrl && (
                  <a target="_blank" href={githubUrl}>
                    <GithubIcon />
                  </a>
                )}
              </div>
            </div>

            {/* 👉 Image mobile uniquement */}
            <div className="relative -m-[0.5px] aspect-video overflow-hidden border border-black lg:hidden">
              <Image
                src={imagePath}
                layout="fill"
                objectFit="cover"
                alt={imageAlt}
                className="h-full"
              />
            </div>
            <div className="-m-[0.5px] flex flex-1 flex-col border border-black p-4">
              <div className="text-left">
                <p>{description}</p>
              </div>
              <div className="mt-7 grid gap-y-3.5 text-sm leading-normal uppercase md:-mx-3.5 md:mt-auto lg:-mx-0 lg:inline-grid">
                <div className="flex flex-row justify-end gap-4 overflow-hidden p-3">
                  {stacks.map((stackName, index) => {
                    const stackData = STACKS_DATA.find(
                      (s) => s.name.toLowerCase() === stackName.toLowerCase(),
                    );
                    if (!stackData) return null;
                    return (
                      <Badge
                        key={index}
                        text={stackName}
                        hoverColor={stackData.color}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* 👉 Image desktop uniquement */}
          <div className="relative -m-[0.5px] hidden aspect-video overflow-hidden border border-black lg:block lg:aspect-auto">
            <Image
              src={imagePath}
              layout="fill"
              objectFit="cover"
              alt={imageAlt}
              className="h-full"
            />
          </div>
        </div>
      </SectionLayoutContent>
    </SectionLayout>
  );
};
