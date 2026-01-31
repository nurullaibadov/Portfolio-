import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: 'primary' | 'accent';
}

const GlassCard = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  glowColor = 'primary'
}: GlassCardProps) => {
  const glowClasses = {
    primary: 'hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]',
    accent: 'hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)]',
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, scale: 1.02 } : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn(
        'relative backdrop-blur-xl bg-card/60 border border-border/50 rounded-2xl overflow-hidden',
        'before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-accent/5 before:opacity-0 before:transition-opacity before:duration-500',
        'hover:before:opacity-100 hover:border-primary/30',
        'transition-all duration-500',
        hoverEffect && glowClasses[glowColor],
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
