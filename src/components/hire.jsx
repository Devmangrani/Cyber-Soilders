import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Shield, 
  Target, 
  Users, 
  Zap, 
  Briefcase, 
  GraduationCap, 
  Globe, 
  Heart, 
  ArrowRight, 
  ChevronRight,
  Clock,
  DollarSign,
  MapPin,
  Send,
  CheckCircle,
  Building,
  User,
  Code,
  Lock,
  Brain,
  ShieldCheck,
  Cloud,
  Network,
  Activity,
  BarChart,
  Cpu,
  Database,
  Fingerprint,
  Key,
  Laptop,
  LineChart,
  Monitor,
  Server,
  Settings,
  ShieldAlert,
  Terminal,
  Timer,
  TrendingUp,
  Wifi,
  Workflow,
  FileText,
  Rocket,
  Calendar
} from "lucide-react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import NextjsBackground from './NextjsBackground'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
}

const services = [
  {
    title: "Penetration Testing",
    rate: "$150-200/hr",
    duration: "1-2 weeks",
    expertise: "Advanced",
    description: "Expert penetration testing services to identify vulnerabilities in your systems.",
    icon: <Target className="h-6 w-6" />,
    stat: "98%",
    statLabel: "Success Rate"
  },
  {
    title: "Security Consulting",
    rate: "$175-250/hr",
    duration: "Ongoing",
    expertise: "Expert",
    description: "Strategic security consulting to strengthen your organization's security posture.",
    icon: <Shield className="h-6 w-6" />,
    stat: "500+",
    statLabel: "Clients"
  },
  {
    title: "Incident Response",
    rate: "$200-300/hr",
    duration: "As needed",
    expertise: "Advanced",
    description: "24/7 incident response services to handle security breaches and threats.",
    icon: <Zap className="h-6 w-6" />,
    stat: "24/7",
    statLabel: "Response"
  },
  {
    title: "Security Training",
    rate: "$1,500/day",
    duration: "Custom",
    expertise: "All levels",
    description: "Customized security training programs for your team.",
    icon: <GraduationCap className="h-6 w-6" />,
    stat: "2000+",
    statLabel: "Trained"
  }
]

const features = [
  {
    title: "Expert Team",
    description: "Access to certified security professionals",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Quick Response",
    description: "24/7 availability for critical issues",
    icon: <Clock className="h-6 w-6" />
  },
  {
    title: "Global Coverage",
    description: "Services available worldwide",
    icon: <Globe className="h-6 w-6" />
  },
  {
    title: "Flexible Pricing",
    description: "Customized pricing models",
    icon: <DollarSign className="h-6 w-6" />
  }
]

// New category filters
const categoryFilters = [
  { id: "all", label: "All", active: true },
  { id: "government", label: "For Government", icon: <Building className="h-4 w-4 mr-1" /> },
  { id: "business", label: "For Business", icon: <Briefcase className="h-4 w-4 mr-1" /> },
  { id: "individual", label: "For Individual", icon: <User className="h-4 w-4 mr-1" /> }
]

const teamMembers = [
  {
    name: "John Smith",
    role: "Senior Security Analyst",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "10+ years of experience in penetration testing and vulnerability assessment",
    skills: ["Penetration Testing", "Network Security", "Threat Analysis"]
  },
  {
    name: "Sarah Johnson",
    role: "Security Consultant",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Expert in security architecture and compliance frameworks",
    skills: ["Security Architecture", "Compliance", "Risk Management"]
  },
  {
    name: "Michael Chen",
    role: "Incident Response Lead",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Specialized in incident response and digital forensics",
    skills: ["Incident Response", "Forensics", "Malware Analysis"]
  }
]

export default function Hire() {
  const { scrollYProgress } = useScroll()
  const [isLoading, setIsLoading] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const [isCounterStarted, setIsCounterStarted] = useState(false)
  const [counterValues, setCounterValues] = useState({})
  const [hoveredService, setHoveredService] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  
  // Refs for animations
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const gridRef = useRef(null)
  const servicesRef = useRef(null)
  const featuresRef = useRef(null)
  const teamRef = useRef(null)
  const contactRef = useRef(null)
  const serviceCardsRef = useRef([])
  const featureItemsRef = useRef([])
  
  // Refs for intersection observer animations
  const sectionRefs = useRef([])
  
  // Background animation values
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  // Add to service refs
  const addToServiceRefs = (el, index) => {
    if (el) {
      serviceCardsRef.current[index] = el
    }
  }
  
  // Add to feature refs
  const addToFeatureRefs = (el, index) => {
    if (el) {
      featureItemsRef.current[index] = el
    }
  }

  // Counter animation function
  const animateCounter = (targetValue, id) => {
    if (!targetValue) return
    
    let startValue = 0
    const duration = 2000
    const startTime = Date.now()
    const isPercentage = targetValue.toString().includes('%')
    const isRating = !isPercentage && !targetValue.toString().includes('+') && parseFloat(targetValue) < 10
    const numericValue = parseFloat(targetValue.toString().replace(/[^0-9.]/g, ''))
    
    const updateCounter = () => {
      const currentTime = Date.now()
      const elapsedTime = currentTime - startTime
      
      if (elapsedTime < duration) {
        const progress = elapsedTime / duration
        let currentValue
        
        if (isRating) {
          currentValue = (progress * numericValue).toFixed(1)
        } else {
          currentValue = Math.floor(progress * numericValue)
        }
        
        setCounterValues(prev => ({
          ...prev,
          [id]: isPercentage ? `${currentValue}%` : (targetValue.includes('+') ? `${currentValue}+` : currentValue)
        }))
        
        requestAnimationFrame(updateCounter)
      } else {
        setCounterValues(prev => ({
          ...prev,
          [id]: targetValue
        }))
      }
    }
    
    requestAnimationFrame(updateCounter)
  }

  // Initialize GSAP animations
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    try {
      const ctx = gsap.context(() => {
        // Hero section animations
        gsap.from(".hero-badge", {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(1.7)"
        })
        
        gsap.from(".hero-title", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out"
        })
        
        gsap.from(".hero-description", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          delay: 0.4,
          ease: "power2.out"
        })
        
        // Floating particles animation
        gsap.to(".floating-particle", {
          y: "random(-20, 20)",
          x: "random(-20, 20)",
          duration: "random(3, 5)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        })
        
        // Parallax effects
        gsap.to(".parallax-slow", {
          y: "random(-50, 50)",
          duration: "random(5, 8)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        })
        
        gsap.to(".parallax-fast", {
          y: "random(-30, 30)",
          duration: "random(3, 5)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        })
      }, containerRef)
      
      return () => ctx.revert()
    } catch (err) {
      console.error("Error initializing animations:", err)
      setError("Error initializing animations")
    }
  }, [])

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Create animated background elements
    const container = containerRef.current
    if (!container) return

    const createParticle = () => {
      const particle = document.createElement('div')
      particle.className = 'absolute w-1 h-1 bg-primary/20 rounded-full'
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      container.appendChild(particle)

      gsap.to(particle, {
        duration: Math.random() * 20 + 10,
        x: 'random(-100, 100)',
        y: 'random(-100, 100)',
        opacity: 'random(0.1, 0.3)',
        scale: 'random(0.5, 2)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    }

    // Create multiple particles
    for (let i = 0; i < 50; i++) {
      createParticle()
    }

    return () => {
      // Cleanup
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      setFormData({ name: "", email: "", company: "", service: "", message: "" })
    } catch (err) {
      setError("Error submitting form")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
          <p className="text-gray-300">{error}</p>
          <Button 
            onClick={() => setError(null)}
            className="mt-4"
          >
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div 
        ref={containerRef}
        className="fixed inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(17, 24, 39, 0.5) 0%, rgba(0, 0, 0, 1) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900"
        >
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

            {/* Neon intersection highlights */}
            <div
              className="grid-intersection absolute h-3 w-3 rounded-full bg-blue-500/20 blur-[5px] top-[24%] left-[48%] animate-grid-intersection-pulse"
              style={{ animationDelay: "4.5s" }}
            ></div>
            <div
              className="grid-intersection absolute h-3 w-3 rounded-full bg-purple-500/20 blur-[5px] top-[36%] left-[60%] animate-grid-intersection-pulse"
              style={{ animationDelay: "2.3s" }}
            ></div>
            <div
              className="grid-intersection absolute h-3 w-3 rounded-full bg-teal-500/20 blur-[5px] top-[56%] left-[32%] animate-grid-intersection-pulse"
              style={{ animationDelay: "6.2s" }}
            ></div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_50%)]" />
          
          {/* Floating Orbs */}
          <motion.div
            className="absolute -z-10 top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl"
            animate={{
              y: [0, -50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
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
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          
          <div className="container relative px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="hero-badge inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-primary text-sm font-medium">
                <Briefcase className="mr-2 h-4 w-4" />
                Hire Security Experts
              </div>
              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
                Elite Cybersecurity Services
              </h1>
              <p className="hero-description text-xl text-gray-300 max-w-[600px]">
                Access top-tier cybersecurity talent and services to protect your organization.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-20 overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"
            style={{ y: backgroundY, opacity }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <motion.h3 
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Hire Cybersecurity Professionals with Relevant Experience and Skills
              </motion.h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6 text-primary text-white" />,
                  title: "Swift Threat Mitigation",
                  description: "Hire cybersecurity expert for advanced threat detection, minimizing response times and securing your systems faster."
                },
                {
                  icon: <DollarSign className="w-6 h-6 text-primary text-white" />,
                  title: "Security Made Affordable",
                  description: "Our security pros optimize security posture to protect your data without inflating operational costs."
                },
                {
                  icon: <Shield className="w-6 h-6 text-primary text-white" />,
                  title: "100% System Integrity",
                  description: "Worried about vulnerabilities? Our experts will fortify your infrastructure, eliminating potential threats and ensuring secure operations."
                },
                {
                  icon: <Activity className="w-6 h-6 text-primary text-white    " />,
                  title: "Real-Time Protection",
                  description: "With continuous monitoring and rapid incident response, we keep your business secure with solutions deployed in minutes."
                },
                {
                  icon: <Server className="w-6 h-6 text-primary text-white" />,
                  title: "24/7 Security Backup",
                  description: "Hire information security expert and relax, as automated backup systems ensure business continuity 24/7."
                },
                {
                  icon: <TrendingUp className="w-6 h-6 text-primary text-white" />,
                  title: "Security Milestones",
                  description: "We promote cross-department collaboration, turning your security goals into achieved milestones, all while minimizing risks."
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-primary/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-white">{service.title}</h4>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section
        <section className="relative py-20 overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5"
            style={{ y: backgroundY, opacity }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: <Timer className="w-6 h-6 text-primary" />, text: "23+ Years of Experience" },
                { icon: <Workflow className="w-6 h-6 text-primary" />, text: "High Reusability Factor" },
                { icon: <Brain className="w-6 h-6 text-primary" />, text: "Top 1% Global Talent" },
                { icon: <BarChart className="w-6 h-6 text-primary" />, text: "95% Satisfaction Rate" },
                { icon: <Lock className="w-6 h-6 text-primary" />, text: "NDA-Protected Assets" },
                { icon: <LineChart className="w-6 h-6 text-primary" />, text: "50% Less Acquisition Cost" }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {skill.icon}
                  </div>
                  <h6 className="text-xl font-semibold text-white">{skill.text}</h6>
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Top-notch Security Pros Are Within Your Reach. Hire them Today!
              </h3>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                  <span className="flex items-center gap-2">
                    Start Hiring <ArrowRight className="w-5 h-5" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section> */}

        {/* Easy Steps Section */}
        <section className="relative py-20 overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"
            style={{ y: backgroundY, opacity }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-3xl font-bold text-white mb-4">
                Keeping It Simple: Our 3-Step Hiring Process
              </h4>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              {[
                {
                  step: "Step 01",
                  time: "In 1-2 Days",
                  description: "Get pre-vetted CVs",
                  icon: <FileText className="w-6 h-6 text-primary text-white" />
                },
                {
                  step: "Step 02",
                  time: "In 2-4 Days",
                  description: "Interview Shortlisted Candidates",
                  icon: <Users className="w-6 h-6 text-primary text-white" />
                },
                {
                  step: "Step 03",
                  time: "In 4-5 Days",
                  description: "Your Project Starts",
                  icon: <Rocket className="w-6 h-6 text-primary text-white" />
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700/50 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                    {step.icon}
                  </div>
                  <span className="text-primary font-semibold block mb-2 text-white">{step.step}</span>
                  <div className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full inline-block mb-4 text-white">
                    {step.time}
                  </div>
                  <p className="text-white">{step.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                  <span className="flex items-center gap-2">
                    Ask For CVs <FileText className="w-5 h-5" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Developer Services Section */}
        {/* <section className="relative py-20 overflow-hidden ">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5"
            style={{ y: backgroundY, opacity }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Capabilities Our Cybersecurity Experts Bring to Your Project
              </h3>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <ul className="space-y-6">
                  {[
                    {
                      icon: <Cpu className="w-6 h-6 text-primary" />,
                      title: "AI/ML Automation-led security"
                    },
                    {
                      icon: <Activity className="w-6 h-6 text-primary" />,
                      title: "Behavior Analytics"
                    },
                    {
                      icon: <Monitor className="w-6 h-6 text-primary" />,
                      title: "EDR (Endpoint Detection & Response)"
                    },
                    {
                      icon: <Cloud className="w-6 h-6 text-primary" />,
                      title: "Cloud Security"
                    }
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        {item.icon}
                      </div>
                      <h5 className="text-xl font-semibold text-white">{item.title}</h5>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                  <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700/50">
                    <Terminal className="w-24 h-24 text-primary" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section> */}

        {/* Hiring Models Section */}
        {/* <section className="relative py-20 overflow-hidden ">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"
            style={{ y: backgroundY, opacity }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                'Fast' Meets 'Flexible': Our Hiring Models
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
              {[
                {
                  title: "Part-Time Model",
                  items: [
                    "Best for short, focused projects",
                    "Pay only for hours worked",
                    "Flexible working hours",
                    "Task-specific billing"
                  ],
                  icon: <Clock className="w-6 h-6 text-primary" />
                },
                {
                  title: "Full-Time Model",
                  items: [
                    "160 hours of assured work",
                    "Receive Monthly billing",
                    "Transparent, consistent pricing",
                    "Fully manage your team as needed"
                  ],
                  icon: <Calendar className="w-6 h-6 text-primary" />
                },
                {
                  title: "Hourly-Time Model",
                  items: [
                    "Adjustable/flexible hours",
                    "Scale your team on-the-go",
                    "Dedicated support for changing needs",
                    "Pay for hours worked"
                  ],
                  icon: <Timer className="w-6 h-6 text-primary" />
                }
              ].map((model, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 "
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-white ">
                    {model.icon}
                  </div>
                  <h5 className="text-xl font-semibold text-white mb-4">{model.title}</h5>
                  <ul className="space-y-3">
                    {model.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-primary mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Contact Form */}
        <section className="relative py-20 overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"
            style={{ y: backgroundY, opacity }}
          />
          <div className="container mx-auto px-4 relative z-10">
            {/* ... rest of the contact form content ... */}
          </div>
        </section>
      </div>

      {/* Loading Animation */}
      {isLoading && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}

      {/* Animation styles */}
      <style>{`
        /* Grid animation keyframes */
        @keyframes grid-node-blink {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .animate-grid-node-blink {
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
        
        .animate-grid-trace-horizontal {
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
        
        .animate-grid-trace-vertical {
          animation: grid-trace-vertical 8s ease-in-out infinite;
        }
        
        @keyframes grid-intersection-pulse {
          0%, 100% {
            transform: scale(0.5);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.6;
          }
        }
        
        .animate-grid-intersection-pulse {
          animation: grid-intersection-pulse 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
} 