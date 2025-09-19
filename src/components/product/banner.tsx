import Logo from "@/components/common/logo";
import BannerLogo from "./banner-logo";
import BannerContent from "./banner-content";
import MultiLingual from "../common/multilingual";

export default function ProductBanner({ data }: { data: string }) {
  return (
    <section className="bl_home_banner">
      <div className="container">
        <section className="flex justify-center gap-2 md:gap-0 md:justify-between items-end lg:mr-50">
          <Logo />
          <MultiLingual />
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          <BannerContent data={data} />
          <BannerLogo />
        </div>
      </div>
    </section>
  );
}
