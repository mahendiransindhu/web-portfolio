import { Sparkles } from "lucide-react";

export function SkillsPage() {
  const skills = {
    usingNow: [
      {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      },
      {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
      },
      {
        name: "Sass",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
      {
        name: "Bootstrap",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
      },
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
      },
      {
        name: "Figma",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
      }
    ],
    learning: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      },
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
      },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
      }
    ],
    other: [
      {
        name: "English",
        logo: "https://hatscripts.github.io/circle-flags/flags/gb.svg"
      },
      {
        name: "Spanish",
        logo: "https://hatscripts.github.io/circle-flags/flags/es.svg"
      },
      {
        name: "C++",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
      },
      {
        name: "C",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-3xl opacity-20 animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-3xl opacity-15 animate-[float_6s_ease-in-out_infinite_2s]" />

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 py-32 relative z-10">
        
        {/* Page Header */}
        <article className="animate-[fadeInUp_0.8s_ease-out]">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl mb-6 leading-tight text-slate-900 dark:text-white">
              Technologies & Tools I Work With
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-indigo-300 dark:via-indigo-700 to-transparent mb-8" />
          </div>

          {/* Skills Content */}
          <div className="space-y-12">
            
            {/* Using Now Section */}
            <section>
              <h2 className="text-2xl mb-6 text-slate-900 dark:text-white tracking-wide">USING NOW:</h2>
              <div className="grid grid-cols-4 md:grid-cols-4 gap-8">
                {skills.usingNow.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className="w-16 h-16 flex items-center justify-center p-3 bg-white dark:bg-slate-900 rounded-xl border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all hover:shadow-lg hover:-translate-y-1">
                      <img 
                        src={skill.logo} 
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs text-center text-slate-700 dark:text-slate-300 tracking-wide">
                      {skill.name.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Learning Section */}
            <section>
              <h2 className="text-2xl mb-6 text-slate-900 dark:text-white tracking-wide">LEARNING:</h2>
              <div className="grid grid-cols-4 md:grid-cols-4 gap-8">
                {skills.learning.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className="w-16 h-16 flex items-center justify-center p-3 bg-white dark:bg-slate-900 rounded-xl border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all hover:shadow-lg hover:-translate-y-1">
                      <img 
                        src={skill.logo} 
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs text-center text-slate-700 dark:text-slate-300 tracking-wide">
                      {skill.name.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Other Skills Section */}
            <section>
              <h2 className="text-2xl mb-6 text-slate-900 dark:text-white tracking-wide">OTHER SKILLS:</h2>
              <div className="grid grid-cols-4 md:grid-cols-4 gap-8">
                {skills.other.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className="w-16 h-16 flex items-center justify-center p-3 bg-white dark:bg-slate-900 rounded-xl border-2 border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all hover:shadow-lg hover:-translate-y-1">
                      <img 
                        src={skill.logo} 
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs text-center text-slate-700 dark:text-slate-300 tracking-wide">
                      {skill.name.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </article>
      </div>

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