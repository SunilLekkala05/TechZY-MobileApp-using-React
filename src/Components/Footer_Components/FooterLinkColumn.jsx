// 2nd Component - Footer Link Column (Reusable column with title and links)
export default function FooterLinkColumn({ title, links }) {
  return (
    <div className="footer-col">
      <h4 className="footer-col-title">{title}</h4>
      <ul className="footer-links">
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
