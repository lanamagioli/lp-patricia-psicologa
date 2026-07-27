import { motion } from 'motion/react';
import React, { ReactNode, useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  key?: React.Key;
}

export const FadeIn = ({ children, delay = 0, duration = 0.8, className = '', direction = 'up' }: FadeInProps) => {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const Button = ({ children, href, onClick, className = '', type, target }: { children: ReactNode, href?: string, onClick?: () => void, className?: string, type?: 'button' | 'submit' | 'reset', target?: string }) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-4 bg-brand-olive-dark text-white rounded-md font-medium tracking-wide transition-all duration-300 hover:bg-brand-pink-dark hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-pink-light focus:ring-offset-2 focus:ring-offset-brand-offwhite";
  
  if (href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={`${baseStyle} ${className}`}>
        {children}
      </a>
    );
  }
  
  return (
    <button type={type} onClick={onClick} className={`${baseStyle} ${className}`}>
      {children}
    </button>
  );
};

export const Marquee = () => {
  const text = "Se você não sabe para onde vai, qualquer caminho serve.";
  
  return (
    <div className="w-full bg-brand-beige py-4 overflow-hidden border-y border-brand-lavender/30">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Double the content for smooth infinite scrolling */}
        <div className="flex shrink-0 items-center justify-around w-[200%]">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-brand-brown font-serif italic text-lg px-8">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-brand-olive-dark text-white shadow-lg hover:bg-brand-pink-dark transition-colors z-50 ${!isVisible && 'pointer-events-none'}`}
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={24} />
    </motion.button>
  );
};
