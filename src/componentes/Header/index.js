import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    window.onscroll = () => {
        if (document.body.scrollTop > 510 || document.documentElement.scrollTop > 510) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-70px";
        }
    }
    return (
        <div>
            <div className="header">
                <div id="navbar" className="nav">
                    <div className="nav-conteudo">
                        <img className="nav-logo" src="/assets/wsHeader.png" alt="logo" title="logo" width="40px" />
                      
                        <Link to="/cadastro"><button className="nav-botao"><span>Quero ser WSbank</span></button></Link>
                    
                    </div>
                </div>
                <img className="logotipo" src="/assets/wsHeader.png" alt="logo" title="logo" />
                <div className="header-conteudo">
                    <div className="header-item">
                        <h1 className="header-box-texto">Cartão de crédito com anuidade zero. Conta digital prática e sem custos.</h1>
                    </div>
                    <div className="header-form">
                        <span className="header-form-texto">Com o WSbank, a resposta vem em menos de 1 minuto</span>
                        <input type="text" className="header-form-input" placeholder="Digite seu CPF" />
                        <span className="header-botao">Continuar<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 21 20" role="img">
                                <path d="M18.5 10H2.5M18.5 10L12 16.5M18.5 10L12 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path>
                            </svg></span>
                            
                    </div>
                </div>
                <div style={{ height: 2000 }}></div>
            </div>
        </div>
    );
}

export default Header;