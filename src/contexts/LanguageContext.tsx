import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'az';

interface Translations {
  [key: string]: {
    en: string;
    az: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', az: 'Ana səhifə' },
  'nav.about': { en: 'About', az: 'Haqqımda' },
  'nav.skills': { en: 'Skills', az: 'Bacarıqlar' },
  'nav.experience': { en: 'Experience', az: 'Təcrübə' },
  'nav.projects': { en: 'Projects', az: 'Layihələr' },
  'nav.contact': { en: 'Contact', az: 'Əlaqə' },
  
  // Hero
  'hero.greeting': { en: "Hello, I'm", az: 'Salam, mən' },
  'hero.role': { en: 'Senior Software Developer', az: 'Baş Proqram Tərtibatçısı' },
  'hero.description': { en: 'Passionate about creating elegant solutions with 5+ years of experience in building scalable web applications and backend systems.', az: '5+ illik təcrübə ilə miqyaslana bilən veb tətbiqləri və backend sistemləri qurmaqda zərif həllər yaratmağa həvəsli.' },
  'hero.cta': { en: 'View My Work', az: 'İşlərimi Görün' },
  'hero.download': { en: 'Download Resume', az: 'CV Yüklə' },
  
  // About
  'about.title': { en: 'About Me', az: 'Haqqımda' },
  'about.subtitle': { en: 'Get to know me better', az: 'Məni daha yaxından tanıyın' },
  'about.description1': { en: "I'm a dedicated Backend Developer with a passion for building robust, scalable applications. Currently based in Baku, Azerbaijan, I specialize in creating efficient server-side solutions using modern technologies.", az: 'Mən möhkəm, miqyaslana bilən tətbiqlər qurmağa həvəsli bir Backend Developerəm. Hazırda Bakıda yaşayıram və müasir texnologiyalardan istifadə edərək səmərəli server tərəfi həlləri yaratmaqda ixtisaslaşmışam.' },
  'about.description2': { en: "With experience at companies like Vivisolis and Jet Academy, I've developed expertise in RESTful APIs, code optimization, and maintaining high-quality codebases. I'm committed to continuous learning and delivering exceptional results.", az: 'Vivisolis və Jet Academy kimi şirkətlərdə təcrübəmlə RESTful API-lər, kod optimallaşdırması və yüksək keyfiyyətli kod bazalarının saxlanması sahəsində təcrübə qazandım. Davamlı öyrənməyə və müstəsna nəticələr təqdim etməyə sadiqəm.' },
  'about.years': { en: 'Years Experience', az: 'İllik Təcrübə' },
  'about.projects': { en: 'Projects Completed', az: 'Tamamlanmış Layihələr' },
  'about.technologies': { en: 'Technologies', az: 'Texnologiyalar' },
  
  // Skills
  'skills.title': { en: 'Skills & Technologies', az: 'Bacarıqlar və Texnologiyalar' },
  'skills.subtitle': { en: 'Technologies I work with', az: 'İşlədiyim texnologiyalar' },
  'skills.backend': { en: 'Backend', az: 'Backend' },
  'skills.frontend': { en: 'Frontend', az: 'Frontend' },
  'skills.database': { en: 'Database', az: 'Verilənlər bazası' },
  'skills.tools': { en: 'Tools & Others', az: 'Alətlər və Digər' },
  
  // Experience
  'experience.title': { en: 'Experience', az: 'Təcrübə' },
  'experience.subtitle': { en: 'My professional journey', az: 'Peşəkar yolum' },
  'experience.education': { en: 'Education', az: 'Təhsil' },
  
  // Projects
  'projects.title': { en: 'Featured Projects', az: 'Seçilmiş Layihələr' },
  'projects.subtitle': { en: 'Some of my recent work', az: 'Son işlərimdən bəziləri' },
  'projects.demo': { en: 'Live Demo', az: 'Canlı Demo' },
  'projects.code': { en: 'View Code', az: 'Kodu Gör' },
  
  // Contact
  'contact.title': { en: 'Get In Touch', az: 'Əlaqə Saxlayın' },
  'contact.subtitle': { en: "Let's work together", az: 'Birlikdə işləyək' },
  'contact.description': { en: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.", az: 'Mən həmişə yeni layihələri, yaradıcı fikirləri və ya vizyonunuzun bir hissəsi olmaq imkanlarını müzakirə etməyə açığam.' },
  'contact.email': { en: 'Email Me', az: 'E-poçt Göndər' },
  'contact.location': { en: 'Location', az: 'Məkan' },
  'contact.phone': { en: 'Phone', az: 'Telefon' },
  
  // Footer
  'footer.rights': { en: 'All rights reserved.', az: 'Bütün hüquqlar qorunur.' },
  'footer.built': { en: 'Built with React & TypeScript', az: 'React və TypeScript ilə qurulub' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
