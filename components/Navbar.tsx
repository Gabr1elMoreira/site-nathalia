
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '../constants';

const Navbar: React.FC<{ dark?: boolean }> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
        ? 'bg-stone-900/60 backdrop-blur-xl py-3 shadow-2xl'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* Logo */}
        <div
          className="flex items-center cursor-pointer group"
          onClick={(e) => handleNavClick(e as any, '#home')}
        >
          <img
            src="/logo.png"
            alt="Nathalia Abreu Logo"
            className="h-20 md:h-28 lg:h-32 w-auto object-contain transition-all duration-300 group-hover:scale-105 filter drop-shadow-2xl brightness-110"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-white hover:text-brand-400 text-[0.65rem] uppercase tracking-[0.3em] font-black transition-all hover:-translate-y-0.5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <div className={`w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-stone-950/80 backdrop-blur-md z-[-1] transition-opacity duration-500 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Content */}
      <div
        className={`fixed top-0 right-0 h-screen w-full max-w-sm bg-stone-950 shadow-2xl z-50 flex flex-col p-12 transition-transform duration-500 ease-in-out md:hidden border-l border-white/5 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex justify-between items-center mb-16">
          <img
            src="/logo.png"
            alt="Nathalia Abreu Logo"
            className="h-20 w-auto object-contain filter drop-shadow-2xl brightness-110"
          />
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-white">
            <X size={32} />
          </button>
        </div>

        <nav className="flex flex-col space-y-10">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-3xl font-serif text-white hover:text-brand-400 flex items-center justify-between group"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span>{link.label}</span>
              <div className="w-0 h-[1px] bg-brand-400 group-hover:w-12 transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="mt-auto space-y-12">
          <div className="flex items-center gap-8 text-white/40">
            <a href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">
              <Instagram size={28} />
            </a>
            <span className="text-[0.6rem] uppercase tracking-[0.2em] font-black">{CONTACT_INFO.instagram}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;