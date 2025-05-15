"use client";
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      let current = "home";
      for (const item of navItems) {
        const section = document.getElementById(item.href.substring(1));
        if (section) {
          const sectionTop = section.offsetTop - 101; // 1px adjustment for better accuracy with scroll-margin-top
          const sectionHeight = section.offsetHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = item.href.substring(1);
            break;
          }
        }
      }
      // Special case for bottom of page / contact section
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100 && navItems.some(item => item.href === "#contact")) {
         current = "contact";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // The scroll-margin-top CSS property handles the offset
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

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
      isScrolled ? "bg-background/90 backdrop-blur-lg shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-accent transition-colors duration-200">
            <Code2 className="h-8 w-8 text-accent" />
            <span>MotionFolio</span>
          </Link>
          <nav className="hidden md:flex space-x-1">
            <NavLinks />
          </nav>
          <div className="md:hidden">
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
