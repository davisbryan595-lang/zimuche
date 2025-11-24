"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-lavender-200 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 relative">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fc70ebb3e5225486399c19406cd27bb43%2F8d9fe4b88ac049fb93fd853a5db6c03c?format=webp&width=800"
                alt="Zimuche Logo"
                width={40}
                height={40}
              />
            </div>
            <span className="font-playfair text-lg font-bold text-deep-purple hidden sm:inline">Zimuche</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-slate-700 hover:text-purple-600 transition-colors font-satoshi font-medium">
              Home
            </a>
            <a
              href="#about"
              className="text-slate-700 hover:text-purple-600 transition-colors font-satoshi font-medium"
            >
              About Dr. Gorety
            </a>
            <a
              href="#services"
              className="text-slate-700 hover:text-purple-600 transition-colors font-satoshi font-medium"
            >
              Services
            </a>
            <a href="#contact" className="gradient-btn px-6 py-2">
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-8 h-8 flex flex-col justify-between items-center"
          >
            <span className={`w-6 h-0.5 bg-deep-purple transition-all ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`w-6 h-0.5 bg-deep-purple transition-all ${isOpen ? "opacity-0" : ""}`} />
            <span
              className={`w-6 h-0.5 bg-deep-purple transition-all ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-in fade-in duration-200">
            <a
              href="/"
              className="block text-slate-700 hover:text-purple-600 transition-colors font-satoshi font-medium py-2"
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-slate-700 hover:text-purple-600 transition-colors font-satoshi font-medium py-2"
            >
              About Dr. Gorety
            </a>
            <a
              href="#services"
              className="block text-slate-700 hover:text-purple-600 transition-colors font-satoshi font-medium py-2"
            >
              Services
            </a>
            <a href="#contact" className="gradient-btn w-full block text-center py-2">
              Book Now
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
