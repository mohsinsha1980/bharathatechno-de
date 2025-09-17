import Image from "next/image";
import Link from "next/link";

export default function EverwinptImage() {
  return (
    <>
      <Link href="/work/everwinpt">
        <Image
          src="/images/home/everwinpt-case-study.webp"
          alt="Everwinpt"
          width={640}
          height={460}
        />{" "}
      </Link>
      <h3>ENTWICKELT MIT</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
      </ul>
    </>
  );
}
