"use client"

import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Subtle Background Gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-white via-purple-50/30 to-white" />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-96 -right-96 w-screen h-screen rounded-full bg-purple-100/20 blur-3xl" />
        <div className="absolute -bottom-96 -left-96 w-screen h-screen rounded-full bg-purple-100/15 blur-3xl" />
      </div>

      <main className="relative">
        {/* HERO SECTION */}
        <section id="hero" className="relative pt-32 pb-20 px-4 sm:px-6 md:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Certification Badge */}
            <div className="mb-8 inline-flex items-center gap-2 bg-white border border-purple-200 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-purple-600">🏆</span>
              <span className="text-sm font-semibold text-purple-700">Board Certified Professional</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-purple-700 mb-4 leading-tight">
              Zimuche
            </h1>

            {/* Tagline */}
            <p className="text-2xl sm:text-3xl text-purple-600 font-semibold mb-12">
              Health Harmony
            </p>

            {/* Value Proposition */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="bg-white rounded-2xl border border-purple-200/50 p-8 sm:p-10 shadow-sm">
                <p className="text-lg text-slate-700 leading-relaxed mb-10">
                  Welcome to your digital front door to healing and hope. As your trusted psychiatric mental health partner, I provide compassionate, evidence-based care that honors your unique journey. With board certification and specialized expertise, I'm here to help you navigate life's challenges with personalized treatment plans that blend medication management and psychotherapy—because your mental health deserves expert, caring attention.
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-6 border-t border-purple-100 pt-8">
                  <div>
                    <p className="text-3xl font-bold text-purple-700">15+</p>
                    <p className="text-sm text-slate-600 font-medium mt-1">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-purple-700">500+</p>
                    <p className="text-sm text-slate-600 font-medium mt-1">Lives Transformed</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-purple-700">DNP</p>
                    <p className="text-sm text-slate-600 font-medium mt-1">Board Certified</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="#contact" className="hero-btn text-base">
                <span>Begin Your Journey</span>
                <span>→</span>
              </a>
              <a href="#services" className="hero-btn-secondary text-base">
                Learn More
              </a>
            </div>

            {/* Quick Contact */}
            <div className="text-center">
              <p className="text-slate-600 text-sm font-medium mb-3">Ready to talk?</p>
              <a
                href="tel:817-966-3989"
                className="text-purple-700 font-bold hover:text-purple-600 transition-colors text-lg inline-flex items-center gap-2"
              >
                📞 Call 817-966-3989
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="relative py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-purple-50/40 to-white">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4 max-w-3xl">
                Comprehensive Mental Health Services
              </h2>
              <p className="text-lg text-slate-600">
                Expert care tailored to your unique needs with professional expertise and compassionate approach
              </p>
            </div>

            {/* Services Grid with Image */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Image Column */}
              <div className="lg:col-span-1">
                <div className="relative rounded-2xl overflow-hidden shadow-md h-80 md:h-full min-h-80">
                  <Image
                    src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg"
                    alt="Professional therapy and counseling services"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Service Cards */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">
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
                      className="bg-white rounded-xl border border-purple-200/40 p-6 hover:border-purple-300 hover:shadow-md transition-all duration-300"
                    >
                      <div className="text-3xl mb-3">{service.icon}</div>
                      <h3 className="font-bold text-purple-700 mb-2">{service.title}</h3>
                      <p className="text-sm text-slate-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <a href="#contact" className="hero-btn text-base">
                <span>Schedule a Service</span>
                <span>→</span>
              </a>
              <a href="#about" className="hero-btn-secondary text-base">
                Learn More About Dr. Gorety
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="relative py-20 px-4 sm:px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-md h-96 md:h-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-800/10 z-10" />
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets%2Fc70ebb3e5225486399c19406cd27bb43%2F8d9fe4b88ac049fb93fd853a5db6c03c?format=webp&width=800"
                    alt="Dr. Mariagorety Nwiloh - Psychiatric Nurse Practitioner"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-8">
                  About Dr. Mariagorety Nwiloh, DNP
                </h2>

                {/* Credentials */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex items-center gap-3 bg-purple-50 border border-purple-200 rounded-lg px-4 py-3">
                    <span className="text-2xl">📚</span>
                    <div>
                      <p className="text-xs font-bold text-purple-700">DNP</p>
                      <p className="text-xs text-purple-600">Doctor of Nursing Practice</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-purple-50 border border-purple-200 rounded-lg px-4 py-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <p className="text-xs font-bold text-purple-700">PMHNP-BC</p>
                      <p className="text-xs text-purple-600">Board Certified</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  With over 15 years of experience in psychiatric nursing and mental health care, Dr. Gorety brings compassion, expertise, and evidence-based treatment to every patient interaction.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  As a board-certified Psychiatric Mental Health Nurse Practitioner, she specializes in medication management, individual therapy, and creating personalized treatment plans that honor your unique needs.
                </p>

                <p className="text-lg italic text-purple-700 font-medium mb-8 py-4 border-l-4 border-purple-300 pl-4">
                  "Healing starts with being truly heard and understood."
                </p>

                <a href="#contact" className="hero-btn inline-flex">
                  <span>Schedule Your Session</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIALIZATION SECTION */}
        <section className="relative py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-purple-50/40 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
                Areas of Specialization
              </h2>
              <p className="text-lg text-slate-600">
                Expertise in treating a wide range of mental health concerns
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  className="bg-white rounded-xl border border-purple-200/40 p-6 hover:border-purple-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="text-3xl mb-3">{area.icon}</div>
                  <h3 className="font-bold text-purple-700">{area.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WELLNESS SECTION */}
        <section className="relative py-20 px-4 sm:px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative rounded-2xl overflow-hidden shadow-md h-80 md:h-96">
                  <Image
                    src="https://images.pexels.com/photos/4498278/pexels-photo-4498278.jpeg"
                    alt="Meditation and mindfulness wellness practices"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
                  Wellness & Mindfulness
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Discover the power of mindfulness and wellness practices integrated into your treatment plan. We believe in a holistic approach to mental health that addresses mind, body, and spirit.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  From meditation techniques to stress management strategies, we empower you with tools for lasting peace and emotional resilience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="relative py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-purple-50/40 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
                Client Success Stories
              </h2>
              <p className="text-lg text-slate-600">
                Real experiences from people finding healing and peace
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { text: "Dr. Gorety changed my life. Her compassion and professional expertise helped me navigate my anxiety in ways I never thought possible.", author: "Sarah M.", condition: "Anxiety & Depression" },
                { text: "Finally found someone who listens and genuinely cares. The medication management has been a game-changer for my well-being.", author: "Michael R.", condition: "Depression & Sleep Issues" },
                { text: "The telehealth sessions are so convenient, and the quality of care is exceptional. Highly recommend!", author: "Jennifer L.", condition: "ADHD & Anxiety" },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-purple-200/40 p-8 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-1 mb-4 text-amber-500">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-purple-100 pt-4">
                    <p className="font-bold text-purple-700">{testimonial.author}</p>
                    <p className="text-sm text-purple-600">{testimonial.condition}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section className="relative py-20 px-4 sm:px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
                Transparent Pricing
              </h2>
              <p className="text-lg text-slate-600">
                Flexible payment options and competitive rates
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
                  className="bg-white rounded-xl border border-purple-200/40 border-t-4 border-t-purple-500 p-8 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-bold text-xl text-purple-700 mb-1">{service.title}</h3>
                  <p className="text-purple-600 font-bold mb-6">{service.duration}</p>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                        <span className="text-purple-600 font-bold flex-shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl border border-purple-200/40 p-8 text-center">
              <h3 className="font-bold text-purple-700 mb-4 text-lg">Payment Methods</h3>
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                <span className="bg-purple-50 rounded-full px-4 py-2 text-sm font-medium text-slate-700">💳 Credit Cards</span>
                <span className="bg-purple-50 rounded-full px-4 py-2 text-sm font-medium text-slate-700">🏦 ACH Transfer</span>
                <span className="bg-purple-50 rounded-full px-4 py-2 text-sm font-medium text-slate-700">💰 Cash</span>
                <span className="bg-purple-50 rounded-full px-4 py-2 text-sm font-medium text-slate-700">📱 Venmo</span>
              </div>
              <p className="text-slate-600 text-sm">Most major insurance plans accepted • Flexible payment plans available</p>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="relative py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-purple-50/40 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
                Start Your Journey
              </h2>
              <p className="text-lg text-slate-600">
                Take the first step towards better mental health
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl border border-purple-200/40 p-8 md:p-10 shadow-sm">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                      <input
                        type="text"
                        placeholder="Your first name"
                        className="w-full px-4 py-3 rounded-lg border border-purple-200/50 focus:border-purple-400 focus:outline-none transition-colors bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        placeholder="Your last name"
                        className="w-full px-4 py-3 rounded-lg border border-purple-200/50 focus:border-purple-400 focus:outline-none transition-colors bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-purple-200/50 focus:border-purple-400 focus:outline-none transition-colors bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="(XXX) XXX-XXXX"
                      className="w-full px-4 py-3 rounded-lg border border-purple-200/50 focus:border-purple-400 focus:outline-none transition-colors bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                    <textarea
                      placeholder="How can we help you?"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-purple-200/50 focus:border-purple-400 focus:outline-none transition-colors bg-white"
                    />
                  </div>

                  <button type="submit" className="hero-btn w-full">
                    <span>Book Consultation</span>
                    <span>✉️</span>
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <div className="relative rounded-2xl overflow-hidden shadow-md h-80 md:h-64 mb-6">
                  <Image
                    src="https://images.pexels.com/photos/34833435/pexels-photo-34833435.jpeg"
                    alt="Therapeutic environment and wellness space"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/20" />
                </div>

                <div className="bg-white rounded-2xl border border-purple-200/40 p-8 shadow-sm mb-6">
                  <h3 className="font-bold text-2xl text-purple-700 mb-6">Quick Contact</h3>

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
                      <p className="text-slate-700 text-sm">
                        2204 Joe Battle Blvd Suite D203B<br />
                        El Paso, TX 79938
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-purple-600 mb-2">🕐 Office Hours</p>
                      <p className="text-slate-700 text-sm">
                        Monday - Friday: 9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-700 rounded-2xl p-8 text-white">
                  <p className="font-bold mb-2 text-lg">✓ We Respond Within 2 Hours</p>
                  <p className="text-sm text-purple-100">
                    Your message matters. We prioritize rapid response to all inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL SECTION */}
        <section className="relative py-20 px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
              Stay Connected
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Follow for mental health tips, resources, and community support
            </p>

            <div className="flex justify-center gap-4 mb-10">
              {[
                { icon: "f", label: "Facebook" },
                { icon: "📷", label: "Instagram" },
                { icon: "in", label: "LinkedIn" },
                { icon: "𝕏", label: "Twitter" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white border border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-400 transition-all duration-300"
                  title={social.label}
                >
                  <span className="text-lg font-bold">{social.icon}</span>
                </a>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-purple-200/40 px-8 py-5 inline-block">
              <p className="text-slate-700">
                <span className="text-lg">🌎</span> <span className="font-semibold">Telehealth services</span> available across Texas
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
