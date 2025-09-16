import Logo from "../common/logo";
import ContactBannerContent from "./banner-content";
import ContactBannerLogo from "./banner-logo";

export default function ContactBanner() {
  
  return (
    <section className="bl_home_banner">
      <div className="container container-small">
        <Logo />
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          <ContactBannerContent />
          <ContactBannerLogo />
        </div>
      </div>
    </section>
  );
}
