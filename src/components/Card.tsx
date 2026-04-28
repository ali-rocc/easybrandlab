import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white p-6 ${
        hover ? 'transition-all duration-200 hover:border-blue-200 hover:shadow-lg' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
