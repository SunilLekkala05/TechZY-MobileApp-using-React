// 6th Component - Scroll To Top Button (Water bubble arrow button)
export default function ScrollToTopButton({ onScrollToTop }) {
  return (
    <button
      className="scroll-to-top"
      onClick={onScrollToTop}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
