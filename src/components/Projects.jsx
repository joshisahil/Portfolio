import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 6,
        y: (e.clientY / window.innerHeight) * 6,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'AI Campus Security',
      description: 'Real-time AI surveillance system using YOLOv8 and OpenCV for threat detection, with a Streamlit & Flask dashboard for monitoring and alerts.',
      icon: '🛡️',
      color: 'from-red-500 to-orange-500',
      glowColor: 'rgba(239,68,68,0.4)',
      // Pentagon layout — top center
      position: { top: '6%', left: '50%' },
      tags: ['Python', 'YOLOv8', 'OpenCV', 'Flask'],
      link: '#',
    },
    {
      id: 2,
      title: 'FakeXpose',
      description: 'Multimodal deepfake detection for video & audio with 170-dimensional audio features and real-time Grad-CAM visualization.',
      icon: '🔍',
      color: 'from-purple-500 to-indigo-500',
      glowColor: 'rgba(139,92,246,0.4)',
      // Pentagon — top right
      position: { top: '32%', left: '82%' },
      tags: ['Python', 'FastAPI', 'Grad-CAM', 'ML'],
      link: '#',
    },
    {
      id: 3,
      title: 'Social Echo',
      description: 'AI-powered social networking platform with secure authentication, AI caption generation, content moderation, and a responsive React frontend.',
      icon: '🌐',
      color: 'from-blue-500 to-cyan-500',
      glowColor: 'rgba(59,130,246,0.4)',
      // Pentagon — bottom right
      position: { top: '72%', left: '72%' },
      tags: ['React.js', 'Node.js', 'MongoDB', 'Express'],
      link: '#',
    },
    {
      id: 4,
      title: 'Sigro',
      description: 'A cutting-edge full-stack project with modern architecture, seamless user experience, and high-performance APIs.',
      icon: '⚡',
      color: 'from-green-500 to-teal-500',
      glowColor: 'rgba(34,197,94,0.4)',
      // Pentagon — bottom left
      position: { top: '72%', left: '28%' },
      tags: ['Next.js', 'Tailwind CSS', 'API'],
      link: '#',
    },
    {
      id: 5,
      title: 'Portfolio Site',
      description: 'Personal developer showcase built with React and Tailwind CSS — featuring interactive animations, project maps, and a clean modern UI.',
      icon: '🎨',
      color: 'from-pink-500 to-rose-500',
      glowColor: 'rgba(236,72,153,0.4)',
      // Pentagon — top left
      position: { top: '32%', left: '18%' },
      tags: ['React', 'Tailwind CSS', 'Animations'],
      link: '#',
    },
  ];

  const connections = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
    { from: 5, to: 1 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 5 },
    { from: 4, to: 1 },
    { from: 5, to: 2 },
  ];

  const getX = (pos) => {
    if (pos.left) return pos.left;
    if (pos.right) return `${100 - parseInt(pos.right)}%`;
    return '50%';
  };
  const getY = (pos) => {
    if (pos.top) return pos.top;
    if (pos.bottom) return `${100 - parseInt(pos.bottom)}%`;
    return '50%';
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black text-white overflow-hidden"
      style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
    >
      {/* Animated Grid */}
      <div className="absolute inset-0" style={{ opacity: 0.07 }}>
        <div className="grid-bg" />
      </div>

      {/* Slow floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${(i * 37 + 11) % 100}%`,
              top: `${(i * 53 + 7) % 100}%`,
              animationDelay: `${(i * 0.8) % 10}s`,
              animationDuration: `${10 + (i % 6) * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div
        className="absolute rounded-full orb-pulse"
        style={{
          top: '15%', left: '10%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute rounded-full orb-pulse"
        style={{
          bottom: '10%', right: '8%',
          width: '450px', height: '450px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animationDelay: '3s',
        }}
      />
      <div
        className="absolute rounded-full orb-pulse"
        style={{
          top: '45%', left: '40%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animationDelay: '6s',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <h2
            className="font-bold"
            style={{ fontSize: 'clamp(3rem,7vw,5rem)', lineHeight: 1.1, animation: 'slideDown 1.2s cubic-bezier(0.16,1,0.3,1) both' }}
          >
            Projects<span style={{ color: '#3B82F6' }}>.</span>
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginTop: '0.75rem', animation: 'fadeIn 1.4s ease 0.4s both' }}>
            Interactive map of my work
          </p>
        </div>

        {/* Map Container — full viewport width feel */}
        <div
          className="relative w-full"
          style={{
            height: 'clamp(520px, 72vh, 820px)',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 1s ease-out',
          }}
        >
          {/* SVG Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
            <defs>
              <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.25" />
              </linearGradient>
              <linearGradient id="lg1active" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {connections.map((conn, i) => {
              const from = projects.find(p => p.id === conn.from);
              const to = projects.find(p => p.id === conn.to);
              if (!from || !to) return null;
              const isActive = hoveredProject === conn.from || hoveredProject === conn.to;
              return (
                <line
                  key={i}
                  x1={getX(from.position)}
                  y1={getY(from.position)}
                  x2={getX(to.position)}
                  y2={getY(to.position)}
                  stroke={isActive ? 'url(#lg1active)' : 'url(#lg1)'}
                  strokeWidth={isActive ? 2.5 : 1}
                  strokeDasharray="6 8"
                  className="conn-line"
                  style={{
                    animationDelay: `${i * 0.3}s`,
                    opacity: isActive ? 1 : 0.35,
                    transition: 'opacity 0.8s ease, stroke-width 0.8s ease',
                  }}
                />
              );
            })}
          </svg>

          {/* Project Nodes */}
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="absolute"
              style={{
                ...project.position,
                transform: 'translate(-50%, -50%)',
                animation: `floatIn 1.2s cubic-bezier(0.16,1,0.3,1) ${index * 0.2}s both`,
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative">
                {/* Outer slow pulse ring */}
                <div
                  className="absolute rounded-full"
                  style={{
                    inset: '-16px',
                    background: `radial-gradient(circle, ${project.glowColor} 0%, transparent 70%)`,
                    animation: 'ringPulse 5s ease-in-out infinite',
                    animationDelay: `${index * 0.7}s`,
                    opacity: hoveredProject === project.id ? 0.9 : 0.4,
                    transition: 'opacity 0.8s ease',
                  }}
                />

                {/* Slow expanding ring */}
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${project.color}`}
                  style={{
                    animation: 'expandRing 4s ease-out infinite',
                    animationDelay: `${index * 0.6}s`,
                    opacity: hoveredProject === project.id ? 0.5 : 0.15,
                    transition: 'opacity 0.8s ease',
                  }}
                />

                {/* Main Node */}
                <div
                  className={`relative rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center cursor-pointer`}
                  style={{
                    width: '90px',
                    height: '90px',
                    fontSize: '2rem',
                    boxShadow: hoveredProject === project.id
                      ? `0 0 50px ${project.glowColor}, 0 0 100px ${project.glowColor}`
                      : `0 0 20px ${project.glowColor}`,
                    transform: hoveredProject === project.id ? 'scale(1.2)' : 'scale(1)',
                    transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1), box-shadow 0.6s ease',
                    animation: `gentleFloat 7s ease-in-out infinite`,
                    animationDelay: `${index * 1.1}s`,
                  }}
                >
                  <span style={{ animation: 'iconBob 4s ease-in-out infinite', animationDelay: `${index * 0.5}s` }}>
                    {project.icon}
                  </span>
                </div>

                {/* Label below node */}
                <div
                  className="absolute text-center whitespace-nowrap"
                  style={{
                    top: '100px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: hoveredProject === project.id ? '#fff' : '#6B7280',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    transition: 'color 0.6s ease',
                  }}
                >
                  {project.title}
                </div>

                {/* Info Card */}
                <div
                  style={{
                    position: 'absolute',
                    top: '115px',
                    left: '50%',
                    transform: `translateX(-50%) translateY(${hoveredProject === project.id ? '0px' : '12px'})`,
                    width: '280px',
                    background: 'rgba(5,5,15,0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '20px',
                    padding: '1.1rem',
                    opacity: hoveredProject === project.id ? 1 : 0,
                    pointerEvents: hoveredProject === project.id ? 'auto' : 'none',
                    transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1)',
                    zIndex: 100,
                    marginTop: '0.5rem',
                  }}
                >
                  <h3
                    className={`font-bold mb-2 bg-gradient-to-r ${project.color} bg-clip-text`}
                    style={{ fontSize: '1rem', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                  >
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: '#9CA3AF', marginBottom: '0.85rem', lineHeight: 1.6 }}>
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.85rem' }}>
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.7rem',
                          padding: '0.2rem 0.6rem',
                          background: 'rgba(255,255,255,0.08)',
                          borderRadius: '999px',
                          color: '#D1D5DB',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className={`bg-gradient-to-r ${project.color}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      padding: '0.5rem 1rem',
                      borderRadius: '10px',
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: '0.82rem',
                      textDecoration: 'none',
                      transition: 'opacity 0.3s',
                    }}
                  >
                    View Project
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  {/* Arrow tip */}
                  <div style={{
                    position: 'absolute', top: '-7px', left: '50%',
                    transform: 'translateX(-50%) rotate(45deg)',
                    width: '14px', height: '14px',
                    background: 'rgba(5,5,15,0.95)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRight: 'none', borderBottom: 'none',
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center" style={{ marginTop: '7rem' }}>
          <a
            href="https://github.com/joshisahil"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 2.2rem',
              background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
              color: '#fff',
              fontWeight: 700,
              borderRadius: '999px',
              textDecoration: 'none',
              fontSize: '1rem',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              boxShadow: '0 0 30px rgba(59,130,246,0.2)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 0 60px rgba(59,130,246,0.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(59,130,246,0.2)';
            }}
          >
            Explore All Projects
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        .grid-bg {
          width: 100%; height: 100%;
          background-image:
            linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridDrift 25s linear infinite;
        }
        @keyframes gridDrift {
          0% { transform: translate(0,0); }
          100% { transform: translate(60px,60px); }
        }

        .particle {
          position: absolute;
          width: 2px; height: 2px;
          background: linear-gradient(135deg, #60A5FA, #A78BFA);
          border-radius: 50%;
          box-shadow: 0 0 6px rgba(96,165,250,0.6);
          animation: driftParticle linear infinite;
        }
        @keyframes driftParticle {
          0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0.2; }
          30%  { opacity: 0.7; }
          60%  { transform: translateY(-50px) translateX(30px) scale(1.4); opacity: 0.5; }
          100% { transform: translateY(-80px) translateX(-10px) scale(0.8); opacity: 0; }
        }

        @keyframes orb-pulse {
          0%,100% { opacity: 0.6; transform: scale(1); }
          50%      { opacity: 1; transform: scale(1.08); }
        }
        .orb-pulse { animation: orb-pulse 8s ease-in-out infinite; }

        .conn-line {
          animation: dashFlow 4s linear infinite;
        }
        @keyframes dashFlow {
          to { stroke-dashoffset: -28; }
        }

        @keyframes ringPulse {
          0%,100% { transform: scale(1); opacity: 0.4; }
          50%      { transform: scale(1.15); opacity: 0.7; }
        }

        @keyframes expandRing {
          0%   { transform: scale(1); opacity: 0.4; }
          60%  { transform: scale(2.2); opacity: 0; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        @keyframes gentleFloat {
          0%,100% { transform: translateY(0px) scale(1); }
          50%      { transform: translateY(-10px) scale(1); }
        }

        @keyframes iconBob {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-4px); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes floatIn {
          from { opacity: 0; transform: translate(-50%,-50%) scale(0.4); }
          to   { opacity: 1; transform: translate(-50%,-50%) scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Projects;