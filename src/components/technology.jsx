import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Atom, Box, Zap, ArrowRight, Shield, Code, Server, Database, Cloud, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import compliance from "../risk.webp"
import threat from "../asset1.jpeg" 
import assessment from "../asset2.jpeg"
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const technologies = [
  {
    title: "IT",
    icon: <Code className="w-6 h-6" />,
    color: "text-blue-500",
    description: "Information Technology solutions for modern enterprises, including network security, cloud infrastructure, and digital transformation.",
    stats: { value: "500+", label: "Projects Delivered" }
  },
  {
    title: "OT",
    icon: <Server className="w-6 h-6" />,
    color: "text-green-500",
    description: "Operational Technology security for industrial control systems, SCADA, and critical infrastructure protection.",
    stats: { value: "100+", label: "Secured Systems" }
  },
  {
    title: "Quantum",
    icon: <Database className="w-6 h-6" />,
    color: "text-purple-500",
    description: "Next-generation quantum-safe cryptography and security solutions to protect against future quantum computing threats.",
    stats: { value: "25+", label: "Implementations" }
  }
]

export default function Technology() {
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTech, setActiveTech] = useState(null);
  const { scrollY } = useScroll();

  // Parallax effects
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Grid animation with GSAP
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

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section ref={containerRef} className="w-full py-20 md:py-32 relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
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
      </div>

      {/* Enhanced animated background elements */}
      <motion.div
        className="absolute -z-10 top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl"
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
        className="absolute -z-10 bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-500/10 to-green-500/10 blur-3xl"
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
      <motion.div
        className="absolute -z-10 top-1/4 right-1/3 w-80 h-80 rounded-full bg-gradient-to-tr from-pink-500/10 to-violet-500/10 blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <div className="container px-4 md:px-6 max-w-[1200px] mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6"
          >
            <Shield className="mr-2 h-4 w-4" />
            Powered By Advanced Technology
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Built on a technology driven platform, Cyber.soldiers services are in demand
          </motion.h2>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.02, translateY: -5 }}
              onHoverStart={() => setActiveTech(index)}
              onHoverEnd={() => setActiveTech(null)}
              className="group relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative z-10">
                <motion.div
                  className={`flex items-center gap-2 mb-4 ${tech.color}`}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: activeTech === index ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white">{tech.title}</h3>
                  <motion.div
                    animate={{
                      x: activeTech === index ? [0, 5, 0] : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-4 h-4 ml-auto text-white/70" />
                  </motion.div>
                </motion.div>
                <p className="text-sm text-gray-300 mb-4">{tech.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-white">
                      {tech.stats.value}
                    </span>
                    <span className="text-sm text-gray-400">
                      {tech.stats.label}
                    </span>
                  </div>
                  <motion.div
                    animate={{
                      scale: activeTech === index ? [1, 1.2, 1] : 1
                    }}
                    transition={{ duration: 0.5 }}
                    // className="h-2 w-2 rounded-full bg-white/50"
                  />
                </div>
              </div>

              {/* Hover Effect Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{
                  background: activeTech === index
                    ? "linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(255,255,255,0.2))"
                    : "linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.1))"
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Get Started Section */}
        <div className="container px-4 md:px-6 max-w-[1200px] mx-auto relative z-10 mt-20">
          <div className="relative">
            <div className="absolute left-0 top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ '--line-fade-stop': '75%' }}></div>
            
            {/* Center Content */}
            <div className="text-center mb-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4"
              >
                <Shield className="mr-2 h-4 w-4" />
                Cyber Security Excellence
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-2"
              >
                Get started in <span className="text-blue-500">Cyber Security</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-400 max-w-[700px] mx-auto mb-2"
              >
                Secure your digital assets with our comprehensive cybersecurity solutions and expert training programs.
              </motion.p>
            </div>

            {/* Cards Section */}
            <div className="flex justify-center -mt-32">
              <div className="relative w-full lg:w-[800px] h-[800px] flex items-center justify-center">
                <div className="absolute w-full max-w-[500px] perspective-[2000px]">
                  {[
                    {
                      title: "Security Assessment",
                      description: "Comprehensive security evaluation and risk analysis for your digital infrastructure.",
                      gradient: "from-blue-500/20 to-purple-500/20",
                      rotation: "rotate-[-15deg] translate-x-[-30%] translate-y-[5%]",
                      image: assessment
                    },
                    {
                      title: "Threat Intelligence",
                      description: "Real-time threat monitoring and proactive security measures.",
                      gradient: "from-green-500/20 to-teal-500/20",
                      rotation: "rotate-[0deg] translate-x-[0%] translate-y-[0%]",
                      image: threat
                    },
                    {
                      title: "Compliance Solutions",
                      description: "Ensure regulatory compliance with our comprehensive security frameworks.",
                      gradient: "from-purple-500/20 to-pink-500/20",
                      rotation: "rotate-[15deg] translate-x-[30%] translate-y-[-5%]",
                      image: compliance
                    }
                  ].map((card, index) => (
                    <div
                      key={card.title}
                      className={`absolute inset-0 w-full group transition-all duration-300 hover:z-10 ${card.rotation}`}
                      style={{
                        transformStyle: 'preserve-3d',
                        zIndex: index
                      }}
                    >
                      <div className="relative w-full rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 shadow-2xl transition-transform duration-300 group-hover:scale-105">
                        <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
                        <div className="relative aspect-[4/3] w-full overflow-hidden">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        </div>
                        <div className="relative p-6">
                          <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                          <p className="text-sm text-gray-300">{card.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add animation keyframes
const styles = `
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
`;

// Add style tag to document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
} 