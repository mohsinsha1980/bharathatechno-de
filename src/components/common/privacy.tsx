"use client";
import { useEffect, useState } from "react";

export default function Privacy() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("privacy_notice");
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("privacy_notice", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="relative text-white">
      <div className="fixed bottom-4 right-2 bg-black/80 p-4 rounded-lg max-w-2xl mx-auto z-50 flex items-center flex-col justify-between w-[280px] lg:w-[500px]">
        <p className="text-[12px] md:text-sm">
          Bei BharathTechno IT Private Limited respektieren wir Ihre
          Privatsphäre. Wir verwenden keine Cookies, um personenbezogene Daten
          oder Ihr Surfverhalten zu verfolgen, zu speichern oder zu erfassen.
        </p>
        <button
          onClick={handleDismiss}
          className="ml-4 bg-blue-600 hover:bg-blue-700 text-[12px] lg:text-sm px-4 py-2 rounded-md transition ml-auto"
        >
          Habe es
        </button>
      </div>
    </div>
  );
}
