const links = [
  { href: "/#portfolio", label: "Work" },
  { href: "/#projects", label: "Projects" },
  { href: "/#how-i-build", label: "How I build" },
  { href: "/#contact", label: "Contact" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-3">
        <a href="/" className="font-heading text-lg font-bold tracking-tight">
          Neil Sethi
        </a>
        <nav aria-label="Main">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-block py-2 text-muted-foreground hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
