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
  dark = true // Default to true now for dark theme
}) => {
  return (
    <section
      id={id}
      className={`py-24 md:py-32 px-6 md:px-12 scroll-mt-24 bg-transparent ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-20 space-y-6">
            {title && (
              <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <div className="w-20 h-[1px] bg-brand-500 mx-auto" />
            )}
            {subtitle && (
              <p className="text-white max-w-2xl mx-auto font-light text-base md:text-xl italic">
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