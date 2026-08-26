import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

function getMenuClass(isOpen: boolean): string {
  const baseClass =
    "menu flex items-center gap-6 transition-all duration-200 ease-in-out md:static md:translate-x-0 md:opacity-100 md:pointer-events-auto md:items-center md:justify-center";

  // Ubah inset-x-0 top-16 menjadi fixed inset-0 h-screen untuk memenuhi seluruh layar mobile
  const mobileState = isOpen
    ? "fixed inset-0 h-screen z-40 opacity-100 pointer-events-auto"
    : "fixed inset-0 h-screen z-40 opacity-0 pointer-events-none md:pointer-events-auto";

  // Hapus rounded-2xl dan sesuaikan padding serta posisi elemen di dalamnya
  const mobileStyle =
    "flex-col justify-center bg-[#0f172a] px-6 py-10 md:flex-row md:rounded-none md:bg-transparent md:backdrop-blur-none md:px-0 md:py-0 md:my-0 md:shadow-none md:h-auto";

  return `${baseClass} ${mobileStyle} ${mobileState}`;
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Mencegah halaman utama di-scroll saat menu mobile terbuka
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <div className="navbar relative z-50 flex items-center justify-between border-cyan-400/10 px-4 py-3 transition duration-200 ease-in-out">
      <div className="logo z-50">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50">
          Portfolio
        </h1>
      </div>

      <motion.ul
        className={getMenuClass(menuOpen)}
        initial={false}
        animate={{
          y: menuOpen ? 0 : -12,
        }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        <li>
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="relative text-lg font-medium text-slate-50 transition duration-200 ease-in-out hover:text-cyan-300 md:text-sm md:after:absolute md:after:-bottom-1 md:after:left-0 md:after:h-[2px] md:after:w-0 md:after:bg-cyan-400 md:after:transition-all md:after:duration-300 md:hover:after:w-full"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="relative text-lg font-medium text-slate-50 transition duration-200 ease-in-out hover:text-cyan-300 md:text-sm md:after:absolute md:after:-bottom-1 md:after:left-0 md:after:h-[2px] md:after:w-0 md:after:bg-cyan-400 md:after:transition-all md:after:duration-300 md:hover:after:w-full"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#project"
            onClick={() => setMenuOpen(false)}
            className="relative text-lg font-medium text-slate-50 transition duration-200 ease-in-out hover:text-cyan-300 md:text-sm md:after:absolute md:after:-bottom-1 md:after:left-0 md:after:h-[2px] md:after:w-0 md:after:bg-cyan-400 md:after:transition-all md:after:duration-300 md:hover:after:w-full"
          >
            Project
          </a>
        </li>

        <li>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="relative text-lg font-medium text-slate-50 transition duration-200 ease-in-out hover:text-cyan-300 md:text-sm md:after:absolute md:after:-bottom-1 md:after:left-0 md:after:h-[2px] md:after:w-0 md:after:bg-cyan-400 md:after:transition-all md:after:duration-300 md:hover:after:w-full"
          >
            Contact
          </a>
        </li>

        <li className="w-full max-w-xs md:hidden">
          <Button
            asChild
            className="w-full bg-cyan-400 text-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.35)] transition duration-200 ease-in-out hover:scale-[1.02] hover:bg-cyan-300"
          >
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Hire Me
            </a>
          </Button>
        </li>
      </motion.ul>

      <div className="z-50 flex items-center gap-3">
        <Button
          asChild
          className="hidden bg-cyan-400 text-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.35)] transition duration-200 ease-in-out hover:scale-[1.05] hover:bg-cyan-300 md:inline-flex"
        >
          <a href="#contact">Hire Me</a>
        </Button>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0f172a]/70 text-slate-50 transition duration-200 ease-in-out hover:scale-[1.05] hover:border-cyan-400 hover:text-cyan-300 md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Navbar;