"use client"

import { useEffect, useRef } from "react"

// Looping painted portrait. Shows the still poster when the visitor prefers reduced motion.
export function PortraitVideo() {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    v.play().catch(() => {})
  }, [])

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="metadata"
      poster="/images/neil-portrait.jpg"
      width={480}
      height={600}
      aria-label="A painted-style portrait of Neil Sethi, seated outdoors"
      className="aspect-[4/5] w-full rounded-2xl border object-cover"
    >
      <source src="/images/neil-portrait.mp4" type="video/mp4" />
    </video>
  )
}
