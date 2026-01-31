import { PageTitle } from "@/app/components/pagetitle"
import { Button } from "@/app/components/button"

export default function OILPage() {
    return (
        <main className="min-h-screen">
            <PageTitle title="Crude Oil" />
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <img src="/oil.jpg" />
                <div className="p-5 sm:p-10 text-lg">
                    <p>Crude oil is a naturally occurring, unrefined petroleum product composed of hydrocarbon deposits and other organic materials. It is a fossil fuel that forms when large quantities of dead organisms, mainly zooplankton and phytoplankton, are buried underneath layers of sediment.</p>
                    <br />
                    <p>Crude oil is extracted from the earth through drilling and is then refined into various products such as gasoline, diesel fuel, jet fuel, and other petrochemicals. It is one of the most important sources of energy in the world and is used to power transportation, heat homes, and generate electricity.</p>
                    <br />
                    <p>The price of crude oil fluctuates based on supply and demand, geopolitical events, and economic factors. It is traded globally on commodity exchanges and is a key indicator of the health of the global economy.</p>
                    <br />
                    <a href="/contact"><Button label="Let's talk" type="light"/></a>
                </div>
            </div>
        </main>
    )
}