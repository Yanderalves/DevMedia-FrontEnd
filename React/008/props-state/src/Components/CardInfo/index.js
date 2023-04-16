import React from "react";
import './style.css';

const CardInfo = (props) => {

    const infoAnimal = "Mamífero carnívoro da família dos felídeos";


    return(
        <div className="card-info">
            <h1>Informações sobre o {props.type == "dog" ? "cachorro" : "gato" }</h1>
            <p>{infoAnimal} {props.type == "dog" ? "canídeos" : "Felídeos" }</p>
        </div>
    )
}

export default CardInfo;

