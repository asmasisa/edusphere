import React, { useEffect } from 'react';

import Layout from '../../components/Layout/Layout'; // <-- Modifie le chemin ici
import './Home.css';
import coverImage from '../../assets/images/cover.png'; // Import de l'image
import coverImage2 from '../../assets/images/cover2.png'; // Import de l'image

const Home = () => {
    useEffect(() => {
        let currentIndex = 0;
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;
        const carouselInner = document.querySelector('.carousel-inner');

        if (!carouselInner || totalItems === 0) {
            console.error("Erreur : Carrousel non trouvé ou vide.");
            return;
        }

        function showSlide(index) {
            if (index >= totalItems) currentIndex = 0;
            else if (index < 0) currentIndex = totalItems - 1;
            else currentIndex = index;

            carouselInner.style.transform = `translateX(${-currentIndex * 100}%)`;
        }

        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        const interval = setInterval(nextSlide, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Layout>
            <header>
                <div className="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item"><img src="/images/1.png" alt="Image 1" /></div>
                        <div className="carousel-item"><img src="/images/2.png" alt="Image 2" /></div>
                        <div className="carousel-item"><img src="/images/4.png" alt="Image 3" /></div>
                    </div>
                </div>
            </header>

            <h1 className="h1ticket" id="niveaux">Les niveaux</h1>

            <div className="ticket-container" style={{ backgroundImage: `url(${coverImage})` }} >
                <div className="ticket">
                    <h2><img src="equation-physique.png" alt="" /> التعليم الثانوي</h2>
                    <ul>
                        <li><a href="#"> السنة أولى ثانوي </a></li>
                        <li><a href="#"> السنة ثانية ثانوي</a></li>
                        <li><a href="#"> السنة ثالثة ثانوي</a></li>
                        <li><a href="#"> مواضيع وحلول البكالوريا</a></li>
                    </ul>
                </div>
                <div className="ticket">
                    <h2><img src="world-book-day.png" alt="" /> التعليم المتوسط</h2>
                    <ul>
                        <li><a href="#"> السنة أولى متوسط</a></li>
                        <li><a href="#"> السنة ثانية متوسط</a></li>
                        <li><a href="#"> السنة ثالثة متوسط</a></li>
                        <li><a href="#"> السنة رابعة متوسط</a></li>
                        <li><a href="#"> مواضيع و حلول ش.ت.م</a></li>
                    </ul>
                </div>
                <div className="ticket">
                    <h2><img src="crayon.png" alt="" /> التعليم الابتدائي</h2>
                    <ul>
                        <li><a href="#"> السنة أولى ابتدائي</a></li>
                        <li><a href="#"> السنة الثانية ابتدائي</a></li>
                        <li><a href="#"> السنة الثالثة ابتدائي</a></li>
                        <li><a href="#"> السنة الرابعة ابتدائي</a></li>
                        <li><a href="#"> السنة الخامسة ابتدائي</a></li>
                        <li><a href="#"> مواضيع ش.ت. الابتدائي</a></li>
                    </ul>
                </div>
            </div>
            <div className="ticket22" style={{ backgroundImage: `url(${coverImage2})` }}>
                <h1 className="h2ticket" id="library">Our Learning Library</h1>
                <h3 className="pticket">
                    With thousands of digital and printable resources, find the best resource for your student.
                </h3>

                <div className="ticket-container2">
                    <div className="ticket2">
                        <h2><img src="/images/equation-physique.png" alt="Exams" /> Exam & Test</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quidem placeat repellat provident suscipit?</p>       
                        <button>Practice Now</button>
                    </div>

                    <div className="ticket2">
                        <h2><img src="/images/travail-en-equipe.png" alt="Projects" /> Projects</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloribus suscipit, culpa commodi eaque?</p>
                        <button>Search Now</button>
                    </div>

                    <div className="ticket2">
                        <h2><img src="/images/une-manette.png" alt="Games" /> Games</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quidem placeat repellat provident suscipit?</p>
                        <button>Play Now</button>
                    </div>

                    <div className="ticket2">
                        <h2><img src="/images/activites.png" alt="Plans" /> Plans</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button>Organize Now</button>
                    </div>
                </div>
            </div>
                      

            
        </Layout>
    );
};

export default Home;
