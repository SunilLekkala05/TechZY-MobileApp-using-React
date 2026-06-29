import FooterBrand from "./Footer_Components/FooterBrand";
import FooterLinkColumn from "./Footer_Components/FooterLinkColumn";
import FooterContact from "./Footer_Components/FooterContact";
import FooterNewsletter from "./Footer_Components/FooterNewsletter";
import FooterBottomBar from "./Footer_Components/FooterBottomBar";
import ScrollToTopButton from "./Footer_Components/ScrollToTopButton";

const QUICK_LINKS = ["Products", "Best Sellers", "New Arrivals", "Deals & Offers", "Compare"];
const SUPPORT_LINKS = ["Help Center", "Track Order", "Shipping Info", "Refund Policy", "Terms & Conditions"];

export default function Footer({ onScrollToTop }) {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-glow"></div>

      <div className="footer-main">
        <FooterBrand />
        <FooterLinkColumn title="Quick Links" links={QUICK_LINKS} />
        <FooterLinkColumn title="Support" links={SUPPORT_LINKS} />

        <div className="footer-col">
          <FooterContact />
          <FooterNewsletter />
        </div>
      </div>

      <FooterBottomBar />
      <ScrollToTopButton onScrollToTop={onScrollToTop} />
    </footer>
  );
}
