import HeroImage from "/assets/profile.jpg";

// Type for a single tool item displayed in the tools section
export type Tool = {
  id: number;
  gambar: string;
  nama: string;
  ket: string;
  dad: string;
};

// Type for a single project item displayed in the projects section
export type Project = {
  id: number;
  gambar: string;
  nama: string;
  desk: string;
  tools: string[];
  dad: string;
  link: string;
};

// Helper data for images used in multiple sections
const DataImage = {
  HeroImage,
};

export default DataImage;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";

// List of tools to render in the tools section
export const listTools: Tool[] = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "IDE",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React",
    ket: "Library",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next.js",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "JavaScript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node.js",
    ket: "JavaScript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "GitHub",
    ket: "Version Control",
    dad: "800",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/woysplitbill.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/uangku.png";

// List of projects to render in the project section
export const listProyek: Project[] = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Fylo",
    desk: "Landing page modern untuk brand Fylo yang menampilkan layanan penyimpanan file dan dokumen dengan desain responsif dan mudah digunakan.",
    tools: ["HTML", "CSS", "JavaScript"],
    dad: "200",
    link: "https://rafly-asyraf.github.io/landing-page-dark-theme-fylo/",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Gossert",
    desk: "Website e-commerce untuk pemesanan dessert online dengan tampilan modern dan alur pembelian yang ringkas.",
    tools: ["CodeIgniter3", "PHP", "MySQL", "GitHub","vercel"],
    dad: "300",
    link: "https://rafly-asyraf.github.io/gossert/",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Woy-SplitBill",
    desk: "Aplikasi split bill untuk membagi pengeluaran bersama secara cepat dan akurat.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Zustand", "React Hook Form + Zod", "Lucide React"],
    dad: "400",
    link: "https://woy-split-bill.vercel.app",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Luxora",
    desk: "Landing page untuk brand Luxora yang menampilkan dan mempromosikan jam digital modern.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Vercel"],
    dad: "500",
    link: "https://landing-page-next-js-eight.vercel.app/",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Uangku",
    desk: "Aplikasi pencatat pengeluaran dengan input cepat, visualisasi chart, dan tanpa backend.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Chart.js", "Radix UI"],
    dad: "500",
    link: "https://uangku-neon.vercel.app/",
  },
];
