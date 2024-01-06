var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    centeredSlides: true,
    loop: true,
    speed: 1000,
    slidesPerView: 2,
    spaceBetween: 0,
    mousewheel: true,
    allowTouchMove: false,
    coverflowEffect: {
        depth: 200,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
    },
});

const arrows = document.querySelectorAll(".swiper-button");
const showArrows = document.getElementById("arrows");
var count = 1;

showArrows.addEventListener("click", () => {
    arrows.forEach(element => {
        if (count % 2) {
            element.classList.remove("hide-arrow");
            showArrows.classList.add("active");
        } else {
            element.classList.add('hide-arrow');
            showArrows.classList.remove("active");
        };
    });
    count++;
});