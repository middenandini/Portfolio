import { Button } from "@/components/ui/button";
import { ArrowUp, Heart, Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:middenandini1@gmail.com',
      gradient: 'bg-gradient-cyber'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/midde-nandini-8b87b9375',
      gradient: 'bg-gradient-matrix'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: '#',
      gradient: 'bg-gradient-plasma'
    }
  ];

  return (
    <footer className="relative bg-muted/30 border-t border-border">
      {/* Back to Top Button */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <Button
          onClick={scrollToTop}
          size="sm"
          className="bg-gradient-cyber text-primary-foreground hover:scale-110 transition-transform rounded-full w-12 h-12 p-0"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">Midde Nandini</h3>
            <p className="text-foreground/80 leading-relaxed mb-6 max-w-md">
              Python | AI/ML | Embedded Systems | Web Development
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Building futuristic solutions at the intersection of AI, hardware, and software. 
              Let's create something amazing together.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gradient mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-gradient mb-4">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    {...(social.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className={`p-2 ${social.gradient} rounded-lg group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>© 2024 Midde Nandini. Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>and lots of ☕</span>
            </div>
            
            <div className="text-muted-foreground text-sm">
              <span>Built with React, TypeScript & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;