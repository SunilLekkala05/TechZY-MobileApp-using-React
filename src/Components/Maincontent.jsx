import background from "../assets/background.png";
import HeroContent from "./Maincontent_Components/HeroContent";

export default function MainContent() {
  return (
    <div className="content" style={{ backgroundImage: `url(${background})` }}>
      <div className="hero">
        <HeroContent />
      </div>
    </div>
  );
}
