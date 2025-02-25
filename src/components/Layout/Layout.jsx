import React from 'react';
import Nav from '../Nav/Nav';  // Assure-toi d'importer correctement
import Footer from '../Footer/Footer';  // Assure-toi d'importer correctement

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <main>{children}</main>
            <Footer />
           
        </>
    );
};

export default Layout;

