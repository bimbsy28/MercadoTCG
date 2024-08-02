import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white topbar mb-4 static-top shadow">
      <Link className="navbar-brand d-flex align-items-center justify-content-center" to="/">
        <div className="navbar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="navbar-brand-text mx-3">MercadoTCG</div>
      </Link>
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
    </nav>
  );
};

export default Navbar;