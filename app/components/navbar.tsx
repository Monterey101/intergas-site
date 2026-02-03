"use client";
import { useState, useRef, useEffect } from "react";
import { NavLogo } from "./icons";
import { Submenu } from "./submenu";
import { Searchbar } from "./searchbar";
import { Link } from "./link";

export type NavLink = {
  name: string;
  link?: string;
  description?: string;
  sublinks?: Record<string, string>;
};

export const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState<string | "">("");
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isNavbarHover, setNavbarHover] = useState(false);
    const [search, setSearch] = useState("");

    const links: NavLink[] = [
        {
            name:"Home", 
            link:"/"
        }, {
            name:"Commodities", 
            description: "Intergas facilitates the physical trade of strategic energy commodities, including natural gas, LNG, LPG, crude oil, and refined products. We connect producers, buyers, and intermediaries to structure and execute transactions across regional and international markets.",
            sublinks:{
                "Liquefied Natural Gas":"/commodities/lng",
                "Liquefied Petroleum Gas":"/commodities/lpg",
                "Crude Oil":"/commodities/oil"
            }
        }, {
            name:"Company", 
            description: "Intergas operates at the intersection of global energy supply and demand providing discreet, relationship-driven market access and execution support for complex physical commodity transactions.",
            sublinks:{
                "About":"/about",
                "Careers":"/careers",
            }
        }, {
            name:"Newsroom", 
            link:"/newsroom/newsdash"
        } ,{
            name:"Contact", 
            link:"/contact"
        }
    ];

    const searchResults = links.flatMap((l) =>
  l.link
    ? [{ name: l.name, link: l.link }]
    : Object.entries(l.sublinks ?? {}).map(([name, link]) => ({ name, link }))
).filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
);

    const submenuRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const mobileSubmenuRef = useRef<HTMLDivElement | null>(null);
    const mobileContentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const submenu = submenuRef.current;
        const content = contentRef.current;
        if (content) content.animate( [ { opacity: 0 }, { opacity: 1 } ], { duration: 500, fill: "forwards" } )
        if (!submenu) return; // nothing if no submenu
        if (!activeMenu) { submenu.style.height = "0px"; return; } // 0 height on close
        if (content) { submenu.style.height = content.scrollHeight + "px"; } // set new height
    }, [activeMenu])

    useEffect(() => {
  const mobileSubmenu = mobileSubmenuRef.current;
  const mobileContent = mobileContentRef.current;
  if (!mobileSubmenu) return;
  if (!mobileContent) return;
  if (isMobileMenuOpen && mobileContent) mobileContent.animate( [ { opacity: 0 }, { opacity: 1 } ], { duration: 500, fill: "forwards" } )
  if (!isMobileMenuOpen && mobileContent) { mobileSubmenu.style.height = "0px"; mobileContent.animate( [ { opacity: 1 }, { opacity: 0 } ], { duration: 500, fill: "forwards" } ); return;}
  if (mobileContent) { mobileSubmenu.style.height = "100vh"; }
}, [isMobileMenuOpen])

useEffect(() => {
        const submenu = submenuRef.current;
        const content = contentRef.current;
        if (!submenu) return; // nothing if no submenu
        if (!activeMenu) { submenu.style.height = "0px"; return; } // 0 height on close
        if (content) { submenu.style.height = content.scrollHeight + "px"; } // set new height
    }, [search])


    return (
        <>
        <div
        className={`hidden lg:block fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-500 pointer-events-none z-40 ${
          activeMenu ? "opacity-100" : "opacity-0"
        }`}
      ></div>
        <nav className="fixed bg-black text-white z-50 w-full"
        onMouseEnter={() => setNavbarHover(true)}
        onMouseLeave={() => {
          setNavbarHover(false);
          setActiveMenu("");
        }}>
            <div className="flex justify-between items-center py-7 px-5 lg:px-10">
                <a href="/" className="flex gap-2">
                    <NavLogo />
                    <span className="font-bold text-3xl">INTERGAS</span>
                </a>
                

                <div className="hidden lg:flex gap-15">
                    {links.map((link) => (
                        <a 
                            href={link.link ? link.link : "#"} 
                            key={link.name} 
                            className={`text-lg transition-colors duration-300 ease-in-out ${activeMenu === link.name ? "text-gray-500" : "" }`} 
                            onMouseEnter={(e) => { link.sublinks ? setActiveMenu(link.name) : setActiveMenu(""); if (!link.sublinks) e.currentTarget.style.color = "#6b7280" }}
                            onMouseLeave={(e) => {if (!link.sublinks) e.currentTarget.style.color = "#ffffff" }}
                            >
                                {link.name}
                        </a>
                    ))}
                </div>
                
                <button className={`hidden lg:block cursor-pointer text-lg transition-colors duration-300 ease-in-out justify-end ${activeMenu === "Search" ? "text-gray-500" : "" }`} onMouseEnter={ () => setActiveMenu("Search") }>Search</button>

                <button
  className="lg:hidden w-8 h-8 relative flex items-center justify-center"
  onClick={() => {setMobileMenuOpen(!isMobileMenuOpen); setSearch("")}}
>
  {/* 2-line hamburger */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`w-8 h-8 absolute transition-opacity duration-500 ${
      isMobileMenuOpen ? "opacity-0" : "opacity-100"
    }`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
  </svg>

  {/* X */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`w-8 h-8 absolute transition-opacity duration-500 ${
      isMobileMenuOpen ? "opacity-100" : "opacity-0"
    }`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
</button>

            </div>

            {/* Submenu appears under the navbar */}
            <div ref={submenuRef} style={{ height: "auto" }} className="hidden lg:block overflow-hidden transition-[height] duration-500">
                {/* Content fades in after expansion */}
                <div ref={contentRef}>
                    {activeMenu && activeMenu !== "Search" && (
                        <Submenu activeMenu={activeMenu} links={links} />
                        )}
                    {activeMenu && activeMenu === "Search" && (
                      <div className="p-10">
                        <Searchbar onChange={setSearch} />

                        <div className="flex flex-col gap-5 pt-5 text-xl">
                          {searchResults.length > 0 ? (
                            searchResults.map((item) => (
                              <Link
                                key={item.link}
                                title={item.name}
                                link={item.link}
                              />
                            ))
                          ) : (
                            <p className="text-gray-500 italic">No results</p>
                          )}
                        </div>
                      </div>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
{/* Mobile Menu */}
<div
  ref={mobileSubmenuRef}
  className={`lg:hidden overflow-hidden transition-[height] duration-500 bg-black`}
  style={{ height: "auto" }}
>
  <div
    ref={mobileContentRef}
    className="flex flex-col items-start justify-start h-full gap-5 p-5"
  >
    <Searchbar onChange={setSearch} />
    <br />

{search ? (
  <div className="flex flex-col gap-5 text-2xl">
    {searchResults.length > 0 ? (
      searchResults.map((item) => (
        <Link
          key={item.link}
          title={item.name}
          link={item.link}
        />
      ))
    ) : (
      <p className="text-gray-500 italic">No results</p>
    )}
  </div>
) : (
  <>
    {links.map((item) => (
      <div
        key={item.name}
        onClick={() => setMobileMenuOpen(false)}
        className="text-2xl"
      >
        <div className={`${item.sublinks ? "hidden" : ""}`}>
          <Link title={item.name} link={item.link ?? ""} />
        </div>

        <div className={`text-gray-500 ${!item.sublinks ? "hidden" : ""}`}>
          {item.name}
        </div>

        {item.sublinks && (
          <div className="pl-5">
            {Object.entries(item.sublinks).map(([title, href]) => (
              <Link key={title} title={title} link={href} />
            ))}
          </div>
        )}
      </div>
    ))}
  </>
)}

    {/* {links.map((item) => (
      <div
        key={item.name}
        onClick={() => setMobileMenuOpen(false)}
        className="text-2xl"
      >
        <div className={`${item.sublinks ? "hidden" : ""}`}>
            <Link title={item.name} link={item.link ? item.link : ""} />
        </div>
        <div className={`text-gray-500 ${!item.sublinks ? "hidden" : ""}`}>
            {item.name}
        </div>
        {item && (
          <div className="pl-5">
            {item.sublinks && Object.entries(item.sublinks).map(([title, href]) => (
              <div key={title} className="">
                <Link title={title} link={href} />
              </div>
            ))}
          </div>
        )}
      </div>
    ))} */}
  </div>
</div>



        </nav>
        </>
    )
}