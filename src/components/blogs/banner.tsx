import Logo from "../common/logo";
import ServicesBannerContent from "./banner-content";
import ServicesBannerLogo from "./banner-logo";

export default function CaseStudiesBanner() {
 
  return (
    <section className="bl_home_banner">
      <div className="container container-small">
        <Logo />
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
          <ServicesBannerContent />
          <ServicesBannerLogo />
        </div>
      </div>
    </section>
  );
}
