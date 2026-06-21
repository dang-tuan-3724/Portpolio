"use client";
import MotionSection from "@/components/motion-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <MotionSection id="contact" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
            Get In <span className="text-accent">Touch</span>
          </h2>
        </MotionSection>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
          <MotionSection delay={0.2} className="h-full flex">
            <Card className="bg-card shadow-xl border border-border/50 w-full flex flex-col justify-between">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow flex flex-col justify-center">
                <div className="flex items-center space-x-4 group">
                  <Mail className="h-6 w-6 text-accent flex-shrink-0" />
                  <a href="mailto:tuanminhdang372004@gmail.com" className="text-foreground/80 group-hover:text-accent transition-colors break-all text-base font-medium">
                    tuanminhdang372004@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4 group">
                  <Phone className="h-6 w-6 text-accent flex-shrink-0" />
                  <a href="tel:+84773937704" className="text-foreground/80 group-hover:text-accent transition-colors text-base font-medium">
                    +84 77 393 7704
                  </a>
                </div>
                <div className="flex items-center space-x-4 group">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-foreground/80 text-base font-medium">Ho Chi Minh City, Vietnam</span>
                </div>
              </CardContent>
            </Card>
          </MotionSection>
          
          <MotionSection delay={0.3} className="h-full flex">
            <Card className="bg-card shadow-xl border border-border/50 w-full flex flex-col justify-between">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-primary">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-around flex-grow pt-4 pb-8">
                <a 
                  href="https://github.com/dang-tuan-3724" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub Profile" 
                  className="flex flex-col items-center gap-3 text-foreground/70 hover:text-accent transition-colors duration-200 group"
                >
                  <div className="p-4 rounded-full bg-secondary/40 group-hover:bg-accent/15 transition-all">
                    <Github className="h-10 w-10 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <span className="text-sm font-semibold">GitHub</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/dangminhtuan3724/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn Profile" 
                  className="flex flex-col items-center gap-3 text-foreground/70 hover:text-accent transition-colors duration-200 group"
                >
                  <div className="p-4 rounded-full bg-secondary/40 group-hover:bg-accent/15 transition-all">
                    <Linkedin className="h-10 w-10 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <span className="text-sm font-semibold">LinkedIn</span>
                </a>
              </CardContent>
            </Card>
          </MotionSection>
        </div>
      </div>
    </MotionSection>
  );
}
