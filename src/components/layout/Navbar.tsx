import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

function getMenuClass(isOpen: boolean): string {
  const baseClass =
    "menu flex items-center gap-6 md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 md:opacity-100 md:pointer-events-auto bg-[#0f172a]/80 border border-cyan-400/20 backdrop-blur-md px-6 py-3 mt-2 md:mt-0 rounded-full md:bg-transparent md:border-transparent transition-all duration-200 ease-in-out";

  const mobileState = isOpen
    ? "top-16 opacity-100 pointer-events-auto"
    : "top-10 opacity-0 pointer-events-none";

  return `${baseClass} ${mobileState}`;
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
            className="relative text-sm font-medium text-slate-50 transition duration-200 ease-in-out hover:text-cyan-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="relative text-sm font-medium text-slate-50 transition duration-200 ease-in-out hover:text-cyan-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#project"
            onClick={() => setMenuOpen(false)}
            className="relative text-sm font-medium text-slate-50 transition duration-200 ease-in-out hover:text-cyan-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Project
          </a>
        </li>
      </ul>
      <div className="flex items-center gap-3">
        <Button
          asChild
          className="hidden bg-cyan-400 text-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.35)] transition duration-200 ease-in-out hover:scale-[1.05] hover:bg-cyan-300 md:inline-flex"
        >
          <a href="#project">Hire Me</a>
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
