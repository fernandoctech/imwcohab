import React from 'react';
import './style.css';

const Slider =()=>(
    <div className="carousel carousel-slider center container-manual">
        <div className="carousel-fixed-item center">
            <a className="btn waves-effect white grey-text darken-text-2">Botão</a>
        </div>
        <div className="carousel-item red white-text" href="#one!">
            <h2>Noticia 1</h2>
            <p className="white-text"> Prévia da Noticia</p>
        </div>
        <div className="carousel-item blue white-text" href="#one!">
            <h2>Noticia 2</h2>
            <p className="white-text"> Prévia da Noticia</p>
        </div>
        <div className="carousel-item teal white-text" href="#one!">
            <h2>Noticia 3</h2>
            <p className="white-text"> Prévia da Noticia</p>
        </div>

    </div>
);

export default Slider;