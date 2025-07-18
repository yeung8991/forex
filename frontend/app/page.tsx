import { FxCard } from "@/components/FxCard";
import Image from "next/image";

export default function Home() {
  const chartdata = [
    {
      month: "Jul 10",
      Performance: 1.324,
    },
    {
      month: "Jul 11",
      Performance: 1.354,
    },
    {
      month: "Jul 12",
      Performance: 1.348,
    },
    {
      month: "Jul 13",
      Performance: 1.361,
    },
    {
      month: "Jul 14",
      Performance: 1.341,
    },
  ];
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <FxCard
          chartdata={chartdata}
          ticker={"GBP/USD"}
          spot={1.34}
          trend={1.1}
        ></FxCard>
        <FxCard
          chartdata={chartdata}
          ticker={"GBP/EUR"}
          spot={1.15}
          trend={0.2}
        ></FxCard>
        <FxCard
          chartdata={chartdata}
          ticker={"GBP/CHF"}
          spot={1.08}
          trend={-0.2}
        ></FxCard>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* FOOTER CONTENT */}
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </footer>
    </div>
  );
}
