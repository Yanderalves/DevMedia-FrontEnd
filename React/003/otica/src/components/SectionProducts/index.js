import React from "react";
import './style.css';

import Glasses01 from "../../assets/oculos01.png";
import Glasses02 from "../../assets/oculos02.png"; 
import Glasses03 from "../../assets/oculos03.png"; 
import Glasses04 from "../../assets/oculos04.png"; 

import Card from "../Card";

export default function SectionProducts(){
    return(
        <section className="products">
            <div className="limit-size">
                <div className="container">
                    <h2>NOSSOS PRODUTOS</h2>
                    <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                    <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                </div>
                <div className="container-cards">
                    <Card title="Óculos de grau" imageSource={Glasses01} content="R$ 500,00"/>
                    <Card title="Óculos transition" imageSource={Glasses02} content="R$ 750,00"/>
                    <Card title="Óculos de sol" imageSource={Glasses03} content="R$ 700,00"/>
                    <Card title="Óculos infantil" imageSource={Glasses04} content="R$ 500,00"/>
                </div>
                <p>Todos os nossos produtos incluem:</p>
                <div className="container-list">
                    <ul>
                        <li>
                            Garantia de 1 ano
                        </li>
                        <li>
                            Manutenção preventiva
                        </li>
                        <li>
                            Descontos especiais na compra da segunda unidade
                        </li>
                        <li>
                            Flexibilidade de pagamento
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}