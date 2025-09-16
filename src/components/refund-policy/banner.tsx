import Logo from "../common/logo";
import ServicesBannerContent from "./banner-content";
import ServicesBannerLogo from "./banner-logo";

export default function RefundBanner() {

  return (
    <section className="bl_home_banner">
      <div className="container">
        <Logo />
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          <ServicesBannerContent />
          <ServicesBannerLogo />
        </div>
      </div>
    </section>
  );
}
