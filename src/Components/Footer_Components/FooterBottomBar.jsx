// 5th Component - Footer Bottom Bar (Copyright and policy links)
export default function FooterBottomBar() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-bottom-bar">
      <p className="footer-copyright">
        &copy; {currentYear} Techzy. All rights reserved.
      </p>
      <div className="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <span className="footer-dot">•</span>
        <a href="#">Terms of Service</a>
        <span className="footer-dot">•</span>
        <a href="#">Cookies</a>
      </div>
    </div>
  );
}
