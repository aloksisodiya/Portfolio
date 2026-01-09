import React, { useRef, useEffect } from 'react';

function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

function createStars(num, width, height) {
  const stars = [];
  for (let i = 0; i < num; i++) {
    stars.push({
      x: randomBetween(0, width),
      y: randomBetween(0, height),
      r: randomBetween(0.5, 1.8),
      speed: randomBetween(0.05, 0.2),
      alpha: randomBetween(0.5, 1),
    });
  }
  return stars;
}

const GalaxyBackground = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const earthAngleRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Create stars
    starsRef.current = createStars(250, width, height);

    function drawGalaxy() {
      ctx.clearRect(0, 0, width, height);
      // Draw faint milky way arc
      const grad = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width/2);
      grad.addColorStop(0, 'rgba(255,255,255,0.08)');
      grad.addColorStop(0.5, 'rgba(100,100,255,0.04)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath();
      ctx.arc(width/2, height/2, width/2.2, 0, 2 * Math.PI);
      ctx.fillStyle = grad;
      ctx.fill();
      // Draw stars
      for (let star of starsRef.current) {
        ctx.save();
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
        // Move star
        star.x += star.speed;
        if (star.x > width) star.x = 0;
      }


      requestAnimationFrame(drawGalaxy);
    }
    drawGalaxy();
    // Resize handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      starsRef.current = createStars(250, width, height);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default GalaxyBackground;
