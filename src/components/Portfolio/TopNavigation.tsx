import { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';

const TopNavigation = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = useMemo(() => [
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'techstack', label: 'TECH STACK' },
    { id: 'projects', label: 'PROJECTS' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;
      setIsScrolled(window.scrollY > 50);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled 
        ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex justify-center py-6">
          <div className={cn(
            "flex space-x-8 px-8 py-3 rounded-full transition-all duration-500",
            isScrolled 
              ? "bg-secondary/20 border border-border/30" 
              : "bg-background/10 backdrop-blur-sm border border-primary/20"
          )}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-sm font-medium tracking-wider transition-all duration-300 relative",
                  "hover:text-primary hover:scale-105",
                  activeSection === item.id
                    ? "text-primary" 
                    : "text-muted-foreground"
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary to-transparent rounded-full animate-fade-in" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
    </nav>
  );
};

export default TopNavigation;