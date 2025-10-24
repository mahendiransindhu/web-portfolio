import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import profileImg from "figma:asset/29461e9532d1fde734804961870314804c731b86.png";

export function HomePage() {
  return (
    <div className="min-h-screen pt-20 px-6 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section - Split Layout */}
        <section className="min-h-[70vh] flex items-center py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center w-full">
            {/* Left - Content */}
            <div className="space-y-4 order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800">
                <Sparkles className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                <span className="text-xs text-indigo-700 dark:text-indigo-300">
                  MSc IXD Student @ UL
                </span>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl">
                  <span className="block mb-1">
                    {[
                      "M",
                      "a",
                      "h",
                      "e",
                      "n",
                      "d",
                      "i",
                      "r",
                      "a",
                      "n",
                    ].map((letter, i) => (
                      <span
                        key={i}
                        className="inline-block hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-110 transition-all cursor-default"
                        style={{
                          transitionDelay: `${i * 20}ms`,
                        }}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                  <span className="block">
                    {["S", "i", "n", "d", "h", "u"].map((letter, i) => (
                      <span
                        key={i}
                        className="inline-block hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-110 transition-all cursor-default"
                        style={{
                          transitionDelay: `${i * 20}ms`,
                        }}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-indigo-600 dark:text-indigo-400">
                  Engineer turned Designer
                </p>
              </div>

              <p className="text-slate-600 dark:text-slate-400">
                Making technology feel more human through thoughtful design
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link to="/projects">
                  <button className="group px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm shadow-md">
                    <span className="flex items-center gap-2">
                      View Work
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </button>
                </Link>

                <Link to="/about">
                  <button className="px-5 py-2 border border-slate-300 dark:border-slate-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors text-sm">
                    My Story
                  </button>
                </Link>
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative pb-12">
                {/* Decorative blob behind image */}
                <div className="absolute -inset-4 bg-indigo-400 rounded-3xl blur-2xl opacity-20 animate-pulse" />

                {/* Image container */}
                <div className="relative">
                  <img
                    src={profileImg}
                    alt="Mahendiran Sindhu"
                    className="w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] object-cover rounded-3xl border-4 border-white dark:border-slate-800 shadow-2xl"
                  />

                  {/* Floating badge with map - smaller */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-900 rounded-lg border border-indigo-200 dark:border-indigo-800 shadow-md overflow-hidden">
                    <div className="p-1.5 flex items-center gap-2">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38453.94896219748!2d-8.6536!3d52.6638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b5c4b79f5d4b7%3A0xa00c7a997317930!2sLimerick%2C%20Ireland!5e0!3m2!1sen!2s!4v1234567890"
                        width="80"
                        height="60"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="rounded"
                      />
                      <div className="pr-2">
                        <p className="text-xs text-indigo-600 dark:text-indigo-400">
                          Based in
                        </p>
                        <p className="text-xs text-slate-900 dark:text-white">
                          Limerick 🇮🇪
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I Do - Smaller Overlapping Cards */}
        <section className="py-12 space-y-6">
          <h2 className="text-2xl md:text-3xl text-center">
            What I{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Do</span>
          </h2>

          <div className="relative max-w-3xl mx-auto h-auto md:h-[280px]">
            {/* Card 1 - Bottom layer */}
            <div className="md:absolute md:top-0 md:left-0 md:w-64 mb-4 md:mb-0 transform md:rotate-[-2deg] hover:md:rotate-0 hover:md:scale-105 transition-all duration-300 hover:z-30">
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 shadow-lg hover:shadow-xl">
                <div className="text-3xl mb-2">🎨</div>
                <h3 className="text-lg mb-2">UX/UI Design</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Creating intuitive interfaces that users love
                </p>
              </div>
            </div>

            {/* Card 2 - Middle layer */}
            <div className="md:absolute md:top-6 md:left-1/2 md:-translate-x-1/2 md:w-64 mb-4 md:mb-0 transform md:rotate-[1deg] hover:md:rotate-0 hover:md:scale-105 transition-all duration-300 z-10 hover:z-30">
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 shadow-lg hover:shadow-xl">
                <div className="text-3xl mb-2">🥽</div>
                <h3 className="text-lg mb-2">AR/VR Design</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Exploring immersive spatial experiences
                </p>
              </div>
            </div>

            {/* Card 3 - Top layer */}
            <div className="md:absolute md:top-0 md:right-0 md:w-64 transform md:rotate-[2deg] hover:md:rotate-0 hover:md:scale-105 transition-all duration-300 z-20 hover:z-30">
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 shadow-lg hover:shadow-xl">
                <div className="text-3xl mb-2">🔍</div>
                <h3 className="text-lg mb-2">User Research</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Understanding users through research
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Bridge */}
        <section className="py-6 mt-8">
          <div className="relative overflow-hidden p-8 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-400 rounded-full blur-3xl opacity-10" />

            <div className="relative text-center space-y-3">
              <div className="text-3xl">💡</div>
              <h2 className="text-2xl md:text-3xl">
                The{" "}
                <span className="text-indigo-600 dark:text-indigo-400">
                  Bridge
                </span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                My engineering background helps me understand how things work{" "}
                <span className="text-indigo-600 dark:text-indigo-400">
                  technically
                </span>
                .
                <br />
                My design training helps me understand how things should work for{" "}
                <span className="text-indigo-600 dark:text-indigo-400">
                  humans
                </span>
                .
                <br />
                <span className="text-indigo-600 dark:text-indigo-400">
                  I bridge the gap.
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}