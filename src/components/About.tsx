import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-matrix">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I am a B.Tech Electronics and Communication Engineering student from Hyderabad 
              with a strong passion for Python programming, AI, embedded systems, and modern 
              web development.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              I have hands-on experience in IoT projects, MERN stack applications, and 
              problem-solving. I aim to apply my technical and analytical skills to build 
              impactful solutions that bridge the gap between hardware and intelligent software.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">8.38</div>
                <div className="text-sm text-muted-foreground">B.Tech CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">5+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">2+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </div>
          </div>
          
          {/* Education Cards */}
          <div className="space-y-6">
            <Card className="glass-card p-6 hover:shadow-glow transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-cyber rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gradient">B.Tech ECE</h3>
                  <p className="text-muted-foreground">Teegala Krishna Reddy Engineering College</p>
                  <p className="text-sm text-muted-foreground">2022 - 2026 | CGPA: 8.38</p>
                </div>
              </div>
            </Card>
            
            <Card className="glass-card p-6 hover:shadow-glow transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-matrix rounded-lg">
                  <Award className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gradient-matrix">Intermediate (MPC)</h3>
                  <p className="text-muted-foreground">Prathibha Junior College</p>
                  <p className="text-sm text-muted-foreground">CGPA: 9.33</p>
                </div>
              </div>
            </Card>
            
            <Card className="glass-card p-6 hover:shadow-glow transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-plasma rounded-lg">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gradient">SSC</h3>
                  <p className="text-muted-foreground">Brilliant Grammar High School</p>
                  <p className="text-sm text-muted-foreground">CGPA: 10</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;