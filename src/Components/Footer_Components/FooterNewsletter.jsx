// 4th Component - Footer Newsletter (Email subscription mini-form)
export default function FooterNewsletter() {
  return (
    <div className="footer-newsletter">
      <p className="newsletter-label">Stay Updated</p>
      <div className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email"
          className="newsletter-input"
          aria-label="Email for newsletter"
        />
        <button className="newsletter-btn" aria-label="Subscribe">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  );
}
