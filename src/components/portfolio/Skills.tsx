import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import GlassCard from './GlassCard';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.backend'),
      icon: '⚡',
      skills: ['C#', 'ASP.NET Core', 'REST API', 'Web API', 'Python', 'Node.js'],
      gradient: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'group-hover:border-blue-500/50',
    },
    {
      title: t('skills.frontend'),
      icon: '🎨',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
      gradient: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'group-hover:border-purple-500/50',
    },
    {
      title: t('skills.database'),
      icon: '🗄️',
      skills: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
      gradient: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'group-hover:border-green-500/50',
    },
    {
      title: t('skills.tools'),
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'Linux', 'Docker', 'VS Code', 'Postman', 'Azure'],
      gradient: 'from-orange-500/20 to-amber-500/20',
      borderColor: 'group-hover:border-orange-500/50',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">
              {t('skills.subtitle')}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gradient">
              {t('skills.title')}
            </h3>
          </AnimatedSection>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlassCard className={`p-6 group ${category.borderColor}`}>
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.span
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl"
                      >
                        {category.icon}
                      </motion.span>
                      <h4 className="text-xl font-bold">{category.title}</h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            variant="secondary"
                            className="px-3 py-1.5 text-sm font-medium bg-secondary/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default border border-transparent hover:border-primary/50"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Languages */}
          <AnimatedSection delay={0.4} className="mt-12 text-center">
            <h4 className="text-lg font-semibold mb-6 text-muted-foreground">Languages I Speak</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {['🇬🇧 English', '🇹🇷 Turkish', '🇦🇿 Azerbaijani', '🇷🇺 Russian'].map((lang, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="outline"
                    className="px-5 py-2.5 text-base border-primary/30 hover:border-primary hover:bg-primary/10 backdrop-blur-sm transition-all cursor-default"
                  >
                    {lang}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Skills;
