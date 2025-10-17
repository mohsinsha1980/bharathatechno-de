"use client";
import Image from "next/image";
import Link from "next/link";
import React, {  useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function MultiLingual() {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams?.toString();

  const deToEnMapping: Record<string, string> = {
    "/staff-augmentation-services": "/",
  };

  const englishPath = deToEnMapping[pathname || ""] ?? pathname ?? "/";
  const englishUrl = `https://bharathatechno.com${englishPath}${
    query ? `?${query}` : ""
  }`;

  return (
    <nav aria-label="Language selector">
      <div ref={rootRef} className="relative inline-block">
        <Link
          href={englishUrl}
          rel="noopener noreferrer"
          role="menuitem"
          className="flex cursor-pointer gap-1 px-4 py-2 md:gap-3 items-center justify-center md:w-[84px] md:h-[42px] rounded-md border border-white/20 text-white text-sm md:text-[20px] font-bold shadow-sm"
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
      </div>
    </nav>
  );
}
