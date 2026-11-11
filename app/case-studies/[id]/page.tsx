import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { caseStudies, getCase } from "@/lib/site"

export const dynamicParams = false

export function generateStaticParams() {
  return caseStudies.map((c) => ({ id: c.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const c = getCase(id)
  if (!c) return {}
  return {
    title: `${c.title} · ${c.company} | Neil Sethi`,
    description: c.summary,
    alternates: { canonical: `/case-studies/${c.id}/` },
  }
}

const textLink = "text-link"

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const c = getCase(id)
  if (!c) notFound()

  const index = caseStudies.findIndex((x) => x.id === c.id)
  const next = caseStudies[(index + 1) % caseStudies.length]

  return (
    <article className="mx-auto max-w-3xl px-5 py-10 md:py-16">
      <p>
        <Link href="/#portfolio" className={`${textLink} inline-flex items-center gap-1 text-sm`}>
          <ArrowLeft className="h-4 w-4" aria-hidden /> Selected work
        </Link>
      </p>

      <header className="mt-6">
        <p className="text-sm font-medium text-primary">
          {c.company} · {c.period}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">{c.title}</h1>
        <p className="mt-2 text-muted-foreground">{c.role}</p>
        <p className="mt-5 text-lg leading-relaxed">{c.summary}</p>
        {c.link && (
          <p className="mt-4">
            <a href={c.link.href} className={`${textLink} inline-flex items-center gap-1`}>
              {c.link.label} <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </p>
        )}
      </header>

      {c.image && (
        <Image
          src={c.image}
          alt={c.imageAlt ?? ""}
          width={1200}
          height={675}
          className="mt-8 aspect-video w-full rounded-2xl border object-cover"
        />
      )}

      <div className="mt-10 space-y-8">
        {c.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-xl font-bold text-gradient inline-block">{s.heading}</h2>
            {s.paragraphs?.map((p) => (
              <p key={p} className="mt-3 leading-relaxed">
                {p}
              </p>
            ))}
            {s.bullets && (
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {c.figures && (
          <section aria-labelledby="figures">
            <h2 id="figures" className="text-xl font-bold">
              {c.figuresLabel}
            </h2>
            <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {c.figures.map((f) => (
                <div key={f.label} className="rounded-lg border bg-card p-4">
                  <dt className="text-sm text-muted-foreground">{f.label}</dt>
                  <dd className="mt-1 text-3xl font-extrabold text-gradient">{f.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-sm text-muted-foreground">
              These are clinical results of the SpineZone program. They are not software metrics.
            </p>
          </section>
        )}

        {c.quote && (
          <figure className="rounded-lg border bg-card p-6">
            <blockquote className="leading-relaxed">“{c.quote.text}”</blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-semibold">{c.quote.name}</span>
              <br />
              <span className="text-muted-foreground">{c.quote.title}</span>
            </figcaption>
          </figure>
        )}
      </div>

      <nav aria-label="More work" className="mt-12 border-t pt-6">
        <Link href={`/case-studies/${next.id}/`} className={`${textLink} inline-flex items-center gap-1`}>
          Next: {next.title} <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </nav>
    </article>
  )
}
