import React from 'react';
import './style.css';

export default function Banner(props) {
    return (
        <section className={`banner ${props.darkTheme ? 'dark' : ''}`}>
            <div className="image-banner">

            </div>
            <div className="text-banner">
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <div className="container-title">
                    <h1>Agência de Branding</h1>
                    <h2>e design digital</h2>
                </div>
            </div>
        </section>
    );
};
