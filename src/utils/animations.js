// Launches hearts that float upward from a given x,y position
export function launchFloatingHearts(count = 12, cx, cy) {
  const container = document.body;
  const heartChars = ['❤️', '🩷', '💕', '💗', '💖', '💓'];

  for (let i = 0; i < count; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
    const startX = (cx ?? window.innerWidth / 2) + (Math.random() - 0.5) * 160;
    const startY = cy ?? window.innerHeight * 0.6;
    const duration = 2800 + Math.random() * 2000;
    heart.style.cssText = `
      left: ${startX}px;
      top: ${startY}px;
      font-size: ${14 + Math.random() * 22}px;
      animation-duration: ${duration}ms;
      animation-delay: ${Math.random() * 800}ms;
    `;
    container.appendChild(heart);
    setTimeout(() => heart.remove(), duration + 1000);
  }
}

// Big confetti burst for final screen
export function launchConfetti() {
  const heartChars = ['❤️', '🩷', '💕', '✨', '💫', '🌸', '💖', '💗'];
  for (let i = 0; i < 60; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-heart';
    el.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
    const duration = 3000 + Math.random() * 3000;
    el.style.cssText = `
      left: ${Math.random() * 100}vw;
      top: -30px;
      font-size: ${12 + Math.random() * 20}px;
      animation-duration: ${duration}ms;
      animation-delay: ${Math.random() * 1500}ms;
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), duration + 2000);
  }
}
