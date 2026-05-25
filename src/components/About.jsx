import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

// --- TrueFocus Sub-component ---
const TrueFocus = ({
  sentence = 'True Focus',
  manualMode = false,
  blurAmount = 5,
  borderColor = '#3B82F6',
  animationDuration = 0.5,
  pauseBetweenAnimations = 1
}) => {
  const words = sentence.split(' ');
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % words.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);
      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || !wordRefs.current[currentIndex] || !containerRef.current) return;
    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();
    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height
    });
  }, [currentIndex, words.length]);

  return (
    <div className="relative flex gap-4 justify-center items-center flex-wrap" ref={containerRef}>
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={el => (wordRefs.current[index] = el)}
            className={`relative text-5xl md:text-6xl font-bold cursor-default transition-all duration-500 ${
              isActive ? 'text-white' : 'text-white/20'
            }`}
            style={{ filter: isActive ? 'blur(0px)' : `blur(${blurAmount}px)` }}
          >
            {word === 'Me' ? <span className="text-blue-500">{word}</span> : word}
          </span>
        );
      })}

      <motion.div
        className="absolute top-0 left-0 pointer-events-none box-border border-0"
        animate={{ x: focusRect.x, y: focusRect.y, width: focusRect.width, height: focusRect.height, opacity: 1 }}
        transition={{ duration: animationDuration }}
      >
        <span className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] left-[-10px] border-r-0 border-b-0" style={{ borderColor, filter: `drop-shadow(0 0 4px ${borderColor})` }}></span>
        <span className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] right-[-10px] border-l-0 border-b-0" style={{ borderColor, filter: `drop-shadow(0 0 4px ${borderColor})` }}></span>
        <span className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] left-[-10px] border-r-0 border-t-0" style={{ borderColor, filter: `drop-shadow(0 0 4px ${borderColor})` }}></span>
        <span className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] right-[-10px] border-l-0 border-t-0" style={{ borderColor, filter: `drop-shadow(0 0 4px ${borderColor})` }}></span>
      </motion.div>
    </div>
  );
};

// --- Main About Component ---
const About = () => {
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

  const skills = [
    'Java', 'Python', 'JavaScript', 'SQL', 'HTML', 'CSS',
    'React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS',
    'MongoDB', 'MySQL', 'GitHub',
  ];

  const stats = [
    { value: '9.09', label: 'CGPA' },
    { value: '3',    label: 'Major Projects' },
    { value: '10+',  label: 'Technologies' },
    { value: '1',    label: 'Cloud Internship' },
  ];

  // ── Your Google Drive direct download link ──
  const RESUME_URL =
    'https://drive.google.com/uc?export=download&id=1oysR8PR0A_94ztJTj5WnEvuzbP9gf74l';

  return (
    <section id="about" className="relative min-h-screen bg-black text-white py-20 px-6 overflow-hidden">

      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20"><div className="grid-background"></div></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <TrueFocus
            sentence="About Me"
            manualMode={false}
            blurAmount={5}
            borderColor="#3B82F6"
            animationDuration={0.5}
            pauseBetweenAnimations={1}
          />
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Bio + Photo */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">

          {/* Photo */}
          <div className="relative animate-fade-in-left">
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-blue-500/20 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                  <img
                    src="src/assets/sahil_profile.png"
                    alt="Sahil Joshi"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-blue-500 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-purple-500 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6 animate-fade-in-right">
            <h3 className="text-3xl font-bold text-gray-100">
              B.E. in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Computer Engineering
              </span>
            </h3>

            <p className="text-gray-400 leading-relaxed text-lg">
              Hello! I'm <span className="text-white font-semibold">Sahil Joshi</span>, a B.E. Computer
              Engineering student at Saraswati College of Engineering, Navi Mumbai (CGPA: 9.09).
              I specialise in the MERN stack with a strong foundation in full-stack development
              using React, Node.js, and MongoDB.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg">
              I completed a Cloud Internship at{' '}
              <span className="text-white font-semibold">iFuture Technologies</span>, focusing on
              Microsoft Server Management, private cloud, and virtualisation. I'm passionate about
              AI-powered tools — from deepfake detection systems to AI-moderated social platforms.
            </p>

            {/* Highlights */}
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▸</span>
                <span>2nd Runner-Up at Loop Hackathon — Top 30 among 2500+ teams</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▸</span>
                <span>Department President 2025–26 · Treasurer 2024–25</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▸</span>
                <span>Cyber Security Essentials Certification</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                Let's Talk
              </a>

              {/* ── Download CV — Google Drive direct link ── */}
              <a
                href={RESUME_URL}
                download="Sahil_Joshi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white/5 text-white font-semibold rounded-lg border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                  />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 animate-fade-in-up">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="animate-fade-in-up">
          <h3 className="text-3xl font-bold text-center mb-8">
            My <span className="text-blue-500">Skills</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .grid-background {
          width: 100%; height: 100%;
          background-image:
            linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }
        @keyframes gridMove { 0% { transform: translate(0,0); } 100% { transform: translate(50px,50px); } }
        .dot {
          position: absolute; width: 4px; height: 4px;
          background: #3B82F6; border-radius: 50%;
          animation: float 5s ease-in-out infinite; opacity: 0.3;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); opacity: 0.3; }
          50%       { transform: translateY(-20px); opacity: 0.8; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default About;