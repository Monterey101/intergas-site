import { Link } from "./link"
import { NavLogo } from "./icons"

export const Network = () => {

    const companies = [
        "Pearl.png", 
        "PPG.png", 
        "Intergas.png", 
        "PCI-Dark.png"
    ];

    return (
        <div className="p-5 lg:p-10 pt-20 lg:pt-20 lg:pb-5 bg-white text-black">
            <span className="text-6xl">Our Industry Network</span>
            <br />
            <br />
            <div className="w-full h-[1px] bg-black" /><br/>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-25 p-10">
                {companies.map((company) => (
                    <div 
                        key={company}
                        className="flex items-center justify-center hover:opacity-100 transition"
                    >
                        <img
                            src={`/network/${company}`}
                            alt={company}
                            className="max-h-16 lg:max-h-20 w-auto"
                        />
                    </ div>
                ))}
            </div>
        </div>
    )
}