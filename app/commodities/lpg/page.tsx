import { PageTitle } from "@/app/components/pagetitle"
import { Button } from "@/app/components/button"

export default function LPGPage() {
    return (
        <main className="min-h-screen">
            <PageTitle title="Liquefied Petroleum Gas (LPG)" />
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <img src="/lpg.jpg" />
                <div className="p-5 lg:p-10 text-lg">
                    <p>Liquefied Petroleum Gas (LPG) is a pressurised fuel composed mainly of propane and butane, widely used for residential, commercial and industrial energy applications around the world.</p>
                    <br />
                    <p>Stored as a liquid and vaporised upon release, LPG provides a highly flexible and portable energy source suitable for cooking, heating, power generation and transport.</p>
                    <br />
                    <p>Its clean-burning properties and ease of storage make LPG particularly valuable in regions without access to pipeline gas infrastructure.</p>
                </div>
                <div className="p-5 lg:p-10 text-lg">
                    <p>LPG is produced as a byproduct of natural gas processing and crude oil refining, where hydrocarbon fractions are separated, compressed and stored under pressure.</p>
                    <br />
                    <p>It is transported globally via specialised pressurised carriers and distributed through bulk storage terminals, filling plants and cylinder networks.</p>
                    <br />
                    <p>This distribution model allows LPG to serve both large-scale industrial users and remote communities across diverse geographic markets.</p>
                </div>
                <img src="/lpg-tanker.jpg" />
                <img src="/refinery-2.jpg" />
                <div className="p-5 lg:p-10 text-lg">
                    <p>Intergas facilitates the commercial trade of LPG by connecting refiners and producers with industrial buyers, distributors and national energy operators.</p>
                    <br />
                    <p>Through strategic brokerage, pricing negotiation and contract structuring, Intergas enables the efficient movement of LPG across international supply chains.</p>
                    <br />
                    <p>By managing complex cross-border transactions, Intergas supports reliable and scalable LPG supply for critical energy markets.</p>
                    <br />
                    <Button link="/contact" label="Let's talk" type="light"/>
                </div>
            </div>
        </main>
    )
}