import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-black">
      <div className="container mx-auto max-w-[1200px] px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* First column with main navigation links */}
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm font-medium text-gray-100 hover:text-gray-300 dark:hover:text-white">Notes</a>
              </li>
              <li>
                <a href="#" className="text-sm font-medium text-gray-100 hover:text-gray-300 dark:hover:text-white">Review</a>
              </li>
              <li>
                <a href="#" className="text-sm font-medium text-gray-100 hover:text-gray-300 dark:hover:text-white">Site Map</a>
              </li>
            </ul>
          </div>

          {/* Second column with the "CyberSystem Labs" section */}
          <div>
            <div className="border p-3 rounded-md mb-4">
              <p className="text-sm font-medium text-gray-100">CyberSoldiers Labs</p>
            </div>
            <div className="flex space-x-2 mt-4">
              <a href="#" className="text-xs px-3 py-1 border rounded-md text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900">CompanyPlan</a>
              <a href="#" className="text-xs px-3 py-1 border rounded-md text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900">IOS</a>
            </div>
            <div className="mt-6">
              <p className="text-sm">2025</p>
              <p className="text-sm font-medium text-gray-100">@CyberSoldiers</p>
              <div className="flex space-x-2 mt-4">
                <a href="#" className="text-xs px-3 py-1 border text-gray-100 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900">LinkedIn</a>
                <a href="#" className="text-xs px-3 py-1 border text-gray-100 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900">YouTube</a>
                <a href="#" className="text-xs px-3 py-1 border text-gray-100 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900">Instagram</a>
                <a href="#" className="text-xs px-3 py-1 border text-gray-100 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900">Twitter</a>
              </div>
            </div>
          </div>

          {/* Third column - empty space */}
          <div></div>

          {/* Fourth column with contact and subscribe section */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-100">Contact Us</h3>
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 rounded-full border flex items-center justify-center mr-2">
                <span className="text-xs text-gray-100">C</span>
              </div>
              <span className="text-sm text-gray-100">email</span>
            </div>
            
            <div className="mt-6">
              <h3 className="font-semibold mb-3 text-gray-100">Subscribe to newsletter</h3>
              <div className="flex mb-4">
                <input type="email" className="border p-2 text-sm w-full" placeholder="Your email" />
                <button className="bg-black text-white px-3 text-sm dark:bg-white dark:text-black">
                  →
                </button>
              </div>
              
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-black dark:hover:text-white">Showcase</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-black dark:hover:text-white">Tech</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-black dark:hover:text-white">CMS</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-black dark:hover:text-white">CDN</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}