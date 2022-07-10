// Capturing the canvas element
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

// Some utility functions
function getRandomNumber(low, high) {
    return Math.random() * (high - low + 1) + low;
}

function getRandomColor() {
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    return `rgb(${red}, ${green}, ${blue})`;
}

function distance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}

// Physics of collision
function collisionHandler() {
    ;
}

// Driver code

function Ball(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = getRandomColor();
    this.mass = 1;
    this.vx = getRandomNumber(5, 7);
    this.vy = getRandomNumber(5, 7);

    this.draw = () => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    this.update = () => {
        if (this.x + this.vx >= innerWidth - this.radius || this.x <= this.radius)
            this.vx *= -1;
        if (this.y + this.vy >= innerHeight - this.radius || this.y <= this.radius)
            this.vy *= -1;

        this.x += this.vx;
        this.y += this.vy;

        for (let i = 0; i < balls.length; i++) {
            if (balls[i] != this && distance(this.x, this.y, balls[i].x, balls[i].y) <= this.radius + balls[i].radius) {
                collisionHandler(this, balls[i]);
            }
        }
        this.draw();
    }
}

let balls = [];
const number_of_balls = 2;
const restitution = 1;

function init() {
    balls = [];
    for (let i = 0; i < number_of_balls; i++) {
        let radius = 30;
        let x = getRandomNumber(radius, innerWidth - radius);
        let y = getRandomNumber(radius, innerHeight - radius);
        let collide = false;

        // Checking for colliding spawns
        for (let j = 0; j < balls.length; j++) {
            if (distance(x, y, balls[j].x, balls[j].y) <= radius + balls[j].radius) {
                i--;
                collide = true;
                break;
            }
        }
        if (!collide)
            balls.push(new Ball(x, y, radius));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    balls.forEach((element) => {
        element.update();
    });
}

init();
animate();