import { PageTitle } from "@/app/components/pagetitle"
import { Button } from "@/app/components/button"

export default function LPGPage() {
    return (
        <main className="min-h-screen">
            <PageTitle title="Liquefied Petroleum Gas (LPG)" />
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <img src="/lpg.jpg" />
                <div className="p-5 lg:p-10 text-lg">
                    <p>Liquefied Petroleum Gas (LPG) is a flammable mixture of hydrocarbon gases used as a fuel in homes and businesses. It is a byproduct of crude oil refining and natural gas processing.</p>
                    <br />
                    <p>LPG is typically a mixture of propane and butane, and sometimes ethane and pentane. It is stored as a liquid under pressure and vaporizes into a gas when released. This makes it easy to transport and use in various applications, including cooking, heating, and powering vehicles.</p>
                    <br />
                    <p>LPG is considered a clean-burning fuel, producing fewer emissions than coal or oil. It is also versatile and can be used in remote areas where natural gas pipelines are not available.</p>
                    <br />
                    <a href="/contact"><Button label="Let's talk" type="light"/></a>
                </div>
            </div>
        </main>
    )
}