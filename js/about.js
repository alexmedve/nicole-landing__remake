const image1 = document.querySelector(".about__hero-images__image--1");

image1.classList.add("u-opacity-in");

setInterval(() => {
    image1.classList.add("u-opacity-in");
    setTimeout(() => {
        image1.classList.remove("u-opacity-out");
    }, 700);
    setTimeout(() => {
        image1.classList.add("u-opacity-out");
    }, 2300);
    setTimeout(() => {
        image1.classList.add("u-opacity-out");
    }, 3000);
}, 4000);