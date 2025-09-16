import TermsBanner from "@/components/terms-and-conditions/banner";
import TermsContent from "@/components/terms-and-conditions/content";

export default function Terms() {

  return (
    <>
      <article className="pg_static">
        <TermsBanner />
        <TermsContent />
      </article>
    </>
  );
}
