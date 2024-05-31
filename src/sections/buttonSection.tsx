import "@fontsource/amethysta";
import MenuButton from '../components/buttons';
import "../styles/buttonSection.css"

function ButtonSection() {
  return (
    <>
    <div className="buttonSection">
      <MenuButton 
      title="OBRA SOCIAL" 
      description="Chequeá si atiendo tu obra social." 
      buttonref="/hola" 
      logo="./icons/Obra_Social.png" 
      />

      <MenuButton 
      title="HORARIOS" 
      description="Conocé mis horarios de atención." 
      buttonref="/hola" 
      logo="./icons/Horarios.png" 
      />

      <MenuButton 
      title="SERVICIOS" 
      description="Descrubrí todos los servicios que ofrezco." 
      buttonref="/hola" 
      logo="./icons/Servicios.png" 
      />

      <MenuButton 
      title="PAGOS" 
      description="Conocé los medios de pago disponibles." 
      buttonref="/hola" 
      logo="./icons/Pagos.png" 
      />
    </div>
    </>
  )
}

export default ButtonSection
