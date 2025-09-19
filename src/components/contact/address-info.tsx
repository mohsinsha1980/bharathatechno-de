import { OfficeLocationType } from "@/lib/types";
import { Mail, MapPin, Phone } from "lucide-react";

export default function OfficeInfo({ office }: { office: OfficeLocationType }) {
  return (
    <div className="space-y-4 text-sm lg:text-lg">
      <div className="flex items-center space-x-3">
        <h3 className="text-2xl font-bold text-white">{office.country}</h3>
      </div>

      <div className="space-y-3">
        <div className="flex items-start space-x-3 ">
          <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
          <p className="text-gray-300 leading-relaxed text-sm md:text-lg">{office.address}</p>
        </div>

        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
          <a
            href={`mailto:${office.email}`}
            className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
          >
            {office.email}
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
          <a
            href={`tel:${office.phone}`}
            className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
          >
            {office.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
