import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'joshi.sahil2910@gmail.com',
      link: 'mailto:sj29102004@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 9373573756',
      link: 'tel:+919373573756',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Mumbai, India',
      link: '#',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🐙',
      link: 'https://github.com/joshisahil',
      color: 'from-gray-700 to-gray-900',
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      link: 'https://linkedin.com/in/sahil-joshi-3bb168300',
      color: 'from-blue-600 to-blue-800',
    },
    {
      name: 'Twitter',
      icon: '🐦',
      link: 'https://twitter.com/@sahil_joshi29',
      color: 'from-sky-500 to-blue-500',
    },
    {
      name: 'Instagram',
      icon: '📸',
      link: 'https://instagram.com/sahil_joshi_29',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="contact" className="relative min-h-screen bg-black text-white py-20 px-6 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid-background"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-down">
          <h2 className="text-6xl md:text-7xl font-bold mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-blue-500/50 transition-all duration-300 peer"
                  placeholder="Your Name"
                />
                <label
                  className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                    focusedField === 'name' || formData.name
                      ? '-top-6 text-sm text-blue-400'
                      : 'top-4 text-gray-400'
                  }`}
                >
                  Your Name
                </label>
                {(focusedField === 'name' || formData.name) && (
                  <div className="absolute -top-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 animate-width"></div>
                )}
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-blue-500/50 transition-all duration-300 peer"
                  placeholder="Your Email"
                />
                <label
                  className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                    focusedField === 'email' || formData.email
                      ? '-top-6 text-sm text-blue-400'
                      : 'top-4 text-gray-400'
                  }`}
                >
                  Your Email
                </label>
                {(focusedField === 'email' || formData.email) && (
                  <div className="absolute -top-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 animate-width"></div>
                )}
              </div>

              {/* Subject Field */}
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-blue-500/50 transition-all duration-300 peer"
                  placeholder="Subject"
                />
                <label
                  className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                    focusedField === 'subject' || formData.subject
                      ? '-top-6 text-sm text-blue-400'
                      : 'top-4 text-gray-400'
                  }`}
                >
                  Subject
                </label>
                {(focusedField === 'subject' || formData.subject) && (
                  <div className="absolute -top-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 animate-width"></div>
                )}
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows="5"
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-blue-500/50 transition-all duration-300 resize-none peer"
                  placeholder="Your Message"
                ></textarea>
                <label
                  className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                    focusedField === 'message' || formData.message
                      ? '-top-6 text-sm text-blue-400'
                      : 'top-4 text-gray-400'
                  }`}
                >
                  Your Message
                </label>
                {(focusedField === 'message' || formData.message) && (
                  <div className="absolute -top-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 animate-width"></div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8 animate-fade-in-right">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group block bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm text-gray-400 mb-1">{info.title}</h3>
                      <p className="text-lg font-semibold text-white">{info.value}</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-600 transform group-hover:translate-x-1 group-hover:text-blue-400 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6 text-white">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-gradient-to-br hover:${social.color} hover:border-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                  >
                    <div className="text-3xl transform group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                    <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 flex items-center gap-4">
              <div className="relative">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-green-400">Available for Work</h4>
                <p className="text-xs text-gray-400">Open to new opportunities</p>
              </div>
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
            linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: gridMove 15s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }

        /* Particles */
        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: linear-gradient(135deg, #3B82F6, #8B5CF6);
          border-radius: 50%;
          animation: floatParticle 6s ease-in-out infinite;
          box-shadow: 0 0 8px rgba(59, 130, 246, 0.6);
        }

        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) translateX(20px) scale(1.5);
            opacity: 0.8;
          }
        }

        /* Animations */
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes width {
          from { width: 0; }
          to { width: 100%; }
        }

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

        .animate-slide-down {
          animation: slide-down 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
        }

        .animate-width {
          animation: width 0.3s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;