export default function Footer() {
  return (
    <footer className="py-8 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Dang Minh Tuan. All rights reserved.
        </p>
        <p className="text-xs mt-1 opacity-80">
          Built with Next.js, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
}
