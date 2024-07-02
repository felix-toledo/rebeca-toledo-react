import { useState } from "react";
import "../styles/header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="headerSection">
        <a href="/"><img src="./assets/Logo.png" alt="Logo" className="logo" /></a>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`nav ${isOpen ? "active" : ""}`}>
          <li><a className="activeColor" href="">INICIO</a></li>
          <li><a href="">GALERIA</a></li>
          <li><a href="">BLOG</a></li>
          <li><a href="">CONTACTO</a></li>
        </ul>
      </header>
    </>
  );
}

export default Header;
