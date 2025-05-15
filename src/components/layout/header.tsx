
"use client";
import Link from "next/link";
import { Menu, X, Code2, Sun, Moon } from "lucide-react"; // Added Sun, Moon
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/theme-provider"; // Added import

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Added theme hook
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      let current = "home";
      for (const item of navItems) {
        const section = document.getElementById(item.href.substring(1));
        if (section) {
          const sectionTop = section.offsetTop - 101; 
          const sectionHeight = section.offsetHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = item.href.substring(1);
            break;
          }
        }
      }
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100 && navItems.some(item => item.href === "#contact")) {
         current = "contact";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsSheetOpen(false);
  };

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={(e) => handleLinkClick(e, item.href)}
          className={cn(
            "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out",
            activeSection === item.href.substring(1)
              ? "text-accent font-semibold"
              : "text-foreground/80 hover:text-accent",
            mobile ? "block w-full text-left text-base py-3" : ""
          )}
        >
          {item.label}
        </Link>
      ))}
    </>
  );

  if (!mounted) {
    // Avoid rendering theme toggle until client-side hydration to prevent mismatch
    return (
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-background/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      )}>
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Placeholder for logo and mobile menu to maintain layout */}
            <div className="flex items-center gap-2 text-2xl font-bold text-primary">
              <Code2 className="h-8 w-8 text-accent" />
              <span>Frontend Developer</span>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu" disabled>
                <Menu className="h-6 w-6 text-primary" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
      isScrolled ? "bg-background/90 backdrop-blur-lg shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-accent transition-colors duration-200">
            <Code2 className="h-8 w-8 text-accent" />
            <span>Frontend Developer</span>
          </Link>
          <nav className="hidden md:flex space-x-1 items-center">
            <NavLinks />
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "light" ? <Moon className="h-5 w-5 text-primary" /> : <Sun className="h-5 w-5 text-primary" />}
            </Button>
          </nav>
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme" className="mr-2">
              {theme === "light" ? <Moon className="h-5 w-5 text-primary" /> : <Sun className="h-5 w-5 text-primary" />}
            </Button>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background p-0">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b">
                     <Link href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="flex items-center gap-2 text-xl font-bold text-primary">
                        <Code2 className="h-7 w-7 text-accent" />
                        <span>MotionFolio</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsSheetOpen(false)} aria-label="Close menu">
                        <X className="h-6 w-6 text-primary" />
                    </Button>
                  </div>
                  <nav className="flex flex-col space-y-2 p-4">
                    <NavLinks mobile />
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
