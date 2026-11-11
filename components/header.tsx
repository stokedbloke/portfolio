"use client"

import { useEffect, useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

const links = [
  { id: "portfolio", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
]

export function Header() {
  const [active, setActive] = useState("")

  // Highlight the section currently in view (homepage only).
  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[]
    if (!sections.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-3">
        <a href="/" className="font-heading text-lg font-extrabold tracking-tight text-gradient">
          Neil Sethi
        </a>
        <div className="flex items-center gap-4">
          <nav aria-label="Main">
            <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`/#${l.id}`}
                    aria-current={active === l.id ? "true" : undefined}
                    className={`inline-block py-2 transition ${
                      active === l.id ? "font-semibold text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
