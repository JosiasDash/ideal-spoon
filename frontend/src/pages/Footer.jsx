import { Link } from "react-router-dom";
import '../styles/Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <p className="footer-text">© {new Date().getFullYear()} Mon Projet. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
