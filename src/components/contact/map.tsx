import { MapPin } from "lucide-react";

export default function EmbeddedMap({
  embedMapUrl,
  city,
  position,
}: {
  embedMapUrl: string;
  city: string;
  position: string;
}) {
  if (!embedMapUrl) {
    return (
      <div
        className={`bg-gray-300 rounded-lg overflow-hidden ${
          position === "left"
            ? "order-first"
            : position === "right"
            ? "order-last"
            : ""
        }`}
      >
        <div className="w-full h-44 lg:h-64 bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center relative">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-gray-600 mx-auto mb-2" />
            <p className="text-gray-600 font-medium">{city}</p>
            <p className="text-gray-500 text-sm mt-1">Map will appear here</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-lg overflow-hidden h-60 lg:h-auto shadow-lg ${
        position === "left"
          ? "order-first"
          : position === "right"
          ? "order-last"
          : ""
      }`}
    >
      <iframe
        src={embedMapUrl}
        width="450"
        height="500"
        style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      ></iframe>
    </div>
  );
}
