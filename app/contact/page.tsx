"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Phone, Menu, X, ArrowRight, Clock, Shield, Mail, Calendar, MapPin, UserCheck, FileText, MessageSquare, ChevronDown, Send } from "lucide-react"

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    practice_name: '',
    practice_type: '',
    call_volume: '',
    interested_in: '',
    message: '',
    consent: false
  })

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form validation would go here
    setFormSubmitted(true)
    // In production, send to your backend/email service
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <div className="antialiased text-slate-700 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-3 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur shadow-sm">
            <div className="flex items-center justify-between px-4 sm:px-6 py-3">
              <a href="/" className="flex items-center gap-3 group">
                <div className="relative h-12 w-12 group-hover:scale-105 transition-transform">
                  <Image
                    src="/ccf-logo.png"
                    alt="Customer Care First"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <span className="hidden sm:inline text-sm font-semibold text-slate-700">Customer Care First</span>
              </a>

              <nav className="hidden md:flex items-center gap-2">
                <a href="/" className="px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 transition">Home</a>
                <a href="/about" className="px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 transition">About</a>
                <a href="/services" className="px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 transition">Services</a>
                <a href="/contact" className="px-3 py-2 rounded-xl text-sm font-medium text-slate-900 bg-[#D4AF37] hover:bg-[#C5A028] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 transition">Contact</a>
              </nav>

              <div className="flex items-center gap-2">
                <a href="#contact-form" className="hidden md:inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-amber-600/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition bg-[#D4AF37] hover:bg-[#C5A028]">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu" 
                  className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-slate-200 bg-white hover:bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 transition"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5 text-slate-700" /> : <Menu className="w-5 h-5 text-slate-700" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <>
            <div 
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm"
            />
            <aside className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white border-l border-slate-200 shadow-xl z-50">
              <div className="flex items-center justify-between px-4 py-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-md border border-slate-300 bg-white flex items-center justify-center shadow-sm">
                    <Image
                    src="/ccf-logo.png"
                    alt="Customer Care First"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  </div>
                  <span className="text-sm font-medium text-slate-800">Menu</span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu" 
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 transition"
                >
                  <X className="w-5 h-5 text-slate-700" />
                </button>
              </div>
              <nav className="p-4 space-y-1">
                <a href="/" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-slate-800 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300">Home</a>
                <a href="/about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-slate-800 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300">About</a>
                <a href="/services" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-slate-800 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300">Services</a>
                <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-slate-900 bg-[#D4AF37]">Contact</a>
              </nav>
              <div className="p-4 border-t border-slate-200">
                <a href="#contact-form" onClick={() => setMobileMenuOpen(false)} className="flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-amber-600/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition bg-[#D4AF37] hover:bg-[#C5A028]">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </aside>
          </>
        )}
      </header>

      <main className="pt-28 md:pt-32 lg:pt-36">
        {/* Hero */}
        <section className="relative py-12 md:py-16 bg-gradient-to-br from-amber-50/50 to-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Get in Touch</p>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              Let's discuss how we can{" "}
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#F5C842]">
                support your practice
              </span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Whether you have questions about our services or want to schedule a demo, we're here to help. Reach out anytime—we respond within 24 hours.
            </p>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm font-medium text-slate-700">24-hour response</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm font-medium text-slate-700">Live chat available</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                <Shield className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm font-medium text-slate-700">HIPAA-secure</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section id="contact-form" className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Form - Left Side (3 columns) */}
              <div className="lg:col-span-3">
                {formSubmitted ? (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
                    <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-emerald-100 mb-4">
                      <Send className="w-8 h-8 text-emerald-700" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">Thank you!</h3>
                    <p className="text-slate-600">We'll be in touch within 24 hours.</p>
                  </div>
                ) : (
                  <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Send us a message</h2>
                    <p className="mt-2 text-slate-600">Fill out the form below and we'll get back to you within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div className="sm:col-span-1">
                        <label htmlFor="full_name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          id="full_name"
                          name="full_name"
                          required
                          value={formData.full_name}
                          onChange={handleChange}
                          placeholder="Dr. Jane Smith"
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent"
                        />
                      </div>

                      {/* Work Email */}
                      <div className="sm:col-span-1">
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Work Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@yourpractice.com"
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent"
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="sm:col-span-1">
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent"
                        />
                      </div>

                      {/* Practice Name */}
                      <div className="sm:col-span-1">
                        <label htmlFor="practice_name" className="block text-sm font-medium text-slate-700 mb-1">Practice/Organization Name *</label>
                        <input
                          type="text"
                          id="practice_name"
                          name="practice_name"
                          required
                          value={formData.practice_name}
                          onChange={handleChange}
                          placeholder="ABC Medical Group"
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent"
                        />
                      </div>

                      {/* Practice Type */}
                      <div className="sm:col-span-1">
                        <label htmlFor="practice_type" className="block text-sm font-medium text-slate-700 mb-1">Practice Type</label>
                        <select
                          id="practice_type"
                          name="practice_type"
                          value={formData.practice_type}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent"
                        >
                          <option value="">Select type...</option>
                          <option value="Primary Care">Primary Care</option>
                          <option value="Specialty Clinic">Specialty Clinic</option>
                          <option value="Hospital/Health System">Hospital/Health System</option>
                          <option value="Telehealth Provider">Telehealth Provider</option>
                          <option value="Dental/Oral Surgery">Dental/Oral Surgery</option>
                          <option value="Behavioral Health">Behavioral Health</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Call Volume */}
                      <div className="sm:col-span-1">
                        <label htmlFor="call_volume" className="block text-sm font-medium text-slate-700 mb-1">Estimated Daily Call Volume</label>
                        <select
                          id="call_volume"
                          name="call_volume"
                          value={formData.call_volume}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent"
                        >
                          <option value="">Select volume...</option>
                          <option value="Under 50 calls/day">Under 50 calls/day</option>
                          <option value="50-100 calls/day">50-100 calls/day</option>
                          <option value="100-250 calls/day">100-250 calls/day</option>
                          <option value="250+ calls/day">250+ calls/day</option>
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                      </div>

                      {/* Interested In */}
                      <div className="sm:col-span-2">
                        <label htmlFor="interested_in" className="block text-sm font-medium text-slate-700 mb-1">I'm interested in...</label>
                        <select
                          id="interested_in"
                          name="interested_in"
                          value={formData.interested_in}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent"
                        >
                          <option value="">Select service...</option>
                          <option value="24/7 Answering Service">24/7 Answering Service</option>
                          <option value="Appointment Scheduling">Appointment Scheduling</option>
                          <option value="After-Hours Coverage">After-Hours Coverage</option>
                          <option value="All Services">All Services</option>
                          <option value="Just exploring options">Just exploring options</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message (Optional)</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your practice's needs, current challenges, or any specific questions..."
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent"
                        />
                      </div>

                      {/* Consent */}
                      <div className="sm:col-span-2">
                        <label className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            name="consent"
                            required
                            checked={formData.consent}
                            onChange={handleChange}
                            className="mt-0.5 h-5 w-5 rounded border-slate-300 text-[#D4AF37] focus:ring-2 focus:ring-amber-300"
                          />
                          <span className="text-sm text-slate-600">
                            I agree to receive communications from Customer Care First. We'll never share your information. *
                          </span>
                        </label>
                      </div>

                      {/* Submit Button */}
                      <div className="sm:col-span-2">
                        <button
                          type="submit"
                          className="w-full inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-amber-600/20 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition bg-[#D4AF37] hover:bg-[#C5A028]"
                        >
                          Send Message
                          <Send className="w-4 h-4" />
                        </button>
                        <p className="text-xs text-slate-500 mt-3 text-center">Typically respond within 24 hours</p>
                      </div>
                    </form>
                  </div>
                )}
              </div>

              {/* Contact Info - Right Side (2 columns) */}
              <div className="lg:col-span-2 space-y-4">
                {/* Phone Card */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 ring-1 ring-amber-300/50">
                    <Phone className="w-6 h-6 text-amber-700" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900 mt-4">Call us directly</h3>
                  <p className="text-base font-medium text-[#D4AF37] mt-1">(555) 123-4567</p>
                  <p className="text-sm text-slate-600 mt-2">Available Mon-Fri, 9am-6pm EST</p>
                  <a href="tel:+15551234567" className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-[#D4AF37] mt-4 transition">
                    Click to call
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Email Card */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100">
                    <Mail className="w-6 h-6 text-sky-700" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900 mt-4">Email us</h3>
                  <p className="text-base font-medium text-sky-600 mt-1">hello@customercarefirst.com</p>
                  <p className="text-sm text-slate-600 mt-2">We'll respond within 24 hours</p>
                  <a href="mailto:hello@customercarefirst.com" className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-sky-600 mt-4 transition">
                    Send email
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Calendar Card */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                    <Calendar className="w-6 h-6 text-emerald-700" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900 mt-4">Schedule a demo</h3>
                  <p className="text-base font-medium text-emerald-600 mt-1">Book a 30-minute consultation</p>
                  <p className="text-sm text-slate-600 mt-2">See how we can help your practice</p>
                  <a href="#schedule" className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-emerald-600 mt-4 transition">
                    View calendar
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Consultation Section */}
        <section id="schedule" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Book a Demo</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                See Customer Care First in action
              </h2>
              <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Schedule a 30-minute consultation to discuss your practice's needs and see how our services work.
              </p>
            </div>

            {/* Calendar Embed Placeholder */}
            <div className="max-w-4xl mx-auto rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <Calendar className="w-16 h-16 text-slate-300 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Calendly Widget Embed</h3>
                <p className="text-slate-600 max-w-md">
                  Insert your Calendly, Cal.com, or preferred scheduling tool embed code here
                </p>
                <div className="mt-6 rounded-xl bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 p-4 font-mono text-xs text-slate-600">
                  &lt;iframe src="https://calendly.com/your-link"&gt;&lt;/iframe&gt;
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="mt-16">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900 text-center mb-8">What to expect in your demo</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                  <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-xl bg-amber-100">
                    <UserCheck className="w-7 h-7 text-amber-700" />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-slate-900">Personalized walkthrough</h4>
                  <p className="mt-2 text-sm text-slate-600">We'll tailor the demo to your practice type and call volume.</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                  <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-xl bg-sky-100">
                    <FileText className="w-7 h-7 text-sky-700" />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-slate-900">Custom proposal</h4>
                  <p className="mt-2 text-sm text-slate-600">Get a detailed proposal with pricing specific to your needs.</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                  <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-xl bg-emerald-100">
                    <MessageSquare className="w-7 h-7 text-emerald-700" />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-slate-900">Q&A session</h4>
                  <p className="mt-2 text-sm text-slate-600">Ask anything about our services, compliance, or integration.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Hours Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Hours */}
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">When we're available</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-start rounded-xl border border-slate-200 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 p-4">
                    <div>
                      <div className="font-semibold text-slate-900">Monday - Friday</div>
                      <div className="text-sm text-slate-600">Sales & Support</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-slate-900">9:00 AM - 6:00 PM EST</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start rounded-xl border border-slate-200 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 p-4">
                    <div>
                      <div className="font-semibold text-slate-900">Saturday - Sunday</div>
                      <div className="text-sm text-slate-600">Sales (Email only)</div>
                      <div className="text-xs text-emerald-600 mt-1">Service runs 24/7</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-slate-900">Closed</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start rounded-xl border border-slate-200 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 p-4">
                    <div>
                      <div className="font-semibold text-slate-900">After Hours</div>
                      <div className="text-sm text-slate-600">Response within 24 hours</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-slate-900">Email support available</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="w-4 h-4" />
                  <span>Remote-first company • Serving practices nationwide</span>
                </div>
              </div>

              {/* Map/Image */}
              <div>
                <img 
                  src="/contact-us-map.jpg" 
                  alt="United States coverage map" 
                  className="w-full rounded-[28px] border border-slate-200 shadow-lg object-cover h-[400px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Quick answers</h2>
              <p className="mt-4 text-slate-600">Common questions about getting started</p>
            </div>

            <div className="space-y-3">
              {/* FAQ 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <button
                  onClick={() => toggleFaq(0)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-slate-900">How quickly can we get started?</span>
                  <ChevronDown className={`w-5 h-5 text-slate-600 transition-transform ${openFaq === 0 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 0 && (
                  <div className="mt-3 text-slate-600">
                    Most practices are live within 7-10 business days after signing up. We handle all the setup and training.
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <button
                  onClick={() => toggleFaq(1)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-slate-900">Do you offer a free trial?</span>
                  <ChevronDown className={`w-5 h-5 text-slate-600 transition-transform ${openFaq === 1 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 1 && (
                  <div className="mt-3 text-slate-600">
                    We offer a 14-day pilot program where you can test our service with live calls before committing to a full contract.
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <button
                  onClick={() => toggleFaq(2)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-slate-900">What if we're not ready to commit?</span>
                  <ChevronDown className={`w-5 h-5 text-slate-600 transition-transform ${openFaq === 2 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 2 && (
                  <div className="mt-3 text-slate-600">
                    No problem! We can schedule a demo, send you materials, and you can reach out when you're ready. No pressure.
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <button
                  onClick={() => toggleFaq(3)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-slate-900">How much does it cost?</span>
                  <ChevronDown className={`w-5 h-5 text-slate-600 transition-transform ${openFaq === 3 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 3 && (
                  <div className="mt-3 text-slate-600">
                    Pricing varies based on call volume and services needed. Most practices start around $499/month for basic 24/7 coverage.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[28px] border border-amber-100 bg-gradient-to-tr from-amber-50/50 to-white p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Still have questions?</h2>
              <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                We're here to help. No question is too small, and we never pressure you to buy.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:+15551234567" className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-amber-600/20 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition bg-[#D4AF37] hover:bg-[#C5A028]">
                  <Phone className="w-4 h-4" />
                  Call (555) 123-4567
                </a>
                <a href="mailto:hello@customercarefirst.com" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white hover:bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 px-6 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 transition">
                  <Mail className="w-4 h-4" />
                  Send us an email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 mb-12">
        <div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(226,232,240,0.8),0px_1px_1px_-0.5px_rgba(148,163,184,0.3),0px_12px_24px_-12px_rgba(100,116,139,0.2)] bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 border border-slate-200 rounded-[40px] backdrop-blur">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-transparent"></div>
          </div>

          <div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
            <div className="grid lg:grid-cols-4 gap-10">
              {/* Brand / intro */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="relative h-10 w-10">
                    <Image
                      src="/ccf-logo.png"
                      alt="Customer Care First"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-base font-semibold text-slate-900">Customer Care First</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  Professional 24/7 medical answering and nurse triage services. HIPAA-compliant call handling so your team can focus on care, not callbacks.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-slate-900 bg-[#D4AF37] hover:bg-[#C5A028] rounded-full px-3 py-1.5 transition"
                >
                  <span>Contact us</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <div className="text-xs text-slate-500">hello@customercarefirst.com</div>
              </div>

              {/* Column: Company */}
              <div>
                <h4 className="text-xs tracking-wider text-slate-500 uppercase font-semibold">Company</h4>
                <ul className="mt-3 space-y-2">
                  <li><a href="/about" className="text-sm text-slate-600 hover:text-slate-900 transition">About</a></li>
                  <li><a href="/about#team" className="text-sm text-slate-600 hover:text-slate-900 transition">Team</a></li>
                  <li><a href="/about#careers" className="text-sm text-slate-600 hover:text-slate-900 transition">Careers</a></li>
                  <li><a href="/about#certifications" className="text-sm text-slate-600 hover:text-slate-900 transition">Certifications</a></li>
                </ul>
              </div>

              {/* Column: Services */}
              <div>
                <h4 className="text-xs tracking-wider text-slate-500 uppercase font-semibold">Services</h4>
                <ul className="mt-3 space-y-2">
                  <li><a href="/services#answering" className="text-sm text-slate-600 hover:text-slate-900 transition">24/7 Medical Answering</a></li>
                  <li><a href="/services#scheduling" className="text-sm text-slate-600 hover:text-slate-900 transition">Appointment Scheduling</a></li>
                  <li><a href="/services#emergency" className="text-sm text-slate-600 hover:text-slate-900 transition">Emergency Call Routing</a></li>
                  <li><a href="/services#triage" className="text-sm text-slate-600 hover:text-slate-900 transition">Nurse Triage</a></li>
                  <li><a href="/services#messaging" className="text-sm text-slate-600 hover:text-slate-900 transition">Message Taking</a></li>
                </ul>
              </div>

              {/* Column: Support */}
              <div>
                <h4 className="text-xs tracking-wider text-slate-500 uppercase font-semibold">Support</h4>
                <ul className="mt-3 space-y-2">
                  <li><a href="/contact" className="text-sm text-slate-600 hover:text-slate-900 transition">Contact Support</a></li>
                  <li><a href="/services#faq" className="text-sm text-slate-600 hover:text-slate-900 transition">FAQ</a></li>
                  <li><a href="/contact#schedule" className="text-sm text-slate-600 hover:text-slate-900 transition">Schedule Demo</a></li>
                  <li><a href="tel:+15551234567" className="text-sm text-slate-600 hover:text-slate-900 transition">(555) 123-4567</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col md:flex-row md:items-center gap-3 md:justify-between">
              <nav className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-slate-500">
                <a href="#" className="hover:text-slate-900 transition">HIPAA Compliance</a>
                <span className="text-slate-300">|</span>
                <a href="#" className="hover:text-slate-900 transition">Privacy Policy</a>
                <span className="text-slate-300">|</span>
                <a href="#" className="hover:text-slate-900 transition">Terms of Service</a>
                <span className="text-slate-300">|</span>
                <a href="#" className="hover:text-slate-900 transition">Accessibility</a>
              </nav>
              <div className="text-[11px] text-slate-500">© {new Date().getFullYear()} Customer Care First, Inc. All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

