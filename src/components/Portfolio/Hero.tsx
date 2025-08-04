import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Satyajit-178', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/satyajit-senapati-4a8017336', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:satyajitsenapati178@gmail.com', label: 'Email' },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center lg:max-w-2xl">
      <div className="space-y-8">
        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
            <span className="gradient-text">Satyajit Senapati</span>
          </h1>
          <h2 className="text-xl lg:text-2xl font-medium text-muted-foreground">
            Front End Engineer
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
          I build accessible, pixel-perfect digital experiences for the web with modern technologies and thoughtful design.
        </p>

        {/* Call to action */}
        <div className="pt-4">
          <Button 
            className="glow-border bg-transparent hover:bg-primary/10 text-primary border-primary"
            size="lg"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
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