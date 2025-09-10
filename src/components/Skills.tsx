import { Card } from "@/components/ui/card";
import { Code, Database, Cpu, Globe, Wrench, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "Python", "JavaScript", "HTML", "CSS", "SQL"],
      gradient: "bg-gradient-cyber"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "REST APIs"],
      gradient: "bg-gradient-matrix"
    },
    {
      title: "Embedded Systems & IoT",
      icon: Cpu,
      skills: ["Arduino", "Embedded C", "Sensors", "IoT Protocols", "Hardware Design"],
      gradient: "bg-gradient-plasma"
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: ["Git/GitHub", "VS Code", "Postman", "MongoDB", "MySQL"],
      gradient: "bg-gradient-dark"
    },
    {
      title: "AI/ML Domains",
      icon: Brain,
      skills: ["Machine Learning", "Data Analysis", "Python Libraries", "Problem Solving"],
      gradient: "bg-gradient-cyber"
    },
    {
      title: "Soft Skills",
      icon: Wrench,
      skills: ["Problem-Solving", "Analytical Thinking", "Teamwork", "Communication"],
      gradient: "bg-gradient-matrix"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-matrix mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive skillset spanning multiple domains of technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="glass-card p-6 hover:shadow-glow transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 ${category.gradient} rounded-lg`}>
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg text-gradient">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" 
                           style={{ animationDelay: `${skillIndex * 200}ms` }} />
                      <span className="text-foreground/90">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;