import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/portfolioData";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-card border border-border/50 group">
      <CardHeader className="p-0 relative overflow-hidden">
        <div className="aspect-[16/10]"> {/* Adjusted aspect ratio */}
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={600}
            height={375} // Adjusted height for 16:10
            data-ai-hint={project.imageHint}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col">
        <CardTitle className="text-xl font-semibold mb-2 text-primary group-hover:text-accent transition-colors duration-300">{project.title}</CardTitle>
        <CardDescription className="text-foreground/80 mb-4 text-sm leading-relaxed flex-grow">{project.description}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs bg-secondary/70 text-secondary-foreground/80">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 border-t border-border/50 flex flex-wrap gap-3 justify-start">
        {project.liveUrl && (
          <Button asChild variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
        {project.repoUrl && (
          <Button asChild variant="ghost" size="sm" className="text-foreground/70 hover:text-primary hover:bg-secondary/50 transition-colors duration-300">
            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Source
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
