import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Smartphone, Globe, Plus } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Smart Shoe for Blind People",
      description: "IoT-based shoe using ultrasonic sensors and voice guidance for obstacle detection and navigation assistance.",
      technologies: ["Arduino", "Embedded C", "Ultrasonic Sensors", "Voice Module", "IoT"],
      date: "Oct 2024",
      icon: Smartphone,
      gradient: "bg-gradient-cyber",
      status: "Completed"
    },
    {
      title: "Web Application Development",
      description: "Full-stack MERN application with responsive UI/UX and secure database handling, developed during AICTE & EY GDS internship.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
      date: "2024",
      icon: Globe,
      gradient: "bg-gradient-matrix",
      status: "Completed"
    },
    {
      title: "Developer Portfolio",
      description: "Modern, responsive portfolio website with futuristic design, smooth animations, and optimized performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      date: "2024",
      icon: Globe,
      gradient: "bg-gradient-plasma",
      status: "Current"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-matrix">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my technical projects and innovations
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className="glass-card p-8 hover:shadow-glow transition-all duration-300 hover:scale-[1.02] animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 ${project.gradient} rounded-lg`}>
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gradient mb-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">{project.date}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          project.status === 'Completed' 
                            ? 'bg-cyber-green/20 text-cyber-green' 
                            : 'bg-cyber-blue/20 text-cyber-blue'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-foreground/90 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs bg-muted/50 text-muted-foreground rounded-full border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-gradient-cyber text-primary-foreground hover:scale-105 transition-transform">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* Coming Soon Card */}
        <Card className="glass-card p-8 text-center border-dashed border-2 border-primary/30 hover:border-primary/50 transition-colors">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-4 bg-gradient-cyber rounded-full">
              <Plus className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-gradient">More Projects Coming Soon</h3>
            <p className="text-muted-foreground max-w-md">
              I'm constantly working on new projects. Stay tuned for more innovative solutions!
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Projects;