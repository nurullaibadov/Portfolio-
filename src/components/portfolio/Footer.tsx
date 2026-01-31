import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 bg-card/50 backdrop-blur-sm border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold text-gradient inline-block mb-2"
            >
              {'<NI />'}
            </motion.a>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nurulla Ibadov. {t('footer.rights')}
            </p>
          </div>

          {/* Built with */}


          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-primary/10 border border-primary/30 hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
