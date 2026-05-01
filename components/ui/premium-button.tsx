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
    'font-poppins font-semibold transition-all duration-300 rounded-lg border';

  const variants = {
    primary:
      'bg-accent text-black border-accent hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/50',
    secondary:
      'bg-transparent text-accent border-accent hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20',
    ghost:
      'bg-transparent text-foreground border-muted hover:border-accent hover:text-accent',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
