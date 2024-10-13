import React from "react";
import './styles.scss';

import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="error-page">
            <div className="message-box">
                <div className="content">
                    <h1>Ops!!! Página não encontrada.</h1>
                    <label>Clique no botão abaixo para voltar à página principal.</label>
                    <Link to="/teste2/about"><button>Voltar</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;