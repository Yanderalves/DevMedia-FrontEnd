import React from "react";
import './style.css';

export default function Header () {
    return (
        <footer>
            <div className="container-logo">
                <img src="/public/assets/logo.png"></img>
            </div>
            <p>Ajudamos a criar uma personalidade chamada clube de regatas do flamengo, o tal. Porque mano, o Marcos Braz é muito nanico, papo é reto</p>
            <div className="social-medias">
                <img src="/public/assets/facebook.png"></img>
                <img src="/public/assets/twitter.png"></img>
                <img src="/public/assets/linkedin.png"></img>
                <img src="/public/assets/dribble.png"></img>
                <img src="/public/assets/behance.png"></img>
                <img src="/public/assets/google-plus.png"></img>
            </div>
            <div>
                Desenvolvido por Alves, o tal
            </div>
        </footer>
    )
}
