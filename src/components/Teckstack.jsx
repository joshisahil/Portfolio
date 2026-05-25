import React, { useState, useEffect } from 'react';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('all');
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

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools & Others' },
  ];

  const technologies = [
    // Frontend
    {
      name: 'React',
      category: 'frontend',
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-500',
      level: 90,
    },
    {
      name: 'Next.js',
      category: 'frontend',
      icon: '▲',
      color: 'from-gray-700 to-gray-900',
      level: 85,
    },
    {
      name: 'JavaScript',
      category: 'frontend',
      icon: '📜',
      color: 'from-yellow-400 to-yellow-600',
      level: 95,
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      icon: '💨',
      color: 'from-cyan-400 to-blue-500',
      level: 90,
    },
    {
      name: 'HTML5',
      category: 'frontend',
      icon: '🌐',
      color: 'from-orange-500 to-red-600',
      level: 95,
    },
    // Backend
    {
      name: 'Node.js',
      category: 'backend',
      icon: '🟢',
      color: 'from-green-600 to-green-800',
      level: 85,
    },
    {
      name: 'Express.js',
      category: 'backend',
      icon: '🚂',
      color: 'from-gray-600 to-gray-800',
      level: 80,
    },
    {
      name: 'MongoDB',
      category: 'backend',
      icon: '🍃',
      color: 'from-green-500 to-green-700',
      level: 75,
    },
    {
      name: 'REST API',
      category: 'backend',
      icon: '🔌',
      color: 'from-indigo-500 to-indigo-700',
      level: 85,
    },
    // Tools
    {
      name: 'GitHub',
      category: 'tools',
      icon: '🐙',
      color: 'from-gray-700 to-gray-900',
      level: 90,
    },
    {
      name: 'VS Code',
      category: 'tools',
      icon: '💻',
      color: 'from-blue-500 to-blue-700',
      level: 95,
    },
    {
      name: 'Docker',
      category: 'tools',
      icon: '🐳',
      color: 'from-blue-400 to-blue-600',
      level: 70,
    },
  ];

  const filteredTechnologies = activeCategory === 'all'
    ? technologies
    : technologies.filter(tech => tech.category === activeCategory);

  return (
    <section id="tech-stack" className="relative min-h-screen bg-black text-white py-20 px-6 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid-background"></div>
      </div>

      {/* Animated Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Floating Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      >
        <defs>
          <linearGradient id="lineGradientTech" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Animated Lines */}
        <line x1="10%" y1="20%" x2="30%" y2="80%" stroke="url(#lineGradientTech)" strokeWidth="2" className="animated-line" />
        <line x1="70%" y1="10%" x2="90%" y2="70%" stroke="url(#lineGradientTech)" strokeWidth="2" className="animated-line" style={{ animationDelay: '0.5s' }} />
        <line x1="20%" y1="90%" x2="50%" y2="30%" stroke="url(#lineGradientTech)" strokeWidth="2" className="animated-line" style={{ animationDelay: '1s' }} />
        <line x1="60%" y1="80%" x2="85%" y2="20%" stroke="url(#lineGradientTech)" strokeWidth="2" className="animated-line" style={{ animationDelay: '1.5s' }} />
      </svg>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Stack</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up animation-delay-100">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {filteredTechnologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 animate-fade-in-up"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                {tech.name}
              </h3>

              {/* Progress Bar */}
              <div className="relative">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Proficiency</span>
                  <span>{tech.level}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up animation-delay-300">
          {/* Learning Section */}
          <div className="bg-gradient-to-br from-blue-600/10 to-blue-600/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Currently Learning</h3>
                <p className="text-blue-400">Expanding my skillset</p>
              </div>
            </div>
            <ul className="space-y-3">
              {[ 'Python' , 'Machine Learning'].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise Section */}
          <div className="bg-gradient-to-br from-purple-600/10 to-purple-600/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Core Expertise</h3>
                <p className="text-purple-400">What I do best</p>
              </div>
            </div>
            <ul className="space-y-3">
              {['Full-Stack Web Development', 'Responsive UI/UX Design'].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 animate-fade-in-up animation-delay-400">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-2">
                10+
              </div>
              <div className="text-gray-400 text-sm">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-2">
                1+
              </div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-2">
                5+
              </div>
              <div className="text-gray-400 text-sm">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-2">
                100%
              </div>
              <div className="text-gray-400 text-sm">Passion</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Grid Background */
        .grid-background {
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        /* Animated Dots */
        .dot {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(135deg, #3B82F6, #8B5CF6);
          border-radius: 50%;
          animation: float 5s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 0.8;
          }
        }

        /* Animated Lines */
        .animated-line {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: drawLine 3s ease-in-out infinite;
        }

        @keyframes drawLine {
          0% {
            stroke-dashoffset: 200;
            opacity: 0;
          }
          50% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          100% {
            stroke-dashoffset: -200;
            opacity: 0;
          }
        }

        /* Pulse Animation */
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        /* Fade In Up */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default TechStack;