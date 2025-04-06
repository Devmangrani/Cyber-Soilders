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
  Send
} from "lucide-react"

const services = [
  {
    title: "Penetration Testing",
    rate: "$150-200/hr",
    duration: "1-2 weeks",
    expertise: "Advanced",
    description: "Expert penetration testing services to identify vulnerabilities in your systems.",
    icon: <Target className="h-6 w-6" />
  },
  {
    title: "Security Consulting",
    rate: "$175-250/hr",
    duration: "Ongoing",
    expertise: "Expert",
    description: "Strategic security consulting to strengthen your organization's security posture.",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Incident Response",
    rate: "$200-300/hr",
    duration: "As needed",
    expertise: "Advanced",
    description: "24/7 incident response services to handle security breaches and threats.",
    icon: <Zap className="h-6 w-6" />
  },
  {
    title: "Security Training",
    rate: "$1,500/day",
    duration: "Custom",
    expertise: "All levels",
    description: "Customized security training programs for your team.",
    icon: <GraduationCap className="h-6 w-6" />
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

export default function Hire() {
  const [scrollY, setScrollY] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  })
  const sectionRefs = useRef([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    sectionRefs.current.forEach(section => {
      if (section) observer.observe(section)
    })

    return () => {
      sectionRefs.current.forEach(section => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulated delay
    setIsSubmitting(false)
    setFormData({ name: "", email: "", company: "", service: "", message: "" })
  }

  return (
    <main className="flex-1">
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-800 dark:from-gray-900 to-transparent"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="container relative z-10 px-4 md:px-6 max-w-[1200px] mx-auto"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm"
              >
                <Briefcase className="mr-2 h-4 w-4" />
                Hire Security Experts
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white"
              >
                Elite Cybersecurity Services
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-blue-100 max-w-[600px]"
              >
                Access top-tier cybersecurity talent and services to protect your organization.
              </motion.p>
            </div>
          </motion.div>

          {/* Animated background elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -z-10 top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -z-10 bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-gradient-to-tr from-green-500/20 to-blue-500/20 blur-3xl"
          />
        </motion.section>

        {/* Services Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900"
        >
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="grid gap-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">Our Services</h2>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose from our comprehensive range of cybersecurity services
                </p>
              </div>
              
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative overflow-hidden rounded-lg border bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-blue-600 dark:text-blue-400 p-3 rounded-full w-14 h-14 bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                            {service.duration}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                            {service.expertise}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mt-4">{service.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-blue-600 dark:text-blue-400 font-medium">{service.rate}</span>
                      <Button variant="outline" className="text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                        Learn More <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900"
        >
          <div className="container px-4 md:px-6 max-w-[800px] mx-auto">
            <div className="flex flex-col items-center text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-white">Get Started</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-[600px]">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="w-full space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-900 dark:text-gray-100">Name</label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-900 dark:text-gray-100">Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-900 dark:text-gray-100">Message</label>
                  <textarea
                    id="message"
                    className="w-full min-h-[100px] px-3 py-2 border rounded-md resize-y bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
                    placeholder="Tell us about your needs"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </motion.section>

        {/* Features Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-900"
        >
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="grid gap-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 dark:text-white">Why Choose Us</h2>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the advantages of working with our expert team
                </p>
              </div>
              
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center text-center space-y-4 p-6 bg-white/80 dark:bg-gray-800 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  )
} 