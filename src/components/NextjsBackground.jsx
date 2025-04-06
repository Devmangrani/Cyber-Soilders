import React, { useEffect, useRef } from 'react';

const NextjsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    let ctx;
    try {
      ctx = canvas.getContext('2d');
    } catch (error) {
      console.error('Error getting canvas context:', error);
      return;
    }
    
    let animationFrameId;
    let particles = [];
    
    // Set canvas size with higher resolution for retina displays
    const setCanvasSize = () => {
      try {
        const dpr = window.devicePixelRatio || 1;
        
        // Set display size (css pixels)
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        
        // Reset any previous transformations
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        
        // Set actual size in memory
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        
        // Scale context to match dpr
        ctx.scale(dpr, dpr);
        
        // Recreate particles
        initParticles();
      } catch (error) {
        console.error('Error setting canvas size:', error);
      }
    };

    // Particle class with improved physics
    class Particle {
      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 2 + 1;
        
        // Slower, more controlled movement
        this.vx = (Math.random() - 0.5) * 0.3; // Reduced from 0.5
        this.vy = (Math.random() - 0.5) * 0.3; // Reduced from 0.5
        
        // Blue-purple color palette with randomized opacity
        const opacity = 0.4 + Math.random() * 0.4; // Increased opacity
        this.color = `rgba(80, 100, 255, ${opacity})`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off edges with a bit of randomization
        if (this.x < 0 || this.x > window.innerWidth) {
          this.vx = -this.vx * 0.9;
          this.vx += (Math.random() - 0.5) * 0.1;
        }
        
        if (this.y < 0 || this.y > window.innerHeight) {
          this.vy = -this.vy * 0.9;
          this.vy += (Math.random() - 0.5) * 0.1;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Initialize particles
    const initParticles = () => {
      try {
        // Clear existing particles
        particles = [];
        
        // Create appropriate number of particles based on screen size
        const area = window.innerWidth * window.innerHeight;
        const particleCount = Math.min(Math.floor(area / 10000), 100); // Reduced count slightly
        
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle());
        }
      } catch (error) {
        console.error('Error initializing particles:', error);
      }
    };

    // Draw grid in the background
    const drawGrid = () => {
      try {
        const cellSize = 40; // Grid cell size in pixels
        
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(100, 100, 255, 0.1)'; // Increased opacity from 0.07
        ctx.lineWidth = 0.5;
        
        // Vertical lines
        for (let x = 0; x <= window.innerWidth; x += cellSize) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, window.innerHeight);
        }
        
        // Horizontal lines
        for (let y = 0; y <= window.innerHeight; y += cellSize) {
          ctx.moveTo(0, y);
          ctx.lineTo(window.innerWidth, y);
        }
        
        ctx.stroke();
      } catch (error) {
        console.error('Error drawing grid:', error);
      }
    };

    // Connect nearby particles with lines
    const connectParticles = () => {
      try {
        // Maximum connection distance
        const maxDistance = Math.min(window.innerWidth, window.innerHeight) * 0.14;
        
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < maxDistance) {
              // Fade out connections with distance
              const opacity = 1 - (distance / maxDistance);
              ctx.beginPath();
              ctx.strokeStyle = `rgba(100, 100, 255, ${opacity * 0.2})`; // Increased opacity from 0.15
              ctx.lineWidth = opacity * 0.8; // Increased from 0.7
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      } catch (error) {
        console.error('Error connecting particles:', error);
      }
    };

    // Animation loop
    const animate = () => {
      try {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw grid
        drawGrid();
        
        // Update and draw particles
        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });
        
        // Connect particles with lines
        connectParticles();
        
        // Keep animation running
        animationFrameId = requestAnimationFrame(animate);
      } catch (error) {
        console.error('Error in animation loop:', error);
        cancelAnimationFrame(animationFrameId);
      }
    };

    // Initialize canvas and start animation
    try {
      setCanvasSize();
      animate();

      // Handle window resize
      window.addEventListener('resize', setCanvasSize);

      // Log success
      console.log('NextjsBackground animation started successfully');
    } catch (error) {
      console.error('Error initializing animation:', error);
    }

    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      console.log('NextjsBackground animation cleaned up');
    };
  }, []); // Empty dependency array ensures this runs once

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: -10, 
        opacity: 1, // Increased from 0.8
        background: 'transparent'
      }}
      aria-hidden="true"
    />
  );
};

export default NextjsBackground;