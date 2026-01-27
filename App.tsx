
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Button from './components/Button';
import ServiceModal from './components/ServiceModal';
import { SERVICES, CONTACT_INFO } from './constants';
import { Service } from './types';
import { MapPin, Instagram, Mail, Phone, Clock, CheckCircle, Info, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openServiceModal = (service: Service) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen relative bg-zinc-950 text-white">
      {/* Background Image fixed for the entire site - DARK PREMIUM AESTHETIC */}
      <div className="fixed inset-0 z-0">
        <img
          src="Background.png"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/40 via-transparent to-brand-900/10" />
        <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10">
        <Navbar dark />
        <Hero />

        {/* Modal for Services */}
        <ServiceModal service={selectedService} onClose={closeServiceModal} />

        {/* About Section */}
        <Section id="about" className="py-8 md:py-32 bg-transparent">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="flex flex-col">
              {/* Título visível apenas no mobile, acima da foto */}
              <div className="md:hidden mb-6 space-y-2 animate-fade-in-up">
                <h3 className="text-brand-600 tracking-[0.3em] text-xs uppercase font-bold">Especialista em Olhar</h3>
                <h2 className="text-4xl sm:text-5xl font-serif text-white leading-tight">Nathalia Abreu</h2>
              </div>

              <div className="relative p-8 md:p-12 flex justify-center items-center">
                {/* Quadrado Decorativo de Fundo - Dourado sutil */}
                <div className="absolute inset-4 md:inset-6 border-2 border-brand-500/20 z-0"></div>

                {/* Container Principal da Foto */}
                <div className="relative z-10 bg-white/5 p-2 shadow-2xl border border-brand-500/10 backdrop-blur-sm overflow-hidden w-full">
                  <img
                    src="https://i.imgur.com/4PdinsP.jpeg"
                    alt="Nathalia Abreu Lash Designer"
                    className="w-full h-[450px] md:h-[550px] lg:h-[650px] object-cover"
                  />
                </div>

                {/* Selo de Experiência */}
                <div className="absolute bottom-16 -right-2 md:-right-4 bg-brand-600 text-white p-4 md:p-8 z-20 shadow-2xl border border-brand-400">
                  <p className="text-2xl md:text-4xl font-serif mb-1 leading-none">3+</p>
                  <p className="text-[0.5rem] md:text-[0.6rem] uppercase tracking-widest font-bold">Anos de<br />Experiência</p>
                </div>
              </div>
            </div>

            <div className="space-y-8 animate-fade-in-up">
              {/* Título visível apenas no desktop, posição original */}
              <div className="hidden md:block space-y-2">
                <h3 className="text-brand-600 tracking-[0.3em] text-xs uppercase font-bold">Especialista em Olhar</h3>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white leading-tight">Nathalia Abreu</h2>
              </div>

              <p className="text-white leading-relaxed font-light text-lg md:text-xl">
                Com formação profissional e paixão pela excelência, transformo olhares através de técnicas avançadas de lash design.
                Meu compromisso é realçar sua beleza única, respeitando a saúde dos seus fios naturais.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                {[
                  'Materiais Premium',
                  'Atendimento VIP',
                  'Biossegurança',
                  'Alta Durabilidade'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center border border-brand-500/20 group-hover:bg-brand-500/20 transition-all">
                      <CheckCircle className="text-brand-600 w-5 h-5" />
                    </div>
                    <span className="text-white font-medium tracking-wide text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-10">
                <a href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
                  <Button variant="brand" className="px-12 py-5 text-xs shadow-2xl shadow-brand-500/20 transition-transform hover:scale-105 active:scale-95">
                    CONHECER MEU TRABALHO
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* Services Section */}
        <Section id="services" title="Procedimentos" subtitle="Técnicas exclusivas para cada estilo e necessidade" className="bg-transparent">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group relative bg-zinc-900/60 backdrop-blur-xl border border-white/20 p-1 transition-all duration-500 hover:border-brand-500/40 cursor-pointer overflow-hidden shadow-2xl flex flex-col h-full"
                onClick={() => openServiceModal(service)}
              >
                <div className="relative h-72 md:h-80 overflow-hidden shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-8 py-3 bg-white text-zinc-900 text-[0.65rem] uppercase tracking-widest font-bold">
                      DESCUBRA MAIS
                    </span>
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  {/* Header Area: Fixed height to handle 1 vs 2 lines of title */}
                  <div className="min-h-[4rem] md:min-h-[4.5rem] mb-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-lg md:text-xl font-serif text-white group-hover:text-brand-600 transition-colors uppercase tracking-widest leading-tight">
                        {service.title}
                      </h3>
                      <span className="text-brand-600 font-bold text-xs md:text-sm tracking-widest whitespace-nowrap pt-1">
                        {service.priceEstimate}
                      </span>
                    </div>
                    <div className="h-[1px] w-full bg-white/10 mt-auto" />
                  </div>

                  {/* Body Area: Flex grow takes available space */}
                  <div className="flex-grow mb-8">
                    <p className="text-white font-light text-sm leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Footer Area: Fixed at the bottom */}
                  <div className="pt-4 flex items-center gap-2 text-brand-600 text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.2em] font-black border-t border-white/5">
                    <Clock size={14} className="text-brand-600" />
                    <span>Incluso: {service.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Scheduling / CTA Section */}
        <section id="schedule" className="py-16 md:py-32 bg-zinc-900/60 relative overflow-hidden text-center px-6 border-y border-white/10">
          <div className="max-w-4xl mx-auto relative z-10 space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-serif text-white leading-tight">Agende sua <br /><span className="text-brand-600 italic">experiência</span></h2>
              <p className="text-white font-light text-xl max-w-2xl mx-auto leading-relaxed">
                Um momento exclusivo dedicado à sua beleza e bem-estar no coração de Brasília.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 pt-8 max-w-3xl mx-auto text-left">
              <div className="bg-zinc-900/80 backdrop-blur-xl p-10 border border-white/20 shadow-2xl group hover:border-brand-500/20 transition-all">
                <Clock className="w-12 h-12 mb-8 text-brand-600" />
                <h3 className="font-serif text-2xl mb-4 text-white uppercase tracking-widest">Atendimento</h3>
                <p className="text-xs text-white leading-8 tracking-widest uppercase font-bold">
                  Terça a Sexta: 09:00 - 19:00<br />
                  Sábado: 09:00 - 17:00
                </p>
              </div>
              <div className="bg-zinc-800/50 backdrop-blur-xl p-10 border border-white/10 shadow-2xl group hover:border-brand-500/20 transition-all">
                <MapPin className="w-12 h-12 mb-8 text-brand-600" />
                <h3 className="font-serif text-2xl mb-4 text-white uppercase tracking-widest">Localização</h3>
                <p className="text-xs text-white leading-8 tracking-widest uppercase font-bold">
                  Asa Sul, Brasília - DF<br />
                  L2 Sul - Studio da Beleza
                </p>
              </div>
            </div>

            <div className="pt-16">
              <a href={CONTACT_INFO.calendly} target="_blank" rel="noopener noreferrer">
                <Button variant="brand" className="px-20 py-6 text-xs shadow-2xl shadow-brand-500/10 hover:scale-105 active:scale-95">
                  RESERVAR MEU HORÁRIO
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-zinc-950/90 backdrop-blur-md text-white py-12 md:py-16 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 items-start text-center">
            {/* Column 1: Brand */}
            <div className="flex flex-col items-center space-y-6">
              <div className="flex flex-col items-center">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-28 w-auto object-contain mb-2 filter brightness-110 drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="flex flex-col items-center">
              <h4 className="font-serif text-lg mb-6 text-brand-600 uppercase tracking-widest">Navegação</h4>
              <ul className="space-y-6 text-[0.65rem] tracking-[0.2em] uppercase font-bold text-white/80">
                <li><a href="#services" className="hover:text-brand-600 transition-colors">Procedimentos</a></li>
                <li><a href="#about" className="hover:text-brand-600 transition-colors">A Especialista</a></li>
                <li><a href="#schedule" className="hover:text-brand-600 transition-colors">Agendamento</a></li>
              </ul>
            </div>

            {/* Column 3: Agenda */}
            <div className="flex flex-col items-center">
              <h4 className="font-serif text-lg mb-6 text-brand-600 uppercase tracking-widest">Agenda</h4>
              <div className="text-[0.65rem] tracking-[0.15em] uppercase font-bold text-white space-y-4">
                <div>
                  <span className="text-white block mb-1">Terça a Sexta</span>
                  <span className="font-medium text-white/80">09:00 — 19:00</span>
                </div>
                <div>
                  <span className="text-white block mb-1">Sábado</span>
                  <span className="font-medium text-white/80">09:00 — 17:00</span>
                </div>
              </div>
            </div>

            {/* Column 4: Social/Contact */}
            <div className="flex flex-col items-center">
              <h4 className="font-serif text-lg mb-6 text-brand-600 uppercase tracking-widest">Contato</h4>
              <div className="inline-flex flex-col items-start gap-4">
                <a
                  href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white/80 hover:text-brand-600 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:border-brand-500/20 group-hover:bg-brand-500/5 transition-all">
                    <Instagram size={18} />
                  </div>
                  <span className="text-[0.6rem] tracking-[0.3em] uppercase font-bold">{CONTACT_INFO.instagram}</span>
                </a>

                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white/80 hover:text-brand-400 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:border-brand-500/20 group-hover:bg-brand-500/5 transition-all">
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="transition-transform group-hover:scale-110"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <span className="text-[0.6rem] tracking-[0.3em] uppercase font-bold">Dúvidas? Whatsapp</span>
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col items-center text-[0.55rem] tracking-[0.2em] uppercase font-black text-white/40 gap-4">
            <p>© {new Date().getFullYear()} Nathalia Abreu Studio.</p>
            <p>Brasília </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
