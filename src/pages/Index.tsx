import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Experience from '@/components/portfolio/Experience';
import Projects from '@/components/portfolio/Projects';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';

import CustomCursor from '@/components/ui/CustomCursor';
import MatrixBackground from '@/components/ui/MatrixBackground';
import ScrollProgress from '@/components/ui/ScrollProgress';
import ScanlineOverlay from '@/components/ui/ScanlineOverlay';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScanlineOverlay />
      <ScrollProgress />
      <CustomCursor />
      <MatrixBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
