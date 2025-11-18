import HeroImage from "/assets/hero-img.jpg";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
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


export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Fylo",
    desk: "Merupakan website landing page untuk brand fylo yang menawarkan penyimpanan file/document.",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "200",
    link:"https://rafly-asyraf.github.io/landing-page-dark-theme-fylo/",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Gossert",
    desk: "Merupakn Website e-commers yang menawarkan pemesanan suatu dessert secara online.",
    tools: ["CodeIgniter3", "PHP", "MySQL", "GitHub"],
    dad: "300",
    link:"https://rafly-asyraf.github.io/gossert/",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Sign-up",
    desk: "Merupakan UI untuk sign up user.",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "400",
    link:"https://rafly-asyraf.github.io/sign-up/",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Luxora",
    desk: "Merupakan website landing page untuk brand Luxora yang menampilkan dan mempromosikan produk jam digital modern.",
    tools: ["NextJS", "TypeScript", "Tailwind CSS", "Shadcn/UI","Vercel"],
    dad: "500",
    link: "https://landing-page-next-js-eight.vercel.app/",
  },
  // {
  //   id: 5,
  //   gambar: Proyek5,
  //   nama: "Web Portfolio",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
  //   dad: "600",
  // },
  // {
  //   id: 6,
  //   gambar: Proyek6,
  //   nama: "Company Profile 2.0",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["NextJS", "TailwindCSS", "Framermotion"],
  //   dad: "700",
  // },
];
