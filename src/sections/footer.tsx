import React, { useState } from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons/faTiktok";


function Footer() {

  return (
    <>
        <div className="footer">
            <div className="firstLine-footer">
                <h4>© Rebeca Toledo</h4>
                <button className="button-footer">Pedí un turno acá</button>
            </div>
            <hr className="footer-divider"/>
            <div className="secondLine-footer">
                <div className="first-column">
                    <h5>Dentista Profesional</h5>
                    <p>Dentista especializado en el cuidado de la salud bucal. Proporciona tratamientos para mantener los dientes y encias sanos. Corrientes, Argentina.</p>
                    <div className="social-media">
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTiktok} />
                    </div>
                </div>
                <div className="second-column footer-item">
                    <p>Rebe</p>
                    <ul className="footer-item-list">
                        <li>Sobre Mí</li>
                        <li>Inicio</li>
                        <li>Galería</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="third-column footer-item">
                    <p>Contacto</p>
                    <ul className="footer-item-list">
                        <li>Redes sociales</li>
                        <li>Medios de contacto</li>
                        <li>Contactame!</li>
                        <li>Reseñas</li>
                    </ul>
                </div>
                <div className="fourth-column footer-item">
                    <p>Desarrollo</p>
                    <ul className="footer-item-list">
                        <li>Felix Toledo</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  );
}

export default Footer;
