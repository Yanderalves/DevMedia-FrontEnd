import React from "react";
import './style.css';

import Card from "../Card";

export default function WorkExperiences (){
    return (
        <section className="work-experiences">
            <h2>Experiências de trabalho</h2>
            <p>Ajudamos a criar uma personalidade chamada clube de regatas do flamengo, o tal. Porque mano, o Marcos Braz é muito nanico, papo é reto</p>
            <div className="container-cards">
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}
