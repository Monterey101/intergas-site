import { PageTitle } from "@/app/components/pagetitle"
import { Button } from "@/app/components/button"

export default function LNGPage() {
    return (
        <main className="min-h-screen">
            <PageTitle title="Liquefied Natural Gas (LNG)" />
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <video className="h-full w-full object-cover pointer-events-none" autoPlay muted playsInline loop>
                    <source src="/gas-flame.mp4" type="video/mp4" />
                </video>
                <div className="p-5 sm:p-10 text-lg">
                    <p>Liquefied Natural Gas (LNG) is natural gas that has been cooled to an ultra-low temperature and converted into liquid form to enable efficient large-scale transport and storage across global markets.</p>
                    <br />
                    <p>Composed primarily of methane, LNG is odourless, colourless, non-toxic and non-corrosive, offering a highly energy-dense and clean-burning fuel source that plays a central role in modern energy systems.</p>
                    <br />
                    <p>By significantly reducing greenhouse gas emissions and air pollutants compared to coal and oil, LNG is widely regarded as a critical transition fuel supporting the shift toward more sustainable energy infrastructure.</p>
                </div>
                <div className="p-5 sm:p-10 text-lg">
                    <p>Natural gas is extracted from underground reservoirs and transported through extensive pipeline networks to liquefaction facilities, where it is purified, dehydrated and cooled to approximately -162°C.</p>
                    <br />
                    <p>Once liquefied, its volume is reduced by around 600 times, allowing LNG to be transported economically across vast distances by specialised cryogenic carriers.</p>
                    <br />
                    <p>This infrastructure enables gas-producing regions to supply energy-deficient markets, creating a globally interconnected LNG trade system that underpins energy security for entire economies.</p>
                </div>
                <img src="/lng.jpg" />
                <img src="/lng-diagram.jpg" />
                <div className="p-5 sm:p-10 text-lg">
                    <p>Intergas operates at the commercial interface of the LNG value chain, facilitating international supply agreements between producers, infrastructure operators and large-scale energy buyers.</p>
                    <br />
                    <p>Through strategic introductions, contract structuring and market intelligence, Intergas enables the execution of complex LNG transactions across international jurisdictions.</p>
                    <br />
                    <p>By aligning counterparties and negotiating long-term supply frameworks, Intergas supports secure and efficient LNG flows within critical global energy supply chains.</p>
                    <br />
                    <Button link="/contact" label="Let's talk" type="light"/>
                </div>
            </div>
        </main>
    )
}