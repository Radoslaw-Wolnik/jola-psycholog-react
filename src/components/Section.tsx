// src/components/Section.tsx (reusable section wrapper)
import React, { type ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="container mx-auto px-4 max-w-4xl">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-secondary">
          {title}
        </h2>
      )}
      {children}
    </div>
  </section>
);

export default Section;