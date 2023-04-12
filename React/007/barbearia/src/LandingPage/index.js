import React, { useState } from "react";
import './style.css';

const LandingPage = () => {

    const classDark = 'dark';
    const imageButtonDark = 'assets/sun.png';
    const imageButtonNormal = 'assets/moon.png'

    const [darkThemeActive, setDarkTheme] = useState(false);

    const changeTheme = () => {
        const darkTheme = !darkThemeActive;
        setDarkTheme(darkTheme);
    }


    return (
        <div>
            <header className={darkThemeActive ? classDark : ''}>
                <div className="container-logo">
                    <img src="assets/barbearia-logo.png"></img>
                </div>
                <button onClick={changeTheme} className={darkThemeActive ? classDark : ''}>
                    {darkThemeActive ? 'Ligth' : 'Dark'}
                    <img src={darkThemeActive ? imageButtonDark : imageButtonNormal}></img>
                </button>
            </header>
            <section className="banner">

            </section>
            <section className={`section-text ${darkThemeActive ? classDark : ''}`}>
                <h1>
                    Bem-vindo a Barber Shop
                </h1>
                <p>
                    Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.
                </p>
                <p>
                    Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
                </p>
                <p>
                    S. Kelly
                </p>

            </section>
        </div>
    )
}

export default LandingPage;