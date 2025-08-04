import { useState, useEffect, useMemo } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [activeSection, setActiveSection] = useState('about');
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Satyajit-178', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/satyajit-senapati-4a8017336', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:satyajitsenapati178@gmail.com', label: 'Email' },
  ];

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
    <section className="min-h-screen flex flex-col justify-center lg:max-w-2xl">
      <div className="space-y-8">
        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
            <span className="gradient-text">Satyajit Senapati</span>
          </h1>
        </div>

        {/* Enhanced Vertical Navigation - Left Aligned */}
        <div className="flex flex-col items-start space-y-4 pt-8">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-sm font-medium tracking-wider transition-all duration-300 relative group",
                  "hover:text-primary hover:scale-105 transform",
                  activeSection === item.id 
                    ? "text-primary" 
                    : "text-muted-foreground"
                )}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-primary/10 rounded-lg -m-2 animate-pulse" />
                )}
                <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>
        </div>

        {/* Social links */}
        <div className="flex space-x-6 pt-8">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                aria-label={link.label}
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Floating decoration */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-xl float hidden lg:block" />
      <div className="absolute bottom-40 right-40 w-20 h-20 bg-primary/5 rounded-full blur-lg float hidden lg:block" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;