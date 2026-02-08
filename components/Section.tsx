import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  dark = false
}) => {
  return (
    <section
      id={id}
      className={`py-8 md:py-32 px-6 md:px-12 scroll-mt-24 bg-transparent ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-10 md:mb-20 space-y-6">
            {title && (
              <h2 className="text-4xl md:text-6xl font-serif text-stone-900 tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-stone-700 max-w-2xl mx-auto font-light text-base md:text-xl italic">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;