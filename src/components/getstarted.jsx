"use client"

import { motion } from "framer-motion"
import { Shield } from "lucide-react"
import assessment from "../asset2.jpeg"
import compliance from "../risk.webp"
import threat from "../asset1.jpeg" 

export default function GetStarted() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-900 from-black to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid background with finer lines and glow nodes */}
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] overflow-hidden">
          {/* Grid node glow effects */}
          <div className="grid-node absolute h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-500 blur-[3px] opacity-0 top-[20%] left-[40%] animate-grid-node-blink" style={{ animationDelay: "0.5s" }}></div>
          <div className="grid-node absolute h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-purple-500 blur-[3px] opacity-0 top-[40%] left-[25%] animate-grid-node-blink" style={{ animationDelay: "1.2s" }}></div>
          <div className="grid-node absolute h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-teal-500 blur-[3px] opacity-0 top-[70%] left-[60%] animate-grid-node-blink" style={{ animationDelay: "2.7s" }}></div>
        </div>
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      {/* Main Content */}
      <div className="container px-4 md:px-6 max-w-[1200px] mx-auto relative z-10 py-20">
        <div className="relative">
          <div className="absolute left-0 top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ '--line-fade-stop': '75%' }}></div>
          
          <div className="flex flex-col lg:flex-row items-start justify-between gap-0">
            {/* Left Content */}
            <div className="text-center lg:text-left lg:w-[40%] lg:sticky lg:top-20">
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
                className="text-xl md:text-2xl text-gray-400 lg:max-w-[500px] mb-6"
              >
                Secure your digital assets with our comprehensive cybersecurity solutions and expert training programs.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-lg font-medium transition-all duration-300 group"
                >
                  Contact Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* Cards Section - Right */}
            <div className="lg:w-[55%] mt-8 lg:mt-0">
              <div className="relative w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-4 py-8">
                {[
                  {
                    title: "Cyber Skilling",
                    description: "Comprehensive security evaluation and risk analysis for your digital infrastructure.",
                    gradient: "from-blue-500/20 to-purple-500/20",
                    image: assessment
                  },
                  {
                    title: "Assessment Services",
                    description: "Real-time threat monitoring and proactive security measures.",
                    gradient: "from-green-500/20 to-teal-500/20",
                    image: threat
                  },
                  {
                    title: "Compliance Audits",
                    description: "Ensure regulatory compliance with our comprehensive security frameworks.",
                    gradient: "from-purple-500/20 to-pink-500/20",
                    image: compliance
                  }
                ].map((card, index) => (
                  <div
                    key={card.title}
                    className="w-full md:w-[220px] lg:w-[240px] group transition-all duration-500 ease-in-out hover:z-[999]"
                    style={{
                      transformStyle: 'preserve-3d',
                      zIndex: 1
                    }}
                  >
                    <div className="relative w-full rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 shadow-2xl transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:translate-y-[-10px] hover:shadow-2xl">
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
        
        .grid-node {
          animation: grid-node-blink 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
} 