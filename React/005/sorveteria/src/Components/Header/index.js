import { Link } from "react-router-dom";

import './style.css';


export default function Header(){
    return(
        <header>
            <div className="container">
                <img src="/assets/logo.png"></img>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/flavors">Sabores</Link>
                    <Link to="/about">Sobre</Link>
                </nav>
            </div>
        </header>
    )
}
