import React, { useState } from "react";
import "../styles/main.css";
import MenuButton from "../components/buttons";

function Main() {

  return (
    <>
      <main className="contenedorMain">
        <img src="/assets/person.png" alt="" />
        <div className="contTexto">
          <p className="textoMain">EXPERIENCIA PLACENTERA PARA PRESERVAR TU SALUD BUCAL!</p>
          <MenuButton 
          title="TURNOS" 
          description="Pedí turnos desde acá." 
          buttonref="/hola" 
          logo="./icons/Turnos.png" 
          />
        </div>
      </main>
    </>
  );
}

export default Main;
