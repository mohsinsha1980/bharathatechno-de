import Logo from "../common/logo";
import MultiLingual from "../common/multilingual";
import ServicesBannerContent from "./banner-content";
import ServicesBannerLogo from "./banner-logo";

export default function CaseStudiesBanner() {
  return (
    <section className="bl_home_banner">
      <div className="container container-small">
        <section className="flex justify-center gap-2 md:gap-0 md:justify-between items-end lg:mr-50">
          <Logo />
          <MultiLingual />
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
          <ServicesBannerContent />
          <ServicesBannerLogo />
        </div>
      </div>
    </section>
  );
}
