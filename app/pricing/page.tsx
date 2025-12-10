import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Pricing() {
    return (
        <main className="flex min-h-screen max-w-[1200px] mx-auto flex-col items-center text-lg justify-between my-32">
            <section className="text-center flex flex-col items-center gap-6 mb-16">
                <h1 className="text-[56px] leading-[56px] font-medium ">Des prix en accord avec<br /> <span className="text-transparent bg-clip-text bg-[radial-gradient(44.52%_83.97%_at_55.31%_103.97%,rgba(4,59,203,1)_28%,rgba(136,179,253,1)_100%)]  w-max">notre vision</span></h1>
                <div className="flex justify-center gap-4 py-4">
                    <Button className="h-12 text-white bg-[radial-gradient(51.41%_105.14%_at_50.04%_105.14%,rgba(10,48,139,1)_0%,rgba(30,110,251,1)_100%)]" >Paiement mensuel</Button>
                    <Button className="h-12 bg-transparent text-white border border-white hover:text-black">Paiement mensuel (-20%)</Button>
                </div>
            </section>
            <section className="flex gap-6 mt-20">
                <Card className="flex flex-col rounded-3xl overflow-hidden border-none bg-gradient-to-b from-white/5 p-[60px]">
                    <CardTitle className="mb-4 text-[34px] font-medium">
                        <p className="mb-5 overflow-hidden p-3 bg-blue-700 rounded-lg  w-max relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round"><path d="M13.48 7.516a6.5 6.5 0 1 1-6.93-7" /><path d="M9.79 8.09A3 3 0 1 1 5.9 4.21M7 7l2.5-2.5m2 .5l-2-.5l-.5-2l2-2l.5 2l2 .5z" /></g></svg>
                            <div className="rounded-full w-16 h-16 bg-white/20 absolute -top-4 -left-6"></div>
                            <div className="rounded-full w-16 h-16 bg-white/20 absolute top-1.5 -left-3"></div>
                        </p>
                        Essentiel
                        <p className="text-5xl my-8">$179 <span className="text-base">/ month</span></p></CardTitle>
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

        </main>
    );
}
