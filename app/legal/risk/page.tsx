import { PageTitle } from "../../components/pagetitle"
import { Button } from "../../components/button"

export default function RiskPage() {
    return (
        <main className="">
            <PageTitle title="Risk Disclosure" />
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* <img src="/sydney.jpg" /> */}
                <div className="p-5 sm:p-10 text-lg">
                    <p className="text-gray-500">Last updated: 17 November 2025</p>
                    <br />
                    <div className="h-[1px] w-full bg-black" />
                    <br />
                    <p className="text-xl font-semibold">1. Introduction</p>
                    <br />
                    <p>Intergas Pty Ltd (“Intergas”, “we”, “our”, or “us”) provides this Risk Disclosure Statement to inform all clients, prospective clients, partners, and website users (“you” or “your”) of the inherent risks associated with engaging in energy trading, market analysis, and related commercial activities facilitated or referenced by Intergas. This statement is intended to provide a comprehensive understanding of potential risks, uncertainties, and operational considerations associated with participation in energy markets, including but not limited to Liquefied Natural Gas (LNG), Liquefied Petroleum Gas (LPG), crude oil, and other hydrocarbon commodities. By interacting with our website, submitting inquiries, or engaging in business discussions, you acknowledge that you have read, understood, and accepted the terms of this disclosure.</p>
                    <br />
                    <p className="text-xl font-semibold">2. Market Risk</p>
                    <br />
                    <p>Energy markets are inherently volatile and are subject to fluctuations caused by geopolitical events, regulatory changes, macroeconomic conditions, supply-demand imbalances, currency fluctuations, transportation constraints, and unforeseen operational disruptions. Prices of LNG, LPG, crude oil, and other commodities may change rapidly, materially impacting the value of contracts, shipments, or transactions. Intergas does not guarantee any particular outcome with respect to market prices, availability, or profitability, and all participants must recognize that prior performance or historical trends are not indicative of future results.</p>
                    <br />
                    <p className="text-xl font-semibold">3. Operational and Logistical Risk</p>
                    <br />
                    <p>The transportation, storage, and handling of energy commodities involve complex logistics and operational processes. Interruptions, delays, equipment failure, natural disasters, or port and terminal closures may affect delivery timelines and operational continuity. While Intergas may assist in coordinating logistics or connecting buyers and sellers, we do not assume liability for operational failures, shipment disruptions, or losses arising from third-party transport providers, storage facilities, or infrastructure limitations.</p>
                    <br />
                    <p className="text-xl font-semibold">4. Regulatory and Compliance Risk</p>
                    <br />
                    <p>The energy sector is heavily regulated, with laws and standards varying across jurisdictions. Changes in taxation, import/export regulations, environmental obligations, trade sanctions, licensing, or compliance requirements can materially affect transactions and market operations. Intergas operates in accordance with applicable domestic and international regulations, including Australian legislation and industry standards, but does not guarantee that future regulatory changes will not impact market conditions or contractual obligations.</p>
                    <br />
                    <p className="text-xl font-semibold">5. Financial Risk</p>
                    <br />
                    <p>All transactions in energy commodities carry financial risk, including potential exposure to credit risk, counterparty default, and liquidity constraints. Intergas does not provide financial guarantees, investment advice, or assurance of profit. Participants must conduct their own due diligence, seek independent financial and legal advice where necessary, and assess the suitability of engaging in transactions based on their own risk tolerance, financial capacity, and operational objectives.</p>
                    <br />
                    <p className="text-xl font-semibold">6. Environmental and Force Majeure Risk</p>
                    <br />
                    <p>Natural events, including but not limited to storms, floods, earthquakes, hurricanes, or other force majeure occurrences, may disrupt production, transportation, or supply of energy commodities. Environmental compliance obligations may impose additional operational constraints or liabilities. Intergas endeavors to facilitate informed decision-making and communication between market participants; however, we cannot assume responsibility for losses arising from acts of God, extreme weather, or other uncontrollable circumstances.</p>
                    <br />
                    <p className="text-xl font-semibold">7. Legal Risk</p>
                    <br />
                    <p>Participants in energy markets may encounter legal and contractual risks, including disputes arising from interpretation of contracts, jurisdictional conflicts, or third-party claims. While Intergas provides general guidance and intermediary services, all parties are expected to retain qualified legal counsel to evaluate contractual terms and obligations. Intergas does not accept liability for legal outcomes, contractual disagreements, or claims arising from participation in energy trading or related commercial arrangements.</p>
                    <br />
                    <p className="text-xl font-semibold">8. Technology and Cybersecurity Risk</p>
                    <br />
                    <p>Digital communication, data transmission, and online trading platforms are subject to cybersecurity threats, system failures, or technical errors. While Intergas implements industry-standard security measures and maintains secure systems, we cannot guarantee absolute protection against unauthorized access, malware, or other cyber risks. Participants are responsible for safeguarding their own devices, accounts, and confidential information and should follow best practices for secure digital communication.</p>
                    <br />
                    <p className="text-xl font-semibold">9. Acknowledgment and Responsibility</p>
                    <br />
                    <p>By engaging with Intergas, submitting inquiries, or participating in discussions regarding energy markets, you acknowledge that you fully understand and accept the risks outlined herein. You agree that Intergas shall not be liable for any direct, indirect, incidental, consequential, or other losses arising from your participation, reliance on information, or engagement in any market activity. It is the responsibility of each participant to make independent assessments, implement risk management measures, and seek professional advice as required.</p>
                    <br />
                    <p className="text-xl font-semibold">10. Updates to Risk Disclosure</p>
                    <br />
                    <p>Intergas reserves the right to update, amend, or expand this Risk Disclosure Statement at any time to reflect market developments, operational considerations, legal requirements, or industry standards. The most current version will be made available on our website, and continued engagement following updates constitutes acceptance of the revised statement.</p>
                    <br />
                    <p className="text-xl font-semibold">11. Contact Information</p>
                    <br />
                    <p>For further clarification, questions, or concerns regarding this Risk Disclosure Statement, you may contact Intergas Pty Ltd at contact@intergas.com.au. Intergas will respond promptly to inquiries and provide additional guidance where appropriate.</p>
                    <br />
                    <a href="/contact"><Button label="Contact" type="light"/></a>
                </div>
                <img className="hidden lg:block" src="/dark-gray-pattern.jpg" />
            </div>
        </main>
    )
}