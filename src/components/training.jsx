import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  ArrowRight, 
  CheckCircle, 
  Building, 
  Briefcase, 
  GraduationCap as AcademiaIcon, 
  User
} from "lucide-react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import NextjsBackground from './NextjsBackground'
// Import partner logos
import ECCouncilLogo from '../Ec_Council_Logo.png'
import IITPravartakLogo from '../IITM_Pravartak_Logo.jpeg'
import IITMadrasLogo from '../IIT_Madras_Logo.png'
import CyberSecurityTraining from '../CyberSecurityServices.jpeg'
import CompTIALogo from '../CompTIA.png'
import CyberGuardianLogo from '../LMS.png'
import CyberRangeLogo from "../Cyber-range-logo.png"
import CyberLabsLogo from "../cyber-labs-logo.jpg"


// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
}

const courses = [
  {
    title: "Cyber Security Fundamentals",
    description: "Learn the basics of cyber security, including threat detection, prevention, and response strategies.",
    duration: "8 weeks",
    level: "Beginner",
    icon: <GraduationCap className="h-6 w-6" />,
    stat: "2000+",
    statLabel: "Graduates"
  },
  {
    title: "Advanced Penetration Testing",
    description: "Master advanced penetration testing techniques and tools used by security professionals.",
    duration: "12 weeks",
    level: "Advanced",
    icon: <BookOpen className="h-6 w-6" />,
    stat: "97%",
    statLabel: "Success rate"
  },
  {
    title: "Security Operations Center (SOC)",
    description: "Comprehensive training on SOC operations, incident response, and threat hunting.",
    duration: "10 weeks",
    level: "Intermediate",
    icon: <Users className="h-6 w-6" />,
    stat: "94%",
    statLabel: "Job placement"
  },
  {
    title: "Cloud Security Professional",
    description: "Specialized training in securing cloud infrastructure and applications.",
    duration: "10 weeks",
    level: "Intermediate",
    icon: <Award className="h-6 w-6" />,
    stat: "4.9",
    statLabel: "Rating"
  }
]


const benefits = [
  "Industry-recognized certification",
  "Hands-on practical training",
  "Expert instructors with real-world experience",
  "Flexible learning options",
  "Job placement assistance",
  "Post-training support"
]

// New category filters based on sketch
const categoryFilters = [
  { 
    id: "all", 
    label: "All", 
    active: true, 
    icon: null,
    courses: [
      // Include all courses from all categories
      { 
        title: "Cyber Security Fundamentals",
        description: "Learn the basics of cyber security, including threat detection, prevention, and response strategies.",
        duration: "8 weeks",
        icon: <GraduationCap className="h-6 w-6" />
      },
      {
        title: "Advanced Penetration Testing",
        description: "Master advanced penetration testing techniques and tools used by security professionals.",
        duration: "12 weeks",
        icon: <BookOpen className="h-6 w-6" />
      },
      {
        title: "Security Operations Center (SOC)",
        description: "Comprehensive training on SOC operations, incident response, and threat hunting.",
        duration: "10 weeks",
        icon: <Users className="h-6 w-6" />
      },
      {
        title: "Cloud Security Professional",
        description: "Specialized training in securing cloud infrastructure and applications.",
        duration: "10 weeks",
        icon: <Award className="h-6 w-6" />
      },
      // Add certification courses
      { title: "CISSP", description: "Certified Information Systems Security Professional", icon: <Award className="h-6 w-6" /> },
      { title: "CISM", description: "Certified Information Security Manager", icon: <Award className="h-6 w-6" /> },
      { title: "CISA", description: "Certified Information Systems Auditor", icon: <Award className="h-6 w-6" /> },
      { title: "CRISC", description: "Certified in Risk and Information Systems Control", icon: <Award className="h-6 w-6" /> },
      { title: "CEH", description: "Certified Ethical Hacker", icon: <Award className="h-6 w-6" /> },
      { title: "CompTIA Security+", description: "Foundation level security certification", icon: <Award className="h-6 w-6" /> },
      // Add PDF courses
      { 
        title: "Cyber Security Training Level 1 (CS-101)",
        description: "One Day Workshop providing an insight into cyberspace, digital networks, and emerging cybersecurity threats.",
        duration: "1 day",
        icon: <GraduationCap className="h-6 w-6" />
      },
      { 
        title: "Cyber Security Training Level 2 (CS-102)",
        description: "One Week program providing solid understanding of cybersecurity fundamentals, including GRC, OS security, and network basics.",
        duration: "1 week",
        icon: <BookOpen className="h-6 w-6" />
      },
      { 
        title: "Cyber Security Training Level 3 (CS-103)",
        description: "One Month program that equips participants with essential ethical hacking skills and hands-on experience.",
        duration: "1 month",
        icon: <Users className="h-6 w-6" />
      },
      { 
        title: "Advanced Cyber Security Certification (CS-104)",
        description: "Comprehensive six-month course designed for professionals looking to master advanced cybersecurity techniques.",
        duration: "6 months",
        icon: <Award className="h-6 w-6" />
      }
    ]
  },
  { 
    id: "government", 
    label: "For Government", 
    icon: <Building className="h-4 w-4 mr-1" />,
    courses: [
      { 
        title: "Cyber Security Training Level 1 (CS-101)",
        description: "One Day Workshop providing an insight into cyberspace, digital networks, and emerging cybersecurity threats.",
        duration: "1 day",
        icon: <GraduationCap className="h-6 w-6" />
      },
      { 
        title: "Cyber Security Training Level 2 (CS-102)",
        description: "One Week program providing solid understanding of cybersecurity fundamentals, including GRC, OS security, and network basics.",
        duration: "1 week",
        icon: <BookOpen className="h-6 w-6" />
      },
      { 
        title: "Cyber Security Training Level 3 (CS-103)",
        description: "One Month program that equips participants with essential ethical hacking skills and hands-on experience.",
        duration: "1 month",
        icon: <Users className="h-6 w-6" />
      },
      { 
        title: "Advanced Cyber Security Certification (CS-104)",
        description: "Comprehensive six-month course designed for professionals looking to master advanced cybersecurity techniques.",
        duration: "6 months",
        icon: <Award className="h-6 w-6" />
      }
    ]
  },
  { 
    id: "business", 
    label: "For Business", 
    icon: <Briefcase className="h-4 w-4 mr-1" />,
    courses: [
      { title: "CISSP", description: "Certified Information Systems Security Professional", duration: "12 weeks", icon: <Award className="h-6 w-6" /> },
      { title: "CISM", description: "Certified Information Security Manager", duration: "10 weeks", icon: <Award className="h-6 w-6" /> },
      { title: "CISA", description: "Certified Information Systems Auditor", duration: "10 weeks", icon: <Award className="h-6 w-6" /> },
      { title: "CRISC", description: "Certified in Risk and Information Systems Control", duration: "8 weeks", icon: <Award className="h-6 w-6" /> },
      { title: "CEH", description: "Certified Ethical Hacker", duration: "8 weeks", icon: <Award className="h-6 w-6" /> },
      { title: "CompTIA Security+", description: "Foundation level security certification", duration: "6 weeks", icon: <Award className="h-6 w-6" /> }
    ]
  },
  { 
    id: "academia", 
    label: "For Academia", 
    icon: <AcademiaIcon className="h-4 w-4 mr-1" />,
    courses: [
      { 
        title: "Cyber Security Training Level 1 (CS-101)",
        description: "One Day Workshop providing an insight into cyberspace, digital networks, and emerging cybersecurity threats.",
        duration: "1 day",
        icon: <GraduationCap className="h-6 w-6" />
      },
      { 
        title: "Cyber Security Training Level 2 (CS-102)",
        description: "One Week program providing solid understanding of cybersecurity fundamentals, including GRC, OS security, and network basics.",
        duration: "1 week",
        icon: <BookOpen className="h-6 w-6" />
      },
      { 
        title: "Cyber Security Training Level 3 (CS-103)",
        description: "One Month program that equips participants with essential ethical hacking skills and hands-on experience.",
        duration: "1 month",
        icon: <Users className="h-6 w-6" />
      },
      { 
        title: "Advanced Cyber Security Certification (CS-104)",
        description: "Comprehensive six-month course designed for professionals looking to master advanced cybersecurity techniques.",
        duration: "6 months",
        icon: <Award className="h-6 w-6" />
      }
    ]
  },
  { 
    id: "individual", 
    label: "For Individual", 
    icon: <User className="h-4 w-4 mr-1" />,
    courses: [
      { title: "CISSP", description: "Certified Information Systems Security Professional", duration: "12 weeks", icon: <Award className="h-6 w-6" /> },
      { title: "CISM", description: "Certified Information Security Manager", duration: "10 weeks", icon: <Award className="h-6 w-6" /> },
      { title: "CISA", description: "Certified Information Systems Auditor", duration: "10 weeks", icon: <Award className="h-6 w-6" /> },
      { title: "CRISC", description: "Certified in Risk and Information Systems Control", duration: "8 weeks", icon: <Award className="h-6 w-6" /> },
      { title: "CEH", description: "Certified Ethical Hacker", duration: "8 weeks", icon: <Award className="h-6 w-6" /> },
      { title: "CompTIA Security+", description: "Foundation level security certification", duration: "6 weeks", icon: <Award className="h-6 w-6" /> }
    ]
  }
]


// Training platforms based on sketch
const platforms = [
  {
    name: "LMS",
    description: "Our flagship training platform with hands-on labs and guided exercises",
    logo: "/placeholder.svg?height=60&width=60"
  },
  {
    name: "Cyber Range",
    description: "Realistic training environment for simulating attacks and defenses",
    logo: "/placeholder.svg?height=60&width=60"
  },
  {
    name: "Cyber Labs",
    description: "Specialized lab environment for deep technical training and experimentation",
    logo: "/placeholder.svg?height=60&width=60"
  }
]

// New trainers section as per sketch
const trainers = [
  {
    name: "Dr. Sarah Johnson",
    title: "Chief Instructor",
    experience: "18+ years of experience",
    expertise: ["Malware Analysis", "Digital Forensics", "Incident Response"],
    image: "/placeholder.svg?height=150&width=150",
    courses: 10
  },
  {
    name: "Mark Reynolds",
    title: "Senior Security Architect",
    experience: "13+ years of experience",
    expertise: ["Cloud Security", "DevSecOps", "Secure Architecture"],
    image: "/placeholder.svg?height=150&width=150",
    courses: 15
  },
  {
    name: "Jennifer Lee",
    title: "Penetration Testing Expert",
    experience: "7+ years of experience",
    expertise: ["Web App Security", "Network Penetration", "Vulnerability Assessment"],
    image: "/placeholder.svg?height=150&width=150",
    courses: 20
  }
]

const GridBackground = () => (
  <div className="absolute inset-0">
    {/* Enhanced grid background with finer lines, glow nodes and subtle animation */}
    <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] overflow-hidden">
      {/* Grid node glow effects */}
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

      {/* Grid line trace effects */}
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
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_50%)]" />
  </div>
);

export default function Training() {
  const [scrollY, setScrollY] = useState(0)
  const [isCounterStarted, setIsCounterStarted] = useState(false)
  const [counterValues, setCounterValues] = useState({})
  const [hoveredCourse, setHoveredCourse] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("all")
  
  // Refs for animations
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const gridRef = useRef(null)
  const partnerRef = useRef(null)
  const coursesRef = useRef(null)
  const platformsRef = useRef(null)
  const trainersRef = useRef(null)
  const benefitsRef = useRef(null)
  const ctaRef = useRef(null)
  const courseCardsRef = useRef([])
  const benefitItemsRef = useRef([])
  const platformCardsRef = useRef([])
  const trainerCardsRef = useRef([])
  
  // Refs for intersection observer animations
  const sectionRefs = useRef([])
  const [showAllCourses, setShowAllCourses] = useState(false)

  
  // Add to course refs
  const addToCourseRefs = (el, index) => {
    if (el) {
      courseCardsRef.current[index] = el
    }
  }
  
  // Add to benefit refs
  const addToBenefitRefs = (el, index) => {
    if (el) {
      benefitItemsRef.current[index] = el
    }
  }

  // Add to platform refs
  const addToPlatformRefs = (el, index) => {
    if (el) {
      platformCardsRef.current[index] = el
    }
  }

  // Add to trainer refs
  const addToTrainerRefs = (el, index) => {
    if (el) {
      trainerCardsRef.current[index] = el
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
          // For ratings, show one decimal place
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
    // Skip on server-side rendering
    if (typeof window === 'undefined') return
    
    // Safety check for GSAP
    if (!gsap || !ScrollTrigger) {
      console.warn("GSAP or ScrollTrigger not available")
      return
    }
    
    try {
      // Create a GSAP context
      const ctx = gsap.context(() => {
        // Enhanced grid background animation
        if (gridRef.current) {
          gsap.to(gridRef.current, {
            backgroundSize: "30px 30px",
            opacity: 0.7,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom center",
              scrub: 0.5
            }
          })
        }
        
        // Animate hero section
        const heroTimeline = gsap.timeline()
        heroTimeline.from(".hero-badge", {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(1.7)"
        })
        .from(".hero-title", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.3")
        .from(".hero-description", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.4")
        .from(".hero-button", {
          y: 20,
          opacity: 0,
          duration: 0.4,
          ease: "power1.out"
        }, "-=0.2")

        // Animate category filters
        // gsap.from(".category-filter", {
        //   y: 20,
        //   opacity: 0,
        //   duration: 0.4,
        //   stagger: 0.1,
        //   ease: "power1.out",
        //   scrollTrigger: {
        //     trigger: coursesRef.current,
        //     start: "top 80%"
        //   }
        // })
        
        // Animate floating elements
        const particles = document.querySelectorAll('.floating-particle')
        particles.forEach((particle, i) => {
          gsap.to(particle, {
            y: "random(-15, 15)",
            x: "random(-15, 15)",
            duration: "random(3, 6)",
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: i * 0.2
          })
        })
        
        // Gradient orbs parallax
        gsap.to(".parallax-slow", {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5
          }
        })
        
        gsap.to(".parallax-fast", {
          y: -120,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5
          }
        })
        
        // Partner section animation
        ScrollTrigger.create({
          trigger: partnerRef.current,
          start: "top 100%",
          onEnter: () => {
            gsap.fromTo(".partner-title", 
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }
            )
            
            gsap.fromTo(".partner-description", 
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, delay: 0.2, ease: "power2.out" }
            )
            
            gsap.fromTo(".partner-logo", 
              { scale: 0.8, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.8, delay: 0.3, ease: "back.out(1.7)" }
            )
          },
          once: true
        })
        
        // Courses section animation
        ScrollTrigger.create({
          trigger: coursesRef.current,
          start: "top 90%",
          onEnter: () => {
            gsap.fromTo(".courses-title", 
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }
            )
            
            gsap.fromTo(".courses-description", 
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, delay: 0.2, ease: "power2.out" }
            )
            
            // Staggered animation for course cards
            courseCardsRef.current.forEach((card, index) => {
              if (!card) return
              
              gsap.fromTo(card,
                { y: 50, opacity: 0 },
                { 
                  y: 0, 
                  opacity: 1, 
                  duration: 0.7,
                  delay: 0.01 + (index * 0.15),
                  ease: "power2.out",
                  onComplete: () => {
                    if (index === 0 && !isCounterStarted) {
                      setIsCounterStarted(true)
                      courses.forEach((course, i) => {
                        setTimeout(() => {
                          animateCounter(course.stat, `course-${i}`)
                        }, i * 200)
                      })
                    }
                  }
                }
              )
            })
          },
          once: true
        })

        // Platforms section animation
        ScrollTrigger.create({
          trigger: platformsRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.fromTo(".platforms-title", 
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }
            )
            
            gsap.fromTo(".platforms-description", 
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, delay: 0.2, ease: "power2.out" }
            )
            
            // Staggered animation for platform cards
            platformCardsRef.current.forEach((card, index) => {
              if (!card) return
              
              gsap.fromTo(card,
                { y: 50, opacity: 0 },
                { 
                  y: 0, 
                  opacity: 1, 
                  duration: 0.7,
                  delay: 0.01 + (index * 0.15),
                  ease: "power2.out"
                }
              )
            })
          },
          once: true
        })

        // Trainers section animation
        ScrollTrigger.create({
          trigger: trainersRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.fromTo(".trainers-title", 
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }
            )
            
            gsap.fromTo(".trainers-description", 
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, delay: 0.2, ease: "power2.out" }
            )
            
            // Staggered animation for trainer cards
            trainerCardsRef.current.forEach((card, index) => {
              if (!card) return
              
              gsap.fromTo(card,
                { y: 50, opacity: 0 },
                { 
                  y: 0, 
                  opacity: 1, 
                  duration: 0.7,
                  delay: 0.01 + (index * 0.15),
                  ease: "power2.out"
                }
              )
            })
          },
          once: true
        })
        
        // Benefits section animation
        ScrollTrigger.create({
          trigger: benefitsRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.fromTo(".benefits-title", 
              { x: -50, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.7, ease: "power2.out" }
            )
            
            gsap.fromTo(".benefits-description", 
              { x: -50, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.7, delay: 0.2, ease: "power2.out" }
            )
            
            // Staggered animation for benefit items
            benefitItemsRef.current.forEach((item, index) => {
              if (!item) return
              
              gsap.fromTo(item,
                { x: -30, opacity: 0 },
                { 
                  x: 0, 
                  opacity: 1, 
                  duration: 0.5,
                  delay: 0.3 + (index * 0.1),
                  ease: "power2.out"
                }
              )
            })
            
            gsap.fromTo(".benefits-button", 
              { x: -30, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.5, delay: 0.8, ease: "power2.out" }
            )
            
            // Image animation
            gsap.fromTo(".benefits-image", 
              { scale: 0.9, opacity: 0.5 },
              { scale: 1, opacity: 1, duration: 1, delay: 0.4, ease: "power2.out" }
            )
          },
          once: true
        })
        
        // Image parallax effect on scroll
        ScrollTrigger.create({
          trigger: benefitsRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress
            gsap.to(".benefits-image", {
              y: progress * 40,
              rotationY: progress * 5,
              duration: 0,
              ease: "none"
            })
          }
        })
        
        // CTA section animation
        ScrollTrigger.create({
          trigger: ctaRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.fromTo(".cta-title", 
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }
            )
            
            gsap.fromTo(".cta-description", 
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, delay: 0.2, ease: "power2.out" }
            )
            
            gsap.fromTo(".cta-buttons", 
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, delay: 0.4, ease: "power2.out" }
            )
            
            gsap.fromTo(".cta-card", 
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8, delay: 0.6, ease: "back.out(1.7)" }
            )
          },
          once: true
        })
        
        // Animated glow effect for the CTA card
        gsap.to(".cta-glow", {
          opacity: 0.8,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        })
      }, containerRef)
      
      return () => ctx.revert() // Clean up animations
    } catch (error) {
      console.error("Error setting up GSAP animations:", error)
    }
  }, [isCounterStarted])

  useEffect(() => {
    // Intersection Observer for legacy animation support
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // Observe all sections
    sectionRefs.current.forEach(section => {
      if (section) sectionObserver.observe(section)
    })
    
    // Handle scroll for parallax effects
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      sectionRefs.current.forEach(section => {
        if (section) sectionObserver.unobserve(section)
      })
      
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Function to add refs to our ref array
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el)
    }
  }

  return (
    <main className="flex-1" ref={containerRef}>
      {/* NextJS-style background animation */}
      <NextjsBackground />
      <div className="flex flex-col min-h-screen">
        {/* Hero Section with Enhanced Visual Elements */}
        <section 
          ref={heroRef}
          className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900"
        >
          {/* Enhanced grid background with finer lines, glow nodes and subtle animation */}
          <div 
            ref={gridRef}
            className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] overflow-hidden"
          >
            {/* Grid node glow effects */}
            <div className="grid-node absolute h-2 w-2 rounded-full bg-blue-500 blur-[3px] opacity-0 top-[20%] left-[40%] animate-grid-node-blink" style={{animationDelay: '0.5s'}}></div>
            <div className="grid-node absolute h-2 w-2 rounded-full bg-purple-500 blur-[3px] opacity-0 top-[40%] left-[25%] animate-grid-node-blink" style={{animationDelay: '1.2s'}}></div>
            <div className="grid-node absolute h-2 w-2 rounded-full bg-teal-500 blur-[3px] opacity-0 top-[70%] left-[60%] animate-grid-node-blink" style={{animationDelay: '2.7s'}}></div>
            <div className="grid-node absolute h-2 w-2 rounded-full bg-cyan-500 blur-[3px] opacity-0 top-[30%] left-[80%] animate-grid-node-blink" style={{animationDelay: '1.8s'}}></div>
            <div className="grid-node absolute h-2 w-2 rounded-full bg-indigo-500 blur-[3px] opacity-0 top-[60%] left-[35%] animate-grid-node-blink" style={{animationDelay: '3.5s'}}></div>
            
            {/* Grid line trace effects */}
            <div className="grid-trace absolute h-[1px] w-[200px] bg-gradient-to-r from-blue-500/0 via-blue-500/70 to-blue-500/0 top-[20%] left-[40%] animate-grid-trace-horizontal" style={{animationDelay: '0.5s'}}></div>
            <div className="grid-trace absolute h-[200px] w-[1px] bg-gradient-to-b from-purple-500/0 via-purple-500/70 to-purple-500/0 top-[40%] left-[25%] animate-grid-trace-vertical" style={{animationDelay: '1.2s'}}></div>
            <div className="grid-trace absolute h-[1px] w-[150px] bg-gradient-to-r from-teal-500/0 via-teal-500/70 to-teal-500/0 top-[70%] left-[60%] animate-grid-trace-horizontal" style={{animationDelay: '2.7s'}}></div>
            <div className="grid-trace absolute h-[1px] w-[120px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/70 to-cyan-500/0 top-[30%] left-[80%] animate-grid-trace-horizontal" style={{animationDelay: '1.8s'}}></div>
            <div className="grid-trace absolute h-[120px] w-[1px] bg-gradient-to-b from-indigo-500/0 via-indigo-500/70 to-indigo-500/0 top-[60%] left-[35%] animate-grid-trace-vertical" style={{animationDelay: '3.5s'}}></div>
            
            {/* Neon intersection highlights */}
            <div className="grid-intersection absolute h-3 w-3 rounded-full bg-blue-500/20 blur-[5px] top-[24%] left-[48%] animate-grid-intersection-pulse" style={{animationDelay: '4.5s'}}></div>
            <div className="grid-intersection absolute h-3 w-3 rounded-full bg-purple-500/20 blur-[5px] top-[36%] left-[60%] animate-grid-intersection-pulse" style={{animationDelay: '2.3s'}}></div>
            <div className="grid-intersection absolute h-3 w-3 rounded-full bg-teal-500/20 blur-[5px] top-[56%] left-[32%] animate-grid-intersection-pulse" style={{animationDelay: '6.2s'}}></div>
          </div>
          
          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_50%)]" />
          
          {/* Enhanced animated background elements with more variety */}
          <div className="absolute -z-10 top-0 left-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl parallax-slow"></div>
          <div className="absolute -z-10 bottom-0 right-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-500/10 to-green-500/10 blur-3xl parallax-fast"></div>
          <div className="absolute -z-10 top-1/4 right-1/3 w-80 h-80 rounded-full bg-gradient-to-tr from-pink-500/10 to-violet-500/10 blur-3xl parallax-medium"></div>
          
          {/* Enhanced animated particles with more variety */}
          <div className="absolute -z-10 inset-0">
            {/* Original particles */}
            <div className="floating-particle absolute top-1/4 left-1/5 size-2 rounded-full bg-blue-500/30"></div>
            <div className="floating-particle absolute top-3/4 left-2/3 size-3 rounded-full bg-purple-500/30"></div>
            <div className="floating-particle absolute top-1/3 left-3/4 size-2 rounded-full bg-green-500/30"></div>
            <div className="floating-particle absolute top-2/3 left-1/4 size-2 rounded-full bg-yellow-500/30"></div>
            <div className="floating-particle absolute top-1/2 left-1/2 size-1 rounded-full bg-red-500/30"></div>
            
            {/* Additional particles with different sizes and colors */}
            <div className="floating-particle-slow absolute top-1/6 left-2/5 size-1 rounded-full bg-teal-500/40"></div>
            <div className="floating-particle-slow absolute top-4/5 left-1/6 size-3 rounded-full bg-indigo-500/20"></div>
            <div className="floating-particle-slow absolute top-1/5 left-4/5 size-2 rounded-full bg-amber-500/30"></div>
            <div className="floating-particle-fast absolute top-3/5 left-3/5 size-1 rounded-full bg-pink-500/30"></div>
            <div className="floating-particle-fast absolute top-2/5 left-1/3 size-2 rounded-full bg-cyan-500/20"></div>
          </div>
          
          {/* Subtle animated lines */}
          <div className="absolute -z-10 inset-0 overflow-hidden opacity-30">
            <div className="animate-pulse-slow absolute top-[10%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            <div className="animate-pulse-slow absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" style={{animationDelay: '1s'}}></div>
            <div className="animate-pulse-slow absolute top-[70%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" style={{animationDelay: '2s'}}></div>
            
            <div className="animate-pulse-slow absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" style={{animationDelay: '0.5s'}}></div>
            <div className="animate-pulse-slow absolute top-0 left-[80%] w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          {/* Digital circuit-like pattern overlay */}
          <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M20 20 L80 20 L80 80 L20 80 Z" fill="none" stroke="white" strokeWidth="0.5" />
                  <path d="M50 0 L50 20 M0 50 L20 50 M80 50 L100 50 M50 80 L50 100" fill="none" stroke="white" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="3" fill="white" />
                  <circle cx="20" cy="20" r="2" fill="white" />
                  <circle cx="80" cy="20" r="2" fill="white" />
                  <circle cx="20" cy="80" r="2" fill="white" />
                  <circle cx="80" cy="80" r="2" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit-pattern)" className="animate-pulse-very-slow" />
            </svg>
          </div>
          
          {/* Subtle diagonal lines overlay */}
          <div className="absolute inset-0 -z-10 opacity-5 pointer-events-none bg-[linear-gradient(45deg,transparent_44%,#ffffff_47%,#ffffff_53%,transparent_56%)] bg-[length:20px_20px]"></div>
          
          {/* Scan line effect */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="scan-line w-full h-[2px] bg-blue-500/10 animate-scan-line"></div>
          </div>
          
          <div className="container relative px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="space-y-4 max-w-[600px]">
                <div className="overflow-hidden">
                  <div className="hero-badge inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-primary text-sm font-medium">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Professional Training
                  </div>
                </div>
                <div className="overflow-hidden">
                  <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-600 dark:from-gray-100 dark:to-gray-600">
                    Cyber Security Training
                  </h1>
                </div>
                <div className="overflow-hidden">
                  <p className="hero-description text-xl text-muted-foreground">
                    A comprehensive cyber security training framework for all needs at all levels.
                  </p>
                </div>
              </div>
              <div className="hero-button">
                <Button size="lg" className="relative group h-12 px-8 text-base transition-all duration-300 hover:scale-105">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                  <span className="relative z-10 flex items-center">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>
            </div>

            {/* Key metrics with enhanced animations */}
            <div className="mt-16 grid grid-cols-3 gap-8">
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200/10 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-x-full bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent group-hover:animate-slide-right-infinite"></div>
                <div className="text-4xl font-bold text-gray-100 mb-1 relative">
                  <span className="animate-pulse-slow inline-block">2000+</span>
                  <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </div>
                <div className="text-gray-500 dark:text-gray-400">Learners</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200/10 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-x-full bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent group-hover:animate-slide-right-infinite" style={{animationDelay: '0.2s'}}></div>
                <div className="text-4xl font-bold text-gray-100 mb-1 relative">
                  <span className="animate-pulse-slow inline-block" style={{animationDelay: '0.3s'}}>10+</span>
                  <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </div>
                <div className="text-gray-500 dark:text-gray-400">Countries</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200/10 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-x-full bottom-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent group-hover:animate-slide-right-infinite" style={{animationDelay: '0.4s'}}></div>
                <div className="text-4xl font-bold text-gray-100 mb-1 relative">
                  <span className="animate-pulse-slow inline-block" style={{animationDelay: '0.6s'}}>10+</span>
                  <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </div>
                <div className="text-gray-500 dark:text-gray-400">Organizations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filters Based on Sketch */}
        <section className="w-full py-12 md:py-16 bg-gray-900 relative overflow-hidden">
          <GridBackground />
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl text-gray-100 font-semibold mb-6">Select Your Needs</h3>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categoryFilters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={selectedCategory === filter.id ? "default" : "outline"}
                    className={`category-filter relative group flex items-center px-4 py-2 ${selectedCategory === filter.id ? 'bg-primary text-white' : ''}`}
                    onClick={() => {
                      setSelectedCategory(filter.id)
                      setShowAllCourses(false) // Reset when changing category
                    }}
                  >
                    <div className={`absolute -inset-1 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 rounded-lg blur opacity-0 ${selectedCategory === filter.id ? 'opacity-75' : ''} group-hover:opacity-75 transition duration-700`}></div>
                    <span className="relative z-10 flex items-center">
                      {filter.icon}
                      {filter.label}
                    </span>
                  </Button>
                ))}
              </div>
              
              {/* Display courses for selected category */}
              {categoryFilters.find(f => f.id === selectedCategory)?.courses && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Only display first 6 courses by default */}
                    {(showAllCourses 
                      ? categoryFilters.find(f => f.id === selectedCategory).courses 
                      : categoryFilters.find(f => f.id === selectedCategory).courses.slice(0, 6)
                    ).map((course, index) => (
                      <div 
                        key={`${selectedCategory}-${index}`}
                        className="relative group bg-card p-6 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                      >
                        {/* Card content remains the same */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Border animation */}
                        <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-500/30 transition-all duration-700"></div>
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/60 to-purple-500/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/60 to-blue-500/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right"></div>
                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/60 to-purple-500/60 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/60 to-blue-500/60 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-bottom"></div>
                        
                        <div className="relative z-10 flex flex-col h-full">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="text-gray-100 p-3 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-gray-100 dark:group-hover:bg-gray-600 group-hover:scale-110 transition-all duration-500">
                              {course.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">{course.title}</h3>
                          </div>
                          
                          <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
                          
                          {course.duration && (
                            <div className="text-sm text-muted-foreground mb-4">
                              <span className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-slow" />
                                Duration: {course.duration}
                              </span>
                            </div>
                          )}
                        </div>
                        
                        {/* Animated corner decoration */}
                        <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full transform rotate-45 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                        <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-primary/10 rounded-full transform rotate-45 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* View All Courses button - only show if there are more than 6 courses */}
                  {categoryFilters.find(f => f.id === selectedCategory).courses.length > 6 && (
                    <div className="mt-10">
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="relative group"
                        onClick={() => setShowAllCourses(!showAllCourses)}
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                        <span className="relative z-10 flex items-center">
                          {showAllCourses ? "Show Less" : "View All Courses"}
                          {!showAllCourses && <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />}
                        </span>
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </section>


        {/* Partner Section */}
        <section ref={partnerRef} className="w-full py-12 md:py-24 bg-gray-900 relative overflow-hidden">
          <GridBackground />
          <div className="container px-4 md:px-6 max-w-[1000px] mx-auto">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="space-y-4">
                <div className="overflow-hidden">
                  <h2 className="partner-title text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">Our Knowledge Partners</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-auto">
                  {/* IIT Madras */}
                  {/* <div className="partner-logo relative group h-[200px] w-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-purple-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                    <div className="relative z-10 flex items-center justify-center h-full w-full p-8 bg-gray-800 rounded-xl shadow-lg border border-gray-700 transform hover:scale-[1.01] transition-all duration-500">
                      <img
                        alt="IIT Madras Logo"
                        loading="lazy"
                        width="300"
                        height="100"
                        decoding="async"
                        className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                        src={IITMadrasLogo}
                      />
                    </div>
                  </div> */}
                  
                  {/* IIT Pravartak */}
                  {/* <div className="partner-logo relative group h-[200px] w-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-cyan-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                    <div className="relative z-10 flex items-center justify-center h-full w-full p-8 bg-gray-800 rounded-xl shadow-lg border border-gray-700 transform hover:scale-[1.01] transition-all duration-500">
                      <img
                        alt="IIT Pravartak Logo"
                        loading="lazy"
                        width="300"
                        height="100"
                        decoding="async"
                        className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                        src={IITPravartakLogo}
                      />
                    </div>
                  </div> */}
                  
                  {/* EC Council */}
                  <div className="partner-logo relative group h-[200px] w-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500/50 to-emerald-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                    <div className="relative z-10 flex items-center justify-center h-full w-full p-8 bg-gray-800 rounded-xl shadow-lg border border-gray-700 transform hover:scale-[1.01] transition-all duration-500">
                      <img
                        alt="EC Council Logo"
                        loading="lazy"
                        width="300"
                        height="100"
                        decoding="async"
                        className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                        src={ECCouncilLogo}
                      />
                    </div>
                  </div>
                  
                  {/* CompTIA */}
                  <div className="partner-logo relative group h-[200px] w-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/50 to-orange-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                    <div className="relative z-10 flex items-center justify-center h-full w-full p-8 bg-gray-800 rounded-xl shadow-lg border border-gray-700 transform hover:scale-[1.01] transition-all duration-500">
                      <img
                        alt="CompTIA Logo"
                        loading="lazy"
                        width="300"
                        height="100"
                        decoding="async"
                        className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                        src={CompTIALogo}
                      />
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <p className="partner-description text-xl text-muted-foreground max-w-[800px] mx-auto">
                    Our esteemed knowledge partners bring world-class expertise and research to our cybersecurity training programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Platforms Section - Updated with Logo */}
        <section ref={platformsRef} className="w-full py-12 md:py-24 bg-gray-900 relative overflow-hidden">
          <GridBackground />
          
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <div className="overflow-hidden">
                <h2 className="platforms-title text-3xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">Technology Enabled Platform</h2>
              </div>
              <div className="overflow-hidden">
                <p className="platforms-description text-xl text-muted-foreground max-w-[800px] mx-auto">
                  A powerful technology enabled platform for practical industry relevant training
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Cyber Guardian Learning Experience Cloud - Updated with logo */}
              <div
                className="relative group bg-gray-900 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <div className="w-50 h-80 mb-2 flex items-center justify-center">
                    <img
                      src={CyberGuardianLogo}
                      alt="Cyber Guardian Logo"
                      className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-gray-100">LMS</h3>
                  <p className="text-gray-100 text-sm">Deploy scalable, cyber security modules via a secure LMS platform</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Cyber Range */}
              <div
                className="relative group bg-gray-900 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <div className="w-50 h-50 mb-2 flex items-center justify-center">
                    <img
                      src={CyberRangeLogo}
                      alt="Cyber Range"
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-gray-100">Cyber Range</h3>
                  <p className="text-gray-100 text-sm">Realistic training environment for simulating attacks and defenses</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Cyber Labs */}
              <div
                className="relative group bg-gray-900 p-6 rounded-xl border border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <div className="w-50 h-80 mb-2 flex items-center justify-center">
                    <img
                      src={CyberLabsLogo}
                      alt="Cyber Labs"
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-gray-100">Cyber Labs</h3>
                  <p className="text-gray-100 text-sm">Specialized lab environment for deep technical training and experimentation</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Trainers Section - Updated with aggregate statistics */}
        <section ref={trainersRef} className="w-full py-12 md:py-24 bg-gray-900 relative overflow-hidden">
          <GridBackground />
          
          <div className="container px-4 md:px-6 max-w-[1500px] mx-auto">
            <div className="text-center mb-12">
              <div className="overflow-hidden">
                <h2 className="trainers-title text-3xl font-bold tracking-tighter mb-4 text-gray-100">Expert Training Team</h2>
              </div>
              <div className="overflow-hidden">
                <p className="trainers-description text-gray-100 text-muted-foreground max-w-[700px] mx-auto">
                  Learn from our experienced team of cybersecurity professionals
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Senior Experts */}
              <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 z-0"></div>
                <div className="relative z-10 p-8 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center mb-6 border-4 border-gray-700 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <GraduationCap className="h-10 w-10 text-gray-100" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-100">Senior Experts</h3>
                  <div className="text-4xl font-bold text-gray-100 mb-3">10+</div>
                  <p className="text-gray-100 text-lg mb-1">Individuals with</p>
                  <p className="text-gray-100 text-lg font-semibold mb-4">18+ Years of Experience</p>
                </div>
              </div>
              
              {/* Mid-Level Experts */}
              <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 z-0"></div>
                <div className="relative z-10 p-8 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center mb-6 border-4 border-gray-700 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Building className="h-10 w-10 text-gray-100" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-100">Mid-Level Experts</h3>
                  <div className="text-4xl font-bold text-gray-100 mb-3">15+</div>
                  <p className="text-gray-100 text-lg mb-1">Individuals with</p>
                  <p className="text-gray-100 text-lg font-semibold mb-4">13+ Years of Experience</p>          
                </div>
              </div>
              
              {/* Junior Experts */}
              <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 z-0"></div>
                <div className="relative z-10 p-8 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center mb-6 border-4 border-gray-700 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Users className="h-10 w-10 text-gray-100" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-100">Specialized Experts</h3>
                  <div className="text-4xl font-bold text-gray-100 mb-3">20+</div>
                  <p className="text-gray-100 text-lg mb-1">Individuals with</p>
                  <p className="text-gray-100 text-lg font-semibold mb-4">7+ Years of Experience</p>
                </div>
              </div>
            </div>
            
            {/* Additional statistics row */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg flex flex-col items-center text-center group hover:bg-gray-800/70 transition-all duration-300">
                <div className="text-2xl font-bold text-gray-100 mb-1 group-hover:scale-110 transition-transform duration-300">45+</div>
                <div className="text-sm text-gray-100">Total Trainers</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg flex flex-col items-center text-center group hover:bg-gray-800/70 transition-all duration-300">
                <div className="text-2xl font-bold text-gray-100 mb-1 group-hover:scale-110 transition-transform duration-300">12+</div>
                <div className="text-sm text-gray-100">Industry Domains</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg flex flex-col items-center text-center group hover:bg-gray-800/70 transition-all duration-300">
                <div className="text-2xl font-bold text-gray-100 mb-1 group-hover:scale-110 transition-transform duration-300">30+</div>
                <div className="text-sm text-gray-100">Certifications</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg flex flex-col items-center text-center group hover:bg-gray-800/70 transition-all duration-300">
                <div className="text-2xl font-bold text-gray-100 mb-1 group-hover:scale-110 transition-transform duration-300">20K+</div>
                <div className="text-sm text-gray-100">Training Hours</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className="w-full py-12 md:py-24 bg-gray-900 relative overflow-hidden">
          <GridBackground />
          
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="overflow-hidden">
                  <h2 className="benefits-title text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-600 dark:from-gray-100 dark:to-gray-400">Why Choose Our Training?</h2>
                </div>
                <div className="overflow-hidden">
                  <p className="benefits-description text-xl text-muted-foreground">
                    Our training programs are designed to provide you with the skills and knowledge you need to succeed in the cyber security industry.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index} 
                      ref={(el) => addToBenefitRefs(el, index)}
                      className="benefit-item flex items-start gap-2 text-gray-500 text-sm"
                    > 
                      <CheckCircle className="h-5 w-5 text-gray-100 mt-0.5" style={{animationDelay: `${index * 0.2}s`}} />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 overflow-hidden">
                  {/* <Button className="benefits-button relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/50 to-emerald-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                    <span className="relative z-10 flex items-center">
                      View All Benefits <ArrowRight className="ml-2 h-4 w-4 text-gray-100 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button> */}
                </div>
              </div>
              <div className="benefits-image relative aspect-square rounded-2xl overflow-hidden shadow-xl group">
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/30 to-red-500/30 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                <img
                  alt="Cyber Security Training"
                  loading="lazy"
                  decoding="async"
                  className="relative z-10 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  src={CyberSecurityTraining}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-white text-xl font-bold mb-2">Industry-Leading Instructors</div>
                    <p className="text-gray-300 text-sm mb-4">Learn from experts with years of real-world experience</p>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div key={star} className="w-5 h-5 text-yellow-500">★</div>
                      ))}
                      <span className="ml-2 text-white">(320+ reviews)</span>
                    </div>
                  </div>
                </div>
                
                {/* Interactive graphic elements overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 right-4 size-20 border-2 border-white/20 rounded-full"></div>
                  <div className="absolute bottom-[40%] left-[20%] size-6 border border-white/40 rounded-full"></div>
                  <div className="absolute top-[30%] right-[30%] size-4 border border-white/30 rounded-full"></div>
                  <svg className="absolute bottom-0 left-0 w-full h-1/3 text-white/10" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path fill="currentColor" d="M0,70 Q50,40 100,70 L100,100 L0,100 Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section 
          ref={ctaRef}
          className="w-full py-12 md:py-24 bg-gray-900 relative overflow-hidden"
        >
          <div className="absolute -z-10 top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/30 to-purple-500/30 blur-3xl cta-glow"></div>
          
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="overflow-hidden">
                <h2 className="cta-title text-3xl font-bold tracking-tighter text-gray-100">Ready to Start Your Journey?</h2>
              </div>
              <div className="overflow-hidden max-w-[600px]">
                <p className="cta-description text-xl text-gray-100 text-muted-foreground">
                  Join our comprehensive training programs and become a certified cyber security professional. Enhance your skills and advance your career.
                </p>
              </div>
              <div className="cta-buttons flex flex-wrap gap-4 justify-center mt-6">
                <Button 
                  size="lg" 
                  className="relative group h-12 px-8 text-base transition-all duration-300 hover:scale-105 bg-white text-gray-900 hover:bg-gray-100"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                  <span className="relative z-10 flex items-center">
                    Enquire Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* CSS for animations */}
      <style>{`
        .animate-in {
          animation: animateIn 0.8s ease forwards;
        }
        
        @keyframes animateIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 6s ease-in-out 2s infinite;
        }
        
        .animate-float-reverse {
          animation: float 6s ease-in-out infinite reverse;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        
        .animate-bounce-subtle {
          animation: bounceTiny 2s infinite;
        }
        
        @keyframes bounceTiny {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          transform: translateY(100%);
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .animate-slide-up-delayed {
          transform: translateY(100%);
          animation: slideUp 0.8s ease-out 0.2s forwards;
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .animate-slide-right {
          transform: translateX(-100%);
          animation: slideRight 0.8s ease-out forwards;
        }
        
        .animate-slide-right-delayed {
          transform: translateX(-100%);
          animation: slideRight 0.8s ease-out 0.2s forwards;
        }
        
        .animate-slide-right-delayed-more {
          transform: translateX(-100%);
          animation: slideRight 0.8s ease-out 0.4s forwards;
        }
        
        @keyframes slideRight {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        .feature-active {
          animation: featureActive 0.5s ease forwards;
        }
        
        @keyframes featureActive {
          from {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
          to {
            box-shadow: 0 0 20px 2px rgba(59, 130, 246, 0.3);
          }
        }
        
        /* New enhanced animations */
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          animation: shimmer 2s infinite;
        }
        
        @keyframes ripple {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-ripple::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: inherit;
          border: 2px solid currentColor;
          animation: ripple 1.5s cubic-bezier(0, 0.5, 0.5, 1) infinite;
        }

        @keyframes slide-right-infinite {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-slide-right-infinite {
          animation: slide-right-infinite 3s linear infinite;
        }
        
        @keyframes scan-line {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
        
        .animate-scan-line {
          animation: scan-line 10s linear infinite;
        }
        
        .floating-particle-slow {
          animation: float 8s ease-in-out infinite;
        }
        
        .floating-particle-fast {
          animation: float 4s ease-in-out infinite;
        }
        
        .parallax-medium {
          will-change: transform;
        }
        
        .animate-pulse-very-slow {
          animation: pulse-very-slow 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse-very-slow {
          0%, 100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.15;
          }
        }
        
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