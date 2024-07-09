document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const particles = [];

  function initParticles() {
    const numberOfParticles = Math.floor((canvas.width * canvas.height) / 800);

    for (let i = 0; i < numberOfParticles; i++) {
      particles.push(new Particle());
    }
  }

  function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.color = 'rgba(0,255,0,' + Math.random() + ')';

    this.update = function () {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > canvas.width) {
        this.speedX = -this.speedX;
      }

      if (this.y < 0 || this.y > canvas.height) {
        this.speedY = -this.speedY;
      }
    };

    this.draw = function () {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    };
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });

    requestAnimationFrame(animateParticles);
  }

  initParticles();
  animateParticles();
});
