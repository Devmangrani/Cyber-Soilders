"use client";

import { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Shield,
  Zap,
  Users,
  Target,
  ArrowRight,
  Star,
  Award,
  LayoutGrid,
  BarChart2,
  Gamepad2,
  TrafficCone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CyberSecurityTraining from "../CyberSecurityTraining.jpeg";
import AdvancedTrainingEnvironment from "../AdvancedTrainingEnvironment.jpg";
import RealTimeAttackSimulation from "../istockphoto-1435605327-612x612.jpg";
import ComprehensiveAnalytics from "../ComprehensiveAnalytics.png";
import IIT_Madras_Logo from "../IIT_Madras_Logo.png";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Product() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const carouselRef = useRef(null);
  const { scrollY } = useScroll();
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState([
    {
      title: "Academia & Education Providers",
      image: "https://i0.wp.com/bhumiitech.com/wp-content/uploads/2023/10/New-Project-34.png",
      content: "High-quality, hands-on experiential education is not yet commoditized. Rangestorm can prove to be a game changer for this sector. Provides hands-on, real time training to learners in varied fields like IT, Cyber Security"
    },
    {
      title: "Critical infrastructure",
      image: "https://i0.wp.com/bhumiitech.com/wp-content/uploads/2023/10/New-Project-35.png",
      content: "Oil & Gas, Aviation, Power and Transportation industries are reliant on IT, networks and connected devices. Therefore the IT teams should always be prepared and stay upto date to take on the Cyber attacks."
    },
    {
      title: "Banking, Finance and Insurance",
      image: "https://i0.wp.com/bhumiitech.com/wp-content/uploads/2023/10/New-Project-36.png",
      content: "More than 200 breach incidents have been reported since 2007 for this segment. Rangestorm hones the skills of IT teams and keeps them updated on latest attack scenarios."
    },
    {
      title: "Government & Health Infrastructure",
      image: "https://i0.wp.com/bhumiitech.com/wp-content/uploads/2023/10/New-Project-37.png",
      content: "This is one of the favorite targets of attackers. Rangestorm helps your team to be proactive, rather than reactive."
    },
    {
      title: "Corporate and Business",
      image: "https://i0.wp.com/bhumiitech.com/wp-content/uploads/2023/10/zsd.png",
      content: "With geographically spread facilities and distributed IT/network infrastructure, the attack surface is huge for Business and Corporate enterprises. Rangestorm ensures that SOC team is ready to respond to incoming malicious attacks"
    },
    {
      title: "Military & Law Enforcement",
      image: "https://i0.wp.com/bhumiitech.com/wp-content/uploads/2023/10/New-Project-38.png",
      content: "Defense and Law Enforcement agencies possess critical information concerning national security. That's why they face innumerable breach attempts. Rangestorm trains the IT team to create cyber warriors, who can mount an effective defense against real world cyber attacks."
    }
  ]);

  // Parallax effects
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  const [cards, setCards] = useState([
    {
      image: "https://i0.wp.com/bhumiitech.com/wp-content/uploads/2023/10/New-Project-25.png?ssl=1",
      title: "Build your custom challenge",
      description: "Tailor scenarios in our cyber range with full control, crafting real-world environments enriched with genuine traffic.",
    },
    {
      image: "https://i0.wp.com/bhumiitech.com/wp-content/uploads/2023/10/New-Project-26.png?ssl=1",
      title: "Create a red, blue and purple team",
      description: "Divide teams for optimal learning; diverse red, blue, and purple team configurations enhance member skills.",
    },
    {
      image: "https://i0.wp.com/bhumiitech.com/wp-content/uploads/2023/10/New-Project-27.png?ssl=1",
      title: "Track record of important action",
      description: "Record and monitor each pivotal candidate step, ensuring comprehensive assessment every time.",
    },
    {
      image: "https://i0.wp.com/bhumiitech.com/wp-content/uploads/2023/10/New-Project-28.png?ssl=1",
      title: "Train top level SOC analyst",
      description: "Equip SOC analysts to vigilantly detect and manage real-world threats with confidence and assurance.",
    },
    {
      image: "https://i0.wp.com/bhumiitech.com/wp-content/uploads/2023/10/New-Project-29.png?ssl=1",
      title: "Simulate advanced attack scenarios",
      description: "Experience complex attack simulations to sharpen defensive and offensive cybersecurity techniques in real time.",
    },
    {
      image: "https://i0.wp.com/bhumiitech.com/wp-content/uploads/2023/10/New-Project-30.png?ssl=1",
      title: "Detailed incident reports",
      description: "Generate comprehensive reports capturing every event, action, and decision during simulated security incidents.",
    },
    {
      image: "https://i0.wp.com/bhumiitech.com/wp-content/uploads/2023/10/New-Project-31.png?ssl=1",
      title: "Live performance monitoring",
      description: "Track team and individual performance through real-time dashboards and analytics for effective feedback.",
    },
    {
      image: "https://i0.wp.com/bhumiitech.com/wp-content/uploads/2023/10/New-Project-32.png?ssl=1",
      title: "Hands-on malware analysis",
      description: "Dive deep into malware behavior and analysis within a controlled, realistic environment to build practical skills.",
    },
    {
      image: "https://i0.wp.com/bhumiitech.com/wp-content/uploads/2023/10/New-Project-33.png?ssl=1",
      title: "Scenario-based learning modules",
      description: "Interactive modules designed around specific threat cases, enhancing investigative and decision-making abilities.",
    },
    {
      image: "https://i0.wp.com/bhumiitech.com/wp-content/uploads/2023/10/New-Project-34.png?ssl=1",
      title: "Customizable threat intelligence feeds",
      description: "Integrate and manage tailored threat feeds for dynamic, data-driven security operations training and response.",
    },
  ]);

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      handlePrevSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = () => {
    setCards((prevCards) => {
      const lastCard = prevCards[prevCards.length - 1];
      return [lastCard, ...prevCards.slice(0, -1)];
    });
  };

  // Function to create grid background for sections - Add this near the useEffect hooks
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

  const handleNextSlide = () => {
    setCards((prevCards) => {
      const firstCard = prevCards[0];
      return [...prevCards.slice(1), firstCard];
    });
  };

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
      image: AdvancedTrainingEnvironment,
      title: "People",
      description:
        "Our state-of-the-art cyber range simulates real-world attack scenarios for hands-on training.",
      stats: { value: "1000+", label: "Scenarios" },
    },
    {
      image: RealTimeAttackSimulation,
      title: "Real-time Attack Simulation",
      description:
        "Experience realistic cyber attacks in a controlled environment.",
      stats: { value: "24/7", label: "Monitoring" },
    },
    {
      image: ComprehensiveAnalytics,
      title: "Comprehensive Analytics",
      description:
        "Get detailed insights into your team's performance and security posture.",
      stats: { value: "100%", label: "Accuracy" },
    },
  ];

  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Advanced Security",
      description: "State-of-the-art protection against evolving cyber threats",
      color: "text-blue-500",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Real-time Monitoring",
      description: "Instant detection and response to security incidents",
      color: "text-yellow-500",
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Team Collaboration",
      description: "Seamless coordination between security teams",
      color: "text-green-500",
    },
    {
      icon: <Target className="h-8 w-8 text-red-500" />,
      title: "Precision Training",
      description: "Targeted exercises for specific security scenarios",
      color: "text-red-500",
    },
  ];

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

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <main className="flex-1" ref={containerRef}>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full min-h-[80vh] bg-gradient-to-b from-black to-gray-900 overflow-hidden">
          {/* Grid Background */}
          <GridBackground />

          {/* Floating Orbs */}
          <motion.div
            className="absolute -z-10 top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl"
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
            className="absolute -z-10 bottom-1/4 right-1/4 w-48 md:w-64 h-48 md:h-64 rounded-full bg-gradient-to-tr from-blue-500/10 to-green-500/10 blur-3xl"
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

          <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 mx-auto relative z-10 flex items-center justify-center min-h-[80vh]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-6 max-w-5xl py-12"
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
                className="text-base md:text-lg lg:text-xl text-gray-400 max-w-[700px] mx-auto"
              >
                Real-world attacks, hands-on training, unmatched Cyber
                Resilience.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 justify-center mt-6"
              >
                <Link to="/get-started">
                  <Button
                    variant="outline"
                    className="category-filter relative group flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200/10 hover:bg-white/10 transition-all duration-300"
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
                    className="category-filter relative group flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                    <span className="relative z-10 flex items-center text-gray-100">
                      Watch Demo
                      <Play className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Link to="/contact">
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
                          rotate: [0, 5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
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

        {/* Build Team, Fight & Learn Together Section */}
        <section className="relative w-full min-h-[80vh] bg-gray-900 from-black to-gray-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <GridBackground />
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

          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto relative z-10 py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl"></div>
                <div className="relative z-10 h-full w-full rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={CyberSecurityTraining}
                    alt="Cyber Security Training"
                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col space-y-8"
              >
                <div className="space-y-4">
                  {/* <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100/5 backdrop-blur-sm text-primary text-sm font-medium border border-gray-200/10"
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    Enterprise-Grade Security Platform
                  </motion.div> */}

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white"
                  >
                    Build Team, Fight & Learn Together
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-base text-gray-400 max-w-[600px]"
                  >
                    Rangеstorm's Cybеr Rangе Platform pionееrs cybеrsеcurity
                    training, offеring an advancеd, hands-on еxpеriеncе for
                    profеssionals to prеparе for complеx thrеats.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {[
                    "Skill Development",
                    "Realistic Simulation",
                    "Safe Environment",
                    "Team collaboration",
                    "Scenario Variety",
                    "Continuous Learning",
                    "Certification preparation",
                    "Gamification",
                    "No impact on business",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                      className="flex items-center space-x-3 text-gray-300 group"
                    >
                      <span className="text-primary group-hover:scale-110 transition-transform text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </span>
                      <span className="group-hover:text-gray-100 transition-colors">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap gap-4 mt-8"
                >
                  <Link to="/get-started">
                    <Button
                      variant="outline"
                      className="group relative flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                      <span className="relative z-10 flex items-center text-gray-100">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="relative w-full py-20 md:py-32 bg-gray-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            {/* Grid Background */}
            <GridBackground />
          </div>
          
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-600"
            >
              Interactive Training Environment
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  image: AdvancedTrainingEnvironment,
                  title: "People",
                  description:
                    "Enhancing Skills and Awareness",
                  stats: { value: "1000+", label: "Scenarios" },
                  points: [
                    "Realistic Training",
                    "Building Expertise",
                    "Promoting a Security Mindset",
                  ],
                },
                {
                  image: RealTimeAttackSimulation,
                  title: "Process",
                  description:
                    "Refining Response Strategies",
                  stats: { value: "24/7", label: "Monitoring" },
                  points: [
                    "Incident Response Drills",
                    "Procedure Testing and Optimization",
                    "Compliance Training",
                  ],
                },
                {
                  image: ComprehensiveAnalytics,
                  title: "Technology",
                  description:
                    "Leveraging Advanced Tools",
                  stats: { value: "100%", label: "Accuracy" },
                  points: [
                    "Testing New Technologies",
                    "Integration with Existing Systems",
                    "Continuous Learning and Adaptation",
                  ],
                },
              ].map((slide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-lg group"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-40" />
                    <div className="absolute bottom-4 left-4">
                      <div className="text-white transform transition-all duration-300 group-hover:translate-y-[-8px]">
                        <div className="text-2xl font-bold transition-colors duration-300 group-hover:text-gray-300">
                          {slide.stats.value}
                        </div>
                        <div className="text-sm opacity-80 transition-all duration-300 group-hover:opacity-100">
                          {slide.stats.label}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col h-full">
                    <div className="flex-1 space-y-4 mb-6">
                      <h3 className="text-xl font-bold transform transition-all duration-300 group-hover:translate-x-1 group-hover:text-gray-100 text-gray-300">
                        {slide.title}
                      </h3>
                      <p className="text-muted-foreground transition-all duration-300 group-hover:opacity-90">
                        {slide.description}
                      </p>

                      {/* Points Section */}
                      <div className="space-y-2 mt-4">
                        {slide.points.map((point, pointIndex) => (
                          <motion.div
                            key={pointIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.5 + pointIndex * 0.1,
                            }}
                            className="flex items-center space-x-2 text-gray-300 group-hover:text-gray-100 transition-colors"
                          >
                            <span className="text-primary text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                            </span>
                            <span>{point}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="w-full relative overflow-hidden bg-transparent border-2 border-primary hover:bg-primary/10 transition-all duration-300">
                        <span className="relative z-10 flex items-center justify-center group-hover:text-primary">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                        />
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How Cyber.Soldiers Works Section */}
        <section className="relative w-full min-h-[80vh] bg-gray-900 from-black to-gray-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
              <GridBackground />
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

          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto relative z-10 py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Title and Description */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col space-y-8"
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100/5 backdrop-blur-sm text-primary text-sm font-medium border border-gray-200/10 text-white"
                  >
                    <Shield className="mr-2 h-4 w-4 text-white" />
                    Know More
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white"
                  >
                    How <span className="text-white">Cyber.Soldiers</span> Works
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-base text-gray-400 max-w-[600px]"
                  >
                    Rangestorm offers a customizable cyber-training platform,
                    emphasizing real-world scenarios and diverse team formations.
                    With an integrated LMS, gamified learning, and realistic
                    traffic generation.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {[
                    "Customizable Training",
                    "Real-world Scenarios",
                    "Team Formation",
                    "Integrated LMS",
                    "Gamified Learning",
                    "Traffic Generation",
                    "Performance Analytics",
                    "Continuous Updates",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                      className="flex items-center space-x-3 text-gray-300 group"
                    >
                      <span className="text-primary group-hover:scale-110 transition-transform text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </span>
                      <span className="group-hover:text-primary transition-colors">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap gap-4 mt-8"
                >
                  <Link to="/get-started">
                    <Button
                      variant="outline"
                      className="group relative flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                      <span className="relative z-10 flex items-center text-gray-100">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Column - Carousel */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px]"
              >
                <div className="relative overflow-hidden h-full">
                  <div 
                    className="flex h-full"
                    style={{
                      transform: `translate3d(${(cards.findIndex(c => c === cards[0])) * 50}%, 0, 0)`,
                      transition: 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)',
                      willChange: 'transform'
                    }}
                  >
                    {cards.map((card, index) => (
                      <div
                        key={card.title}
                        className="flex-shrink-0 w-1/2 px-4"
                        style={{
                          opacity: index < 2 ? 1 : 0.3,
                          transform: `translate3d(0, 0, 0)`,
                          transition: 'opacity 500ms ease-in-out',
                          willChange: 'opacity, transform'
                        }}
                      >
                        <div 
                          className="h-full bg-white rounded-xl overflow-hidden shadow-lg"
                          style={{
                            transform: 'translate3d(0, 0, 0)',
                            backfaceVisibility: 'hidden',
                            perspective: 1000
                          }}
                        >
                          <div className="relative h-[200px] w-full">
                            <img
                              src={card.image}
                              alt={card.title}
                              className="w-full h-full object-cover"
                              style={{
                                transform: 'translate3d(0, 0, 0)',
                                backfaceVisibility: 'hidden'
                              }}
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-[#4B2D7F] mb-3">
                              {card.title}
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows with Slick-style transitions */}
                <button 
                  onClick={handlePrevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 rounded-full bg-[#4B2D7F]/50 hover:bg-[#4B2D7F] transition-all duration-300"
                  style={{
                    transform: 'translate3d(0, -50%, 0)',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button 
                  onClick={handleNextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 rounded-full bg-[#4B2D7F]/50 hover:bg-[#4B2D7F] transition-all duration-300"
                  style={{
                    transform: 'translate3d(0, -50%, 0)',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>

                <style jsx>{`
                  @keyframes slideIn {
                    from {
                      transform: translate3d(-100%, 0, 0);
                      opacity: 0;
                    }
                    to {
                      transform: translate3d(0, 0, 0);
                      opacity: 1;
                    }
                  }

                  @keyframes slideOut {
                    from {
                      transform: translate3d(0, 0, 0);
                      opacity: 1;
                    }
                    to {
                      transform: translate3d(100%, 0, 0);
                      opacity: 0;
                    }
                  }
                `}</style>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="relative w-full min-h-[80vh] bg-gray-900 from-black to-gray-900 overflow-hidden">
          {/* Background Elements */}
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

          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-[1920px] relative z-10 py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="flex flex-col items-center space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20 text-center">
              {/* Section Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm text-white text-sm font-medium border border-gray-200/10"
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Key Features
                </motion.div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
                  Important features of <span className="text-white">Cyber Range</span>
                </h2>
              </motion.div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                {/* Integrated LMS Platform */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-500/20">
                      <LayoutGrid className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Integrated LMS Platform</h3>
                      <p className="text-gray-400">
                        Our Rangestorm® has built in learning management system which provide advantage to students to learn and practice directly in a real world. It helps the instructor to know the candidates progress and see if the candidates is working enough to showcase significant growth.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Chart All Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/20">
                      <BarChart2 className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Chart All Actions</h3>
                      <p className="text-gray-400">
                        Our record reports will enable instructer to pinpoint the strengths, knowledge, capabilities and weaknesses of their candidates. Record contain the variety of smart reporting and metrics tools to understand and every student at a personal level.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Gamification */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/20">
                      <Gamepad2 className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Gamification</h3>
                      <p className="text-gray-400">
                        Gamification has a scientific effect on people learning behaviour. It increases learners' engagement, awareness, performance and productivity. Thus, we had decided to put the extensive effort to build the proper gamification in our Rangestorm.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Generate realistic traffic */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/20">
                      <TrafficCone className="h-6 w-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Generate realistic traffic</h3>
                      <p className="text-gray-400">
                        Practising on live machines that mimic real ones isn't sufficient. To bolster candidate confidence, we provide a feature to generate realistic traffic, ensuring scenarios are both authentic and challenging. This approach ensures trainees are well-prepared for real-world cyber situations.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="relative w-full min-h-[80vh] bg-gray-900 from-black to-gray-900 overflow-hidden">
          {/* Background Elements */}
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

          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-[1920px] relative z-10 py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="flex flex-col items-center space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20 text-center">
              {/* Section Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm text-white text-sm font-medium border border-gray-200/10"
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Case Study
                </motion.div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
                  <span className="text-white">Cyber Range</span> in your industry
                </h2>
              </motion.div>

              {/* Tabs Section */}
              <div className="w-full max-w-6xl">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Tab Titles */}
                  <div className="w-full md:w-1/3 space-y-2">
                    {tabs.map((tab, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onClick={() => setActiveTab(index)}
                        className={`w-full p-4 text-left rounded-lg transition-all duration-300 ${
                          activeTab === index
                            ? "bg-white/10 text-white border-l-4 border-primary"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {tab.title}
                      </motion.button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="w-full md:w-2/3">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="relative p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200/10"
                      >
                        <div className="space-y-6">
                          <img
                            src={tabs[activeTab].image}
                            alt={tabs[activeTab].title}
                            className="w-full h-auto rounded-lg"
                          />
                          <p className="text-gray-400 text-center">
                            {tabs[activeTab].content}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
