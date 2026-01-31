"use client";

import { useRef, useEffect } from "react";

export const Searchbar = ({
  onChange,
}: {
  onChange: (value: string) => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => {
      // inputRef.current?.focus();
    }, 300);
  }, []);

  return (
    <div className="flex w-full gap-5 items-center">
      <input
        type="text"
        ref={inputRef}
        placeholder="SEARCH INTERGAS"
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full bg-transparent
          border-b border-gray-500
          py-3
          text-2xl text-white
          placeholder-gray-600
          focus:outline-none
        "
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8 text-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  );
};
