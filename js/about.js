const showcase = document.getElementById("showcase");

let showcaseStep = 1;

setInterval(() => {
    if(showcaseStep === 4)
        showcaseStep = 1;
    else
        showcaseStep++;
    showcase.src = `./assets/img/about/showcase-${showcaseStep}.jpeg`;
}, 1300);