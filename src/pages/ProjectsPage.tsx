import { useState } from "react";
import { X } from "lucide-react";
import cosyRoomImage from "@/assets/f196762c95ba391bc5162cd1efa35093814fdda3.png";
import portraitImage from "@/assets/2896dec91eca877574ab3a989174318012468aac.png";
import nightSkyImage from "@/assets/c6fd7b153b8a444161b5871123f551e1faed8b8d.png";
import everydayObjectsImage from "@/assets/0f18cdcfacc43c7b354551e4f30568b8192bd1e9.png";
import echoGardenPdf from "@/assets/interactive-art-storyboarding.pdf";

// Video project images
import videoImg1 from "@/assets/8.jpeg";
import videoImg2 from "@/assets/9.jpeg";
import videoImg3 from "@/assets/10.jpeg";
import videoImg4 from "@/assets/11.jpeg";

interface Project {
  id: string;
  title: string;
  category: "product" | "uxui" | "web";
  image: string;
  height?: "tall" | "normal";
  description?: string;
  youtubeUrl?: string;
  externalLink?: string;
}

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] =
    useState<"all" | "product" | "uxui" | "web">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "1",
      title: "Lazer Cut Phone Stand",
      category: "product",
      image: everydayObjectsImage,
      height: "normal",
      description:
        "<b>OVERVIEW:</b> A product design project focused on creating a minimal and functional laser-cut phone stand...",
      externalLink:
        "https://www.behance.net/gallery/246569769/Lazer-Cut-Phone-Stand",
    },
    {
      id: "2",
      title: "Interactive Soundscape Project",
      category: "product",
      image:
        "https://images.unsplash.com/photo-1762318953799-918e21d1fec4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      height: "tall",
      description:
        "<b>OVERVIEW:</b> An interactive design project exploring the relationship between sound, space, and user interaction...",
      externalLink:
        "https://www.behance.net/gallery/246569919/Interactive-Soundscape-Project",
    },
    {
      id: "8",
      title: "Echo Garden: Interactive Art Storyboarding",
      category: "product",
      image:
        "https://images.unsplash.com/photo-1473773508845-188df298d2d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      height: "tall",
      description:
        "<b>OVERVIEW:</b> A storyboard-based interactive installation exploring a digital ecosystem...",
      externalLink: echoGardenPdf,
    },
    {
      id: "4",
      title: "Asthetic Shot: Cosy Evening at Home",
      category: "uxui",
      image: cosyRoomImage,
      height: "tall",
      description: `...technical details and description here...`,
    },
    {
      id: "5",
      title: "Formal Headshot: Professional Portrait",
      category: "uxui",
      image: portraitImage,
      height: "tall",
      description: `...technical details and description here...`,
    },
    {
      id: "6",
      title: "Passion Shot: Dramatic Night Sky",
      category: "uxui",
      image: nightSkyImage,
      height: "normal",
      description: `...technical details and description here...`,
    },
    {
      id: "7",
      title: "Reflective Piece",
      category: "web",
      image: "",
      description: `
<b>CS6042 Interactive Media Journey: Theory → Systems → Critical Design</b><br><br>
This project reflects on my journey through interactive media, exploring theoretical frameworks, system design approaches, and critical design practices...`,
      youtubeUrl: "https://youtu.be/9yeEhk0LVHc",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const categories = [
    { id: "product" as const, label: "Creative Projects" },
    { id: "uxui" as const, label: "Photo Gallery" },
    { id: "web" as const, label: "Video Gallery" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl mb-6 text-slate-900 dark:text-white">
            My <span className="font-bold">Work</span>
          </h1>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`group relative px-8 py-4 rounded-2xl text-base transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-br from-indigo-600 to-indigo-700 dark:from-indigo-700 dark:to-indigo-800 text-white shadow-lg scale-105"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-md hover:scale-105"
                }`}
              >
                <span className="font-medium">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mb-20">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="rounded-xl overflow-hidden bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all hover:shadow-xl">
                  <div
                    className={`overflow-hidden relative ${
                      project.height === "tall" ? "h-96" : "h-64"
                    }`}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-600 to-indigo-700 dark:from-indigo-700 dark:to-indigo-800">
                        <span className="text-6xl md:text-7xl font-bold text-white">
                          Video
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="sticky top-4 left-full ml-4 z-10 p-3 bg-white/90 dark:bg-slate-800/90 rounded-full hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-lg"
            >
              <X className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </button>

            {selectedProject.youtubeUrl ? (
              <div className="w-full rounded-t-2xl overflow-hidden bg-black aspect-video">
                <iframe
                  className="w-full h-full"
                  src={selectedProject.youtubeUrl}
                  title="Project Video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="w-full rounded-t-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto object-contain max-h-[60vh]"
                />
              </div>
            )}

            <div className="p-8">
              <h2 className="text-3xl mb-4 text-slate-900 dark:text-white">
                {selectedProject.title}
              </h2>

              <div
                className="text-base text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line space-y-4"
                dangerouslySetInnerHTML={{ __html: selectedProject.description! }}
              />

              {selectedProject.externalLink && (
                <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href={selectedProject.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    View Document
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}