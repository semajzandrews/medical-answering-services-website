"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Phone, Menu, X, ArrowRight, Headset, Shield, Check, ShieldCheck, Stethoscope, Lock, MessageSquare, Send } from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <div className="antialiased text-slate-700 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-3 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur shadow-sm">
            <div className="flex items-center justify-between px-4 sm:px-6 py-3">
              {/* Logo */}
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

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-2">
                <a href="/" className="px-3 py-2 rounded-xl text-sm font-medium text-slate-900 bg-[#D4AF37] hover:bg-[#C5A028] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 transition">Home</a>
                <a href="/about" className="px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 transition">About</a>
                <a href="/services" className="px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 transition">Services</a>
                <a href="/contact" className="px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 transition">Contact</a>
              </nav>

              {/* CTA + Mobile */}
              <div className="flex items-center gap-2">
                <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-amber-600/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition bg-[#D4AF37] hover:bg-[#C5A028]">
                  Schedule Demo
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu" 
                  className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 transition"
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
                  <div className="relative h-10 w-10">
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
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 transition"
                >
                  <X className="w-5 h-5 text-slate-700" />
                </button>
              </div>
              <nav className="p-4 space-y-1">
                <a href="/" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-slate-900 bg-[#D4AF37]">Home</a>
                <a href="/about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-slate-800 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300">About</a>
                <a href="/services" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-slate-800 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300">Services</a>
                <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-slate-800 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300">Contact</a>
              </nav>
              <div className="p-4 border-t border-slate-200">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-amber-600/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition bg-[#D4AF37] hover:bg-[#C5A028]">
                  Schedule Demo
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </aside>
          </>
        )}
      </header>

      <main id="home" className="pt-28 md:pt-32 lg:pt-36">
        {/* Hero */}
        <section className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              {/* Image on top for mobile */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="relative overflow-visible">
                        <img 
                          src="/hero-hispanic-woman.jpg" 
                          alt="Professional Hispanic healthcare worker taking patient call with headset" 
                          className="w-full rounded-[28px] border border-slate-200 shadow-lg object-cover aspect-[4/3]"
                        />
                    {/* Overlay: Live Answer Badge */}
                    <div className="absolute -bottom-6 -left-6">
                      <div className="flex items-center gap-2 rounded-2xl border border-amber-200 bg-amber-50/80 backdrop-blur px-3 py-2 shadow-sm">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-100 ring-1 ring-amber-300/50">
                          <Headset className="w-4.5 h-4.5 text-amber-700" />
                        </div>
                        <span className="text-sm font-medium text-amber-900">Live Answer</span>
                      </div>
                    </div>
                    {/* Overlay: HIPAA Ready */}
                    <div className="absolute -top-6 -right-6">
                      <div className="flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50/90 backdrop-blur px-3 py-2 shadow-sm">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-100">
                          <Shield className="w-4.5 h-4.5 text-emerald-700" />
                        </div>
                        <span className="text-sm font-medium text-emerald-900">HIPAA Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="order-2 lg:order-1">
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Healthcare Communications</p>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
                  Never miss a patient call with{" "}
                  <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#F5C842]">
                    24/7 medical answering
                  </span>
                  {" "}and nurse triage
                </h1>
                <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed">
                  HIPAA-compliant call handling, clinical triage by licensed nurses, and seamless communication—so your team can focus on care, not callbacks.
                </p>

                {/* CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-amber-600/20 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition bg-[#D4AF37] hover:bg-[#C5A028]">
                    Schedule Consultation
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="/services" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 transition">
                    Learn More
                  </a>
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-2xl font-semibold text-slate-900">24/7</div>
                    <div className="text-sm text-slate-600">Always available</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-2xl font-semibold text-slate-900">98%</div>
                    <div className="text-sm text-slate-600">Call resolution</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-2xl font-semibold text-slate-900">&lt;10s</div>
                    <div className="text-sm text-slate-600">Response time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mt-20 border-t border-slate-200"></div>

        {/* Services Overview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Our Services</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Comprehensive answering and triage</h2>
              <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
                From after-hours coverage to clinical triage, we ensure every patient is heard and guided with empathy.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Card 1 */}
              <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 ring-1 ring-amber-300/50">
                    <Phone className="w-5 h-5 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-900">24/7 Medical Answering</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">Live, trained agents handle all calls with intelligent routing to the right clinician.</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    After-hours &amp; overflow
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    On-call escalation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Multilingual support
                  </li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100">
                    <Stethoscope className="w-5 h-5 text-emerald-700" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-900">Appointment Scheduling</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">Seamless booking and calendar management integrated with your systems.</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Real-time availability
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Confirmation &amp; reminders
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Reschedule handling
                  </li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100">
                    <MessageSquare className="w-5 h-5 text-sky-700" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-900">Emergency Call Routing</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">Urgent calls reach your on-call team immediately with protocol-driven triage.</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Priority escalation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Protocol-based routing
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Real-time notifications
                  </li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100">
                    <Shield className="w-5 h-5 text-violet-700" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-900">Message Taking</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">Professional message capture with secure delivery to your team.</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    HIPAA-compliant logging
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Structured documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Secure delivery
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-8 md:py-10 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-300 bg-white/95 backdrop-blur p-6 md:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h3 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">Trusted by healthcare providers nationwide</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1.5">
                    <ShieldCheck className="w-4.5 h-4.5 text-emerald-700" />
                    <span className="text-sm font-medium text-emerald-900">HIPAA Compliant</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-sky-50 px-3 py-1.5">
                    <Stethoscope className="w-4.5 h-4.5 text-sky-700" />
                    <span className="text-sm font-medium text-sky-900">Licensed Nurses</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-xl border border-violet-200 bg-violet-50 px-3 py-1.5">
                    <Lock className="w-4.5 h-4.5 text-violet-700" />
                    <span className="text-sm font-medium text-violet-900">SOC 2 Type II</span>
                  </div>
                </div>
              </div>

              {/* Testimonials preview */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-800">"They feel like an extension of our care team—fast, empathetic, thorough."</p>
                  <div className="mt-3 flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format&fit=crop" 
                      alt="Practice Admin" 
                      className="h-8 w-8 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <div className="text-sm font-medium text-slate-900">Practice Administrator</div>
                      <div className="text-xs text-slate-600">Primary Care</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-800">"Reduced unnecessary ER referrals and improved patient guidance significantly."</p>
                  <div className="mt-3 flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" 
                      alt="Medical Director" 
                      className="h-8 w-8 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <div className="text-sm font-medium text-slate-900">Medical Director</div>
                      <div className="text-xs text-slate-600">Pediatrics</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-800">"Documentation is clear, timely, and consistent. Our clinicians love it."</p>
                  <div className="mt-3 flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop" 
                      alt="CMIO" 
                      className="h-8 w-8 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <div className="text-sm font-medium text-slate-900">CMIO</div>
                      <div className="text-xs text-slate-600">Multi-specialty Group</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[28px] border border-amber-100 p-8 md:p-12 shadow-sm bg-gradient-to-br from-amber-50/50 to-white">
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Get your business operational fast</h2>
                <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
                  Professional website, operational templates, and everything you need to start taking calls.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#contact-form" className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-amber-600/20 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition bg-[#D4AF37] hover:bg-[#C5A028]">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/services" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 transition">
                  See Services
                </a>
              </div>

              {/* Contact form */}
              <div id="contact-form" className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full name</label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe" 
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Work email</label>
                    <input 
                      type="email" 
                      placeholder="jane@clinic.com" 
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Practice name</label>
                    <input 
                      type="text" 
                      placeholder="Acme Primary Care" 
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                    <input 
                      type="tel" 
                      placeholder="(555) 000-0000" 
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">How can we help?</label>
                    <textarea 
                      rows={4} 
                      placeholder="Tell us about your coverage needs…" 
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300"
                    />
                  </div>
                  <div className="md:col-span-2 flex items-center justify-between">
                    <p className="text-xs text-slate-500">By submitting, you agree to our terms and privacy policy.</p>
                    <button 
                      type="submit" 
                      className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-amber-600/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition bg-[#D4AF37] hover:bg-[#C5A028]"
                    >
                      Send Request
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
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
