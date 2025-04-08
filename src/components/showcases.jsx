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
      description: "Comprehensive training programs for security professionals at all levels.",
    },
    {
      title: "Incident Response",
      icon: <AlertTriangle className="h-6 w-6 text-yellow-400" />,
      description: "Rapid response protocols to detect, contain and remediate security incidents.",
    },
    {
      title: "SOC",
      icon: <Eye className="h-6 w-6 text-purple-400" />,
      description: "24/7 Security Operations Center monitoring and threat detection services.",
    },
    {
      title: "Threat Modeling",
      icon: <Shield className="h-6 w-6 text-red-400" />,
      description: "Proactive identification and mitigation of potential security threats.",
    },
    {
      title: "Network Security",
      icon: <Network className="h-6 w-6 text-green-400" />,
      description: "Protection of network infrastructure against unauthorized access and attacks.",
    },
    {
      title: "Data Security",
      icon: <Database className="h-6 w-6 text-cyan-400" />,
      description: "Safeguarding sensitive data through encryption and access controls.",
    },
    {
      title: "Endpoint Security",
      icon: <Laptop className="h-6 w-6 text-orange-400" />,
      description: "Protection for devices connecting to your network from external threats.",
    },
    {
      title: "Identity & Access Management",
      icon: <UserCheck className="h-6 w-6 text-indigo-400" />,
      description: "Control and monitor user access to critical systems and information.",
    },
    {
      title: "Cloud Security",
      icon: <Cloud className="h-6 w-6 text-sky-400" />,
      description: "Securing cloud environments and applications against emerging threats.",
    },
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
          {/* Grid node glow effects */}
          <div
            className="grid-node absolute h-2 w-2 rounded-full bg-blue-500 blur-[3px] opacity-0 top-[20%] left-[40%] animate-grid-node-blink"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="grid-node absolute h-2 w-2 rounded-full bg-purple-500 blur-[3px] opacity-0 top-[40%] left-[25%] animate-grid-node-blink"
            style={{ animationDelay: "1.2s" }}
          ></div>
          <div
            className="grid-node absolute h-2 w-2 rounded-full bg-teal-500 blur-[3px] opacity-0 top-[70%] left-[60%] animate-grid-node-blink"
            style={{ animationDelay: "2.7s" }}
          ></div>
          <div
            className="grid-node absolute h-2 w-2 rounded-full bg-cyan-500 blur-[3px] opacity-0 top-[30%] left-[80%] animate-grid-node-blink"
            style={{ animationDelay: "1.8s" }}
          ></div>
          <div
            className="grid-node absolute h-2 w-2 rounded-full bg-indigo-500 blur-[3px] opacity-0 top-[60%] left-[35%] animate-grid-node-blink"
            style={{ animationDelay: "3.5s" }}
          ></div>

          {/* Grid line trace effects */}
          <div
            className="grid-trace absolute h-[1px] w-[200px] bg-gradient-to-r from-blue-500/0 via-blue-500/70 to-blue-500/0 top-[20%] left-[40%] animate-grid-trace-horizontal"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="grid-trace absolute h-[200px] w-[1px] bg-gradient-to-b from-purple-500/0 via-purple-500/70 to-purple-500/0 top-[40%] left-[25%] animate-grid-trace-vertical"
            style={{ animationDelay: "1.2s" }}
          ></div>
          <div
            className="grid-trace absolute h-[150px] w-[1px] bg-gradient-to-r from-teal-500/0 via-teal-500/70 to-teal-500/0 top-[70%] left-[60%] animate-grid-trace-horizontal"
            style={{ animationDelay: "2.7s" }}
          ></div>
          <div
            className="grid-trace absolute h-[1px] w-[120px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/70 to-cyan-500/0 top-[30%] left-[80%] animate-grid-trace-horizontal"
            style={{ animationDelay: "1.8s" }}
          ></div>
          <div
            className="grid-trace absolute h-[120px] w-[1px] bg-gradient-to-b from-indigo-500/0 via-indigo-500/70 to-indigo-500/0 top-[60%] left-[35%] animate-grid-trace-vertical"
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
      <div className="container px-4 md:px-6 max-w-[1200px] mx-auto relative z-10 py-20 md:py-32">
        <div className="flex flex-col items-center space-y-16">
          {/* Hero Section */}
          <div className="flex flex-col items-center space-y-8 text-center">
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
              className="space-y-4 max-w-[980px]"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
                Get started in <span className="text-blue-500">Cyber Security</span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-400 max-w-[700px] mx-auto"
              >
                Secure your digital assets with our comprehensive cybersecurity solutions and expert training programs.
              </motion.p>
            </motion.div>

            {/* CTA Button with Dialog */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button
                onClick={() => setIsDialogOpen(true)}
                className="relative group overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-md text-lg font-medium"
              >
                <span className="relative z-10 flex items-center">
                  Enquire Now <ArrowRight className="ml-2 h-5 w-5" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </motion.div>
          </div>

          {/* Featured Images Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
          >
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="relative overflow-hidden rounded-xl aspect-video bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-50"></div>
                <img
                    src={`${item === 1 ? asset1 : item === 2 ? asset2 : asset3}`}
                  alt={`Cyber Security Image ${item}`}
                  className="w-full h-full object-cover opacity-70 mix-blend-overlay"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-xl font-bold">Security Asset {item}</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Framework Section */}
          <div ref={frameworkRef} className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Framework of Cyber Empowerment</h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Our comprehensive approach to cybersecurity covers all aspects of digital protection, from training to
                implementation and continuous monitoring.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {frameworkCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200/10 hover:bg-white/10 transition-all duration-300 group"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gray-700/50">{category.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{category.title}</h3>
                      <p className="text-gray-400 text-sm">{category.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div ref={testimonialsRef} className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Testimonials</h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                See what our clients have to say about our cybersecurity services and training programs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200/10 hover:bg-white/10 transition-all duration-300 group"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-4">
                      <img
                        src={`${index === 0 ? testimonial1 : index === 1 ? testimonial2 : testimonial3}`}
                        alt={`${testimonial.name} logo`}
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                    <p className="text-gray-300 italic mb-4 flex-grow">"{testimonial.content}"</p>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>


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
