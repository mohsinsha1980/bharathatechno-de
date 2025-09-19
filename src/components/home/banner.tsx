import Logo from "../common/logo";
import MultiLingual from "../common/multilingual";
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
        <section className="flex justify-center gap-2 md:gap-0 md:justify-between items-end lg:mr-50">
          <Logo />
          <MultiLingual />
        </section>
        <BannerContent />
        <BannerTags />
      </div>
    </section>
  );
}
