import React from "react";
import './style.css';

export default function Header(props) {
    return (
        <footer className={props.darkTheme ? 'dark' : ''}>
            <div className="container-logo">
                <img src="assets/logo.png"></img>
            </div>
            <p>Ajudamos a criar uma personalidade chamada clube de regatas do flamengo, o tal. Porque mano, o Marcos Braz é muito nanico, papo é reto</p>
            <div className="social-medias">
                <img src="assets/facebook.png"></img>
                <img src="assets/twitter.png"></img>
                <img src="assets/linkedin.png"></img>
                <img src="assets/dribble.png"></img>
                <img src="assets/behance.png"></img>
                <img src="assets/google-plus.png"></img>
            </div>
            <div>
                Desenvolvido por <a href="#">Alves, o tal</a>
            </div>
        </footer>
    )
}
