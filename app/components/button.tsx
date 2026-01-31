"use client";

import { useState } from "react"

type ButtonProps = {
    label: string,
    type: string,
}

export const Button = ({label, type}: ButtonProps) => {

    const [isActive, setActive] = useState(false);

    return (
        <button 
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className={`
                flex items-center gap-3 cursor-pointer border font-normal px-5 py-2 transition duration-300
                ${type === "dark" ? `border-white ${isActive ? "bg-white text-black" : "text-white" }` : `border-black ${isActive ? "bg-black text-white" : "text-black" }`}
            `}>
            {label}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
        </button>
    )
}