import React from "react";

import LogoFacebok from "../../assets/fb.png";
import LogoInstagram from "../../assets/ig.png";
import LogoTwitter from "../../assets/tt.png";

import ImageMap from "../../assets/local.png";
import ImagePhone from "../../assets/telefone.png";
import ImageEmail from "../../assets/email.png";


export default function SectionContact(){
    return(
        <section className="section-contact">
            <div className="limit-size">
                <h2>
                    Fale conosco
                </h2>
                <p>
                    Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.
                </p>
                <div>
                    <div>
                        <h4>
                            Contato
                        </h4>
                        <div className="item">
                            <img src={ImageMap}></img>
                            <p>Nova iguaçu, RJ</p>
                        </div>
                        <div className="item">
                            <img src={ImagePhone}></img>
                            <p>(21) 999-999</p>
                        </div>
                        <div className="item">
                            <img src={ImageEmail}></img>
                            <p>Contato@mengo.com</p>
                        </div>
                    </div>
                    <div>
                        <h4>
                            Nossas redes sociais
                        </h4>
                        <div className="item">
                            <img src={LogoFacebok}></img>
                            <p>/OticaVida</p>
                        </div>
                        <div className="item">
                            <img src={LogoInstagram}></img>
                            <p>@oticaVidaRJ</p>
                        </div>
                        <div className="item">
                            <img src={LogoTwitter}></img>
                            <p>@oticaVidaRJ</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}