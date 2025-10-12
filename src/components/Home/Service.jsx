import freeShipping from "../../assets/svgs/box-svgrepo-com.svg";
import lifetimeGuarantee from "../../assets/svgs/shield-check-svgrepo-com.svg";
import moneyBack from "../../assets/svgs/hand-money-svgrepo-com.svg";
import giftBox from "../../assets/svgs/gift-svgrepo-com.svg";

export default function Service() {
  return (
    <div className="service-section">
      {/* <div className="service-header">
        <h1>Our Services</h1>
      </div> */}

      <div className="service-items">
        <div className="item">
          <img className="service-icon" src={freeShipping} alt="Free Shipping" />
          <h2>Free Shipping</h2>
        </div>

        <div className="item">
          <img className="service-icon" src={lifetimeGuarantee} alt="Lifetime Guarantee" />
          <h2>Lifetime Guarantee</h2>
        </div>

        <div className="item">
          <img className="service-icon" src={moneyBack} alt="Money Back Guarantee" />
          <h2>Money Back Guarantee</h2>
        </div>

        <div className="item">
          <img className="service-icon" src={giftBox} alt="Free Gift Wrap" />
          <h2>Free Gift Wrap</h2>
        </div>
      </div>
    </div>
  );
}
