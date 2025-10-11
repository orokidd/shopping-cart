import Sustainability1 from "../../assets/sustainability02.jpg";

export default function Sustainability() {
  return (
    <div className="sustainability-container">
      <div className="sustainability-texts">
        <h1>Sustainability Commitment</h1>
        <p>We are deeply committed to creating a positive impact on the environment through every aspect of our business. Our approach to sustainability goes beyond using eco-friendly materials — it’s about making responsible choices that reduce waste, conserve resources, and promote long-term environmental well-being.</p>
        <button className="sustainability-button">Learn More</button>
      </div>
      <img src={Sustainability1} alt="Sustainability" />
    </div>
  );
}
