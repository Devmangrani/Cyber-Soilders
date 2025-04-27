import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Youtube,
  ExternalLink,
  BookOpen,
  FileText,
  Download,
  Monitor,
  Shield,
  Award,
  Zap,
  ArrowRight,
  ChevronDown,
} from "lucide-react";;

import CISPPLogo from "../CISSP.png";
import CISALogo from "../CISA.png";
import CISMLogo from "../CISM.png";
import CRISCLogo from "../CRISC.png";
import CEHLogo from "../CEH.png";
import CompTIALogo from "../CompTIA.png";
import FutureOfCyberSecurity from "../soc.jpg";
import Certified from "../Certified.jpeg"
import Cyberlogo from "../cyberlogo.png"

// Array of cybersecurity-related image URLs
const cyberImages = [
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=640&h=360&fit=crop", // Hacker with code
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=640&h=360&fit=crop", // Lock and security
  "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=640&h=360&fit=crop", // Data visualization
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=640&h=360&fit=crop", // Binary code
  "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=640&h=360&fit=crop", // Encryption
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=640&h=360&fit=crop", // Network security
  "https://images.unsplash.com/photo-1544890225-2f3faec4cd60?w=640&h=360&fit=crop", // Security server
  "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=640&h=360&fit=crop", // Cybersecurity concept
  "https://images.unsplash.com/photo-1610986602538-431d65df4385?w=640&h=360&fit=crop", // Security dashboard
  "https://images.unsplash.com/photo-1643574772335-1a38bb0d8f5d?w=640&h=360&fit=crop", // Cybersecurity training
];

// Add this at the top of your resources.jsx file, near the other constants

// Add this at the top of your resources.jsx file, replacing the previous cybersecurityPlaylist

// Extract video IDs from the YouTube URLs
function extractVideoId(url) {
  const regExp = /(?:\?v=|\/embed\/|\/watch\?v=|\/watch\?.+&v=|youtu.be\/|\/v\/|(?:\?|&)si=.+)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[1]) ? match[1] : null;
}

// Cybersecurity webinar playlist data
// Update the cybersecurityPlaylist with more reliable thumbnail information

// Cybersecurity webinar playlist data with improved thumbnail handling
const cybersecurityPlaylist = [
  {
    id: "1kPv-3jfJ1c", // https://youtu.be/1kPv-3jfJ1c?si=MACZczbJoShh2DcF
    title: "30 Days CISSP Study Plan",
    shortTitle: "How to Prepare 30 Days Study Plan for CISSP - By Ajit Pal Singh",
    description: "Learn how to create and follow an effective 30-day study plan for the CISSP certification with guidance from expert Ajit Pal Singh.",
    icon: "Award",
    thumbnailUrl: "https://i.ytimg.com/vi/1kPv-3jfJ1c/hqdefault.jpg"
  },
  {
    id: "ajQHc44FV54", // https://youtu.be/ajQHc44FV54?si=sLbjMXt8xXjKoirk
    title: "Guide to CISSP",
    shortTitle: "Guide to CISSP: The Ultimate Certification for Cybersecurity Professionals - By Ajit Pal Singh",
    description: "Comprehensive guide to the CISSP certification, considered the gold standard for cybersecurity professionals, presented by Ajit Pal Singh.",
    icon: "Shield",
    thumbnailUrl: "https://i.ytimg.com/vi/ajQHc44FV54/hqdefault.jpg"
  },
  {
    id: "0yH1Agb_JEE", // https://youtu.be/0yH1Agb_JEE?si=h5fYIjrEhrb1d2-W
    title: "Cybersecurity for Freshers & CEH v12",
    shortTitle: "Cyber Security Career for Freshers | Is CEH v12 Worth It?",
    description: "Guide for beginners entering the cybersecurity field and an analysis of whether the Certified Ethical Hacker (CEH) v12 certification is worthwhile.",
    icon: "Zap",
    thumbnailUrl: "https://i.ytimg.com/vi/0yH1Agb_JEE/hqdefault.jpg"
  },
  {
    id: "Kz__eQ4GsRA", // https://youtu.be/Kz__eQ4GsRA?si=cJtb5wur5JetYI-l
    title: "InfoSec Management & CISM",
    shortTitle: "Information Security Management & Relevance of CISM by Saaz Rai",
    description: "Industry expert Saaz Rai explains information security management concepts and the importance of the CISM certification.",
    icon: "FileText",
    thumbnailUrl: "https://i.ytimg.com/vi/Kz__eQ4GsRA/hqdefault.jpg"
  },
  {
    id: "BFMw-UL7Ic4", // https://youtu.be/BFMw-UL7Ic4?si=Zk5FCuLOvUmG-yYy
    title: "Excel in IS GRC & Audit Career",
    shortTitle: "Online Master Class on How to Excel in IS GRC & Audit Career on Cyber Soldiers",
    description: "Master class on building a successful career in Information Security Governance, Risk, Compliance, and Audit.",
    icon: "Monitor",
    thumbnailUrl: "https://i.ytimg.com/vi/BFMw-UL7Ic4/hqdefault.jpg"
  },
  {
    id: "pyTuuye6Hbk", // https://youtu.be/pyTuuye6Hbk?si=g5G6-Fz3ZQ4ME9Ko
    title: "CISA Exam Made Easy",
    shortTitle: "Career in Cloud Security & Relevance of CCSP",
    description: "Prepare for the CCSP exam with our comprehensive CCSP Certification Training Course. Gain the knowledge and skills needed to excel in cloud security and enhance your professional profile in the fast-growing field of cloud computing.",
    icon: "Award",
    thumbnailUrl: "https://i.ytimg.com/vi/pyTuuye6Hbk/hqdefault.jpg"
  },
  // {
  //   id: "Kz__eQ4GsRA", // InfoSec Management & CISM
  //   title: "Information Security Management & Relevance of CISM by Saaz Rai",
  //   shortTitle: "InfoSec Management & CISM",
  //   description: "Industry expert Saaz Rai explains information security management concepts and the importance of the CISM certification.",
  //   icon: "Shield",
  //   thumbnailUrl: "https://i.ytimg.com/vi/Kz__eQ4GsRA/hqdefault.jpg"
  // },
  {
    id: "0yH1Agb_JEE", // Cybersecurity for Freshers
    title: "Cyber Security Career for Freshers | Is CEH v12 Worth It?",
    shortTitle: "Cybersecurity for Freshers & CEH v12",
    description: "Guide for beginners entering the cybersecurity field and an analysis of whether the Certified Ethical Hacker (CEH) v12 certification is worthwhile.",
    icon: "Zap",
    thumbnailUrl: "https://i.ytimg.com/vi/0yH1Agb_JEE/hqdefault.jpg"
  },
  // {
  //   id: "ajQHc44FV54", // Guide to CISSP
  //   title: "Guide to CISSP: The Ultimate Certification for Cybersecurity Professionals - By Ajit Pal Singh",
  //   shortTitle: "Guide to CISSP",
  //   description: "Comprehensive guide to the CISSP certification, considered the gold standard for cybersecurity professionals, presented by Ajit Pal Singh.",
  //   icon: "Award",
  //   thumbnailUrl: "https://i.ytimg.com/vi/ajQHc44FV54/hqdefault.jpg"
  // },
  {
    id: "ao31ByEECgE", // Master CISA Class
    title: "Master CISA Class – Ultimate Guide to Becoming a Certified Information Systems Auditor (CISA)",
    shortTitle: "Master CISA Class",
    description: "In-depth class on preparing for and passing the CISA exam to become a Certified Information Systems Auditor.",
    icon: "Monitor",
    thumbnailUrl: "https://i.ytimg.com/vi/ao31ByEECgE/hqdefault.jpg"
  }
];


// Certification logos as shown in sketch
// First, update your certifications array with these additional properties
const certifications = [
  {
    id: "cissp-cert",
    name: "CISSP",
    logo: CISPPLogo,
    altText: "CISSP - Certified Information Systems Security Professional",
    link: "https://youtube.com/playlist?list=PLzecYhCbkDdHSQQ6VbyO6T0jZ1SSYDe0h&si=jYdpP2DAQ9Q570WH",
    thumbnailUrl: "https://i.ytimg.com/vi/S243Um3oNII/hqdefault.jpg",
    shortTitle: "CISSP",
    description: "The gold standard for cybersecurity professionals. Covers security and risk management, asset security, and more.",
    icon: "Shield"
  },
  {
    id: "cism-cert",
    name: "CISM",
    logo: CISMLogo,
    altText: "CISM - Certified Information Security Manager",
    link: "https://youtube.com/playlist?list=PLzecYhCbkDdEhTOOkOln9i5G1qIrjmID3&si=uNdvikPbAFOQIciN",
    thumbnailUrl: "https://i.ytimg.com/vi/bLSLMk794d8/hqdefault.jpg",
    shortTitle: "CISM",
    description: "Focused on information security management. Perfect for IT professionals looking to step into management roles.",
    icon: "FileText"
  },
  {
    id: "cisa-cert",
    name: "CISA",
    logo: CISALogo,
    altText: "CISA - Certified Information Systems Auditor",
    link: "https://youtube.com/playlist?list=PLzecYhCbkDdFoQNwmQpfwPrn4srYVJrcP&si=qNpUfCS0paKH-Cbb",
    thumbnailUrl: "https://i.ytimg.com/vi/SPWgCbLcipM/hqdefault.jpg",
    shortTitle: "CISA",
    description: "The standard for IT auditing. Focuses on auditing, control, and security of information systems.",
    icon: "Monitor"
  },
  {
    id: "crisc-cert",
    name: "CRISC",
    logo: CRISCLogo,
    altText: "CRISC - Certified in Risk and Information Systems Control",
    link: "https://youtube.com/playlist?list=PLzecYhCbkDdHz5dAph1nwPTRo5YCzuO-X&si=lBiE0GfztKuLUcVG",
    thumbnailUrl: "https://i.ytimg.com/vi/23gYANJufj4/hqdefault.jpg",
    shortTitle: "CRISC",
    description: "Specializes in enterprise IT risk management and information systems control design and implementation.",
    icon: "Award"
  },
  {
    id: "ceh-cert",
    name: "CEH",
    logo: CEHLogo,
    altText: "CEH - Certified Ethical Hacker",
    link: "https://youtu.be/CtSxNLQ2Ed4?si=FHrqLZUPT1hctFWr",
    thumbnailUrl: "https://i.ytimg.com/vi/CtSxNLQ2Ed4/hqdefault.jpg",
    shortTitle: "CEH",
    description: "Learn to think like a hacker to better defend against security threats and vulnerabilities.",
    icon: "Zap"
  },
  {
    id: "comptia-cert",
    name: "CompTIA Security+",
    logo: CompTIALogo,
    altText: "CompTIA Security+",
    link: "https://youtube.com/playlist?list=PLzecYhCbkDdHB7kuKYRL4xgipgJbIxtPm&si=JWbxMevdX2jzDolz",
    thumbnailUrl: "https://i.ytimg.com/vi/QR-UR-Tty5o/hqdefault.jpg",
    shortTitle: "CompTIA Security+",
    description: "Entry-level certification covering network security, compliance, operational security, and more.",
    icon: "Shield"
  },
];

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Introduction to Cyber Security",
    description:
      "Learn the fundamentals of cyber security and why it matters for your organization.",
    featured: true,
    icon: <Shield className="h-6 w-6" />,
    coverImage: cyberImages[0], // Assign the first image
  },
  {
    id: "UCdKuE7ghBQ",
    title: "Threat Modeling Basics",
    description:
      "Understanding how to identify and model potential security threats to your systems.",
    icon: <Monitor className="h-6 w-6" />,
    coverImage: cyberImages[1],
  },
  {
    id: "jGI8VSKYz-c",
    title: "Penetration Testing Explained",
    description:
      "A comprehensive overview of penetration testing methodologies and tools.",
    icon: <Zap className="h-6 w-6" />,
    coverImage: cyberImages[2],
  },
  {
    id: "9bZkp7q19f0",
    title: "Security Operations Center Tour",
    description:
      "Take a virtual tour of a modern Security Operations Center (SOC).",
    icon: <Monitor className="h-6 w-6" />,
    coverImage: cyberImages[3],
  },
  {
    id: "kJQP7kiw5Fk",
    title: "Incident Response Planning",
    description:
      "How to develop and implement an effective incident response plan.",
    icon: <Award className="h-6 w-6" />,
    coverImage: cyberImages[4],
  },
  {
    id: "JGwWNGJdvx8",
    title: "Cloud Security Best Practices",
    description:
      "Essential security practices for protecting your cloud infrastructure.",
    icon: <Shield className="h-6 w-6" />,
    coverImage: cyberImages[5],
  },
  {
    id: "RgKAFK5djSk",
    title: "Social Engineering Attacks",
    description:
      "Understanding and defending against social engineering tactics.",
    icon: <Zap className="h-6 w-6" />,
    coverImage: cyberImages[6],
  },
  {
    id: "fJ9rUzIMcZQ",
    title: "Secure Coding Practices",
    description:
      "Learn how to write secure code and avoid common vulnerabilities.",
    icon: <FileText className="h-6 w-6" />,
    coverImage: cyberImages[7],
  },
  {
    id: "YQHsXMglC9A",
    title: "Cyber Security for Remote Work",
    description:
      "Security considerations and best practices for remote work environments.",
    icon: <Shield className="h-6 w-6" />,
    coverImage: cyberImages[8],
  },
  {
    id: "CevxZvSJLk8",
    title: "Future of Cyber Security",
    description:
      "Emerging trends and technologies shaping the future of cyber security.",
    icon: <Award className="h-6 w-6" />,
    coverImage: FutureOfCyberSecurity,
  },
];

const resources = [
  {
    title: "Whitepapers",
    description: "In-depth technical analysis and research papers",
    icon: <FileText className="h-6 w-6" />,
    count: "120+",
  },
  {
    title: "E-Books",
    description: "Comprehensive guides on various security topics",
    icon: <BookOpen className="h-6 w-6" />,
    count: "85+",
  },
  {
    title: "Templates",
    description: "Security policy and procedure templates",
    icon: <Download className="h-6 w-6" />,
    count: "56+",
  },
  {
    title: "Webinars",
    description: "Live and recorded educational sessions",
    icon: <Monitor className="h-6 w-6" />,
    count: "210+",
  },
];

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

export default function Resources() {
  const featuredVideo = videos.find((video) => video.featured);
  const [scrollY, setScrollY] = useState(0);
  const [showMoreWebinars, setShowMoreWebinars] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState(null);

  // Show only the first 6 webinars initially
  const displayedWebinars = showMoreWebinars 
    ? cybersecurityPlaylist 
    : cybersecurityPlaylist.slice(0, 6);

  // Handler to toggle showing more webinars
  const handleViewMoreClick = () => {
    setShowMoreWebinars(!showMoreWebinars);
  };

  // Render a video card with Cyberlogo instead of icons
  const renderVideoCard = (video) => (
    <div
      key={video.id}
      className="group bg-gray-800 rounded-lg border border-gray-700 hover:border-primary/40 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
      onMouseEnter={() => setHoveredVideo(video.shortTitle)}
      onMouseLeave={() => setHoveredVideo(null)}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-700"></div>

      <div className="aspect-video relative">
        <img
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={video.thumbnailUrl}
          // Fallback mechanism if the primary thumbnail fails
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop
            e.target.src = `https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`; // Try medium quality
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="rounded-full bg-white/90 p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <Youtube className="h-8 w-8 text-red-600" />
          </div>
        </div>
      </div>

      <div className="p-4 space-y-2 relative z-10">
      <div className="flex items-center gap-3">
        <img 
          src={Cyberlogo} 
          alt="Cyber Logo" 
          className="w-8 h-8 object-contain"
        />
        <h3 className="text-lg font-bold text-gray-100 group-hover:text-gray-100 transition-colors duration-300 line-clamp-1">
          {video.shortTitle}
        </h3>
      </div>
        <p className="text-gray-400 text-sm line-clamp-2">
          {video.description}
        </p>
        <a 
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <Button
            variant="ghost"
            className="w-full mt-4 group overflow-hidden relative hover:bg-primary/10"
          >
            <span className="relative z-10 text-gray-100 flex items-center">
              Watch Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute right-0 top-0 h-full aspect-square bg-primary/0 group-hover:bg-primary/20 rounded-full scale-0 group-hover:scale-150 transition-all duration-500 origin-center"></div>
          </Button>
        </a>
      </div>
    </div>
  );

  const [counterValues, setCounterValues] = useState({
    videos: "0",
    views: "0",
    satisfaction: "0%",
    certifications: "0",
  });
  
  // Add this hook after your other useEffect hooks
  useEffect(() => {
    // Target values
    const targetValues = {
      videos: 250,
      views: 10000,
      satisfaction: 95,
      certifications: 24,
    };
    
    // Animation duration in ms
    const duration = 2000;
    // Start time
    const startTime = Date.now();
    
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      
      // Calculate progress (0 to 1)
      const progress = Math.min(elapsed / duration, 1);
      
      // Use easeOutExpo for a more natural animation
      // t: current time, b: beginning value, c: change in value, d: duration
      const easeOutExpo = (t, b, c, d) => {
        return t === d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
      };
      
      // Apply easing to progress
      const easedProgress = easeOutExpo(progress, 0, 1, 1);
      
      // Update values based on progress
      setCounterValues({
        videos: `${Math.floor(easedProgress * targetValues.videos)}+`,
        views: `${Math.floor(easedProgress * targetValues.views) >= 1000 ? 
          `${Math.floor(easedProgress * targetValues.views / 1000)}k` : 
          Math.floor(easedProgress * targetValues.views)}+`,
        satisfaction: `${Math.floor(easedProgress * targetValues.satisfaction)}%`,
        certifications: `${Math.floor(easedProgress * targetValues.certifications)}+`,
      });
      
      // Clear interval when animation is complete
      if (progress >= 1) {
        clearInterval(interval);
      }
    }, 16); // ~60fps
    
    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this runs once on mount

  // Add gridRef for animations
  const gridRef = useRef(null);
  const heroRef = useRef(null);

  // Simple scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize animations with GSAP if you want (optional)
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Safety check to prevent errors if gsap isn't available
      const gsap = window.gsap;
      if (gsap && gsap.to) {
        // Enhanced grid background animation
        if (gridRef.current) {
          gsap.to(gridRef.current, {
            backgroundSize: "30px 30px",
            opacity: 0.7,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom center",
              scrub: 0.5,
            },
          });
        }
      }
    }
  }, []);

  return (
    <main className="flex-1 overflow-x-hidden">
      <div className="flex flex-col min-h-screen w-full">
        {/* Hero Section with Enhanced Visual Elements */}
        <section
          ref={heroRef}
          className="relative w-full py-16 md:py-28 lg:py-32 bg-gray-950 overflow-hidden"
        >
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
              className="grid-trace absolute h-[1px] w-[150px] bg-gradient-to-r from-teal-500/0 via-teal-500/70 to-teal-500/0 top-[70%] left-[60%] animate-grid-trace-horizontal"
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

            {/* Neon intersection highlights */}
            <div
              className="grid-intersection absolute h-3 w-3 rounded-full bg-blue-500/20 blur-[5px] top-[24%] left-[48%] animate-grid-intersection-pulse"
              style={{ animationDelay: "4.5s" }}
            ></div>
            <div
              className="grid-intersection absolute h-3 w-3 rounded-full bg-purple-500/20 blur-[5px] top-[36%] left-[60%] animate-grid-intersection-pulse"
              style={{ animationDelay: "2.3s" }}
            ></div>
            <div
              className="grid-intersection absolute h-3 w-3 rounded-full bg-teal-500/20 blur-[5px] top-[56%] left-[32%] animate-grid-intersection-pulse"
              style={{ animationDelay: "6.2s" }}
            ></div>
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
            <div
              className="animate-pulse-slow absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="animate-pulse-slow absolute top-[70%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"
              style={{ animationDelay: "2s" }}
            ></div>

            <div
              className="animate-pulse-slow absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="animate-pulse-slow absolute top-0 left-[80%] w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>

          {/* Digital circuit-like pattern overlay */}
          <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="circuit-pattern"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M20 20 L80 20 L80 80 L20 80 Z"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M50 0 L50 20 M0 50 L20 50 M80 50 L100 50 M50 80 L50 100"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                  <circle cx="50" cy="50" r="3" fill="white" />
                  <circle cx="20" cy="20" r="2" fill="white" />
                  <circle cx="80" cy="20" r="2" fill="white" />
                  <circle cx="20" cy="80" r="2" fill="white" />
                  <circle cx="80" cy="80" r="2" fill="white" />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                fill="url(#circuit-pattern)"
                className="animate-pulse-very-slow"
              />
            </svg>
          </div>

          {/* Subtle diagonal lines overlay */}
          <div className="absolute inset-0 -z-10 opacity-5 pointer-events-none bg-[linear-gradient(45deg,transparent_44%,#ffffff_47%,#ffffff_53%,transparent_56%)] bg-[length:20px_20px]"></div>

          {/* Scan line effect */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="scan-line w-full h-[2px] bg-blue-500/10 animate-scan-line"></div>
          </div>

          <div className="container relative z-10 px-4 md:px-6 max-w-[1200px] mx-auto w-full">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="overflow-hidden">
                <div className="hero-badge inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-gray-100 text-sm font-medium">
                  <Youtube className="mr-2 h-4 w-4" />
                  Educational Content
                </div>
              </div>
              <div className="overflow-hidden">
                <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-600 dark:from-gray-100 dark:to-gray-100 pb-2">
                  Cyber.Training Resources
                </h1>
              </div>
              <div className="overflow-hidden">
                <p className="hero-description text-lg text-gray-400 max-w-[600px]">
                  Explore our comprehensive collection of videos, guides, and
                  tools to enhance your cybersecurity knowledge.
                </p>
              </div>

              {/* Stats with enhanced animations */}
              <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
                <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200/10 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-x-full bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent group-hover:animate-slide-right-infinite"></div>
                  <div className="text-4xl font-bold text-gray-100 mb-1 relative">
                    <span className="animate-counter inline-block">
                      {counterValues.videos}
                    </span>
                    <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">Videos</div>
                </div>
                
                <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200/10 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-x-full bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent group-hover:animate-slide-right-infinite" style={{ animationDelay: "0.2s" }}></div>
                  <div className="text-4xl font-bold text-gray-100 mb-1 relative">
                    <span className="animate-counter inline-block" style={{ animationDelay: "0.3s" }}>
                      {counterValues.views}
                    </span>
                    <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">Total Views</div>
                </div>
                
                <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200/10 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-x-full bottom-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent group-hover:animate-slide-right-infinite" style={{ animationDelay: "0.4s" }}></div>
                  <div className="text-4xl font-bold text-gray-100 mb-1 relative">
                    <span className="animate-counter inline-block" style={{ animationDelay: "0.6s" }}>
                      {counterValues.satisfaction}
                    </span>
                    <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">Satisfaction</div>
                </div>
                
                <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200/10 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-x-full bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent group-hover:animate-slide-right-infinite" style={{ animationDelay: "0.6s" }}></div>
                  <div className="text-4xl font-bold text-gray-100 mb-1 relative">
                    <span className="animate-counter inline-block" style={{ animationDelay: "0.9s" }}>
                      {counterValues.certifications}
                    </span>
                    <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">Topics Covered</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section with Cyberlogo instead of icons */}
        <section className="w-full py-12 md:py-24 bg-gray-950 relative overflow-hidden">
          <GridBackground />
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto w-full">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-100 px-3 py-1 text-sm mb-6">
                Certification Resources
              </div>
              <h2 className="text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400 mb-4">
                Industry-Standard Certifications
              </h2>
              <p className="text-lg text-gray-400 max-w-[600px] mx-auto">
                Resources to help you prepare for top cybersecurity certifications
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map(cert => (
                <div
                  key={cert.id}
                  className="group bg-gray-800 rounded-lg border border-gray-700 hover:border-primary/40 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
                  onMouseEnter={() => setHoveredVideo(cert.shortTitle)}
                  onMouseLeave={() => setHoveredVideo(null)}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-700"></div>

                  <div className="aspect-video relative">
                    <img
                      alt={cert.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={cert.thumbnailUrl}
                      onError={(e) => {
                        e.target.onerror = null; // Prevent infinite loop
                        e.target.src = cert.logo; // Fallback to logo if thumbnail fails
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="rounded-full bg-white/90 p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <Youtube className="h-8 w-8 text-red-600" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 space-y-2 relative z-10">
                  <div className="flex items-center gap-3">
                    <img 
                      src={Cyberlogo} 
                      alt="Cyber Logo" 
                      className="w-8 h-8 object-contain"
                    />
                    <h3 className="text-lg font-bold text-gray-100 group-hover:text-gray-100 transition-colors duration-300 line-clamp-1">
                      {cert.shortTitle}
                    </h3>
                  </div>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {cert.description}
                    </p>

                    {/* Correctly wrap the Button inside <a> */}
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button
                        variant="ghost"
                        className="w-full mt-4 group overflow-hidden relative hover:bg-primary/10"
                      >
                        <span className="relative z-10 text-gray-100 flex items-center">
                          View Resources
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <div className="absolute right-0 top-0 h-full aspect-square bg-primary/0 group-hover:bg-primary/20 rounded-full scale-0 group-hover:scale-150 transition-all duration-500 origin-center"></div>
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Gallery Section */}
        <section className="w-full py-12 md:py-24 bg-gray-950 relative overflow-hidden">
          <GridBackground />
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto w-full">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-100 px-3 py-1 text-sm mb-6">
                Our Events
              </div>
              <h2 className="text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400 mb-4">
                Cybersecurity Webinars
              </h2>
              <p className="text-lg text-gray-400 max-w-[600px] mx-auto">
                Browse through our comprehensive collection of cybersecurity
                certification and career development webinars
              </p>
            </div>

            {/* Videos grid with dynamic display */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedWebinars.map(video => renderVideoCard(video))}
            </div>
            
            {/* View More/Less Button */}
            <div className="flex justify-center mt-12">
              <Button 
                onClick={handleViewMoreClick}
                size="lg" 
                className="relative group h-12 px-8 text-base transition-all duration-300 hover:scale-105"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                <span className="relative z-10 flex items-center">
                  {showMoreWebinars ? 'View Less' : 'View More Webinars'}
                  {showMoreWebinars ? (
                    <ChevronDown className="ml-2 h-5 w-5 transform rotate-180 transition-transform" />
                  ) : (
                    <ChevronDown className="ml-2 h-5 w-5 transition-transform" />
                  )}
                </span>
              </Button>
            </div>
            
            {/* View All Webinars Button (always visible) */}
            <div className="flex justify-center mt-6">
              <a
                href="https://www.youtube.com/watch?v=pyTuuye6Hbk&list=PLzecYhCbkDdGsSt731Q_tRlaDS7tfVvxS"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  variant="outline"
                  size="lg" 
                  className="relative group h-12 px-8 text-base transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                  <span className="relative z-10 flex items-center">
                    View All on YouTube
                    <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-gray-950 relative overflow-hidden">
          <GridBackground />
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto w-full">
            <div className="flex flex-col items-center text-center space-y-6">
              <h2 className="text-4xl font-bold tracking-tighter text-gray-100">
                Ready to Enhance Your Cyber Security Skills?
              </h2>
              <p className="text-lg text-gray-400 max-w-[600px]">
                Subscribe to our channel and get access to all our educational
                content. Join our community of cybersecurity professionals
                today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-6">
                
              <Button
                size="lg"
                variant="outline"
                className="relative group h-12 px-8 text-base transition-all duration-300 hover:scale-105 bg-white text-gray-950"
                onClick={() => window.open('https://www.youtube.com/@cybersoldiersacademy', '_blank', 'noopener,noreferrer')}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                <span className="relative z-10 flex items-center">
                  <Youtube className="mr-2 h-5 w-5 text-red-600" />
                  Subscribe to Our Channel
                </span>
              </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Minimal CSS for animations */}
      <style jsx global>{`
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

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }

        @keyframes border-glow {
          0% {
            border-color: rgba(59, 130, 246, 0.3);
          }
          50% {
            border-color: rgba(139, 92, 246, 0.5);
          }
          100% {
            border-color: rgba(59, 130, 246, 0.3);
          }
        }

        .animate-border-glow {
          animation: border-glow 3s infinite;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s forwards;
        }

        /* Basic animations */
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s forwards;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s forwards;
        }

        /* Pulse animations */
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse-very-slow {
          0%,
          100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.15;
          }
        }

        .animate-pulse-very-slow {
          animation: pulse-very-slow 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Floating particles */
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .floating-particle {
          animation: float 6s ease-in-out infinite;
        }

        .floating-particle-slow {
          animation: float 8s ease-in-out infinite;
        }

        .floating-particle-fast {
          animation: float 4s ease-in-out infinite;
        }

        /* Grid animations */
        @keyframes grid-node-blink {
          0%,
          100% {
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
          0%,
          100% {
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

        /* Sliding animations */
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

        /* Parallax effects */
        .parallax-slow,
        .parallax-medium,
        .parallax-fast {
          will-change: transform;
          transition: transform 0.2s ease-out;
        }

        /* Group hover animations */
        .group:hover .group-hover\:scale-x-100 {
          transform: scaleX(1);
        }

        .group:hover .group-hover\:opacity-100 {
          opacity: 1;
        }
      `}</style>
    </main>
  );
}
