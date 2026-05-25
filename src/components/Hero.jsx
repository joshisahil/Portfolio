import React, { useEffect, useState } from 'react';
import Hyperspeed from './Hyperspeed';
import TextType from './TextType';

const HYPERSPEED_OPTIONS = {
  onSpeedUp: () => {},
  onSlowDown: () => {},
  distortion: 'turbulentDistortion',
  length: 400,
  roadWidth: 20,
  islandWidth: 2,
  lanesPerRoad: 4,
  fov: 105,
  fovSpeedUp: 160,
  speedUp: 2,
  carLightsFade: 0.15,
  totalSideLightSticks: 50,
  lightPairsPerRoadWay: 100,
  shoulderLinesWidthPercentage: 0.07,
  brokenLinesWidthPercentage: 0.12,
  brokenLinesLengthPercentage: 0.6,
  lightStickWidth: [0.25, 0.9],
  lightStickHeight: [1.8, 2.8],
  movingAwaySpeed: [90, 130],
  movingCloserSpeed: [-160, -250],
  carLightsLength: [400 * 0.06, 400 * 0.5],
  carLightsRadius: [0.1, 0.3],
  carWidthPercentage: [0.4, 0.65],
  carShiftX: [-0.8, 0.8],
  carFloorSeparation: [0, 5],
  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x000000,
    shoulderLines: 0xffffff,
    brokenLines: 0xffffff,
    leftCars:  [0xff33cc, 0xaa44ff, 0xff00aa],
    rightCars: [0x00eeff, 0x0088ff, 0x33bbff],
    sticks: 0x00ccff,
  },
};

// SVG icons for LinkedIn, GitHub, Email
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const socials = [
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://linkedin.com/in/sahil-joshi-3bb168300' },
  { icon: <GitHubIcon />,   label: 'GitHub',   href: 'https://github.com/joshisahil' },
  { icon: <EmailIcon />,    label: 'Email',    href: 'mailto:joshi.sahil2910@email.com' },
];

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center"
    >
      {/* ── Hyperspeed: fills full section ── */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Hyperspeed effectOptions={HYPERSPEED_OPTIONS} />
      </div>

      {/* Minimal overlay — keep it light so animation is vivid */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'rgba(0,0,0,0.12)' }}
      />

      {/* Vignette — dark only at far edges */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      {/* Mouse-parallax SVG lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-20"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <line x1="10%" y1="20%" x2="30%" y2="80%" stroke="url(#lineGradient)" strokeWidth="2" className="animated-line" />
        <line x1="70%" y1="10%" x2="90%" y2="70%" stroke="url(#lineGradient)" strokeWidth="2" className="animated-line" style={{ animationDelay: '0.5s' }} />
        <line x1="20%" y1="90%" x2="50%" y2="30%" stroke="url(#lineGradient)" strokeWidth="2" className="animated-line" style={{ animationDelay: '1s' }} />
        <line x1="60%" y1="80%" x2="85%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" className="animated-line" style={{ animationDelay: '1.5s' }} />
      </svg>

      {/* ── Main content ── */}
      <div className="relative z-30 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-400">
            👋 Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up">
          Hi, I'm{' '}
          <TextType
            text={['Sahil Joshi', 'a Developer', 'a Designer', 'a Creator']}
            as="span"
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient"
            typingSpeed={100}
            deletingSpeed={60}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="|"
            cursorClassName="text-white"
            loop={true}
          />
        </h1>

        <div className="text-2xl md:text-4xl font-semibold mb-8 text-gray-300 animate-slide-up animation-delay-200">
          Full Stack Developer
        </div>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-400">
          I craft beautiful, functional web experiences with modern technologies.
          Passionate about clean code and innovative solutions.
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center animate-fade-in animation-delay-600">
          <a
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <span>View My Work</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold rounded-full hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Social icons — real SVG logos */}
        <div className="flex gap-6 justify-center mt-12 animate-fade-in animation-delay-800">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              title={social.label}
              className="w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-blue-500/50 hover:scale-110 hover:text-blue-400 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animated-line {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: drawLine 3s ease-in-out infinite;
        }
        @keyframes drawLine {
          0%   { stroke-dashoffset: 200;  opacity: 0; }
          50%  { stroke-dashoffset: 0;    opacity: 1; }
          100% { stroke-dashoffset: -200; opacity: 0; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes gradient {
          0%   { background-position: 0% 50%;   }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%;   }
        }
        @keyframes fade-in  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in  { animation: fade-in  1s ease-out backwards; }
        .animate-slide-up { animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
      `}</style>
    </section>
  );
};

export default Hero;