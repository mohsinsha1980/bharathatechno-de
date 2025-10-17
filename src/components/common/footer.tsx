import FooterLogo from "./footer-logo";
import FooterNav from "./footer-nav";
import FooterSocial from "./footer-social";
import Copyright from "./copyright";

export default function Footer() {
  return (
    <footer>
      <div className="container bl_footer">
        <div className="flex justify-between items-center mb-10 flex-col lg:flex-row text-center md:text-left gap-8">
          <FooterLogo />
          <FooterNav />
        </div>
        <div className="flex justify-between items-center pb-4 flex-col lg:flex-row text-center md:text-left gap-5">
          <Copyright />
          <FooterSocial />
        </div>
      </div>
    </footer>
  );
}
