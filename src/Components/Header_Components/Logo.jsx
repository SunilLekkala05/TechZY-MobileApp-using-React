// 1st Component - Logo Image (Brand logo displayed in the header)
import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <div className="title">
      <img src={logo} alt="Techzy Logo" width="100" />
    </div>
  );
}
