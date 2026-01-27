
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
        className={`fixed top-0 right-0 h-screen w-full max-w-sm bg-zinc-900/90 backdrop-blur-xl shadow-2xl z-50 flex flex-col p-12 transition-transform duration-500 ease-in-out md:hidden border-l border-white/5 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex justify-between items-center mb-16">
          <img
            src="/logo.png"
            alt="Nathália Abreu Logo"
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

        <div className="mt-16 space-y-8">
          <div className="flex items-center gap-8 text-white/40">
            <a href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">
              <Instagram size={28} />
            </a>
            <span className="text-[0.6rem] uppercase tracking-[0.2em] font-black">{CONTACT_INFO.instagram}</span>
          </div>

          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-8 text-white/40 hover:text-brand-400 transition-all group"
          >
            <div className="transition-transform group-hover:scale-110">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <span className="text-[0.6rem] uppercase tracking-[0.2em] font-black">Dúvidas? Whatsapp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;