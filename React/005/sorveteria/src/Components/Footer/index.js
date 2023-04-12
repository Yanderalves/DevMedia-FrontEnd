import React from "react";
import Image from "../Image";
import './style.css';

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <Image src='assets/logo.png' alt='logomarca'/>
                <div className="card">
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div className="card">
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>
                <div className="card">
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <p>Desenvolvido por <a href="https://www.linkedin.com/in/yanderalves/" target="_blank">Alves</a></p>
        </footer>
    )
}

export default Footer;