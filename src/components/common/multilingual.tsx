"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function MultiLingual() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <nav aria-label="Language selector">
      <div ref={rootRef} className="relative inline-block">
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex gap-1 px-4 py-2 md:gap-3 items-center justify-center md:w-[84px] md:h-[42px] rounded-md border border-white/20 text-white text-sm md:text-[20px] font-bold shadow-sm"
        >
          <Image
            src="/images/flags/de.webp"
            alt="German flag"
            width={40}
            height={20}
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-sm"
          />
          DE
        </button>

        {open && (
          <div
            role="menu"
            aria-label="Languages"
            className="absolute right-0 top-[46px] min-w-[80px] rounded-lg border border-white/20 bg-gray-900 text-white shadow-lg overflow-hidden"
          >
            <Link
              href="https://bharathatechno.com/"
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3.5 py-2.5 text-[13px] font-bold text-white no-underline hover:bg-white/5 border-b border-white/10"
            >
              <Image
                src="/images/flags/in.webp"
                alt="German flag"
                width={40}
                height={20}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-sm"
              />
              EN
            </Link>
            <Link
              href="https://bharathatechno.de/"
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3.5 py-2.5 text-[13px] font-bold text-white no-underline hover:bg-white/5 last:border-b-0"
            >
              <Image
                src="/images/flags/de.webp"
                alt="German flag"
                width={40}
                height={20}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-sm"
              />{" "}
              DE
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
