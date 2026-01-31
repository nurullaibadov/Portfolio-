import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import GlassCard from './GlassCard';
import AnimatedSection from './AnimatedSection';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'CityCars.az',
      description: 'A comprehensive car marketplace platform for Azerbaijan. Features include car listings, advanced search filters, dealer management, and responsive design.',
      image: '🚗',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      demo: 'https://city-cars-az.vercel.app/',
      github: 'https://github.com/nurullaibadov/CityCars.az',
      gradient: 'from-blue-500/20 via-cyan-500/20 to-blue-500/20',
    },
    {
      title: 'BINA24',
      description: 'Real estate platform with property listings, search functionality, and user-friendly interface for buying, selling, and renting properties in Azerbaijan.',
      image: '🏠',
      technologies: ['ASP.NET', 'C#', 'SQL Server', 'JavaScript', 'Bootstrap'],
      demo: 'http://realestateapiii-001-site1.mtempurl.com/index.html',
      github: 'https://github.com/nurullaibadov/BINA24',
      gradient: 'from-green-500/20 via-emerald-500/20 to-green-500/20',
    },
    {
      title: 'Zeflix',
      description: 'Netflix clone featuring movie browsing, search functionality, and a sleek streaming-inspired UI. Built with modern web technologies.',
      image: '🎬',
      technologies: ['React', 'JavaScript', 'CSS3', 'TMDB API'],
      demo: 'https://zefeflix.netlify.app/',
      github: 'https://github.com/nurullaibadov/Zeflix-Netflix-CLone-',
      gradient: 'from-red-500/20 via-pink-500/20 to-red-500/20',
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.05),transparent_50%)]" />
      
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
                {t('projects.subtitle')}
              </span>
            </motion.div>
            <h3 className="text-4xl md:text-5xl font-bold text-gradient">
              {t('projects.title')}
            </h3>
          </AnimatedSection>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <GlassCard className="h-full group">
                  {/* Project Image/Icon */}
                  <div className={`relative aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                    <motion.span
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="text-7xl z-10"
                    >
                      {project.image}
                    </motion.span>
                    
                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4"
                    >
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-primary text-primary-foreground rounded-full shadow-glow"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-card border border-border rounded-full hover:border-primary"
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-xs backdrop-blur-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <Button size="sm" asChild className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {t('projects.demo')}
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild className="hover:scale-105 transition-all backdrop-blur-sm">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          {t('projects.code')}
                        </a>
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>

          {/* View More */}
          <AnimatedSection delay={0.5} className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" asChild className="border-primary/30 hover:bg-primary/10 backdrop-blur-sm">
                <a href="https://github.com/nurullaibadov" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  View More on GitHub
                </a>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Projects;
