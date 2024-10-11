import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importation de Link pour la navigation
import iconeMenu from '../images/iconeMenu.png';
import '../css_component/nav.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/"> {/* Utilisation de Link pour la navigation */}
          <span>Lo</span>go
        </Link>
      </div>
      <button className="button-menu" onClick={toggleMenu}>
        <img src={iconeMenu} alt="Menu Icon" />
      </button>
      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/suppliers">Suppliers</Link></li>
        <li><Link to="/grande-entreprise">Entreprise</Link></li>
        <li><Link to="/kitcommunication">Kitcommunication</Link></li>
        <li><Link to="/press">Press</Link></li>
        <li><Link to="/careers">Careers</Link></li>
      </ul>
      <Link to="#contact" className="btn-login">Login</Link>
    </nav>
  );
};

export default Nav;
