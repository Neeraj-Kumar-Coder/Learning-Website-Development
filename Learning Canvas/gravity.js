let canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

let ctx = canvas.getContext('2d');

function Ball(x, y, radius, gravity, elasticity) {
    this.x = x;
    this.y = y;
    this.dy = 0;
    this.radius = radius;
    this.gravity = gravity;
    this.elasticity = elasticity;

    this.draw = () => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
    }

    this.update = () => {
        this.y = Math.min(canvas.height - this.radius, this.y + this.dy);
        if (canvas.height - this.y <= this.radius) {
            this.dy *= -this.elasticity;
        }
        else {
            this.dy += this.gravity;
        }
        console.log(this.dy);
        this.draw();
    }
}

let ball;
function init() {
    ball = new Ball(innerWidth / 2, 30, 30, 1, 0.7);
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.update();
}

init();
animate();