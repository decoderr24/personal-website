import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  brightness: number;
  targetBrightness: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  angle: number;
}

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const starCount = Math.floor((window.innerWidth * window.innerHeight) / 5000);
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.05, // Slower, deeper background movement
          vy: (Math.random() - 0.5) * 0.05,
          radius: Math.random() * 1.5,
          brightness: Math.random(),
          targetBrightness: Math.random()
        });
      }
    };

    const createShootingStar = () => {
      const startX = Math.random() * canvas.width;
      const startY = Math.random() * (canvas.height / 2); // Mostly top half
      const angle = Math.PI / 4 + (Math.random() * 0.2); // Diagonal down-right
      
      shootingStars.push({
        x: startX,
        y: startY,
        length: 150 + Math.random() * 100,
        speed: 25 + Math.random() * 15,
        opacity: 1,
        angle: angle
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 1. Update and draw background stars
      stars.forEach((star, i) => {
        star.x += star.vx;
        star.y += star.vy;

        // Twinkle effect
        if (Math.random() < 0.01) {
            star.targetBrightness = Math.random();
        }
        star.brightness += (star.targetBrightness - star.brightness) * 0.05;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Draw Star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness * 0.8})`;
        ctx.fill();

        // Constellation effect (very subtle)
        for (let j = i + 1; j < i + 4 && j < stars.length; j++) {
          const otherStar = stars[j];
          const dx = star.x - otherStar.x;
          const dy = star.y - otherStar.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 60) {
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(otherStar.x, otherStar.y);
            const opacity = (1 - distance / 60) * 0.1;
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`; 
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      // 2. Update and draw shooting stars
      if (Math.random() < 0.015) { 
        createShootingStar();
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];
        
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity -= 0.02;

        const endX = star.x - Math.cos(star.angle) * star.length;
        const endY = star.y - Math.sin(star.angle) * star.length;

        const gradient = ctx.createLinearGradient(star.x, star.y, endX, endY);
        gradient.addColorStop(0, `rgba(160, 190, 255, ${star.opacity})`);
        gradient.addColorStop(1, `rgba(160, 190, 255, 0)`);

        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.stroke();

        if (star.opacity <= 0 || star.x > canvas.width + 200 || star.y > canvas.height + 200) {
          shootingStars.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ background: 'linear-gradient(to bottom, #0B0D17 0%, #13162D 100%)' }}
    />
  );
};

export default Starfield;