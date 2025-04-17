"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowRight, ChevronDown, ExternalLink, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { ExpertiseItem } from "@/components/expertise-item"
import { ContactSection } from "@/components/contact-section"
import { ParallaxText } from "@/components/parallax-text"
import { Timeline } from "@/components/timeline"
import { Cursor } from "@/components/cursor"
import { ParticleBackground } from "@/components/particle-background"
import { useMobile } from "@/hooks/use-mobile"
import { Testimonials } from "@/components/testimonials"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)
  const expertiseRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const heroOpacity = useTransform(smoothScrollYProgress, [0, 0.1], [1, 0])
  const heroScale = useTransform(smoothScrollYProgress, [0, 0.1], [1, 0.9])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      const sections = [
        { ref: heroRef, id: "hero" },
        { ref: aboutRef, id: "about" },
        { ref: portfolioRef, id: "portfolio" },
        { ref: expertiseRef, id: "expertise" },
        { ref: testimonialsRef, id: "testimonials" },
        { ref: contactRef, id: "contact" },
      ]

      for (const section of sections) {
        if (!section.ref.current) continue

        const { offsetTop, offsetHeight } = section.ref.current
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const projects = [
    {
      id: "behavioral-health",
      title: "Behavioral Health Tech Platform",
      description: "Redesigned EMR, clinical toolsets for overworked clinicians",
      category: "Healthcare Technology",
      image: "/placeholder.svg?height=600&width=800",
      color: "from-violet-500 to-purple-500",
      stats: [
        { label: "Clinician Efficiency", value: "+50%" },
        { label: "Speed Improvement", value: "80%" },
        { label: "Customer Growth", value: "3x" },
      ],
    },
    {
      id: "preventative-care",
      title: "Sleep Monitoring Business",
      description: "D2C platform with health coaching and wearable technology",
      category: "Digital Health",
      image: "/placeholder.svg?height=600&width=800",
      color: "from-blue-500 to-cyan-500",
      stats: [
        { label: "Patient Engagement", value: "90%" },
        { label: "Revenue Growth", value: "$7M" },
        { label: "Philanthropy Raised", value: "$5M" },
      ],
    },
    {
      id: "physical-therapy",
      title: "Online Back & Neck Pain Therapy",
      description: "Scalable platform reducing surgeries and opioid dependence",
      category: "Telehealth",
      image: "/placeholder.svg?height=600&width=800",
      color: "from-emerald-500 to-green-500",
      stats: [
        { label: "Surgery Reduction", value: "90%" },
        { label: "Opioid Dependence", value: "-85%" },
        { label: "Pain Reduction", value: "60%" },
      ],
    },
    {
      id: "electronic-health-record",
      title: "Custom EMR System",
      description: "Optimized care delivery through custom electronic medical records",
      category: "Health Informatics",
      image: "/placeholder.svg?height=600&width=800",
      color: "from-amber-500 to-yellow-500",
      stats: [
        { label: "User Growth", value: "10x" },
        { label: "Time to Profitability", value: "8 mo" },
        { label: "Clinic Expansion", value: "2→6" },
      ],
    },
    {
      id: "patient-relationship",
      title: "Patient CRM Optimization",
      description: "Customized scheduling and patient relationship management",
      category: "Healthcare Operations",
      image: "/placeholder.svg?height=600&width=800",
      color: "from-red-500 to-orange-500",
      stats: [
        { label: "Revenue Growth", value: "2x" },
        { label: "Major Payor Partnerships", value: "3" },
        { label: "Denied Claims", value: "-30%" },
      ],
    },
    {
      id: "consumer-wellness",
      title: "WellnessFX Growth Strategy",
      description: "Data-driven segmentation leading to successful acquisition",
      category: "Consumer Health",
      image: "/placeholder.svg?height=600&width=800",
      color: "from-pink-500 to-rose-500",
      stats: [
        { label: "User Growth", value: "10x" },
        { label: "Acquisition", value: "Thorne" },
        { label: "Time Period", value: "2012-14" },
      ],
    },
  ]

  const expertise = [
    {
      title: "Product Management",
      description:
        "Product lifecycle management, roadmap prioritization, technical feasibility assessments, sprint planning, and engineering collaboration",
      icon: "layers",
      color: "bg-blue-500",
    },
    {
      title: "Strategy and Growth",
      description:
        "Strategic planning, go-to-market strategy, business model innovation, market sizing, and revenue growth strategies",
      icon: "trending-up",
      color: "bg-purple-500",
    },
    {
      title: "Data and Analytics",
      description:
        "KPI definition, data visualization, experimentation design, behavioral data analysis, and customer segmentation",
      icon: "bar-chart",
      color: "bg-green-500",
    },
    {
      title: "Leadership",
      description:
        "Cross-functional alignment, team management, remote team leadership, stakeholder communication, and program management",
      icon: "users",
      color: "bg-amber-500",
    },
  ]

  const timelineEvents = [
    {
      year: "2024-Present",
      title: "Sethi Solutions",
      role: "Founder - Behavioral Health Tech Startup",
      description:
        "Designed and deployed platform for analyzing & visualizing emotional sentiment from user journal data over time",
    },
    {
      year: "2022-2024",
      title: "Xolv Technology Solutions",
      role: "Director of Product Management",
      description:
        "Tripled customer base, safeguarded $20M in monthly revenue, and managed 13 engineers globally across four development teams",
    },
    {
      year: "2019-2021",
      title: "Sutter Health, Design & Innovation",
      role: "Director of Business Design, Product Management",
      description: "Drove $7M in projected revenue growth by building a scalable D2C Sleep Monitoring business",
    },
    {
      year: "2015-2018",
      title: "SpineZone Medical Fitness",
      role: "Co-Founder, Head of Product Management",
      description:
        "Scaled online back and neck pain therapy business to profitability within 8 months, achieving 10x user growth",
    },
    {
      year: "2011-2014",
      title: "Sethi Solutions",
      role: "Product Management, Marketing and Analytics consulting",
      description:
        "Achieved 10x user growth at WellnessFX through detailed segmentation and data-driven product positioning",
    },
    {
      year: "2004-2009",
      title: "Qualcomm Inc.",
      role: "Software Engineer, Product Manager",
      description:
        "Directed $15M business commercializing 20+ prototype phones during the advent of 3G wireless technologies",
    },
  ]

  const testimonials = [
    {
      quote:
        "Neil has been instrumental in the development of integrated web and mobile software solutions for treatment planning and clinical documentation at Easterseals Northern California. He improved our data collection app and introduced an electronic session sign-off feature, which contributed to our efforts in making clinics paperless. Meetings with Neil were productive, collaborative, and warm. I admired his ability to take input and create it on an electronic platform. Neil's technical expertise, coupled with his ability to lead and innovate, makes him an invaluable asset to any team.",
      author: "Kalina Hatzell, MBA, BCBA | Easterseals Northern California",
      title: "Senior Director Behavioral Health | Board Certified Behavior Analyst (BCBA)",
    },

    {
      quote:
        "Neil has a unique ability to translate complex healthcare challenges into elegant digital solutions. His work on our EMR system and therapy platform led to dramatic reductions in surgeries and opioid dependence.",
      author: "Rebeca Nesicolaci, MA. BCBA | Catalight Care Services",
      title: "Director of Behavioral Services and Programs",
    },
    {
      quote:
        "I worked with Neil for 4 years at SpineZone. I watched as he navigated very well the difficult early stages of a startup: team building, product design, business formation, messaging, website design. Neil was a team player from day one, great attitude, committed, did not complain, worked on anything handed to him and was always willing to take on more responsibility. He was instrumental in bringing the company from two guys in a garage to a profitable business with robust customer base, value proposition and product. ",
      author: "Mehdi Maghsoodnia",
      title: "CEO @ 1health.io, Managinging Partner @ Combustion Ventures, Board Chair @ SpineZone",
    },
    {
      quote:
        "I worked closely with Neil for over 3 years and it was a very rewarding work relationship. He has always been spot-on at using the best available technological resources to make the most of every process. He is highly motivated and results oriented, qualities that have proven to be very valuable for the product growth of the company.",
      author: "Jonathan Tapicer",
      title: "CTO @ Teamcubation, CTO @ SpineZone",
    },
    {
      quote:
        "I had the pleasure of having Neil a boss at SpineZone. Neil always demonstrated professionalism, knowledge and problem-solving attributes, with a kind willingness to offer guidance and assistance whenever needed. His creativity and innovation paired with his intelligence and technological abilities will be an unprecedented asset to any organization. ",
      author: "Tiffany Lewis",
      title: "COO @ Allkind, Client Relations & Marketing Manager @ SpineZone",
    },
        {
      quote:
        "I wanted to write an unqualified recommendation for Neil Sethi. I found Neil's work to not only serve the purpose of providing insight but that it went further and proscriptively provided guided direction. Neil is a creative thinker who can make numbers tell a story.",
      author: "James R Kean, MBA",
      title: "CEO @ Molecular You, CEO @ WellnessFX",
    },
    {
      quote:
        "Neil's background in engineering, product management, and marketing enabled him to work effectively across a variety of teams to change our email marketing infrastructure. He kept projects moving despite roadblocks and quickly stepped up to help with troubleshooting when other email issues arose. Neil also thoroughly documented all of the changes he made to our infrastructure and provided detailed invoices that helped me track our progress.",
      author: "Sarah K.Metcalf",
      title: "Director of Lifecycle Marketing @ Hotjar",
    },
    {
      quote:
        "Neil is an extremely versatile, tech-savvy employee w/ a strong understanding of the health tech space. His ability to wear many hats and juggle multiple projects at once makes him the perfect fit for any start-up planning a smashing event, building a webpage, analyzing data or implementing turnkey marketing campaigns. I enjoy working with Neil and would recommend his work to any partner, prospective employer or vendor.",
      author: "Natalie Cann",
      title: "Senior Director, Strategic Marketing @ Keck Medicine of USC",
    },

  ]

  return (
    <>
      {!isMobile && <Cursor />}
      <ScrollProgress />
      <div className="relative" ref={containerRef}>
        {/* Hero Section */}
        <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden" id="hero">
          <ParticleBackground />
          <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black" />
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
            <div className="absolute inset-0 bg-noise opacity-20" />
          </motion.div>

          <div className="container relative z-10 px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, type: "spring" }}
                className="mb-6 relative w-32 h-32 mx-auto"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/30 to-violet-600/30 blur-2xl" />
                <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-blue-500/20">
                  {/* Replace with your actual headshot from the deck */}
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Neil Sethi"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
              >
                Neil Sethi
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  A digital health product visionary transforming healthcare through technology and human-centered
                  design
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white border-0 group relative overflow-hidden"
                  >
                    <a href="#portfolio" className="flex items-center w-full h-full justify-center">
                      View My Work{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                    <span className="absolute inset-0 translate-y-[105%] bg-white/10 transition-transform duration-300 group-hover:translate-y-0" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-gray-700 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300 group"
                  >
                    <a href="#contact" className="flex items-center w-full h-full justify-center">
                      <FileText className="mr-2 h-4 w-4" /> Contact Me
                    </a>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 0.7 : 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          >
            <a
              href="#about"
              className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
              aria-label="Scroll to About section"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ChevronDown className="h-6 w-6 animate-bounce" />
            </a>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-950 to-transparent z-10" />
        </section>

        {/* Marquee Section */}
        <section className="py-12 bg-gray-950 overflow-hidden border-t border-b border-gray-800">
          <ParallaxText baseVelocity={-3}>
            DIGITAL HEALTH • PRODUCT LEADERSHIP • HEALTHCARE INNOVATION • USER-CENTERED DESIGN •
          </ParallaxText>
          <ParallaxText baseVelocity={3}>
            DATA ANALYTICS • BEHAVIORAL HEALTH • PREVENTATIVE CARE • TELEHEALTH •
          </ParallaxText>
        </section>

        {/* About Section */}
        <section
          ref={aboutRef}
          id="about"
          className="py-24 md:py-32 bg-gradient-to-b from-gray-950 to-gray-900 relative"
        >
          <div className="absolute inset-0 bg-noise opacity-20" />
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative aspect-square max-w-md mx-auto md:mx-0">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/20 to-violet-600/20 blur-3xl" />
                <div className="relative h-full w-full rounded-3xl overflow-hidden border border-gray-800">
                  {/* Replace with a professional photo from your deck */}
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Neil Sethi"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-4 shadow-xl"
                >
                  <p className="text-white font-bold text-xl">10+ Years</p>
                  <p className="text-white/80 text-sm">Digital Health Experience</p>
                </motion.div>
              </div>
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
                    Who is Neil?
                  </h2>
                  <div className="space-y-6 text-gray-300">
                    <p className="text-xl leading-relaxed">
                      I am a digital health product visionary with a passion for transforming healthcare through
                      technology and human-centered design.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700"
                      >
                        <p className="font-medium">An analytical storyteller</p>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700"
                      >
                        <p className="font-medium">A computer scientist</p>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700"
                      >
                        <p className="font-medium">A culture influencer</p>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700"
                      >
                        <p className="font-medium">An empathetic leader</p>
                      </motion.div>
                    </div>
                    <p className="leading-relaxed">
                      With over a decade of experience in digital health, I've led the development of innovative
                      products that have transformed patient care, reduced costs, and improved outcomes across multiple
                      healthcare domains.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-24"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">My Journey</h3>
              <Timeline events={timelineEvents} />
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section ref={portfolioRef} id="portfolio" className="py-24 md:py-32 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-20" />
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-950 to-transparent" />
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
                Product Portfolio
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                A showcase of transformative digital health products I've led from concept to successful implementation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section
          ref={expertiseRef}
          id="expertise"
          className="py-24 md:py-32 bg-gradient-to-b from-gray-900 to-gray-950 relative"
        >
          <div className="absolute inset-0 bg-noise opacity-20" />
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
                My Expertise
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Core competencies that drive my approach to product leadership and innovation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {expertise.map((item, index) => (
                <ExpertiseItem key={index} expertise={item} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-20 text-center"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                rel="noreferrer"
              >
                <span className="text-lg font-medium">View Full Resume</span>
                <ExternalLink className="h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          ref={testimonialsRef}
          id="testimonials"
          className="py-24 md:py-32 bg-gray-950 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-noise opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-950" />
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
                What People Say
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Testimonials from colleagues and clients who have experienced the impact of my work
              </p>
            </motion.div>

            <Testimonials testimonials={testimonials} />
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection ref={contactRef} />

        {/* Side Navigation */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
          <div className="flex flex-col gap-6">
            {[
              { id: "hero", label: "Home" },
              { id: "about", label: "About" },
              { id: "portfolio", label: "Portfolio" },
              { id: "expertise", label: "Expertise" },
              { id: "testimonials", label: "Testimonials" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <a key={item.id} href={`#${item.id}`} className="group flex items-center gap-2" aria-label={item.label}>
                <span
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-blue-500 scale-125"
                      : "bg-gray-600 group-hover:bg-gray-400 scale-100"
                  }`}
                />
                <span
                  className={`text-sm transition-all duration-300 ${
                    activeSection === item.id
                      ? "opacity-100 translate-x-0 text-blue-400"
                      : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-gray-400"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

function X(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
