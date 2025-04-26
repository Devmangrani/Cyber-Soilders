import { useEffect, useRef, useState } from "react"
import { Award, Lightbulb, Shield, Users, ChevronRight, ArrowRight } from "lucide-react"
import FounderImage from '../saurabh_agrawal.jpeg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in all our products, services, and training programs.",
    icon: <Award className="h-6 w-6" />,
  },
  {
    title: "Innovation",
    description: "We continuously innovate to stay ahead of evolving cyber threats.",
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    title: "Integrity",
    description: "We operate with the highest standards of integrity and ethical conduct.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Collaboration",
    description: "We believe in the power of collaboration to solve complex security challenges.",
    icon: <Users className="h-6 w-6" />,
  }
]

// Shortened timeline to only include 2023-2025
const timeline = [
  {
    year: "2023",
    title: "Founded",
    description: "Founded in May 2023 with recognition from startup ecosystem.",
    stat: "2000+",
    statLabel: "Learners",
    events: [
      {
        month: "May",
        title: "Company Founded",
        description: "Cyber.Soldiers was founded"
      },
      {
        month: "Apr",
        title: "Startup Recognition", 
        description: "Recognition by Startup India and Govt. of India"
      },
      {
        month: "Apr",
        title: "Industry Collaborations",
        description: "Partnerships with EC Council and CompTIA"
      },
      {
        month: "Jun",
        title: "Learning Platform",
        description: "Launched Cyber Soldier Learning Experience Cloud"
      },
      {
        month: "Jul",
        title: "Mobile Apps",
        description: "Released apps on Google Play and iOS App Store"
      }
    ]
  },
  {
    year: "2024",
    title: "Growth Phase",
    description: "Expanded client base and infrastructure development.",
    stat: "1000+",
    statLabel: "Clients",
    events: [
      {
        month: "May",
        title: "Client Milestone",
        description: "Acquired over 1000 clients"
      },
      {
        month: "Aug",
        title: "Infrastructure Development",
        description: "Started developing Cyber Range & Lab for skilling infrastructure"
      }
    ]
  },
  {
    year: "2025",
    title: "Future Vision",
    description: "Setting new standards in cyber security with cutting-edge products and services.",
    events: [
      {
        month: "May",
        title: "Academic Collaboration",
        description: "Partnership with IIT Madras for research & knowledge sharing"
      }
    ]
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

export default function About() {
  // Refs for animations and sections
  const sectionRefs = useRef([]);
  const gridRef = useRef(null);
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const founderRef = useRef(null);
  const timelineItemsRef = useRef([]);
  
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(null);
  const [counterValues, setCounterValues] = useState({});
  const [isCounterStarted, setIsCounterStarted] = useState(false);

  // Counter animation function
  const animateCounter = (targetValue, id) => {
    if (!targetValue) return;
    
    let startValue = 0;
    const duration = 2000;
    const startTime = Date.now();
    const isPercentage = targetValue.toString().includes('%');
    const numericValue = parseInt(targetValue.toString().replace(/\D/g, ''));
    
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

  // Counter animation for hero stats
  useEffect(() => {
    // Skip on server-side rendering
    if (typeof window === 'undefined') return;
    
    // All the existing code for animations...
    
    // Add this code for the counter animation:
    const animateHeroCounters = () => {
      const counterElements = document.querySelectorAll('.counter-value');
      
      counterElements.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const suffix = counter.getAttribute('data-suffix') || '';
        const duration = 2000; // 2 seconds
        const start = 0;
        const startTime = Date.now();
        
        const updateCounter = () => {
          const currentTime = Date.now();
          const elapsed = currentTime - startTime;
          
          if (elapsed < duration) {
            const progress = elapsed / duration;
            // Use easeOutQuad easing function for a natural slowdown effect
            const easedProgress = 1 - Math.pow(1 - progress, 2);
            const currentValue = Math.floor(start + (target - start) * easedProgress);
            counter.textContent = currentValue + suffix;
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target + suffix;
          }
        };
        
        requestAnimationFrame(updateCounter);
      });
    };
    
    // Start the counter animation when the section becomes visible
    const heroStatsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateHeroCounters();
          heroStatsObserver.disconnect(); // Only run once
        }
      });
    }, { threshold: 0.3 });
    
    const heroStatsSection = document.querySelector('.hero-stats');
    if (heroStatsSection) {
      heroStatsObserver.observe(heroStatsSection);
    }
    
    return () => {
      if (heroStatsSection) {
        heroStatsObserver.disconnect();
      }
    };
  }, []);

  // Initialize GSAP animations
  useEffect(() => {
    // Skip on server-side rendering
    if (typeof window === 'undefined') return;
    
    // Safety check for GSAP
    if (!gsap || !ScrollTrigger) {
      console.warn("GSAP or ScrollTrigger not available");
      return;
    }
    
    // Grid animation with GSAP
    if (gridRef.current) {
      try {
        // Create animated grid effect
        const ctx = gsap.context(() => {
          // Animate the grid on scroll - simpler animation
          gsap.to(gridRef.current, {
            backgroundSize: "30px 30px",
            opacity: 0.7,
            duration: 1,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom center",
              scrub: 0.5
            }
          });
          
          // Simpler particle animations to avoid performance issues
          const particles = document.querySelectorAll('.particle');
          particles.forEach((particle, i) => {
            // Use CSS animations for particles instead of GSAP
            particle.style.animationDelay = `${i * 0.5}s`;
          });
          
          // Simplified hero animations
          gsap.fromTo(".hero-title", 
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
          );
          
          gsap.fromTo(".hero-stat", 
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power1.out", delay: 0.3 }
          );
          
          // Basic animations for sections
          // Mission cards
          ScrollTrigger.create({
            trigger: missionRef.current,
            start: "top 80%",
            onEnter: () => {
              gsap.to(".mission-card", {
                opacity: 1, 
                y: 0,
                stagger: 0.15,
                duration: 0.5,
                ease: "power1.out"
              });
            },
            once: true
          });
          
          // Values cards with simpler animation
          ScrollTrigger.create({
            trigger: valuesRef.current,
            start: "top 80%",
            onEnter: () => {
              gsap.to(".value-card", {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.5,
                ease: "power1.out"
              });
            },
            once: true
          });
          
          // Timeline items - simpler animation
          timelineItemsRef.current.forEach((item, index) => {
            if (!item) return;
            
            ScrollTrigger.create({
              trigger: item,
              start: "top 85%",
              onEnter: () => {
                gsap.to(item, {
                  opacity: 1,
                  x: 0,
                  duration: 0.5,
                  ease: "power1.out",
                  onComplete: () => setActiveTimelineIndex(index)
                });
              },
              once: true
            });
          });
          
          // Founder image simple fade in
          ScrollTrigger.create({
            trigger: ".founder-image",
            start: "top 85%",
            onEnter: () => {
              gsap.to(".founder-image", {
                opacity: 1,
                scale: 1,
                duration: 0.7,
                ease: "power2.out"
              });
            },
            once: true
          });
        });
        
        return () => ctx.revert(); // Clean up animations
      } catch (error) {
        console.error("Error setting up animations:", error);
      }
    }
  }, []);

  // Function to add refs to our ref array
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  // Add timeline items to refs
  const addToTimelineRefs = (el, index) => {
    if (el) {
      timelineItemsRef.current[index] = el;
    }
  };

  return (
    <main className="flex-1 overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="w-full py-16 md:py-24 relative overflow-hidden bg-gray-950"
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        
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
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black  to-transparent z-[1]"></div>
        
        <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="overflow-hidden">
              <div className="hero-badge inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-primary text-sm font-medium">
                About Us
              </div>
            </div>
            <div className="overflow-hidden">
              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-600 dark:from-gray-100 dark:to-gray-600 pb-2">
                About Cyber.Soldiers
              </h1>
            </div>
            <div className="overflow-hidden pt-2">
              <p className="hero-description mt-6 text-xl md:text-2xl text-gray-400 max-w-[800px]">
                Leading the way in cyber security products, services, and training.
              </p>
            </div>
            
            {/* Animated stats with enhanced styling from training.jsx */}
            <div className="hero-stats grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 w-full max-w-3xl">
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200/10 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-x-full bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent group-hover:animate-slide-right-infinite"></div>
                <div className="text-4xl font-bold text-gray-100 mb-1 relative">
                  <span className="counter-value" data-target="15" data-suffix="+">0</span>
                  <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200/10 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-x-full bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent group-hover:animate-slide-right-infinite" style={{animationDelay: '0.2s'}}></div>
                <div className="text-4xl font-bold text-gray-100 mb-1 relative">
                  <span className="counter-value" data-target="10" data-suffix="+">0</span>
                  <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </div>
                <div className="text-gray-400">Countries</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200/10 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-x-full bottom-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent group-hover:animate-slide-right-infinite" style={{animationDelay: '0.4s'}}></div>
                <div className="text-4xl font-bold text-gray-100 mb-1 relative">
                  <span className="counter-value" data-target="2000" data-suffix="+">0</span>
                  <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </div>
                <div className="text-gray-400">Learners</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200/10 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-x-full bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent group-hover:animate-slide-right-infinite" style={{animationDelay: '0.6s'}}></div>
                <div className="text-4xl font-bold text-gray-100 mb-1 relative">
                  <span className="counter-value" data-target="97" data-suffix="%">0</span>
                  <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </div>
                <div className="text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section 
        ref={missionRef} 
        className="w-full py-16 md:py-24 relative overflow-hidden bg-gray-950"
      >
        <GridBackground />
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="mission-card group p-6 rounded-lg border border-gray-800 bg-black hover:border-gray-700 transition-all duration-500"
            >
              <div className="size-16 rounded-full bg-gray-900 flex items-center justify-center mb-6 relative overflow-hidden">
                <span className="text-2xl text-gray-100 font-bold relative z-10">01</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 opacity-70 transition-all duration-500"></div>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-100 transition-colors duration-100">Our Aim</h2>
              <p className="text-gray-400">To empower organizations with cutting-edge cybersecurity products, expert services, and industry-leading skilling programs.</p>
              {/* <div className="mt-6 flex items-center text-blue-400 transform translate-x-4 transition-all duration-300">
                <span className="mr-2">Learn more</span>
                <ArrowRight className="h-4 w-4" />
              </div> */}
            </div>
            <div 
              className="mission-card group p-6 rounded-lg border border-gray-800 bg-black hover:border-gray-700 transition-all duration-500"
            >
              <div className="size-16 rounded-full bg-gray-900 flex items-center justify-center mb-6 relative overflow-hidden">
                <span className="text-2xl text-gray-100 font-bold relative z-10">02</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 opacity-70 transition-all duration-500"></div>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-100 transition-colors duration-300">Our Mission</h2>
              <p className="text-gray-400">To strengthen cyber resilience, mitigate risks, and build a safer digital future.</p>
              {/* <div className="mt-6 flex items-center text-blue-400 transform translate-x-4 transition-all duration-300">
                <span className="mr-2">Learn more</span>
                <ArrowRight className="h-4 w-4" />
              </div> */}
            </div>
            <div 
              className="mission-card group p-6 rounded-lg border border-gray-800 bg-black hover:border-gray-700 transition-all duration-500"
            >
              <div className="size-16 rounded-full bg-gray-900 flex items-center justify-center mb-6 relative overflow-hidden">
                <span className="text-2xl text-gray-100 font-bold relative z-10">03</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 opacity-70 transition-all duration-500"></div>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-100 transition-colors duration-300">Our Vision</h2>
              <p className="text-gray-400">To be among the global leaders in Cyber Security, driving innovation and excellence.</p>
              {/* <div className="mt-6 flex items-center text-blue-400 transform translate-x-4 transition-all duration-300">
                <span className="mr-2">Learn more</span>
                <ArrowRight className="h-4 w-4" />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        ref={valuesRef} 
        className="w-full py-16 md:py-24 relative overflow-hidden bg-gray-950"
      >
        <GridBackground />
        
        {/* Animated particles - reduced number and opacity */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 size-2 rounded-full bg-blue-500/10"></div>
          <div className="absolute top-2/3 left-1/2 size-3 rounded-full bg-green-500/10"></div>
        </div>
        
        <div className="container px-4 md:px-6 mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm mb-6 border border-gray-700 shadow-sm">
              Core Principles
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-[600px]">The principles that guide everything we do at Cyber.Soldiers.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                style={{opacity: 0, transform: 'translateY(20px)'}}
                className="value-card group p-6 rounded-lg border border-gray-700 bg-gray-900 hover:border-gray-600 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              >
                <div className="mb-6 p-3 size-12 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-900 group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-blue-500/30 transition-all duration-500"></div>
                  <div className="relative z-10">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-blue-400 transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
                
                {/* <div className="mt-6 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <span className="mr-2">Learn more</span>
                  <ArrowRight className="h-4 w-4" />
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Journey Section */}
      <section 
        ref={founderRef} 
        className="w-full py-16 md:py-24 bg-gray-950 relative overflow-hidden"
      >
        <GridBackground />
        
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-200">Leadership</h2>
            <p className="text-xl text-gray-400 max-w-[600px]">The visionary behind Cyber.Soldiers.</p>
          </div>
          
          {/* Founder Image with enhanced animation */}
          <div className="flex flex-col items-center mb-20">
            <div 
              className="founder-image aspect-square relative rounded-full overflow-hidden border-4 border-gray-800 0 mx-auto max-w-[250px] group hover:border-blue-400 transition-all duration-500"
              style={{opacity: 0, transform: 'scale(0.9)'}}>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500 z-10"></div>
              <img
                alt="Saurabh Agrawal - Founder"
                loading="lazy"
                decoding="async"
                className="w-60 h-50 rounded-full object-cover group-hover:scale-110 transition-transform duration-700"                     
                src={FounderImage}
              />
              
              {/* Animated elements around the image */}
              <div className="absolute particle top-0 right-0 size-12 -mr-6 -mt-6 rounded-full bg-blue-500/20 blur-xl"></div>
              <div className="absolute particle bottom-0 left-0 size-10 -ml-5 -mb-5 rounded-full bg-purple-500/20 blur-xl"></div>
            </div>
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold text-gray-100">Colonel Saurabh Agrawal, SM(Retd.)</h3>
              <p className="text-gray-400">Founder & CEO</p>
            </div>
            <p className="text-center text-gray-400 mt-3 max-w-200">
            An Ex Army Technocrat & Start up Strategist with deep insight into business conceptualization & market development . An alumnus of  IIT Madras in Computer Science with more than 20 years of ICT O&M and Cyber Security experience. He comes with immense knowledge on training skills and aligning the same to industry requirements. His expertise in product development and rolling it to market is well known.
            </p>
          </div>
          
          {/* Clear Journey headline */}
          <div className="flex flex-col items-center text-center space-y-4 mb-16 mt-12 pt-12 border-t border-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-200">Our Journey</h2>
            <p className="text-xl text-gray-400 max-w-[600px]">The evolution of Cyber.Soldiers through the years.</p>
          </div>
          
          {/* Journey Timeline with enhanced animation */}
          <div className="relative">
            <div className="absolute left-0 md:left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 via-blue-500 to-gray-800 transform md:translate-x-[-50%]"></div>
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  ref={(el) => addToTimelineRefs(el, index)}
                  data-index={index}
                  className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 group timeline-item`}
                  style={{opacity: 0, transform: index % 2 === 0 ? 'translateX(30px)' : 'translateX(-30px)'}}
                >
                  <div className="absolute left-0 md:left-[50%] w-4 h-4 rounded-full bg-gray-800 transform translate-x-[-50%] z-10 group-hover:bg-blue-400 transition-all duration-300"></div>
                  <div className={`ml-8 md:ml-0 md:w-[45%] p-6 rounded-lg border border-gray-800 bg-black hover:border-blue-800 hover:shadow-xl transition-all duration-500 ${activeTimelineIndex === index ? 'ring-2 ring-blue-400 scale-105 shadow-lg' : ''} group-hover:translate-y-[-8px]`}>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/0 to-blue-900/0 group-hover:from-blue-900/10 transition-all duration-500 rounded-lg"></div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm font-medium bg-gray-800 text-gray-100 px-2.5 py-1 rounded-full">{item.year}</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent"></div>
                    </div>
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-lg text-gray-100 group-hover:text-blue-400 transition-colors duration-300">{item.title}</h4>
                      {item.stat && (
                        <div className="flex flex-col items-end">
                          <div className="text-2xl font-bold text-blue-400">
                            {counterValues[`timeline-${index}`] || item.stat}
                          </div>
                          <div className="text-xs text-gray-400">{item.statLabel}</div>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-400 relative z-10 mb-4">{item.description}</p>
                    
                    {/* Event sub-items */}
                    {item.events && (
                      <div className="space-y-3 mt-4 pt-4 border-t border-gray-800">
                        {item.events.map((event, eventIndex) => (
                          <div key={eventIndex} className="flex items-start gap-2">
                            <div className="flex-shrink-0 w-8 text-xs text-gray-500 mt-0.5">{event.month}</div>
                            <div className="flex-1">
                              <h5 className="text-sm font-medium text-gray-200">{event.title}</h5>
                              <p className="text-xs text-gray-400">{event.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="hidden md:block md:w-[45%]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
        
        /* Enhanced grid animation */
        @keyframes gridPulse {
          0% {
            opacity: 0.5;
            background-size: 24px 24px;
          }
          50% {
            opacity: 0.8;
            background-size: 28px 28px;
          }
          100% {
            opacity: 0.5;
            background-size: 24px 24px;
          }
        }
        
        /* Floating particles animation */
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-10px) translateX(5px);
          }
          66% {
            transform: translateY(5px) translateX(-5px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        
        .particle {
          animation: float 8s ease-in-out infinite;
        }

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
        
        .floating-particle, .particle {
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-particle-slow {
          animation: float 8s ease-in-out infinite;
        }
        
        .floating-particle-fast {
          animation: float 4s ease-in-out infinite;
        }
        
        .parallax-slow, .parallax-bg-slow {
          will-change: transform;
        }
        
        .parallax-medium {
          will-change: transform;
        }
        
        .parallax-fast, .parallax-bg-fast {
          will-change: transform;
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