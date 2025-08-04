import Hero from '@/components/Portfolio/Hero';
import About from '@/components/Portfolio/About';
import Experience from '@/components/Portfolio/Experience';
import TechStack from '@/components/Portfolio/TechStack';
import Projects from '@/components/Portfolio/Projects';
import BackgroundElements from '@/components/Portfolio/BackgroundElements';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundElements />
      
      <div className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="lg:flex lg:gap-16">
            {/* Left side - Hero (sticky on large screens) */}
            <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center">
              <Hero />
            </div>
            
            {/* Right side - Content */}
            <div className="lg:w-1/2 lg:py-24">
              <About />
              <Experience />
              <TechStack />
              <Projects />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
