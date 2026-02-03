import { PageTitle } from "@/app/components/pagetitle"
import { Button } from "@/app/components/button"

export default function OILPage() {
    return (
        <main className="min-h-screen">
            <PageTitle title="Crude Oil" />
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <img src="/oil.jpg" />
                <div className="p-5 sm:p-10 text-lg">
                    <p>Crude oil is a naturally occurring, unrefined fossil fuel composed of hydrocarbons formed over millions of years beneath the Earth’s surface.</p>
                    <br />
                    <p>It serves as the foundational feedstock of the global energy system, enabling the production of fuels, petrochemicals and industrial materials essential to modern economies.</p>
                    <br />
                    <p>Crude oil remains one of the most strategically important commodities in the world, shaping global trade flows and geopolitical relationships.</p>
                </div>
                <div className="p-5 sm:p-10 text-lg">
                    <p>Crude oil is extracted through drilling operations and transported via pipelines, storage terminals and large ocean-going tankers across major global trade routes.</p>
                    <br />
                    <p>These logistics networks represent some of the most complex and capital-intensive infrastructure systems ever constructed.</p>
                    <br />
                    <p>They connect producing regions with refining and consumption centres, enabling continuous energy supply at a global scale.</p>
                </div>
                <img src="/oil-tanker.jpg" />
                <img src="/refinery.jpg" />
                <div className="p-5 sm:p-10 text-lg">
                    <p>Intergas operates within the global crude oil trading ecosystem, facilitating commercial relationships between producers, refiners and institutional buyers.</p>
                    <br />
                    <p>Through strategic introductions and transaction structuring, Intergas enables the execution of high-value crude supply agreements across international markets.</p>
                    <br />
                    <p>By aligning counterparties and managing contractual frameworks, Intergas supports efficient and secure crude oil trade flows worldwide.</p>
                    <br />
                    <Button link="/contact" label="Let's talk" type="light"/>
                </div>
            </div>
        </main>
    )
}