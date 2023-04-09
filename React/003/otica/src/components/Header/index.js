import react from 'react';
import logo from '../../assets/logo.png'
import './style.css'

export default function Header(){
    return (
        <header>
            <div className="limit-size">
                <img src={logo}></img>
                <nav>
                    <a href=''>Produtos</a>
                    <a href=''>Sobre</a>
                    <a href=''>Contato</a>
                </nav>
            </div>
        </header>
    );
}   