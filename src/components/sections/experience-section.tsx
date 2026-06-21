import MotionSection from "@/components/motion-section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, MapPin, Briefcase } from "lucide-react";

export default function ExperienceSection() {
  return (
    <MotionSection id="experience" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
            Work <span className="text-accent">Experience</span>
          </h2>
        </MotionSection>
        
        <div className="max-w-3xl mx-auto">
          <MotionSection delay={0.2}>
            <Card className="bg-card border border-border/50 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all duration-300">
              <CardHeader className="pb-4 pt-6 px-6 sm:px-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-primary">
                      Software Engineering Intern (Full-Stack)
                    </CardTitle>
                    <CardDescription className="text-base sm:text-lg font-semibold text-accent mt-1">
                      KVY TECH
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1.5 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Calendar className="h-4 w-4 text-accent" />
                      Jul 2025 - Sep 2025
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-accent" />
                      Ho Chi Minh City, Vietnam
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-6 sm:px-8 pb-8">
                <ul className="list-disc list-outside ml-5 space-y-3.5 text-foreground/80 leading-relaxed text-sm sm:text-base">
                  <li>
                    Engineered a Condo Management System with Ruby on Rails 8 and PostgreSQL, architecting a strict 4-tier role-based access control matrix via Devise and Pundit.
                  </li>
                  <li>
                    Implemented a smart time-slot booking module featuring asynchronous Sidekiq background jobs and real-time WebSockets notifications (Action Cable) under strict Minitest TDD.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </MotionSection>
        </div>
      </div>
    </MotionSection>
  );
}
