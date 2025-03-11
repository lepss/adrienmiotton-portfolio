import { HoverColorSwapDiv } from "@/components/animation/HoverColorSwapDiv";
import { SectionLayoutContent } from "@/components/layout/SectionLayoutContent";
import GitLogo from "@/public/git.svg";
import NextjsLogo from "@/public/nextjs2.svg";
import PostgreSqlLogo from "@/public/postgresql.svg";
import ReactLogo from "@/public/react.svg";
import TailwindLogo from "@/public/tailwindcss.svg";
import ThreejsLogo from "@/public/threejs.svg";
import Image from "next/image";
import { SectionLayout } from "../layout/SectionLayout";

const stacks = [
  {
    color: "#FFB200",
    name: "react",
    logo: ReactLogo,
  },
  {
    color: "#FF6100",
    name: "tailwind",
    logo: TailwindLogo,
  },
  {
    color: "#EA3737",
    name: "nextjs",
    logo: NextjsLogo,
  },
  {
    color: "#FA50B5",
    name: "threejs",
    logo: ThreejsLogo,
  },
  {
    color: "#AC39F2",
    name: "postgreSql",
    logo: PostgreSqlLogo,
  },
  {
    color: "#0482FF",
    name: "git",
    logo: GitLogo,
  },
];

export const StackSection = () => {
  return (
    <>
      <SectionLayout className="bg-canyon border-gray-400">
        <SectionLayoutContent className="border-gray-400">
          <div className="-m-[0.5px] flex min-h-20 grid-cols-1 items-center justify-center p-7 text-center text-lg leading-4 uppercase">
            <h2 className="text-lg text-black">Technical stack</h2>
          </div>
        </SectionLayoutContent>
      </SectionLayout>
      <SectionLayout className="bg-canyon border-gray-400">
        <SectionLayoutContent className="border-gray-400">
          <div className="-m-[0.5px] grid auto-rows-fr grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {stacks.map((stack, _index) => (
              <HoverColorSwapDiv
                key={_index}
                backgroundColor={stack.color}
                className="-m-[0.5px] flex flex-col items-center justify-center gap-2 border border-gray-400 p-7 text-black md:py-14 lg:aspect-square"
              >
                <Image
                  src={stack.logo}
                  width={40}
                  height={40}
                  alt={`${stack.name} logo`}
                  // className="bg-black"
                />
                <p className="capitalize">{stack.name}</p>
              </HoverColorSwapDiv>
            ))}
          </div>
        </SectionLayoutContent>
      </SectionLayout>
    </>
  );
};
