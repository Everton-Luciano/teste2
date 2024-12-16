import React, { useState } from "react";
import './styles.scss';

import logo from './img/logo.png';
import menu from './img/icon-menu.png';
import imageButton from './img/icon-access.png';
import image from './img/img-employees.png';
import icon from './img/icon-verify.png';

const Home = () => {
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
            <nav className="dark-navbar">
                <div className="navbar-container">
                    <div className="grid-first">
                        <a href="/teste2/about" className="logo">
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
                        <button className='dark-access'>
                            <img src={imageButton} className="icon-access" alt="" />
                            Acessar
                        </button>
                    </div>
                </div>
            </nav>
            <section className="dark-first-section">
                <div className="presentation">
                    <div className="software">
                        <img src={icon} alt="" className="software" />
                        <p className="software">Melhor Sotware para sua saúde</p>
                    </div>
                    <p className="title">
                        Encontre os melhores especialistas da sua região com a klep.
                    </p>
                    <p className="description">
                        Entenda como a saúde mental pode ser afetada com o envelhecimento e como ouvir os efeitos emocionais nessa fase.
                    </p>
                </div>
                <div className="image">
                    <img src={image} className='image' alt="" />
                </div>
            </section>
        </>
    );
};

export default Home;