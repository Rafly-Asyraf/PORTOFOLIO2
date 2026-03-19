import DataImage, { listTools, listProyek, type Project, type Tool } from "./data";

// Helper to render tool card items in the tools section
function renderToolCard(tool: Tool) {
  return (
    <div
      className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
      key={tool.id}
    >
      <img
        src={tool.gambar}
        alt="tools image"
        className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
        loading="lazy"
      />
      <div>
        <h4 className="font-bold">{tool.nama}</h4>
        <p className="opacity-50">{tool.ket}</p>
      </div>
    </div>
  );
}

// Helper to render a single tool badge inside a project card
function renderProjectTool(tool: string, index: number) {
  return (
    <p
      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
      key={`${tool}-${index}`}
    >
      {tool}
    </p>
  );
}

// Helper to render project cards in the project section
function renderProjectCard(proyek: Project) {
  return (
    <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md">
      <img src={proyek.gambar} alt="proyek image" loading="lazy" />
      <div>
        <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
        <p className="text-base/loose mb-4">{proyek.desk}</p>
        <div className="flex flex-wrap gap-2">
          {proyek.tools.map((tool, index) => renderProjectTool(tool, index))}
        </div>
        <div className="mt-8 text-center">
          <a
            href={proyek.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
          >
            View website
          </a>
        </div>
      </div>
    </div>
  );
}

// Main page component
function App() {
  return (
    <>
      {/* Hero */}
      <div className="hero grid md:grid-cols-2 items-center md:pt-5 pt-10 mdxl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>kode yang indah ,lahir dari kedisiplinan 😁</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            hi, Saya Muhammad Rafly Asyraf
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya seorang fresh graduate dari program studi Teknologi Informasi di
            Universitas Bina Sarana Informatika. Saya memiliki ketertarikan
            mendalam di bidang pengembangan web, dengan fokus pada front-end
            development. Saya familiar dengan HTML, CSS, JavaScript, serta
            framework modern seperti Next.js dan React.js.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#project"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-download-cloud-2-line ri-lg"></i>
            </a>
            <a
              href="#project"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Proyek <i className="ri-arrow-down-long-line ri-lg"></i>{" "}
            </a>
          </div>
        </div>

        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[450px] md:ml-auto rounded-2xl mt-5"
          loading="lazy"
        />
      </div>
      {/* hero */}
      {/* about */}
      <div className="about mt-30 py-10" id="about">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <p className="text-base/loose mb-10">
            Sebagai seorang fresh graduate, saya memiliki semangat tinggi untuk
            terus belajar dan berkembang. Saya percaya bahwa teknologi terus
            bergerak maju dan saya ingin menjadi bagian dari perubahan tersebut.
            Saya juga memiliki kemampuan kerja sama tim yang baik, attitude
            profesional, dan siap beradaptasi dengan lingkungan kerja baru.
            <br /> <br />
            Saat ini saya sedang mencari kesempatan untuk bergabung dalam tim
            profesional melalui program magang atau pekerjaan full-time di bidang
            front-end development, di mana saya dapat mengasah kemampuan teknis
            sekaligus memberikan kontribusi nyata. Saya senang mengeksplorasi
            teknologi baru dan membangun antarmuka web yang interaktif dan
            efisien.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="about"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex items-center gap-6 ">
              <div>
                <h1 className="text-4xl mb-1">
                  4<span className="text-violet-500">+</span>
                </h1>
                <p>Project Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  1<span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-30">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl/snug font-bold mb-4">Tools yang di pakai</h1>
            <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:3/4 w-full text-base/loose opacity-50">
              berikut ini beberapa tools yang saya pakai
            </p>
          </div>

          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => renderToolCard(tool))}
          </div>
        </div>
      </div>
      {/* about */}

      {/* project */}
      <div className="project mt-26 py-10" id="project">
        <h1 className="text-center text-4xl font-bold mb-2">Project</h1>
        <p className="text-base/loose text-center opacity-50">
          berikut ini beberapa proyek yang telah saya buat
        </p>
        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => renderProjectCard(proyek))}
        </div>
      </div>
      {/* project */}
    </>
  );
}

export default App;
