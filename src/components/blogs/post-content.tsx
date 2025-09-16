import { PostDataType, ServiceTypeDetailsType } from "@/lib/types";
import ReactMarkdown from "react-markdown";
import DetailsAccordion from "../services/details-accordion";

export default function PostContent({ post }: { post: PostDataType }) {
  const faqsData: ServiceTypeDetailsType[] = post?.faqs.map((faq) => ({
    id: faq.question,
    heading: faq.question,
    content: faq.answer,
  }));

  return (
    <article className="container container-medium mt-15">
      <ReactMarkdown>{post.content}</ReactMarkdown>
      <h4 className="text-(--text-orange) text-[24px] mt-5 lg:mt-10 lg:text-[42px] font-bold">FAQ</h4>
      <DetailsAccordion items={faqsData} />
    </article>
  );
}
