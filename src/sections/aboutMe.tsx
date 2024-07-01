import "../styles/aboutMe.css";
import MenuButton from "../components/buttons";

function AboutMe() {

  const todayDate = new Date();

  const rebecasBirthday = new Date(1990, 10, 27);

  var rebecasAge = todayDate.getFullYear() - rebecasBirthday.getFullYear();
  const month = todayDate.getMonth() - rebecasBirthday.getMonth();
  if (month < 0 || (month === 0 && todayDate.getDate() < rebecasBirthday.getDate())) {
    rebecasAge--;
  }
  
  const primerExperiencia = new Date(2020, 1, 1);
  const aniosExperiencia = todayDate.getFullYear() - primerExperiencia.getFullYear();

  const aboutMe = (
    <div className="texto-aboutMe">
      <p>🤚 Mi nombre es Rebeca Toledo, tengo {rebecasAge} años y nací en Corrientes, Argentina!</p>
      <p>📓 De chica siempre tuve una pasión por la odontología, por lo tanto ingresé en la facultad de odontología de la Universidad Nacional del Nordeste y actualmente cuento con {aniosExperiencia} años de experiencia tratando con pacientes.</p>
      <p>😷 Siempre realizo estudios de actualización para brindarle lo mejor a mis pacientes, actualmente me encuentro realizando un curso de cirugía dental.</p>
    </div>
  );
  
  return (
    <>
      <aside className="aboutMe-container">
        <div className="am-text-container"><h3>SOBRE MÍ</h3>{aboutMe}</div>
        <div className="video-container">
          <video muted controls autoPlay loop src="./assets/video_odon.mp4"></video>
        </div>
        <div className="buttons-container-aside">
            <MenuButton 
            title="LEÉ MI BLOG" 
            description="Leé consejos sobre cuidado de la salud bucal." 
            buttonref="/hola" 
            logo="./icons/Blog.png" 
            />
            
            <MenuButton 
            title="RESEÑAS" 
            description="Me ayudaría mucho tu opinión sobre el servicio!" 
            buttonref="/hola" 
            logo="./icons/Calificaciones.png" 
            />

            <MenuButton 
            title="UBICACIÓN" 
            description="Mirá cómo llegar hasta el consultorio." 
            buttonref="/hola" 
            logo="./icons/Map.png" 
            />
        </div>
      </aside>
    </>
  );
}

export default AboutMe;