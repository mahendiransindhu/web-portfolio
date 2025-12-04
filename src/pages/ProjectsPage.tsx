import { useState } from "react";
import { X } from "lucide-react";
import cosyRoomImage from "@/assets/f196762c95ba391bc5162cd1efa35093814fdda3.png";
import portraitImage from "@/assets/2896dec91eca877574ab3a989174318012468aac.png";
import nightSkyImage from "@/assets/c6fd7b153b8a444161b5871123f551e1faed8b8d.png";
import everydayObjectsImage from "@/assets/0f18cdcfacc43c7b354551e4f30568b8192bd1e9.png";

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
      title: "Design Qualities in Everyday Objects",
      category: "product",
      image: everydayObjectsImage,
      height: "normal",
      description:
        "A creative project showcasing innovative design thinking and user-centered approach.",
      externalLink:
        "https://drive.google.com/file/d/1SPFX2IIAGy0hkFYkqEvhDJ_ixelTqAD9/view?usp=sharing",
    },
    {
      id: "2",
      title: "Qualitative Design Research",
      category: "product",
      image:
        "https://images.unsplash.com/photo-1762318953799-918e21d1fec4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      height: "tall",
      description:
        "An exploration of geometric patterns and minimal aesthetics in product design.",
      externalLink:
        "https://drive.google.com/file/d/1nO1_zlgJL0IcDmXBi0tgGr1nqm0R_tXf/view?usp=sharing",
    },
    {
      id: "3",
      title: "Creative Exploration and Prototyping",
      category: "product",
      image:
        "https://images.unsplash.com/photo-1586296835409-fe3fe6b35b56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      height: "normal",
      description:
        "Sculptural forms meet functional design in this creative exploration.",
      externalLink:
        "https://drive.google.com/file/d/1P4dKrNeSAfUu76qckZIbTwXq6NJ1Fyl3/view?usp=sharing",
    },
    {
      id: "4",
      title: "Cosy Evening at Home",
      category: "uxui",
      image: cosyRoomImage,
      height: "tall",
      description: `<b>Technical Specifications</b>
Camera: Apple iPhone 16 Pro (Main rear camera)
Resolution: 10 MP (2941 × 3637), JPEG (2.3 MB)
Focal Length: 24 mm
Aperture: f/1.78
Shutter Speed: 1.4 s
ISO: 2000
Exposure Compensation: 0 EV

<b>Description</b>

That evening, the living room felt like a quiet little world of its own. The soft, golden glow of fairy lights and flickering candles filled the space with warmth, wrapping everything in a calm, comforting embrace. The sofa sat quietly in the middle, anchoring the scene, while the coffee table in front told its own story—a laptop left open from work or creativity, a Marshall speaker hinting at a favourite playlist, tiny candles flickering, and soft toys tucked nearby adding a personal, playful touch.

Behind it all, the curtains caught the glow of the lights, forming a gentle, textured backdrop that made the space feel intimate and inviting. The wooden floor reflected the light in subtle, shimmering patterns, creating depth and movement, while shadows played softly along the edges, keeping the room cozy and alive. Every detail—the laptop, the candles, the small scattered objects—worked together to create a scene that felt lived-in, personal, and full of quiet stories.

It was more than just a room; it was a moment frozen in time, a pause in the day where warmth, comfort, and creativity coexisted. The soft golden light made everything feel like it belonged exactly where it was, inviting anyone who saw it to sit down, breathe, and stay a little longer in the calm glow.

<b>Editing Notes</b>

Brightness and shadows were adjusted to keep the candlelight soft and glowing without overexposing any highlights.

Contrast was slightly increased to separate the dark sofa from the lighter curtains and floor.

Warmth and saturation were enhanced to emphasize the cosy, golden glow of the lights.

Noise was gently reduced to smooth the image without losing texture in the curtains or wooden floor.

A subtle vignette was applied to guide the viewer’s focus to the centre of the scene—the laptop, candles, and table—making it feel intimate and inviting.`,
    },
    {
      id: "5",
      title: "Professional Portrait",
      category: "uxui",
      image: portraitImage,
      height: "tall",
      description: `<b>Technical Specifications</b>
Camera: Apple iPhone 16 Pro (Main Rear Camera)
Focal Length: 24 mm (≈95 mm equivalent)
Aperture: f/1.78
Resolution: 12 MP (3023 × 4030)
Shutter Speed: 1/50 s
ISO: 200
Exposure: –0.7 EV
File Type: PNG (2.3 MB)

<b>Description</b>

In this portrait, the focus is on capturing a calm, confident presence. The camera was placed at just the right distance to create a flattering perspective, highlighting natural features without any distortion. The simple background keeps all attention on the expression, allowing personality and poise to shine through.

Soft, even lighting embraces the face, revealing natural skin tones and gentle shadows that add depth without harshness. The black outfit provides subtle contrast, giving the portrait a professional, polished, and timeless feel. Every detail—from the relaxed posture to the gentle gaze—was intended to communicate approachability, confidence, and authenticity.

This is more than just a headshot—it’s a moment frozen to convey trustworthiness, calm assurance, and professionalism. It’s suitable for LinkedIn, portfolios, resumes, project pages, or any context where a genuine, confident impression matters. The overall effect is clean, simple, and focused, letting personality and professionalism speak clearly without distraction.

<b>Editing Notes</b>

Brightened slightly to maintain natural, healthy skin tones.

Added gentle contrast to define details in the face and hair.

Mild warmth added to keep the image inviting and avoid dull indoor tones.

Background softened subtly to ensure the subject stands out.

Minimal edits were applied to preserve a natural, authentic, and realistic look.`,
    },
    {
      id: "6",
      title: "Passion Shot: Dramatic Night Sky",
      category: "uxui",
      image: nightSkyImage,
      height: "normal",
      description: `<b>Technical Specifications</b>
• Camera: Unknown (shared via WhatsApp)
• Resolution: 1 MP (960 × 1280)
• File Type: JPEG (51 KB)
• Lens / ISO / Shutter Speed: Not available

<b>Description</b>

The sky that evening felt like it was putting on a quiet show just for me. It began with deep reds melting into velvety magentas, spreading across the top of the sky like soft brushstrokes. As the colours drifted downward, they gently shifted into cool shades of green—unexpected, almost magical—like the sky was revealing a secret it doesn’t share often.

Below this cascade of colour, a band of warm yellow clouds glowed as if they were carrying their own light. They floated just above the dark, jagged outline of the trees, creating a perfect contrast: the calm glow of the sky against the solid, silent strength of the forest. The trees stood there like quiet witnesses to the moment, their silhouettes holding the scene together.

Behind it all, faint stars twinkled through the colours—tiny reminders of how wide and endless the night really is. For a moment, everything felt perfectly still. It was one of those scenes that makes you pause, breathe a little deeper, and simply take in the beauty unfolding above you. The sky wasn’t just colourful—it felt alive, like it had a story to tell, and I was lucky enough to capture it.

<b>Editing Notes</b>

• Enhanced the reds, greens, and yellows to bring out the natural colour layers.

• Increased contrast to highlight the glowing clouds against the dark treeline.

• Reduced noise for a smoother, dreamy sky.

• Slightly lifted brightness to reveal cloud textures and faint stars.

• Overall effect gives the image a soft, atmospheric glow with hidden colours brought to life.`,
    },
    {
      id: "7",
      title: `"Coffee" Short Film - Lip Sync Video`,
      category: "web",
      image: "",
      height: "normal",
      description: `<b>From Beat to Frame: My Journey Videographing the "Coffee" Short Film</b>

Picture this: a dimly lit room humming with the infectious rhythm of Sabrina Carpenter’s “Coffee.” As the videographer, I wasn’t just capturing footage—I was weaving a story of late-night creativity, where every shot breathed life into the song’s playful charm and unstoppable tempo. This wasn’t a polished studio production—it was a raw, collaborative sprint, shot entirely on iPhone 16 Pro Max and iPhone 16 Pro, turning everyday tech into cinematic magic.

<b>The Spark Ignites: Gear Up and Dive In</b>

It all started with a simple idea: bring “Coffee” to life through lip-sync mastery—no scripts, just pure performance synced to the track’s cheeky hooks. I picked up the iPhone 16 Pro Max for its pro-grade video capabilities—4K frames, buttery smooth at high frame rates—and the iPhone 16 Pro as backup for alternate angles. No gimbal, no extras—just handheld hustle to match the song’s bouncy energy.

The performers hit their marks with precision, channeling caffeinated flirtation, while I moved with them—framing tight close-ups of smirks, wide shots of synchronized swagger, and playful pivots. Continuity was our constant challenge: one flickering light on “Baby, I know that’s me coffee” and we’d reset, nailing it in under fifteen minutes thanks to sheer team grit.

<b>Behind the Lens: Sweat, Syncs, and Small Miracles</b>

Videography here wasn’t just pressing record—it was choreography. I anticipated every lyric drop, zooming in at just the right moment to catch a spark in the eyes or the subtle hip sway that screamed confidence. Fast pans tested the iPhones’ stabilization, but leaning into handheld energy added authenticity.

Post-shoot, Adobe Premiere Pro became my canvas for trimming beats, layering audio polish to make every word pop. InShot added playful text overlays, and After Effects spun the end credits into a hypnotic scroll—echoing smooth transitions I’d honed from my TFI Bicycle ad days. One small miracle? A tripod steadied a crucial transition shot, turning potential chaos into seamless rhythm.

<b>Trials, Triumphs, and the Team’s Rhythm</b>

Not every take was perfect. Syncing visuals to lines like “I can’t relate to desperation… Might give a fuck’s are on vacation” demanded precision—off-beat glances or mismatched lips meant starting over, testing patience but filling the room with laughter. That’s where the magic lived: Mughunthan’s charisma, Kavita’s poise, and our collective problem-solving created a vibe that mirrored the TFI project, balancing energy, timing, and spontaneity.

We focused only on essential shots, respecting deadlines, and the reward was instant: seeing raw performance immortalized, hearing the final mix thump, and knowing that iPhone power plus human spark could rival big rigs.

<b>The Final Brew: A Caffeinated Masterpiece</b>

When the credits rolled, “Coffee” was more than a video—it was a shared high, a testament to mobile filmmaking where limitation sparks invention. Proud doesn’t cover it; this journey sharpened my eye for rhythm-driven storytelling, blending tech savvy with heart. Grateful for the team who turned lyrics into legacy.

Watch it, feel the buzz, and remember: sometimes the best shots come from the boldest brews.`,
      youtubeUrl: "https://www.youtube.com/watch?v=hGXjlXMoMAo",
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
      <div className="absolute top-20 right-10 w-64 h-64 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-3xl opacity-20 animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-3xl opacity-15 animate-[float_6s_ease-in-out_infinite_2s]" />

      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
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

        <div className="mb-20 animate-[fadeInUp_1s_ease-out]">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => {
                  if (project.externalLink) {
                    window.open(project.externalLink, "_blank");
                  } else {
                    setSelectedProject(project);
                  }
                }}
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
                          Coffee
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
            selectedProject.youtubeUrl ? (
              <div className="w-full rounded-t-2xl overflow-hidden bg-black aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedProject.youtubeUrl.split(
                    "v="
                  )[1]}`}
                  title={selectedProject.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
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
                  {categories.find((c) => c.id === selectedProject.category)?.label}
                </span>
              </div>

              <div
                className="text-base text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line space-y-4"
                dangerouslySetInnerHTML={{ __html: selectedProject.description! }}
              />

              {selectedProject.category === "web" &&
                selectedProject.blogLink && (
                  <div className="flex flex-col gap-4 pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
                    <a
                      href={selectedProject.blogLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5 w-fit"
                    >
                      <span>Read the Blog</span>
                    </a>
                  </div>
                )}

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
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
}