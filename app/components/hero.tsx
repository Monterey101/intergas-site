import { HeroLogo, AustraliaSVG } from "./icons"
import { Button } from "./button"

export const Hero = () => {
    return (
        <div className="relative h-screen w-full">
            <div className="absolute inset-0 flex flex-col items:center lg:items-start justify-center text-white font-bold">
                <div className="flex flex-col gap-5 lg:gap-10 bg-black p-10 m-5">
                    <div className="flex justify-center items-center gap-6 text-6xl lg:text-9xl">
                        <HeroLogo className="w-[60px] h-[60px] lg:w-[120px] lg:h-[120px]" />
                        INTERGAS
                    </div>
                    <div className="flex flex-col gap-10 lg:flex-row items-center justify-between text-center">
                        <div className="text-xl lg:text-2xl text-gray-300 font-normal">Energy Brokerage and Trade Facilitation</div>
                        <Button link="/about" label="Learn More" type="dark"/>
                    </div>
                </div>
            </div>
            {/* <video className="h-full w-full object-cover pointer-events-none" autoPlay muted playsInline loop>
                <source src="/gas-flame.mp4" type="video/mp4" />
            </video> */}
            <img src="/tanker.jpg" className="h-full w-full object-cover pointer-events-none" />

            <div className="absolute inset-0 flex flex-col items-center lg:items-end justify-end text-white mb-25 lg:m-5 pointer-events-none">
                <div className="flex gap-3 items-center bg-black p-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    Headquartered: Sydney, Australia
                    <AustraliaSVG className="w-8 h-8 text-white" />
                </div>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-end text-white m-5 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 animate-bounce">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
            </div>
        </div>
        
        
    )

}