const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold mb-12 glow-text tracking-wide">ABOUT</h2>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I'm a developer passionate about crafting accessible, pixel-perfect user 
            interfaces that blend thoughtful design with robust engineering. My favorite 
            work lies at the intersection of design and development, creating experiences 
            that not only look great but are meticulously built for performance and usability.
          </p>
          
          <p>
            Currently, I'm a Senior Front-End Engineer at{' '}
            <span className="text-primary font-medium">TechCorp</span>, specializing in 
            accessibility. I contribute to the creation and maintenance of UI components 
            that power our platform's frontend, ensuring our applications meet web accessibility 
            standards and best practices to deliver an inclusive user experience.
          </p>
          
          <p>
            In the past, I've had the opportunity to develop software across a variety of 
            settings — from{' '}
            <span className="text-primary font-medium">advertising agencies</span> and{' '}
            <span className="text-primary font-medium">large corporations</span> to{' '}
            <span className="text-primary font-medium">start-ups</span> and{' '}
            <span className="text-primary font-medium">small digital product studios</span>. 
            Additionally, I also released a{' '}
            <span className="text-primary font-medium">comprehensive video course</span>{' '}
            a few years ago, guiding learners through building a web app with modern technologies.
          </p>
          
          <p>
            In my spare time, I'm usually climbing, reading, hanging out with my family, 
            or exploring new technologies and contributing to open source projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;