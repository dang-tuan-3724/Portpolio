import MotionSection from "@/components/motion-section";
import { skillsData, type SkillItem } from "@/data/portfolioData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react"; // Using a default icon for skills if not provided

export default function SkillsSection() {
  return (
    <MotionSection id="skills" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
            My <span className="text-accent">Skills</span>
          </h2>
        </MotionSection>
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <MotionSection key={category.id} delay={0.2 + index * 0.1}>
              <Card className="bg-card border border-border/50 shadow-lg hover:shadow-xl hover:border-accent/50 transition-all duration-300 h-full flex flex-col">
                <CardHeader className="flex flex-row items-center space-x-3 pb-4 pt-5 px-6">
                  {category.categoryIcon && <category.categoryIcon className="h-7 w-7 text-accent flex-shrink-0" />}
                  <CardTitle className="text-xl font-semibold text-primary">{category.categoryName}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6 space-y-3 flex-grow">
                  <ul className="space-y-2.5">
                    {category.skills.map((skill: SkillItem, skillIndex: number) => (
                      <li key={skillIndex} className="flex items-center text-foreground/80">
                        {skill.icon ? <skill.icon className="h-5 w-5 mr-3 text-accent flex-shrink-0" /> : <CheckCircle className="h-5 w-5 mr-3 text-accent flex-shrink-0" />}
                        <span>{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </MotionSection>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
