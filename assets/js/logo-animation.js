class Particle {
  constructor(x, y, targetX, targetY) {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.targetX = x;
    this.targetY = y;
    this.speed = 0.05;
    this.size = 2;
    this.velocityX = 0;
    this.velocityY = 0;
    this.color = '#4a9eff';
  }

  update() {
    const dx = this.targetX - this.x;
    const dy = this.targetY - this.y;
    this.velocityX += dx * this.speed;
    this.velocityY += dy * this.speed;
    this.velocityX *= 0.95;
    this.velocityY *= 0.95;
    this.x += this.velocityX;
    this.y += this.velocityY;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initLogo() {
  const canvas = document.createElement('canvas');
  canvas.width = 60;
  canvas.height = 60;
  canvas.classList.add('site-logo-canvas');

  const ctx = canvas.getContext('2d');
  const particles = [];
  const points = [];

  // 创建 "M" 字母的点
  const letterM = [
    [10, 50], [10, 10], // 左竖线
    [10, 10], [30, 30], // 左斜线
    [30, 30], [50, 10], // 右斜线
    [50, 10], [50, 50]  // 右竖线
  ];

  // 在字母轮廓上创建点
  for (let i = 0; i < letterM.length; i += 2) {
    const start = letterM[i];
    const end = letterM[i + 1];
    const steps = 10;

    for (let j = 0; j <= steps; j++) {
      const x = start[0] + (end[0] - start[0]) * (j / steps);
      const y = start[1] + (end[1] - start[1]) * (j / steps);
      points.push([x, y]);
    }
  }

  // 为每个点创建粒子
  points.forEach(point => {
    particles.push(new Particle(point[0], point[1], point[0], point[1]));
  });

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
      particle.update();
      particle.draw(ctx);
    });

    requestAnimationFrame(animate);
  }

  // 将 canvas 插入到页面中
  const logoContainer = document.querySelector('.site-logo');
  if (logoContainer) {
    logoContainer.innerHTML = '';
    logoContainer.appendChild(canvas);
  } else {
    const nav = document.querySelector('.greedy-nav');
    const link = document.createElement('a');
    link.href = '/myblogs/';
    link.classList.add('site-logo');
    link.appendChild(canvas);
    nav.insertBefore(link, nav.firstChild);
  }

  // 开始动画
  animate();
}

// 页面加载完成后初始化 logo
document.addEventListener('DOMContentLoaded', initLogo); 