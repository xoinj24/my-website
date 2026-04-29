const images = ['../images/1.webp', '../images/2.webp'];
let currentIndex = 0;

const imgElement = document.getElementById('mainImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

nextBtn.onclick = function() {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
};

prevBtn.onclick = function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imgElement.src = images[currentIndex];
};
