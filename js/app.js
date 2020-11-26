var test = new hoverEffect({
    parent: document.querySelector('.hero__col--1'),
    intensity: 0.3,
    image1: '../assets/img/hero-1.png',
    image2: '../assets/img/hero-2.jpeg',
    displacementImage: '../assets/img/distorsion2.png'
});

document.querySelector('canvas').style.removeProperty('width');
document.querySelector('canvas').style.removeProperty('height');