import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-700">
      <div className="container mx-auto max-w-[1400px] px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First column with logo and tagline */}
          <div>
            <img 
              src="https://d502jbuhuh9wk.cloudfront.net/orgData/63a4480de4b0fa7eb0f4eb95/pages/assets/images/sCUhV63a4480de4b0fa7eb0f4eb95removebgpreview.png" 
              alt="CyberSoldiers Logo" 
              className="w-[30%] mb-4"
            />
            <p className="text-lg leading-relaxed font-medium mb-6">
            Defending your Digital Frontiers
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
              <p><a href="/" className="text-base font-medium hover:text-gray-300">Home</a></p>
              <p><a href="/product" className="text-base font-medium hover:text-gray-300">Product</a></p>
              <p><a href="/services" className="text-base font-medium hover:text-gray-300">Services</a></p>
              <p><a href="/training" className="text-base font-medium hover:text-gray-300">Training</a></p>
              <p><a href="/resources" className="text-base font-medium hover:text-gray-300">Resources</a></p>
              <p><a href="/about" className="text-base font-medium hover:text-gray-300">About Us</a></p>
              <p><a href="/careers" className="text-base font-medium hover:text-gray-300">Career</a></p>
              <p><a href="/contact" className="text-base font-medium hover:text-gray-300">Contact Us</a></p>
            </div>
          </div>

          {/* Third column with contact info */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MessageCircle size={24} />
                <span>+91-78143-21156</span>
              </div>
              <p className="flex items-center text-base font-medium">
                <span className="mr-2">✉️</span>info@cybersoldiers.in
              </p>
              
              <div className="flex space-x-4 mt-6">
                <a href="https://www.linkedin.com/company/cybersoldiersacademy/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.facebook.com/MakeIndiaCyberSafe" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <Facebook size={24} />
                </a>
                <a href="https://www.instagram.com/cybersoldiers9/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <Instagram size={24} />
                </a>
                <a href="https://www.youtube.com/@CyberSoldiersAcademy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <Youtube size={24} />
                </a>
                <a href="https://twitter.com/CyberSoldiers7" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <Twitter size={24} />
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
  )
}