"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
  title: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  }

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="absolute -top-12 -left-12 text-blue-500/20">
        <Quote size={120} />
      </div>

      <div className="relative overflow-hidden py-12">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="px-4"
          >
            <blockquote className="text-xl md:text-2xl text-gray-300 text-center mb-8 relative z-10">
              {testimonials[current].quote}
            </blockquote>
            <div className="text-center">
              <p className="text-lg font-bold text-white">{testimonials[current].author}</p>
              <p className="text-blue-400">{testimonials[current].title}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1)
              setCurrent(index)
            }}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current ? "bg-blue-500" : "bg-gray-700 hover:bg-gray-600"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
