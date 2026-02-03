import { PageTitle } from "../components/pagetitle"
import { Button } from "../components/button"

export default function AboutPage() {
    return (
        <main className="">
            <PageTitle title="About Intergas" />
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <img src="/sydney.jpg" />
                <div className="p-5 sm:p-10 text-lg">
                    <p>Intergas Pty Ltd, a Sydney-based proprietary Australian company, is a global commercial energy brokerage firm and strategic trade facilitator, connecting Australia’s energy markets to leading international partners. Specialising in critical energy commodities, including gas and petroleum products, Intergas orchestrates high-level, exclusive introductions and executes complex transactions with absolute precision and confidence. Our established, long-standing relationships with influential global energy operators enable us to secure pivotal energy supply agreements for the world’s top-tier supply chains.</p>
                </div>
                <div className="p-5 sm:p-10 text-lg">
                    <p>Operating at the forefront of international energy commerce, Intergas combines strategic foresight with unrivalled access to global markets, delivering decisive advantage and operational excellence with complete discretion. While our largest endeavours are focused on Australia’s East Coast, our reach (and that of our partners) extends across continents, providing elite operators with unmatched opportunities and market leverage. For the world’s most discerning energy players, Intergas is the definitive partner for executing transformative deals, advancing strategy, and achieving unparalleled impact in the sector.</p>
                    <br />
                    <a href="/contact"><Button label="Let's talk" type="light"/></a>
                </div>
                <img src="/earth.jpg" />
            </div>
        </main>
    )
}