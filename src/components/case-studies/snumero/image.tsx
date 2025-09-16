import Image from "next/image";
import Link from "next/link";

export default function SnumeroImage() {
  return (
    <>
      <Link href="/work/snumero">
        <Image
          src="/images/home/snumero-case-study.webp"
          alt="Shred-n-Shape"
          width={640}
          height={460}
        />
      </Link>

      <h3>Technologies Used</h3>
      <ul>
        <li>Next.Js + Typescript</li>
        <li>MySQL</li>
        <li>Tailwind CSS</li>
      </ul>
    </>
  );
}
