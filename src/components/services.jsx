import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import CyberSecurityServices from "../CyberSecurityServices.jpeg"
import networksecurity from "../networksecurity.png"
import cloudsecurity from "../cloudsecurity.webp"
import applicationsecurity from "../applicationsecurity.jpg"
import endpointprotection from "../endpointsecurity.webp"
import identityaccess from "../identityandaccessmanagement.avif"
import dataprotection from "../dataprotection.webp"
import ManagedSOC from "../soc.jpg"
import Vulnerability from "../Vulnerability&PenetrationTesting.jpg"
import RiskAssessment from "../risk.webp"
import AuditCompliance from "../AuditCompliance.webp"
import { Link } from "react-router-dom"

import { ArrowRight, Shield, Zap, Users, Target, Lock, Cloud, Database, Key, Network, Bug, FileCheck, AlertTriangle, Star, ChevronRight } from "lucide-react"

export default function Services() {
  const [selectedService, setSelectedService] = useState("Managed SOC")
  const [hoveredCard, setHoveredCard] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [counterValues, setCounterValues] = useState({})
  const [isCounterStarted, setIsCounterStarted] = useState(false)
  const containerRef = useRef(null)
  const sectionRefs = useRef([])
  const { scrollY } = useScroll()

  // Parallax effects
  const y = useTransform(scrollY, [0, 1000], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5])

  const services = [
    {
      id: "Managed SOC",
      title: "Managed SOC",
      description: "Our 24/7 Security Operations Center provides continuous monitoring, threat detection, and incident response to protect your organization from evolving cyber threats. Staffed by experienced security analysts using cutting-edge technology, our Managed SOC delivers enterprise-grade security without the overhead of building and maintaining your own security operations center.",
      image: ManagedSOC,
      icon: <Shield className="h-8 w-8" />,
      features: ["24/7 Monitoring", "Threat Detection", "Incident Response", "Real-time Alerts"],
      color: "text-blue-500"
    },
    {
      id: "Vulnerability & Penetration Testing",
      title: "Vulnerability & Testing",
      description: "Comprehensive security assessment services that identify and address vulnerabilities in your systems, applications, and infrastructure. Our expert team conducts thorough penetration testing to ensure your organization's security posture is robust and resilient.",
      image: Vulnerability,
      icon: <Bug className="h-8 w-8" />,
      features: ["System Assessment", "Application Testing", "Infrastructure Analysis", "Security Reports"],
      color: "text-red-500"
    },
    {
      id: "Risk Assessment ",
      title: "Risk Assessment",
      description: "Detailed risk analysis and compliance auditing services to help your organization meet regulatory requirements and industry standards. We provide actionable insights and recommendations to strengthen your security framework.",
      image: RiskAssessment,
      icon: <FileCheck className="h-8 w-8" />,
      features: ["Risk Analysis", "Compliance Auditing", "Policy Review", "Security Framework"],
      color: "text-green-500"
    },
    {
      id: "Audit Compliance",
      title: "Audit Compliance",
      description: "Rapid and effective incident response services to help your organization recover from security incidents. Our team provides immediate support, investigation, and remediation to minimize impact and prevent future occurrences.",
      image: AuditCompliance,
      icon: <AlertTriangle className="h-8 w-8" />,
      features: ["Rapid Response", "Investigation", "Remediation", "Prevention"],
      color: "text-yellow-500"
    }
  ]

  const securityCards = [
    {
      title: "Network Security",
      image: networksecurity,
      icon: <Network className="h-6 w-6" />,
      stats: { value: "99.9%", label: "Uptime" }
    },
    {
      title: "Cloud Security",
      image: cloudsecurity,
      icon: <Cloud className="h-6 w-6" />,
      stats: { value: "24/7", label: "Monitoring" }
    },
    {
      title: "Application Security",
      image: applicationsecurity,
      icon: <Lock className="h-6 w-6" />,
      stats: { value: "100%", label: "Coverage" }
    },
    {
      title: "Endpoint Protection",
      image: endpointprotection,
      icon: <Target className="h-6 w-6" />,
      stats: { value: "500+", label: "Endpoints" }
    },
    {
      title: "Identity & Access Management",
      image: identityaccess,
      icon: <Key className="h-6 w-6" />,
      stats: { value: "2FA", label: "Enabled" }
    },
    {
      title: "Data Protection",
      image: dataprotection,
      icon: <Database className="h-6 w-6" />,
      stats: { value: "256bit", label: "Encryption" }
    }
  ]

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
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          setIsVisible(true);
          
          if (entry.target.id === 'stats-section' && !isCounterStarted) {
            setIsCounterStarted(true);
            securityCards.forEach(card => {
              if (card.stats && card.stats.value) {
                animateCounter(card.stats.value, `${card.title}-stats`);
              }
            });
          }
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach(section => {
      if (section) sectionObserver.observe(section);
    });

    return () => {
      sectionRefs.current.forEach(section => {
        if (section) sectionObserver.unobserve(section);
      });
    };
  }, [isCounterStarted]);

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

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <main className="flex-1" ref={containerRef}>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-b from-black to-gray-950">
          {/* Animated Background Elements */}
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
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
            >
              <div className="space-y-6 max-w-[600px]">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-bounce-subtle border border-gray-200/10 hover:bg-primary/10 text-white"
                >
                  <Shield className="mr-2 h-4 w-4 text-white" />
                  Enterprise-Grade Security Services
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white"
                >
                  Cyber Security Services
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-gray-400"
                >
                  Comprehensive security solutions to protect your organization from evolving cyber threats.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link to="/contact">
                    <Button size="lg" className="h-12 px-8 text-base group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-gray-200/10 hover:bg-white/10 bg-white">
                      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700 "></div>
                      <span className="relative z-10 flex items-center text-black">
                        Contact Us
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-2xl"
              >
                <img
                  src={CyberSecurityServices}
                  alt="Security Services"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-2xl font-bold mb-2">24/7</div>
                  <div className="text-sm opacity-80">Security Operations</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Animation styles */}
          <style jsx>{`
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

        {/* Services Selection Section */}
        <section 
          ref={addToRefs}
          className="w-full py-20 md:py-32 bg-gray-950 relative overflow-hidden"
        >
          <GridBackground />

          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm mb-6 text-white">
                Tailored Solutions
              </div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4 text-white">
                Select your Security needs
              </h2>
            </motion.div>

            <div className="space-y-24">
              {/* Managed SOC Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 order-2 lg:order-1">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-gray-800 text-blue-500">
                      <Shield className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Managed SOC</h3>
                  </div>
                  <p className="text-lg text-gray-400">
                    Our 24/7 Security Operations Center provides continuous monitoring, threat detection, and incident response to protect your organization from evolving cyber threats. Staffed by experienced security analysts using cutting-edge technology.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    {["24/7 Monitoring", "Threat Detection", "Incident Response", "Real-time Alerts"].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                        <span className="text-base text-white">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl order-1 lg:order-2">
                  <img src={ManagedSOC} alt="Managed SOC" className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                </div>
              </div>

              {/* VAPT Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 order-2 lg:order-2">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-gray-800 text-red-500">
                      <Bug className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Vulnerability & Penetration Testing</h3>
                  </div>
                  <p className="text-lg text-gray-400">
                    Comprehensive security assessment services that identify and address vulnerabilities in your systems, applications, and infrastructure. Our expert team conducts thorough penetration testing.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    {["System Assessment", "Application Testing", "Infrastructure Analysis", "Security Reports"].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-red-500" />
                        <span className="text-base text-white">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl order-1 lg:order-1">
                  <img src={Vulnerability} alt="Vulnerability Assessment" className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                </div>
              </div>

              {/* Risk Assessment Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 order-2 lg:order-1">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-gray-800 text-green-500">
                      <AlertTriangle className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Risk Assessment</h3>
                  </div>
                  <p className="text-lg text-gray-400">
                    Detailed risk analysis and assessment services to help your organization identify, evaluate, and mitigate potential security risks. We provide actionable insights and recommendations.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    {["Risk Analysis", "Security Evaluation", "Threat Modeling", "Mitigation Planning"].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span className="text-base text-white">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl order-1 lg:order-2">
                  <img src={RiskAssessment} alt="Risk Assessment" className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                </div>
              </div>

              {/* Audit Compliance Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 order-2 lg:order-2">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-gray-800 text-yellow-500">
                      <FileCheck className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Audit & Compliance</h3>
                  </div>
                  <p className="text-lg text-gray-400">
                    Comprehensive compliance auditing services to help your organization meet regulatory requirements and industry standards. We ensure your security framework aligns with compliance needs.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    {["Compliance Auditing", "Policy Review", "Standards Alignment", "Regulatory Support"].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-yellow-500" />
                        <span className="text-base text-white">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl order-1 lg:order-1">
                  <img src={AuditCompliance} alt="Audit Compliance" className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                </div>
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
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
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
      `}</style>
    </main>
  )
} 