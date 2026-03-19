import DataImage, { listTools, listProyek, type Project, type Tool } from "./data";
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
import { ArrowUpRight, Download, Mail, MessageCircle, Phone, Sparkles } from "lucide-react";

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
        <CardDescription className="text-slate-400">{proyek.desk}</CardDescription>
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
      <section id="home" className="grid gap-5 py-6 md:py-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <Badge className="w-fit border border-cyan-400/40 bg-cyan-400/10 text-cyan-200">
            <Sparkles className="mr-2 h-4 w-4" /> Front-End Engineer
          </Badge>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Muhammad Rafly Asyraf
          </h1>
          <p className="text-base leading-relaxed text-slate-400">
            Lulusan Teknologi Informasi dengan fokus pada pengembangan front-end.
            Berpengalaman merancang antarmuka web yang responsif, rapi, dan siap
            produksi dengan pendekatan UI modern serta praktik terbaik
            pengembangan web.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-cyan-400 text-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition duration-200 ease-in-out hover:scale-[1.05] hover:bg-cyan-300"
            >
              <a href="/assets/cv-rafly-asyraf.pdf" download>
                Unduh CV <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              className="border border-cyan-400/40 bg-transparent text-cyan-100 transition duration-200 ease-in-out hover:scale-[1.05] hover:bg-cyan-400/10"
            >
              <a href="#project">Lihat Portofolio</a>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-[#0f172a] to-[#0b1224] text-slate-50 shadow-[0_0_0_rgba(6,182,212,0)] transition duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(6,182,212,0.2)]">
              <CardHeader className="p-4">
                <CardTitle className="text-3xl">4+</CardTitle>
                <CardDescription className="text-slate-400">Proyek Terselesaikan</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-[#0f172a] to-[#0b1224] text-slate-50 shadow-[0_0_0_rgba(6,182,212,0)] transition duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(6,182,212,0.2)]">
              <CardHeader className="p-4">
                <CardTitle className="text-3xl">1+</CardTitle>
                <CardDescription className="text-slate-400">Tahun Pengalaman</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
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
                <p>Terbuka untuk kolaborasi pada proyek web modern.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="bg-cyan-400/20" />

      <section id="about" className="space-y-5 py-6 md:py-8">
        <div className="max-w-3xl space-y-3">
          <h2 className="text-3xl font-semibold md:text-4xl">Tentang Saya</h2>
          <p className="text-base leading-relaxed text-slate-400">
            Saya berkomitmen untuk terus belajar dan berkembang. Saya ingin
            berkontribusi dalam tim profesional melalui program magang atau
            full-time di bidang front-end development untuk membangun produk yang
            berdampak nyata.
          </p>
        </div>
        <div className="rounded-2xl bg-gradient-to-r from-cyan-400/30 via-transparent to-cyan-400/20 p-[1px]">
          <Card className="border border-cyan-400/20 bg-gradient-to-br from-cyan-400/5 via-[#0f172a] to-[#0b1224] text-slate-50 shadow-[0_0_0_rgba(6,182,212,0)] transition duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(6,182,212,0.2)]">
            <CardContent className="grid gap-6 p-6 md:grid-cols-[auto_1fr] md:p-8">
              <img
                src={DataImage.HeroImage}
                alt="About"
                className="h-16 w-16 rounded-md object-cover ring-2 ring-cyan-400/60"
                loading="lazy"
              />
              <div className="space-y-2 text-slate-400">
                <p>
                  Fokus saya adalah membangun antarmuka web yang rapi, cepat, dan
                  mudah digunakan. Saya terbiasa bekerja dengan desain modern,
                  mengutamakan detail UI, serta menjaga kualitas performa.
                </p>
                <p>
                  Saya terbuka untuk kolaborasi pada produk digital, landing page,
                  maupun dashboard yang membutuhkan tampilan profesional.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-5 py-6 md:py-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold md:text-4xl">Tech Stack</h2>
          <p className="text-base text-slate-400">
            Teknologi utama yang saya gunakan untuk membangun aplikasi web modern.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {listTools.map((tool) => renderToolCard(tool))}
        </div>
      </section>

      <section id="project" className="space-y-5 py-6 md:py-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold md:text-4xl">Proyek Terbaru</h2>
          <p className="text-base text-slate-400">
            Beberapa proyek yang pernah saya kerjakan dengan fokus pada UI yang
            rapi dan performa yang stabil.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {listProyek.map((proyek) => renderProjectCard(proyek))}
        </div>
      </section>

      <section id="contact" className="space-y-5 py-6 md:py-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold md:text-4xl">Kontak</h2>
          <p className="text-base text-slate-400">
            Terbuka untuk diskusi kebutuhan proyek, peluang kerja, dan kolaborasi.
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
                  rafly.asyraf9011@gmail.com
                </a>
              </div>
              <div className="space-y-1 text-sm text-slate-400">
                <p className="text-slate-200">Telepon</p>
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
                <a href="mailto:rafly.asyraf9011@gmail.com">
                  Kirim Email <Mail className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                className="border border-cyan-400/40 bg-transparent text-cyan-100 transition duration-200 ease-in-out hover:scale-[1.05] hover:bg-cyan-400/10"
              >
                <a href="https://wa.me/6287819393004" target="_blank" rel="noopener noreferrer">
                  WhatsApp <MessageCircle className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                className="border border-cyan-400/40 bg-transparent text-cyan-100 transition duration-200 ease-in-out hover:scale-[1.05] hover:bg-cyan-400/10"
              >
                <a href="tel:087819393004">
                  Telepon <Phone className="ml-2 h-4 w-4" />
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
