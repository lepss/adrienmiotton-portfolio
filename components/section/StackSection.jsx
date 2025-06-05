import { HoverColorSwapDiv } from "@/components/animation/HoverColorSwapDiv";
import { SectionLayoutContent } from "@/components/layout/SectionLayoutContent";
import { STACKS_DATA } from "@/constants/stacks";
import Image from "next/image";
import { SectionLayout } from "../layout/SectionLayout";

const stacks = ["react", "tailwind", "nextjs", "threejs", "git", "postgresql"];

export const StackSection = () => {
  return (
    <>
      <SectionLayout className="bg-canyon border-gray-400">
        <SectionLayoutContent className="border-gray-400">
          <div className="-m-[0.5px] flex min-h-20 grid-cols-1 items-center justify-center p-7 text-center text-lg leading-4 uppercase">
            <h2 className="text-2xl text-black">Technical stack</h2>
          </div>
        </SectionLayoutContent>
      </SectionLayout>
      <SectionLayout className="bg-canyon border-gray-400">
        <SectionLayoutContent className="border-gray-400">
          <div className="-m-[0.5px] grid auto-rows-fr grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {stacks.map((stack, _index) => {
              const stackData = STACKS_DATA.find(
                (s) => s.name.toLowerCase() === stack.toLowerCase(),
              );
              if (!stackData) return null;
              return (
                <HoverColorSwapDiv
                  key={_index}
                  backgroundColor={stackData.color}
                  className="-m-[0.5px] flex flex-col items-center justify-center gap-2 border border-gray-400 p-7 text-black md:py-14 lg:aspect-square"
                >
                  <Image
                    src={stackData.logo}
                    width={40}
                    height={40}
                    alt={`${stackData.name} logo`}
                    // className="bg-black"
                  />
                  <p className="capitalize">{stackData.name}</p>
                </HoverColorSwapDiv>
              );
            })}
          </div>
        </SectionLayoutContent>
      </SectionLayout>
    </>
  );
};
