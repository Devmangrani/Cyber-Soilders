import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Shield, Mail, MapPin, Send, ArrowRight, AlertCircle,MessageSquare, MessageCircle } from "lucide-react"

// WhatsApp Logo Component
const WhatsAppLogo = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Contact() {
  // Refs for intersection observer animations
  const sectionRefs = useRef([]);
  const heroRef = useRef(null); // Added missing heroRef
  const gridRef = useRef(null); // Added missing gridRef
  const [isFormFocused, setIsFormFocused] = useState(false);

  useEffect(() => {
    // Intersection Observer for section animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    sectionRefs.current.forEach(section => {
      if (section) sectionObserver.observe(section);
    });

    return () => {
      sectionRefs.current.forEach(section => {
        if (section) sectionObserver.unobserve(section);
      });
    };
  }, []);

  // Function to add refs to our ref array
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  // Parallax effect
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="flex-1 overflow-hidden">
      <div className="flex flex-col min-h-screen">
        
      {/* Hero Section with Enhanced Visual Elements */}
      <section 
        ref={heroRef}
        className="relative w-full py-16 md:py-28 lg:py-32 bg-gradient-to-b from-black to-gray-900"
      >
        {/* Enhanced grid background with finer lines, glow nodes and subtle animation */}
        <div 
          ref={gridRef}
          className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] bg-[size:24px_24px] overflow-hidden"
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
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_50%)]" />
        
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
          <div className="animate-pulse-slow absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" style={{animationDelay: '1s'}}></div>
          <div className="animate-pulse-slow absolute top-[70%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" style={{animationDelay: '2s'}}></div>
          
          <div className="animate-pulse-slow absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" style={{animationDelay: '0.5s'}}></div>
          <div className="animate-pulse-slow absolute top-0 left-[80%] w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        {/* Digital circuit-like pattern overlay */}
        <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M20 20 L80 20 L80 80 L20 80 Z" fill="none" stroke="white" strokeWidth="0.5" />
                <path d="M50 0 L50 20 M0 50 L20 50 M80 50 L100 50 M50 80 L50 100" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="3" fill="white" />
                <circle cx="20" cy="20" r="2" fill="white" />
                <circle cx="80" cy="20" r="2" fill="white" />
                <circle cx="20" cy="80" r="2" fill="white" />
                <circle cx="80" cy="80" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)" className="animate-pulse-very-slow" />
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-gray-100 text-sm font-medium animate-pulse-slow">
              <Shield className="mr-2 h-4 w-4" />
              Secure Communication Channel
            </div>
            <div className="overflow-hidden">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400 animate-slide-up">
                Contact Cyber.Soldiers
              </h1>
            </div>
            <div className="overflow-hidden pt-2">
              <p className="text-xl text-muted-foreground max-w-[600px] animate-slide-up-delayed">
                Get in touch with our team of cybersecurity experts. We're here to protect your digital assets.
              </p>
            </div>

            {/* Animated contact options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 w-full max-w-3xl">
              <div className="flex flex-col items-center group animate-fade-in relative overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                <div className="p-4 rounded-full bg-white-900 text-blue-100 mb-3 animate-bounce-subtle group-hover:scale-110 transition-all duration-300 relative z-10">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="relative z-10">
                  <div className="text-lg font-medium text-blue-600 group-hover:text-blue-500 transition-colors duration-300">Email Us</div>
                  <div className="text-sm text-muted-foreground">Fast response within 24h</div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
              <div className="flex flex-col items-center group animate-fade-in relative overflow-hidden" style={{animationDelay: '200ms'}}>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                <div className="p-4 rounded-full bg-white-900 text-blue-100 mb-3 animate-bounce-subtle group-hover:scale-110 transition-all duration-300 relative z-10" style={{animationDelay: '0.5s'}}>
                  <WhatsAppLogo className="h-6 w-6 text-[#25D366]" />
                </div>
                <div className="relative z-10">
                  <div className="text-lg font-medium text-blue-600 group-hover:text-blue-500 transition-colors duration-300">Message Us</div>
                  <div className="text-sm text-muted-foreground">24/7 support available</div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
              <div className="flex flex-col items-center group animate-fade-in relative overflow-hidden" style={{animationDelay: '400ms'}}>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                <div className="p-4 rounded-full bg-white-900 text-blue-100 mb-3 animate-bounce-subtle group-hover:scale-110 transition-all duration-300 relative z-10" style={{animationDelay: '1s'}}>
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div className="relative z-10">
                  <div className="text-lg font-medium text-blue-600 group-hover:text-blue-500 transition-colors duration-300">Live Chat</div>
                  <div className="text-sm text-muted-foreground">Instant assistance</div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated background gradient orbs */}
        <div className="absolute -z-10 top-0 left-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl animate-float"></div>
        <div className="absolute -z-10 bottom-0 right-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-500/10 to-green-500/10 blur-3xl animate-float-delayed"></div>
      </section>

        {/* Contact Form Section */}
        <section 
          ref={addToRefs} 
          className="w-full py-16 md:py-24 bg-black opacity-0 translate-y-4 duration-700 ease-out relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-gradient-to-b from-blue-500/10 to-purple-500/10 blur-3xl animate-float"></div>
          <div className="absolute left-1/4 bottom-1/4 -z-10 h-64 w-64 rounded-full bg-gradient-to-tr from-purple-500/10 to-blue-500/10 blur-3xl animate-float-reverse"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/5 size-2 rounded-full bg-blue-500/30 animate-pulse-slow"></div>
            <div className="absolute top-3/4 left-2/3 size-3 rounded-full bg-purple-500/30 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/3 left-3/4 size-2 rounded-full bg-green-500/30 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm mb-2 animate-bounce-subtle">
                    Get In Touch
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">Command Center</h2>
                  <p className="text-muted-foreground">
                    Our team of cybersecurity experts is ready to assist you 24/7.
                  </p>
                </div>
                <div className="space-y-6">
                <div 
                  className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 relative group overflow-hidden hover:border-primary/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                  <div className="p-3 rounded-lg bg-blue-100 text-primary group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-10">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-semibold text-blue-100 group-hover:text-blue-600 transition-colors duration-300">Email</h3>
                    <p className="text-muted-foreground">info@cybersoldiers.in</p>
                  </div>
                </div>
                <div 
                  className="flex items-start gap-4 p-4 rounded-lg border border-gray-850 relative group overflow-hidden hover:border-primary/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                  <div className="p-3 rounded-lg bg-blue-100 text-primary group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-10">
                    <WhatsAppLogo className="h-6 w-6 text-[#25D366]" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-semibold text-blue-100 group-hover:text-blue-600 transition-colors duration-300">Live Chat</h3>
                    <p className="text-muted-foreground">+91-78143-21156</p>
                  </div>
                </div>
                {/* <div 
                  className="flex items-start gap-4 p-4 rounded-lg border border-gray-850 relative group overflow-hidden hover:border-primary/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                  <div className="p-3 rounded-lg bg-blue-100 text-primary group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-10">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-semibold text-blue-100 group-hover:text-blue-600 transition-colors duration-300">Location</h3>
                    <p className="text-muted-foreground">Bhopal , Madhya Pradesh , India</p>
                  </div>
                </div> */}
                </div>
                {/* <div 
                  className="p-6 rounded-lg border border-red-200 dark:border-red-800 bg-gradient-to-br from-white to-red-50 dark:from-black dark:to-red-950 hover:shadow-lg transition-all duration-500 group hover:-translate-y-1 relative overflow-hidden"
                  style={{transform: `perspective(1000px) rotateY(${scrollY * 0.01}deg) rotateX(${scrollY * -0.01}deg)`}}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 rounded-full -mt-10 -mr-10 animate-pulse-slow"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-red-500/10 rounded-full -mb-8 -ml-8 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 group-hover:scale-110 transition-all duration-300">
                      <AlertCircle className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-red-600 dark:text-red-400">Emergency Response</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 relative z-10">
                    For urgent security incidents, contact our 24/7 emergency response team.
                  </p>
                  <Button className="w-full group bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 overflow-hidden relative">
                    <span className="relative z-10">Emergency Contact</span>
                    <div className="absolute right-full top-0 h-full w-full bg-red-700/50 dark:bg-red-800/50 group-hover:right-0 transition-all duration-500"></div>
                  </Button>
                </div> */}
              </div>

              {/* Contact Form */}
              <div 
                className={`space-y-6 p-6 rounded-lg border border-gray-800 ${isFormFocused ? 'ring-2 ring-primary/50 border-primary/30 shadow-lg' : 'hover:border-primary/30 hover:shadow-md'} transition-all duration-500`}
              >
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-gray-100  px-3 py-1 text-sm mb-2 animate-bounce-subtle">
                    Message Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400 ">Send Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-100 font-medium">First Name</label>
                      <Input 
                        placeholder="John" 
                        className="hover:border-primary/30 focus:border-primary transition-all duration-300"
                        onFocus={() => setIsFormFocused(true)}
                        onBlur={() => setIsFormFocused(false)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-100 font-medium">Last Name</label>
                      <Input 
                        placeholder="Doe" 
                        className="hover:border-primary/30 focus:border-primary transition-all duration-300"
                        onFocus={() => setIsFormFocused(true)}
                        onBlur={() => setIsFormFocused(false)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-100 font-medium">Email</label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="hover:border-primary/30 focus:border-primary transition-all duration-300"
                      onFocus={() => setIsFormFocused(true)}
                      onBlur={() => setIsFormFocused(false)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-100 font-medium">Subject</label>
                    <Input 
                      placeholder="How can we help?" 
                      className="hover:border-primary/30 focus:border-primary transition-all duration-300"
                      onFocus={() => setIsFormFocused(true)}
                      onBlur={() => setIsFormFocused(false)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-100 font-medium">Message</label>
                    <textarea
                      className="w-full min-h-[150px] p-3 rounded-md border bg-background hover:border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300"
                      placeholder="Your message..."
                      onFocus={() => setIsFormFocused(true)}
                      onBlur={() => setIsFormFocused(false)}
                    />
                  </div>
                  <Button className="w-full group relative overflow-hidden">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-indigo-500/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-700"></div>
                    <span className="relative z-10 flex items-center">
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
                    </span>
                  </Button>
                </form>
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
        
        .animate-float-delayed {
          animation: float 7s ease-in-out 1s infinite;
        }
        
        .animate-float-reverse {
          animation: float 8s ease-in-out 0.5s infinite reverse;
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
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s forwards;
        }
        
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s forwards;
        }
        
        .animate-slide-up-delayed {
          animation: slide-up 0.8s 0.2s forwards;
        }

        // new animations
        
        /* Original animations */
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
        
        .animate-float-delayed {
          animation: float 7s ease-in-out 1s infinite;
        }
        
        .animate-float-reverse {
          animation: float 8s ease-in-out 0.5s infinite reverse;
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
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s forwards;
        }
        
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s forwards;
        }
        
        .animate-slide-up-delayed {
          animation: slide-up 0.8s 0.2s forwards;
        }
        
        /* New animations from training.jsx */
        .floating-particle {
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-particle-slow {
          animation: float 8s ease-in-out infinite;
        }
        
        .floating-particle-fast {
          animation: float 4s ease-in-out infinite;
        }
        
        .parallax-slow {
          will-change: transform;
        }
        
        .parallax-medium {
          will-change: transform;
        }
        
        .parallax-fast {
          will-change: transform;
        }
        
        @keyframes pulse-very-slow {
          0%, 100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.15;
          }
        }
        
        .animate-pulse-very-slow {
          animation: pulse-very-slow 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
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
    </main>
  )
}