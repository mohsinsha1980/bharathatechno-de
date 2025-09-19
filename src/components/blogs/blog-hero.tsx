import { PostDataType } from "@/lib/types";
import Logo from "../common/logo";
import BannerContent from "./blog-hero-content";
import BannerLogo from "./blog-hero-logo";
import MultiLingual from "../common/multilingual";

export default function BlogHero({ post }: { post: PostDataType }) {
  return (
    <section className="bl_home_banner">
      <div className="container">
        <section className="flex justify-center gap-2 md:gap-0 md:justify-between items-end lg:mr-50">
          <Logo />
          <MultiLingual />
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <BannerContent title={post.title} />
          <BannerLogo />
        </div>
      </div>
    </section>
  );
}
