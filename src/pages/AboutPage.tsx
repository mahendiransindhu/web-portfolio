export function AboutPage() {
  const timeline = [
  {
    period: "Growing Up in Pune",
    location: "India",
    emoji: "🏠",
    title: "Defence Family Roots",
    description: "Raised in a defence family, I developed discipline, resilience, and a strong sense of service—values that shape my approach to design and problem-solving.",
  },
  {
    period: "2017-2021",
    location: "Bharati Vidyapeeth's College Of Engineering For Women, Pune",
    emoji: "⚙️",
    title: "B.E. Electronics & Telecommunication",
    description: "Built a solid technical foundation in electronics, telecommunications, and systems thinking, gaining hands-on experience with circuit design, Arduino, and 3D modeling.",
  },
  {
    period: "2021-2025",
    location: "Uniphore",
    emoji: "💼",
    title: "Technical Solutions Engineer",
    description: "Delivered AI-powered solutions for enterprise clients, optimized user experiences, and collaborated cross-functionally to bridge technical development with human-centered design.",
  },
  {
    period: "2025-Present",
    location: "University of Limerick",
    emoji: "🎓",
    title: "MSc Interaction & Experience Design",
    description: "Exploring AR/VR, accessibility, and immersive experiences, developing user-centered solutions that merge creativity and technology.",
  },
  ];

  return (
    <div className="min-h-screen pt-24 px-6 pb-16">
      <div className="max-w-3xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="text-4xl">👋</div>
          <h1 className="text-3xl md:text-4xl">
            My <span className="text-indigo-600 dark:text-indigo-400">Journey</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            “Evolving from Engineering to Human-Centered Design”
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-5">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 border-l border-slate-200 dark:border-slate-800 pb-5 last:pb-0"
            >
              {/* Dot */}
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400" />

              {/* Content */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400">
                  <span>{item.period}</span>
                  <span>•</span>
                  <span>{item.location}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="text-2xl">{item.emoji}</div>
                  <h3 className="text-lg">{item.title}</h3>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why IXD */}
        <div className="p-6 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800">
          <div className="text-center space-y-3">
            <div className="text-3xl">💭</div>
            <h2 className="text-xl md:text-2xl">Why Design?</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
              At Uniphore, I learned that impactful technology isn’t about complexity—it’s about how humans interact with it. I discovered my passion for designing experiences that truly help people, not just build technical solutions.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="space-y-5">
          <h2 className="text-xl md:text-2xl text-center">
            What I <span className="text-indigo-600 dark:text-indigo-400">Value</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors">
              <div className="text-3xl mb-2">❤️</div>
              <h3 className="text-sm mb-1">Empathy</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Design for humans
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="text-sm mb-1">Innovation</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Explore possibilities
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors">
              <div className="text-3xl mb-2">⚖️</div>
              <h3 className="text-sm mb-1">Balance</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Discipline + Creativity
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
