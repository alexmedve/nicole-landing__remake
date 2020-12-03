var test = new hoverEffect({
    parent: document.querySelector('.home__col--1'),
    intensity: 0.3,
    image1: '../assets/img/home-1.png',
    image2: '../assets/img/home-2.jpeg',
    displacementImage: '../assets/img/distorsion2.png'
});

document.querySelector('canvas').style.removeProperty('width');
document.querySelector('canvas').style.removeProperty('height');