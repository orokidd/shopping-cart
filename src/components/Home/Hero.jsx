import hero from "../../assets/hero-1.jpg";

export default function Hero() {
  return (
    <div className="hero-container">
      <img className="hero-img" src={hero} alt="Hero" />
    </div>
  );
}
