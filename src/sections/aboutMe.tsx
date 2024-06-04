import "../styles/aboutMe.css";
import MenuButton from "../components/buttons";

function AboutMe() {

  return (
    <>
      <aside className="aboutMe-container">
        <div className="text-container">texto</div>
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