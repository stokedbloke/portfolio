"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    category: string
    image: string
    color: string
    stats: Array<{ label: string; value: string }>
  }
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl h-[400px] transform transition-all duration-500 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      <div className="relative h-full w-full overflow-hidden">
        {/* Replace with actual project images when available */}
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent opacity-90" />
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <span className="text-sm font-medium text-blue-400 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
          {project.category}
        </span>
        <h3 className="text-xl font-bold mb-2 text-white transform transition-transform duration-300 group-hover:-translate-y-1">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-2 transform transition-transform duration-300 group-hover:-translate-y-1">
          {project.description}
        </p>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            height: isHovered ? "auto" : 0,
            marginBottom: isHovered ? 16 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-3 gap-2 overflow-hidden"
        >
          {project.stats.map((stat, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center">
              <p className="text-white font-bold text-lg">{stat.value}</p>
              <p className="text-gray-300 text-xs">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href={`/case-studies/${project.id}`}
            className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group/link"
          >
            View Case Study{" "}
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
