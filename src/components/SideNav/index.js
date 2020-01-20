import React from 'react';
import "./style.css";

const SideNav = () => (
    <div>
        <div >
        <ul id="slide-out" className="sidenav ">
        <li><a href="#!">Inicio</a></li>
                <li className="divider"></li>
                <li><a href="#!">Noticias</a></li>
                <li><a href="#!" className="dropdown-trigger" data-target="dropdown3">Departamentos</a></li>
                <li><a href="#!" className="dropdown-trigger" data-target="dropdown2" >Midias</a></li>
                <li><a href="#!" className="dropdown-trigger" data-target="dropdown1" >Eventos</a></li>
        </ul>
        </div>
        <ul id="dropdown1" className="dropdown-content">
                <li><a href="#!">Respire 2020</a></li>
                <li><a href="#!">Retiro de Homens</a></li>
                <li className="divider"></li>
                <li><a href="#!">Curadas para curar</a></li>
        </ul>
        <ul id="dropdown2" className="dropdown-content">
                <li><a href="#!">Videos</a></li>
                <li><a href="#!">Imagens</a></li>
                <li className="divider"></li>
                <li><a href="#!">Podcast</a></li>
        </ul>
        <ul id="dropdown3" className="dropdown-content">
                <li><a href="#!">Adolescente</a></li>
                <li><a href="#!">Jovens
                </a></li>
                <li className="divider"></li>
                <li><a href="#!">Casais</a></li>
        </ul>
    </div>
)

export default SideNav;