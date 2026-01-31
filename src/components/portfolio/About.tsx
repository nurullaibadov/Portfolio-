import { motion } from 'framer-motion';
import { Code2, Briefcase, Award, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import GlassCard from './GlassCard';
import AnimatedSection from './AnimatedSection';
import profileImage from '@/assets/profile-image.png';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Briefcase, value: '5+', label: t('about.years') },
    { icon: Code2, value: '20+', label: t('about.projects') },
    { icon: Award, value: '15+', label: t('about.technologies') },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-primary uppercase tracking-widest">
                {t('about.subtitle')}
              </span>
            </motion.div>
            <h3 className="text-4xl md:text-5xl font-bold text-gradient">
              {t('about.title')}
            </h3>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image/Visual */}
            <AnimatedSection delay={0.2}>
              <div className="relative group">
                <GlassCard className="p-8" hoverEffect={false}>
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      src={profileImage}
                      alt="Nurulla Ibadov"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    
                    {/* Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                      <h4 className="text-2xl font-bold mb-1">Nurulla Ibadov</h4>
                      <p className="text-primary font-mono text-sm">Senior Software Developer</p>
                      <p className="text-sm text-muted-foreground mt-1">📍 Baku, Azerbaijan</p>
                    </div>
                  </div>
                </GlassCard>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl"
                />
              </div>
            </AnimatedSection>

            {/* Content */}
            <div className="space-y-6">
              <AnimatedSection delay={0.3}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.description1')}
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.description2')}
                </p>
              </AnimatedSection>

              {/* Stats */}
              <AnimatedSection delay={0.5}>
                <div className="grid grid-cols-3 gap-4 pt-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <GlassCard className="p-4 text-center" glowColor={index === 1 ? 'accent' : 'primary'}>
                        <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                        <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
