import React from "react";
import "./Header.scss";

// import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          {/* <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/bibliotheque">Ma Bibliothèque</Link>
          </li>
          <li>
            <Link to="/connexion">Connexion/Inscription</Link>
          </li> */}
          Bonjour
        </ul>
      </nav>
    </header>
  );
}

export default Header;
