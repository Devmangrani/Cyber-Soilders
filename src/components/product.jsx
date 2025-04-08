import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Shield, Zap, Users, Target, ArrowRight, Star, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Product() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredFeature, setHoveredFeature] = useState(null)
  const containerRef = useRef(null)
  const gridRef = useRef(null)
  const { scrollY } = useScroll()

  // Parallax effects
  const y = useTransform(scrollY, [0, 1000], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5])

  // Add GSAP animation for grid
  useEffect(() => {
    if (gridRef.current) {
      gsap.to(gridRef.current, {
        backgroundSize: "30px 30px",
        opacity: 0.7,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 0.5,
        },
      });
    }
  }, []);

  const slides = [
    {
      image: "/placeholder.svg?height=600&width=800",
      title: "Advanced Training Environment",
      description: "Our state-of-the-art cyber range simulates real-world attack scenarios for hands-on training.",
      stats: { value: "1000+", label: "Scenarios" }
    },
    {
      image: "/placeholder.svg?height=600&width=800",
      title: "Real-time Attack Simulation",
      description: "Experience realistic cyber attacks in a controlled environment.",
      stats: { value: "24/7", label: "Monitoring" }
    },
    {
      image: "/placeholder.svg?height=600&width=800",
      title: "Comprehensive Analytics",
      description: "Get detailed insights into your team's performance and security posture.",
      stats: { value: "100%", label: "Accuracy" }
    }
  ]

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Advanced Security",
      description: "State-of-the-art protection against evolving cyber threats",
      color: "text-blue-500"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-time Monitoring",
      description: "Instant detection and response to security incidents",
      color: "text-yellow-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description: "Seamless coordination between security teams",
      color: "text-green-500"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Precision Training",
      description: "Targeted exercises for specific security scenarios",
      color: "text-red-500"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <main className="flex-1" ref={containerRef}>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen bg-gradient-to-b from-black to-gray-900 overflow-hidden">
          {/* Background Elements */}
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_50%)]" />
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

          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto relative z-10 py-20 md:py-32">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-primary text-sm font-medium"
              >
                <Shield className="mr-2 h-4 w-4" />
                Enterprise-Grade Security Platform
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white"
              >
                Experience the Ultimate Cyber Range
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-400 max-w-[700px] mx-auto"
              >
                Real-world attacks, hands-on training, unmatched Cyber Resilience.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Link to="/get-started">
                  <Button
                    variant="outline"
                    className="category-filter relative group flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                    <span className="relative z-10 flex items-center text-gray-100">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </Link>

                <Link to="/demo">
                  <Button
                    variant="outline"
                    className="category-filter relative group flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                    <span className="relative z-10 flex items-center text-gray-100">
                      Watch Demo
                      <Play className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </Link>

                <Link to="/contact" className="w-full flex justify-center mt-8">
                  <Button
                    variant="outline"
                    className="category-filter relative group flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                    <span className="relative z-10 flex items-center text-gray-100 text-lg">
                      Contact Us
                      <motion.div
                        className="ml-2 h-5 w-5"
                        initial={{ scale: 1 }}
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5"
                        >
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                      </motion.div>
                    </span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

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
        </section>

        {/* Features Grid */}
        <section className="w-full py-20 md:py-32 bg-white dark:bg-black relative overflow-hidden">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="container px-4 md:px-6 max-w-[1200px] mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onHoverStart={() => setHoveredFeature(index)}
                  onHoverEnd={() => setHoveredFeature(null)}
                  className="group relative p-6 rounded-xl border bg-card hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`${feature.color} mb-4`}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>

                  {/* Hover Effect Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={{
                      background: hoveredFeature === index
                        ? "linear-gradient(to bottom right, rgba(var(--primary), 0.1), rgba(var(--primary), 0.2))"
                        : "linear-gradient(to bottom right, rgba(var(--primary), 0), rgba(var(--primary), 0.1))"
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Gallery Section */}
        <section className="w-full py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-gray-600 dark:from-gray-100 dark:via-primary dark:to-gray-400"
            >
              Interactive Training Environment
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-video bg-muted rounded-xl overflow-hidden shadow-2xl"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img
                      alt={slides[currentSlide].title}
                      className="object-cover w-full h-full"
                      src={slides[currentSlide].image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
                      onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
                      onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-between"
                  >
                    <div className="text-white">
                      <div className="text-2xl font-bold mb-2">{slides[currentSlide].stats.value}</div>
                      <div className="text-sm opacity-80">{slides[currentSlide].stats.label}</div>
                    </div>
                    <div className="flex gap-1">
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentSlide ? "bg-primary" : "bg-primary/30"
                          }`}
                          onClick={() => setCurrentSlide(index)}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold mb-4">{slides[currentSlide].title}</h3>
                    <p className="text-muted-foreground text-lg">{slides[currentSlide].description}</p>
                  </motion.div>
                </AnimatePresence>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="pt-4"
                >
                  <Button className="group relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.75, ease: "easeInOut" }}
                    />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partner Section */}
        <section className="w-full py-20 md:py-32 bg-white dark:bg-black">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                <Star className="mr-2 h-4 w-4" />
                Knowledge Partner
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-gray-600 dark:from-gray-100 dark:via-primary dark:to-gray-400"
              >
                Our Knowledge Partner
              </motion.h2>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <img
                  alt="IIT Madras Logo"
                  width="300"
                  height="100"
                  className="relative z-10 object-contain"
                  src="/placeholder.svg?height=100&width=300"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground max-w-[600px]"
              >
                IIT Madras brings world-class expertise and research to our cybersecurity solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button variant="outline" className="group">
                  Learn More About Partnership
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  )
} 