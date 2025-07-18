import { FetchTestSection } from "@/components/fetchTestSection";
import { Header } from "@/components/layout/Header";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { SectionLayoutContent } from "@/components/layout/SectionLayoutContent";
import { PresentationSection } from "@/components/section/PresentationSection";
import { ProjectSection } from "@/components/section/ProjectSection";
import { StackSection } from "@/components/section/StackSection";

export default function Home() {
  return (
    <div className="bg-canyon">
      <Header />
      {/* PRESENTATION */}
      <PresentationSection />

      {/* MOBILE SEPARATOR */}
      <SectionLayout className="bg-charcoal border-black md:hidden">
        <SectionLayoutContent className="border-black">
          <div className="-m-[0.5px] grid h-7 grid-cols-1"></div>
        </SectionLayoutContent>
      </SectionLayout>

      {/* TECHNICAL STACK */}
      <StackSection />

      {/* PROJECTS */}
      <ProjectSection />

      {/* TEST SECTION */}
      <SectionLayout className="bg-charcoal border-black text-white">
        <SectionLayoutContent className="border-black">
          <div className="p-4 text-2xl">
            <h1>Test</h1>
          </div>
        </SectionLayoutContent>
      </SectionLayout>
      <FetchTestSection />
    </div>
  );
}
