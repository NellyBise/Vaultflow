import Image from "next/image";
import logos from "../public/Logos.png"
import tokens from "../src/tokens.png"
import { Chart } from "@/components/Chart";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
        <p className="text-xl text-white/80">Trusted by teams at over 1,000 of the world&rsquo;s leading organizations</p>
        <Image src={logos} height={24} alt="Dell, Zendesk, Rakuten" />
        <h2 className=" text-5xl leading-[57px] mt-12 w-[400px]">Features that work for your future.</h2>
        <p className=" w-[470px]">Check out our amazing features and experience the power of Vaultflow for yourself.</p></article>
      <section className="flex gap-6 mt-20">
        <Card className="flex flex-col rounded-3xl overflow-hidden border-none bg-gradient-to-b from-white/5 p-[60px]">
          <CardTitle className="mb-4 text-[32px] font-medium">
            <p className="mb-5 p-2 bg-violet-700 rounded-lg shadow-def shadow-violet-700/80 w-max"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><g fill="none" stroke="white" strokeWidth="1.5"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" /><path strokeLinecap="round" strokeLinejoin="round" d="m7 14l2.293-2.293a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 0 1.414 0L17 10m0 0v2.5m0-2.5h-2.5" /></g></svg></p>
            Analytics Dashboard</CardTitle>
          <CardContent className="flex flex-col p-0 text-sm">
            <p className="mb-[26px]">Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights.</p>
            <a href='#card' className="underline text-base">View dashboard</a>
          </CardContent>
        </Card>
        <Card className="flex flex-col rounded-3xl overflow-hidden border-none bg-gradient-to-b from-white/5 p-[60px]">
          <CardTitle className="mb-4 text-[32px] font-medium">
            <p className="mb-5 p-2 bg-purple-700 rounded-lg shadow-def shadow-purple-700/80 w-max"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><g fill="none" stroke="white" strokeLinecap="round" strokeWidth="1.5"><path d="M12 2c5.523 0 10 4.477 10 10c0 1.821-.487 3.53-1.338 5M5 4.859A9.97 9.97 0 0 0 2 12c0 5.523 4.477 10 10 10c1.821 0 3.53-.487 5-1.338" /><path d="M5 12c0 1.487.464 2.866 1.255 4M12 5a7 7 0 1 1-3 13.326" /><path d="M12 16a4 4 0 0 0 0-8" /></g></svg></p>
            Digital Credit Tokens</CardTitle>
          <CardContent className="flex flex-col p-0 text-sm">
            <p className="mb-[26px]">Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business.</p>
            <a href='#card' className="underline text-base">View tokens</a>
          </CardContent>
        </Card>
      </section>
      <section>
        <Card className="flex gap-[133px] my-20 rounded-3xl overflow-hidden border-none bg-gradient-to-b from-white/5 p-[60px]">
          <CardContent className="flex flex-col w-1/2 p-0 text-sm">
            <CardTitle className="mb-6 text-[32px] font-medium">
              <p className="mb-9 p-2 bg-fuchsia-600 rounded-lg shadow-def shadow-fuchsia-600/80 w-max"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="white" d="M9 17H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2zm2 2H5V5h14v14.1M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2" /></svg></p>
              Code collaboration</CardTitle>
            <p className="mb-[26px]">Our advanced code synchronization technology ensures that your data is always up-to-date and accurate, no matter where it&rsquo;s coming from. Whether you&rsquo;re integrating data from multiple sources or working with a team of developers, our synchronization technology makes it easy to collaborate and ensure that your data is consistent and reliable.</p>
            <a href='#card' className="underline text-base">View code collaboration</a>
          </CardContent>
          <CardFooter className="w-1/2 p-0">
            <Image src={tokens} alt="" className="shadow-def rounded-3xl " />
          </CardFooter>
        </Card>
        <Card className="flex flex-col h-max text-center mt-20 rounded-3xl overflow-hidden border-none bg-gradient-to-b from-white/5 py-[60px] px-[216px]">
          <CardTitle className="text-5xl font-bold leading-none	 mb-[10px]">
            Our powerful analytics provides invaluable insights.</CardTitle>
          <CardContent className="flex flex-col items-center p-0 text-lg">
            <p className="mb-[26px]">Unlock the power of data with our cutting-edge analytics product. Get instant insights with our user-friendly Analytics Dashboard, and take advantage of our innovative digital credit tokens to reward your customers and incentivize engagement. </p>
            <Button className="h-12 w-max bg-transparent text-base text-white border border-white hover:text-black">Download the app</Button>
          </CardContent>
        </Card>
      </section>


    </main>
  );
}
