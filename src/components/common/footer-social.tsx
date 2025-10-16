import Link from "next/link";
import Linkedin from "../social/linkedin";

export default function FooterSocial() {
  return (
    <ul className="flex gap-6 bl_social">
      {/* <li>
        <Link href="https://www.instagram.com/bharathatechno" target="_blank">
          <Instagram />
        </Link>
      </li>
      <li>
        <Link href="https://www.facebook.com/bharathatechno/" target="_blank">
          <Facebook />
        </Link>
      </li> */}
      {/* <li>
        <Link href="https://www.youtube.com/@BharathaTechnoIT" target="_blank">
          <Youtube />
        </Link>
      </li> */}
      <li>
        <Link
          href="https://www.linkedin.com/company/bharatha-techno-it-europe?trk=blended-typeahead"
          target="_blank"
        >
          <Linkedin />
        </Link>
      </li>
    </ul>
  );
}
