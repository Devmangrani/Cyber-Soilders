// components/Affiliations.jsx
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ArrowLeft, Circle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
// Temporarily commenting out these logos until official confirmation
// import IIT_Madras_Logo from "../IIT_Madras_Logo.png"
// import IITM_Pravartak_Logo from "../IITM_Pravartak_Logo.jpeg"
import EC_Council_Logo from "../EC_Council_Logo1.png"
import Startup_India_Logo from "../Startup_India_Logo.png"
// Removing Startup MP Logo as requested
// import Startup_MP_Logo from "../Startup_MP_Logo.png"
import MSME_Logo from "../MSME_Logo.png"
import MCA_Logo from "../MCA_Logo.png"
import DG_Trust_Logo from "../DG_Trust_Logo.webp"
import Comptia_Logo from "../compita_logo.png"

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

const affiliations = [
  // Temporarily hiding IITM & Pravartak logos
  /*{
    name: "IIT Madras",
    logo: IIT_Madras_Logo,
    description: "India's premier technical institute"
  },
  {
    name: "IITM Pravartak",
    logo: IITM_Pravartak_Logo,
    description: "Technology Innovation Hub"
  },*/
  {
    name: "EC Council",
    logo: EC_Council_Logo,
    description: "Global leader in cybersecurity certification"
  },
  {
    name: "Startup India",
    logo: Startup_India_Logo,
    description: "Empowering Indian startups"
  },
  {
    name: "Comptia",
    logo: Comptia_Logo,
    description: "Compliance and regulatory solutions"
  },
  {
    name: "MSME",
    logo: MSME_Logo,
    description: "Supporting small businesses"
  },
  {
    name: "Ministry of Corporate Affairs",
    logo: MCA_Logo,
    description: "Corporate governance and regulation"
  },
  {
    name: "DG Foreign Trade",
    logo: DG_Trust_Logo,
    description: "International trust and cooperation"
  }
]

export default function Affiliations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const carouselRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  // Calculate items per view based on screen size
  const getItemsPerView = () => {
    if (windowWidth < 640) return 1; // Mobile
    if (windowWidth < 1024) return 2; // Tablet
    return 3; // Desktop
  };
  
  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Calculate total number of pages based on current items per view
  const totalPages = Math.ceil(affiliations.length / getItemsPerView());
  
  // Handle autoplay
  useEffect(() => {
    let interval;
    
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay, totalPages]);
  
  // Handle manual navigation
  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };
  
  const goToPage = (index) => {
    setAutoplay(false);
    setActiveIndex(index);
  };

  return (
    <section className="w-full py-12 md:py-20 lg:py-32 bg-gray-900 overflow-hidden relative">
      <GridBackground />
      <div className="container px-4 md:px-6 max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-6 md:space-y-8 text-white"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-bold tracking-tighter"
          >
            Our Affiliations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-[600px]"
          >
            Partnering with leading organizations to deliver excellence
          </motion.p>

          {/* Carousel Container */}
          <div className="w-full relative">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -left-2 md:-left-4 transform -translate-y-1/2 z-20">
              <button 
                onClick={handlePrev}
                className="p-1.5 md:p-2 bg-black/30 backdrop-blur-sm rounded-full border border-gray-500/20 text-white hover:bg-white/10 transition-all"
              >
                <ArrowLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -right-2 md:-right-4 transform -translate-y-1/2 z-20">
              <button 
                onClick={handleNext}
                className="p-1.5 md:p-2 bg-black/30 backdrop-blur-sm rounded-full border border-gray-500/20 text-white hover:bg-white/10 transition-all"
              >
                <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>
            
            {/* Slider Track */}
            <div className="overflow-hidden">
              <motion.div
                ref={carouselRef}
                className="flex transition-all duration-500 ease-out"
                animate={{
                  x: `-${activeIndex * 100}%`
                }}
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 0.5
                }}
              >
                <div className="flex gap-4 md:gap-6 w-full">
                  {affiliations.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="relative flex-shrink-0 p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200/10 hover:bg-white/10 transition-all duration-300 group w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-16px)]"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                      <div className="relative z-10 flex flex-col items-center gap-3 md:gap-4">
                        <div className="relative z-10 flex items-center justify-center w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gray-700">
                          <img src={item.logo} alt={`${item.name} Logo`} className="w-20 h-20 md:w-32 md:h-32 object-contain" />
                        </div>
                        <div className="text-center">
                          <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">{item.name}</h3>
                          <p className="text-gray-400 text-xs md:text-sm">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6 md:mt-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className="transition-all duration-300"
                >
                  {activeIndex === index ? (
                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-indigo-500" />
                  ) : (
                    <Circle className="h-4 w-4 md:h-5 md:w-5 text-gray-400 hover:text-indigo-400" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}