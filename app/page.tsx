"use client";

import { Hero } from "./components/hero"
import { Link } from "./components/link"
import { News } from "./components/news"
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const links = [
    {title : "Liquefied Natural Gas", link : "/commodities/lng", image : "/lng.jpg", color : "#ffffff"},
    {title : "Liquefied Petroleum Gas", link : "/commodities/lpg", image : "/lpg.jpg", color : "#ffffff"},
    {title : "Crude Oil", link : "/commodities/oil", image : "/oil.jpg", color : "#000000"},
  ]
  return (
    <div className="">
      <main className="">
          <Hero />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-5 bg-black text-xl text-white">
            {links.map((link) => (
              <div 
                onClick={() => router.push(link.link)}
                key={link.title} 
                className={`aspect-square bg-cover bg-center p-5 text-white`}
                style={{ backgroundImage: `url(${link.image})`, color: link.color, cursor: "pointer" }}
              >
                <Link title={link.title} link={link.link}/>
              </div>
          ))}
          </div>
          <News />
      </main>
    </div>
  );
}
