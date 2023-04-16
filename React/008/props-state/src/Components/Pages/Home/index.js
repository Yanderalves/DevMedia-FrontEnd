import React, {useState} from "react";
import './style.css';

import Header from "../../Header"
import CardAnimal from "../../CardAnimal"
import CardInfo from "../../CardInfo"

const Home = () => {

    const [typeComponentCard, setTypeDoComponentCard] = useState("dog");

    const changeState = () => {
    if (typeComponentCard === "dog") {
        setTypeDoComponentCard("cat");
    } else {
        setTypeDoComponentCard("dog");
    }
    };

    return(
        <section className="home">
            <Header changeAnimal={changeState} />
            <CardAnimal type={typeComponentCard} />
            <CardInfo type={typeComponentCard} />
        </section>
    )
}

export default Home;