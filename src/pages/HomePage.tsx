import { Link } from "react-router-dom";
import { Mail, Linkedin, Github, ArrowRight, MapPin } from "lucide-react";

// ✅ Fixed import: Use standard local import instead of 'figma:asset/...'
import profileImg from "@/assets/29461e9532d1fde734804961870314804c731b86.png";

export function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 animate-[fadeInUp_0.6s_ease-out]">
              {/* Greeting */}
              <div className="space-y-2">
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  Hi! I am
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl">
                  <span className="block text-slate-900 dark:text-white">Mahendiran</span>
                  <span className="block text-indigo-600 dark:text-indigo-400">Sindhu.</span>
                </h1>
              </div>

              {/* Experience Badge */}
              <div className="flex items-center gap-4 animate-[fadeIn_1s_ease-out]">
                <div className="text-5xl text-indigo-600 dark:text-indigo-400 hover:scale-110 transition-transform duration-300">
                  3+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 uppercase leading-tight max-w-[100px]">
                  Years of Experience
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4 animate-[fadeIn_1.2s_ease-out]">
                <a 
                  href="mailto:sindhumd215@gmail.com"
                  className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-900 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/sindhu21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-900 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/mahendiran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-900 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative animate-[fadeInUp_0.8s_ease-out] lg:pb-20">
              <div className="relative flex justify-center lg:justify-end mb-6 lg:mb-0">
                <div className="relative group">
                  {/* Circle Border */}
                  <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-br from-indigo-400 to-indigo-600 p-1 group-hover:scale-105 transition-transform duration-500">
                    <div className="size-full rounded-full bg-white dark:bg-slate-950" />
                  </div>
                  
                  {/* Profile Image */}
                  <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden">
                    <img
                      src={profileImg}
                      alt="Mahendiran Sindhu"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Location Card - Desktop */}
                  <a
                    href="https://www.google.com/maps/place/Limerick,+Ireland"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:block absolute -bottom-6 -right-4 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 p-5 w-[260px] animate-[fadeIn_1.4s_ease-out] hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer z-10"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-indigo-100 dark:bg-indigo-950 rounded-lg">
                        <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                          Currently in
                        </p>
                        <p className="text-lg text-slate-900 dark:text-white">
                          Limerick, Ireland
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                          University of Limerick
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Location Card - Mobile */}
              <a
                href="https://www.google.com/maps/place/Limerick,+Ireland"
                target="_blank"
                rel="noopener noreferrer"
                className="lg:hidden block bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 p-5 max-w-[260px] mx-auto animate-[fadeIn_1.4s_ease-out] hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-950 rounded-lg">
                    <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                      Currently in
                    </p>
                    <p className="text-lg text-slate-900 dark:text-white">
                      Limerick, Ireland
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                      University of Limerick
                    </p>
                  </div>
                </div>
              </a>

              {/* Creative Designer Badge */}
              <div className="mt-8 lg:mt-24 text-center lg:text-right animate-[fadeIn_1.6s_ease-out]">
                <div className="inline-flex items-baseline gap-2 hover:gap-3 transition-all duration-300">
                  <span className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 italic font-light">
                    Creative
                  </span>
                  <span className="text-2xl md:text-3xl text-indigo-600 dark:text-indigo-400">
                    Designer.
                  </span>
                </div>
              </div>

              {/* Tagline */}
              <div className="mt-4 text-center lg:text-right animate-[fadeIn_1.8s_ease-out]">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-[280px] mx-auto lg:ml-auto lg:mr-0">
                  I design beautifully simple things, and I love what I do.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 flex flex-wrap gap-4 justify-center lg:justify-start animate-[fadeIn_2s_ease-out]">
            <Link to="/projects">
              <button className="group px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105">
                <span className="flex items-center gap-2">
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Link>

            <Link to="/contact">
              <button className="px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 hover:scale-105">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-indigo-100 dark:bg-indigo-950 rounded-full blur-3xl opacity-30 -z-10 animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-3xl opacity-20 -z-10 animate-[float_8s_ease-in-out_infinite]" />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}
