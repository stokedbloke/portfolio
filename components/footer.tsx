import { site } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Neil Sethi</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-1">
          <li>
            <a className="hover:text-foreground" href={`mailto:${site.email}`}>
              Email
            </a>
          </li>
          <li>
            <a className="hover:text-foreground" href={site.linkedin}>
              LinkedIn
            </a>
          </li>
          <li>
            <a className="hover:text-foreground" href={site.github}>
              GitHub
            </a>
          </li>
          <li>
            <a className="hover:text-foreground" href={site.resume}>
              Résumé
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
