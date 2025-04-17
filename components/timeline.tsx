"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface TimelineEvent {
  year: string
  title: string
  role: string
  description: string
}

interface TimelineProps {
  events: TimelineEvent[]
}

export function Timeline({ events }: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref} className="relative">
      {/* Vertical line */}
      <div className="absolute left-[7px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 to-violet-500" />

      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            <div className="flex-1 md:w-1/2 pb-8 md:pb-0">
              <div className={`md:px-8 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                <span className="text-sm font-medium text-blue-400 block mb-2">{event.year}</span>
                <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                <span className="text-violet-400 font-medium block mb-2">{event.role}</span>
                <p className="text-gray-300">{event.description}</p>
              </div>
            </div>

            {/* Circle marker */}
            <div className="absolute left-0 md:left-1/2 md:-ml-[8px] mt-1 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 border-2 border-gray-900 z-10" />

            <div className="flex-1 md:w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
