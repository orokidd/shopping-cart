import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <div className="newsletter-section">
      <h1 className="newsletter-heading">Newsletter</h1>
      <p className="newsletter-description">Get the latest updates and offers.</p>
      <form className="newsletter-form">
        <input className="newsletter-input" type="email" placeholder="Enter your email" required />
        <button className="newsletter-button" type="submit"><ArrowRight /></button>
      </form>
    </div>
  );
}
