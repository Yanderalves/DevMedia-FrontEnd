import React from "react";

const Header = (props) => {
    return(
        <header>
            <h1>
                Projeto props + useState
            </h1>
            <p>Clique no botão abaixo para mudar o animal</p>
            <button onClick={props.changeAnimal}>Mudar animal</button>
        </header>
    )
}

export default Header;
