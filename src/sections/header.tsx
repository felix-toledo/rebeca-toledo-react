import React, { useState } from "react";
import "../styles/header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="headerSection">
        <img src="./assets/Logo.png" alt="Logo" className="logo" />
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`nav ${isOpen ? "active" : ""}`}>
          <li className="activeColor">INICIO</li>
          <li>GALERIA</li>
          <li>BLOG</li>
          <li>CONTACTO</li>
        </ul>
      </header>
    </>
  );
}

export default Header;
