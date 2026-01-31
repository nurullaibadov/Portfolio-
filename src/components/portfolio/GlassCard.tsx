import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: 'primary' | 'accent';
}

import TiltCard from '@/components/ui/TiltCard';

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

  const CardContent = (
    <motion.div
      whileHover={hoverEffect ? { y: -5, scale: 1.02 } : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn(
        'relative backdrop-blur-xl bg-card/40 border border-white/10 rounded-2xl overflow-hidden group',
        'before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/10 before:to-transparent before:opacity-0 before:transition-all before:duration-500 before:pointer-events-none',
        'after:absolute after:inset-0 after:bg-gradient-to-tl after:from-transparent after:via-white/5 after:to-transparent after:opacity-0 after:translate-x-[-100%] after:transition-all after:duration-700 after:pointer-events-none',
        'hover:before:opacity-100 hover:after:opacity-100 hover:after:translate-x-[100%] hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(var(--primary-rgb),0.3)] hover:border-primary/50',
        hoverEffect && glowClasses[glowColor],
        className
      )}
    >
      {children}
    </motion.div>
  );

  if (hoverEffect) {
    return <TiltCard>{CardContent}</TiltCard>;
  }

  return CardContent;
};

export default GlassCard;
