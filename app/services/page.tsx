"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const services = [
    {
      title: "Initial Psychiatric Evaluation",
      duration: "60-90 minutes",
      description:
        "Comprehensive psychiatric assessment including detailed history, symptoms evaluation, and personalized treatment planning.",
      benefits: [
        "Full mental health history",
        "Clinical assessment",
        "Treatment plan development",
        "Medication recommendations if needed",
      ],
      icon: "📋",
    },
    {
      title: "Medication Management",
      duration: "Ongoing care",
      description:
        "Continuous psychiatric medication management including monitoring, adjustments, refills, and follow-up care.",
      benefits: [
        "Medication optimization",
        "Regular monitoring",
        "Dosage adjustments",
        "Side effect management",
        "Regular follow-ups",
      ],
      icon: "💊",
    },
    {
      title: "Individual Therapy",
      duration: "Weekly or as needed",
      description:
        "One-on-one therapeutic sessions addressing anxiety, depression, trauma, life transitions, and other mental health concerns.",
      benefits: [
        "Personalized therapy",
        "Coping strategies",
        "Emotional support",
        "Life skills coaching",
        "Trauma processing",
      ],
      icon: "💬",
    },
    {
      title: "Telehealth Sessions",
      duration: "Flexible scheduling",
      description: "Convenient virtual appointments from the comfort of your home for all services.",
      benefits: [
        "Remote access",
        "Flexible scheduling",
        "Privacy & comfort",
        "Easy appointment management",
        "Secure video platform",
      ],
      icon: "💻",
    },
  ]

  return (
    <>
      <Navigation />

      <main className="pt-32 pb-16">
        {/* Header */}
        <section className="max-w-6xl mx-auto px-4 mb-16 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 text-deep-purple">Our Services</h1>
          <p className="font-satoshi text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive mental health care designed to support your wellness journey. All services are delivered with
            compassion and clinical expertise.
          </p>
        </section>

        {/* Services Grid */}
        <section className="max-w-6xl mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-deep-purple rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />

                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-8px] border-2 border-lavender-200 hover:border-transparent">
                  <div className="text-5xl mb-4">{service.icon}</div>

                  <h3 className="font-playfair text-2xl font-bold text-deep-purple mb-2">{service.title}</h3>

                  <p className="text-purple-600 font-satoshi font-semibold mb-4">{service.duration}</p>

                  <p className="font-satoshi text-slate-700 mb-6 leading-relaxed">{service.description}</p>

                  {hoveredCard === index && (
                    <div className="space-y-2 mb-6 animate-in fade-in duration-300">
                      <p className="font-satoshi font-semibold text-deep-purple text-sm">What's included:</p>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="text-sm text-slate-600 font-satoshi flex items-center gap-2">
                            <span className="text-purple-600">✓</span> {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link href="/contact" className="gradient-btn w-full text-center py-3 text-sm">
                    Schedule Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-deep-purple to-purple-700 rounded-3xl max-w-6xl mx-auto px-4 py-16 text-center my-16">
          <h2 className="font-playfair text-4xl font-bold text-white mb-4">Ready to Begin Your Healing Journey?</h2>
          <p className="font-satoshi text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Same-week appointments often available. Contact Dr. Gorety today to schedule your initial consultation.
          </p>
          <Link href="/contact" className="gradient-btn">
            Book Your Appointment
          </Link>
        </section>
      </main>

      <Footer />
    </>
  )
}
