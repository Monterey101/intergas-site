import { NavLogo, AustraliaSVG } from "./icons";
import { Link } from "./link";

export const Footer = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 lg:px-10 py-5 pt-10 text-white bg-black">
            <div className="flex flex-col gap-6">
                <div className="flex gap-2">
                    <NavLogo />
                    <a href="/" className="font-bold text-3xl">INTERGAS</a>
                </div>
                <span className="text-gray-500 font-bold">Energy Brokerage and Trade Facilitation</span>
                <div className="flex gap-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    Sydney, NSW, Australia
                    <AustraliaSVG className="w-8 h-8 text-white" />
                </div>
                <span className="text-gray-500">ABN 98 691 680 725</span>
                <span className="text-gray-500">Australian Securities and Investments Commission (ASIC) Registered & Regulated</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-15 text-xl">
                <div>
                    <span className="text-sm text-gray-500 font-bold">SERVICES</span>
                    <br />
                    <br />
                    <Link title="LNG brokerage" link="/commodities/lng"/>
                    <Link title="LPG brokerage" link="/commodities/lpg"/>
                    <Link title="Oil brokerage" link="/commodities/oil"/>
                </div>
                <div>
                    <span className="text-sm text-gray-500 font-bold">COMPANY</span>
                    <br />
                    <br />
                    <Link title="About" link="/about"/>
                    <Link title="Careers" link="/careers"/>
                    <Link title="Newsroom" link="/newsroom/newsdash"/>
                </div>
                <div>
                    <span className="text-sm text-gray-500 font-bold">LEGAL</span>
                    <br />
                    <br />
                    <Link title="Privacy Policy" link="/legal/privacy"/>
                    <Link title="Terms of Use" link="/legal/terms"/>
                    <Link title="Risk Disclosure" link="/legal/risk"/>
                </div>
                <div>
                    <span className="text-sm text-gray-500 font-bold">SOCIAL</span>
                    <br />
                    <br />
                    <Link title="𝕏" link="https://www.x.com/intergas_energy" openNew/>
                    <Link title="Instagram" link="https://www.instagram.com/intergas_energy" openNew/>
                    <Link title="LinkedIn" link="https://www.linkedin.com/company/intergas-energy" openNew/>
                </div>
                <div>
                    <span className="text-sm text-gray-500 font-bold">CONTACT</span>
                    <br />
                    <br />
                    <span>contact@intergas.com.au</span>
                </div>
            </div>

            <div className="flex justify-center text-gray-500 col-span-1 lg:col-span-2 pt-15 text-center">Copyright © 2026 Intergas Pty Ltd. All rights reserved.</div>
        </div>
    )
}