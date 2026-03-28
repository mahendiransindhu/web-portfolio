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

// New reflective video
import reflectiveVideo from "@/assets/1.mp4";

interface Project {
  id: string;
  title: string;
  category: "product" | "uxui" | "web";
  image: string;
  height?: "tall" | "normal";
  description?: string;
  youtubeUrl?: string;
  blogLink?: string;
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
        "<b>OVERVIEW:</b> A product design project focused on creating a minimal and functional laser-cut phone stand. The design emphasizes precision, material efficiency, and usability.<br><br><b>PROCESS:</b> The stand was developed using CAD modeling and optimized for laser cutting, ensuring structural stability while maintaining a clean aesthetic.<br><br><b>OUTCOME:</b> A compact, portable phone stand that balances functionality with modern design principles.",
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
        "<b>OVERVIEW:</b> An interactive design project exploring the relationship between sound, space, and user interaction.<br><br><b>CONCEPT:</b> The project creates an immersive soundscape where user actions influence audio outputs, blending technology with sensory experience.<br><br><b>OUTCOME:</b> A dynamic installation concept that demonstrates how sound can enhance engagement and storytelling in interactive environments.",
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
        "<b>OVERVIEW:</b> A storyboard-based interactive installation exploring a digital ecosystem where visitors act as pollinators influencing virtual plants. The project visualises sustainability through interaction design aligned with UN SDG 15 — Life on Land.<br><br><b>SKILLS:</b> UX storyboarding, system thinking, interaction design, sustainability-driven design, and narrative building.<br><br><b>TOOLS:</b> Unity, TouchDesigner, Raspberry Pi (conceptual), sensors, projection mapping.",
      externalLink: echoGardenPdf,
    },
    {
      id: "4",
      title: "Asthetic Shot: Cosy Evening at Home",
      category: "uxui",
      image: cosyRoomImage,
      height: "tall",
      description: `<b>TECHNICAL SPECIFICATIONS</b><br>
• Camera: Apple iPhone 16 Pro (Main Rear Camera)<br>
• Resolution: 10 MP (2941 × 3637), JPEG (2.3 MB)<br>
• Focal Length: 24 mm<br>
• Aperture: f/1.78<br>
• Shutter Speed: 1.4 s<br>
• ISO: 2000<br>
• Exposure Compensation: 0 EV<br><br>
<b>DESCRIPTION OF THE SHOT</b><br>
This photograph was taken in a dimly lit living room, using a long exposure to capture the cozy glow of fairy lights and candles. The extended shutter time and high ISO allow the room’s warmth to shine through while still preserving detail in the darker surroundings.
The composition centers around a relaxed, personal workspace: a sofa in the background, a small wooden coffee table in the foreground, a softly lit laptop, a Marshall speaker, small candles flickering gently, and plush toys adding a touch of personality. The curtain and fairy lights form a glowing backdrop, while reflections on the wooden floor add depth and richness to the scene. The entire setting feels tranquil, inviting, and alive with soft ambient light.<br><br>
<b>EDITING DETAILS</b><br>
• Balanced brightness and shadows<br>
• Slight contrast added<br>
• Warmth and saturation enhanced<br>
• Gentle noise reduction applied<br>
• Light vignette added to guide focus`,
    },
    {
      id: "5",
      title: "Formal Headshot: Professional Portrait",
      category: "uxui",
      image: portraitImage,
      height: "tall",
      description: `<b>TECHNICAL SPECIFICATIONS</b><br>
• Camera: Apple iPhone 16 Pro (Main Rear Camera)<br>
• Focal Length: 24 mm (≈95 mm equivalent)<br>
• Aperture: f/1.78<br>
• Resolution: 12 MP (3023 × 4030)<br>
• Shutter Speed: 1/50 s<br>
• ISO: 200<br>
• Exposure: –0.7 EV<br>
• File Type: PNG (2.3 MB)<br><br>
<b>PHOTO DESCRIPTION</b><br>
This portrait was captured with the iPhone 16 Pro’s main camera to preserve natural facial proportions and avoid distortion. Positioned at a comfortable distance and lightly zoomed in, the camera creates a balanced, flattering headshot that highlights the subject’s expression with clarity. Soft, even lighting smooths transitions between highlights and shadows, giving the skin a natural glow and keeping the mood warm and approachable.
The background is deliberately simple, gently fading out so the focus remains on the subject. The black outfit adds crisp contrast and heightens the portrait’s professional tone. Overall, the image feels clean, intentional, and composed with care.<br><br>
<b>EDITING DETAILS</b><br>
• Slight brightening<br>
• Mild contrast increase<br>
• Touch of warmth<br>
• Gentle background softening<br>
• Minimal edits for authenticity<br><br>
<b>REPRESENTATION</b><br>
This headshot captures a calm, confident, and approachable presence. The expression feels genuine and grounded, making the portrait suitable for resumes, LinkedIn profiles, academic portfolios, and professional platforms. Its simplicity, clarity, and warmth work together to form a polished first impression that communicates professionalism and sincerity.`,
    },
    {
      id: "6",
      title: "Passion Shot: Dramatic Night Sky",
      category: "uxui",
      image: nightSkyImage,
      height: "normal",
      description: `<b>TECHNICAL SPECIFICATIONS</b><br>
• Camera: Apple iPhone 16 Pro (Main Rear Camera)<br>
• Resolution: 1 MP (960 × 1280)<br>
• File Type: JPEG (51 KB)<br><br>
<b>DESCRIPTION OF THE SHOT</b><br>
The sky in this image bursts with vibrant, almost surreal color. Deep reds and rich magentas sweep across the upper frame, blending gradually into soft greens that give the scene a dreamy, atmospheric quality. Beneath these colors, a band of glowing yellow clouds stretches above the dark silhouettes of trees, creating a bold contrast between light and shadow.
Faint stars shimmer throughout the background, adding depth and giving the sky a sense of vastness. The horizon line and sharply defined treetops anchor the composition, guiding the viewer upward into the dramatic explosion of color. The result is a striking, almost otherworldly scene that captures the sky at a rare and mesmerizing moment.<br><br>
<b>EDITING / PROCESSING NOTES</b><br>
• Enhanced color vibrancy<br>
• Increased contrast<br>
• Noise reduction<br>
• Slight brightness lift<br>
• Overall effect highlights atmospheric tones`,
    },
    {
      id: "7",
      title: "Reflective Piece",
      category: "web",
      image: "",
      description: `
<b>CS6042 Interactive Media Journey: Theory → Systems → Critical Design</b><br><br>
This project reflects on my journey through interactive media, exploring theoretical frameworks, system design approaches, and critical design practices. The reflective piece documents insights, challenges, and the evolution of my understanding throughout the course.`,
      externalLink: reflectiveVideo,
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
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-3xl opacity-20 animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-3xl opacity-15 animate-[float_6s_ease-in-out_infinite_2s]" />

      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-[fadeInUp_0.8s_ease-out]">
          <h1 className="text-5xl md:text-6xl mb-6 text-slate-900 dark:text-white">
            My <span className="font-bold">Work</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to discuss a new project, seek advice, or
            collaborate, I'm always excited to connect and explore new
            possibilities.
          </p>

          <div className="flex items-center justify-center gap-6 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`group relative px-8 py-4 rounded-2xl text-base transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-br from-indigo-600 to-indigo-700 dark:from-indigo-700 dark:to-indigo-800 text-white shadow-lg shadow-indigo-300 dark:shadow-indigo-900/50 scale-105"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-md hover:scale-105"
                }`}
              >
                <span className="font-medium">{cat.label}</span>
                {activeCategory === cat.id && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-white dark:bg-indigo-400 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mb-20 animate-[fadeInUp_1s_ease-out]">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-xl mb-1">{project.title}</h3>
                        <p className="text-sm text-white/80">
                          {project.externalLink
                            ? "Click to open document"
                            : "Click to view details"}
                        </p>
                      </div>
                    </div>
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
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-[slideUp_0.3s_ease-out] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="sticky top-4 left-full ml-4 z-10 p-3 bg-white/90 dark:bg-slate-800/90 rounded-full hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-lg"
            >
              <X className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </button>

            {selectedProject.category === "web" &&
            selectedProject.externalLink ? (
              <div className="w-full rounded-t-2xl overflow-hidden bg-black aspect-video">
                <video
                  controls
                  className="w-full h-full object-contain"
                  src={selectedProject.externalLink}
                />
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
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 rounded-full text-sm">
                  {
                    categories.find((c) => c.id === selectedProject.category)
                      ?.label
                  }
                </span>
              </div>

              <div
                className="text-base text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line space-y-4"
                dangerouslySetInnerHTML={{ __html: selectedProject.description! }}
              />

              {selectedProject.category === "product" &&
                selectedProject.externalLink && (
                  <div className="flex flex-col gap-4 pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
                    <a
                      href={selectedProject.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5 w-fit"
                    >
                      <span>View Document</span>
                    </a>
                  </div>
                )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(5deg); } }
      `}</style>
    </div>
  );
}