import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "MERN Stack Development",
      issuer: "Next Gen Employability Program",
      date: "2024",
      description: "Comprehensive full-stack web development certification covering MongoDB, Express.js, React, and Node.js",
      skills: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "REST APIs"],
      gradient: "bg-gradient-cyber"
    },
    {
      title: "Web Application Development Internship",
      issuer: "AICTE + EY GDS",
      date: "2024",
      description: "Professional internship program focusing on modern web application development and industry best practices",
      skills: ["Full-Stack Development", "UI/UX", "Database Management", "Project Management"],
      gradient: "bg-gradient-matrix"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-plasma mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Professional certifications and learning achievements
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className="glass-card p-8 hover:shadow-glow transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`p-3 ${cert.gradient} rounded-lg flex-shrink-0`}>
                  <Award className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gradient mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <span className="font-medium">{cert.issuer}</span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-foreground/90 mb-6 leading-relaxed">
                {cert.description}
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Key Skills Acquired:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-muted/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors text-sm">
                    <ExternalLink className="h-4 w-4" />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Future Goals */}
        <Card className="glass-card p-8 mt-8 text-center border border-primary/30">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gradient mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-foreground/90 leading-relaxed">
              I'm constantly expanding my skillset through online courses, workshops, and hands-on projects. 
              Currently exploring advanced AI/ML concepts, cloud technologies, and modern development frameworks.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Certifications;