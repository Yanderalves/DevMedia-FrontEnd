import React from "react";

import "./style.css";

import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Image from "../../Components/Image";

function About(){
    return(
        <div>
            <Header />
                <main>
                    <section className="banner-about">
                        <div>
                            <h1>A GELATERIA</h1>
                        </div>
                    </section>

                    <section className="container-about">
                        <div>
                            <div className="container-text">
                                <h2>Sobre Nós</h2>
                                <span>Nós simplesmente amamos sorvete!</span>
                            </div>
                            <p>
                            Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
                            sorvete produzido. Fazemos o melhor sorvete para os nossos
                            clientes e gostamos de receber elogios. Estamos operando desde
                            2009 com as melhores matérias-primas para a produção final do
                            sorvete. Vendemos tanto para varejo como para atacado.
                            </p>
                            <p>
                            Nossos clientes podem comprar os nossos sorvetes e degustar na
                            nossa loja ou levar para sua residência e aproveitar junto com a
                            família. Também vendemos para estabelecimentos e criamos eventos
                            como festa de aniversário, formaturas e eventos empresariais. Para
                            contratar os nossos serviços, basta entrar em contato conosco.
                            Iremos proporcionar o melhor atendimento e os melhores produtos
                            para você fazer a sua festa mais saborosa, com o melhor sorvete da
                            cidade.
                            </p>
                        </div>
                    </section>

                    <div className="container-images">
                        <Image src="assets/sobre-image.jpg" alt="pessoas comendo sorvete" />
                        <Image src="assets/sorveteria.jpg" alt="loja sorveteria" />
                    </div>
                </main>
                <Footer />
        </div>
    )
}

export default About;