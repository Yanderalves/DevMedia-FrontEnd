import React from "react";
import './style.css';

import ImageMoon from '../../assets/moon.png';
import ImageSun from 'assets/sun.png';

import Logo from 'assets/logo.png';

export default function Header (props) {
    return(
        <header>
            <div className="container-logo">
                <img src={Logo}></img>
            </div>
            <button>
                <img src={props.theme == 'dark' ? ImageSun : ImageMoon }></img>
            </button>
        </header>
    )
}