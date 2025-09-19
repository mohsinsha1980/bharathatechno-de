"use client";

import { useEffect, useCallback } from "react";
import { InlineWidget } from "react-calendly";

type Props = {
  onClose?: () => void;
};

export default function CalendlyScheduler({ onClose }: Props) {
  useEffect(() => {
    const { body } = document;
    const prev = body.style.overflow;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = prev;
    };
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Escape" && onClose) onClose();
    },
    [onClose]
  );

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      onKeyDown={handleKeyDown}
    >
      <button
        aria-label="Close overlay"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />

      <div className="relative w-[102vw] max-w-4xl h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-md bg-black/70 text-white hover:bg-black/80"
        >
          ×
        </button>

        <InlineWidget
          url={process.env.NEXT_PUBLIC_CALENDLY_URL as string}
          styles={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
}
