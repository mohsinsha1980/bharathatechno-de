import Logo from "../common/logo";
import BannerContent from "./banner-content";
import BannerTags from "./banner-tags";

export default function Banner() {
  return (
    <section className="bl_home_banner">
      {/* <Image
        src="/images/home/home-banner-bg.webp"
        alt=""
        className="bg"
        width={1}
        height={1}
      /> */}
      <div className="container md:container-medium relative">
        <Logo />
        <BannerContent />
        <BannerTags />
      </div>
    </section>
  );
}
