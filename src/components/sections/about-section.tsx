import Image from "next/image";
import MotionSection from "@/components/motion-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, Lightbulb, Users, Zap } from "lucide-react";

export default function AboutSection() {
  return (
    <MotionSection id="about" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
            About <span className="text-accent">Me</span>
          </h2>
        </MotionSection>
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <MotionSection delay={0.2} className="md:col-span-2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/70 to-primary/70 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Image
              src="https://placehold.co/500x600.png"
              alt="A snapshot of me working or a professional headshot"
              width={500}
              height={600}
              data-ai-hint="developer coding"
              className="rounded-lg shadow-2xl relative object-cover aspect-[4/5]"
            />
          </MotionSection>
          <MotionSection delay={0.3} className="md:col-span-3 space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Hello! I&apos;m a dedicated and results-driven Full Stack Developer with a knack for building elegant and efficient web applications. My journey in tech started with a fascination for how websites work, and it has grown into a full-blown passion for coding and problem-solving.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I thrive in collaborative environments and enjoy turning complex ideas into user-friendly realities. Continuously learning and adapting to new technologies is what keeps me excited and motivated in this ever-evolving field. When I&apos;m not coding, I enjoy exploring new hiking trails and contributing to open-source projects.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <Card className="bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-base font-semibold">Experience</CardTitle>
                  <Briefcase className="h-5 w-5 text-accent" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">3+ Years</div>
                  <p className="text-xs text-muted-foreground">Full Stack Development</p>
                </CardContent>
              </Card>
              <Card className="bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-base font-semibold">Education</CardTitle>
                  <GraduationCap className="h-5 w-5 text-accent" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">B.Sc. CS</div>
                  <p className="text-xs text-muted-foreground">University of Technology</p>
                </CardContent>
              </Card>
               <Card className="bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-base font-semibold">Problem Solver</CardTitle>
                  <Lightbulb className="h-5 w-5 text-accent" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">Innovative</div>
                  <p className="text-xs text-muted-foreground">Creative Solutions</p>
                </CardContent>
              </Card>
               <Card className="bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-base font-semibold">Team Player</CardTitle>
                  <Users className="h-5 w-5 text-accent" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">Collaborative</div>
                  <p className="text-xs text-muted-foreground">Agile Environments</p>
                </CardContent>
              </Card>
            </div>
          </MotionSection>
        </div>
      </div>
    </MotionSection>
  );
}
