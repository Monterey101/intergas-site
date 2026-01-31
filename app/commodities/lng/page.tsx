import { PageTitle } from "@/app/components/pagetitle"
import { Button } from "@/app/components/button"

export default function LNGPage() {
    return (
        <main className="min-h-screen">
            <PageTitle title="Liquefied Natural Gas (LNG)" />
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <img src="/lng.jpg" />
                <div className="p-5 sm:p-10 text-lg">
                    <p>Liquefied Natural Gas (LNG) is natural gas that has been converted to liquid form for ease of transport. It is odorless, colorless, non-toxic and non-corrosive.</p>
                    <br />
                    <p>Natural gas is primarily methane (CH4), but it also contains other hydrocarbons and trace amounts of other compounds. When natural gas is cooled to approximately -162°C (-260°F), it becomes a liquid and reduces in volume by about 600 times, making it much easier to transport and store.</p>
                    <br />
                    <p>LNG is used as a clean energy source for electricity generation, heating, and transportation. It is considered a cleaner alternative to coal and oil because it produces fewer greenhouse gases and pollutants when burned.</p>
                    <br />
                    <a href="/contact"><Button label="Let's talk" type="light"/></a>
                </div>
            </div>
        </main>
    )
}