import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

function getMenuClass(isActive: boolean): string {
  const baseClass =
    "menu flex items-center gap-6 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-zinc-900/80 border border-zinc-800 backdrop-blur-md px-6 py-3 mt-2 md:mt-0 rounded-full md:bg-transparent md:border-transparent transition-all md:transition-none";

  return `${baseClass} ${isActive ? "top-0 opacity-100" : "-top-10 opacity-0"}`;
}

// Navigation bar component
function Navbar() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar flex items-center justify-between py-6">
      <div className="logo">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">
          portofolio
        </h1>
      </div>
      <ul className={getMenuClass(active)}>
        <li>
          <a href="#home" className="text-sm font-medium text-zinc-100">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-sm font-medium text-zinc-100">
            About
          </a>
        </li>
        <li>
          <a href="#project" className="text-sm font-medium text-zinc-100">
            Project
          </a>
        </li>
      </ul>
      <Button asChild variant="outline" className="hidden border-zinc-700 text-zinc-100 md:inline-flex">
        <a href="#project">Hire Me</a>
      </Button>
    </div>
  );
}

export default Navbar;
