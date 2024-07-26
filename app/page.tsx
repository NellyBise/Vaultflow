import Image from "next/image";
import logos from "../public/Logos.png"
import { Chart } from "@/components/Chart";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-[1200px] mx-auto flex-col items-center text-lg justify-between my-32">
      <section className="text-center flex flex-col items-center gap-6 mb-16">
        <p className="border border-white/20 rounded-full w-max px-4 py-2">We just raised $20M in Series B. Learn more</p>
        <h1 className="text-[80px] leading-[80px] font-medium text-transparent bg-clip-text bg-gradient-to-br from-[#ECECEC] from-20% to-white/20 w-max">Modern analytics <br /> for the modern world</h1>
        <p className=" w-[550px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
        <div className="flex justify-center gap-4 py-4">
          <Button className="h-12" >Download the app</Button>
          <Button className="h-12 bg-transparent text-white border border-white hover:text-black">Talk to an expert</Button>
        </div>
      </section>
      <Chart />
      <article className="flex flex-col items-center text-center gap-8 my-12">
        <p className="text-xl text-white/80">Trusted by teams at over 1,000 of the world’s leading organizations</p>
        <Image src={logos} height={24} alt="Dell, Zendesk, Rakuten" />
        <h2 className=" text-5xl leading-[57px] mt-12 w-[400px]">Features that work for your future.</h2>
        <p className=" w-[470px]">Check out our amazing features and experience the power of Vaultflow for yourself.</p></article>
    </main>
  );
}
