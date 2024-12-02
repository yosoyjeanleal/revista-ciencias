// Lista de imágenes para el carrusel
const images = [
    "/img/Portada.png",
    "/img/pagina-2.png",
    "/img/pagina-3.png",
    "/img/pagina-4.png",
    "/img/pagina-5.png",
    "/img/pagina-6.png",
    "/img/pagina-7.png",
    "/img/pagina-8.png",
    "/img/pagina-9.png",
    "/img/pagina-10.png",
    "/img/pagina-11.png"
    
];

// Referencia al elemento de imagen
const currentImage = document.getElementById("current-image");

let currentIndex = 0;

// Función para actualizar la imagen mostrada
function updateImage() {
    currentImage.src = images[currentIndex];
}

// Evento para cambiar la imagen dependiendo del lado del clic
currentImage.addEventListener("click", (event) => {
    const imageWidth = currentImage.offsetWidth;
    const clickX = event.offsetX;

    if (clickX < imageWidth / 2) {
        // Clic en el lado izquierdo: ir a la imagen anterior
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    } else {
        // Clic en el lado derecho: ir a la imagen siguiente
        currentIndex = (currentIndex + 1) % images.length;
    }

    updateImage();
});
