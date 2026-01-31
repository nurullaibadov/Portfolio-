import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import GlassCard from './GlassCard';
import AnimatedSection from './AnimatedSection';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      type: 'work',
      role: 'Software Instructor',
      company: 'Peerstack',
      location: 'Baku, Azerbaijan',
      period: 'Jan 2026 - Present',
      description: [
        'Teaching software development fundamentals and advanced concepts to students',
        'Developing comprehensive curriculum for web development courses',
        'Mentoring aspiring developers and conducting code reviews',
      ],
      skills: ['Teaching', 'React', 'TypeScript', 'Node.js', 'Mentoring'],
      current: true,
    },
    {
      type: 'work',
      role: 'Backend Developer',
      company: 'Vivisolis',
      location: 'Baku, Azerbaijan',
      period: 'Jan 2025 - May 2025',
      description: [
        'Implemented RESTful APIs for seamless frontend-backend communication',
        'Conducted code reviews and maintained high code quality standards',
        'Reduced user-reported errors by 15% through bug fixes and optimizations',
      ],
      skills: ['C#', 'ASP.NET', 'REST API', 'SQL Server'],
      current: false,
    },
    {
      type: 'work',
      role: 'Frontend Developer',
      company: 'Jet Academy',
      location: 'Baku, Azerbaijan',
      period: 'Oct 2024 - Jan 2025',
      description: [
        'Designed and developed responsive websites using modern technologies',
        'Collaborated with UI/UX designers to integrate design mockups',
        'Enhanced user experience through user-friendly interfaces',
      ],
      skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind'],
      current: false,
    },
  ];

  const education = [
    {
      degree: "Bachelor's in Information Technology",
      institution: 'Azerbaijan Technical University',
      period: 'Sep 2022 - Jun 2026',
      description: 'Strong foundation in computer science, programming, networking, and database management.',
    },
    {
      degree: 'Honor Diploma - Backend Developer',
      institution: 'Code Academy',
      period: 'Sep 2024 - Feb 2025',
      description: 'Intensive program focusing on backend development, database management, and system design.',
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">
              {t('experience.subtitle')}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gradient">
              {t('experience.title')}
            </h3>
          </AnimatedSection>

          {/* Work Experience */}
          <div className="mb-16">
            <AnimatedSection className="flex items-center gap-3 mb-8">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-2 rounded-lg bg-primary/10 backdrop-blur-sm"
              >
                <Briefcase className="h-6 w-6 text-primary" />
              </motion.div>
              <h4 className="text-2xl font-bold">Work Experience</h4>
            </AnimatedSection>

            <div className="space-y-6 relative">
              {/* Timeline Line */}
              <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />
              
              {experiences.map((exp, index) => (
                <AnimatedSection key={index} delay={index * 0.15}>
                  <div className="flex gap-6">
                    {/* Timeline Dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="hidden md:flex relative z-10"
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${exp.current ? 'bg-primary shadow-glow' : 'bg-card border-2 border-primary/50'}`}>
                        <div className={`w-2 h-2 rounded-full ${exp.current ? 'bg-primary-foreground animate-pulse' : 'bg-primary'}`} />
                      </div>
                    </motion.div>

                    <GlassCard className="flex-1 p-6 group">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h5 className="text-xl font-bold group-hover:text-primary transition-colors">
                              {exp.role}
                            </h5>
                            {exp.current && (
                              <Badge className="bg-green-500/20 text-green-500 border-green-500/30">
                                Current
                              </Badge>
                            )}
                          </div>
                          <p className="text-primary font-medium">{exp.company}</p>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </div>
                        </div>
                        <Badge variant="outline" className="flex items-center gap-2 shrink-0 backdrop-blur-sm">
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </Badge>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <span className="text-primary mt-1.5">▸</span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <motion.div key={i} whileHover={{ scale: 1.1 }}>
                            <Badge variant="secondary" className="text-xs backdrop-blur-sm">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </GlassCard>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <AnimatedSection className="flex items-center gap-3 mb-8">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-2 rounded-lg bg-accent/10 backdrop-blur-sm"
              >
                <GraduationCap className="h-6 w-6 text-accent" />
              </motion.div>
              <h4 className="text-2xl font-bold">{t('experience.education')}</h4>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <AnimatedSection key={index} delay={index * 0.15}>
                  <GlassCard className="p-6 h-full group" glowColor="accent">
                    <Badge variant="outline" className="mb-4 flex items-center gap-2 w-fit backdrop-blur-sm">
                      <Calendar className="h-3 w-3" />
                      {edu.period}
                    </Badge>
                    <h5 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h5>
                    <p className="text-primary font-medium mb-3">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </GlassCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
