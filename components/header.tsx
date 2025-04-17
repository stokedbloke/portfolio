"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { scrollY } = useScroll()

  const headerBg = useTransform(scrollY, [0, 100], ["rgba(3, 7, 18, 0)", "rgba(3, 7, 18, 0.8)"])
  const headerBorder = useTransform(scrollY, [0, 100], ["rgba(31, 41, 55, 0)", "rgba(31, 41, 55, 0.5)"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "portfolio", "expertise", "testimonials", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Define navigation items once to ensure consistency
  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio", id: "portfolio-link" },
    { href: "#expertise", label: "Expertise" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact", id: "contact-link" },
  ]

  return (
    <motion.header
      style={{
        backgroundColor: headerBg,
        borderColor: headerBorder,
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300"
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <a
          href="#hero"
          className="flex items-center gap-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400"
        >
          Neil Sethi
        </a>
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              id={item.id}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.href.substring(1) ? "text-blue-400" : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-md"
        >
          <nav className="container flex flex-col py-8 px-4 space-y-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                id={`mobile-${item.id || ""}`}
                className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
