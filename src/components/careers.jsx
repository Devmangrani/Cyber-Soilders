import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Shield, Target, Users, Zap, Briefcase, GraduationCap, Globe, Heart, ArrowRight, ChevronRight } from "lucide-react"
import cyberTeamImage from '../istockphoto-1435605327-612x612.jpg';
import { Link } from "react-router-dom"

const positions = [
  {
    title: "Security Operations Engineer",
    department: "Security Operations",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Join our elite security operations team to protect organizations from cyber threats.",
    requirements: ["5+ years of experience", "SOC experience", "SIEM expertise", "Incident response"],
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Penetration Tester",
    department: "Offensive Security",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Conduct advanced penetration testing and vulnerability assessments.",
    requirements: ["3+ years of experience", "OSCP/CEH certification", "Web app testing", "Network security"],
    icon: <Target className="h-6 w-6" />
  },
  {
    title: "Security Trainer",
    department: "Training",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Train the next generation of cybersecurity professionals.",
    requirements: ["5+ years of experience", "Training experience", "Technical expertise", "Communication skills"],
    icon: <GraduationCap className="h-6 w-6" />
  },
  {
    title: "Threat Intelligence Analyst",
    department: "Intelligence",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Analyze and track emerging cyber threats and trends.",
    requirements: ["3+ years of experience", "Threat intel experience", "OSINT skills", "Analytical mindset"],
    icon: <Globe className="h-6 w-6" />
  }
]

const benefits = [
  {
    title: "Competitive Salary",
    description: "Industry-leading compensation packages",
    icon: <Zap className="h-6 w-6" />
  },
  {
    title: "Remote Work",
    description: "Flexible work from anywhere policy",
    icon: <Globe className="h-6 w-6" />
  },
  {
    title: "Learning & Growth",
    description: "Continuous learning and certification support",
    icon: <GraduationCap className="h-6 w-6" />
  },
  {
    title: "Health Benefits",
    description: "Comprehensive health and wellness coverage",
    icon: <Heart className="h-6 w-6" />
  },
  {
    title: "Team Culture",
    description: "Inclusive and collaborative environment",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Career Growth",
    description: "Clear career progression path",
    icon: <Briefcase className="h-6 w-6" />
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

export default function Careers() {
  // Refs for intersection observer animations
  const sectionRefs = useRef([]);
  const [counterValues, setCounterValues] = useState({});
  const [isCounterStarted, setIsCounterStarted] = useState(false);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [hoveredPosition, setHoveredPosition] = useState(null);

  // Refs for GSAP-like animations
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const missionRef = useRef(null);
  const benefitsRef = useRef(null);
  const positionsRef = useRef(null);
  const ctaRef = useRef(null);
  const benefitCardsRef = useRef([]);
  const positionCardsRef = useRef([]);

  // Add to benefits refs
  const addToBenefitRefs = (el, index) => {
    if (el) {
      benefitCardsRef.current[index] = el;
    }
  };

  // Add to positions refs
  const addToPositionRefs = (el, index) => {
    if (el) {
      positionCardsRef.current[index] = el;
    }
  };

  // Animation for counters
  const animateCounter = (targetValue, id) => {
    let startValue = 0;
    const duration = 2000;
    const startTime = Date.now();
    const isPercentage = typeof targetValue === 'string' && targetValue.includes('%');
    const numericValue = parseInt(isPercentage ? targetValue.replace(/\D/g, '') : targetValue);
    
    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      
      if (elapsedTime < duration) {
        const progress = elapsedTime / duration;
        const currentValue = Math.floor(progress * numericValue);
        
        setCounterValues(prev => ({
          ...prev,
          [id]: isPercentage ? `${currentValue}%` : currentValue
        }));
        
        requestAnimationFrame(updateCounter);
      } else {
        setCounterValues(prev => ({
          ...prev,
          [id]: targetValue
        }));
      }
    };
    
    requestAnimationFrame(updateCounter);
  };

  useEffect(() => {
    // Intersection Observer for section animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Start counter animations for the stats section
          if (entry.target.id === 'stats-section' && !isCounterStarted) {
            setIsCounterStarted(true);
            
            animateCounter(25, 'positions-filled');
            animateCounter(500, 'applications');
            animateCounter(98, 'satisfaction');
            animateCounter(5, 'countries');
          }

          // Animate hero elements when hero section is visible
          if (entry.target === heroRef.current) {
            const heroElements = entry.target.querySelectorAll('.hero-element');
            heroElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in');
              }, index * 200);
            });
          }

          // Animate benefits cards when benefits section is visible
          if (entry.target === benefitsRef.current) {
            benefitCardsRef.current.forEach((card, index) => {
              if (card) {
                setTimeout(() => {
                  card.classList.add('animate-fade-in');
                }, 100 + index * 100);
              }
            });
          }

          // Animate position cards when positions section is visible
          if (entry.target === positionsRef.current) {
            positionCardsRef.current.forEach((card, index) => {
              if (card) {
                setTimeout(() => {
                  card.classList.add('animate-fade-in');
                }, 150 + index * 150);
              }
            });
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    sectionRefs.current.forEach(section => {
      if (section) sectionObserver.observe(section);
    });

    // Add animation for floating particles
    const particles = document.querySelectorAll('.floating-particle');
    particles.forEach((particle, i) => {
      animateFloatingParticle(particle, i);
    });

    return () => {
      sectionRefs.current.forEach(section => {
        if (section) sectionObserver.unobserve(section);
      });
    };
  }, [isCounterStarted]);

  // Function to add refs to our ref array
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  // Simple animation function for floating particles (similar to GSAP)
  const animateFloatingParticle = (element, index) => {
    const animateY = (time) => {
      const amplitude = 15; // maximum movement in pixels
      const period = 3 + (index % 3); // seconds per cycle, varied by index
      const delay = index * 0.2; // staggered start
      
      const y = amplitude * Math.sin((time / 1000 + delay) * (2 * Math.PI / period));
      element.style.transform = `translate(${y * 0.5}px, ${y}px)`;
      
      requestAnimationFrame(animateY);
    };
    
    requestAnimationFrame(animateY);
  };

  // Parallax effect
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="flex-1 overflow-x-hidden">
      <div className="flex flex-col min-h-screen w-full">
        
    {/* Hero Section */}
    <section 
      ref={(el) => {
        addToRefs(el);
        heroRef.current = el;
      }}
      className="relative w-full py-16 md:py-28 lg:py-32 bg-gray-950 overflow-hidden"
      id="hero-section"
    >
      {/* Enhanced grid background with finer lines, glow nodes and subtle animation */}
      <div 
        ref={gridRef}
        className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] overflow-hidden"
      >
        {/* Grid node glow effects */}
        <div className="grid-node absolute h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-500 blur-[3px] opacity-0 top-[20%] left-[40%] animate-grid-node-blink" style={{ animationDelay: "0.5s" }}></div>
        <div className="grid-node absolute h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-purple-500 blur-[3px] opacity-0 top-[40%] left-[25%] animate-grid-node-blink" style={{ animationDelay: "1.2s" }}></div>
        <div className="grid-node absolute h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-teal-500 blur-[3px] opacity-0 top-[70%] left-[60%] animate-grid-node-blink" style={{ animationDelay: "2.7s" }}></div>
        <div className="grid-node absolute h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-cyan-500 blur-[3px] opacity-0 top-[30%] left-[80%] animate-grid-node-blink" style={{ animationDelay: "1.8s" }}></div>
        <div className="grid-node absolute h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-indigo-500 blur-[3px] opacity-0 top-[60%] left-[35%] animate-grid-node-blink" style={{ animationDelay: "3.5s" }}></div>

        {/* Grid line trace effects */}
        <div className="grid-trace absolute h-[1px] w-[100px] sm:w-[200px] bg-gradient-to-r from-blue-500/0 via-blue-500/70 to-blue-500/0 top-[20%] left-[40%] animate-grid-trace-horizontal" style={{ animationDelay: "0.5s" }}></div>
        <div className="grid-trace absolute h-[100px] sm:h-[200px] w-[1px] bg-gradient-to-b from-purple-500/0 via-purple-500/70 to-purple-500/0 top-[40%] left-[25%] animate-grid-trace-vertical" style={{ animationDelay: "1.2s" }}></div>
        <div className="grid-trace absolute h-[75px] sm:h-[150px] w-[1px] bg-gradient-to-r from-teal-500/0 via-teal-500/70 to-teal-500/0 top-[70%] left-[60%] animate-grid-trace-horizontal" style={{ animationDelay: "2.7s" }}></div>
        <div className="grid-trace absolute h-[1px] w-[60px] sm:w-[120px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/70 to-cyan-500/0 top-[30%] left-[80%] animate-grid-trace-horizontal" style={{ animationDelay: "1.8s" }}></div>
        <div className="grid-trace absolute h-[60px] sm:h-[120px] w-[1px] bg-gradient-to-b from-indigo-500/0 via-indigo-500/70 to-indigo-500/0 top-[60%] left-[35%] animate-grid-trace-vertical" style={{ animationDelay: "3.5s" }}></div>

        {/* Neon intersection highlights */}
        <div className="grid-intersection absolute h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-blue-500/20 blur-[5px] top-[24%] left-[48%] animate-grid-intersection-pulse" style={{ animationDelay: "4.5s" }}></div>
        <div className="grid-intersection absolute h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-purple-500/20 blur-[5px] top-[36%] left-[60%] animate-grid-intersection-pulse" style={{ animationDelay: "2.3s" }}></div>
        <div className="grid-intersection absolute h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-teal-500/20 blur-[5px] top-[56%] left-[32%] animate-grid-intersection-pulse" style={{ animationDelay: "6.2s" }}></div>
      </div>

      {/* Radial gradient overlay */}
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
      
      <div className="container relative z-10 px-4 md:px-6 max-w-[1200px] mx-auto w-full">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="hero-element inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-gray-100 text-sm font-medium animate-bounce-subtle group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 animate-shimmer"></div>
            <Shield className="mr-2 h-4 w-4 animate-pulse-slow" />
            <span>Join Our Elite Team</span>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300 transform origin-left group-hover:scale-x-100"></div>
          </div>
          
          <div className="overflow-hidden">
            <h1 className="hero-element text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-100 dark:from-gray-100 dark:to-gray-100 pb-2">
              Become a Cyber.Soldier
            </h1>
          </div>
          
          <div className="overflow-hidden pt-2 relative">
            <p className="hero-element text-xl text-muted-foreground max-w-[600px]">
              Join our mission to protect the digital world. We're looking for talented individuals who want to make a difference.
            </p>
            <div className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Animated stats with grid-node-blink animation */}
          <div id="stats-section" ref={addToRefs} className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 w-full max-w-3xl relative">
            <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-4 gap-6 pointer-events-none">
              {Array(8).fill(0).map((_, i) => (
                <div key={i} className="flex items-center justify-center">
                  <div className="animate-grid-node-blink size-2 rounded-full bg-primary/40" style={{ animationDelay: `${i * 0.2}s` }}></div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col items-center hero-element group relative">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-100">
                {counterValues['positions-filled' ] || "25+"}+
              </div>
              <div className="text-sm text-muted-foreground">Positions Filled</div>
              <div className="absolute -inset-4 border border-primary/0 group-hover:border-primary/20 rounded-lg transition-colors duration-300"></div>
            </div>
            
            <div className="flex flex-col items-center hero-element group relative">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-100">
                {counterValues['applications'] || "500+"}+
              </div>
              <div className="text-sm text-muted-foreground">Applications</div>
              <div className="absolute -inset-4 border border-primary/0 group-hover:border-primary/20 rounded-lg transition-colors duration-300"></div>
            </div>
            
            <div className="flex flex-col items-center hero-element group relative">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-100">
                {counterValues['satisfaction'] || "98%"}%
              </div>
              <div className="text-sm text-muted-foreground">Team Satisfaction</div>
              <div className="absolute -inset-4 border border-primary/0 group-hover:border-primary/20 rounded-lg transition-colors duration-300"></div>
            </div>
            
            <div className="flex flex-col items-center hero-element group relative">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-100">
                {counterValues['countries'] || "5"}+
              </div>
              <div className="text-sm text-muted-foreground">Countries</div>
              <div className="absolute -inset-4 border border-primary/0 group-hover:border-primary/20 rounded-lg transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

        {/* Mission Section */}
        <section 
          ref={(el) => {
            addToRefs(el);
            missionRef.current = el;
          }}
          className="w-full py-12 md:py-24 bg-gray-950 opacity-0 translate-y-4 duration-700 ease-out"
        >
          <GridBackground />
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm mb-2 animate-bounce-subtle">
                  Our Purpose
                </div>
                <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">Ready to Join Our Mission?</h2>
                <p className="text-xl text-muted-foreground">
                  At Cyber.Soldiers, we're not just building a company - we're building a movement. Our mission is to create a safer digital world by developing the next generation of cybersecurity professionals.
                </p>
                <p className="text-xl text-muted-foreground">
                  We believe in the power of teamwork, innovation, and continuous learning. As a Cyber.Soldier, you'll be part of an elite team that's making a real difference in the fight against cyber threats.
                </p>
                {/* <div className="pt-4">
                  <Button variant="ghost" className="group relative overflow-hidden flex items-center gap-2 transition-all duration-300">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-indigo-500/50 rounded-lg blur opacity-100 group-hover:opacity-150 transition duration-700"></div>
                    <span className="relative z-10 flex items-center">
                      Learn about our culture
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </div> */}
              </div>
              <div 
                className="relative aspect-square rounded-lg overflow-hidden border-2 border-primary/20 transform transition-all duration-700 hover:scale-105 hover:shadow-xl hover:border-primary/40"
                style={{transform: `perspective(1000px) rotateY(${scrollY * 0.01}deg) rotateX(${scrollY * -0.01}deg)`}}
              >
                <img
                  alt="Cyber Security Team"
                  loading="lazy"
                  decoding="async"
                  className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-110"
                  src={cyberTeamImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Join Our Elite Team</h3>
                  <p className="text-white/80">Be part of something bigger</p>
                </div>
                
                {/* Animated elements around the image */}
                <div className="absolute top-0 right-0 size-12 -mr-6 -mt-6 rounded-full bg-blue-500/20 blur-xl floating-particle"></div>
                <div className="absolute bottom-0 left-0 size-10 -ml-5 -mb-5 rounded-full bg-purple-500/20 blur-xl floating-particle"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section 
          ref={(el) => {
            addToRefs(el);
            benefitsRef.current = el;
          }}
          className="w-full py-12 md:py-24 bg-gray-950 opacity-0 translate-y-4 duration-700 ease-out relative overflow-hidden"
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
          
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm mb-6 animate-bounce-subtle">
                Benefits
              </div>
              <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400 mb-4">Why Join Us?</h2>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                We offer more than just a job - we offer a career path with purpose.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  ref={(el) => addToBenefitRefs(el, index)}
                  className="group relative p-6 rounded-lg border bg-card transition-all duration-500 hover:-translate-y-2 opacity-0 transform translate-y-4"
                  onMouseEnter={() => setHoveredBenefit(benefit.title)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                  <div className="relative z-10">
                    <div className="mb-6 p-3 size-12 rounded-full bg-gray-300 flex items-center justify-center text-primary">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{benefit.title}</h3>
                    <p className="text-muted-foreground text-gray-800">{benefit.description}</p>
                    
                    {/* Animated arrow on hover */}
                    {/* <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <span className="mr-2 text-sm">Learn more</span>
                      <ChevronRight className="h-4 w-4" />
                    </div> */}
                  </div>
                  <div 
                    className={`absolute inset-0 bg-primary/5 rounded-lg transition-opacity duration-300 ${hoveredBenefit === benefit.title ? 'opacity-100' : 'opacity-0'}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section 
          ref={(el) => {
            addToRefs(el);
            positionsRef.current = el;
          }}
          className="w-full py-12 md:py-24 bg-gray-950 opacity-0 translate-y-4 duration-700 ease-out"
        >
              <GridBackground />


          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm mb-6 animate-bounce-subtle">
                Opportunities
              </div>
              <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400  mb-4">Open Positions</h2>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                Join our elite team of cybersecurity professionals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {positions.map((position, index) => (
                <div
                  key={position.title}
                  ref={(el) => addToPositionRefs(el, index)}
                  className="group relative p-6 rounded-lg border bg-card transition-all duration-500 hover:-translate-y-2 opacity-0 transform translate-y-4"
                  onMouseEnter={() => setHoveredPosition(position.title)}
                  onMouseLeave={() => setHoveredPosition(null)}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-500/30 to-gray-500/30 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-gray-100  text-primary group-hover:bg-gray-300 group-hover:scale-110 transition-all duration-300">{position.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{position.title}</h3>
                        <p className="text-sm text-muted-foreground">{position.department}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">{position.location}</span>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">{position.type}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{position.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Requirements:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {position.requirements.map((req, i) => (
                          <li key={i} className="group-hover:translate-x-1 transition-transform duration-300 delay-75">{req}</li>
                        ))}
                      </ul>
                    </div>
                    {/* <Button className="w-full mt-6 group relative overflow-hidden">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-indigo-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                      <span className="relative z-10 flex items-center">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button> */}
                  </div>
                  <div 
                    className={`absolute inset-0 bg-primary/5 rounded-lg transition-opacity duration-300 ${hoveredPosition === position.title ? 'opacity-100' : 'opacity-0'}`}
                  />
                  
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full transform rotate-45 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-primary/10 rounded-full transform rotate-45 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

  <section 
    ref={(el) => {
      addToRefs(el);
      ctaRef.current = el;
    }}
    className="w-full py-12 md:py-24 bg-gray-950  opacity-0 translate-y-4 duration-700 ease-out relative overflow-hidden"
  >
    <GridBackground />
    <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="inline-block rounded-lg bg-gray-100  px-3 py-1 text-sm mb-2 animate-bounce-subtle">
          Join Us Today
        </div>
        <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">Ready to Join Our Mission?</h2>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          Take the first step towards a rewarding career in cybersecurity.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {/* <Button size="lg" className="h-12 px-8 text-base group relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-indigo-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
            <span className="relative z-10 flex items-center">
              View All Positions
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Button> */}
          <Button variant="outline" size="lg" className="h-12 px-8 text-base group relative overflow-hidden">
            <Link to="/contact">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/50 to-purple-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
              <span className="relative z-10 flex items-center">
                Contact Recruiting
                <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>

  </div>

  {/* CSS for animations */}
  <style jsx global>{`
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
    
    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
      100% {
        transform: translateY(0px);
      }
    }
    
    .parallax-slow {
      animation: float 6s ease-in-out infinite;
    }
    
    .parallax-fast {
      animation: float 7s ease-in-out 1s infinite;
    }
    
    @keyframes pulse-slow {
      0% {
        opacity: 0.4;
        transform: scale(1);
      }
      50% {
        opacity: 0.8;
        transform: scale(1.1);
      }
      100% {
        opacity: 0.4;
        transform: scale(1);
      }
    }
    
    .animate-pulse-slow {
      animation: pulse-slow 4s ease-in-out infinite;
    }
    
    @keyframes bounce-subtle {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
    }
    
    .animate-bounce-subtle {
      animation: bounce-subtle 3s ease-in-out infinite;
    }
    
    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-fade-in {
      animation: fade-in 0.8s forwards;
    }
    
    @keyframes slide-up {
      from {
        transform: translateY(100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    
    .animate-slide-up {
      animation: slide-up 0.8s forwards;
    }
    
    .animate-slide-up-delayed {
      animation: slide-up 0.8s 0.2s forwards;
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
    
    /* Animation for CTA glow effect */
    @keyframes cta-pulse {
      0%, 100% {
        opacity: 0.5;
      }
      50% {
        opacity: 0.8;
      }
    }
    
    .cta-glow {
      animation: cta-pulse 4s ease-in-out infinite;
    }

    // new animations

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
    
    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
      100% {
        transform: translateY(0px);
      }
    }
    
    .parallax-slow {
      animation: float 6s ease-in-out infinite;
    }
    
    .parallax-medium {
      animation: float 8s ease-in-out 0.5s infinite;
    }
    
    .parallax-fast {
      animation: float 7s ease-in-out 1s infinite;
    }
    
    @keyframes pulse-slow {
      0% {
        opacity: 0.4;
        transform: scale(1);
      }
      50% {
        opacity: 0.8;
        transform: scale(1.1);
      }
      100% {
        opacity: 0.4;
        transform: scale(1);
      }
    }
    
    .animate-pulse-slow {
      animation: pulse-slow 4s ease-in-out infinite;
    }
    
    @keyframes pulse-very-slow {
      0% {
        opacity: 0.3;
        transform: scale(1);
      }
      50% {
        opacity: 0.6;
        transform: scale(1.05);
      }
      100% {
        opacity: 0.3;
        transform: scale(1);
      }
    }
    
    .animate-pulse-very-slow {
      animation: pulse-very-slow 8s ease-in-out infinite;
    }
    
    @keyframes bounce-subtle {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
    }
    
    .animate-bounce-subtle {
      animation: bounce-subtle 3s ease-in-out infinite;
    }
    
    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-fade-in {
      animation: fade-in 0.8s forwards;
    }
    
    @keyframes floating-particle-slow {
      0%, 100% {
        transform: translate(0, 0);
      }
      25% {
        transform: translate(10px, 10px);
      }
      50% {
        transform: translate(5px, -10px);
      }
      75% {
        transform: translate(-10px, 5px);
      }
    }
    
    .floating-particle-slow {
      animation: floating-particle-slow 15s ease-in-out infinite;
    }
    
    @keyframes floating-particle-fast {
      0%, 100% {
        transform: translate(0, 0);
      }
      25% {
        transform: translate(15px, 15px);
      }
      50% {
        transform: translate(10px, -15px);
      }
      75% {
        transform: translate(-15px, 10px);
      }
    }
    
    .floating-particle-fast {
      animation: floating-particle-fast 10s ease-in-out infinite;
    }
    
    @keyframes scan-line {
      0% {
        top: -5%;
      }
      100% {
        top: 105%;
      }
    }
    
    .animate-scan-line {
      animation: scan-line 10s linear infinite;
    }
    
    @keyframes slide-right-infinite {
      0% {
        transform: translateX(-50%);
      }
      100% {
        transform: translateX(100%);
      }
    }
    
    .animate-slide-right-infinite {
      animation: slide-right-infinite 20s linear infinite;
    }
    
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
    
    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
    
    .animate-shimmer {
      animation: shimmer 3s infinite;
    }
    
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

  `}</style>
  </main>
  )
}
  
              