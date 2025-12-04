import { Sparkles, Briefcase, GraduationCap, MapPin, Rocket, Heart, Code, Palette, Users } from "lucide-react";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-3xl opacity-20 animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-3xl opacity-15 animate-[float_6s_ease-in-out_infinite_2s]" />

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 py-32 relative z-10">
        
        {/* Blog Header */}
        <article className="animate-[fadeInUp_0.8s_ease-out]">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl mb-6 leading-tight text-slate-900 dark:text-white">
              I'm an engineer turned designer, blending tech skills with creative thinking
            </h1>

            <div className="h-px bg-gradient-to-r from-transparent via-indigo-300 dark:via-indigo-700 to-transparent mb-8" />
          </div>

          {/* Blog Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            
            {/* Introduction */}
            <section>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                My journey into design wasn't a straight path, but rather a natural evolution shaped by curiosity, 
                technical challenges, and a growing realization that the best technology is the kind that feels human.
              </p>
            </section>

            {/* Origins */}
            <section>
              <h2 className="text-2xl mb-4 text-slate-900 dark:text-white">Where It All Began</h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Growing up in a defence family in Pune, India, I learned early on the importance of discipline, 
                structure, and problem-solving. These values became the foundation of my approach to both engineering 
                and design. I pursued a Bachelor's degree in Electronics and Telecommunication Engineering from 2017 
                to 2021, diving deep into the technical world of circuits, systems, and signals.
              </p>
            </section>

            {/* Technical Career */}
            <section>
              <h2 className="text-2xl mb-4 text-slate-900 dark:text-white">The Technical Years</h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                After graduation, I joined Uniphore as a Technical Solutions Engineer, where I spent over three years 
                deploying AI-powered solutions for Fortune 500 companies. I worked with Python, SQL, and enterprise 
                technologies, solving complex technical problems and implementing cutting-edge AI systems.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                But something interesting happened during this time. While I was troubleshooting technical issues, I 
                found myself increasingly drawn to understanding why users struggled with certain interfaces. I started 
                asking different questions: not just "How can we fix this bug?" but "Why is this confusing in the first 
                place?" That curiosity marked the beginning of my transition into UX design.
              </p>
            </section>

            {/* The Realization */}
            <section>
              <div className="bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/30 dark:to-slate-900 rounded-xl p-6 border-l-4 border-indigo-600 dark:border-indigo-400 my-8">
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  The best technology isn't the most complex—it's the most human. This realization changed everything 
                  for me and sparked my transition from building technology to designing experiences.
                </p>
              </div>
            </section>

            {/* Current Journey */}
            <section>
              <h2 className="text-2xl mb-4 text-slate-900 dark:text-white">Where I Am Now</h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                In 2025, I took a leap and moved to Ireland to pursue a Master's degree in Interaction and Experience 
                Design at the University of Limerick. Here, I'm exploring AR/VR technologies, accessibility, emotional 
                design, and the future of human-computer interaction.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                My goal is to bridge the gap between technical feasibility and human needs. My engineering background 
                helps me understand what's possible, while my design education teaches me what's meaningful. Together, 
                they allow me to create digital experiences that are both powerful and intuitive.
              </p>
            </section>

            {/* What Drives Me */}
            <section>
              <h2 className="text-2xl mb-4 text-slate-900 dark:text-white">What Drives Me</h2>
              
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border-2 border-slate-200 dark:border-slate-800">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-950 rounded-lg w-fit mb-3">
                    <Palette className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-lg mb-2 text-slate-900 dark:text-white">Human-Centered Design</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Putting users first in every decision
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border-2 border-slate-200 dark:border-slate-800">
                  <div className="p-3 bg-purple-100 dark:bg-purple-950 rounded-lg w-fit mb-3">
                    <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg mb-2 text-slate-900 dark:text-white">Technical Foundation</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Understanding constraints and possibilities
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border-2 border-slate-200 dark:border-slate-800">
                  <div className="p-3 bg-blue-100 dark:bg-blue-950 rounded-lg w-fit mb-3">
                    <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg mb-2 text-slate-900 dark:text-white">Collaboration</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Best ideas emerge from teamwork
                  </p>
                </div>
              </div>
            </section>

            {/* Design Philosophy */}
            <section>
              <h2 className="text-2xl mb-4 text-slate-900 dark:text-white">My Design Philosophy</h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                I believe great design is invisible. It should feel so natural that users don't even think about it—they 
                just experience joy, efficiency, and delight. My approach combines systems thinking from my engineering 
                days with empathy and creativity from my design education. The result is experiences that work seamlessly 
                because they're built on a deep understanding of both technology and human behavior.
              </p>
            </section>

            {/* Closing */}
            <section className="mt-12 bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 rounded-xl p-8 text-white">
              <div className="max-w-2xl mx-auto text-center">
                <Heart className="w-10 h-10 mx-auto mb-4" />
                <p className="text-lg leading-relaxed">
                  I'm always excited to discuss design, technology, and innovative solutions. If you're looking for 
                  a UX designer with a strong technical foundation and a passion for creating meaningful experiences, 
                  let's connect.
                </p>
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