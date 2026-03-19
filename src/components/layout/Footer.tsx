import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function Footer() {
  return (
    <footer className="mt-16 mb-5 space-y-8">
      <Separator className="bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      
      <div className="grid gap-8 md:grid-cols-[1fr_1.5fr]">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-50">Portfolio</h2>
          <p className="text-sm leading-relaxed text-slate-400">
            Siap berkolaborasi untuk membangun produk web modern dengan standar tinggi.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <nav className="flex gap-6 text-sm">
            <a 
              href="#home" 
              className="relative text-slate-400 transition duration-300 ease-out hover:text-cyan-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="relative text-slate-400 transition duration-300 ease-out hover:text-cyan-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>
            <a 
              href="#project" 
              className="relative text-slate-400 transition duration-300 ease-out hover:text-cyan-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Project
            </a>
          </nav>

          <div className="flex items-center gap-3">
            {[
              { href: "#", icon: "ri-github-fill", label: "GitHub" },
              { href: "#", icon: "ri-instagram-fill", label: "Instagram" },
              { href: "#", icon: "ri-reddit-fill", label: "Reddit" },
              { href: "#", icon: "ri-youtube-fill", label: "YouTube" },
            ].map((social) => (
              <Button
                key={social.label}
                asChild
                variant="ghost"
                className="group h-10 w-10 rounded-full border border-slate-600 p-0 text-slate-400 transition duration-300 ease-out hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-400"
              >
                <a href={social.href} title={social.label}>
                  <i className={`${social.icon} ri-lg`}></i>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4 border-t border-slate-800/50 pt-6 text-center text-xs text-slate-500">
        <p>Dibangun dengan fokus pada kualitas — React, Vite, Tailwind CSS, TypeScript</p>
        <p>© 2026 Muhammad Rafly Asyraf. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
