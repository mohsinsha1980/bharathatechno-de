import Image from "next/image";
import Link from "next/link";

export default function Train2GainImage() {
  return (
    <>
      <Link href="/work/train-2-gain">
        <Image
          src="/images/home/train2gain-case-study.webp"
          alt="Train2Gain"
          width={640}
          height={460}
        />
      </Link>

      <h3>Technologies Used</h3>
      <ul>
        <li>WordPress CMS</li>
      </ul>
    </>
  );
}
