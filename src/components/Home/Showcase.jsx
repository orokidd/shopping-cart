import showcase from "../../assets/showcase01.jpg";
import showcase5 from "../../assets/showcase05.jpg";
import showcase3 from "../../assets/showcase03.jpg";
import showcase4 from "../../assets/showcase04.jpg";

export default function Showcase() {
  return (
    <div className="showcase-container">
      <div className="showcase-item">
        <div className="showcase-texts">
          <h1>PHILP</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className="showcase-image">
          <img src={showcase5} alt="Showcase" />
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

      <div className="showcase-item">
        <div className="showcase-texts">
          <h1>OLIVE</h1>
          <p> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle.</p>
        </div>
        <div className="showcase-image">
          <img src={showcase4} alt="Showcase" />
        </div>
      </div>
    </div>
  );
}
