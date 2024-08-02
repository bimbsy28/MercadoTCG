// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">MercadoTCG</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/iniciar-sesion">Iniciar Sesión</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registrarse">Registrarse</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/crear-anuncio">Vender</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;