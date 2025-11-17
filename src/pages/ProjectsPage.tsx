import { Heart } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleLike } from "../store/favoritesSlice";

import profImg from "../assets/prof.png";
import aestheticImg from "../assets/asthetic.png";
import passionImg from "../assets/passion.png"; // Passion image

export function ProjectsPage() {
  const dispatch = useAppDispatch();
  const likedProjects = useAppSelector((state) => state.favorites.likedProjects);

  const projects = [
    {
      id: "grenade-robot",
      title: "Grenade Lobbing Robot",
      emoji: "🤖",
      category: "Academic",
      description:
        "Developed a robotic system to enhance soldier safety using Arduino, Bluetooth, and remote control. Designed 3D robot parts in Autodesk Fusion 360.",
      tags: ["Arduino", "Bluetooth", "Autodesk Fusion 360"],
    },
    {
      id: "ar-apps",
      title: "Augmented Reality Applications",
      emoji: "📱",
      category: "Academic",
      description:
        "Built ARBOOK and ARGreeting apps for interactive reading and greeting cards using Unity, Vuforia, and ARCore.",
      tags: ["Unity", "Vuforia", "ARCore", "UX Design"],
    },
    {
      id: "ai-customer-tools",
      title: "AI-Driven Customer Support Tools",
      emoji: "🧠",
      category: "Professional",
      description:
        "Worked on U-Analyze, U-Self Serve, and U-Assist at Uniphore to optimize customer support with Python, NLP, and Generative AI.",
      tags: ["Python", "NLP", "Generative AI", "SQL"],
    },
  ];

  const isLiked = (id: string) => likedProjects.includes(id);

  return (
    <div className="min-h-screen pt-24 px-6 pb-16">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="text-4xl">🎨</div>
          <h1 className="text-3xl md:text-4xl">
            My <span className="text-indigo-600 dark:text-indigo-400">Work</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400">Things I've built and learned from</p>
        </div>

        {/* Like counter */}
        {likedProjects.length > 0 && (
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950 border border-indigo-300 dark:border-indigo-700">
              <Heart className="w-4 h-4 text-indigo-600 dark:text-indigo-400 fill-current" />
              <span className="text-sm text-indigo-600 dark:text-indigo-400">
                {likedProjects.length} {likedProjects.length === 1 ? "project" : "projects"} liked
              </span>
            </div>
          </div>
        )}

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="text-4xl group-hover:scale-110 transition-transform">{project.emoji}</div>
                <button
                  onClick={() => dispatch(toggleLike(project.id))}
                  className="p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-950 transition-colors"
                >
                  <Heart
                    className={`w-4 h-4 transition-all ${
                      isLiked(project.id)
                        ? "text-indigo-600 dark:text-indigo-400 fill-current scale-110"
                        : "text-slate-400"
                    }`}
                  />
                </button>
              </div>
              <div className="inline-block px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 text-xs mb-2">{project.category}</div>
              <h3 className="text-lg mb-2">{project.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs">{tag}</span>
                ))}
              </div>
              <div className="h-0.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Portfolio Images with PDF Buttons */}
        <div className="space-y-6 text-center">
          <h2 className="text-2xl md:text-3xl">
            Personal <span className="text-indigo-600 dark:text-indigo-400">Portfolio</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Professional Headshot */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <img
                src={profImg}
                alt="Professional Headshot"
                className="w-full h-56 object-cover rounded-lg mb-2"
              />
              <a
                href="/pdfs/ProfessionalHeadshot.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold w-full inline-block py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Professional Headshot
              </a>
            </div>

            {/* Aesthetic Shot */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <img
                src={aestheticImg}
                alt="Aesthetic Shot"
                className="w-full h-56 object-cover rounded-lg mb-2"
              />
              <a
                href="/pdfs/Aesthetic_Shot.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold w-full inline-block py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Aesthetic Shot
              </a>
            </div>

            {/* Passion Shot */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <img
                src={passionImg}
                alt="Passion Shot"
                className="w-full h-56 object-cover rounded-lg mb-2"
              />
              <a
                href="/pdfs/Passion_Shot.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold w-full inline-block py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Passion Shot
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-6 rounded-xl bg-indigo-600 dark:bg-indigo-700">
          <div className="text-3xl mb-2">💼</div>
          <h3 className="text-xl text-white mb-2">Want to see more?</h3>
          <p className="text-indigo-100 text-sm mb-4">I'd love to share detailed case studies in an interview!</p>
          <a href="/contact">
            <button className="px-5 py-2 bg-white text-indigo-600 rounded-lg hover:scale-105 transition-transform text-sm">Get in Touch</button>
          </a>
        </div>
      </div>
    </div>
  );
}
