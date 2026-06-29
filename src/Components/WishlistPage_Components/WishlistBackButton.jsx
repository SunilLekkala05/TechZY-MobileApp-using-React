// 1st Component - Wishlist Back Button (Arrow button to go back to home)
export default function WishlistBackButton({ onGoHome }) {
  return (
    <button className="wishlist-back-btn" onClick={onGoHome}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
      </svg>
      Back to Home
    </button>
  );
}
