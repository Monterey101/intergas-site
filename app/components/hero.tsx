import { HeroLogo } from "./icons"
import { Button } from "./button"

export const Hero = () => {
    return (
        <div className="relative h-screen w-full">
            <div className="absolute inset-0 flex flex-col items:center lg:items-start justify-center text-white font-bold">
                <div className="flex flex-col gap-5 lg:gap-10 bg-black p-10 m-5">
                    <div className="flex justify-center items-center gap-6 text-6xl lg:text-9xl">
                        {/* <HeroLogo className="w-[40px] h-[40px] lg:w-[120px] lg:h-[120px]" /> */}
                        INTERGAS
                    </div>
                    <a href="/about" className="flex flex-col gap-10 lg:flex-row items-center justify-between text-center">
                        <div className="text-xl lg:text-2xl text-gray-500">Energy Brokerage and Trade Facilitation</div>
                        <Button label="Learn More" type="dark"/>
                    </a>
                </div>
            </div>
            <video className="h-full w-full object-cover" autoPlay muted playsInline loop>
                <source src="/sydney-video-2.mp4" type="video/mp4" />
            </video>
        </div>
        
        
    )

}