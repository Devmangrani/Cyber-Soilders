"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import logo from "../cyberlogo.png"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6 w-full">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Cyber.Soldiers" className="h-6 w-6" />
          <span className="font-mono font-extrabold text-lg sm:text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-700 to-gray-900">
            Cyber.Soldiers
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 md:space-x-6">
          <Link to="/product" className="text-sm font-medium transition-colors hover:text-primary px-2 py-1">
            {/* Product */}
          </Link>
          <Link to="/services" className="text-sm font-medium transition-colors hover:text-primary px-2 py-1">
            Services
          </Link>
          <Link to="/training" className="text-sm font-medium transition-colors hover:text-primary px-2 py-1">
            Training
          </Link>
          <Link to="/resources" className="text-sm font-medium transition-colors hover:text-primary px-2 py-1">
            Resources
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary px-2 py-1">
            About Us
          </Link>
          <Link to="/careers" className="text-sm font-medium transition-colors hover:text-primary px-2 py-1">
            Careers
          </Link>
          {/* <Link to="/hire" className="text-sm font-medium transition-colors hover:text-primary px-2 py-1">
            Hire
          </Link> */}
          <Link to="/contact">
            <Button className="text-sm">Contact Us</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/product"
              className="block text-sm font-medium transition-colors hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              to="/services"
              className="block text-sm font-medium transition-colors hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/training"
              className="block text-sm font-medium transition-colors hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Training
            </Link>
            <Link
              to="/resources"
              className="block text-sm font-medium transition-colors hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              to="/about"
              className="block text-sm font-medium transition-colors hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/careers"
              className="block text-sm font-medium transition-colors hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              to="/hire"
              className="block text-sm font-medium transition-colors hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {/* Hire */}
            </Link>
            <Link
              to="/contact"
              className="block pt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full">Contact Us</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

