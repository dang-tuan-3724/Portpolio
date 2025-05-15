"use client";
import { useState, type FormEvent } from "react";
import MotionSection from "@/components/motion-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form data submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
      variant: "default" // 'default' for success, or make a 'success' variant in toast.tsx
    });
    setFormData({ name: "", email: "", message: "" }); // Reset form
    setIsSubmitting(false);
  };

  return (
    <MotionSection id="contact" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
            Get In <span className="text-accent">Touch</span>
          </h2>
        </MotionSection>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <MotionSection delay={0.2}>
            <Card className="bg-card shadow-xl border border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send Me a Message</CardTitle>
                <CardDescription>I&apos;m always open to discussing new projects or opportunities.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground/80 font-medium">Full Name</Label>
                    <Input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Jane Doe" 
                      required 
                      className="mt-1.5 bg-background/70 border-border focus:border-accent focus:ring-accent"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground/80 font-medium">Email Address</Label>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com" 
                      required 
                      className="mt-1.5 bg-background/70 border-border focus:border-accent focus:ring-accent"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-foreground/80 font-medium">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..." 
                      required 
                      className="mt-1.5 bg-background/70 border-border focus:border-accent focus:ring-accent"
                      disabled={isSubmitting}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-all duration-300" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </MotionSection>
          
          <MotionSection delay={0.3} className="space-y-8">
            <Card className="bg-card shadow-xl border border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center space-x-4 group">
                  <Mail className="h-6 w-6 text-accent flex-shrink-0" />
                  <a href="mailto:your.email@example.com" className="text-foreground/80 group-hover:text-accent transition-colors break-all">
                  tuanminhdang372004@gmail.com</a>
                </div>
                <div className="flex items-center space-x-4 group">
                  <Phone className="h-6 w-6 text-accent flex-shrink-0" />
                  <a href="tel:+12345678900" className="text-foreground/80 group-hover:text-accent transition-colors">
                  +84 788 778 027</a>
                </div>
                <div className="flex items-center space-x-4 group">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-foreground/80">Ho Chi Minh, VietNam</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-xl border border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center space-x-6 pt-2">
                <Link href="https://github.com/dang-tuan-3724" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-foreground/70 hover:text-accent transition-colors duration-200">
                  <Github className="h-8 w-8" />
                </Link>
                <Link href="https://www.linkedin.com/in/dangminhtuan3724/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-foreground/70 hover:text-accent transition-colors duration-200">
                  <Linkedin className="h-8 w-8" />
                </Link>
              </CardContent>
            </Card>
          </MotionSection>
        </div>
      </div>
    </MotionSection>
  );
}
