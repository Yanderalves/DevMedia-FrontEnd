import React from "react";
import './style.css';

export default function Card(props){
    return (
        <div className="card">
            <h3>{props.title}</h3>
            <img src={props.imageSource}></img>
            <p>{props.content}</p>
        </div>
    );
}