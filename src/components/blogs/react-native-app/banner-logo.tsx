import BharathaIconAnimatedSm from "@/components/common/animated-icons/bharatha-icon-sm";
import BharathaIconAnimatedXs from "@/components/common/animated-icons/bharatha-icon-xs";


export default function BannerLogo() {
  return (
    <>
      <div className="banner_logo xl:hidden lg:hidden">
        <BharathaIconAnimatedXs />
      </div>
      <div className="banner_logo hidden xl:block lg:block">
        <BharathaIconAnimatedSm />
      </div>
    </>
  );
}
