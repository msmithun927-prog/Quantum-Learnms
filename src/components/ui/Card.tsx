import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  className?: string;
  variant?: 'default' | 'gold' | 'electric';
  children?: ReactNode;
}

export default function Card({
  icon: Icon,
  title,
  description,
  className = '',
  variant = 'default',
  children,
}: CardProps) {
  const variants = {
    default: {
      glow: 'hover:shadow-white/5',
      border: 'hover:border-white/20',
      iconBg: 'bg-gradient-to-br from-gold-500/20 to-electric-500/20',
      iconText: 'text-gold-500',
    },
    gold: {
      glow: 'hover:shadow-gold-500/20',
      border: 'hover:border-gold-500/40',
      iconBg: 'bg-gradient-to-br from-gold-500/30 to-gold-600/30',
      iconText: 'text-gold-400',
    },
    electric: {
      glow: 'hover:shadow-electric-500/20',
      border: 'hover:border-electric-500/40',
      iconBg: 'bg-gradient-to-br from-electric-500/30 to-electric-600/30',
      iconText: 'text-electric-400',
    },
  };

  const style = variants[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`group glass-card p-8 ${style.glow} ${style.border} ${className}`}
    >
      {Icon && (
        <div
          className={`w-14 h-14 ${style.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
        >
          <Icon className={`w-7 h-7 ${style.iconText}`} />
        </div>
      )}
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-white/60 leading-relaxed">{description}</p>
      {children}
    </motion.div>
  );
}
