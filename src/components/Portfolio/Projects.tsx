import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      year: '2024',
      title: '5 Common Accessibility Pitfalls and How to Avoid Them',
      description: 'A comprehensive guide covering the most frequent accessibility issues in modern web development and practical solutions to address them.',
      image: '/lovable-uploads/bac5f06c-280a-4b5a-b0cb-1c36937e58a2.png',
      technologies: ['React', 'TypeScript', 'Accessibility', 'WCAG'],
      links: [
        { type: 'external', url: '#', label: 'Read Article' },
        { type: 'github', url: '#', label: 'Source' }
      ]
    },
    {
      year: '2023',
      title: 'E-Commerce Platform with Modern Stack',
      description: 'Built a full-stack e-commerce platform with payment integration, inventory management, and responsive design.',
      image: '/lovable-uploads/1543be93-f1cd-475f-a561-d68a681bc24c.png',
      technologies: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
      links: [
        { type: 'external', url: '#', label: 'Live Demo' },
        { type: 'github', url: '#', label: 'GitHub' }
      ]
    },
    {
      year: '2022',
      title: 'AI-Powered Task Management App',
      description: 'Developed an intelligent task management application that uses machine learning to prioritize tasks and suggest optimal scheduling.',
      image: '/lovable-uploads/ca8c908f-fbbd-4b77-b51a-5d956ff419a2.png',
      technologies: ['React', 'Python', 'TensorFlow', 'Express'],
      links: [
        { type: 'external', url: '#', label: 'Try App' },
        { type: 'github', url: '#', label: 'Code' }
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold mb-12 glow-text tracking-wide">PROJECTS</h2>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <article key={index} className="project-card group cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
                {/* Project Image */}
                <div className="lg:col-span-1">
                  <div className="aspect-video lg:aspect-square w-full rounded-lg overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="lg:col-span-3 space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-medium">
                      {project.year}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Project Links */}
                  <div className="flex flex-wrap gap-4">
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.type === 'github' ? (
                          <Github className="w-4 h-4" />
                        ) : (
                          <ExternalLink className="w-4 h-4" />
                        )}
                        {link.label}
                      </a>
                    ))}
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            variant="outline" 
            className="glow-border"
            asChild
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              View Full Project Archive
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;