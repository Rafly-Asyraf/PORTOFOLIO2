import HeroImage from "/assets/hero-img.jpg";

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
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
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
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";

// List of projects to render in the project section
export const listProyek: Project[] = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Fylo",
    desk: "Merupakan website landing page untuk brand fylo yang menawarkan penyimpanan file/document.",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "200",
    link: "https://rafly-asyraf.github.io/landing-page-dark-theme-fylo/",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Gossert",
    desk: "Merupakn Website e-commers yang menawarkan pemesanan suatu dessert secara online.",
    tools: ["CodeIgniter3", "PHP", "MySQL", "GitHub"],
    dad: "300",
    link: "https://rafly-asyraf.github.io/gossert/",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Sign-up",
    desk: "Merupakan UI untuk sign up user.",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "400",
    link: "https://rafly-asyraf.github.io/sign-up/",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Luxora",
    desk: "Merupakan website landing page untuk brand Luxora yang menampilkan dan mempromosikan produk jam digital modern.",
    tools: ["NextJS", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Vercel"],
    dad: "500",
    link: "https://landing-page-next-js-eight.vercel.app/",
  },
];
