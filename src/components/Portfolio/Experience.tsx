import { ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      period: 'JUN — JUL 2025',
      company: 'Delloite',
      position: 'Data Visualization Intern',
      description: 'Worked on creating interactive data visualizations using Tableau and Power BI. Collaborated with cross-functional teams to develop data-driven solutions for clients.',
      technologies: ['Tableau', 'Power BI', 'SQL', 'Excel'],
      links: [
        
      ]
    },
    {
      period: 'JUN — SEP 2021',
      company: 'IBM',
      position: 'AI-ML Intern',
      description: 'Worked on a project to develop a chatbot using IBM Watson. Gained experience in natural language processing and machine learning.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'IBM Watson'],
      links: [
  
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold mb-12 glow-text tracking-wide">EXPERIENCE</h2>
        
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
                {/* Period */}
                <div className="lg:col-span-1">
                  <p className="text-sm text-muted-foreground font-medium tracking-wide">
                    {exp.period}
                  </p>
                </div>
                
                {/* Content */}
                <div className="lg:col-span-3 space-y-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {exp.position} · {exp.company}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {/* Links */}
                  <div className="flex flex-wrap gap-4">
                    {exp.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        className="text-sm text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, techIndex) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;