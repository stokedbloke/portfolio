"use client"

import type React from "react"

import { useState, forwardRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Send, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const ContactSection = forwardRef<HTMLElement>((props, ref) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const isInView = useInView(ref as React.RefObject<HTMLElement>, { once: true, amount: 0.3 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log(formState)
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <section ref={ref} id="contact" className="py-24 md:py-32 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
      <div className="absolute inset-0 bg-noise opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Let's connect and discuss how I can help transform your digital health initiatives
              </p>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center gap-4"
                >
                  <div className="bg-blue-500/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a
                      href="mailto:hit.neil.up@gmail.com"
                      className="text-lg font-medium text-white hover:text-blue-400 transition-colors"
                    >
                      hit.neil.up@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center gap-4"
                >
                  <div className="bg-violet-500/10 p-3 rounded-full">
                    <Linkedin className="h-6 w-6 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/sethineil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-white hover:text-violet-400 transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 shadow-xl"
            >
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <Send className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300 mb-6">Thank you for reaching out. I'll get back to you soon.</p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="rounded-full bg-gray-800 hover:bg-gray-700 text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="bg-gray-800/50 border-gray-700 focus:border-blue-500 text-white"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="bg-gray-800/50 border-gray-700 focus:border-blue-500 text-white"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      className="bg-gray-800/50 border-gray-700 focus:border-blue-500 text-white min-h-[120px]"
                      placeholder="How can we build together?"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white border-0 relative overflow-hidden group"
                  >
                    <span className="flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message{" "}
                          <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </span>
                    <span className="absolute inset-0 translate-y-[105%] bg-white/10 transition-transform duration-300 group-hover:translate-y-0" />
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

ContactSection.displayName = "ContactSection"
