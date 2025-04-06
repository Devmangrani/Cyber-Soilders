import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
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
  Lock
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
    <main className="flex-1" ref={containerRef}>
      {/* NextJS-style background animation */}
      <NextjsBackground />
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900"
        >
          <div 
            ref={gridRef}
            className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
          ></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_50%)]" />
          
          {/* Enhanced animated background elements */}
          <div className="absolute -z-10 top-0 left-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl parallax-slow"></div>
          <div className="absolute -z-10 bottom-0 right-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-500/10 to-green-500/10 blur-3xl parallax-fast"></div>
          
          {/* Animated particles */}
          <div className="absolute -z-10 inset-0">
            <div className="floating-particle absolute top-1/4 left-1/5 size-2 rounded-full bg-blue-500/30"></div>
            <div className="floating-particle absolute top-3/4 left-2/3 size-3 rounded-full bg-purple-500/30"></div>
            <div className="floating-particle absolute top-1/3 left-3/4 size-2 rounded-full bg-green-500/30"></div>
            <div className="floating-particle absolute top-2/3 left-1/4 size-2 rounded-full bg-yellow-500/30"></div>
            <div className="floating-particle absolute top-1/2 left-1/2 size-1 rounded-full bg-red-500/30"></div>
          </div>
          
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

        {/* Features Section */}


        {/* Team Section */}


        {/* Contact Form */}

      </div>
    </main>
  )
} 