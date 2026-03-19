import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

function getMenuClass(isOpen: boolean): string {
  const baseClass =
    "menu flex items-center gap-6 md:static md:translate-x-0 md:opacity-100 md:pointer-events-auto md:bg-transparent md:border-transparent transition-all duration-200 ease-in-out";

  const mobileState = isOpen
    ? "fixed inset-x-4 top-16 opacity-100 pointer-events-auto"
    : "fixed inset-x-4 top-12 opacity-0 pointer-events-none";

  const mobileStyle =
    "flex-col rounded-2xl border border-cyan-400/20 bg-[#0f172a]/95 px-6 py-5 shadow-[0_20px_50px_rgba(6,182,212,0.25)] backdrop-blur-md md:flex-row md:rounded-none md:border-transparent md:bg-transparent md:px-0 md:py-0 md:shadow-none";

  return `${baseClass} ${mobileStyle} ${mobileState}`;
}

function Navbar() {
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    <div
      className={`navbar flex items-center justify-between py-4 transition duration-200 ease-in-out ${
        active
          ? "rounded-full border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10 px-4 shadow-[0_10px_30px_rgba(6,182,212,0.2)] backdrop-blur-md"
          : ""
      }`}
    >
      <div className="logo">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50">
          portofolio
        </h1>
      </div>
      <ul className={getMenuClass(menuOpen)}>
        <li>
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="relative text-sm font-medium text-slate-50 transition duration-200 ease-in-out hover:text-cyan-300 md:after:absolute md:after:-bottom-1 md:after:left-0 md:after:h-[2px] md:after:w-0 md:after:bg-cyan-400 md:after:transition-all md:after:duration-300 md:hover:after:w-full"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="relative text-sm font-medium text-slate-50 transition duration-200 ease-in-out hover:text-cyan-300 md:after:absolute md:after:-bottom-1 md:after:left-0 md:after:h-[2px] md:after:w-0 md:after:bg-cyan-400 md:after:transition-all md:after:duration-300 md:hover:after:w-full"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#project"
            onClick={() => setMenuOpen(false)}
            className="relative text-sm font-medium text-slate-50 transition duration-200 ease-in-out hover:text-cyan-300 md:after:absolute md:after:-bottom-1 md:after:left-0 md:after:h-[2px] md:after:w-0 md:after:bg-cyan-400 md:after:transition-all md:after:duration-300 md:hover:after:w-full"
          >
            Project
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="relative text-sm font-medium text-slate-50 transition duration-200 ease-in-out hover:text-cyan-300 md:after:absolute md:after:-bottom-1 md:after:left-0 md:after:h-[2px] md:after:w-0 md:after:bg-cyan-400 md:after:transition-all md:after:duration-300 md:hover:after:w-full"
          >
            Kontak
          </a>
        </li>
        <li className="w-full md:hidden">
          <Button
            asChild
            className="w-full bg-cyan-400 text-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.35)] transition duration-200 ease-in-out hover:scale-[1.02] hover:bg-cyan-300"
          >
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Hire Me
            </a>
          </Button>
        </li>
      </ul>
      <div className="flex items-center gap-3">
        <Button
          asChild
          className="hidden bg-cyan-400 text-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.35)] transition duration-200 ease-in-out hover:scale-[1.05] hover:bg-cyan-300 md:inline-flex"
        >
          <a href="#contact">Hire Me</a>
        </Button>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-[#0f172a]/70 text-slate-50 transition duration-200 ease-in-out hover:scale-[1.05] hover:border-cyan-400 hover:text-cyan-300 md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
