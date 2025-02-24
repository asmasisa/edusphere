import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';


const Layout = ({ children }) => {
    return (
        <div>
            <Nav />                 {/* Barre de navigation */}
            <main>{children}</main> {/* Contenu spécifique à chaque page */}
            <Footer />              {/* Pied de page */}
        </div>
    );
};

export default Layout;