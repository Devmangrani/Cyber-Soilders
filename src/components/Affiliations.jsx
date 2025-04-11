// components/Affiliations.jsx
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import IIT_Madras_Logo from "../IIT_Madras_Logo.png"
import IITM_Pravartak_Logo from "../IITM_Pravartak_Logo.jpeg"
import BC_Court_Logo from "../BC_Court_Logo.png"
import Startup_India_Logo from "../Startup_India_Logo.png"
import Startup_MP_Logo from "../Startup_MP_Logo.png"
import MSME_Logo from "../MSME_Logo.png"
import MCA_Logo from "../MCA_Logo.jpeg"
import DG_Trust_Logo from "../DG_Trust_Logo.webp"

const affiliations = [
  {
    name: "IIT Madrass",
    logo: IIT_Madras_Logo,
    description: "India's premier technical institute"
  },
  {
    name: "IITM Pravartak",
    logo: IITM_Pravartak_Logo,
    description: "Technology Innovation Hub"
  },
  {
    name: "BC Court",
    logo: BC_Court_Logo,
    description: "Legal excellence and integrity"
  },
  {
    name: "Startup India",
    logo: Startup_India_Logo,
    description: "Empowering Indian startups"
  },
  {
    name: "Startup MP",
    logo: Startup_MP_Logo,
    description: "Madhya Pradesh's startup ecosystem"
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
    name: "DG foreign Trust",
    logo: DG_Trust_Logo,
    description: "International trust and cooperation"
  }
]

export default function Affiliations() {
  return (
    <section className="w-full py-20 md:py-32 bg-black">
      <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-8 text-white"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold tracking-tighter"
          >
            Our Affiliations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-[600px]"
          >
            
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {affiliations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200/10 hover:bg-white/10 transition-all duration-300 group"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="">
                    {/* <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    /> */}
                    <div className="relative z-10 flex items-center justify-center w-32 h-32 mx-auto rounded-full bg-gray-700">
                      <img src={item.logo} alt={`${item.name} Logo`} className="w-32 h-32 object-contain" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Button className="group">
              Learn More About Our Affiliations
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
