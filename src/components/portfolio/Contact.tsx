import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram, Youtube, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import GlassCard from './GlassCard';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'ibadnurulla@gmail.com',
      href: 'mailto:ibadnurulla@gmail.com',
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: 'Baku, Azerbaijan',
      href: null,
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+994 55 258 19 01',
      href: 'tel:+994552581901',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nurulla-ibadov-7971732a5/', label: 'LinkedIn', hoverClass: 'hover:bg-blue-500 hover:border-blue-500' },
    { icon: Github, href: 'https://github.com/nurullaibadov', label: 'GitHub', hoverClass: 'hover:bg-gray-700 hover:border-gray-700' },
    { icon: Instagram, href: 'https://www.instagram.com/nikomoserr/', label: 'Instagram', hoverClass: 'hover:bg-pink-500 hover:border-pink-500' },
    { icon: Youtube, href: 'https://www.youtube.com/@Softwareniko21', label: 'YouTube', hoverClass: 'hover:bg-red-500 hover:border-red-500' },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-1/4 right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
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
                {t('contact.subtitle')}
              </span>
            </motion.div>
            <h3 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              {t('contact.title')}
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </AnimatedSection>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard className="p-6 text-center group">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-glow transition-all duration-300"
                  >
                    <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </motion.div>
                  <h4 className="font-semibold mb-1">{item.label}</h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.value}</p>
                  )}
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA Button */}
          <AnimatedSection delay={0.3} className="text-center mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-10 py-7 text-lg shadow-glow hover:shadow-xl transition-all"
                asChild
              >
                <a href="mailto:ibadnurulla@gmail.com">
                  <Send className="mr-2 h-5 w-5" />
                  {t('contact.email')}
                </a>
              </Button>
            </motion.div>
          </AnimatedSection>

          {/* Social Links */}
          <AnimatedSection delay={0.4} className="text-center">
            <p className="text-muted-foreground mb-6">Or find me on social media</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className={`p-4 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:text-primary-foreground transition-all duration-300 ${social.hoverClass}`}
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
