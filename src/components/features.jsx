import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Shield, Zap, Lock, Globe, Server, Code, Database, Cloud, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    title: "Advanced Threat Protection",
    description: "Real-time monitoring and protection against sophisticated cyber threats",
    icon: <Shield className="h-6 w-6 text-blue-500" />,
    stats: { value: "99.9%", label: "Threat Detection" }
  },
  {
    title: "Rapid Incident Response",
    description: "Swift action and resolution for security incidents",
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
    stats: { value: "15min", label: "Response Time" }
  },
  {
    title: "Zero Trust Security",
    description: "Comprehensive security model for modern enterprises",
    icon: <Lock className="h-6 w-6 text-red-500" />,
    stats: { value: "100%", label: "Access Control" }
  },
  {
    title: "Global Security Network",
    description: "Worldwide protection and threat intelligence",
    icon: <Globe className="h-6 w-6 text-green-500" />,
    stats: { value: "24/7", label: "Monitoring" }
  },
  {
    title: "Secure Infrastructure",
    description: "Hardened infrastructure and compliance standards",
    icon: <Server className="h-6 w-6 text-purple-500" />,
    stats: { value: "ISO", label: "Certified" }
  },
  {
    title: "Secure Development",
    description: "Security-first approach to software development",
    icon: <Code className="h-6 w-6 text-cyan-500" />,
    stats: { value: "0", label: "Vulnerabilities" }
  },
  {
    title: "Data Protection",
    description: "Enterprise-grade encryption and data security",
    icon: <Database className="h-6 w-6 text-indigo-500" />,
    stats: { value: "AES", label: "256-bit" }
  },
  {
    title: "Cloud Security",
    description: "Comprehensive cloud infrastructure protection",
    icon: <Cloud className="h-6 w-6 text-pink-500" />,
    stats: { value: "Multi", label: "Cloud" }
  }
]

export default function Features() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const { scrollY } = useScroll();
  const gridRef = useRef(null);

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

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={containerRef} className="w-full min-h-screen relative overflow-hidden bg-gray-900 from-black to-gray-900">
      {/* Animated Background Elements */}
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

      {/* Content */}
      <div className="container px-4 md:px-6 max-w-[1400px] mx-auto relative z-10 py-20 ">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20 "
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full  text-primary text-sm font-medium mb-6  bg-gray-100"
          >
            {/* className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-primary text-sm font-medium" */}
            <Shield className="mr-2 h-4 w-4 " />
            Enterprise Security Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-600 dark:from-gray-100 dark:to-gray-600"
          >
            Why Cyber Soldiers?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-[800px] mx-auto"
          >
            Protect your digital assets with our advanced security features and cutting-edge technology
          </motion.p>
        </motion.div>

        {/* Features Grid - Updated to 3 cards per row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, translateY: -5 }}
              onHoverStart={() => setActiveFeature(index)}
              onHoverEnd={() => setActiveFeature(null)}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-gray-200/10 hover:bg-white/10 transition-all duration-300"
            >
              {/* Gradient hover effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
              {/* <div className="absolute -inset-x-full bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent group-hover:animate-slide-right-infinite"></div> */}
              
              {/* Feature Content */}
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="mb-4 p-3 inline-flex items-center justify-center rounded-lg bg-primary/10 text-white"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-gray-100">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-gray-400">
                  {feature.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-500 relative animate-pulse-slow">
                      {feature.stats.value}
                      <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                    </span>
                    <span className="text-sm text-muted-foreground text-gray-400">
                      {feature.stats.label}
                    </span>
                  </div>
                  <motion.div
                    animate={{
                      scale: activeFeature === index ? [1, 1.2, 1] : 1
                    }}
                    transition={{ duration: 0.5 }}
                    // className="h-2 w-2 rounded-full bg-primary"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative inline-block"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg"
            >
              <span className="relative z-10 flex items-center">
                Explore All Features <ArrowRight className="ml-2 h-5 w-5" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-white/20 to-blue-500/0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.75, ease: "easeInOut" }}
              />
            </Button>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-indigo-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          {/* <div className="text-sm text-muted-foreground mb-2">Discover More</div> */}
          <div className="w-6 h-10 border-2 border-primary/20 rounded-full p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}