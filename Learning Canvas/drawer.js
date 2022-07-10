// Selecting Canvas
let canvas = document.getElementById("canvas");

// Resizing the canvas
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener("resize", () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    init();
});

// Getting the context
let ctx = canvas.getContext('2d');

// Capturing the mouse position
let mouse = {
    x: undefined,
    y: undefined
};

window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

/*
// Rectangle
ctx.fillStyle = "yellow";
ctx.fillRect(100, 100, 300, 200);
ctx.fillStyle = "red";
ctx.fillRect(700, 300, 300, 200);

// Line
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(500, 500);
ctx.lineTo(0, 0);
ctx.lineTo(200, 700);
ctx.lineTo(200, 200);
ctx.stroke();

// Circle
for (let index = 0; index < 50; index++) {
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    ctx.beginPath();
    ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.stroke();
}
*/


function Circle(x, y, radius, dx, dy, r, g, b) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.g = g;
    this.b = b;
    this.color = `rgb(${this.r}, ${this.g},${this.b})`;

    this.draw = () => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    this.update = () => {
        if (this.y + this.radius >= innerHeight || this.y - this.radius <= 0)
            this.dy *= -1;
        if (this.x + this.radius >= innerWidth || this.x - this.radius <= 0)
            this.dx *= -1;
        this.x += this.dx;
        this.y += this.dy;

        if (Math.abs(this.x - mouse.x) <= 2 * this.radius && Math.abs(this.y - mouse.y) <= 2 * this.radius)
            this.color = "red";
        else
            this.color = `rgb(${this.r}, ${this.g},${this.b})`;
        this.draw();
    }
}

let circles = [];
let number_of_circles = 50;

function init() {
    circles = [];
    for (let count = 0; count < number_of_circles; count++) {
        let radius = Math.random() * 20 + 30;
        let x = Math.random() * (innerWidth - 2 * radius) + radius;
        let y = Math.random() * (innerHeight - 2 * radius) + radius;
        let dx = Math.random() * 5 + 5;
        let dy = Math.random() * 5 + 5;
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        circles.push(new Circle(x, y, radius, dx, dy, r, g, b));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    circles.forEach((element) => {
        element.update();
    });
}

init();
animate();