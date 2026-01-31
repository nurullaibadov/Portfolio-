import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Youtube, Mail, Download, ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import MagneticButton from '@/components/ui/MagneticButton';
import GlitchText from '@/components/ui/GlitchText';
import TypeWriter from './TypeWriter';
import profileImage from '@/assets/profile-image.png';

const Hero = () => {
  const { t, language } = useLanguage();

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nurulla-ibadov-7971732a5/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/nurullaibadov', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/nikomoserr/', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/@Softwareniko21', label: 'YouTube' },
    { icon: Mail, href: 'mailto:ibadnurulla@gmail.com', label: 'Email' },
  ];

  const roles = language === 'en'
    ? ['Senior Software Developer', 'Backend Developer', 'Software Instructor', 'Full Stack Developer']
    : ['Baş Proqram Tərtibatçısı', 'Backend Developer', 'Proqram Müəllimi', 'Full Stack Developer'];

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl mix-blend-screen"
        />
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary-rgb),0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary-rgb),0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative group"
            >
              {/* Glow Effect */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-md opacity-75 group-hover:opacity-100"
              />
              <div className="relative">
                <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={profileImage}
                    alt="Nurulla Ibadov"
                    loading="eager"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-full border border-primary/30 shadow-glow"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Greeting */}

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-primary font-mono text-lg mb-4"
              >
                {t('hero.greeting')}
              </motion.p>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6"
              >
                <span className="text-gradient">
                  <GlitchText text="Nurulla Ibadov" />
                </span>
              </motion.h1>

              {/* Animated Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6 h-12 md:h-14"
              >
                <TypeWriter words={roles} typingSpeed={80} deletingSpeed={40} pauseTime={2500} />
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              >
                {t('hero.description')}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
              >
                <MagneticButton>
                  <Button
                    size="lg"
                    className="group bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-6 text-lg shadow-glow transition-all hover:shadow-xl hover:scale-105"
                    onClick={scrollToProjects}
                  >
                    {t('hero.cta')}
                    <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  </Button>
                </MagneticButton>

                <MagneticButton>
                  <Button
                    variant="outline"
                    size="lg"
                    className="group px-8 py-6 text-lg border-primary/30 hover:bg-primary/10 backdrop-blur-sm hover:scale-105 transition-all"
                    asChild
                  >
                    <a href="/Nurulla_Ibadov_Resume.pdf" download>
                      <Download className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                      {t('hero.download')}
                    </a>
                  </Button>
                </MagneticButton>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center justify-center lg:justify-start gap-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary hover:shadow-glow hover:bg-primary/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2 backdrop-blur-sm"
        >
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
