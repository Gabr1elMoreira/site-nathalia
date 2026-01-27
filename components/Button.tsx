import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white' | 'brand';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "px-10 py-4 transition-all duration-500 tracking-[0.2em] uppercase text-[0.65rem] font-bold border relative overflow-hidden group";

  const variants = {
    primary: "bg-zinc-900 text-white border-zinc-900 hover:bg-black hover:shadow-2xl hover:-translate-y-0.5",
    brand: "bg-brand-600 text-white border-brand-600 hover:bg-brand-700 hover:shadow-brand-200/50 hover:shadow-2xl hover:-translate-y-0.5",
    outline: "bg-transparent text-white border-white/40 hover:border-white hover:bg-white/5 hover:-translate-y-0.5",
    white: "bg-white text-zinc-900 border-white hover:bg-brand-50 hover:shadow-xl hover:-translate-y-0.5"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 w-0 bg-white/5 transition-all duration-500 group-hover:w-full" />
    </button>
  );
};

export default Button;