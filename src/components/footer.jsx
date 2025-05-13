import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../logo.png";
const WhatsAppLogo = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
const LinkedInLogo = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.82-2.1 3.75-2.1 4 0 4.75 2.65 4.75 6.1V24h-4v-7.5c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4v7.6h-4V8.5z" />
  </svg>
);

const YouTubeLogo = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 576 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M549.7 124.1c-6.3-23.7-24.9-42.3-48.6-48.6C456.5 64 288 64 288 64S119.5 64 74.9 75.5c-23.7 6.3-42.3 24.9-48.6 48.6C16 168.5 16 256 16 256s0 87.5 10.3 131.9c6.3 23.7 24.9 42.3 48.6 48.6C119.5 448 288 448 288 448s168.5 0 213.1-11.5c23.7-6.3 42.3-24.9 48.6-48.6C560 343.5 560 256 560 256s0-87.5-10.3-131.9zM232 336V176l142 80-142 80z"/>
  </svg>
);

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

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-950 text-white border-t border-gray-900 relative overflow-hidden">
      <GridBackground />
      <div className="container mx-auto max-w-[1400px] px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First column with logo and tagline */}
          <div>
            <img src={logo} alt="CyberSoldiers Logo" className="w-[30%] mb-4" />
          </div>

          {/* Second column with navigation links */}
          <div className="md:pl-20">
            <nav className="space-y-3">
              <button
                onClick={() => navigate("/")}
                className="text-base font-medium hover:text-gray-300 cursor-pointer w-full text-left py-1 transition-colors duration-200"
              >
                Home
              </button>
              {/* <button
                onClick={() => navigate("/product")}
                className="text-base font-medium hover:text-gray-300 cursor-pointer w-full text-left py-1 transition-colors duration-200"
              >
                Product
              </button> */}
              <button
                onClick={() => navigate("/services")}
                className="text-base font-medium hover:text-gray-300 cursor-pointer w-full text-left py-1 transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => navigate("/training")}
                className="text-base font-medium hover:text-gray-300 cursor-pointer w-full text-left py-1 transition-colors duration-200"
              >
                Training
              </button>
              <button
                onClick={() => navigate("/resources")}
                className="text-base font-medium hover:text-gray-300 cursor-pointer w-full text-left py-1 transition-colors duration-200"
              >
                Resources
              </button>
              <button
                onClick={() => navigate("/about")}
                className="text-base font-medium hover:text-gray-300 cursor-pointer w-full text-left py-1 transition-colors duration-200"
              >
                About Us
              </button>
              <button
                onClick={() => navigate("/careers")}
                className="text-base font-medium hover:text-gray-300 cursor-pointer w-full text-left py-1 transition-colors duration-200"
              >
                Career
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="text-base font-medium hover:text-gray-300 cursor-pointer w-full text-left py-1 transition-colors duration-200"
              >
                Contact Us
              </button>
            </nav>
          </div>

          {/* Third column with contact info */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <a 
                  href="https://wa.me/917814321156" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200"
                >
                  <WhatsAppLogo className="h-6 w-6 text-[#25D366]" />
                  <span>+91-78143-21156</span>
                </a>
              </div>
              <p className="flex items-center text-base font-medium">
                <a 
                  href="mailto:info@cybersoldiers.in"
                  className="flex items-center hover:opacity-80 transition-opacity duration-200"
                >
                  <span className="mr-2">✉️</span>info@cybersoldiers.in
                </a>
              </p>

              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.linkedin.com/company/cybersoldiersacademy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity duration-200"
                >
                  <LinkedInLogo className="h-6 w-6 text-[#0077B5]" />
                </a>

                <a
                  href="https://www.youtube.com/@CyberSoldiersAcademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity duration-200"
                >
                  <YouTubeLogo className="h-6 w-6 text-[#FF0000]" />
                </a>
              </div>

              {/* <div className="mt-8">
                <p className="font-bold">Shlokcent Technologies Pvt Ltd</p>
                <p className="text-sm mt-2">CIN: U58202MP2023PTC064946</p>
                <p className="text-sm">GST: 23ABKCS4015P1Z2</p>
              </div> */}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm">
          <p>© Copyright 2023 CyberSoldiers Technologies Pvt Ltd</p>
        </div>
      </div>
    </footer>
  );
}

// Update the pulse animation for better visibility
const pulseAnimation = `
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.9;
  }
}
`;

// Add style tag to head
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = pulseAnimation;
  document.head.appendChild(style);
}
