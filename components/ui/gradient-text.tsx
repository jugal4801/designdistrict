'use client';

import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-accent via-accent to-accent/50 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
