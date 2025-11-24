"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  // Track cursor movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <Navigation />

      {/* Animated Background with Decorative Blobs */}
      <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden bg-white">
        {/* Large decorative gradient blob - top right */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-purple-100 via-purple-50 to-transparent opacity-60 blur-3xl" />
        {/* Medium decorative gradient blob - bottom left */}
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-100 via-transparent to-purple-50 opacity-50 blur-3xl" />
        {/* Small accent blob - middle */}
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-purple-50 to-transparent opacity-40 blur-3xl" />

        {/* Cursor-Following Blur */}
        <div
          className="fixed rounded-full bg-gradient-to-br from-purple-400/60 via-purple-300/40 to-transparent opacity-100 blur-3xl pointer-events-none"
          style={{
            width: "300px",
            height: "300px",
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            transform: "translate(-50%, -50%)",
            transition: "all 0.1s ease-out",
            zIndex: 0,
          }}
        />
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="text-center">
            <div className="mb-4 inline-block animate-spin">
              <svg className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            </div>
            <p className="text-slate-700 font-sans">Opening the path to peace...</p>
          </div>
        </div>
      )}

      <main className="relative">
        {/* HERO SECTION */}
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 pt-32">
          {/* Board Certified Badge */}
          <div className="mb-6 inline-flex items-center gap-2 bg-purple-100/60 backdrop-blur-sm border border-purple-200/50 rounded-full px-4 py-2 animate-fade-in-down">
            <span className="text-purple-600">🏆</span>
            <span className="text-sm font-medium text-purple-700">Board Certified Professional</span>
          </div>

          {/* Logo */}
          <div className="mb-8 w-40 h-40 relative animate-fade-in">
            <Image 
              src="https://cdn.builder.io/api/v1/image/assets%2Fc70ebb3e5225486399c19406cd27bb43%2F8d9fe4b88ac049fb93fd853a5db6c03c?format=webp&width=800" 
              alt="Zimuche Health Harmony Logo" 
              width={160}
              height={160}
              className="w-full h-full object-contain drop-shadow-xl"
            />
          </div>

          {/* Main Heading with Gradient */}
          <h1 className="font-sans text-5xl md:text-7xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent animate-fade-in-up">
            Zimuche
          </h1>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-center mb-6 text-purple-600 font-medium animate-fade-in-up">
            Health Harmony
          </p>

          {/* Welcome Card */}
          <div className="max-w-2xl mx-auto mb-12 bg-gradient-to-br from-purple-50/80 via-purple-100/40 to-purple-50/60 backdrop-blur-sm rounded-3xl border border-purple-200/50 p-8 md:p-10 shadow-2xl animate-fade-in-up">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl">✨</span>
              <p className="text-slate-700 font-sans leading-relaxed">
                Welcome to your digital front door to healing and hope. As your trusted psychiatric mental health partner, I provide compassionate, evidence-based care that honors your unique journey. With board certification and specialized expertise, I'm here to help you navigate life's challenges with personalized treatment plans that blend medication management and psychotherapy—because your mental health deserves expert, caring attention.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold text-purple-600">15+</p>
                <p className="text-sm text-slate-600 font-medium">Years Experience</p>
              </div>
              <div className="h-0.5 sm:h-auto sm:w-0.5 bg-purple-200 sm:bg-purple-200" />
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold text-purple-600">500+</p>
                <p className="text-sm text-slate-600 font-medium">Lives Transformed</p>
              </div>
              <div className="h-0.5 sm:h-auto sm:w-0.5 bg-purple-200 sm:bg-purple-200" />
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold text-purple-600">DNP</p>
                <p className="text-sm text-slate-600 font-medium">Board Certified</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up">
            <a href="#contact" className="hero-btn">
              <span>Begin Your Journey</span>
              <span>→</span>
            </a>
            <a href="#services" className="hero-btn-secondary">
              Learn More
            </a>
          </div>

          {/* Quick Contact */}
          <div className="text-center animate-fade-in-up">
            <p className="text-slate-600 text-sm font-medium mb-3">Ready to talk?</p>
            <a
              href="tel:817-966-3989"
              className="text-purple-600 font-bold hover:text-purple-700 transition-colors text-lg"
            >
              📞 Call 817-966-3989
            </a>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="relative py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-sans text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent mb-4">
                Comprehensive Mental Health Services
              </h2>
              <p className="text-slate-600 font-sans max-w-2xl mx-auto text-lg">
                Expert care tailored to your unique needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Psychiatric Evaluation", description: "Thorough assessment and diagnosis", icon: "🧠" },
                { title: "Medication Management", description: "Expert prescription monitoring", icon: "💊" },
                { title: "Individual Therapy", description: "One-on-one counseling sessions", icon: "💬" },
                { title: "Couples & Family Sessions", description: "Strengthen relationships", icon: "👥" },
                { title: "Telehealth Care", description: "Convenient virtual appointments", icon: "📱" },
                { title: "Wellness Workshops", description: "Group sessions on coping strategies", icon: "🌸" },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="group service-card bg-gradient-to-br from-purple-50/80 to-purple-100/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-200/50 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400/30 to-purple-600/30 mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="font-sans text-xl font-bold text-purple-600 mb-2">{service.title}</h3>
                  <p className="text-slate-600 font-sans text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <a href="#contact" className="hero-btn">
                <span>Schedule a Service</span>
                <span>→</span>
              </a>
              <a href="#about" className="hero-btn-secondary">
                Learn More About Dr. Gorety
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="relative py-24 px-4 bg-gradient-to-b from-purple-50/30 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Section */}
              <div className="fade-in-up order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-80 md:h-[450px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-purple-600/20 z-10" />
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets%2Fc70ebb3e5225486399c19406cd27bb43%2F8d9fe4b88ac049fb93fd853a5db6c03c?format=webp&width=800"
                    alt="Dr. Mariagorety Nwiloh - Psychiatric Nurse Practitioner"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="fade-in-up order-1 lg:order-2">
                <h2 className="font-sans text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent mb-6">
                  About Dr. Mariagorety Nwiloh, DNP
                </h2>

                {/* Credentials Badges */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="inline-flex items-center gap-2 bg-purple-100/80 backdrop-blur-sm border border-purple-200/50 rounded-full px-4 py-2">
                    <span className="text-lg">📚</span>
                    <div>
                      <p className="text-xs font-semibold text-purple-700">DNP</p>
                      <p className="text-xs text-purple-600">Doctor of Nursing Practice</p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-purple-100/80 backdrop-blur-sm border border-purple-200/50 rounded-full px-4 py-2">
                    <span className="text-lg">✓</span>
                    <div>
                      <p className="text-xs font-semibold text-purple-700">PMHNP-BC</p>
                      <p className="text-xs text-purple-600">Board Certified</p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 font-sans text-lg leading-relaxed mb-6">
                  With over 15 years of experience in psychiatric nursing and mental health care, Dr. Gorety brings compassion, expertise, and evidence-based treatment to every patient interaction.
                </p>

                <p className="text-slate-700 font-sans text-lg leading-relaxed mb-8">
                  As a board-certified Psychiatric Mental Health Nurse Practitioner, she specializes in medication management, individual therapy, and creating personalized treatment plans that honor your unique needs.
                </p>

                <p className="text-xl italic text-purple-600 font-sans mb-8">
                  "Healing starts with being truly heard and understood."
                </p>

                <a href="#contact" className="hero-btn">
                  <span>Schedule Your Session</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TREATMENT AREAS SECTION */}
        <section className="relative py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-sans text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent mb-4">
                Areas of Specialization
              </h2>
              <p className="text-slate-600 font-sans max-w-2xl mx-auto text-lg">
                Expertise in treating a wide range of mental health concerns
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Anxiety Disorders", icon: "⚡" },
                { title: "Depression Management", icon: "☁️" },
                { title: "ADHD & ADD", icon: "🧩" },
                { title: "Bipolar Disorder", icon: "🌊" },
                { title: "OCD & PTSD", icon: "🛡️" },
                { title: "Sleep Disorders", icon: "😴" },
                { title: "Substance Use Disorders", icon: "🌱" },
                { title: "Relationship Issues", icon: "💞" },
                { title: "Life Transitions", icon: "🌈" },
              ].map((area, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-purple-50/80 to-purple-100/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/50 hover:border-purple-300 hover:shadow-lg transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  <div className="text-4xl mb-3">{area.icon}</div>
                  <h3 className="font-sans font-bold text-purple-700">{area.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="relative py-24 px-4 bg-gradient-to-b from-purple-50/30 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-sans text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent mb-4">
                Client Success Stories
              </h2>
              <p className="text-slate-600 font-sans max-w-2xl mx-auto text-lg">
                Real experiences from people finding healing and peace
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { text: "Dr. Gorety changed my life. Her compassion and professional expertise helped me navigate my anxiety in ways I never thought possible.", author: "Sarah M.", condition: "Anxiety & Depression" },
                { text: "Finally found someone who listens and genuinely cares. The medication management has been a game-changer for my well-being.", author: "Michael R.", condition: "Depression & Sleep Issues" },
                { text: "The telehealth sessions are so convenient, and the quality of care is exceptional. Highly recommend!", author: "Jennifer L.", condition: "ADHD & Anxiety" },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-purple-50/80 to-purple-100/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-200/50 hover:shadow-xl transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <p className="text-yellow-400 mb-4 text-xl">★★★★★</p>
                  <p className="text-slate-700 font-sans italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-purple-200 pt-4">
                    <p className="text-purple-700 font-bold font-sans">{testimonial.author}</p>
                    <p className="text-sm text-purple-600 font-sans">{testimonial.condition}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section className="relative py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-sans text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent mb-4">
                Transparent Pricing
              </h2>
              <p className="text-slate-600 font-sans max-w-2xl mx-auto text-lg">
                Flexible payment options and competitive rates
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { 
                  title: "Initial Consultation", 
                  duration: "60 Minutes",
                  items: ["Psychiatric assessment", "Medical history review", "Treatment plan development", "Free 15-minute follow-up"]
                },
                { 
                  title: "Follow-Up Session", 
                  duration: "30 Minutes",
                  items: ["Medication management", "Progress assessment", "Treatment adjustments", "Ongoing support"]
                },
                { 
                  title: "Therapy Session", 
                  duration: "50 Minutes",
                  items: ["Individual counseling", "Coping strategies", "Personalized approach", "Evidence-based care"]
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="relative bg-gradient-to-br from-purple-50/80 to-purple-100/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-200/50 hover:border-purple-300 hover:shadow-2xl transition-all duration-300 fade-in-up border-t-4 border-t-purple-400"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="text-2xl mb-2">📅</div>
                  <h3 className="font-sans text-xl font-bold text-purple-700 mb-1">{service.title}</h3>
                  <p className="text-purple-600 font-bold mb-6">{service.duration}</p>
                  <ul className="space-y-3 mb-8">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 font-sans text-sm">
                        <span className="text-purple-600 font-bold flex-shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-600/10 to-purple-400/10 border border-purple-200/50 rounded-3xl p-8 text-center">
              <h3 className="font-sans font-bold text-purple-700 mb-4 text-lg">Payment Methods</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-slate-700 border border-purple-200/50">💳 Credit Cards</span>
                <span className="bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-slate-700 border border-purple-200/50">🏦 ACH Transfer</span>
                <span className="bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-slate-700 border border-purple-200/50">💰 Cash</span>
                <span className="bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-slate-700 border border-purple-200/50">📱 Venmo</span>
              </div>
              <p className="text-slate-600 font-sans text-sm mt-6">Most major insurance plans accepted • Flexible payment plans available</p>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="relative py-24 px-4 bg-gradient-to-b from-purple-50/30 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-sans text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent mb-4">
                Start Your Journey
              </h2>
              <p className="text-slate-600 font-sans max-w-2xl mx-auto text-lg">
                Take the first step towards better mental health
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Contact Form */}
              <form className="fade-in-up bg-gradient-to-br from-purple-50/80 to-purple-100/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-purple-200/50">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                      <input
                        type="text"
                        placeholder="Your first name"
                        className="w-full px-4 py-3 rounded-lg border border-purple-200/50 focus:border-purple-400 focus:outline-none transition-colors bg-white/60 placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        placeholder="Your last name"
                        className="w-full px-4 py-3 rounded-lg border border-purple-200/50 focus:border-purple-400 focus:outline-none transition-colors bg-white/60 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-purple-200/50 focus:border-purple-400 focus:outline-none transition-colors bg-white/60 placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="(XXX) XXX-XXXX"
                      className="w-full px-4 py-3 rounded-lg border border-purple-200/50 focus:border-purple-400 focus:outline-none transition-colors bg-white/60 placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                    <textarea
                      placeholder="How can we help you?"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-purple-200/50 focus:border-purple-400 focus:outline-none transition-colors bg-white/60 placeholder:text-slate-400"
                    />
                  </div>

                  <button type="submit" className="hero-btn w-full">
                    <span>Book Consultation</span>
                    <span>✉️</span>
                  </button>
                </div>
              </form>

              {/* Contact Info */}
              <div className="fade-in-up space-y-6">
                <div className="bg-gradient-to-br from-purple-50/80 to-purple-100/80 backdrop-blur-sm rounded-3xl border border-purple-200/50 p-8">
                  <h3 className="font-sans text-2xl font-bold text-purple-700 mb-6">Quick Contact</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-semibold text-purple-600 mb-2">📞 Phone</p>
                      <a href="tel:817-966-3989" className="text-purple-700 font-bold hover:text-purple-600 transition-colors text-lg">
                        817-966-3989
                      </a>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-purple-600 mb-2">📧 Email</p>
                      <a href="mailto:GoretyDNP@gmail.com" className="text-purple-700 font-bold hover:text-purple-600 transition-colors text-lg">
                        GoretyDNP@gmail.com
                      </a>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-purple-600 mb-2">📍 Office Location</p>
                      <p className="text-slate-700 font-sans text-sm">
                        2204 Joe Battle Blvd Suite D203B<br />
                        El Paso, TX 79938
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-purple-600 mb-2">🕐 Office Hours</p>
                      <p className="text-slate-700 font-sans text-sm">
                        Monday - Friday: 9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl p-8 text-white">
                  <p className="font-sans font-bold mb-2 text-lg">✓ We Respond Within 2 Hours</p>
                  <p className="font-sans text-sm text-purple-100">
                    Your message matters. We prioritize rapid response to all inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STAY CONNECTED SECTION */}
        <section className="relative py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-sans text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Stay Connected
            </h2>
            <p className="text-slate-600 font-sans max-w-2xl mx-auto text-lg mb-12">
              Follow for mental health tips, resources, and community support
            </p>

            <div className="flex justify-center gap-4 mb-12">
              {[
                { icon: "f", label: "Facebook" },
                { icon: "📷", label: "Instagram" },
                { icon: "in", label: "LinkedIn" },
                { icon: "𝕏", label: "Twitter" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-purple-200/50 text-purple-600 hover:bg-purple-100/60 hover:scale-110 transition-all duration-300"
                  title={social.label}
                >
                  <span className="text-xl font-bold">{social.icon}</span>
                </a>
              ))}
            </div>

            <div className="inline-block bg-gradient-to-br from-purple-50/80 to-purple-100/80 backdrop-blur-sm rounded-2xl border border-purple-200/50 px-8 py-4">
              <p className="text-slate-700 font-sans">
                <span className="text-lg">🌎</span> <span className="font-medium">Telehealth services</span> available across Texas
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
