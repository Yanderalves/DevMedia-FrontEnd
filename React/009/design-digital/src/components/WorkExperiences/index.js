import React from "react";
import './style.css';

import Card from "../Card";

export default function WorkExperiences(props) {
    return (
        <section className={`work-experiences ${props.darkTheme ? 'dark' : ''}`}>
            <h2>Experiências de trabalho</h2>
            <span></span>
            <p>Ajudamos a criar uma personalidade chamada clube de regatas do flamengo, o tal. Porque mano, o Marcos Braz é muito nanico, papo é retoPorque mano, o Marcos Braz é muito nanico, papo é retoPorque mano, o Marcos Braz é muito nanico, papo é retoPorque mano, o Marcos Braz é muito nanico, papo é reto</p>
            <div className="container-cards">
                <Card>
                    <div class="container-title">
                        <p>JUNHO 2012 - 2016</p>
                        <h3>Web designer</h3>
                        <p>Pied sturtup Pipper</p>
                    </div>
                    <p>Criação de landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores</p>
                </Card>
                <Card>
                    <div class="container-title">
                        <p>JUNHO 2012 - 2016</p>
                        <h3>Web designer</h3>
                        <p>Pied sturtup Pipper</p>
                    </div>
                    <p>Criação de landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores</p>
                </Card>
                <Card>
                    <div class="container-title">
                        <p>JUNHO 2012 - 2016</p>
                        <h3>Web designer</h3>
                        <p>Pied sturtup Pipper</p>
                    </div>
                    <p>Criação de landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores</p>
                </Card>
            </div>
        </section>
    )
}
