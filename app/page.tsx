import { SwapText } from "@/components/animation/SwapText";
import { PointCloud } from "@/components/experience/FacePointCloud";
import { Header } from "@/components/layout/Header";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { SectionLayoutContent } from "@/components/layout/SectionLayoutContent";
import { StackSection } from "@/components/section/StackSection";
import Link from "next/link";
import { barlow } from "./font";

const socials = ["twitter", "github", "linkedin"];

export default function Home() {
  return (
    <div className="bg-canyon">
      <Header />
      {/* PRESENTATION */}
      <SectionLayout className="bg-charcoal border-black text-white">
        <SectionLayoutContent className="border-black">
          <div className="-m-[0.5px] grid grid-cols-1 md:grid-cols-(--md-cols) md:grid-rows-(--md-rows) lg:grid-cols-(--lg-cols) lg:grid-rows-(--lg-rows) xl:grid-cols-(--xl-cols) xl:grid-rows-(--xl-rows)">
            <div className="col-span-full -m-[0.5px] block border border-black p-7 lg:hidden">
              <div className="relative">
                <SwapText
                  text="Creative Web Developer"
                  className="sm:tex-3xl mx-auto text-center text-2xl uppercase md:text-4xl lg:text-left lg:text-4xl xl:text-[3.5rem]"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div
                className={`${barlow.className} -m-[0.5px] hidden border border-black p-7 lg:block lg:min-h-5 xl:pb-9`}
              >
                <div className="relative">
                  <SwapText
                    text="Creative Web Developer"
                    className="sm:tex-3xl text-center text-2xl uppercase md:text-4xl lg:mx-0 lg:text-left lg:text-4xl xl:text-[3.5rem]"
                  />
                </div>
              </div>
              <div className="-m-[0.5px] flex flex-1 flex-col overflow-hidden border border-black p-7 text-center md:text-left lg:items-start xl:pr-14">
                <div className="block">
                  <p className="lg:text-md mb-7 last:mb-0 xl:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus blanditiis temporibus quibusdam nobis! Facere
                    illo fuga inventore maiores sit perspiciatis! Perferendis
                    aliquid maiores ad rerum dolorem. Temporibus modi dolor
                    aspernatur?
                  </p>
                </div>
                <div className="mt-7 grid gap-y-3.5 text-sm leading-normal uppercase sm:grid-cols-2 md:-mx-3.5 md:mt-auto lg:-mx-0 lg:inline-grid">
                  <Link href="/" className="relative -mx-[0.5px] inline-block">
                    <span className="bg-canyon flex min-h-14 items-center justify-center rounded-4xl border border-gray-400 px-14 py-3.5 text-center whitespace-nowrap text-black">
                      <div className="relative">
                        <span className="inset-0">Check my work</span>
                      </div>
                    </span>
                  </Link>
                  <Link href="/" className="relative -mx-[0.5px] inline-block">
                    <span className="bg-charcoal flex min-h-14 items-center justify-center rounded-4xl border border-white px-14 py-3.5 text-center whitespace-nowrap text-white">
                      <div className="relative">
                        <span className="inset-0">Contact</span>
                      </div>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="relative -m-[0.5px] hidden items-center border border-black md:block">
                <div className="-m-[0.5px] grid auto-rows-fr grid-cols-3">
                  {socials.map((social, _index) => (
                    <div
                      key={_index}
                      className="-m-[0.5px] flex items-center justify-center border border-black p-7"
                    >
                      <span className="uppercase">{social}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative -m-[0.5px] block aspect-square overflow-hidden border border-black">
              <PointCloud />
            </div>
            <div className="grid md:hidden">
              <div className="relative -m-[0.5px] block items-center border border-black">
                <div className="-m-[0.5px] grid auto-rows-fr grid-cols-3">
                  {socials.map((social, _index) => (
                    <div
                      key={_index}
                      className="-m-[0.5px] flex items-center justify-center border border-black p-7"
                    >
                      <span className="text-sm uppercase">{social}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-full -m-[0.5px] hidden h-14 border border-black md:block"></div>
          </div>
        </SectionLayoutContent>
      </SectionLayout>
      <SectionLayout className="bg-charcoal border-black md:hidden">
        <SectionLayoutContent className="border-black">
          <div className="-m-[0.5px] grid h-7 grid-cols-1"></div>
        </SectionLayoutContent>
      </SectionLayout>
      {/* TECHNICAL STACK */}
      <StackSection />
      <SectionLayout className="bg-charcoal border-black text-white">
        <SectionLayoutContent className="border-black">
          <div className="p-4 text-2xl">
            <h1>Test</h1>
          </div>
        </SectionLayoutContent>
      </SectionLayout>
      <SectionLayout className="bg-charcoal border-black text-white">
        <SectionLayoutContent className="border-black">
          <div className="p-4 text-2xl">
            <h1>Test</h1>
          </div>
        </SectionLayoutContent>
      </SectionLayout>
      <SectionLayout className="bg-charcoal border-black text-white">
        <SectionLayoutContent className="border-black">
          <div className="p-4 text-2xl">
            <h1>Test</h1>
          </div>
        </SectionLayoutContent>
      </SectionLayout>
      <SectionLayout className="bg-charcoal border-black text-white">
        <SectionLayoutContent className="border-black">
          <div className="p-4 text-2xl">
            <h1>Test</h1>
          </div>
        </SectionLayoutContent>
      </SectionLayout>
      <SectionLayout className="bg-charcoal border-black text-white">
        <SectionLayoutContent className="border-black">
          <div className="p-4 text-2xl">
            <h1>Test</h1>
          </div>
        </SectionLayoutContent>
      </SectionLayout>
      <SectionLayout className="bg-charcoal border-black text-white">
        <SectionLayoutContent className="border-black">
          <div className="p-4 text-2xl">
            <h1>Test</h1>
          </div>
        </SectionLayoutContent>
      </SectionLayout>
      <SectionLayout className="bg-charcoal border-black text-white">
        <SectionLayoutContent className="border-black">
          <div className="text-2x p-4">
            <h1>Test</h1>
          </div>
        </SectionLayoutContent>
      </SectionLayout>
    </div>
  );
}
