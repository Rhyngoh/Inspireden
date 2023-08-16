import Image from "next/image";
import InspireCard from "@/components/InspireCard";
import APIInput from "@/components/APIInput";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-12 md:p-24 min-h-screen">
      <div className="z-10 max-w-5xl w-full mb-4 items-center justify-end text-sm lg:flex">
        <APIInput />
      </div>
      <div className="fixed bottom-0 left-0 mb-4 flex w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="http://www.rhyngoh.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/rhino.png"
            alt="Rhyngoh Logo"
            className="dark:invert"
            width={32}
            height={24}
            priority
          />{" "}
          <span className="text-xl font-bold">Rhyngoh</span>
        </a>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert w-16 md:w-[90px]"
          src="/inspireden.svg"
          alt="Next.js Logo"
          width={90}
          height={37}
          priority
        />
        <h1 className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert text-3xl font-extrabold">
          InspirEden
        </h1>
      </div>

      <div className="mb-32 grid text-center w-full lg:w-[50%]">
        <InspireCard />
      </div>
    </main>
  );
}
