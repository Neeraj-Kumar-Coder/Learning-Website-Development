function fireWorks() {
    let canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let ctx = canvas.getContext('2d');

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    let mouse = {
        x: undefined,
        y: undefined
    };

    let particles = [];
    window.addEventListener("click", (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
        let particleCount = 300;
        let angleIncrement = (2 * Math.PI) / particleCount;
        let power = 10;
        let radius = 3;
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle(mouse.x, mouse.y, radius, `hsl(${Math.random() * 360}, 100%, 50%)`, {
                x: Math.cos(angleIncrement * i) * Math.random() * power,
                y: Math.sin(angleIncrement * i) * Math.random() * power
            }));
        }
        init();
    });


    const gravity = 0.05;
    const friction = 0.99;

    class Particle {
        constructor(x, y, radius, color, velocity) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.radius = radius;
            this.velocity = velocity;
            this.alpha = 1;
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.restore();
        }

        update() {
            this.velocity.x *= friction;
            this.velocity.y *= friction;
            this.velocity.y += gravity;
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            this.alpha -= 0.005;
            this.draw();
        }
    };

    function init() {
        particles.forEach((particle) => {
            particle.draw();
        });
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        particles.forEach((particle, index) => {
            if (particle.alpha >= 0.005)
                particle.update();
            else
                particles.splice(index, 1);
        });
    }

    animate();
}

fireWorks();