import RefundBanner from "@/components/refund-policy/banner";
import RefundContent from "@/components/refund-policy/content";

export default function Privacy() {
  return (
    <>
      <article className="pg_static">
        <RefundBanner />
        <RefundContent />
      </article>
    </>
  );
}
