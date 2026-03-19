import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function Footer() {
  return (
    <div className="mt-16 space-y-6 text-zinc-300">
      <Separator className="bg-zinc-800" />
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <h2 className="text-xl font-semibold text-zinc-100">portofolio</h2>
          <p className="text-sm text-zinc-500">
            Terbuka untuk kolaborasi proyek web modern.
          </p>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-zinc-100">
            Home
          </a>
          <a href="#about" className="hover:text-zinc-100">
            About
          </a>
          <a href="#project" className="hover:text-zinc-100">
            Project
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="text-zinc-300 hover:text-zinc-100">
            <a href="#">
              <i className="ri-github-fill ri-lg"></i>
            </a>
          </Button>
          <Button asChild variant="ghost" className="text-zinc-300 hover:text-zinc-100">
            <a href="#">
              <i className="ri-instagram-fill ri-lg"></i>
            </a>
          </Button>
          <Button asChild variant="ghost" className="text-zinc-300 hover:text-zinc-100">
            <a href="#">
              <i className="ri-reddit-fill ri-lg"></i>
            </a>
          </Button>
          <Button asChild variant="ghost" className="text-zinc-300 hover:text-zinc-100">
            <a href="#">
              <i className="ri-youtube-fill ri-lg"></i>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
