// import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Terminal,
  Shield,
  ArrowRight,
  ChevronRight,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  // Refs for intersection observer animations
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counterValues, setCounterValues] = useState({});
  const [isCounterStarted, setIsCounterStarted] = useState(false);

  // Parallax scroll effect
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  // State for typing animation
  const [typedText, setTypedText] = useState("");
  const fullText = "gget-cyber.soldiers@latest";

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
      });
    }
  }, []);

  // Counter animation
  const animateCounter = (targetValue, id) => {
    let startValue = 0;
    const duration = 2000;
    const startTime = Date.now();
    const isPercentage =
      typeof targetValue === "string" && targetValue.includes("%");
    const numericValue = parseInt(
      isPercentage ? targetValue.replace(/\D/g, "") : targetValue
    );

    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime < duration) {
        const progress = elapsedTime / duration;
        const currentValue = Math.floor(progress * numericValue);
        setCounterValues((prev) => ({
          ...prev,
          [id]: isPercentage ? `${currentValue}%` : currentValue,
        }));
        requestAnimationFrame(updateCounter);
      } else {
        setCounterValues((prev) => ({
          ...prev,
          [id]: targetValue,
        }));
      }
    };

    requestAnimationFrame(updateCounter);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isCounterStarted) {
          setIsVisible(true);
          setIsCounterStarted(true);
          animateCounter("500", "clients");
          animateCounter("98", "satisfaction");
          animateCounter("25", "countries");
          animateCounter("100", "experts");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isCounterStarted]);

  useEffect(() => {
    setTypedText(""); // Reset typedText to ensure it starts fresh
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust the speed of typing here

    return () => clearInterval(typingInterval);
  }, []); // Empty dependency array to run only on mount

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen relative overflow-hidden bg-gradient-to-b from-black to-gray-900 px-4 sm:px-6 md:px-8 lg:px-12"
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

          {/* Neon intersection highlights - Adjusted for mobile */}
          <div
            className="grid-intersection absolute h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-blue-500/20 blur-[5px] top-[24%] left-[48%] animate-grid-intersection-pulse"
            style={{ animationDelay: "4.5s" }}
          ></div>
          <div
            className="grid-intersection absolute h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-purple-500/20 blur-[5px] top-[36%] left-[60%] animate-grid-intersection-pulse"
            style={{ animationDelay: "2.3s" }}
          ></div>
          <div
            className="grid-intersection absolute h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-teal-500/20 blur-[5px] top-[56%] left-[32%] animate-grid-intersection-pulse"
            style={{ animationDelay: "6.2s" }}
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
              Defending your Digital Frontiers
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-400 max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] mx-auto leading-[1.4] sm:leading-[1.5] md:leading-[1.6] mt-4 sm:mt-6 whitespace-pre-line"
            >
              Used by some of the reputed organisations, Cyber.soldiers{'\n'}empowers you with high-quality Cyber Services & Skilling with the power of ecosystem.
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mt-12 sm:mt-16 md:mt-20 lg:mt-24 w-full max-w-[1920px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"
          >
            {[
              {
                id: "clients",
                label: "Global Clients",
                value: counterValues.clients || "500+",
              },
              {
                id: "satisfaction",
                label: "Client Satisfaction",
                value: `${counterValues.satisfaction || "98"}%`,
              },
              {
                id: "countries",
                label: "Countries",
                value: `${counterValues.countries || "25"}+`,
              },
              {
                id: "experts",
                label: "Security Experts",
                value: `${counterValues.experts || "100"}+`,
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200/10 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-x-full bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent group-hover:animate-slide-right-infinite"></div>
                <div className="text-4xl font-bold text-gray-100 mb-1 relative animate-pulse-slow">
                  {stat.value}
                  <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20 w-full max-w-[1920px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"
          >
            {[
              { to: "/product", label: "Product", icon: <Shield className="h-4 w-4 mr-1" /> },
              { to: "/services", label: "Services", icon: <ArrowRight className="h-4 w-4 mr-1" /> },
              { to: "/training", label: "Training", icon: <GraduationCap className="h-4 w-4 mr-1" /> },
            ].map((button, index) => (
              <Link key={button.to} to={button.to}>
                <Button
                  variant="outline"
                  className={`category-filter relative group flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200/10 hover:bg-white/10 transition-all duration-300`}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                  <span className="relative z-10 flex items-center text-gray-100">
                    {button.icon}
                    {button.label}
                  </span>
                </Button>
              </Link>
            ))}
          </motion.div>

          {/* Terminal Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center bg-black/80 dark:bg-white/10 rounded-lg px-6 py-3 space-x-4"
            >
              <Terminal className="h-5 w-5 text-gray-100" />
              <code className="font-mono text-sm text-gray-100">
                {typedText}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-gray-100"
                >
                  |
                </motion.span>
              </code>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <div className="text-sm text-white font-medium mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1 relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-white rounded-full"
            />
            <motion.div
              className="absolute inset-0 bg-white/10"
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div> */}

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
  );
}
