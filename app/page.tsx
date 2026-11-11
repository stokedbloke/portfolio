import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { earlierIds, experience, featuredIds, getCase, projects, quotes, site, traits } from "@/lib/site"

const h2 = "text-3xl font-extrabold tracking-tight md:text-4xl"
const section = "mx-auto max-w-6xl px-5 py-16 md:py-24"

export default function Home() {
  const featured = featuredIds.map((id) => getCase(id)!)
  const earlier = earlierIds.map((id) => getCase(id)!)

  return (
    <>
      {/* Hero */}
      <section className="hero-backdrop relative overflow-hidden border-b">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 pb-16 pt-14 md:flex-row md:items-center md:gap-14 md:pb-24 md:pt-24">
          <div className="order-2 md:order-1 md:flex-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Healthcare product lead</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
              I build healthcare software for <span className="text-gradient">clinicians and patients.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I led product for ABA treatment planning and reporting at Xolv. I co-founded SpineZone and took its back
              and neck program online. At 1health I build developer tools for healthcare APIs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/#portfolio" className="btn-primary group">
                See selected work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </a>
              <a href={site.resume} className="btn-secondary">
                Résumé
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative h-32 w-32 md:h-56 md:w-56">
              <div
                className="absolute -inset-3 rounded-full bg-gradient-to-tr from-blue-600 to-violet-600 opacity-40 blur-2xl"
                aria-hidden
              />
              <Image
                src={site.headshot}
                alt="Portrait of Neil Sethi"
                width={224}
                height={224}
                priority
                className="relative h-full w-full rounded-full border-2 border-primary/40 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section id="portfolio">
        <div className={section}>
          <Reveal>
            <h2 className={h2}>
              Selected <span className="text-gradient">work</span>
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              Products I led, from the clinic floor to the developer portal.
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {featured.map((c) => (
              <li key={c.id}>
                <Reveal className="h-full">
                  <Link
                    href={`/case-studies/${c.id}/`}
                    className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border bg-card"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                      {c.image ? (
                        <Image
                          src={c.image}
                          alt={c.imageAlt ?? ""}
                          fill
                          sizes="(max-width: 768px) 100vw, 560px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div
                          className="flex h-full w-full flex-col justify-center gap-2 bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800 p-8 font-mono text-sm text-white/90"
                          aria-hidden
                        >
                          <span className="text-white/60">$ agent, which API do I need?</span>
                          <span>→ dev.1health.io</span>
                          <span>→ MCP Explorer</span>
                          <span>→ Patient Vault · lab ordering</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" aria-hidden />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-sm font-medium text-primary">
                        {c.company} · {c.period}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold">{c.title}</h3>
                      <p className="mt-3 leading-relaxed text-muted-foreground">{c.summary}</p>
                      {c.evidence && (
                        <p className="mt-4 rounded-lg bg-muted px-4 py-3 font-semibold">{c.evidence}</p>
                      )}
                      <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-primary">
                        Read the case study
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            Earlier work:{" "}
            {earlier.map((c, i) => (
              <span key={c.id}>
                <Link href={`/case-studies/${c.id}/`} className="text-link">
                  {c.title}
                </Link>
                {i < earlier.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Independent projects */}
      <section id="projects" className="border-y bg-card/50">
        <div className={section}>
          <Reveal>
            <h2 className={h2}>
              What I’m <span className="text-gradient">building</span>
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              My own products. I design them, and I build them with AI coding agents.
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <li key={p.name}>
                <Reveal className="h-full">
                  <a
                    href={p.href}
                    className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border bg-background"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-white">
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 380px"
                        className={`transition-transform duration-700 group-hover:scale-105 ${
                          p.imageFit === "contain" ? "object-contain p-6" : "object-cover object-top"
                        }`}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-xl font-bold">{p.name}</h3>
                      <p className="mt-1 font-heading text-lg font-semibold text-gradient">{p.tagline}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                      <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-primary">
                        {p.href.replace("https://", "")}
                        <ArrowUpRight
                          className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden
                        />
                        {p.note && <span className="ml-1 font-normal text-muted-foreground">({p.note})</span>}
                      </span>
                    </div>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className={section}>
          <Reveal>
            <h2 className={h2}>
              Who is <span className="text-gradient">Neil?</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-10 md:grid-cols-5">
            <Reveal className="md:col-span-3">
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  I’m a product lead and former engineer in the Bay Area. I started as a software engineer at Qualcomm.
                  For 15 years I have built products that clinicians and patients use directly, across behavioral
                  health, musculoskeletal care and preventative medicine.
                </p>
                <p className="text-muted-foreground">
                  This year I built agent-facing developer tools at 1health. Outside work I build my own products with
                  voice, audio and wearables.
                </p>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {traits.map((t) => (
                  <li
                    key={t}
                    className="rounded-xl border bg-card px-4 py-3 font-medium transition hover:border-primary/60"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="md:col-span-2">
              <ul className="divide-y rounded-2xl border bg-card px-5">
                {experience.map((e) => (
                  <li key={e.org + e.period} className="py-3">
                    <p className="font-semibold">{e.org}</p>
                    <p className="text-sm text-muted-foreground">{e.role}</p>
                    <p className="text-xs text-muted-foreground">{e.period}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">
                MBA, INSEAD · B.Math in Computer Science, University of Waterloo
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="border-y bg-card/50">
        <div className={section}>
          <Reveal>
            <h2 className={h2}>
              What colleagues <span className="text-gradient">say</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {quotes.map((q) => (
              <Reveal key={q.name} className="h-full">
                <figure className="relative h-full rounded-2xl border bg-background p-7">
                  <span className="font-heading text-6xl leading-none text-primary/40" aria-hidden>
                    “
                  </span>
                  <blockquote className="-mt-4 leading-relaxed">{q.text}</blockquote>
                  <figcaption className="mt-5 text-sm">
                    <span className="font-semibold">{q.name}</span>
                    <br />
                    <span className="text-primary">{q.title}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            More on{" "}
            <a href={`${site.linkedin}details/recommendations/`} className="text-link">
              LinkedIn
            </a>
            .
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="hero-backdrop">
        <div className={`${section} text-center`}>
          <Reveal>
            <h2 className={h2}>
              Get in <span className="text-gradient">touch</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              If you’re building for care teams or patients, I’d like to hear what you’re working on.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${site.email}`} className="btn-primary">
                {site.email}
              </a>
              <a href={site.linkedin} className="btn-secondary">
                LinkedIn
              </a>
              <a href={site.resume} className="btn-secondary">
                Résumé
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
