import Link from "next/link";

export default function StaffAugmentationForm() {
  return (
    <section className="bl_contact">
      <div className="container container-small bg-white/20 p-6 rounded-lg">
        <h1 className="text-center text-3xl font-bold">
          Projektpersonalanfrage
        </h1>
        <p className="mt-2 text-center text-sm md:text-base text-white/70">
          Teilen Sie uns Ihre Teamanforderungen, Ihren Zeitplan und die
          erforderlichen Fähigkeiten mit. Wir bringen Sie mit geprüften Experten
          zusammen und melden uns in Kürze bei Ihnen.
        </p>
        <div className="flex justify-center">
          <Link href="/about" className="link-btn">
            Über uns
          </Link>
        </div>
      </div>
    </section>
  );
}
