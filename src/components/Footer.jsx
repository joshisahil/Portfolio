import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Footer() {
  return (
    <footer className="relative w-full bg-black overflow-hidden border-t border-white/5">
      {/* --- BACKGROUND ELEMENTS --- */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      ></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500 blur-[1px] animate-pulse"
            style={{
              width: '4px',
              height: '4px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 w-full">
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center pt-12 pb-6">
          Get in Touch
        </h2>
        
        <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
          {/* IMPORTANT: We use a wrapper with mix-blend-mode if the spline 
              background is stubborn, but usually background="none" or 
              transparency in Spline editor is the fix.
          */}
          <div className="w-full h-full bg-transparent">
            <Spline 
              style={{ backgroundColor: 'transparent' }}
              scene="https://prod.spline.design/yDv1lb8sZGTOw2VP/scene.splinecode" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
}