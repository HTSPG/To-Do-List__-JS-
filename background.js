const body = document.querySelector("body");

function bgimage() {
    const image = new Image();
    image.src = `background/bg1.jpg`;
    image.classList.add("bgimage");
    body.prepend(image);
}

function init() {
    bgimage();
}

init();