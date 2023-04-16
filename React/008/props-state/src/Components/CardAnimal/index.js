import React from "react";
import './style.css';

import Imagedog from '../../assets/dog.jpg'
import Imagecat from '../../assets/cat.jpg'

const CardAnimal = (props) => {
    return(
        <div className="card-animal">
            <img src={props.type == "dog" ? Imagedog : Imagecat  }></img>
        </div>
    )
}

export default CardAnimal;