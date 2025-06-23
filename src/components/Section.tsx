// src/components/Section.tsx (reusable section wrapper)
import React, { type ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => (
  <section id={id} className={`py-4 md:py-8 ${className}`}>
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-16 py-4 lg:py-8 bg-amber-200">
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