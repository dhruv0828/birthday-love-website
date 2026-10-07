import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animId;
    let particles = [];
    let floatingHearts = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Star particles
    class Star {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.3;
        this.opacity = Math.random() * 0.6 + 0.1;
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
        this.twinkleDir = Math.random() > 0.5 ? 1 : -1;
        this.baseOpacity = this.opacity;
      }
      update() {
        this.opacity += this.twinkleSpeed * this.twinkleDir;
        if (this.opacity > this.baseOpacity + 0.3 || this.opacity < 0.05) {
          this.twinkleDir *= -1;
        }
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.opacity);
        ctx.fillStyle = '#fdf0ec';
        ctx.shadowBlur = 4;
        ctx.shadowColor = '#c4637a';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Tiny floating heart
    class FloatingHeart {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 20;
        this.size = Math.random() * 12 + 6;
        this.speedY = Math.random() * 0.4 + 0.2;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.3 + 0.05;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.01;
      }
      update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotSpeed;
        if (this.y < -30) this.reset();
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = '#c4637a';
        const s = this.size;
        ctx.beginPath();
        ctx.moveTo(0, s * 0.3);
        ctx.bezierCurveTo(0, 0, -s * 0.5, 0, -s * 0.5, -s * 0.25);
        ctx.bezierCurveTo(-s * 0.5, -s * 0.6, 0, -s * 0.6, 0, -s * 0.3);
        ctx.bezierCurveTo(0, -s * 0.6, s * 0.5, -s * 0.6, s * 0.5, -s * 0.25);
        ctx.bezierCurveTo(s * 0.5, 0, 0, 0, 0, s * 0.3);
        ctx.fill();
        ctx.restore();
      }
    }

    // Init
    const STAR_COUNT = Math.min(150, Math.floor((canvas.width * canvas.height) / 8000));
    const HEART_COUNT = 12;

    for (let i = 0; i < STAR_COUNT; i++) particles.push(new Star());
    for (let i = 0; i < HEART_COUNT; i++) {
      const h = new FloatingHeart();
      h.y = Math.random() * canvas.height; // spread initial positions
      floatingHearts.push(h);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      floatingHearts.forEach(h => { h.update(); h.draw(); });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg-canvas"
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
    />
  );
}
