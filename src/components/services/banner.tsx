import Logo from "../common/logo";
import MultiLingual from "../common/multilingual";
import ServicesBannerContent from "./banner-content";
import ServicesBannerLogo from "./banner-logo";
import ServicesTicker from "./services-ticker";

export default function ServicesBanner({ data }: { data: string }) {
  return (
    <section className="bl_home_banner relative">
      <div className="container">
        <section className="flex justify-center gap-2 md:gap-0 md:justify-between items-end lg:mr-60">
          <Logo />
          <MultiLingual />
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
          <ServicesBannerContent data={data} />
          <ServicesBannerLogo />
        </div>
      </div>
      <div className="absolute left-0 bottom-[250px] lg:bottom-[150px] md:bottom-[20px] service">
        <ServicesTicker />
      </div>
    </section>
  );
}
