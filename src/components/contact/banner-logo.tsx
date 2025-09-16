import BharathaIconAnimatedSm from "../common/animated-icons/bharatha-icon-sm";
import BharathaIconAnimatedXs from "../common/animated-icons/bharatha-icon-xs";

export default function ContactBannerLogo() {
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
