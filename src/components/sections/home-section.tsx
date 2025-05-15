import Image from "next/image";
import { Button } from "@/components/ui/button";
import MotionSection from "@/components/motion-section";
import { ArrowDown, Github, Linkedin } from "lucide-react"; // Removed Twitter
import Link from "next/link";
import anhthe from '@/assets/images/anhchandung.jpg'

export default function HomeSection() {
  return (
    <MotionSection 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/30 via-background to-secondary/30 py-20 pt-28 md:pt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
           <MotionSection delay={0.1}>
             <Image
              src={anhthe.src} // Use .src for StaticImageData
              alt="Professional Photo of Your Name"
              width={150}
              height={150}
              data-ai-hint="professional portrait"
              priority={true} // Important for LCP
              className="rounded-full mx-auto mb-8 shadow-xl border-4 border-background ring-2 ring-accent/50"
            />
           </MotionSection>
          <MotionSection delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
              Hi, I&apos;m <span className="text-accent">Tuan</span>
            </h1>
          </MotionSection>
          <MotionSection delay={0.3}>
            <p className="text-lg sm:text-xl text-foreground/80 mb-8 leading-relaxed">
              A passionate Frontend Developer crafting seamless and engaging digital experiences. Welcome to my creative space where innovation meets functionality.
            </p>
          </MotionSection>
          <MotionSection delay={0.4} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-auto">
              <Link href="#projects">View My Work <ArrowDown className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/5 hover:border-primary w-full sm:w-auto">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </MotionSection>
           <MotionSection delay={0.5} className="flex justify-center space-x-6">
            <Link href="https://github.com/dang-tuan-3724" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-foreground/70 hover:text-accent transition-colors duration-200">
              <Github className="h-7 w-7" />
            </Link>
            <Link href="https://www.linkedin.com/in/dangminhtuan3724/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-foreground/70 hover:text-accent transition-colors duration-200">
              <Linkedin className="h-7 w-7" />
            </Link>
          </MotionSection>
        </div>
      </div>
    </MotionSection>
  );
}
