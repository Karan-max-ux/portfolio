import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function GlowCard({ 
  children, 
  className = '', 
  glowColor = 'rgba(0, 214, 163, 0.14)', 
  borderGlowColor = 'rgba(0, 214, 163, 0.38)',
  ...props 
}) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden group transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Interactive Subtle Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-[inherit] z-0"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 65%)`
        }}
      />

      {/* Refined Glowing Border Edge on Cursor Hover */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-[inherit] z-0"
        style={{
          opacity: mousePos.opacity * 0.75,
          border: `1px solid ${borderGlowColor}`,
          boxShadow: `0 0 20px -3px ${glowColor}`
        }}
      />

      {/* Inner Content (Elevated above glow) */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}
