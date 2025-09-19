import Image from "next/image";
import Link from "next/link";

export default function NikitasImage() {
  return (
    <>
      <Link href="/work/nikitas-curry-corner">
        <Image
          src="/images/home/nikitas-curry-corner-case-study.webp"
          alt="Nikita's Curry Corner"
          width={640}
          height={460}
        />
      </Link>

      <h3>ENTWICKELT MIT</h3>
      <ul>
        <li>NextJs</li>
        <li>NodeJs</li>
        <li>ExpressJs</li>
        <li>MongoDB</li>
      </ul>
    </>
  );
}
