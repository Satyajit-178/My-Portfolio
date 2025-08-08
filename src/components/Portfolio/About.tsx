const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold mb-12 glow-text tracking-wide text-reveal">ABOUT</h2>
        
        <div className="space-y-6 text-reveal" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Hi! I'm Satyajit Senapati, building clean, functional, and user-focused web applications. Alongside that, I explore the world of data science, learning how to analyze, visualize, and tell stories through data.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            Over time, I've built several personal projects, sharpened my problem-solving skills, and developed a strong interest in full-stack development. Whether it's frontend design or backend logic, I love learning and improving every day.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            When I'm not coding, you can find me exploring new tech, building some SaaS or sketching out my next big idea.
          </p>
        </div>
        
        <div className="section-divider mt-16" />
      </div>
    </section>
  );
};

export default About;