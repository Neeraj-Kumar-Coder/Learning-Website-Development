function galacticTrails() {
    let canvas = document.getElementById("canvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });

    let ctx = canvas.getContext("2d");

    const colors = ["#6018c0", "#4830a8", "#481848", "#601878", "#301878"];

    let rotationSpeed = 0.001;
    let blurRadius = 10;
    class Particle {
        constructor(distFromCenter, angle, radius, color) {
            this.radius = radius;
            this.color = color;
            this.angle = angle;
            this.distFromCenter = distFromCenter;
        }

        draw() {
            let x = window.innerWidth / 2 + this.distFromCenter * Math.cos(this.angle);
            let y = window.innerHeight / 2 + this.distFromCenter * Math.sin(this.angle);
            ctx.beginPath();
            ctx.shadowColor = this.color;
            ctx.shadowBlur = blurRadius;
            ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }

        update() {
            this.angle = (this.angle + rotationSpeed) % (2 * Math.PI);
            this.draw();
        }
    }

    let particles = [];
    let mouseDown = false;
    function init() {
        particles = [];
        let numberOfParticles = 500;
        let margin = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));
        for (let i = 0; i < numberOfParticles; i++) {
            let distFromCenter = Math.random() * margin / 2;
            let rotation = Math.random() * 2 * Math.PI;
            let radius = Math.random() * 3;
            let color = colors[Math.floor(Math.random() * colors.length)];
            particles.push(new Particle(distFromCenter, rotation, radius, color));
            particles.at(particles.length - 1).update();
        }
    }

    let alpha = 1;
    function animate() {
        requestAnimationFrame(animate);
        ctx.fillStyle = `rgba(10, 10, 10, ${alpha})`;
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

        particles.forEach((particle) => {
            particle.update();
        });
        if (mouseDown) {
            rotationSpeed = Math.min(0.01, rotationSpeed + 0.0001);
            alpha = Math.max(0.1, alpha - 0.01);
            blurRadius = 0;
        }
        else {
            rotationSpeed = Math.max(0.001, rotationSpeed - 0.0001);
            alpha = Math.min(1, alpha + 0.01);
            if (alpha == 1) blurRadius = 10;
        }
    }

    window.addEventListener("mousedown", () => {
        mouseDown = true;
    });

    window.addEventListener("mouseup", () => {
        mouseDown = false;
    });

    init();
    animate();
}

galacticTrails();