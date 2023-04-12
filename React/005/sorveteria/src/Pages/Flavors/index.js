import React from "react";

import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Image from "../../Components/Image";

import './style.css';


function Flavors(){
    return(
        <div>
            <Header />
            <main>
                <section className="banner-ice-creams">
                    <div>
                        <h1>NOSSOS SABORES</h1>
                    </div>
                </section>
                <section className="ice-creams">
                    <h2>SABORES DE SORVETE</h2>
                    <div className="container-ice-creams">
                        <div className="card">
                            <Image src="assets/sabor-oreo.png" alt="sorvete sabor oreo"/>
                            <div class="container-text">
                                <h3>Sorvete de Oreo</h3>
                                <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                            </div>
                        </div>
                        <div className="card">
                            <Image src="assets/sabor-pistache.png" alt="sorvete sabor pistache"/>
                            <div class="container-text">
                                <h3>Sorvete Pistache</h3>
                                <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                            </div>
                        </div>
                        <div className="card">
                            <Image src="assets/sabor-cookies-avela.png" alt="sorvete sabor cookie com avelã"/>
                            <div class="container-text">
                                <h3>Sorvete Cookies & Avelã</h3>
                                <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                            </div>
                        </div>
                        <div className="card">
                            <Image src="assets/sorbet-kiwi.png" alt="sorbet sabor kiwi"/>
                            <div class="container-text">
                                <h3>Sorvete de Kiwi</h3>
                                <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                            </div>
                        </div>
                        <div className="card">
                            <Image src="assets/sorbet-morango.png" alt="sorbet sabor morango"/>
                            <div class="container-text">
                                <h3>Sorvete de Morango</h3>
                                <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                            </div>
                        </div>
                        <div className="card">
                            <Image src="assets/sorbet-limao.png" alt="sorbet limão siciliano"/>
                            <div class="container-text">
                                <h3>Sorvete de Limão Siciliano</h3>
                                <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Flavors;