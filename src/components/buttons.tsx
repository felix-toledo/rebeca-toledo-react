import React from 'react';
import "@fontsource/amethysta";
import "@fontsource/lato";
import "../styles/buttons.css"

interface Props {
    buttonref: string
    title: string
    description: string
    logo: string
}

const MenuButton: React.FC<Props> = ({ logo, title, description, buttonref  }) => {

  return (
    <>
      <a className='contButton' href={buttonref}>
        <img src={logo} alt={title+ " Logo"} />
        <div className="tdco">
            <p className="buttonTitle"> {title} </p>
            <p className="buttonDescription"> {description} </p>
        </div>
      </a>
    </>
  )
}

export default MenuButton;