"use client";

import { useState } from "react";

type LinkProps = {
  title: string;
  link: string;
  openNew?: boolean;
};

export const Link = ({ title, link, openNew }: LinkProps) => {
    const [active, setActive] = useState(false);
    return (
        <div className="flex gap-3 items-center">
            <a
            href={link}
            target={openNew ? "_blank" : undefined}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className={`
                relative cursor-pointer 
                after:absolute after:left-0 
                after:bottom-0 after:h-[1px] 
                after:w-full after:bg-current 
                after:origin-left after:duration-300
                ${active ? "after:scale-x-100" : "after:scale-x-0"}`}>
                {title}
            </a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
        </div>
    )
}