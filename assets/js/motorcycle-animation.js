class Motorcycle {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.x = -100;
    this.y = canvas.height / 2;
    this.speed = 2;
    this.particles = [];
    this.trail = [];
  }

  drawMotorcycle(x, y) {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(x, y);

    // 车身
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(40, -20);
    ctx.lineTo(70, -20);
    ctx.lineTo(90, 0);
    ctx.lineTo(0, 0);
    ctx.fillStyle = '#4a9eff';
    ctx.fill();

    // 车轮
    ctx.beginPath();
    ctx.arc(20, 10, 15, 0, Math.PI * 2);
    ctx.arc(70, 10, 15, 0, Math.PI * 2);
    ctx.fillStyle = '#333';
    ctx.fill();

    // 车手
    ctx.beginPath();
    ctx.arc(45, -30, 10, 0, Math.PI * 2);
    ctx.fillStyle = '#4a9eff';
    ctx.fill();

    ctx.restore();
  }

  createParticle() {
    return {
      x: this.x + 70,
      y: this.y + 10,
      size: Math.random() * 3 + 1,
      speedX: -Math.random() * 3,
      speedY: (Math.random() - 0.5) * 2,
      life: 1
    };
  }

  updateParticles() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.speedX;
      p.y += p.speedY;
      p.life -= 0.02;

      if (p.life <= 0) {
        this.particles.splice(i, 1);
      }
    }

    if (Math.random() < 0.3) {
      this.particles.push(this.createParticle());
    }
  }

  drawParticles() {
    this.ctx.save();
    for (const p of this.particles) {
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(74, 158, 255, ${p.life})`;
      this.ctx.fill();
    }
    this.ctx.restore();
  }

  update() {
    this.x += this.speed;
    if (this.x > this.canvas.width + 100) {
      this.x = -100;
      this.trail = [];
    }

    this.trail.push({ x: this.x, y: this.y });
    if (this.trail.length > 50) {
      this.trail.shift();
    }

    this.updateParticles();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // 绘制轨迹
    if (this.trail.length > 1) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.trail[0].x, this.trail[0].y);
      for (let i = 1; i < this.trail.length; i++) {
        this.ctx.lineTo(this.trail[i].x, this.trail[i].y);
      }
      this.ctx.strokeStyle = 'rgba(74, 158, 255, 0.2)';
      this.ctx.lineWidth = 2;
      this.ctx.stroke();
    }

    this.drawParticles();
    this.drawMotorcycle(this.x, this.y);
  }
}

function initMotorcycleAnimation() {
  const header = document.querySelector('.page__hero--overlay');
  if (!header) return;

  const canvas = document.createElement('canvas');
  canvas.classList.add('motorcycle-canvas');
  canvas.width = header.offsetWidth;
  canvas.height = 200;

  header.innerHTML = '';
  header.appendChild(canvas);

  const motorcycle = new Motorcycle(canvas);

  function animate() {
    motorcycle.update();
    motorcycle.draw();
    requestAnimationFrame(animate);
  }

  animate();
}

document.addEventListener('DOMContentLoaded', initMotorcycleAnimation); 