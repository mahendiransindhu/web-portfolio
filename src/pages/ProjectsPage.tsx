import { useState } from "react";
import { X } from "lucide-react";
import cosyRoomImage from "figma:asset/f196762c95ba391bc5162cd1efa35093814fdda3.png";
import portraitImage from "figma:asset/2896dec91eca877574ab3a989174318012468aac.png";
import nightSkyImage from "figma:asset/c6fd7b153b8a444161b5871123f551e1faed8b8d.png";
import everydayObjectsImage from "figma:asset/0f18cdcfacc43c7b354551e4f30568b8192bd1e9.png";

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
  const [activeCategory, setActiveCategory] = useState<"all" | "product" | "uxui" | "web">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    // Creative Projects
    { 
      id: "1", 
      title: "Design Qualities in Everyday Objects", 
      category: "product", 
      image: everydayObjectsImage, 
      height: "normal",
      description: "A creative project showcasing innovative design thinking and user-centered approach.",
      externalLink: "https://drive.google.com/file/d/1SPFX2IIAGy0hkFYkqEvhDJ_ixelTqAD9/view?usp=sharing"
    },
    { 
      id: "2", 
      title: "Qualitative Design Research", 
      category: "product", 
      image: "https://images.unsplash.com/photo-1762318953799-918e21d1fec4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMG5vdGVib29rJTIwd3JpdGluZ3xlbnwxfHx8fDE3NjQ4NDI5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      height: "tall",
      description: "An exploration of geometric patterns and minimal aesthetics in product design.",
      externalLink: "https://drive.google.com/file/d/1nO1_zlgJL0IcDmXBi0tgGr1nqm0R_tXf/view?usp=sharing"
    },
    { 
      id: "3", 
      title: "Creative Exploration and Prototyping", 
      category: "product", 
      image: "https://images.unsplash.com/photo-1586296835409-fe3fe6b35b56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb3RvdHlwaW5nJTIwc2tldGNoZXN8ZW58MXx8fHwxNjQ4NDI5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      height: "normal",
      description: "Sculptural forms meet functional design in this creative exploration.",
      externalLink: "https://drive.google.com/file/d/1P4dKrNeSAfUu76qckZIbTwXq6NJ1Fyl3/view?usp=sharing"
    },
    
    // Photo Gallery
    { 
      id: "4", 
      title: "Cosy Evening at Home", 
      category: "uxui", 
      image: cosyRoomImage, 
      height: "tall",
      description: `Technical Specifications:
Camera: Apple iPhone 16 Pro (Main rear camera)
Resolution: 10 MP (2941 × 3637), JPEG (2.3 MB)
Focal Length: 24 mm
Aperture: f/1.78
Shutter Speed: 1.4 s
ISO: 2000
Exposure Compensation: 0 EV

The room felt like it had settled into a soft sigh at the end of the day. Fairy lights twinkled gently against the curtains, as if trying to whisper their own tiny stories into the warm stillness. The candles on the table glowed with that kind of steady, comforting light that makes everything feel a little safer, a little softer.

The laptop rested open on the coffee table, casting a cool shimmer into the warm air—like two different worlds meeting in the same small moment. Beside it, the Marshall speaker sat patiently, almost as if it were waiting to be asked to play the next favourite song. A couple of plush toys leaned lazily against the sofa cushions, looking perfectly at home, like quiet companions who had no intention of going anywhere.

The long exposure caught the warmth of the scene in slow motion, stretching each flicker, each glow, each reflection on the wooden floor until the room felt suspended in its own little pocket of time. Nothing was posed; nothing tried too hard. It was simply a warm, lived-in evening—a space where you could breathe, sink into the cushions, and forget the world for a while.

Editing Details:
Kept brightness and shadows balanced to let the candlelight shine naturally
Added a hint of contrast to separate the cosy layers of the room
Boosted warmth and saturation to keep the golden glow alive
Smoothed noise lightly while keeping the room's texture real
Applied a gentle vignette to draw the eye to the heart of the scene—the table, the candles, the quiet moment itself`
    },
    { 
      id: "5", 
      title: "Professional Portrait", 
      category: "uxui", 
      image: portraitImage, 
      height: "tall",
      description: `Technical Specifications:
Camera: Apple iPhone 16 Pro (Main Rear Camera)
Focal Length: 24 mm (≈95 mm equivalent)
Aperture: f/1.78
Resolution: 12 MP (3023 × 4030)
Shutter Speed: 1/50 s
ISO: 200
Exposure: –0.7 EV
File Type: PNG (2.3 MB)

For this portrait, my friend took the photo for me using the iPhone 16 Pro. We positioned the camera at a comfortable distance so the framing would feel natural and not too close. The lighting we used was soft and even, which helped avoid harsh shadows and kept my skin tone looking clean and realistic. I chose a simple background on purpose so the focus would stay on my expression instead of anything behind me. Wearing a black outfit also helped create a clear contrast, giving the picture a neat and professional appearance.

In this portrait, I wanted to look relaxed, approachable, and confident without forcing any expressions. Since my friend was the one behind the camera, it felt easier to look natural and calm. My goal was to create a headshot that represents me genuinely—something that feels professional but still true to who I am.

What This Picture Represents:
This image is meant to be a clean, formal-style headshot that I can use for academic or professional purposes, such as LinkedIn, resumes, portfolios, or project pages. I wanted it to show a balanced mix of confidence and friendliness, and overall present me in a simple, real, and trustworthy way.

Editing Details:
Slight brightness added to keep my skin tone natural
Light contrast for clearer facial details
A bit of warmth to soften indoor lighting
Gentle background softening to keep the focus on me
Minimal editing overall to maintain a natural, realistic look`
    },
    { 
      id: "6", 
      title: "Dramatic Night Sky", 
      category: "uxui", 
      image: nightSkyImage, 
      height: "normal",
      description: `Technical Specifications:
Camera: Apple iPhone 16 Pro (Main Rear Camera)
Resolution: 1 MP (960 × 1280)
File Type: JPEG (51 KB)
Estimated Lens / ISO / Shutter Speed (based on the image):
Approx. 24 mm equivalent lens (standard wide camera)
ISO likely between 800–2000 due to the bright colours and star visibility
Slow shutter speed, around 1–3 seconds, which explains the smooth sky and bright, blended colours
(These values are not exact camera data — they are reasonable estimates based on the visual characteristics of the image.)

For this photograph, I captured a dramatic, colourful night sky that looked almost unreal in person. The upper part of the image is filled with intense reds, purples, and greens that blend smoothly together, almost like the sky was painted with soft strokes. Just below that, there's a layer of glowing yellow clouds sitting above the dark silhouettes of the trees, creating a strong visual contrast.

Even though the resolution is low, the atmosphere of the scene still comes through clearly. Faint stars are sprinkled throughout the frame, adding depth and giving the sky a sense of endless space. The trees at the bottom create a solid anchor, naturally guiding the viewer's eye upward toward the bold colours above.

What This Picture Represents:
This image captures a rare and vivid moment in the sky—one of those scenes where nature feels almost magical. The unusual mix of colours and the glowing clouds made the whole moment feel surreal, and my goal in taking this photo was to preserve that feeling. It represents a brief pause to appreciate how dramatic and expressive the sky can be, even when shot with simple equipment.

Editing / Processing Notes:
Colours enhanced to emphasize the magentas, greens, and yellows
Contrast increased to make the glowing clouds stand out against the dark tree line
Noise reduction applied for a smoother sky
Slight brightness boost to reveal cloud texture and faint stars
Overall effect resembles a long-exposure look with emphasised colour bands`
    },
    
    // Video Gallery - Replace these with your actual images
    { 
      id: "7", 
      title: "\"Coffee\" Short Film - Lip Sync Video", 
      category: "web", 
      image: "", // Empty image to trigger text display
      height: "normal",
      description: `From Beat to Frame: My Journey Videographing the "Coffee" Short Film

Picture this: a dimly lit room, buzzing with the rhythm of Sabrina Carpenter's "Coffee." Mughunthan and Kavita Thirumoorthy are ready, lips primed to sync with the opening lines—"Now he is thinking about me every night. Oh, is that sweet like coffee?" Their energy is electric, and I'm behind the lens, camera in hand, not just recording, but shaping the story. This isn't a polished studio shoot—it's a raw, passionate collaboration, captured entirely on iPhone 16 Pro Max and iPhone 16 Pro. Everyday devices, extraordinary results.

The Spark Ignites: Gear Up and Dive In
The idea was simple: bring "Coffee" to life through pure lip-sync performance. No script, no extra fluff—just energy, timing, and charisma. I grabbed the iPhone 16 Pro Max for its stunning 4K video and high frame rates, and used the iPhone 16 Pro for backup angles. No gimbal—just handheld shots to match the song's playful bounce. The performers brought that "caffeinated flirtation" to every take, while I moved around them, capturing close-ups of sly smiles and wide shots of synchronized swagger. Continuity was tricky—one flicker of light and we'd redo a shot—but we nailed it under 15 minutes each time thanks to sheer teamwork.

Behind the Lens: Sweat, Syncs, and Small Miracles
Shooting this video was more than pressing record—it was dancing with the camera. I had to anticipate every lyric, like the sassy turn at "Your ex don't do it for you. Walk in and drink and do it for you," zooming in to catch a sparkle in the eyes or the subtle sway of a hip. Fast pans were risky without stabilization, so I leaned into handheld energy to keep it authentic. Post-production was a mix of Adobe Premiere Pro for trimming beats, InShot for text overlays, and After Effects for hypnotic end credits—echoing techniques I'd honed on my TFI Bicycle project. A key moment? A tripod saved the transition shot into the chorus, turning potential chaos into a smooth, cinematic beat.

Trials, Triumphs, and the Team's Rhythm
Not every take worked. Syncing perfectly with lyrics like "I can't relate to desperation… Might give a fuck's are on vacation" demanded precision. One missed look or off-beat lip-sync meant starting over—but that's where the fun was. The team's energy carried us through: Mughunthan's charm, Kavita's poise, and our collective problem-solving made it all click. We kept shots essential, respected deadlines, and the final reward was watching the performance come alive—proof that iPhones plus heart can rival big rigs.

The Final Brew: A Caffeinated Masterpiece
When the credits rolled, "Coffee" wasn't just a video—it was a shared high. Mobile filmmaking had pushed us to be creative, resourceful, and bold. I left the project with a sharper eye for rhythm-driven storytelling and a renewed appreciation for collaboration.

Special Thanks:
To the amazing team of six who made this short film possible—Mughunthan, Kavita Thirumoorthy, and everyone behind the scenes. Your energy, creativity, and dedication brought this project to life.`,
      youtubeUrl: "https://www.youtube.com/watch?v=hGXjlXMoMAo",
      blogLink: ""
    },
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const categories = [
    { id: "product" as const, label: "Creative Projects" },
    { id: "uxui" as const, label: "Photo Gallery" },
    { id: "web" as const, label: "Video Gallery" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-3xl opacity-20 animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-3xl opacity-15 animate-[float_6s_ease-in-out_infinite_2s]" />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-[fadeInUp_0.8s_ease-out]">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl mb-6 text-slate-900 dark:text-white">
            My <span className="font-bold">Work</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to discuss a new project, seek advice, or collaborate, I'm always excited to connect and explore new possibilities.
          </p>

          {/* Category Filter Buttons - Redesigned */}
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
                
                {/* Animated underline for active state */}
                {activeCategory === cat.id && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-white dark:bg-indigo-400 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Masonry Grid */}
        <div className="mb-20 animate-[fadeInUp_1s_ease-out]">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => {
                  if (project.externalLink) {
                    window.open(project.externalLink, '_blank');
                  } else {
                    setSelectedProject(project);
                  }
                }}
              >
                <div className="rounded-xl overflow-hidden bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all hover:shadow-xl">
                  <div className={`overflow-hidden relative ${project.height === "tall" ? "h-96" : "h-64"}`}>
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-600 to-indigo-700 dark:from-indigo-700 dark:to-indigo-800">
                        <span className="text-6xl md:text-7xl font-bold text-white">Coffee</span>
                      </div>
                    )}
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-xl mb-1">{project.title}</h3>
                        <p className="text-sm text-white/80">
                          {project.externalLink ? 'Click to open document' : 'Click to view details'}
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

      {/* Modal/Popup for Project Details */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-[slideUp_0.3s_ease-out] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="sticky top-4 left-full ml-4 z-10 p-3 bg-white/90 dark:bg-slate-800/90 rounded-full hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-lg"
            >
              <X className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </button>

            {/* Video Player for Video Gallery OR Image for other categories */}
            {selectedProject.category === "web" && selectedProject.youtubeUrl ? (
              <div className="w-full rounded-t-2xl overflow-hidden bg-black aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedProject.youtubeUrl.split('v=')[1]}`}
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

            {/* Content */}
            <div className="p-8">
              <h2 className="text-3xl mb-4 text-slate-900 dark:text-white">
                {selectedProject.title}
              </h2>
              
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 rounded-full text-sm">
                  {categories.find(c => c.id === selectedProject.category)?.label}
                </span>
              </div>

              <div className="text-base text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line space-y-4">
                {selectedProject.description}
              </div>

              {/* Blog Link for Video Gallery (if available) */}
              {selectedProject.category === "web" && selectedProject.blogLink && (
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

              {/* External Link for Creative Projects (if available) */}
              {selectedProject.category === "product" && selectedProject.externalLink && (
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
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>
    </div>
  );
}