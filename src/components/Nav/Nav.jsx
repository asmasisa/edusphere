import React, { useState, useEffect } from "react";
import "./Nav.css"; // Importation du CSS
import { FaUser, FaSignInAlt, FaSearch, FaBars } from "react-icons/fa"; // Ajout de FaSearch et FaBars

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setSearchVisible(true);
            } else {
                setSearchVisible(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav>
            <div className="nav-top">
                <img className="logo" src="/images/logop.png" alt="Logo" />

                {/* 🔍 Loupe en mode mobile */}
                {isMobile && (
                    <button
                        type="button"
                        className="search-icon"
                        onClick={() => setSearchVisible(!searchVisible)}
                    >
                        <FaSearch />
                    </button>
                )}
<div className={`search-info ${searchVisible ? "active" : ""}`}>
    <form>
        <input type="text" placeholder="Rechercher..." />
        <button type="submit" className="search-btn">
            <FaSearch />
        </button>
    </form>
</div>

                {/* Boutons login */}
                <div className="login">
                    {isMobile ? (
                        <>
                            <button><FaUser className="icon" /></button>
                            <button><FaSignInAlt className="icon" /></button>
                        </>
                    ) : (
                        <>
                            <button><FaUser className="icon" /> <span>Se connecter</span></button>
                            <button><FaSignInAlt className="icon" /> <span>S'inscrire</span></button>
                        </>
                    )}
                </div>
            </div>

            {/* 🍔 Menu Burger */}
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                <FaBars />
            </button>

            {/* 📌 Liens du menu */}
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li><a href="#home">Homepage</a></li>
                <li><a href="#niveaux">Les niveaux</a></li>
                <li><a href="#library">Our Learning Library</a></li>
                <li><a href="#cnt">Contact</a></li>
                <li><a href="#home">التعليم الابتدائي   </a></li>
                <li><a href="#home">التعليم المتوسط    </a></li>
                <li><a href="#contact">  التعليم الثانوي  </a></li>
            </ul>
        </nav>
    );
};

export default Nav;

