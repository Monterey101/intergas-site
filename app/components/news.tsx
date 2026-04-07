import { Link } from "./link"
import { NavLogo } from "./icons"

export const News = () => {

    const articles = [
        { date: "2/4/2026 - NEW", title: "Intergas' review of the 2026 Australian Domestic Gas Outlook (ADGO) Conference", link: "/newsroom/adgo-2026" },
        { date: "24/3/2026", title: "Intergas gets backing from major player Pearl Energy", link: "/newsroom/pearl-support" },
        // { date: "2/2/2026", title: "Intergas set to debut in 2026 Australian Domestic Gas Outlook conference", link: "/newsroom/debut-adgo" },
        { date: "5/12/2025", title: "Intergas' debut supply contract offically in negotiation phase", link: "/newsroom/debut-supply" },
        // { date: "27/09/2025", title: "Intergas given green light by PPG to include LPG & Crude Oil in brokerage operations", link: "/newsroom/ppg-lpg-oil" },
        // { date: "20/08/2025", title: "Intergas completes technical assessment of PPG's LNG product for Australian market", link: "/newsroom/ppg-lng-technical" },
        // { date: "21/07/2025", title: "Intergas enters relations for energy brokerage with supplier PPG South East Energy LLC", link: "/newsroom/ppg-enter-relations" },
    ];

    return (
        <div className="p-5 lg:p-10 pt-20 lg:pt-20 lg:pb-5">
            <span className="text-6xl">News and Updates</span>
            <br />
            <br />
            <div className="flex flex-col gap-5">
                {articles.map((article) => (
                    <div key={article.title}>
                        <div className="w-full h-[1px] bg-black" /><br/>
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="text-gray-500">{article.date}</span>
                                <br />
                                <span className="text-2xl">{article.title}</span>
                                <br />
                                <br />
                                <Link title="Read More" link={article.link} />
                            </div>
                            <div className="w-60 h-40 bg-black text-white flex justify-center items-center hidden xl:flex">
                                <NavLogo size={70}/>
                            </div>
                        </ div>
                    </ div>
                ))}
                <div className="w-full h-[1px] bg-black" /><br/>
            </div>
        </div>
    )
}