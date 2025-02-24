document.addEventListener("DOMContentLoaded", function () {
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

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    setInterval(nextSlide, 6000);
});
