"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    timeSlot: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Create mailto link with form data
    const subject = `Appointment Request from ${formData.name}`
    const body = `
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Preferred Time: ${formData.timeSlot}
Message: ${formData.message}
    `.trim()

    window.location.href = `mailto:GoretyDNP@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", phone: "", email: "", service: "", timeSlot: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Navigation />

      <main className="pt-32 pb-16">
        {/* Header */}
        <section className="max-w-6xl mx-auto px-4 mb-16 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 text-deep-purple">Get In Touch</h1>
          <p className="font-satoshi text-xl text-slate-600 max-w-3xl mx-auto">
            We're here to support you. Reach out to schedule your appointment or ask any questions.
          </p>
        </section>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-lavender-200 hover:border-purple-400 transition-all">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-playfair text-2xl font-bold text-deep-purple mb-2">Call Us</h3>
              <a
                href="tel:817-966-3989"
                className="text-purple-600 hover:text-deep-purple transition-colors font-satoshi text-lg font-semibold"
              >
                817-966-3989
              </a>
              <p className="text-slate-600 font-satoshi mt-2 text-sm">Available for urgent matters</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-lavender-200 hover:border-purple-400 transition-all">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-playfair text-2xl font-bold text-deep-purple mb-2">Email</h3>
              <a
                href="mailto:GoretyDNP@gmail.com"
                className="text-purple-600 hover:text-deep-purple transition-colors font-satoshi text-lg font-semibold break-all"
              >
                GoretyDNP@gmail.com
              </a>
              <p className="text-slate-600 font-satoshi mt-2 text-sm">Response within 24 hours</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-lavender-200 hover:border-purple-400 transition-all">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-playfair text-2xl font-bold text-deep-purple mb-2">Location</h3>
              <p className="text-slate-700 font-satoshi font-semibold">
                2204 Joe Battle Blvd
                <br />
                Suite D203B
                <br />
                El Paso, TX 79938
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-lavender-100 to-lavender-200 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto shadow-xl border-2 border-lavender-300">
            <h2 className="font-playfair text-3xl font-bold text-deep-purple mb-2 text-center">
              Schedule Your Appointment
            </h2>
            <p className="text-center text-slate-600 font-satoshi mb-8">Same-week appointments often available</p>

            {submitted && (
              <div className="mb-8 p-4 bg-green-100 border-2 border-green-500 rounded-lg text-center animate-in fade-in duration-300">
                <p className="text-green-700 font-satoshi font-semibold">
                  Thank you! Your message has been sent. We'll be in touch shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-satoshi font-semibold text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-lavender-300 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 font-satoshi transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block font-satoshi font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-lavender-300 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 font-satoshi transition-all"
                    placeholder="(817) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block font-satoshi font-semibold text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-lavender-300 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 font-satoshi transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-satoshi font-semibold text-slate-700 mb-2">Service of Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-lavender-300 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 font-satoshi transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="initial">Initial Psychiatric Evaluation</option>
                    <option value="medication">Medication Management</option>
                    <option value="therapy">Individual Therapy</option>
                    <option value="telehealth">Telehealth Session</option>
                  </select>
                </div>

                <div>
                  <label className="block font-satoshi font-semibold text-slate-700 mb-2">Best Time to Call</label>
                  <select
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-lavender-300 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 font-satoshi transition-all"
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning (8am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 5pm)</option>
                    <option value="evening">Evening (5pm - 8pm)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-satoshi font-semibold text-slate-700 mb-2">Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-lavender-300 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 font-satoshi transition-all resize-none"
                  placeholder="Tell us about your concerns or goals..."
                />
              </div>

              <button type="submit" className="gradient-btn w-full py-4 text-lg">
                Send Message
              </button>

              <p className="text-center text-sm text-slate-600 font-satoshi">
                By submitting this form, you agree to be contacted by Zimuche Health Harmony.
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
