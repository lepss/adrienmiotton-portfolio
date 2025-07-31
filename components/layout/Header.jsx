import { SectionLayout } from "@/components/layout/SectionLayout";
import { SectionLayoutContent } from "@/components/layout/SectionLayoutContent";
import { fetchGlobal } from "@/lib/api/global";
import Link from "next/link";

export const Header = async () => {
  const global = await fetchGlobal();
  return (
    <SectionLayout className="bg-charcoal sticky -top-[1px] z-50 border-black text-white">
      <SectionLayoutContent className="border-black">
        <div className="relative -m-[0.5px] flex h-14 grid-cols-1 items-center justify-end md:h-20">
          <div className="mr-auto flex h-full">
            <Link
              href="/"
              className="group relative flex h-full items-center px-7"
            >
              <div className="relative block text-lg leading-5 uppercase md:text-2xl">
                {global.title}
              </div>
            </Link>
          </div>
        </div>
      </SectionLayoutContent>
    </SectionLayout>
  );
};
