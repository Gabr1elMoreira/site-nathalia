
import React from 'react';
import Button from './Button';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[80vh] md:h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Background is now global in App.tsx */}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-6 md:space-y-10 pt-32 md:pt-0">
        <div className="space-y-2 md:space-y-4 animate-fade-in-up">
          <h2 className="text-xs md:text-sm tracking-[0.6em] uppercase text-stone-600 font-bold">
            Brasília • Asa Sul
          </h2>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-serif text-stone-900 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Realce sua <br />
          <span className="text-brand-500 italic">beleza</span> natural
        </h1>

        <p className="text-base md:text-2xl text-stone-700 font-light max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Especialista em extensões de cílios premium e design estratégico do olhar.
        </p>

        <div className="pt-6 md:pt-10 flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
            <Button variant="green" className="w-full md:w-auto px-12 py-5 shadow-2xl">
              Agendar Experiência
            </Button>
          </a>
          <a href="#services" className="w-full md:w-auto">
            <Button variant="white" className="w-full md:w-auto px-12 py-5 bg-brand-200 border-brand-300 text-stone-900 shadow-xl hover:bg-brand-300">
              Ver Procedimentos
            </Button>
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;