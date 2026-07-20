import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeaderProps {
  badge?: string;
  heading: string;
  subheading?: string;
  align?: 'left' | 'center';
  children?: ReactNode;
}

export default function SectionHeader({
  badge,
  heading,
  subheading,
  align = 'center',
  children,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-sm font-medium mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
          {badge}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="section-heading text-white"
      >
        {heading}
      </motion.h2>
      {subheading && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`section-subheading mt-6 ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subheading}
        </motion.p>
      )}
      {children}
    </div>
  );
}
