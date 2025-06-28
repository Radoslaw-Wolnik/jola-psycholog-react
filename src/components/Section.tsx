// src/components/Section.tsx
import clsx from 'clsx';
import React, { type CSSProperties, type ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  /** Tailwind or custom class for background color (e.g. 'bg-amber-200') */
  bgClassName?: string;
  /** Image URL for background (will override bgClassName if provided) */
  bgImageUrl?: string;
  /** Optional overlay opacity, e.g. 'bg-black/25' */
  overlayClassName?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  className = '',
  bgClassName,
  bgImageUrl,
  overlayClassName,
}) => {
  // build inline style for background image if provided
  const style: CSSProperties = bgImageUrl
    ? {
        backgroundImage: `url('${bgImageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {};

  return (
    <section id={id} className={clsx('relative py-4 md:py-4', className)}>
      {/* Background color or image */}
      <div
        className={clsx(
          'absolute inset-0',
          bgClassName && bgClassName,
        )}
        style={style}
        aria-hidden="true"
      />

      {/* Optional overlay */}
      {overlayClassName && (
        <div className={clsx('absolute inset-0', overlayClassName)} aria-hidden="true" />
      )}

      {/* Content wrapper */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-4 lg:py-8 rounded-xl">
        {title && (
          <h2 className="text-3xl md:text-4xl mb-10 text-center font-header1 text-brown-text">
            {title}
          </h2>
        )}

        {children}
      </div>
    </section>
  );
};

export default Section;
