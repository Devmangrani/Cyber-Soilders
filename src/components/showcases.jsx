"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Shield,
  ArrowRight,
  GraduationCap,
  Terminal,
  AlertTriangle,
  Eye,
  Network,
  Database,
  Laptop,
  UserCheck,
  Cloud,
  X,
  Bug,
  AlertCircle,
  ClipboardCheck,
} from "lucide-react"
import asset1  from "../asset1.jpeg"
import asset2 from "../asset2.jpeg"
import asset3 from "../asset3.jpeg"
import testimonial1 from "../AcmeCorp1.png"
import testimonial2 from "../TechGiant2.jpeg"
import testimonial3 from "../SecureBank.png"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function CyberFramework() {
  // Refs for intersection observer animations
  const sectionRef = useRef(null)
  const gridRef = useRef(null)
  const frameworkRef = useRef(null)
  const testimonialsRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [counterValues, setCounterValues] = useState({
    clients: "500+",
    satisfaction: "98%",
    countries: "25+",
    experts: "100+",
  })

  // Parallax scroll effect
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 200], [1, 0])

  // Add GSAP animation for grid
  useEffect(() => {
    if (gridRef.current) {
      gsap.to(gridRef.current, {
        backgroundSize: "30px 30px",
        opacity: 0.7,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 0.5,
        },
      })
    }

    // Framework section animation
    if (frameworkRef.current) {
      gsap.from(".framework-item", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: frameworkRef.current,
          start: "top 80%",
        },
      })
    }

    // Testimonials animation
    if (testimonialsRef.current) {
      gsap.from(".testimonial-card", {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 80%",
        },
      })
    }
  }, [])

  // Framework categories
  const frameworkCategories = [
    {
      title: "Cyber Security Training",
      icon: <GraduationCap className="h-6 w-6 text-blue-400" />,
      description: "Stay ahead of cyber attacks with expert-led, up-to-date training programs.",
    },
    {
      title: "Vulnerability Assessment and Penetration Testing",
      icon: <Bug className="h-6 w-6 text-yellow-400" />,
      description: "Stay secure with expert-driven Vulnerability Assessment & Penetration Testing.",
    },
    {
      title: "Managed SOC",
      icon: <Shield className="h-6 w-6 text-purple-400" />,
      description: "Our SOC team detects, analyzes, and neutralise cyber threats - before they impact you.",
    },
    {
      title: "Risk Assessment",
      icon: <AlertCircle className="h-6 w-6 text-red-400" />,
      description: "Comprehensive risk assessments to strengthen your defenses & ensure compliance.",
    },
    {
      title: "Compliance Audit",
      icon: <ClipboardCheck className="h-6 w-6 text-green-400" />,
      description: "Stay audit-ready & avoid penalties with expert-driven cybersecurity assessment.",
    },
    {
      title: "Incident Response",
      icon: <AlertTriangle className="h-6 w-6 text-orange-400" />,
      description: "Swift, expert-led response to contain & recover from cyber incidents.",
    }
  ]

  // Testimonials data
  const testimonials = [
    {
      name: "Acme Corp",
      role: "Financial Services",
      content:
        "The cybersecurity framework implemented by Cyber.soldiers has transformed our security posture. We've seen a 70% reduction in security incidents within the first quarter.",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "TechGiant",
      role: "Technology",
      content:
        "Their incident response team saved us during a critical breach attempt. The 24/7 SOC monitoring detected the threat before any damage could occur.",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "SecureBank",
      role: "Banking",
      content:
        "The comprehensive training program has elevated our team's security awareness. Our staff is now our strongest security asset rather than our weakest link.",
      logo: "/placeholder.svg?height=80&width=80",
    },
  ]
  // w-full py-8 bg-gray-900
  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen relative overflow-hidden bg-gray-900 from-black to-gray-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Enhanced grid background with finer lines, glow nodes and subtle animation */}
        <div
          ref={gridRef}
          className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] overflow-hidden"
        >
          {/* Grid node glow effects - Adjusted for mobile */}
          <div
            className="grid-node absolute h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-500 blur-[3px] opacity-0 top-[20%] left-[40%] animate-grid-node-blink"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="grid-node absolute h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-purple-500 blur-[3px] opacity-0 top-[40%] left-[25%] animate-grid-node-blink"
            style={{ animationDelay: "1.2s" }}
          ></div>
          <div
            className="grid-node absolute h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-teal-500 blur-[3px] opacity-0 top-[70%] left-[60%] animate-grid-node-blink"
            style={{ animationDelay: "2.7s" }}
          ></div>
          <div
            className="grid-node absolute h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-cyan-500 blur-[3px] opacity-0 top-[30%] left-[80%] animate-grid-node-blink"
            style={{ animationDelay: "1.8s" }}
          ></div>
          <div
            className="grid-node absolute h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-indigo-500 blur-[3px] opacity-0 top-[60%] left-[35%] animate-grid-node-blink"
            style={{ animationDelay: "3.5s" }}
          ></div>

          {/* Grid line trace effects - Adjusted for mobile */}
          <div
            className="grid-trace absolute h-[1px] w-[100px] sm:w-[200px] bg-gradient-to-r from-blue-500/0 via-blue-500/70 to-blue-500/0 top-[20%] left-[40%] animate-grid-trace-horizontal"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="grid-trace absolute h-[100px] sm:h-[200px] w-[1px] bg-gradient-to-b from-purple-500/0 via-purple-500/70 to-purple-500/0 top-[40%] left-[25%] animate-grid-trace-vertical"
            style={{ animationDelay: "1.2s" }}
          ></div>
          <div
            className="grid-trace absolute h-[75px] sm:h-[150px] w-[1px] bg-gradient-to-r from-teal-500/0 via-teal-500/70 to-teal-500/0 top-[70%] left-[60%] animate-grid-trace-horizontal"
            style={{ animationDelay: "2.7s" }}
          ></div>
          <div
            className="grid-trace absolute h-[1px] w-[60px] sm:w-[120px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/70 to-cyan-500/0 top-[30%] left-[80%] animate-grid-trace-horizontal"
            style={{ animationDelay: "1.8s" }}
          ></div>
          <div
            className="grid-trace absolute h-[60px] sm:h-[120px] w-[1px] bg-gradient-to-b from-indigo-500/0 via-indigo-500/70 to-indigo-500/0 top-[60%] left-[35%] animate-grid-trace-vertical"
            style={{ animationDelay: "3.5s" }}
          ></div>
        </div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute -z-10 top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl"
        animate={{
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -z-10 bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-500/10 to-green-500/10 blur-3xl"
        animate={{
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-[1920px] relative z-10 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="flex flex-col items-center space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-primary text-sm font-medium"
          >
            <Shield className="mr-2 h-4 w-4" />
            Cyber Security Excellence
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 w-full max-w-[1920px]"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-white leading-tight">
              The Framework of Cyber Empowerment
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-400 max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] mx-auto leading-[1.4] sm:leading-[1.5] md:leading-[1.6] mt-4 sm:mt-6 whitespace-pre-line"
            >
              Our comprehensive approach to cybersecurity covers all aspects of Capability Enhancement, Assessment and Compliances.
            </motion.p>
          </motion.div>

          {/* Framework Section */}
          <div ref={frameworkRef} className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {frameworkCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200/10 hover:bg-white/10 transition-all duration-300 group"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                  <div className="relative z-10 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-gray-700/50">{category.icon}</div>
                      <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                    </div>
                    <p className="text-gray-400 text-xl">{category.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          {/* <div ref={testimonialsRef} className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-white leading-tight">
                What Our Clients Say
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-400 max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] mx-auto leading-[1.4] sm:leading-[1.5] md:leading-[1.6] mt-4 sm:mt-6">
                Trusted by leading organizations worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200/10 hover:bg-white/10 transition-all duration-300 group"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={testimonial.logo}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-400">{testimonial.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      {/* Contact Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsDialogOpen(false)}></div>
          <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6 w-full max-w-md">
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-gray-400">
                  Name
                </label>
                <input
                  id="name"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-gray-400">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Animation styles */}
      <style jsx>{`
        /* Grid animation keyframes */
        @keyframes grid-node-blink {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .grid-node {
          animation: grid-node-blink 4s ease-in-out infinite;
        }
        
        @keyframes grid-trace-horizontal {
          0% {
            transform: translateX(-100%) scaleX(0.7);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%) scaleX(0.7);
            opacity: 0;
          }
        }
        
        .grid-trace-horizontal {
          animation: grid-trace-horizontal 8s ease-in-out infinite;
        }
        
        @keyframes grid-trace-vertical {
          0% {
            transform: translateY(-100%) scaleY(0.7);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%) scaleY(0.7);
            opacity: 0;
          }
        }
        
        .grid-trace-vertical {
          animation: grid-trace-vertical 8s ease-in-out infinite;
        }
        
        @keyframes slide-right-infinite {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .slide-right-infinite {
          animation: slide-right-infinite 2s linear infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  )
}
