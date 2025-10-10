import showcase from "../../assets/showcase01.jpg";
import showcase2 from "../../assets/showcase02.jpg";
import showcase3 from "../../assets/showcase03.jpg";

export default function Showcase() {
  return (
    <div className="showcase-container">
      <div className="showcase-item">
        <div className="showcase-texts">
          <h1>PHILP</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className="showcase-image">
          <img src={showcase2} alt="Showcase" />
        </div>
      </div>

      <div className="showcase-item">
        <div className="showcase-image">
          <img src={showcase3} alt="Showcase" />
        </div>
        <div className="showcase-texts">
          <h1>GRACE</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        </div>
      </div>
    </div>
  );
}
