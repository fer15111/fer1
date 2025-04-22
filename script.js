document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel img");
    let index = 0;

    function changeImage() {
        images.forEach(img => img.style.display = "none");
        images[index].style.display = "block";
        index = (index + 1) % images.length;
    }

    setInterval(changeImage, 3000); // Cambia cada 3 segundos
    changeImage(); // Muestra la primera imagen al cargar
});
