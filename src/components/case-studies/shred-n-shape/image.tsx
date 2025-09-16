import Image from "next/image";
import Link from "next/link";

export default function ShredNShapeImage() {
  return (
    <>
      <Link href="/work/shred-n-shape">
        <Image
          src="/images/home/shred-n-shape-case-study.webp"
          alt="Shred-n-Shape"
          width={640}
          height={460}
        />
      </Link>

      <h3>Technologies Used</h3>
      <ul>
        <li>NextJs</li>
        <li>NodeJs</li>
        <li>ExpressJs</li>
        <li>MongoDB</li>
      </ul>
    </>
  );
}
