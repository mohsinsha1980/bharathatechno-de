import Image from "next/image";
import Link from "next/link";

export default function TrendyThreadsImage() {
  return (
    <>
      <Link href="/work/trendy-threads">
        <Image
          src="/images/home/trendy-threads-case-study.webp"
          alt="Trendy Threads"
          width={640}
          height={460}
        />
      </Link>

      <h3>Technologies Used</h3>
      <ul>
        <li>Next.js + TypeScript</li>
        <li>NodeJs</li>
        <li>ExpressJs</li>
        <li>MongoDB</li>
        <li>Zod (Form Validation)</li>
      </ul>
    </>
  );
}
