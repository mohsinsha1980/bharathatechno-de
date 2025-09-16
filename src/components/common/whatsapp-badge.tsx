import Link from "next/link";
import WhatsApp from "../social/whatsapp";


export default function WhatsappBadge() {
  return (
    <div className="whatsapp_badge">
      <Link href="https://wa.me/919420655627" target="_blank">
        <WhatsApp/>
      </Link>
    </div>
  );
}
