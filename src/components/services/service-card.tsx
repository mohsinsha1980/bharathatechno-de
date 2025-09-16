"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ServiceType } from "@/lib/types";

export default function ServiceCard({ data }: { data: ServiceType }) {
  const pathname = usePathname();
  return (
    <div className={`p-[10px] lg:p-[30px] bl_services_list_item h-full`} key={data.id}>
      <Link href={data.link} className={pathname === data.link ? "active" : ""}>
        {data.icon}
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </Link>
    </div>
  );
}
