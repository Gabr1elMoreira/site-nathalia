
import React, { useEffect } from 'react';
import { X, Clock, Calendar, CheckCircle, Sparkles } from 'lucide-react';
import { Service } from '../types';
import Button from './Button';
import { CONTACT_INFO } from '../constants';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (service) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [service]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-0 md:p-6">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur-xl transition-opacity duration-500"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="bg-zinc-950 w-full h-full md:h-auto md:max-w-5xl md:max-h-[85vh] overflow-hidden md:rounded-lg shadow-2xl relative z-10 flex flex-col md:flex-row animate-fade-in-up border border-white/10">

        {/* Close Button - Enhanced for Mobile */}
        <button
          onClick={onClose}
          className="fixed md:absolute top-4 right-4 md:top-6 md:right-6 z-[160] p-4 md:p-3 bg-zinc-900/80 md:bg-white/5 backdrop-blur-md rounded-full text-white hover:bg-brand-500 transition-all duration-300 shadow-2xl group border border-white/10"
          aria-label="Fechar"
        >
          <X size={24} className="group-hover:rotate-90 transition-transform md:w-5 md:h-5" />
        </button>

        {/* Image Side */}
        <div className="w-full md:w-5/12 h-[35vh] md:h-auto relative shrink-0 overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent md:bg-zinc-950/10" />
          <div className="absolute bottom-6 left-6 md:hidden">
            <h3 className="text-3xl font-serif text-white uppercase tracking-tight">{service.title}</h3>
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-7/12 p-6 md:p-12 lg:p-14 flex flex-col overflow-y-auto bg-zinc-950 text-white custom-scrollbar">
          {/* Header */}
          <div className="mb-8 space-y-4">
            <div className="flex items-center gap-2 text-brand-600">
              <Sparkles size={16} />
              <span className="text-[0.6rem] uppercase tracking-[0.3em] font-black">Procedimento de Luxo</span>
            </div>
            <h3 className="text-4xl lg:text-5xl font-serif text-white leading-tight hidden md:block uppercase tracking-tight">{service.title}</h3>
            <div className="flex items-baseline gap-4 pt-2">
              <span className="text-3xl font-serif text-brand-600">{service.priceEstimate}</span>
              <div className="h-[1px] flex-grow bg-white/10 hidden md:block" />
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 p-4 rounded border border-white/5">
              <div className="flex items-center gap-2 mb-2 text-brand-600">
                <Clock size={16} />
                <span className="text-[0.55rem] uppercase tracking-[0.2em] font-black">Duração</span>
              </div>
              <p className="text-sm text-white font-medium">{service.duration || '2 horas'}</p>
            </div>
            <div className="bg-white/5 p-4 rounded border border-white/5">
              <div className="flex items-center gap-2 mb-2 text-brand-600">
                <Calendar size={16} />
                <span className="text-[0.55rem] uppercase tracking-[0.2em] font-black">Manutenção</span>
              </div>
              <p className="text-sm text-white font-medium">{service.maintenance || '20 dias'}</p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6 mb-10">
            <h4 className="text-[0.6rem] uppercase tracking-[0.3em] font-black text-white/40 flex items-center gap-4">
              <span>A Técnica</span>
              <div className="h-[1px] flex-grow bg-white/5" />
            </h4>
            <p className="text-white/90 leading-relaxed font-light text-base md:text-lg">
              {service.fullDescription || service.description}
            </p>

            <div className="grid grid-cols-1 gap-4 pt-4">
              {[
                'Materiais Premium Hipoalergênicos',
                'Visagismo Personalizado',
                'Ambiente Exclusivo e Relaxante'
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="mt-1 w-5 h-5 rounded-full bg-brand-600/10 flex items-center justify-center shrink-0 border border-brand-600/20">
                    <CheckCircle size={12} className="text-brand-600" />
                  </div>
                  <span className="text-white/80 text-sm font-light leading-snug">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action */}
          <div className="mt-auto pt-6 border-t border-white/20">
            <a
              href={CONTACT_INFO.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Button fullWidth variant="brand" className="py-6 shadow-2xl transition-all hover:scale-[1.02] active:scale-95">
                RESERVAR HORÁRIO
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;