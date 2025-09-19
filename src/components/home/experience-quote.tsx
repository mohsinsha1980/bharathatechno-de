import Image from "next/image";

export default function ExperienceQuote() {
  return (
    <section className="bl_experience">
      <Image
        src="/images/home/bg-wave.svg"
        alt=""
        width={1920}
        height={300}
        className="bg"
      />
      <div className="container text-center">
        <h2>Wo Expertise Innovation gestaltet</h2>
      </div>
    </section>
  );
}
