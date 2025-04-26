import { NavLink } from "react-router";
import logo from "../../assets/logo-ceca01-01.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={logo} alt="Logo CECA" />
        </NavLink>
      </div>

      <ul className="navbar-links">
        <li><NavLink to="/" end>Accueil</NavLink></li>
        <li><NavLink to="/about">À propos</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/formation">Activités</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>


  );
};

export default Navbar;
