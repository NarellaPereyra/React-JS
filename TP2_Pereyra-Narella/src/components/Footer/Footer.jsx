import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="text-white pt-4" style={{ backgroundColor: "#ad5454" }}>
      <div className="container">
        <div className="row">

          <div className="col-md-4">
            <h5
              className="navbar-brand text-white"
              style={{ fontSize: "1.8rem", fontStyle: "italic" }}
            >
              Borcelle ~ Tienda de moda
            </h5>
            <p>Descubre las últimas tendencias en moda, con ropa para todos los estilos y ocasiones. ¡Visítanos hoy!</p>
          </div>


          <div className="col-md-4">
            <h5 style={{ fontSize: "1.3rem", fontStyle: "italic" }}>Navegación</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/products">Productos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 style={{ fontSize: "1.3rem", fontStyle: "italic" }}>Síguenos</h5>
            <ul className="nav">
              <li className="nav-item">
                <a href="https://facebook.com" className="nav-link text-white" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook"></i> Facebook
                </a>
              </li>
              <li className="nav-item">
                <a href="https://twitter.com" className="nav-link text-white" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter"></i> Twitter
                </a>
              </li>
              <li className="nav-item">
                <a href="https://instagram.com" className="nav-link text-white" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4 text-white" />
        <div className="text-center pb-3">
          <p className="mb-0">&copy; 2025 Borcelle ~ Tienda de moda. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>

  )
}

export { Footer }