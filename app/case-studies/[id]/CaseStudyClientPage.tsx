"use client"

import { useEffect, useState, useRef } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ScrollProgress } from "@/components/scroll-progress"

interface CaseStudy {
  id: string
  title: string
  category: string
  image: string
  color: string
  what: string
  why: string
  soWhat: string
  overview: string
  challenges: string[]
  solution: {
    title: string
    description: string
  }[]
  results: string[]
  keyLearnings: string
  stats: Array<{ label: string; value: string }>
  diagrams?: Array<{ title: string; image: string; description: string }>
}

export default function CaseStudyClientPage() {
  const router = useRouter()
  const { id } = useParams() as { id: string }
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [nextCaseStudy, setNextCaseStudy] = useState<{ id: string; title: string } | null>(null)

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const headerTranslateY = useTransform(scrollYProgress, [0, 0.1], [0, -50])

  useEffect(() => {
    // Scroll to the top of the page when component mounts or id changes
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    // In a real app, this would fetch from an API
    const getCaseStudy = () => {
      // Update the case studies data to match the updated projects
      const caseStudies: Record<string, CaseStudy> = {
        "behavioral-health": {
          id: "behavioral-health",
          title: "Behavioral Health Tech Platform",
          category: "Healthcare Technology",
          image: "/placeholder.svg?height=1200&width=2000",
          color: "from-violet-500 to-purple-500",
          what: "I designed and deployed a platform for analyzing & visualizing emotional sentiment from user journal data over time, providing valuable insights for therapeutic interventions.",
          why: "To extend the reach and impact of somatic therapists through workflow automation and AI-powered insights, making therapy more effective and accessible.",
          soWhat:
            "This platform enables therapists to better understand patient emotional patterns, leading to more targeted interventions and improved therapeutic outcomes.",
          overview:
            "As the founder of this behavioral health tech startup, I developed an innovative platform that uses natural language processing and sentiment analysis to extract meaningful insights from patient journal entries. This technology helps therapists track emotional patterns over time and identify opportunities for intervention.",
          challenges: [
            "Complex emotional data requiring sophisticated analysis techniques",
            "Need for intuitive visualization of sentiment patterns",
            "Integration with existing therapeutic workflows",
            "Ensuring privacy and security of sensitive patient data",
          ],
          solution: [
            {
              title: "Sentiment Analysis Engine",
              description: "Developed algorithms to identify and categorize emotional content in journal entries",
            },
            {
              title: "Temporal Visualization",
              description: "Created intuitive visualizations showing emotional patterns over time",
            },
            {
              title: "Workflow Automation",
              description: "Integrated with therapist workflows to streamline the therapeutic process",
            },
            {
              title: "AI-Powered Insights",
              description: "Implemented machine learning to identify patterns and suggest potential interventions",
            },
          ],
          results: [
            "Enhanced therapist understanding of patient emotional patterns",
            "Improved targeting of therapeutic interventions",
            "Increased therapist capacity through workflow automation",
            "Created new partnership opportunities with somatic therapists",
          ],
          keyLearnings:
            "This project demonstrated the power of combining natural language processing with therapeutic expertise. By translating complex emotional data into actionable insights, we created a tool that extends the reach and impact of therapists while providing patients with more personalized care.",
          stats: [
            { label: "Clinician Efficiency", value: "+50%" },
            { label: "Workflow Automation", value: "100%" },
            { label: "AI-Powered Insights", value: "Yes" },
          ],
        },
        "preventative-care": {
          id: "preventative-care",
          title: "Sleep Monitoring Business",
          category: "Digital Health",
          image: "/placeholder.svg?height=1200&width=2000",
          color: "from-blue-500 to-cyan-500",
          what: "I built a scalable D2C Sleep Monitoring business leveraging wearable technology and health coaching to improve patient outcomes while reducing clinician burnout.",
          why: "To drive revenue growth while addressing the critical need for preventative care solutions that could scale efficiently and maintain high levels of patient engagement.",
          soWhat:
            "This initiative drove $7M in projected revenue growth, achieved 90% patient engagement, and raised $5M in philanthropy by demonstrating an innovative value-based care model.",
          overview:
            "At Sutter Health's Design & Innovation department, I led the development of a direct-to-consumer Sleep Monitoring business that combined wearable technology with personalized health coaching. This preventative care platform, HealthBridge, represented a significant innovation in how healthcare services could be delivered and monetized.",
          challenges: [
            "Creating a sustainable business model for preventative care",
            "Maintaining high levels of patient engagement",
            "Reducing clinician burnout while scaling the service",
            "Demonstrating value to secure philanthropic funding",
          ],
          solution: [
            {
              title: "D2C Business Model",
              description: "Developed a direct-to-consumer approach that created new revenue streams",
            },
            {
              title: "Health Coach Team",
              description: "Curated a team of 11 health coaches with optimized workflows",
            },
            {
              title: "User-Driven Feedback Loops",
              description: "Implemented continuous improvement based on patient and clinician feedback",
            },
            {
              title: "Value-Based Care Model",
              description: "Created an innovative approach that aligned stakeholder interests",
            },
          ],
          results: [
            "Drove $7M in projected revenue growth",
            "Achieved 90% patient engagement",
            "Raised $5M in philanthropy",
            "Reduced clinician burnout while increasing patient volume",
          ],
          keyLearnings:
            "This project demonstrated that preventative care can be both clinically effective and financially sustainable when designed with the right business model and technology infrastructure. By focusing on patient engagement and clinician experience, we created a scalable solution that delivered value to all stakeholders.",
          stats: [
            { label: "Patient Engagement", value: "90%" },
            { label: "Revenue Growth", value: "$7M" },
            { label: "Philanthropy Raised", value: "$5M" },
          ],
        },
        "physical-therapy": {
          id: "physical-therapy",
          title: "Online Back & Neck Pain Therapy",
          category: "Telehealth",
          image: "/placeholder.svg?height=1200&width=2000",
          color: "from-emerald-500 to-green-500",
          what: "I scaled an online back and neck pain therapy business to profitability within 8 months, achieving 10x user growth through innovative acquisition and retention strategies.",
          why: "To provide accessible, effective treatment for back and neck pain that could reduce unnecessary surgeries and opioid dependence while creating a profitable business model.",
          soWhat:
            "The platform achieved a 90% reduction in unnecessary surgeries, 60% reduction in patient pain, and 85% reduction in opioid dependence, while establishing risk-sharing partnerships with major healthcare providers.",
          overview:
            "As Co-Founder and Head of Product Management at SpineZone Medical Fitness, I led the development of an online therapy platform for back and neck pain. This innovative approach combined digital delivery with in-person care at six clinics, serving patients nationwide with measurable improvements in outcomes.",
          challenges: [
            "Creating a scalable online therapy model for physical conditions",
            "Developing effective user acquisition and retention strategies",
            "Building partnerships with risk-averse healthcare providers",
            "Demonstrating measurable outcomes to support business growth",
          ],
          solution: [
            {
              title: "Hybrid Care Model",
              description: "Combined online therapy with in-person clinics for comprehensive care",
            },
            {
              title: "Custom EMR System",
              description: "Built electronic medical record software optimized for spine care",
            },
            {
              title: "Risk-Sharing Partnerships",
              description: "Developed innovative business models with major payors and health systems",
            },
            {
              title: "Outcome-Focused Approach",
              description: "Implemented rigorous measurement of clinical outcomes",
            },
          ],
          results: [
            "90% reduction in unnecessary surgeries",
            "60% reduction in patient pain",
            "85% reduction in opioid dependence",
            "10x user growth with profitability in 8 months",
          ],
          keyLearnings:
            "This project demonstrated the power of combining digital health solutions with innovative business models. By focusing on measurable outcomes and creating risk-sharing partnerships, we were able to align incentives across the healthcare ecosystem while delivering significant improvements in patient care.",
          stats: [
            { label: "Surgery Reduction", value: "90%" },
            { label: "Opioid Dependence", value: "-85%" },
            { label: "Pain Reduction", value: "60%" },
          ],
        },
        "electronic-health-record": {
          id: "electronic-health-record",
          title: "Custom EMR System",
          category: "Health Informatics",
          image: "/placeholder.svg?height=1200&width=2000",
          color: "from-amber-500 to-yellow-500",
          what: "I built a custom electronic medical record system specifically designed for spine care, enabling detailed tracking of patient outcomes and optimizing clinical workflows.",
          why: "Existing EMR systems couldn't support the specialized needs of our spine care practice or provide the detailed analytics required to demonstrate treatment effectiveness.",
          soWhat:
            "The implementation of this custom EMR supported 10x user growth, helped achieve profitability within 8 months, and facilitated expansion from 2 to 6 clinics.",
          overview:
            "At SpineZone Medical Fitness, I led the development of a purpose-built electronic medical record system that facilitated detailed analysis of patient progress and outcomes. This bespoke EMR was designed specifically to meet the unique needs of our specialized physical therapy practice.",
          challenges: [
            "Existing EMR systems lacked support for our specialized treatment protocols",
            "Need for detailed outcome tracking to demonstrate effectiveness",
            "Requirement for seamless integration with our online therapy platform",
            "Supporting rapid business growth with scalable technology",
          ],
          solution: [
            {
              title: "Specialized Treatment Protocols",
              description: "Designed EMR around spine-specific care pathways",
            },
            {
              title: "Outcome Tracking",
              description: "Implemented comprehensive measurement of pain reduction and functional improvement",
            },
            {
              title: "Platform Integration",
              description: "Seamlessly connected in-person and online care documentation",
            },
            {
              title: "Scalable Architecture",
              description: "Built to support rapid business growth across multiple locations",
            },
          ],
          results: [
            "Supported 10x user growth",
            "Helped achieve profitability within 8 months",
            "Facilitated expansion from 2 to 6 clinics",
            "Enabled detailed outcome reporting to healthcare partners",
          ],
          keyLearnings:
            "This project highlighted the value of purpose-built technology solutions in healthcare. By creating an EMR system tailored to our specific needs, we were able to capture and analyze data in ways that off-the-shelf solutions couldn't accommodate, ultimately supporting both clinical excellence and business growth.",
          stats: [
            { label: "User Growth", value: "10x" },
            { label: "Time to Profitability", value: "8 mo" },
            { label: "Clinic Expansion", value: "2→6" },
          ],
        },
        "patient-relationship": {
          id: "patient-relationship",
          title: "Patient CRM Optimization",
          category: "Healthcare Operations",
          image: "/placeholder.svg?height=1200&width=2000",
          color: "from-red-500 to-orange-500",
          what: "I customized patient CRM software to optimize scheduling and patient relationship management, while directing company strategy, branding, and messaging.",
          why: "Efficient patient relationship management was critical to supporting business growth and ensuring optimal utilization of clinical resources.",
          soWhat:
            "This transformation doubled revenue, established partnerships with three major payors, and reduced denied claims by 30%, positioning the company for national expansion.",
          overview:
            "At SpineZone Medical Fitness, I led the customization of patient relationship management systems to optimize scheduling and patient engagement. This initiative was part of a broader strategy that included branding, segmentation, and messaging to support growth from 2 to 6 clinics.",
          challenges: [
            "Inefficient scheduling processes limiting clinical capacity",
            "High rates of denied insurance claims",
            "Need for consistent branding and messaging across locations",
            "Managing complex relationships with healthcare payors",
          ],
          solution: [
            {
              title: "CRM Customization",
              description: "Tailored patient relationship management software for spine care",
            },
            {
              title: "Scheduling Optimization",
              description: "Implemented algorithms to maximize clinician utilization",
            },
            {
              title: "Payor Partnerships",
              description: "Developed risk-sharing models with major healthcare payors",
            },
            {
              title: "Brand Strategy",
              description: "Created consistent branding and messaging across all locations",
            },
          ],
          results: [
            "Doubled company revenue",
            "Established partnerships with three major payors",
            "Reduced denied claims by 30%",
            "Supported expansion from 2 to 6 clinics",
          ],
          keyLearnings:
            "This project demonstrated how operational excellence and strategic marketing can work together to drive healthcare business growth. By optimizing patient relationship management while developing innovative payor partnerships, we created a sustainable model for expansion that delivered value to all stakeholders.",
          stats: [
            { label: "Revenue Growth", value: "2x" },
            { label: "Major Payor Partnerships", value: "3" },
            { label: "Denied Claims", value: "-30%" },
          ],
        },
        "consumer-wellness": {
          id: "consumer-wellness",
          title: "WellnessFX Growth Strategy",
          category: "Consumer Health",
          image: "/placeholder.svg?height=1200&width=2000",
          color: "from-pink-500 to-rose-500",
          what: "I achieved 10x user growth at WellnessFX by leveraging detailed segmentation, data-driven product positioning, and scalable marketing strategies.",
          why: "WellnessFX needed to expand beyond its initial customer base of CrossFIT athletes to reach broader wellness audiences and drive business growth.",
          soWhat:
            "These efforts led to significant user growth and ultimately contributed to the successful acquisition of the company by Thorne.",
          overview:
            "As a consultant at Sethi Solutions, I led market segmentation and product creation initiatives for WellnessFX that enabled the successful growth and eventual sale of their biometrics business. This work involved developing detailed customer segmentation, implementing data-driven product positioning, and creating scalable marketing strategies.",
          challenges: [
            "Limited initial customer base primarily consisting of CrossFIT athletes",
            "Need to identify and target new market segments",
            "Creating positioning that would resonate with broader wellness audiences",
            "Developing scalable marketing strategies to support rapid growth",
          ],
          solution: [
            {
              title: "Customer Segmentation",
              description: "Developed detailed profiles of potential customer segments beyond the initial base",
            },
            {
              title: "Data-Driven Positioning",
              description: "Created product positioning based on customer insights and market analysis",
            },
            {
              title: "Scalable Marketing",
              description: "Implemented strategies that could efficiently acquire customers at scale",
            },
            {
              title: "Growth Metrics",
              description: "Established key performance indicators to track and optimize growth",
            },
          ],
          results: [
            "Achieved 10x user growth",
            "Expanded beyond initial CrossFIT athlete base",
            "Contributed to successful acquisition by Thorne",
            "Established repeatable growth methodologies",
          ],
          keyLearnings:
            "This project highlighted the importance of detailed customer segmentation and data-driven marketing in consumer health. By understanding the needs and motivations of different customer groups, we were able to create targeted positioning and acquisition strategies that drove significant growth and business value.",
          stats: [
            { label: "User Growth", value: "10x" },
            { label: "Acquisition", value: "Thorne" },
            { label: "Time Period", value: "2012-14" },
          ],
        },
      }

      // Find the next case study for navigation
      const caseStudyIds = Object.keys(caseStudies)
      const currentIndex = caseStudyIds.indexOf(id)
      const nextIndex = (currentIndex + 1) % caseStudyIds.length
      const nextId = caseStudyIds[nextIndex]

      setNextCaseStudy({
        id: nextId,
        title: caseStudies[nextId].title,
      })

      return caseStudies[id] || null
    }

    setCaseStudy(getCaseStudy())
    setIsLoaded(true)
  }, [id])

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 relative">
            <div className="absolute inset-0 rounded-full border-t-2 border-blue-500 animate-spin"></div>
            <div className="absolute inset-0 rounded-full border-r-2 border-violet-500 animate-pulse"></div>
          </div>
          <p className="mt-4 text-gray-400">Loading case study...</p>
        </div>
      </div>
    )
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-950">
        <h1 className="text-3xl font-bold mb-4 text-white">Case Study Not Found</h1>
        <p className="text-gray-400 mb-8">The case study you're looking for doesn't exist or has been moved.</p>
        <Button asChild className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600">
          <Link href="/#portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-gray-950 text-white" ref={containerRef}>
      <ScrollProgress />
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden h-[70vh] flex items-center">
        <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} opacity-10`} />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-noise opacity-20" />

        <motion.div
          style={{ opacity: headerOpacity, y: headerTranslateY }}
          className="container relative z-10 px-4 md:px-6"
        >
          <Button variant="ghost" asChild className="mb-8 hover:bg-gray-800/50 rounded-full">
            <Link href="/#portfolio" className="flex items-center text-gray-300 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </Link>
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block text-sm font-medium text-blue-400 mb-4">{caseStudy.category}</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {caseStudy.title}
            </h1>

            <div className="flex flex-wrap gap-4 mt-8">
              {caseStudy.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center min-w-[120px]"
                >
                  <p className="text-white font-bold text-2xl">{stat.value}</p>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-950 to-transparent" />
      </section>

      {/* Overview Cards */}
      <section className="py-12 md:py-16 bg-gray-900 relative">
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="container px-4 md:px-6 relative">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 shadow-lg"
            >
              <h2 className="text-xl font-bold mb-4 text-blue-400">What?</h2>
              <p className="text-gray-300">{caseStudy.what}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-violet-500/10 to-violet-600/5 backdrop-blur-sm rounded-2xl p-6 border border-violet-500/20 shadow-lg"
            >
              <h2 className="text-xl font-bold mb-4 text-violet-400">Why?</h2>
              <p className="text-gray-300">{caseStudy.why}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 shadow-lg"
            >
              <h2 className="text-xl font-bold mb-4 text-green-400">So What?</h2>
              <p className="text-gray-300">{caseStudy.soWhat}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="container px-4 md:px-6 relative">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
                Project Overview
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">{caseStudy.overview}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
                Challenges
              </h2>
              <ul className="space-y-4">
                {caseStudy.challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="bg-blue-500/20 text-blue-400 p-1 rounded-full mt-1">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.3334 4L6.00008 11.3333L2.66675 8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-300">{challenge}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Diagrams section removed as requested */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
                Solution
              </h2>
              <div className="grid gap-6">
                {caseStudy.solution.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-6 border border-gray-800 shadow-lg transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
                Results
              </h2>
              <ul className="space-y-4">
                {caseStudy.results.map((result, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="bg-green-500/20 text-green-400 p-1 rounded-full mt-1">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.3334 4L6.00008 11.3333L2.66675 8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-300">{result}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
                Key Learnings
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">{caseStudy.keyLearnings}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex justify-center"
            >
              <Button
                asChild
                className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white"
              >
                <Link href="/#portfolio" className="flex items-center">
                  <ArrowLeft className="h-4 w-4 mr-2" /> Back to Portfolio
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next Case Study */}
      <section className="py-16 md:py-24 bg-gray-900 relative">
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="container px-4 md:px-6 relative">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Continue Exploring</h2>
                {nextCaseStudy && <p className="text-gray-400">Next: {nextCaseStudy.title}</p>}
              </div>
              <div className="flex gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white border-0 group relative overflow-hidden"
                >
                  <Link href="/#portfolio" className="flex items-center">
                    View All Projects
                  </Link>
                  <span className="absolute inset-0 translate-y-[105%] bg-white/10 transition-transform duration-300 group-hover:translate-y-0" />
                </Button>

                {nextCaseStudy && (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full border-gray-700 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300 group"
                  >
                    <Link href={`/case-studies/${nextCaseStudy.id}`} className="flex items-center">
                      Next Case Study{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
