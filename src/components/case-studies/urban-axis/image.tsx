import Image from "next/image";
import Link from "next/link";

export default function UrbanAxisImage() {
  return (
    <>
      <Link href="/work/urban-axis">
        <Image
          src="/images/home/urban-axis-case-study.webp"
          alt="Urban Axis"
          width={640}
          height={460}
        />
      </Link>
      <h3>Technologies Used</h3>
      <ul>
        <li>NextJs</li>
      </ul>
    </>
  );
}
