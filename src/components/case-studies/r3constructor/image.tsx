import Image from "next/image";
import Link from "next/link";

export default function R3constructorImage() {
  return (
    <>
      <Link href="/work/r3constructor">
        <Image
          src="/images/home/r3constructor-case-study.webp"
          alt="R3constructor"
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
