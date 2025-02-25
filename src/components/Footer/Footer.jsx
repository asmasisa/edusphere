import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        

            <>
               <footer className="footerclass">
                <img src="/images/logop.png" alt="Logo" /> {/* Assurez-vous que l'image est correcte */}
                
                {/* Une seule fois au lieu de quatre ! */}
                <ul>
                    <h3>Our Learning Library</h3>
                    <li><a href="#">Test & Exams</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Plans</a></li>
                    <li><a href="#">Games</a></li>
                </ul>
                <ul>
                    <h3>Our Learning Library</h3>
                    <li><a href="#">Test & Exams</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Plans</a></li>
                    <li><a href="#">Games</a></li>
                </ul>
                <ul>
                    <h3>Our Learning Library</h3>
                    <li><a href="#">Test & Exams</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Plans</a></li>
                    <li><a href="#">Games</a></li>
                </ul>
               
            </footer>

            <div className="footerclassdiv">
                <h3 id="cnt">Contactez-nous</h3>
                <ul>
                    <li><a href="#"><img src="/images/facebook (1).png" alt="Facebook" /></a></li>
                    <li><a href="#"><img src="/images/instagram (1).png" alt="Instagram" /></a></li>
                    <li><a href="#"><img src="/images/youtube (1).png" alt="YouTube" /></a></li>
                    <li><a href="#"><img src="/images/e-mail(1).png" alt="Email" /></a></li>
                </ul>
                <p>Copyright © 2025 EduSphere+.com</p>
            </div>
        </>
    
    
    
        );
};

export default Footer;
