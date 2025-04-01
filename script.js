const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
let currentImage = 0;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const counter = document.querySelector('.counter');

function showImage() {
    const img = document.querySelector('img');
    img.src = images[currentImage];
    counter.textContent = `Изображение ${currentImage + 1} из ${images.length}`;
}

prevBtn.addEventListener('click', () => {
    currentImage = (currentImage === 0) ? images.length - 1 : currentImage - 1;
    showImage();
});

nextBtn.addEventListener('click', () => {
    currentImage = (currentImage === images.length - 1) ? 0 : currentImage + 1;
    showImage();
});

// Инициализация
showImage();