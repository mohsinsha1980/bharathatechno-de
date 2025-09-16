"use client";
import React, { useState } from "react";
import { SERVICES } from "@/lib/const";
import { ServiceType } from "@/lib/types";
import Ticker from "framer-motion-ticker";
import Link from "next/link";

export default function ServicesTicker() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  return (
    <div className="bl_services_cards">
      <Ticker
        duration={10}
        isPlaying={isPlaying}
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {SERVICES.map((item, index) => (
          <ServiceCard key={index} data={item} />
        ))}
      </Ticker>
    </div>
  );
}

function ServiceCard({ data }: { data: ServiceType }) {
  return (
    <div className="bl_service_card">
      <Link href={data.link}>
        {data.icon}
        <h3>{data.title}</h3>
      </Link>
    </div>
  );
}
