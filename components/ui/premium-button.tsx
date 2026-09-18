'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PremiumButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function PremiumButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
}: PremiumButtonProps) {
  const baseClasses =
    'group/btn relative inline-flex items-center justify-center gap-2.5 font-sans font-semibold uppercase tracking-[0.08em] transition-colors duration-300 rounded-sm border overflow-hidden';

  const variants = {
    primary:
      'bg-foreground text-background border-foreground hover:text-accent-foreground',
    secondary:
      'bg-transparent text-foreground border-foreground/30 hover:border-foreground',
    ghost:
      'bg-transparent text-foreground border-transparent hover:text-accent',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4.5 text-sm',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {variant === 'primary' && (
        <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover/btn:scale-x-100" />
      )}
      <span className="relative">{children}</span>
      <span className="relative transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
    </motion.button>
  );
}
