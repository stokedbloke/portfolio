import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12 bg-gray-950 relative">
      <div className="absolute inset-0 bg-noise opacity-20" />
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link
              href="/"
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400"
            >
              Neil Sethi
            </Link>
            <p className="text-gray-400 text-sm">Digital Health Product Visionary</p>
          </div>

          <div className="flex gap-6">
            <Link
              href="https://linkedin.com/in/sethineil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/stokedbloke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com/stokedbloke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:hit.neil.up@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Neil Sethi. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
