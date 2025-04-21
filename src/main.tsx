import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Initialize cursor tracking
document.addEventListener('DOMContentLoaded', () => {
  const cursorOuter = document.querySelector('.custom-cursor-outer') as HTMLElement;
  const cursorInner = document.querySelector('.custom-cursor-inner') as HTMLElement;
  
  if (!cursorOuter || !cursorInner) return;
  
  let mouseX = 0;
  let mouseY = 0;
  let innerX = 0;
  let innerY = 0;
  
  // Update cursor position
  const updateCursor = () => {
    const diffX = mouseX - innerX;
    const diffY = mouseY - innerY;
    
    innerX += diffX * 0.2;
    innerY += diffY * 0.2;
    
    cursorInner.style.left = `${innerX}px`;
    cursorInner.style.top = `${innerY}px`;
    cursorOuter.style.left = `${mouseX}px`;
    cursorOuter.style.top = `${mouseY}px`;
    
    requestAnimationFrame(updateCursor);
  };
  
  // Track mouse movement
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // Handle click animations
  document.addEventListener('mousedown', () => {
    cursorOuter.style.transform = 'translate(-50%, -50%) scale(0.8)';
    cursorInner.style.transform = 'translate(-50%, -50%) scale(0.8)';
  });
  
  document.addEventListener('mouseup', () => {
    cursorOuter.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorInner.style.transform = 'translate(-50%, -50%) scale(1)';
  });
  
  // Handle hover effects
  const handleMouseEnter = () => {
    cursorOuter.style.width = '60px';
    cursorOuter.style.height = '60px';
    cursorInner.style.transform = 'translate(-50%, -50%) scale(1.5)';
  };
  
  const handleMouseLeave = () => {
    cursorOuter.style.width = '40px';
    cursorOuter.style.height = '40px';
    cursorInner.style.transform = 'translate(-50%, -50%) scale(1)';
  };
  
  // Add hover effects to interactive elements
  document.querySelectorAll('a, button, input, textarea, [role="button"]').forEach(el => {
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);
  });
  
  // Start cursor animation
  requestAnimationFrame(updateCursor);
});