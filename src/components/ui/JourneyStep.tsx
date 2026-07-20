import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface JourneyStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  isLast?: boolean;
}

export default function JourneyStep({
  icon: Icon,
  title,
  description,
  index,
  isLast,
}: JourneyStepProps) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Connecting line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-gold-500/50 to-electric-500/50" />
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative z-10"
      >
        {/* Icon container */}
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/30 mb-6">
          <Icon className="w-10 h-10 text-navy-900" />
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gold-500/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

        {/* Step number */}
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-navy-900 border-2 border-gold-500 flex items-center justify-center text-xs font-bold text-gold-500">
          {index + 1}
        </div>
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
        className="text-lg font-semibold text-white mb-2"
      >
        {title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        className="text-sm text-white/60 text-center max-w-[150px]"
      >
        {description}
      </motion.p>
    </div>
  );
}
