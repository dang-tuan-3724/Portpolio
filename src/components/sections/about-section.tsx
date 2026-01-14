import Image from "next/image";
import MotionSection from "@/components/motion-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, Lightbulb, Users } from "lucide-react";
import ANHTHE from '@/assets/images/ANH THE.jpg'

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
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/70 to-primary/70 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 "></div>
            <Image
              src={ANHTHE.src}
              alt="A snapshot of me working or a professional headshot"
              width={500}
              height={600}
              data-ai-hint="developer coding"
              className="rounded-2xl shadow-2xl border-4 relative object-cover aspect-[4/5]"
            />
          </MotionSection>
          <MotionSection delay={0.3} className="md:col-span-3 space-y-2">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Hello! I&apos;m a third-year Computer Science student at HCMUT with experience in Frontend
development (Figma, ReactJS, React Native). Passionate about building user-friendly
interfaces and eager to learn through real projects. Seeking an internship to fulfill
graduation requirements while enhancing frontend skills.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <Card className="bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-base font-semibold">Experience</CardTitle>
                  <Briefcase className="h-5 w-5 text-accent" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">1 Year</div>
                  <p className="text-xs text-muted-foreground">Frontend Development</p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-base font-semibold">Education</CardTitle>
                  <GraduationCap className="h-5 w-5 text-accent" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">Computer Science</div>
                  <p className="text-xs text-muted-foreground">Ho Chi Minh University of Technology - VNU</p>
                  <p className="text-xs text-muted-foreground">Sep 2022 – Present</p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-base font-semibold">Language Skills</CardTitle>
                  <Lightbulb className="h-5 w-5 text-accent" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <p className="text-lg font-bold text-primary">English</p>
                      <p className="text-xs text-muted-foreground">Upper Intermediate (TOEIC 820)</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-primary">Japanese</p>
                      <p className="text-xs text-muted-foreground">Beginner (Actively improving)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-base font-semibold">Team Player</CardTitle>
                  <Users className="h-5 w-5 text-accent" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">Collaborative</div>
                </CardContent>
              </Card>
            </div>
          </MotionSection>
        </div>
      </div>
    </MotionSection>
  );
}
