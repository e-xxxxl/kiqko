

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { ArrowRight, Heart, Search, MessageCircle, Users, Calendar, Menu, X, ChevronRight } from 'lucide-react';

const Landing = () => {
  const [showCookie, setShowCookie] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Background animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      const bg = document.querySelector('.animated-bg');
      if (bg) {
        bg.style.backgroundPosition = `${Math.random() * 100}% ${Math.random() * 100}%`;
      }
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-50 bg-[#9B72FE] relative overflow-hidden">
      {/* Animated background */}
      <div 
        className="fixed inset-0 animated-bg transition-all duration-[15000ms] ease-in-out -z-10"
        style={{ 
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.2) 0, transparent 300px),
            radial-gradient(circle at 80% 10%, rgba(255, 255, 255, 0.15) 0, transparent 200px),
            radial-gradient(circle at 10% 80%, rgba(122, 74, 221, 0.3) 0, transparent 400px),
            radial-gradient(circle at 90% 90%, rgba(122, 74, 221, 0.3) 0, transparent 300px)
          `,
          backgroundColor: '#9B72FE'
        }}
      />

      {/* Floating shapes for decoration */}
      <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-white opacity-5 blur-3xl animate-pulse"></div>

      {/* Header */}
      <header className={`fixed w-full py-3 px-4 sm:px-6 lg:px-8 top-0 left-0 right-0 z-30 transition-all duration-300 ${scrolled ? 'bg-[#8A5FF7] shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="KIQKO Logo" className="h-8 w-auto" />
            <h1 className="text-xl font-bold text-white hidden sm:block">
              KIQKO
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/90 hover:text-white text-sm font-medium transition">Home</a>
            <a href="#features" className="text-white/90 hover:text-white text-sm font-medium transition">Features</a>
            <a href="#testimonials" className="text-white/90 hover:text-white text-sm font-medium transition">Success Stories</a>
            <NavLink to="/login" className="text-white/90 hover:text-white text-sm font-medium transition">Login</NavLink>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#8A5FF7] shadow-lg py-4 px-6 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-white/90 hover:text-white text-base font-medium transition py-2 flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <ChevronRight size={16} className="mr-2" /> Home
              </a>
              <a href="#features" className="text-white/90 hover:text-white text-base font-medium transition py-2 flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <ChevronRight size={16} className="mr-2" /> Features
              </a>
              <a href="#testimonials" className="text-white/90 hover:text-white text-base font-medium transition py-2 flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <ChevronRight size={16} className="mr-2" /> Success Stories
              </a>
              <div className="pt-4 border-t border-white/20">
                <NavLink to="/sign-up" className="block w-full px-4 py-3 text-center font-medium text-white bg-white/20 rounded-lg hover:bg-white/30 transition-colors mb-2" onClick={() => setMobileMenuOpen(false)}>
                  Create Account
                </NavLink>
                <NavLink to="/login" className="block w-full px-4 py-3 text-center font-medium text-white bg-transparent border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </NavLink>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Cookie consent */}
      {showCookie && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white text-gray-800 shadow-lg md:max-w-md md:mx-auto md:mb-6 md:rounded-xl animate-slide-up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">
              We use cookies to enhance your experience. By continuing, you agree to our use of cookies.
            </p>
            <div className="flex gap-2">
              <button 
                className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                onClick={() => setShowCookie(false)}
                aria-label="Decline cookies"
              >
                Decline
              </button>
              <button 
                className="px-4 py-2 text-sm font-medium text-white bg-[#9B72FE] rounded-lg hover:bg-purple-700 transition-colors"
                onClick={() => setShowCookie(false)}
                aria-label="Accept cookies"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="container mx-auto px-4 pt-24 pb-12 lg:py-28">
        {/* Hero section */}
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-1 inline-flex items-center">
                <span className="text-sm font-medium text-white">Trusted by over 500,000 members</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Meet <span className="text-white/90">Authentic</span> Asian Singles <br className="hidden lg:block" /> Near You
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Connect with genuine Asian singles looking for meaningful relationships. Our advanced matching system helps you find your perfect match.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-white my-12">
              {[
                { icon: <Heart size={18} className="text-white mr-1" />, text: "Match" },
                { icon: <Search size={18} className="text-white mr-1" />, text: "Search" },
                { icon: <MessageCircle size={18} className="text-white mr-1" />, text: "Chat" },
                { icon: <Users size={18} className="text-white mr-1" />, text: "Connect" },
                { icon: <Calendar size={18} className="text-white mr-1" />, text: "Date" }
              ].map((item, index) => (
                <React.Fragment key={index}>
                  <div className="feature-item flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                  {index < 4 && <div className="hidden md:block text-white/30 self-center">•</div>}
                </React.Fragment>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto mb-14">
              <NavLink to="/sign-up" className="w-full">
                <div className="w-full px-6 py-3 flex items-center justify-center gap-2 font-medium text-[#9B72FE] bg-white rounded-lg hover:bg-gray-100 transition-all shadow-md hover:shadow-lg active:scale-95">
                  Create Account
                  <ArrowRight size={18} />
                </div>
              </NavLink>
              <NavLink to="/login" className="w-full">
                <div className="w-full px-6 py-3 flex items-center justify-center gap-2 font-medium text-white bg-transparent border-2 border-white/30 rounded-lg hover:bg-white/10 transition-all active:scale-95">
                  Login
                </div>
              </NavLink>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-white/80 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="h-8 w-8 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                    <Users size={12} />
                  </div>
                ))}
              </div>
              <span>Join our community of 500,000+ singles</span>
            </div>
          </div>
        </section>
        
        {/* Features section */}
        <section className="max-w-7xl mx-auto my-24 lg:my-32" id="features">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose KIQKO?</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Our platform is designed to help you find meaningful connections with authentic Asian singles.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <Heart size={24} className="text-white" />,
                title: "Smart Matching",
                description: "Our intelligent algorithm helps you find compatible Asian singles based on your preferences and personality.",
                features: ["Personality matching", "Advanced filters", "Daily suggestions"]
              },
              {
                icon: <MessageCircle size={24} className="text-white" />,
                title: "Instant Chat",
                description: "Connect with your matches through our real-time messaging system with translation support.",
                features: ["Real-time messaging", "Translation support", "Video calls"]
              },
              {
                icon: <Users size={24} className="text-white" />,
                title: "Verified Profiles",
                description: "Feel secure knowing all members go through our verification process to ensure authentic connections.",
                features: ["ID verification", "Photo verification", "Background checks"]
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-white/80 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center text-white/90 text-sm">
                      <ChevronRight size={14} className="mr-2 text-white/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        
        {/* Testimonials section */}
        <section className="max-w-6xl mx-auto my-24 lg:my-32" id="testimonials">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Success Stories</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Hear from couples who found love through KIQKO</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                names: "Alex & Sarah",
                date: "Married since 2022",
                quote: "We met on KIQKO and instantly connected. The matching system really understands what makes two people compatible."
              },
              {
                names: "James & Mei",
                date: "Together since 2021",
                quote: "As an expat in Asia, KIQKO helped me meet genuine people. We're now planning our future together!"
              },
              {
                names: "David & Lin",
                date: "Engaged in 2023",
                quote: "The verification system gave me confidence to meet someone special. We're so grateful for this platform!"
              }
            ].map((story, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <Users size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{story.names}</h4>
                    <p className="text-white/60 text-sm">{story.date}</p>
                  </div>
                </div>
                <p className="text-white/80 italic">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <section className="max-w-5xl mx-auto bg-gradient-to-r from-[#8A5FF7] to-[#9B72FE] rounded-2xl p-8 md:p-12 shadow-lg my-24 lg:my-32 overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
          
          <div className="text-center relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">Ready to find your perfect match?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">Join thousands of happy couples who found love on KIQKO. Sign up today and start your journey to meaningful connections.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <NavLink to="/sign-up" className="w-full sm:w-auto">
                <div className="w-full px-8 py-3 font-medium text-[#9B72FE] bg-white rounded-lg hover:bg-gray-100 transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2">
                  Create Free Account
                  <ArrowRight size={18} />
                </div>
              </NavLink>
              <NavLink to="/login" className="w-full sm:w-auto">
                <div className="w-full px-8 py-3 font-medium text-white bg-transparent border-2 border-white/30 rounded-lg hover:bg-white/10 transition-all active:scale-95">
                  Learn More
                </div>
              </NavLink>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#7A4AEB] text-white pt-16 pb-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={logo} alt="KIQKO Logo" className="h-8 w-auto" />
                <h1 className="text-xl font-bold text-white">
                  KIQKO
                </h1>
              </div>
              <p className="text-white/70 text-sm mb-4">
                Connecting Asian singles with meaningful relationships since 2018.
              </p>
              <div className="flex space-x-4">
                {['twitter', 'instagram', 'facebook'].map((social) => (
                  <a key={social} href="#" className="text-white/70 hover:text-white transition-colors">
                    <span className="sr-only">{social}</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      {social === 'twitter' && <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>}
                      {social === 'instagram' && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>}
                      {social === 'facebook' && <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            
            {[
              {
                title: "Company",
                links: ["About Us", "Careers", "Press", "Contact"]
              },
              {
                title: "Support",
                links: ["Help Center", "Safety Tips", "Community Guidelines", "Report an Issue"]
              },
              {
                title: "Legal",
                links: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Accessibility"]
              }
            ].map((column, index) => (
              <div key={index}>
                <h4 className="text-lg font-medium mb-4">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/50 text-sm mb-4 md:mb-0">
                © 2025 KIQKO. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;