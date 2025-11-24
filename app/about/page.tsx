"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      <Navigation />

      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div
              className={`relative h-96 rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600" />
              <Image
                src="/dr--mariagorety-nwiloh-dnp-psychiatric-nurse-pract.jpg"
                alt="Dr. Mariagorety Nwiloh, DNP"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div
              className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <h1 className="font-playfair text-5xl font-bold mb-4 text-deep-purple">Dr. Mariagorety Nwiloh, DNP</h1>
              <p className="text-purple-600 font-satoshi font-semibold text-lg mb-6">
                Board-Certified Psychiatric Nurse Practitioner
              </p>

              <div className="space-y-4 font-satoshi text-slate-700 leading-relaxed">
                <p>
                  Dr. Mariagorety Nwiloh is a compassionate and dedicated psychiatric nurse practitioner committed to
                  providing personalized mental health care to individuals and families in El Paso and surrounding
                  communities.
                </p>

                <p>
                  With years of experience in psychiatric nursing and medication management, Dr. Gorety specializes in
                  creating a safe, non-judgmental space where clients feel heard, understood, and supported in their
                  mental health journey.
                </p>

                <div className="bg-lavender-100 rounded-xl p-6 my-6 border-l-4 border-purple-600">
                  <p className="italic text-slate-700">
                    "My mission is to help individuals rediscover their peace and reclaim their mental wellness. Every
                    person deserves compassionate, evidence-based care."
                  </p>
                </div>

                <p>
                  Dr. Gorety's approach combines clinical expertise with empathy, addressing anxiety, depression,
                  trauma, medication management, and life transitions with thoughtful, individualized treatment plans.
                </p>
              </div>

              <Link href="/contact" className="gradient-btn mt-8 inline-block">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="bg-gradient-to-r from-lavender-100 to-lavender-200 py-16 my-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-playfair text-4xl font-bold text-center mb-12 text-deep-purple">Areas of Expertise</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Anxiety Disorders",
                  description:
                    "Compassionate treatment for generalized anxiety, panic attacks, social anxiety, and anxiety-related conditions.",
                  icon: "🧠",
                },
                {
                  title: "Depression Management",
                  description: "Evidence-based approaches to treating major depression, dysthymia, and mood disorders.",
                  icon: "💜",
                },
                {
                  title: "Trauma & PTSD",
                  description:
                    "Specialized care for trauma survivors and post-traumatic stress using proven therapeutic methods.",
                  icon: "🛡️",
                },
                {
                  title: "Medication Management",
                  description:
                    "Comprehensive psychiatric medication management, including evaluation, prescription, and ongoing monitoring.",
                  icon: "⚕️",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-playfair text-xl font-bold text-deep-purple mb-2">{item.title}</h3>
                  <p className="font-satoshi text-slate-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12 text-deep-purple">My Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "Compassion", description: "Meeting every person with genuine empathy and understanding." },
              { value: "Excellence", description: "Providing evidence-based, high-quality psychiatric care." },
              { value: "Trust", description: "Building safe, confidential therapeutic relationships." },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-block w-16 h-16 bg-gradient-to-br from-purple-500 to-deep-purple rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-white font-bold text-2xl">{index + 1}</span>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-deep-purple mb-2">{item.value}</h3>
                <p className="font-satoshi text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
