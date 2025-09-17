"use client";
import Link from "next/link";
import useScreenSize from "@/hooks/useScreenSize";
import { SendIcon } from "lucide-react";

export default function LetsConnectBtn() {
  const screen = useScreenSize();

  return (
    <div className="header_btn">
      <Link
        href="/contact"
        className={
          screen.width > 1024 ? "header-btn large" : "header-btn small"
        }
      >
        {screen.width > 1024 ? `Kontakt aufnehmen` : <SendIcon />}
      </Link>
    </div>
  );
}
