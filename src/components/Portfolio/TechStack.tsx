import { Code2, Database, BarChart3 } from 'lucide-react';

const TechStack = () => {
  const techCategories = [
    {
      icon: Code2,
      category: 'Frontend',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      color: 'text-blue-400'
    },
    {
      icon: Database,
      category: 'Backend',
      technologies: ['Node.js', 'Express.js', 'MongoDB'],
      color: 'text-green-400'
    },
    {
      icon: BarChart3,
      category: 'Data Science',
      technologies: ['NumPy', 'Pandas', 'Matplotlib', 'SQL', 'Seaborn'],
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="techstack" className="py-24">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text">
            Tech Stack
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="space-y-8">
          {techCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.category}
                className="project-card group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.category}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-secondary/50 border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;