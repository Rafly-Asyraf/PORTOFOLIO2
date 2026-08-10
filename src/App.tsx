import DataImage, {
  listTools,
  listProyek,
  type Project,
  type Tool,
} from "./data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowUpRight,
  Download,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

function renderToolCard(tool: Tool) {
  return (
    <Card
      key={tool.id}
      className="border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 via-[#0f172a] to-[#0b1224] text-slate-50 shadow-[0_0_0_rgba(6,182,212,0)] transition duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(6,182,212,0.15)]"
    >
      <CardContent className="flex items-center gap-4 p-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-400/15 text-cyan-200 shadow-[0_0_18px_rgba(6,182,212,0.3)]">
          <img src={tool.gambar} alt={tool.nama} className="h-8 w-8" />
        </div>
        <div className="space-y-1">
          <p className="text-base font-semibold">{tool.nama}</p>
          <Badge className="border border-cyan-400/30 bg-cyan-400/10 text-cyan-200">
            {tool.ket}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

function renderProjectTool(tool: string, index: number) {
  return (
    <Badge
      key={`${tool}-${index}`}
      className="border border-cyan-400/20 bg-slate-900/60 text-slate-200"
    >
      {tool}
    </Badge>
  );
}

function renderProjectCard(proyek: Project) {
  return (
    <Card
      key={proyek.id}
      className="group border border-cyan-400/10 bg-gradient-to-br from-[#0b1224] via-[#0f172a] to-[#0b1224] text-slate-50 shadow-[0_0_0_rgba(6,182,212,0)] transition duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(6,182,212,0.2)]"
    >
      <CardHeader className="p-4">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={proyek.gambar}
            alt={proyek.nama}
            className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1224]/80 via-transparent to-transparent opacity-0 transition duration-200 ease-in-out group-hover:opacity-100" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3 p-4 pt-0">
        <CardTitle className="text-xl">{proyek.nama}</CardTitle>
        <CardDescription className="text-slate-400">
          {proyek.desk}
        </CardDescription>
        <div className="flex flex-wrap gap-2">
          {proyek.tools.map((tool, index) => renderProjectTool(tool, index))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          asChild
          className="w-full bg-cyan-400 text-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition duration-200 ease-in-out hover:scale-[1.03] hover:bg-cyan-300"
        >
          <a href={proyek.link} target="_blank" rel="noopener noreferrer">
            Lihat Situs <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

function App() {
  return (
    <div className="space-y-8 pb-8 pt-6 text-slate-50 md:space-y-10 md:pb-10">
      <motion.section
        id="home"
        className="grid gap-5 py-6 md:py-8 lg:grid-cols-[1.1fr_0.9fr]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        >
          <Badge className="w-fit border border-cyan-400/40 bg-cyan-400/10 text-cyan-200">
            <Sparkles className="mr-2 h-4 w-4" /> Front-End Engineer
          </Badge>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Muhammad Rafly Asyraf
          </h1>
          <p className="text-base leading-relaxed text-slate-400">
            Informatics Engineering Graduate focused on front-end development.
            Experienced in building responsive, clean, and production-ready web
            interfaces with modern UI practices and web development standards.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-cyan-400 text-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition duration-200 ease-in-out hover:scale-[1.05] hover:bg-cyan-300"
            >
              <a
                href="/assets/Muhammad-Rafly-Asyraf-CV-ATS.pdf"
                download="Muhammad Rafly Asyraf CV.pdf"
              >
                Download CV <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              className="border border-cyan-400/40 bg-transparent text-cyan-100 transition duration-200 ease-in-out hover:scale-[1.05] hover:bg-cyan-400/10"
            >
              <a href="#project">View Portfolio</a>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-[#0f172a] to-[#0b1224] text-slate-50 shadow-[0_0_0_rgba(6,182,212,0)] transition duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(6,182,212,0.2)]">
              <CardHeader className="p-4">
                <CardTitle className="text-3xl">5+</CardTitle>
                <CardDescription className="text-slate-400">
                  Completed project
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-[#0f172a] to-[#0b1224] text-slate-50 shadow-[0_0_0_rgba(6,182,212,0)] transition duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(6,182,212,0.2)]">
              <CardHeader className="p-4">
                <CardTitle className="text-3xl">1+</CardTitle>
                <CardDescription className="text-slate-400">
                  years of experience
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
        >
          <Card className="border border-cyan-400/20 bg-gradient-to-br from-[#0b1224] via-[#0f172a] to-[#0b1224] text-slate-50 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <CardContent className="p-5">
              <div className="space-y-6">
                <div className="group overflow-hidden rounded-2xl border border-cyan-400/30 shadow-[0_0_25px_rgba(6,182,212,0.2)]">
                  <img
                    src={DataImage.HeroImage}
                    alt="Profile"
                    className="h-[24rem] w-full object-cover object-[50%_5%] transition duration-200 ease-in-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2 text-sm text-slate-400">
                  <p>Front-End · UI Engineering · Web Performance</p>
                  <p>Open for collaboration on modern web projects.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      <Separator className="bg-cyan-400/20" />

      <section id="about" className="space-y-5 py-6 md:py-8">
        <div className="max-w-3xl space-y-3">
          <h2 className="text-3xl font-semibold md:text-4xl">About Me</h2>
          <p className="text-base leading-relaxed text-slate-400">
            I am an Informatics Engineering Graduate focused on front-end
            development. Experienced in building responsive, clean, and
            production-ready web interfaces using Next.js, React, TypeScript,
            and Tailwind CSS. Committed to continuous learning, I am eager to
            contribute as a full-time Front-End Developer to build impactful and
            scalable digital products in a collaborative team.
          </p>
        </div>
        <div className="rounded-2xl bg-gradient-to-r from-cyan-400/30 via-transparent to-cyan-400/20 p-[1px]"></div>
      </section>

      <motion.section
        className="space-y-5 py-6 md:py-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <motion.div className="space-y-2">
          <h2 className="text-3xl font-semibold md:text-4xl">Tech Stack</h2>
          <p className="text-base text-slate-400">
            Core technologies I use to build modern web applications.
          </p>
        </motion.div>
        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        >
          {listTools.map((tool) => renderToolCard(tool))}
        </motion.div>
      </motion.section>

      <motion.section
        id="project"
        className="space-y-5 py-6 md:py-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <motion.div className="space-y-2">
          <h2 className="text-3xl font-semibold md:text-4xl">My Projects</h2>
          <p className="text-base text-slate-400">
            Here are a few projects I've built to apply my front-end skills in real-world scenarios and practice applications.
          </p>
        </motion.div>
        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        >
          {listProyek.map((proyek) => renderProjectCard(proyek))}
        </motion.div>
      </motion.section>

      <section id="contact" className="space-y-5 py-6 md:py-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold md:text-4xl">Contact</h2>
          <p className="text-base text-slate-400">
            Open to project needs, full-time roles, and tech collaborations.
          </p>
        </div>
        <Card className="border border-cyan-400/20 bg-gradient-to-br from-cyan-400/5 via-[#0f172a] to-[#0b1224] text-slate-50 shadow-[0_0_0_rgba(6,182,212,0)]">
          <CardContent className="space-y-5 p-6">
            <div className="space-y-3">
              <div className="space-y-1 text-sm text-slate-400">
                <p className="text-slate-200">Email</p>
                <a
                  href="mailto:rafly.asyraf9011@gmail.com"
                  className="transition duration-200 ease-in-out hover:text-cyan-300"
                >
                  raflyasyraf123@gmail.com
                </a>
              </div>
              <div className="space-y-1 text-sm text-slate-400">
                <p className="text-slate-200">Telephone</p>
                <a
                  href="tel:087819393004"
                  className="transition duration-200 ease-in-out hover:text-cyan-300"
                >
                  0878 1939 3004
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-cyan-400 text-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.35)] transition duration-200 ease-in-out hover:scale-[1.05] hover:bg-cyan-300"
              >
                <a href="mailto:raflyasyraf123@gmail.com">
                  Send Email <Mail className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                className="border border-cyan-400/40 bg-transparent text-cyan-100 transition duration-200 ease-in-out hover:scale-[1.05] hover:bg-cyan-400/10"
              >
                <a
                  href="https://wa.me/6287819393004"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp <MessageCircle className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                className="border border-cyan-400/40 bg-transparent text-cyan-100 transition duration-200 ease-in-out hover:scale-[1.05] hover:bg-cyan-400/10"
              >
                <a href="tel:087819393004">
                  Telephone <Phone className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

export default App;
