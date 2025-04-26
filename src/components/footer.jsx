import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";
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


export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-700">
      <div className="container mx-auto max-w-[1400px] px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First column with logo and tagline */}
          <div>
            <img src={logo} alt="CyberSoldiers Logo" className="w-[30%] mb-4" />
            <p className="text-lg leading-relaxed font-medium mb-6">
              {/* Defending your Digital Frontiers */}
            </p>
            <div className="flex gap-4">
              {/* <a href="https://play.google.com/store/apps/details?id=in.cybersoldiers.learners&hl=en_US&gl=US" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://d502jbuhuh9wk.cloudfront.net/orgData/63a4480de4b0fa7eb0f4eb95/pages/assets/images/D5DcPplaystore.png" 
                  alt="Play Store" 
                  className="w-[130px]"
                />
              </a>
              <a href="https://apps.apple.com/in/app/cyber-soldiers-academy/id1673428016" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://d502jbuhuh9wk.cloudfront.net/orgData/63a4480de4b0fa7eb0f4eb95/pages/assets/images/FLOijappleapp.png" 
                  alt="App Store" 
                  className="w-[130px]"
                />
              </a> */}
            </div>
          </div>

          {/* Second column with navigation links */}
          <div className="md:pl-20">
            <div className="space-y-3">
              <p>
                <a
                  href="/"
                  className="text-base font-medium hover:text-gray-300"
                >
                  Home
                </a>
              </p>
              <p>
                <a
                  href="/product"
                  className="text-base font-medium hover:text-gray-300"
                >
                  Product
                </a>
              </p>
              <p>
                <a
                  href="/services"
                  className="text-base font-medium hover:text-gray-300"
                >
                  Services
                </a>
              </p>
              <p>
                <a
                  href="/training"
                  className="text-base font-medium hover:text-gray-300"
                >
                  Training
                </a>
              </p>
              <p>
                <a
                  href="/resources"
                  className="text-base font-medium hover:text-gray-300"
                >
                  Resources
                </a>
              </p>
              <p>
                <a
                  href="/about"
                  className="text-base font-medium hover:text-gray-300"
                >
                  About Us
                </a>
              </p>
              <p>
                <a
                  href="/careers"
                  className="text-base font-medium hover:text-gray-300"
                >
                  Career
                </a>
              </p>
              <p>
                <a
                  href="/contact"
                  className="text-base font-medium hover:text-gray-300"
                >
                  Contact Us
                </a>
              </p>
            </div>
          </div>

          {/* Third column with contact info */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <WhatsAppLogo className="h-6 w-6 text-[#25D366]" />
                <span>+91-78143-21156</span>
              </div>
              <p className="flex items-center text-base font-medium">
                <span className="mr-2">✉️</span>info@cybersoldiers.in
              </p>

              <div className="flex space-x-4 mt-6">
                {/* <a href="https://www.facebook.com/MakeIndiaCyberSafe" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <Facebook size={24} />
                  </a>
                  <a href="https://www.instagram.com/cybersoldiers9/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <Instagram size={24} />
                  </a> */}
                {/* <a href="https://www.linkedin.com/company/cybersoldiersacademy/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                    <Linkedin size={24} />
                  </a>
                <a href="https://www.youtube.com/@CyberSoldiersAcademy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <Youtube size={24} />
                </a>
                <a href="https://twitter.com/CyberSoldiers7" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <Twitter size={24} />
                </a> */}
                <a
                  href="https://www.linkedin.com/company/cybersoldiersacademy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <LinkedInLogo className="h-6 w-6 text-[#0077B5]" />
                </a>

                <a
                  href="https://www.youtube.com/@CyberSoldiersAcademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <YouTubeLogo className="h-6 w-6 text-[#FF0000]" />
                </a>
              </div>

              <div className="mt-8">
                <p className="font-bold">Shlokcent Technologies Pvt Ltd</p>
                <p className="text-sm mt-2">CIN: U58202MP2023PTC064946</p>
                <p className="text-sm">GST: 23ABKCS4015P1Z2</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm">
          <p>© Copyright 2023 Shlokcent Technologies Pvt Ltd</p>
        </div>
      </div>
    </footer>
  );
}
