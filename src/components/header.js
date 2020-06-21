import React from "react"

import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <h1>Les vins d'aliane</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/domaines">Domaines</Link>
          </li>
          <li>
            <Link to="/vins">Vins</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
