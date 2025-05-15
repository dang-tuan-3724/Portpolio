import MotionSection from "@/components/motion-section";
import { skillsData } from "@/data/portfolioData";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react"; // Default icon

export default function SkillsSection() {
  return (
    <MotionSection id="skills" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
            My <span className="text-accent">Skills</span>
          </h2>
        </MotionSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <MotionSection key={skill.id} delay={0.2 + index * 0.05}>
              <Card className="bg-card border border-border/50 shadow-sm hover:shadow-lg hover:border-accent/50 transition-all duration-300 h-full">
                <CardHeader className="flex flex-row items-center justify-between pb-3 pt-5 px-5">
                  <CardTitle className="text-lg font-medium text-primary">{skill.name}</CardTitle>
                  {skill.icon ? <skill.icon className="h-6 w-6 text-accent" /> : <Award className="h-6 w-6 text-accent" />}
                </CardHeader>
                <CardContent className="px-5 pb-5">
                  <Progress value={skill.level} aria-label={`${skill.name} skill level: ${skill.level}%`} className="h-3 bg-secondary" indicatorClassName="bg-accent" />
                  <p className="text-xs text-muted-foreground mt-1.5 text-right">{skill.level}% Proficiency</p>
                </CardContent>
              </Card>
            </MotionSection>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
