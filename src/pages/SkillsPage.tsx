export function SkillsPage() {
  const skillCategories = [
  {
    title: "Programming & Development",
    emoji: "💻",
    skills: [
      "Python",
      "C#",
      "Microsoft SQL Server",
    ],
  },
  {
    title: "AI & Analytics",
    emoji: "🥽",
    skills: [
      "Generative AI",
      "NLP",
      "ASR",
      "Data Analysis",
      "Automation"
    ],
  },
  {
    title: "Design & Prototyping",
    emoji: "⚙️",
    skills: [
      "UX Design",
      " Figma",
      "Autodesk Fusion 360",
      "Prototyping",
      "User-Centered Design"
    ],
  },
  {
    title: "Tools & Collaboration",
    emoji: "🛠️",
    skills: [
      "Jira Incident Management",
      "Datadog",
      "VS Code",
      "PyCharm",
      "Docker",
      "Fusion 360"
    ],
  },

  ];

  return (
    <div className="min-h-screen pt-24 px-6 pb-16">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="text-4xl">⚡</div>
          <h1 className="text-3xl md:text-4xl">
            Skills & <span className="text-indigo-600 dark:text-indigo-400">Expertise</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Blending technical and creative skills
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl">{category.emoji}</div>
                <h2 className="text-lg">{category.title}</h2>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs border border-indigo-200 dark:border-indigo-800 hover:scale-105 transition-transform"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Unique Combo */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="p-6 rounded-xl bg-indigo-600 dark:bg-indigo-700 text-white">
            <div className="text-3xl mb-2">🧠</div>
            <h3 className="text-lg mb-2">Engineering Mind</h3>
            <p className="text-indigo-100 text-sm">
              I understand technical constraints and how systems work, which helps me design feasible solutions.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-indigo-600 dark:bg-indigo-700 text-white">
            <div className="text-3xl mb-2">💖</div>
            <h3 className="text-lg mb-2">Designer Heart</h3>
            <p className="text-indigo-100 text-sm">
              I care about users and their experiences. I design with empathy and focus on what truly matters.
            </p>
          </div>
        </div>

        {/* Learning */}
        <div className="text-center p-6 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800">
          <div className="text-3xl mb-2">🌱</div>
          <h3 className="text-xl mb-2">Always Learning</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Currently exploring accessibility, emotional design, and new interaction patterns through my MSc program.
          </p>
        </div>
      </div>
    </div>
  );
}

