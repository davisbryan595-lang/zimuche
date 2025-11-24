"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-lavender-100 backdrop-blur-md border-b border-purple-200/30 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo - Enlarged */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-20 h-20 relative flex-shrink-0">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fc70ebb3e5225486399c19406cd27bb43%2F8d9fe4b88ac049fb93fd853a5db6c03c?format=webp&width=800"
                alt="Zimuche Logo"
                width={80}
                height={80}
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-slate-700 hover:text-purple-600 transition-colors font-sans font-medium text-sm">
              Home
            </a>
            <a
              href="#about"
              className="text-slate-700 hover:text-purple-600 transition-colors font-sans font-medium text-sm"
            >
              About Dr. Gorety
            </a>
            <a
              href="#services"
              className="text-slate-700 hover:text-purple-600 transition-colors font-sans font-medium text-sm"
            >
              Services
            </a>
            <a href="#contact" className="hero-btn px-6 py-2 text-sm">
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-8 h-8 flex flex-col justify-between items-center"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-purple-700 transition-all ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`w-6 h-0.5 bg-purple-700 transition-all ${isOpen ? "opacity-0" : ""}`} />
            <span
              className={`w-6 h-0.5 bg-purple-700 transition-all ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-in fade-in duration-200">
            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 hover:text-purple-600 transition-colors font-sans font-medium py-2"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 hover:text-purple-600 transition-colors font-sans font-medium py-2"
            >
              About Dr. Gorety
            </a>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 hover:text-purple-600 transition-colors font-sans font-medium py-2"
            >
              Services
            </a>
            <a href="#contact" className="hero-btn w-full block text-center py-2 text-sm" onClick={() => setIsOpen(false)}>
              <span>Book Now</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
