import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/logo.png';

import '../styles/Navbar.css';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" className="logo">
          <img src={Logo} alt="Logo" className="w-40 h-30" />
          </Link>


          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="mobile-menu-button sm:hidden"
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu sm:hidden">
          <Link to="/login">View-Profile</Link>
          <Link to="/login">dashbord</Link>
          <Link to="/signup">Contributions</Link>
          <Link to="/signup">My-Projects</Link>
        </div>
      )}
    </nav>
  );
}
