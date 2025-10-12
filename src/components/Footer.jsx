import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-icon">
        <Link to="/" className="home-link">
          TERATAI
        </Link>
        <p className="footer-rights">© 2024 All rights reserved</p>
      </div>
    </div>
  );
}
