import React from 'react';
import './Footer.css'; // Importez les styles spécifiques à la navigation


const Footer = () => {
    return (

        <>
        <footer className="footerclass">
            <img src="/images/logop.png" alt="Logo" /> {/* Assurez-vous que l'image est dans le dossier public/images */}
            <ul>
                <h3>Our Learning Library</h3>
                <li><a href="#">test&exams</a></li>
                <li><a href="#">projects</a></li>
                <li><a href="#">plans</a></li>
                <li><a href="#">games</a></li>
            </ul>
            <ul>
                <h3>Our Learning Library</h3>
                <li><a href="#">test&exams</a></li>
                <li><a href="#">projects</a></li>
                <li><a href="#">plans</a></li>
                <li><a href="#">games</a></li>
            </ul>
            <ul>
                <h3>Our Learning Library</h3>
                <li><a href="#">test&exams</a></li>
                <li><a href="#">projects</a></li>
                <li><a href="#">plans</a></li>
                <li><a href="#">games</a></li>
            </ul>
            <ul>
                <h3>Our Learning Library</h3>
                <li><a href="#">test&exams</a></li>
                <li><a href="#">projects</a></li>
                <li><a href="#">plans</a></li>
                <li><a href="#">games</a></li>
            </ul>
        </footer>

        <div className="footerclassdiv">
            <h3 id="cnt">Contactez nous</h3>
            <ul>
                <li><a href="#"><img src="/images/facebook.png" alt="Facebook" /></a></li>
                <li><a href="#"><img src="/images/instagram.png" alt="Instagram" /></a></li>
                <li><a href="#"><img src="/images/youtube.png" alt="YouTube" /></a></li>
                <li><a href="#"><img src="/images/email.png" alt="Email" /></a></li>
            </ul>
            <p>Copyright © 2025 EduSphere+.com</p>
        </div>
    </>



    );






};
export default Footer;