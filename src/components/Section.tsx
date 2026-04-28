import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function Section({ children, className = '', id, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`section-padding ${dark ? 'bg-slate-900 text-white' : 'bg-white'} ${className}`}
    >
      <div className="container-custom">{children}</div>
    </section>
  );
}
