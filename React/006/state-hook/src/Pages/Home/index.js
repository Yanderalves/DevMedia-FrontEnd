import React, {useState} from "react";

import './style.css';

export default function Home(){

    const [randomNumber, setRandomNumber] = useState(0);

    const generateRandomNumber = () => {
        const newNumber = Math.floor(Math.random() * 99 + 1);
        setRandomNumber(newNumber);
    }

    return(
        <div className="container">
            <h3>
                Número aleatório
            </h3>
            <h1>
                {randomNumber}
            </h1>
            <div className="button-area">
                <p>
                    Clique no botão abaixo para gerar um numero aleatório
                </p>
                <button onClick={generateRandomNumber}>Gerar Número</button>
            </div>
        </div>
    )
}