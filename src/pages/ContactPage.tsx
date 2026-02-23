import { Linkedin } from "lucide-react";
import { useState } from "react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-3xl opacity-20 animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-indigo-200 dark:bg-indigo-900 rounded-full blur-3xl opacity-15 animate-[float_6s_ease-in-out_infinite_2s]" />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-32 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-[fadeInUp_0.8s_ease-out]">
          {/* Small tagline */}
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
            Crafting Experiences That Matter
          </p>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl mb-8 text-slate-900 dark:text-white">
            Get in <span className="font-bold">Touch</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to discuss a new project, seek advice, or collaborate, I'm always excited to connect and explore new possibilities.
          </p>

          {/* Contact Me Button */}
          <a
            href="https://linkedin.com/in/sindhu21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-800 rounded-full hover:border-indigo-400 dark:hover:border-indigo-600 transition-all hover:shadow-lg"
          >
            <Linkedin className="w-5 h-5" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Divider with "Or" */}
        <div className="flex items-center gap-4 mb-16 animate-[fadeInUp_1s_ease-out]">
          <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
          <span className="text-slate-500 dark:text-slate-400">Or</span>
          <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
        </div>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto animate-[fadeInUp_1.2s_ease-out]">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-10 border-2 border-slate-100 dark:border-slate-800 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-500 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  placeholder="Ribal Shamseddine"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-500 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  placeholder="ribal.uxil0@gmail.com"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-500 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  placeholder="Design discussion"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 dark:focus:border-indigo-500 outline-none transition-all resize-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  placeholder="Enter a description..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white rounded-xl transition-all hover:shadow-lg hover:scale-105 duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
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