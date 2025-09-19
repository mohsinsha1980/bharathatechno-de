import Logo from "../common/logo";
import MultiLingual from "../common/multilingual";
import BannerContent from "./banner-content";
import BannerLogo from "./banner-logo";

export default function AboutBanner() {
  return (
    <section className="bl_home_banner">
      <div className="container">
        <section className="flex justify-center gap-2 md:gap-0 md:justify-between items-end lg:mr-50">
          <Logo />
          <MultiLingual />
        </section>
        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full">
            <BannerContent />
            <BannerLogo />
          </div>
        </div>
      </div>
    </section>
  );
}
