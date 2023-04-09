import React from "react";
import './style.css';

import ImageMarket from "../../assets/loja.png";
import ImageService from "../../assets/atendimento.png";

export default function SectionAbout(){
    return(
        <section className="section-about">
            <div className="limit-size">
                <h2>QUEM SOMOS NÓS?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                <div className="cards">
                    <div><img src={ImageMarket}></img></div>
                    <div>
                        <h4>
                            Nossas Filiais
                        </h4>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div>
                        <h4>
                            Atendimento flexível
                        </h4>
                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>
                    <div><img src={ImageService}></img></div>
                </div>
            </div>
        </section>
    )
}