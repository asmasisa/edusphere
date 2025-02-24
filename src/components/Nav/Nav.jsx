import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <div className="nav-top">
                <img className="logo" src="/images/logop.png" alt="Logo" />
                <div className="search-info">
                    <form action="search_info">
                        <input type="text" placeholder="Rechercher..." name="search" />
                        <button>🔍</button>
                    </form>
                </div>
                <div className="login">
                    <button>Se connecter</button>
                    <button>S'inscrire</button>
                </div>
            </div>
            <button className="menu-toggle nav-button">☰</button>
            <ul className="nav-links">
                <li><a className="active" href="#home">homepage</a></li>
                <li><a href="#niveaux" className="smooth-scroll">Les niveaux</a></li>
                <li><a href="#library" className="smooth-scroll">Our Learning Library</a></li>
                <li><a className="active" href="#cnt">contact</a></li>
                <li><a className="active" href="#home">الابتدائي</a></li>
                <li><a href="#about">المتوسط</a></li>
                <li><a href="#contact">الثانوي</a></li>
            </ul>
        </nav>
    );
};

export default Nav; // ✅ Assure-toi que c'est bien présent !
