import React, { useState } from "react";
import './style.css';

const imageButtonDark = 'assets/sun.png';
const imageButtonNormal = 'assets/moon.png'

export default function Header(props) {

    return (
        <header className={props.darkTheme ? 'dark' : ''}>
            <div className="container-logo">
                <img src='assets/logo.png'></img>
            </div>
            <button onClick={props.changeTheme}>
                <img src={props.darkTheme ? imageButtonNormal : imageButtonDark}></img>
            </button>
        </header>
    )
}