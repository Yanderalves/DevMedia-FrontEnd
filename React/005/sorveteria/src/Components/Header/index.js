import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";


export default function Header(){
    return(
        <header>
            <div className="container">
                <img src={Logo}></img>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/flavors">Sabores</Link>
                    <Link to="/about">Sobre</Link>
                </nav>
            </div>
        </header>
    )
}
