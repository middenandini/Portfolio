import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center animated-bg overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gradient">
            Midde Nandini
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-2">
            Python | AI/ML | Embedded Systems | Web Development
          </div>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Bridging AI, hardware, and web technologies to create futuristic solutions.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-cyber text-primary-foreground hover:scale-105 transition-all duration-300 shadow-cyber px-8 py-6 text-lg"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <Download className="mr-2 h-5 w-5" />
            View Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6 text-lg"
            onClick={() => scrollToSection('contact')}
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce inline-block p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </button>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-cyber-blue/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 right-32 w-32 h-32 bg-cyber-purple/20 rounded-full blur-xl animate-float" style={{ animationDelay: '5s' }} />
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-cyber-teal/20 rounded-full blur-xl animate-float" style={{ animationDelay: '10s' }} />
    </section>
  );
};

export default Hero;