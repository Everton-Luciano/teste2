import React, { useState} from "react";
import './styles.css';

import { Link } from "react-router-dom";

import logo from './img/logo.png';
import menu from './img/icon-menu.png';

const About = () => {
    const [displayGridSecond, setDisplayGridSecond] = useState<string>('flex');

    const handleButtonMenu = () => {
        if (displayGridSecond === 'flex') {
            setDisplayGridSecond('none');
        } else if (displayGridSecond === 'none') {
            setDisplayGridSecond('flex');
        }
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="grid-first">
                        <a href="/#" className="logo">
                            <img src={logo} alt="" className="logo" />
                        </a>
                        <button className="button-menu" onClick={handleButtonMenu}>
                            <img src={menu} alt="" className="button-menu" />
                        </button>
                    </div>
                    <div
                        className="grid-second"
                        style={{
                            display: displayGridSecond
                        }}
                    >
                        <a href="/#" className="nav-link">Marcar consulta</a>
                        <a href="/#" className="nav-link">Especialistas</a>
                        <a href="/#" className="nav-link">Recursos</a>
                        <a href="/#" className="nav-link">Blog</a>
                        <a href="/#" className="nav-link">Sobre</a>
                    </div>
                </div>
            </nav>
            <div>
                <Link to='/teste2'>Voltar</Link>
            </div>
        </>
    );
};

export default About;