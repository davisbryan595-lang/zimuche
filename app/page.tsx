"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [particles, setParticles] = useState<{ id: number; left: string; top: string; size: string }[]>([])

  useEffect(() => {
    setIsLoading(false)

    // Generate floating particles
    const newParticles = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + "%",
      top: Math.random() * 100 + "%",
      size: Math.random() * 200 + 100 + "px",
    }))
    setParticles(newParticles)
  }, [])

  return (
    <>
      <Navigation />

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lavender-50 via-lavender-100 to-lavender-50" />
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle absolute rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animation: `float ${8 + particle.id * 2}s ease-in-out infinite`,
              animationDelay: `${particle.id * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-lavender-50 z-50">
          <div className="text-center">
            <div className="mb-4 inline-block animate-spin">
              <svg className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            </div>
            <p className="text-slate-600 font-satoshi">Opening the path to peace...</p>
          </div>
        </div>
      )}

      <main className="relative">
        {/* HERO SECTION - Logo Removed */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16">
          {/* Main Heading */}
          <h1
            className="font-playfair text-5xl md:text-7xl font-bold text-center mb-4 fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="bg-gradient-to-r from-purple-700 via-purple-600 to-deep-purple bg-clip-text text-transparent">
              Zimuche
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="text-2xl md:text-3xl text-center mb-2 fade-in-up text-purple-600 font-satoshi"
            style={{ animationDelay: "0.2s" }}
          >
            Health Harmony
          </p>

          {/* Tagline */}
          <p
            className="text-center text-slate-600 text-lg md:text-xl mb-12 max-w-2xl font-satoshi fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Mental Health Counseling & Medication Management
          </p>

          {/* Healing Message */}
          <p
            className="text-center text-slate-700 text-xl md:text-2xl mb-16 max-w-3xl font-playfair italic fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Where Your Mind Finds Its Peace
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 fade-in-up mb-16" style={{ animationDelay: "0.5s" }}>
            <a href="#contact" className="gradient-btn">
              Begin Your Journey
            </a>
            <a href="#services" className="gradient-btn-secondary">
              Learn More
            </a>
          </div>

          {/* Quick Contact */}
          <div className="text-center fade-in-up" style={{ animationDelay: "0.6s" }}>
            <p className="text-slate-600 text-sm font-satoshi mb-4">Ready to talk?</p>
            <a
              href="tel:817-966-3989"
              className="text-purple-600 font-semibold hover:text-deep-purple transition-colors text-lg font-satoshi"
            >
              Call 817-966-3989
            </a>
          </div>
        </section>

        {/* QUICK STATS SECTION */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600/10 to-teal-600/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="fade-in-up">
                <p className="font-playfair text-5xl font-bold text-deep-purple mb-2">500+</p>
                <p className="text-slate-600 font-satoshi">Lives Transformed</p>
              </div>
              <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
                <p className="font-playfair text-5xl font-bold text-deep-purple mb-2">5★</p>
                <p className="text-slate-600 font-satoshi">Client Rated</p>
              </div>
              <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
                <p className="font-playfair text-5xl font-bold text-deep-purple mb-2">Same-Week</p>
                <p className="text-slate-600 font-satoshi">Appointments Available</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-4 text-deep-purple">
              Our Services
            </h2>
            <p className="text-center text-slate-600 font-satoshi mb-16 max-w-2xl mx-auto">
              Comprehensive mental health care tailored to your unique needs
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service Cards */}
              {[
                {
                  title: "Psychiatric Evaluation",
                  description: "Thorough assessment and diagnosis to understand your mental health",
                  icon: "🧠",
                },
                {
                  title: "Medication Management",
                  description: "Expert prescription monitoring and adjustment for optimal wellness",
                  icon: "💊",
                },
                {
                  title: "Individual Therapy",
                  description: "One-on-one counseling sessions for personal growth and healing",
                  icon: "💬",
                },
                {
                  title: "Couples & Family Sessions",
                  description: "Strengthen relationships and resolve conflicts together",
                  icon: "👥",
                },
                {
                  title: "Telehealth Care",
                  description: "Convenient virtual appointments from the comfort of your home",
                  icon: "📱",
                },
                {
                  title: "Wellness Workshops",
                  description: "Group sessions on stress management and coping strategies",
                  icon: "🌸",
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="group service-card bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-lavender-200 hover:border-purple-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h3 className="font-playfair text-2xl font-bold text-deep-purple mb-3">{service.title}</h3>
                  <p className="text-slate-600 font-satoshi mb-6">{service.description}</p>
                  <button className="gradient-btn text-sm w-full py-2">Book Service</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT DR. GORETY SECTION */}
        <section id="about" className="py-24 px-4 bg-gradient-to-r from-lavender-100/50 to-lavender-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="fade-in-up order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 md:h-[28rem]">
                <Image
                  src="/images/colored-logo.png"
                  alt="Dr. Mariagorety Nwiloh - Psychiatric Nurse Practitioner"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="fade-in-up order-1 md:order-2" style={{ animationDelay: "0.2s" }}>
              <h2 className="font-playfair text-4xl font-bold text-deep-purple mb-4">
                Meet Dr. Mariagorety Nwiloh, DNP
              </h2>
              <p className="text-slate-600 font-satoshi text-lg leading-relaxed mb-6">
                With over 15 years of experience in psychiatric nursing and mental health care, Dr. Gorety brings
                compassion, expertise, and evidence-based treatment to every patient interaction.
              </p>
              <p className="text-slate-600 font-satoshi text-lg leading-relaxed mb-6">
                As a board-certified Psychiatric Mental Health Nurse Practitioner, she specializes in medication
                management, individual therapy, and creating personalized treatment plans that honor your unique needs.
              </p>

              {/* Credentials */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-lavender-200">
                  <p className="font-playfair font-bold text-deep-purple">DNP</p>
                  <p className="text-sm text-slate-600 font-satoshi">Doctor of Nursing Practice</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-lavender-200">
                  <p className="font-playfair font-bold text-deep-purple">PMHNP-BC</p>
                  <p className="text-sm text-slate-600 font-satoshi">Psychiatric Mental Health NP</p>
                </div>
              </div>

              <p className="font-playfair text-xl italic text-purple-600 mb-8">
                "Healing starts with being truly heard and understood."
              </p>

              <a href="#contact" className="gradient-btn">
                Schedule Your Session
              </a>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section id="testimonials" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-4 text-deep-purple">
              What Our Clients Say
            </h2>
            <p className="text-center text-slate-600 font-satoshi mb-16 max-w-2xl mx-auto">
              Real stories from people who have found healing and peace through our care
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  text: "Dr. Gorety changed my life. Her compassion and professional expertise helped me navigate my anxiety in ways I never thought possible.",
                  author: "- J.M.",
                },
                {
                  text: "Finally found someone who listens and genuinely cares. The medication management has been a game-changer for my well-being.",
                  author: "- S.R.",
                },
                {
                  text: "The telehealth sessions are so convenient, and the quality of care is exceptional. Highly recommend!",
                  author: "- M.T.",
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-lavender-200 hover:shadow-lg transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <p className="text-yellow-400 mb-4 text-2xl">★★★★★</p>
                  <p className="text-slate-700 font-satoshi italic mb-6">"{testimonial.text}"</p>
                  <p className="text-purple-600 font-playfair font-bold">{testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT & BOOKING SECTION */}
        <section id="contact" className="py-24 px-4 bg-gradient-to-r from-deep-purple/5 to-purple-600/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-4 text-deep-purple">
              Begin Your Journey
            </h2>
            <p className="text-center text-slate-600 font-satoshi mb-16 max-w-2xl mx-auto">
              Ready to prioritize your mental health? Let's start with a conversation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="fade-in-up space-y-8">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-lavender-200">
                  <h3 className="font-playfair text-2xl font-bold text-deep-purple mb-3">Quick Contact</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-slate-500 font-satoshi mb-1">Phone</p>
                      <a
                        href="tel:817-966-3989"
                        className="text-purple-600 font-semibold hover:text-deep-purple transition-colors text-lg"
                      >
                        817-966-3989
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-satoshi mb-1">Email</p>
                      <a
                        href="mailto:GoretyDNP@gmail.com"
                        className="text-purple-600 font-semibold hover:text-deep-purple transition-colors text-lg"
                      >
                        GoretyDNP@gmail.com
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-satoshi mb-1">Office Location</p>
                      <p className="text-slate-700 font-satoshi">2204 Joe Battle Blvd Suite D203B, El Paso, TX 79938</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-satoshi mb-1">Office Hours</p>
                      <p className="text-slate-700 font-satoshi">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-deep-purple rounded-2xl p-6 text-white">
                  <p className="font-playfair text-lg font-bold mb-2">We Respond Within 2 Hours</p>
                  <p className="font-satoshi">Your message matters. We'll get back to you as soon as possible.</p>
                </div>
              </div>

              {/* Booking Form */}
              <form className="fade-in-up bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-lavender-200 space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-lavender-200 focus:border-purple-600 focus:outline-none transition-colors bg-white/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-lavender-200 focus:border-purple-600 focus:outline-none transition-colors bg-white/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="(XXX) XXX-XXXX"
                    className="w-full px-4 py-3 rounded-lg border border-lavender-200 focus:border-purple-600 focus:outline-none transition-colors bg-white/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea
                    placeholder="Tell us how we can help..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-lavender-200 focus:border-purple-600 focus:outline-none transition-colors bg-white/50"
                  />
                </div>
                <button type="submit" className="gradient-btn w-full">
                  Schedule Consultation
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
