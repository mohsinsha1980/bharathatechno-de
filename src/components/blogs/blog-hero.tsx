import { PostDataType } from "@/lib/types";
import Logo from "../common/logo";
import BannerContent from "./blog-hero-content";
import BannerLogo from "./blog-hero-logo";

export default function BlogHero({ post }: { post: PostDataType }) {
  return (
    <section className="bl_home_banner">
      <div className="container">
        <Logo />
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <BannerContent title={post.title} />
          <BannerLogo />
        </div>
      </div>
    </section>
  );
}
