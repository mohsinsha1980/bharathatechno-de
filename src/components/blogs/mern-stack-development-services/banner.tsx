import Logo from "@/components/common/logo";
import BannerContent from "./banner-content";
import BannerLogo from "./banner-logo";

export default function Banner() {
  return (
    <section className="bl_home_banner">
      <div className="container">
        <Logo />
        <div className="grid grid-cols-1 lg:grid-cols-2  md:grid-cols-2">
          <BannerContent />
          <BannerLogo />
        </div>
      </div>
    </section>
  );
}
