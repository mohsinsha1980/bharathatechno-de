import Logo from "@/components/common/logo";
import BannerLogo from "./banner-logo";
import BannerContent from "./banner-content";

export default function ProductBanner({data}: {data: string}) {
  return (
    <section className="bl_home_banner">
      <div className="container">
        <Logo />
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          <BannerContent data={data}/>
          <BannerLogo />
        </div>
      </div>
    </section>
  );
}
