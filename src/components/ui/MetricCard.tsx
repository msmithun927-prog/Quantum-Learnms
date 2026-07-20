import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  value: number;
  suffix?: string;
  label: string;
  icon?: LucideIcon;
  delay?: number;
}

export default function MetricCard({
  value,
  suffix = '',
  label,
  icon: Icon,
  delay = 0,
}: MetricCardProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      delay,
      ease: 'easeOut',
    });
    return controls.stop;
  }, [count, value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative"
    >
      <div className="glass-card p-8 text-center hover:border-gold-500/30 transition-all duration-500">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-electric-500/0 group-hover:from-gold-500/5 group-hover:to-electric-500/5 rounded-2xl transition-all duration-500" />

        {Icon && (
          <div className="relative w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-gold-500/20 to-electric-500/20 flex items-center justify-center">
            <Icon className="w-6 h-6 text-gold-500" />
          </div>
        )}

        <div className="relative">
          <motion.span className="text-4xl md:text-5xl font-display font-bold gradient-text">
            {rounded}
          </motion.span>
          <span className="text-4xl md:text-5xl font-display font-bold text-white/80">
            {suffix}
          </span>
        </div>

        <p className="relative mt-3 text-white/60 text-sm font-medium">{label}</p>
      </div>
    </motion.div>
  );
}
