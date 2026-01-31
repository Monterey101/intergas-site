"use client";

import { useState } from "react";
import { PageTitle } from "@/app/components/pagetitle";
import { Link } from "@/app/components/link";
import { NavLogo } from "@/app/components/icons";

export default function NewsdashPage() {
    const [search, setSearch] = useState("");

    const articles = [
        { date: "5/12/2025 - NEW", title: "Intergas' debut supply contract offically in negotiation phase", link: "/newsroom/debut-supply" },
        { date: "27/09/2025", title: "Intergas given green light by PPG to include LPG & Crude Oil in brokerage operations", link: "/newsroom/ppg-lpg-oil" },
        { date: "20/08/2025", title: "Intergas completes technical assessment of PPG's LNG product for Australian market", link: "/newsroom/ppg-lng-technical" },
        { date: "21/07/2025", title: "Intergas enters relations for energy brokerage with supplier PPG South East Energy LLC", link: "/newsroom/ppg-enter-relations" },
    ];

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className="min-h-screen">
            <PageTitle title="Newsroom" />

            <div className="p-5 sm:p-10 text-lg">
                {/* SIMPLE FILTER */}
                <div className="grid grid-cols-1 xl:grid-cols-2 mb-10">
                    <div className="flex gap-5 items-center">
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="
                            border border-black
                            bg-transparent
                            p-3 w-full
                            text-xl
                            focus:outline-none
                            placeholder-gray-500
                        "
                    />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-8 text-black"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </div>
                    
                </div>

                <div className="flex flex-col gap-5">
                    {filteredArticles.map((article) => (
                        <div key={article.title}>
                            <div className="w-full h-[1px] bg-black" />
                            <br />

                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="text-gray-500">{article.date}</span>
                                    <br />
                                    <span className="text-2xl">{article.title}</span>
                                    <br /><br />
                                    <Link title="Read More" link={article.link} />
                                </div>

                                <div className="w-60 h-40 bg-black text-white flex justify-center items-center hidden xl:flex">
                                    <NavLogo size={70} />
                                </div>
                            </div>
                        </div>
                    ))}

                    {filteredArticles.length === 0 && (
                        <p className="text-gray-500">No matching articles.</p>
                    )}
                </div>
            </div>
        </main>
    );
}
