export default function Summary({ children }: { children: React.ReactNode }) {
  return (
    <section className="bl_summary mt-[100px] mb-[100px]">
      <div className="container !max-w-[940px]">{children}</div>
    </section>
  );
}
