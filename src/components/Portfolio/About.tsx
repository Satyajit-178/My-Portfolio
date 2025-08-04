const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold mb-12 glow-text tracking-wide text-reveal">ABOUT</h2>
        
        <div className="space-y-6 text-reveal" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm a passionate frontend developer with a love for creating beautiful, accessible web experiences. 
            My journey in web development started with curiosity and has evolved into a deep appreciation for 
            clean code, user-centered design, and the endless possibilities of modern web technologies.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
            or sharing knowledge with the developer community. I believe in continuous learning and pushing the 
            boundaries of what's possible on the web.
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            My approach combines technical expertise with creative problem-solving, always keeping the end user 
            in mind. I'm excited to bring this passion to meaningful projects that make a difference.
          </p>
        </div>
        
        <div className="section-divider mt-16" />
      </div>
    </section>
  );
};

export default About;