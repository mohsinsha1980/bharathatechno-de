import TermsBanner from "@/components/privacy-policy/banner";
import TermsContent from "@/components/privacy-policy/content";

export default function Privacy() {
  return (
    <>
      <article className="pg_static">
        <TermsBanner />
        <TermsContent />
      </article>
    </>
  );
}
