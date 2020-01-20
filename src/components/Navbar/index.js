/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";

const Navbar = () => (
    <div>
    <nav className="painel teal">
    
    <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <div className="nav-wrapper container">
        
            <a className="brand-logo " href="#" >Cohab</a>
            <ul className="right hide-on-med-and-down person">
                <li><a href="#!">Inicio</a></li>
                <li className="divider"></li>
                <li><a href="#!">Noticias</a></li>
                <li><a href="#!" className="dropdown-trigger" data-target="drop3">Departamentos</a></li>
                <li><a href="#!" className="dropdown-trigger" data-target="drop2" >Midias</a></li>
                <li><a href="#!" className="dropdown-trigger" data-target="drop1" >Eventos</a></li>
                <li>
                <button className="btn bt waves-effect waves-light" type="submit" name="action">Login</button>
                </li>
                
            </ul>
            
        </div>
            
        <ul id="drop1" className="dropdown-content">
                <li><a href="#!">Inicio</a></li>
                <li><a href="#!">Noticias</a></li>
                <li className="divider"></li>
                <li><a href="#!">Midias</a></li>
        </ul>
        <ul id="drop2" className="dropdown-content">
                <li><a href="#!">Videos</a></li>
                <li><a href="#!">Imagens</a></li>
                <li className="divider"></li>
                <li><a href="#!">Podcast</a></li>
        </ul>
        <ul id="drop3" className="dropdown-content">
                <li><a href="#!">Adolescente</a></li>
                <li><a href="#!">Jovens
                </a></li>
                <li className="divider"></li>
                <li><a href="#!">Casais</a></li>
        </ul>
        
    </nav>
    </div>
);
export default Navbar;