import Link from "next/link";
import Image from "next/image";

export default function IntignusBiotechImage() {
  return (
    <>
      <Link href="/work/intignus-biotech">
        <Image
          src="/images/home/intignus-biotech-case-study.webp"
          alt="Intignus Biotech"
          width={640}
          height={460}
        />
      </Link>
      <h3>Technologies Used</h3>
      <ul>
        <li>WordPress CM</li>
      </ul>
    </>
  );
}
