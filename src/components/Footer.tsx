import { Mail, Linkedin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-6 px-6 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-sm text-slate-600 dark:text-slate-400">
            <p className="flex items-center justify-center md:justify-start gap-2">
              Made with <Heart className="w-4 h-4 text-pink-500 fill-current" /> by Mahendiran
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:sindhumd215@gmail.com"
              className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/sindhu21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="text-xs text-slate-500">
            <p>Design Student @ UL 🇮🇪</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
