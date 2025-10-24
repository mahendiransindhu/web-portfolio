import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    
    setTimeout(() => {
      toast.success("Thanks! I'll get back to you soon 😊");
      setFormData({ name: "", email: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-24 px-6 pb-16">
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="text-4xl">💬</div>
          <h1 className="text-3xl md:text-4xl">
            Let's <span className="text-indigo-600 dark:text-indigo-400">Talk</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Got a project or just want to chat? Drop me a message!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Form */}
          <div className="space-y-4">
            <h2 className="text-lg">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs mb-1.5 text-slate-600 dark:text-slate-400">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 outline-none transition-colors text-sm"
                  required
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-xs mb-1.5 text-slate-600 dark:text-slate-400">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 outline-none transition-colors text-sm"
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-xs mb-1.5 text-slate-600 dark:text-slate-400">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-indigo-500 outline-none transition-colors resize-none text-sm"
                  required
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 text-sm"
              >
                <Send className="w-4 h-4" />
                {sending ? "Sending..." : "Send Message"}
              </button>

              <p className="text-xs text-center text-slate-500">
                Response within 24 hours ⚡
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-lg">Contact Info</h2>
            
            {/* Email */}
            <a
              href="mailto:sindhumd215@gmail.com"
              className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-600 dark:bg-indigo-700 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-0.5">Email</div>
                <div className="text-sm">sindhumd215@gmail.com</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/sindhu21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-600 dark:bg-indigo-700 flex items-center justify-center flex-shrink-0">
                <Linkedin className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-0.5">LinkedIn</div>
                <div className="text-sm">Connect with me</div>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800">
              <div className="w-10 h-10 rounded-lg bg-indigo-600 dark:bg-indigo-700 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs text-indigo-600 dark:text-indigo-400 mb-0.5">Location</div>
                <div className="text-sm">Limerick, Ireland 🇮🇪</div>
              </div>
            </div>

            {/* Availability */}
            <div className="p-5 rounded-lg bg-indigo-600 dark:bg-indigo-700 text-white">
              <div className="text-2xl mb-2">✨</div>
              <h3 className="text-sm mb-1">Open to Opportunities</h3>
              <p className="text-xs text-indigo-100">
                Looking for UX design roles, internships, or freelance work. Available remotely worldwide!
              </p>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="text-center pt-4">
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-xs border border-indigo-200 dark:border-indigo-800">UX Design</span>
            <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-xs border border-indigo-200 dark:border-indigo-800">AR/VR</span>
            <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-xs border border-indigo-200 dark:border-indigo-800">Research</span>
            <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-xs border border-indigo-200 dark:border-indigo-800">Collaboration</span>
          </div>
        </div>
      </div>
    </div>
  );
}
