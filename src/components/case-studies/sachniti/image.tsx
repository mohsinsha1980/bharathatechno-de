import Image from "next/image";
import Link from "next/link";

export default function SachnitiImage() {
  return (
    <>
      <Link href="/work/sachniti">
        <Image
          src="/images/home/sachniti-case-study.webp"
          alt="Sachniti"
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
