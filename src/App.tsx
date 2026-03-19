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
import { ArrowUpRight, Download, Sparkles } from "lucide-react";

function renderToolCard(tool: Tool) {
  return (
    <Card
      key={tool.id}
      className="border-zinc-800 bg-zinc-900/60 text-zinc-100 shadow-none transition hover:-translate-y-1 hover:bg-zinc-900"
    >
      <CardContent className="flex items-center gap-3 p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800">
          <img src={tool.gambar} alt={tool.nama} className="h-8 w-8" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-semibold">{tool.nama}</p>
          <Badge variant="secondary" className="bg-zinc-800 text-zinc-200">
            {tool.ket}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

function renderProjectTool(tool: string, index: number) {
  return (
    <Badge key={`${tool}-${index}`} variant="outline" className="border-zinc-700 text-zinc-200">
      {tool}
    </Badge>
  );
}

function renderProjectCard(proyek: Project) {
  return (
    <Card
      key={proyek.id}
      className="border-zinc-800 bg-zinc-900/60 text-zinc-100 shadow-none"
    >
      <CardHeader className="p-4">
        <div className="overflow-hidden rounded-lg">
          <img
            src={proyek.gambar}
            alt={proyek.nama}
            className="h-44 w-full object-cover transition duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-3 p-4 pt-0">
        <CardTitle className="text-xl">{proyek.nama}</CardTitle>
        <CardDescription className="text-zinc-400">{proyek.desk}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {proyek.tools.map((tool, index) => renderProjectTool(tool, index))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full bg-zinc-100 text-zinc-900 hover:bg-white">
          <a href={proyek.link} target="_blank" rel="noopener noreferrer">
            View website <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

function App() {
  return (
    <div className="space-y-16 pb-20 pt-10 text-zinc-100">
      <section id="home" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <Badge className="w-fit bg-zinc-100 text-zinc-900">
            <Sparkles className="mr-2 h-4 w-4" /> Front-end Developer
          </Badge>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Muhammad Rafly Asyraf
          </h1>
          <p className="text-base leading-relaxed text-zinc-400">
            Fresh graduate Teknologi Informasi dengan fokus pada front-end
            development. Berpengalaman membangun antarmuka web yang responsif,
            rapi, dan siap produksi menggunakan React dan Tailwind CSS.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="bg-zinc-100 text-zinc-900 hover:bg-white">
              <a href="#project">
                Download CV <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              className="border border-zinc-700 bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
            >
              <a href="#project">Lihat Proyek</a>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border-zinc-800 bg-zinc-900/60 text-zinc-100 shadow-none">
              <CardHeader className="p-4">
                <CardTitle className="text-3xl">4+</CardTitle>
                <CardDescription className="text-zinc-400">
                  Project Selesai
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-zinc-800 bg-zinc-900/60 text-zinc-100 shadow-none">
              <CardHeader className="p-4">
                <CardTitle className="text-3xl">1+</CardTitle>
                <CardDescription className="text-zinc-400">
                  Tahun Pengalaman
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
        <Card className="border-zinc-800 bg-zinc-900/60 text-zinc-100 shadow-none">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/80 p-4">
                <img
                  src={DataImage.HeroImage}
                  alt="Hero Image"
                  className="h-12 w-12 rounded-md object-cover"
                  loading="lazy"
                />
                <p className="text-sm text-zinc-300">
                  Kode yang indah lahir dari kedisiplinan dan konsistensi.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={DataImage.HeroImage}
                  alt="Profile"
                  className="h-80 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2 text-sm text-zinc-400">
                <p>Front-end · React · Tailwind · TypeScript</p>
                <p>Siap kolaborasi untuk proyek web modern.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="bg-zinc-800" />

      <section id="about" className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <h2 className="text-3xl font-semibold">Tentang Saya</h2>
          <p className="text-base leading-relaxed text-zinc-400">
            Saya memiliki semangat tinggi untuk terus belajar dan berkembang. Saya
            ingin berkontribusi dalam tim profesional melalui program magang atau
            full-time di bidang front-end development untuk membangun produk yang
            memberi dampak nyata.
          </p>
        </div>
        <Card className="border-zinc-800 bg-zinc-900/60 text-zinc-100 shadow-none">
          <CardContent className="grid gap-6 p-6 md:grid-cols-[auto_1fr]">
            <img
              src={DataImage.HeroImage}
              alt="About"
              className="h-16 w-16 rounded-md object-cover"
              loading="lazy"
            />
            <div className="space-y-2 text-zinc-400">
              <p>
                Fokus saya adalah membangun antarmuka web yang rapi, cepat, dan
                mudah digunakan. Saya terbiasa bekerja dengan desain modern,
                mengutamakan detail UI, dan menjaga kualitas performa.
              </p>
              <p>
                Saya terbuka untuk kolaborasi pada produk digital, landing page,
                atau dashboard yang memerlukan tampilan profesional.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Tools yang Digunakan</h2>
          <p className="text-base text-zinc-400">
            Stack utama yang saya gunakan untuk membangun aplikasi web modern.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {listTools.map((tool) => renderToolCard(tool))}
        </div>
      </section>

      <section id="project" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Project Terbaru</h2>
          <p className="text-base text-zinc-400">
            Beberapa proyek yang pernah saya kerjakan, fokus pada UI yang rapi dan
            performa yang stabil.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {listProyek.map((proyek) => renderProjectCard(proyek))}
        </div>
      </section>
    </div>
  );
}

export default App;
