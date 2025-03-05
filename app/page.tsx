// import Link from "next/link";

import { ColorSwapDiv } from "@/components/animation/ColorSwapDiv";
import { SwapText } from "@/components/animation/SwapText";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { SectionLayoutContent } from "@/components/layout/SectionLayoutContent";
import GitLogo from "@/public/git.svg";
import NextjsLogo from "@/public/nextjs2.svg";
import PostgreSqlLogo from "@/public/postgresql.svg";
import ReactLogo from "@/public/react.svg";
import TailwindLogo from "@/public/tailwindcss.svg";
import ThreejsLogo from "@/public/threejs.svg";
import Image from "next/image";
import Link from "next/link";
import { barlow } from "./font";

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
const socials = ["twitter", "github", "linkedin"];

export default function Home() {
  return (
    <div className="bg-canyon">
      {/* HEADER */}
      <SectionLayout className="bg-charcoal sticky -top-[1px] z-50 border-black text-white">
        <SectionLayoutContent className="border-black">
          <div className="relative -m-[0.5px] flex h-14 grid-cols-1 items-center justify-end md:h-20">
            <div className="mr-auto flex h-full">
              <Link
                href="/"
                className="group relative flex h-full items-center px-7"
              >
                <div className="relative block text-lg leading-5 uppercase md:text-2xl">
                  Adrien Miotton
                </div>
              </Link>
            </div>
          </div>
        </SectionLayoutContent>
      </SectionLayout>
      {/* PRESENTATION */}
      <SectionLayout className="bg-charcoal border-black text-white">
        <SectionLayoutContent className="border-black">
          <div className="-m-[0.5px] grid grid-cols-1 md:grid-cols-(--md-cols) md:grid-rows-(--md-rows) lg:grid-cols-(--lg-cols) lg:grid-rows-(--lg-rows) xl:grid-cols-(--xl-cols) xl:grid-rows-(--xl-rows)">
            <div className="col-span-full -m-[0.5px] block border border-black p-7 lg:hidden">
              <div className="relative">
                {/* <AnimatedText
                  text="Creative Web Developer"
                  el="h1"
                  className="sm:tex-3xl mx-auto -mb-[0.25px] text-center text-2xl leading-relaxed tracking-wide uppercase md:text-4xl lg:mx-0 lg:text-left lg:text-4xl xl:text-[3.5rem]"
                  once
                /> */}
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
                  {/* <AnimatedText
                    text="Creative Web Developer"
                    el="h1"
                    className="sm:tex-3xl mx-auto -mb-1.5 text-center text-2xl leading-none tracking-wide uppercase md:text-4xl lg:mx-0 lg:text-left lg:text-4xl xl:text-[3.5rem]"
                    once
                    // repeatDelay={1000}
                  /> */}
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
            <div className="bg-canyon relative -m-[0.5px] block aspect-square overflow-hidden border border-black">
              <Image
                src={"/profile-square.jpg"}
                alt="profile image"
                // width={768}
                // height={768}
                fill={true}
                // sizes="(max-width: 768px) 100vw, 33vw"
                priority={true}
              />
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
      {/* TECHNICAL STACK HEADER */}
      <SectionLayout className="bg-canyon border-gray-400">
        <SectionLayoutContent className="border-gray-400">
          <div className="-m-[0.5px] flex min-h-20 grid-cols-1 items-center justify-center p-7 text-center text-lg leading-4 uppercase">
            <h2 className="text-lg text-black">Technical stack</h2>
          </div>
        </SectionLayoutContent>
      </SectionLayout>
      {/* TECHNICAL STACK ITEMS */}
      <SectionLayout className="bg-canyon border-gray-400">
        <SectionLayoutContent className="border-gray-400">
          <div className="-m-[0.5px] grid auto-rows-fr grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {stacks.map((stack, _index) => (
              <ColorSwapDiv
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
              </ColorSwapDiv>
            ))}
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

      {/* <div className="grid-cols-xs sm:grid-cols-sm lg:grid-cols-lg xl:grid-cols-xl bg-charcoal sticky -top-0.5 z-50 -my-0.5 grid border-y border-black text-white">
        <div className="col-start-2 col-end-3 border-x border-black">
          <div className="relative -m-0.5 flex h-2 grid-cols-1 items-center justify-end md:h-3">
            <a
              href="#skip-nav"
              className="group/button pointer-events-none absolute top-0 left-0 z-10 block h-full opacity-0 transition-opacity duration-100 ease-in-out focus:pointer-events-auto focus:opacity-100"
            >
              <span className="border-charcoal flex h-full min-h-2 cursor-pointer items-center justify-center rounded-4xl border bg-black px-2 py-0.5 text-center text-white">
                Skip to content
              </span>
            </a>
            <div className="mr-auto flex h-full">
              <Link
                href="/"
                className="group relative flex h-full cursor-pointer items-center px-1"
              >
                Adrien Miotton
              </Link>
            </div>
            <nav
              aria-label="Main"
              className="border-charcoal -m-0.5 hidden self-stretch lg:flex"
            >
              <div className="relative">
                <ul className="flex h-full">
                  <li className="-mx-0.5 flex items-stretch whitespace-nowrap first:ml-0 last:mr-0 xl:mx-0">
                    <Link
                      href="/"
                      className="flex items-center p-1 hover:bg-black hover:text-white"
                    >
                      About
                    </Link>
                  </li>
                  <li className="-mx-0.5 flex items-stretch whitespace-nowrap first:ml-0 last:mr-0 xl:mx-0">
                    <Link
                      href="/"
                      className="flex items-center p-1 hover:bg-black hover:text-white"
                    >
                      Projects
                    </Link>
                  </li>
                  <li className="-mx-0.5 flex items-stretch whitespace-nowrap first:ml-0 last:mr-0 xl:mx-0">
                    <Link
                      href="/"
                      className="flex items-center p-1 hover:bg-black hover:text-white"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="hidden h-full grid-cols-2 lg:grid">
              <div className="bg-charcoal -m-0.5 grid border border-black font-mono text-sm leading-normal font-normal text-white uppercase">
                <Link
                  href="/"
                  className="group/button relative -m-0.5 block h-full w-full whitespace-nowrap"
                >
                  <span className="bg-charcoal flex h-full min-h-0 w-full cursor-pointer items-center justify-center border border-green-950 px-1.5 py-0 text-center">
                    Talk to us
                  </span>
                  <span
                    aria-hidden="true"
                    className="group-focus-visible:/button:rounded-none absolute inset-0 flex min-h-0 cursor-pointer items-center justify-center rounded-4xl border border-green-950 bg-green-500 px-1.5 py-0 text-center text-black transition-[boder-radius] duration-300 ease-in-out group-hover/button:rounded-none"
                  >
                    Talk to us
                  </span>
                </Link>
              </div>
              <div className="bg-charcoal -m-0.5 grid border border-black font-mono text-sm leading-normal font-normal text-white uppercase">
                <Link
                  href="/"
                  className="group/button relative -m-0.5 block h-full w-full whitespace-nowrap"
                >
                  <span className="bg-charcoal flex h-full min-h-0 w-full cursor-pointer items-center justify-center border border-green-950 px-1.5 py-0 text-center text-white">
                    Login
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="">
        <div className="grid-cols-xl sm:grid-cols-sm lg:grid-cols-lg xl:grid-cols-xl bg-canyon relative -my-[1px] grid border-y border-gray-600 text-black">
          <div className="col-start-2 col-end-3 border-x border-gray-600">
            <div className="-m-[0.5px] grid grid-cols-1">
              <header className="-m-[0.5px] grid gap-1 border border-gray-600 p-1 md:grid-cols-[8fr_13fr] md:px-2 md:pb-2 lg:grid-cols-[auto-auto] lg:gap-2 lg:py-3 xl:gap-3 xl:pr-3">
                <h2 className="font-body text-2xl leading-1.5 font-bold normal-case md:text-3xl md:leading-2 lg:text-5xl lg:leading-1.5">
                  Header
                </h2>
              </header>
              <div className="block">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
                  <div className="col-span-full p-5 text-center">Cell 2</div>
                  <div className="grid grid-cols-1 p-5 text-center">Cell 3</div>
                  <div className="grid grid-cols-1 p-5 text-center">Cell 4</div>
                  <div className="grid grid-cols-1 p-5 text-center">Cell 5</div>
                  <div className="grid grid-cols-1 p-5 text-center">Cell 6</div>
                  <div className="grid grid-cols-1 p-5 text-center">Cell 7</div>
                  <div className="grid grid-cols-1 p-5 text-center">Cell 8</div>
                  <div className="grid grid-cols-1 p-5 text-center">Cell 9</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
