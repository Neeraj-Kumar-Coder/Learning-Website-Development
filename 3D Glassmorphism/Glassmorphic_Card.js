let body = document.querySelector("body");
let cards = document.querySelectorAll(".card");

body.addEventListener("mousemove", (event) => {
    const maxRotation = 30;

    let x = event.clientX;
    let y = event.clientY;

    let centerX = body.clientWidth / 2;
    let centerY = body.clientHeight / 2;

    let rotationX = ((x - centerX) / centerX) * maxRotation;
    let rotationY = ((y - centerY) / centerY) * maxRotation;

    for (const card of cards) {
        card.style.transform = `rotateX(${rotationY}deg) rotateY(${-1 * rotationX}deg)`;
    }
});