import Link from "next/link";
import Instagram from "../social/instagram";
import Facebook from "../social/facebook";
import Youtube from "../social/youtube";
import Linkedin from "../social/linkedin";

export default function FooterSocial() {
  return (
    <ul className="flex gap-6 bl_social">
      <li>
        <Link href="https://www.instagram.com/bharathatechno" target="_blank">
          <Instagram />
        </Link>
      </li>
      <li>
        <Link href="https://www.facebook.com/bharathatechno/" target="_blank">
          <Facebook />
        </Link>
      </li>
      <li>
        <Link href="https://www.youtube.com/@BharathaTechnoIT" target="_blank">
          <Youtube />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/company/bharathatechno-it-private-limited"
          target="_blank"
        >
          <Linkedin />
        </Link>
      </li>
    </ul>
  );
}
