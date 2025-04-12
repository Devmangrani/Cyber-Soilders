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
} from "lucide-react";

import CISPPLogo from "../CISSP.png";
import CISALogo from "../CISA.png";
import CISMLogo from "../CISM.png";
import CRISCLogo from "../CRISC.png";
import CEHLogo from "../CEH.png";
import CompTIALogo from "../CompTIA.png";
import FutureOfCyberSecurity from "../soc.jpg";

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

// Certification logos as shown in sketch
const certifications = [
  {
    name: "CISSP",
    logo: CISPPLogo,
    altText: "CISSP - Certified Information Systems Security Professional",
  },
  {
    name: "CISM",
    logo: CISMLogo,
    altText: "CISM - Certified Information Security Manager",
  },
  {
    name: "CISA",
    logo: CISALogo,
    altText: "CISA - Certified Information Systems Auditor",
  },
  {
    name: "CRISC",
    logo: CRISCLogo,
    altText: "CRISC - Certified in Risk and Information Systems Control",
  },
  {
    name: "CEH",
    logo: CEHLogo,
    altText: "CEH - Certified Ethical Hacker",
  },
  {
    name: "CompTIA Security+",
    logo: CompTIALogo,
    altText: "CompTIA Security+",
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
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [counterValues, setCounterValues] = useState({
    videos: "250+",
    views: "10k+",
    satisfaction: "95%",
    certifications: "24+",
  });

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
    <main className="flex-1">
      <div className="flex flex-col min-h-screen">
        {/* Hero Section with Enhanced Visual Elements */}
        <section
          ref={heroRef}
          className="relative w-full py-16 md:py-28 lg:py-32 bg-gray-950"
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

          <div className="container relative z-10 px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="overflow-hidden">
                <div className="hero-badge inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-gray-100 text-sm font-medium">
                  <Youtube className="mr-2 h-4 w-4" />
                  Educational Content
                </div>
              </div>
              <div className="overflow-hidden">
                <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
                  Cyber.Training Resources
                </h1>
              </div>
              <div className="overflow-hidden">
                <p className="hero-description text-xl text-gray-400 max-w-[600px]">
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
                    <span className="animate-pulse-slow inline-block">
                      {counterValues.videos}
                    </span>
                    <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">Videos</div>
                </div>
                <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200/10 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div
                    className="absolute -inset-x-full bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent group-hover:animate-slide-right-infinite"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div className="text-4xl font-bold text-gray-100 mb-1 relative">
                    <span
                      className="animate-pulse-slow inline-block"
                      style={{ animationDelay: "0.3s" }}
                    >
                      {counterValues.views}
                    </span>
                    <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">
                    Total Views
                  </div>
                </div>
                <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200/10 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div
                    className="absolute -inset-x-full bottom-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent group-hover:animate-slide-right-infinite"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                  <div className="text-4xl font-bold text-gray-100 mb-1 relative">
                    <span
                      className="animate-pulse-slow inline-block"
                      style={{ animationDelay: "0.6s" }}
                    >
                      {counterValues.satisfaction}
                    </span>
                    <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">
                    Satisfaction
                  </div>
                </div>
                <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-200/10 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div
                    className="absolute -inset-x-full bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent group-hover:animate-slide-right-infinite"
                    style={{ animationDelay: "0.6s" }}
                  ></div>
                  <div className="text-4xl font-bold text-gray-100 mb-1 relative">
                    <span
                      className="animate-pulse-slow inline-block"
                      style={{ animationDelay: "0.9s" }}
                    >
                      {counterValues.certifications}
                    </span>
                    <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">
                    Topics Covered
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Video Section */}
        <section className="w-full py-12 md:py-24 bg-gray-950 relative">
          <GridBackground />
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 order-2 md:order-1">
                <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-100 px-3 py-1 text-sm mb-2">
                  Featured Video
                </div>
                <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
                  {featuredVideo?.title}
                </h2>
                <p className="text-xl text-gray-400">
                  {featuredVideo?.description}
                </p>
                <div className="pt-4">
                  <Button
                    variant="default"
                    className="relative group h-11 px-6 overflow-hidden"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                    <span className="relative z-10 flex items-center">
                      <Youtube className="h-5 w-5 mr-2" />
                      Watch Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-primary/20 transform hover:scale-105 hover:shadow-xl hover:border-primary/40 transition-all duration-300 order-1 md:order-2 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                <iframe
                  src={`https://www.youtube.com/embed/pbzkO2_NcLI?si=C7LleEjJQs3gGxVr`}
                  title={featuredVideo?.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full rounded-lg relative z-10"
                />

                {/* Simple animated elements around the iframe */}
                <div className="absolute top-0 right-0 size-12 -mr-6 -mt-6 rounded-full bg-blue-500/20 blur-xl animate-pulse-slow"></div>
                <div
                  className="absolute bottom-0 left-0 size-10 -ml-5 -mb-5 rounded-full bg-purple-500/20 blur-xl animate-pulse-slow"
                  style={{ animationDelay: "1.5s" }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Categories Section */}
        {/* {/* 
<section className="w-full py-12 md:py-24 bg-gray-950">
  <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
    <div className="text-center mb-12">
      <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-100 px-3 py-1 text-sm mb-6">
        Resource Types
      </div>
      <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400 mb-4">
        Browse by Category
      </h2>
      <p className="text-xl text-gray-400 max-w-[600px] mx-auto">
        Explore our diverse collection of educational materials in various formats
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {resources.map((resource, index) => (
        <div
          key={resource.title}
          className="group p-6 rounded-lg border border-gray-700 hover:border-primary/40 bg-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-700"></div>

          <div className="relative z-10">
            <div className="mb-6 p-3 size-14 rounded-full bg-gray-700 flex items-center justify-center text-gray-100 group-hover:bg-gray-600 group-hover:scale-110 transition-all duration-300">
              {resource.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-100 group-hover:text-gray-100 transition-colors duration-300">
              {resource.title}
            </h3>
            <p className="text-gray-400">{resource.description}</p>

            <div className="flex justify-between items-center pt-4 border-t border-gray-700 mt-4">
              <div className="flex flex-col">
                <div className="text-xl font-bold text-gray-100">
                  {resource.count}
                </div>
                <div className="text-xs text-gray-500">Resources</div>
              </div>
            </div>

            <Button variant="ghost" className="w-full mt-4 group relative overflow-hidden">
              <div className="absolute right-0 top-0 h-full aspect-square bg-primary/0 group-hover:bg-primary/20 rounded-full scale-0 group-hover:scale-150 transition-all duration-500 origin-center"></div>
              <span className="relative z-10 text-gray-100 flex items-center">
                Browse
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
*/}

        {/* Certifications Section - Based on sketch */}
        <section className="w-full py-12 md:py-24 bg-gray-950 relative">
          <GridBackground />
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-100 px-3 py-1 text-sm mb-6">
                Certification Resources
              </div>
              <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400 mb-4">
                Industry-Standard Certifications
              </h2>
              <p className="text-xl text-gray-400 max-w-[600px] mx-auto">
                Resources to help you prepare for top cybersecurity
                certifications
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="group bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Add gradient background effect like buttons */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300/10 to-blue-400/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-700"></div>

                  <div className="flex flex-col items-center text-center space-y-3 relative z-10">
                    <div className="w-20 h-20 mb-2">
                      <img
                        src={cert.logo}
                        alt={cert.name}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <h3 className="font-bold text-gray-100">{cert.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Gallery Section */}
        <section className="w-full py-12 md:py-24 bg-gray-950 relative">
          <GridBackground />
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-100 px-3 py-1 text-sm mb-6">
                Video Library
              </div>
              <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400 mb-4">
                Our Webinars
              </h2>
              <p className="text-xl text-gray-400 max-w-[600px] mx-auto">
                Browse through our comprehensive collection of cyber security
                tutorials and guides
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos
                .filter((video) => !video.featured)
                .map((video, index) => (
                  <div
                    key={video.id}
                    className="group bg-gray-800 rounded-lg border border-gray-700 hover:border-primary/40 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
                    onMouseEnter={() => setHoveredVideo(video.title)}
                    onMouseLeave={() => setHoveredVideo(null)}
                  >
                    {/* Button-like background animation */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-700"></div>

                    <div className="aspect-video relative">
                      <img
                        alt={video.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={
                          video.coverImage ||
                          `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`
                        }
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="rounded-full bg-white/90 p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          <Youtube className="h-8 w-8 text-red-600" />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 space-y-2 relative z-10">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-gray-700 text-gray-100">
                          {video.icon}
                        </div>
                        <h3 className="text-lg font-bold text-gray-100 group-hover:text-gray-100 transition-colors duration-300">
                          {video.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 text-sm">
                        {video.description}
                      </p>
                      <Button
                        variant="ghost"
                        className="w-full mt-4 group overflow-hidden relative hover:bg-primary/10"
                      >
                        <span className="relative z-10 flex items-center">
                          Watch Now
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <div className="absolute right-0 top-0 h-full aspect-square bg-primary/0 group-hover:bg-primary/20 rounded-full scale-0 group-hover:scale-150 transition-all duration-500 origin-center"></div>
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-gray-950 relative overflow-hidden">
          <GridBackground />
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter text-gray-100">
                Ready to Enhance Your Cyber Security Skills?
              </h2>
              <p className="text-xl text-gray-400 max-w-[600px]">
                Subscribe to our channel and get access to all our educational
                content. Join our community of cybersecurity professionals
                today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-6">
                <Button
                  size="lg"
                  className="relative group h-12 px-8 text-base transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                  <span className="relative z-10 flex items-center">
                    <Youtube className="mr-2 h-5 w-5" />
                    Subscribe to Our Channel
                  </span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="relative group h-12 px-8 text-base transition-all duration-300 hover:bg-accent/50"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                  <span className="relative z-10 flex items-center">
                    Request Custom Resources
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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
