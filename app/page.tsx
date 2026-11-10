import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { earlierIds, experience, featuredIds, getCase, projects, quotes, site } from "@/lib/site"

const h2 = "text-2xl font-bold tracking-tight md:text-3xl"
const section = "mx-auto max-w-5xl px-5 py-14 md:py-20"
const primaryBtn =
  "inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
const secondaryBtn =
  "inline-flex items-center gap-2 rounded-md border border-foreground/20 bg-card px-5 py-3 text-sm font-semibold hover:border-foreground/50"
const textLink = "font-medium text-primary underline underline-offset-4 hover:no-underline"

export default function Home() {
  const featured = featuredIds.map((id) => getCase(id)!)
  const earlier = earlierIds.map((id) => getCase(id)!)

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 pb-10 pt-12 md:pb-14 md:pt-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
          <div className="order-2 md:order-1 md:flex-1">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              I build healthcare software for clinicians and patients.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I led product for ABA treatment planning and reporting at Xolv. I co-founded SpineZone and took its back
              and neck program online. At 1health I build developer tools for healthcare APIs.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/#portfolio" className={primaryBtn}>
                See selected work <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a href={site.resume} className={secondaryBtn}>
                Résumé
              </a>
            </div>
            <p className="mt-5 text-sm">
              <a href="/#how-i-build" className={textLink}>
                See a feature I built with AI agents
              </a>
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src={site.headshot}
              alt="Portrait of Neil Sethi"
              width={160}
              height={160}
              priority
              className="h-28 w-28 rounded-full object-cover md:h-40 md:w-40"
            />
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section id="portfolio" className="border-t bg-card">
        <div className={section}>
          <h2 className={h2}>Selected work</h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-2">
            {featured.map((c) => (
              <li key={c.id}>
                <Link
                  href={`/case-studies/${c.id}/`}
                  className="group flex h-full flex-col rounded-lg border bg-background p-6 hover:border-primary"
                >
                  <p className="text-sm text-muted-foreground">
                    {c.company} · {c.period}
                  </p>
                  <h3 className="mt-2 text-xl font-bold">{c.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{c.summary}</p>
                  {c.evidence && <p className="mt-4 border-l-2 border-primary pl-3 font-medium">{c.evidence}</p>}
                  <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-primary">
                    Read the case study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            Earlier work:{" "}
            {earlier.map((c, i) => (
              <span key={c.id}>
                <Link href={`/case-studies/${c.id}/`} className={textLink}>
                  {c.title}
                </Link>
                {i < earlier.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Independent projects */}
      <section id="projects" className="border-t">
        <div className={section}>
          <h2 className={h2}>What I’m building</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Independent projects. I design them, and I build them with AI coding agents.
          </p>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {projects.map((p) => (
              <li key={p.name} className="flex flex-col rounded-lg border bg-card p-5">
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                <p className="mt-auto pt-4 text-sm">
                  <a href={p.href} className={`${textLink} inline-flex items-center gap-1`}>
                    {p.href.replace("https://", "")}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>
                  {p.note && <span className="ml-2 text-muted-foreground">({p.note})</span>}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How I build */}
      <section id="how-i-build" className="border-t bg-card">
        <div className={section}>
          <h2 className={h2}>How I build</h2>
          <div className="mt-6 max-w-3xl space-y-5 leading-relaxed">
            <p>
              I write the requirements and make the product decisions. AI agents draft specs, write code and review each
              other’s work. Here is one feature built that way.
            </p>

            <h3 className="pt-2 text-xl font-bold">Adding Omi support to GiggleGauge</h3>
            <p>
              GiggleGauge first worked with one wearable. It downloaded that device’s audio once a night. Omi devices
              push audio in real time. Supporting both took four epics, from a database migration to data deletion.
            </p>

            <p>
              <strong>Decision 1: freeze the working code.</strong> All Omi work was additive. The existing pipeline had
              zero regressions.
            </p>

            <p>
              <strong>Decision 2: review every story spec before any code is written.</strong> A second agent attacks
              the spec. One review found a delete call that would have removed every user’s audio files.
            </p>
            <figure className="border-l-2 border-primary pl-4">
              <blockquote className="text-muted-foreground">
                “Critical all-users-delete bug caught and fixed — Story 4.2 discovered{" "}
                <code className="break-all rounded bg-muted px-1 text-sm">shutil.rmtree(Path("uploads/audio"))</code> which would
                have deleted every user’s files. Caught in story spec review before real-device testing.”
              </blockquote>
              <figcaption className="mt-2 text-sm text-muted-foreground">
                From the project’s Epic 4 retrospective, March 2026
              </figcaption>
            </figure>

            <p>
              <strong>Where the agents were wrong.</strong> All 183 tests passed against a mocked database. They missed
              a database constraint that the spec had left out. I found it by testing against a real database.
            </p>
            <figure className="border-l-2 border-primary pl-4">
              <blockquote className="text-muted-foreground">
                “Mocked tests are necessary but not sufficient — real DB smoke tests are the final validation.”
              </blockquote>
              <figcaption className="mt-2 text-sm text-muted-foreground">
                From the project’s Epic 1 retrospective, February 2026
              </figcaption>
            </figure>

            <p>
              <strong>Result.</strong> I wore the Omi to a dance class. When I got home, 18 laughs had been detected
              from the buffered audio. Omi support is live at{" "}
              <a href="https://gigglegauge.com" className={textLink}>
                gigglegauge.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="border-t">
        <div className={section}>
          <h2 className={h2}>What colleagues say</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {quotes.map((q) => (
              <figure key={q.name} className="rounded-lg border bg-card p-6">
                <blockquote className="leading-relaxed">“{q.text}”</blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold">{q.name}</span>
                  <br />
                  <span className="text-muted-foreground">{q.title}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Both are from{" "}
            <a href={`${site.linkedin}details/recommendations/`} className={textLink}>
              my LinkedIn recommendations
            </a>
            .
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="border-t bg-card">
        <div className={section}>
          <h2 className={h2}>Experience</h2>
          <ul className="mt-6 divide-y">
            {experience.map((e) => (
              <li key={e.org + e.period} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-4">
                <span className="font-semibold sm:w-72 sm:shrink-0">{e.org}</span>
                <span className="text-muted-foreground sm:flex-1">{e.role}</span>
                <span className="text-sm text-muted-foreground sm:text-right">{e.period}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            MBA, INSEAD · Bachelor of Mathematics in Computer Science, University of Waterloo
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t">
        <div className={section}>
          <h2 className={h2}>Contact</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">
            If you’re building for care teams or patients, I’d like to hear what you’re working on.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className={primaryBtn}>
              {site.email}
            </a>
            <a href={site.linkedin} className={secondaryBtn}>
              LinkedIn
            </a>
            <a href={site.resume} className={secondaryBtn}>
              Résumé
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
