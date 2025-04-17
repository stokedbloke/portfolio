"use client"

import { useRef } from "react"
// Add the TrendingUp import
import { BarChart, Layers, Megaphone, TrendingUp, Users } from "lucide-react"
import { motion, useInView } from "framer-motion"

interface ExpertiseItemProps {
  expertise: {
    title: string
    description: string
    icon: string
    color: string
  }
  index: number
}

export function ExpertiseItem({ expertise, index }: ExpertiseItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "layers":
        return <Layers className="h-6 w-6" />
      case "users":
        return <Users className="h-6 w-6" />
      case "bar-chart":
        return <BarChart className="h-6 w-6" />
      case "megaphone":
        return <Megaphone className="h-6 w-6" />
      case "trending-up":
        return <TrendingUp className="h-6 w-6" />
      default:
        return <Layers className="h-6 w-6" />
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div className={`${expertise.color} p-3 rounded-xl text-white shadow-lg`}>{getIcon(expertise.icon)}</div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-white">{expertise.title}</h3>
          <p className="text-gray-300">{expertise.description}</p>
        </div>
      </div>
    </motion.div>
  )
}
