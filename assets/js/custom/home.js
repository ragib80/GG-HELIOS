const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

$(document).ready(function () {
const carousel = $('#videoCarousel');
const videos = $('#videoCarousel video');

// Disable Bootstrap auto-slide
carousel.removeAttr('data-bs-ride');

function playActiveVideo() {
const activeVideo = $('.carousel-item.active video')[0];
if (activeVideo) {
    activeVideo.currentTime = 0;
    activeVideo.play().catch(err => console.warn("Autoplay prevented:", err));
}
}

function stopAllVideos() {
videos.each(function () {
    this.pause();
    this.currentTime = 0;
});
}

function switchSlide() {
carousel.carousel('next');
}

setInterval(() => {
switchSlide();
}, 35000); 


carousel.on('slid.bs.carousel', function () {
stopAllVideos();
playActiveVideo();
});


playActiveVideo();
});
