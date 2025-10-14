"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Phone, Menu, X, ArrowRight, Calendar, AlertCircle, MessageSquare, FileText, Check, Clock, ChevronDown } from "lucide-react"

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
                <a href="/services" className="px-3 py-2 rounded-xl text-sm font-medium text-slate-900 bg-[#D4AF37] hover:bg-[#C5A028] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 transition">Services</a>
                <a href="/contact" className="px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 transition">Contact</a>
              </nav>

              <div className="flex items-center gap-2">
                <a href="/contact" className="hidden md:inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-amber-600/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition bg-[#D4AF37] hover:bg-[#C5A028]">
                  Schedule Demo
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
                <a href="/services" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-slate-900 bg-[#D4AF37]">Services</a>
                <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-slate-800 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300">Contact</a>
              </nav>
              <div className="p-4 border-t border-slate-200">
                <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-amber-600/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition bg-[#D4AF37] hover:bg-[#C5A028]">
                  Schedule Demo
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </aside>
          </>
        )}
      </header>

      <main className="pt-28 md:pt-32 lg:pt-36">
        {/* Hero */}
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-amber-50/50 to-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Our Services</p>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              Everything your practice needs to{" "}
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#F5C842]">
                never miss a call
              </span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              From routine appointment scheduling to urgent clinical triage, we handle every patient interaction with professionalism and care.
            </p>
            <div className="mt-8">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-amber-600/20 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition bg-[#D4AF37] hover:bg-[#C5A028]">
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Service 1: 24/7 Medical Answering */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <img 
                  src="/service-phone-calls.jpg" 
                  alt="Professional healthcare worker answering patient calls" 
                  className="w-full rounded-2xl border border-slate-200 shadow-lg object-cover aspect-[4/3]"
                />
              </div>
              {/* Text */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 ring-1 ring-amber-300/50">
                  <Phone className="w-7 h-7 text-amber-700" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">24/7 Medical Answering</div>
                  <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                    Never miss a patient call—day or night
                  </h2>
                  <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
                    Our live answering service ensures every patient reaches a friendly, trained professional within seconds. No voicemail, no hold music, just real human connection.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-2">After-Hours Coverage</h3>
                    <p className="text-sm text-slate-600">When your office closes, we're still open. Patients get the same quality care at 2 AM as they do at 2 PM.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-2">Overflow Support</h3>
                    <p className="text-sm text-slate-600">High call volumes? We handle the overflow so your in-house staff can focus on in-person patients.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-2">On-Call Escalation</h3>
                    <p className="text-sm text-slate-600">Urgent calls reach your on-call provider immediately with all relevant patient information.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-2">Multilingual Support</h3>
                    <p className="text-sm text-slate-600">We offer Spanish and other languages to serve diverse patient populations.</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2">
                    <Clock className="w-4 h-4 text-amber-700" />
                    <span className="text-sm font-semibold text-amber-900">&lt;10s answer time</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2">
                    <Check className="w-4 h-4 text-emerald-700" />
                    <span className="text-sm font-semibold text-emerald-900">98.7% resolution</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2">
                    <Phone className="w-4 h-4 text-sky-700" />
                    <span className="text-sm font-semibold text-sky-900">24/7 available</span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?q=80&w=1600&auto=format&fit=crop" 
                  alt="Healthcare professional answering phone" 
                  className="w-full rounded-[28px] border border-slate-200 shadow-lg object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service 2: Appointment Scheduling */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <img 
                  src="/service-appointment-scheduling.jpg" 
                  alt="Digital calendar scheduling system" 
                  className="w-full rounded-[28px] border border-slate-200 shadow-lg object-cover aspect-[4/3]"
                />
              </div>

              {/* Text */}
              <div className="space-y-6 order-1 lg:order-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-100">
                  <Calendar className="w-7 h-7 text-sky-700" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-sky-700 uppercase tracking-wider">Appointment Scheduling</div>
                  <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                    Fill your calendar while you sleep
                  </h2>
                  <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
                    Our team books, confirms, and manages appointments directly in your scheduling system. No double-bookings, no missed slots.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-2">Real-Time Availability</h3>
                    <p className="text-sm text-slate-600">We access your live calendar to book appointments in real-time.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-2">Confirmation & Reminders</h3>
                    <p className="text-sm text-slate-600">Automated confirmations and reminders reduce no-shows by up to 40%.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-2">Reschedule Handling</h3>
                    <p className="text-sm text-slate-600">Patients can reschedule or cancel 24/7—we update everything automatically.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-2">Waitlist Management</h3>
                    <p className="text-sm text-slate-600">Fill cancellations instantly by contacting waitlisted patients.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 3: Emergency Call Routing */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <img 
                  src="/service-emergency-alerts.jpg" 
                  alt="Emergency medical alert system" 
                  className="w-full rounded-2xl border border-slate-200 shadow-lg object-cover aspect-[4/3]"
                />
              </div>
              {/* Text */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-rose-100">
                  <AlertCircle className="w-7 h-7 text-rose-700" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-rose-700 uppercase tracking-wider">Emergency Call Routing</div>
                  <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                    Critical calls reach the right person instantly
                  </h2>
                  <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
                    Our protocol-driven triage system ensures urgent calls are escalated immediately to your on-call provider with all necessary context.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-2">Priority Escalation</h3>
                    <p className="text-sm text-slate-600">We identify urgent situations and escalate within 60 seconds.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-2">Protocol-Based Routing</h3>
                    <p className="text-sm text-slate-600">Clinical protocols guide our agents to route calls appropriately.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-2">Multiple Contact Methods</h3>
                    <p className="text-sm text-slate-600">We reach on-call providers via phone, text, or pager—whatever works.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-2">Documented Every Time</h3>
                    <p className="text-sm text-slate-600">Every escalation is logged with timestamps and outcome notes.</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop" 
                  alt="Emergency alert" 
                  className="w-full rounded-[28px] border border-slate-200 shadow-lg object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service 4: After-Hours Coverage */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <img 
                  src="/service-after-hours.jpg" 
                  alt="Night time medical office coverage" 
                  className="w-full rounded-[28px] border border-slate-200 shadow-lg object-cover aspect-[4/3]"
                />
              </div>

              {/* Text */}
              <div className="space-y-6 order-1 lg:order-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-violet-100">
                  <MessageSquare className="w-7 h-7 text-violet-700" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-violet-700 uppercase tracking-wider">After-Hours Coverage</div>
                  <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                    Your practice never closes
                  </h2>
                  <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
                    Patients don't stop having medical needs at 5 PM. Our after-hours service ensures they always reach a live person who can help.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-2">Evening & Weekend Coverage</h3>
                    <p className="text-sm text-slate-600">Full coverage when your office is closed.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-2">Holiday Support</h3>
                    <p className="text-sm text-slate-600">We're working when you're celebrating—no gaps in coverage.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-2">Seamless Handoff</h3>
                    <p className="text-sm text-slate-600">Monday morning, you get a full report of all after-hours activity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 5: Prescription Refill Requests */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <img 
                  src="/service-medical-documentation.jpg" 
                  alt="Medical documentation and prescription management" 
                  className="w-full rounded-2xl border border-slate-200 shadow-lg object-cover aspect-[4/3]"
                />
              </div>
              {/* Text */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100">
                  <FileText className="w-7 h-7 text-emerald-700" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">Prescription Refill Requests</div>
                  <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                    Streamline refill requests
                  </h2>
                  <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
                    We capture refill requests with all necessary details and route them to your clinical team for approval.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-2">Complete Information Capture</h3>
                    <p className="text-sm text-slate-600">Patient name, medication, pharmacy, and prescribing provider.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-2">Secure Delivery</h3>
                    <p className="text-sm text-slate-600">HIPAA-compliant messaging to your clinical team.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900 mb-2">Status Updates</h3>
                    <p className="text-sm text-slate-600">Patients can call back to check on refill status.</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1600&auto=format&fit=crop" 
                  alt="Prescription documents" 
                  className="w-full rounded-[28px] border border-slate-200 shadow-lg object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-amber-100 bg-gradient-to-tr from-amber-50/50 to-white p-8 md:p-12">
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Transparent Pricing</p>
                <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                  Simple plans that grow with you
                </h2>
                <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
                  All plans include HIPAA compliance, secure messaging, and 24/7 support.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-amber-600/20 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition bg-[#D4AF37] hover:bg-[#C5A028]">
                    View Pricing
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white hover:bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 px-6 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 transition">
                    Schedule Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                Common questions about our services
              </h2>
            </div>

            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <button
                  onClick={() => toggleFaq(0)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-slate-900">How quickly do you answer calls?</span>
                  <ChevronDown className={`w-5 h-5 text-slate-600 transition-transform ${openFaq === 0 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 0 && (
                  <div className="px-5 pb-5 text-slate-600">
                    Our average answer time is under 10 seconds, 24/7.
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <button
                  onClick={() => toggleFaq(1)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-slate-900">Can you integrate with our scheduling system?</span>
                  <ChevronDown className={`w-5 h-5 text-slate-600 transition-transform ${openFaq === 1 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 1 && (
                  <div className="px-5 pb-5 text-slate-600">
                    Yes! We integrate with most major EMR and scheduling platforms.
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <button
                  onClick={() => toggleFaq(2)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-slate-900">What if we need bilingual support?</span>
                  <ChevronDown className={`w-5 h-5 text-slate-600 transition-transform ${openFaq === 2 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 2 && (
                  <div className="px-5 pb-5 text-slate-600">
                    We offer Spanish and other languages based on your patient population.
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <button
                  onClick={() => toggleFaq(3)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-slate-900">How are urgent calls handled?</span>
                  <ChevronDown className={`w-5 h-5 text-slate-600 transition-transform ${openFaq === 3 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 3 && (
                  <div className="px-5 pb-5 text-slate-600">
                    Urgent calls are escalated to your on-call provider within 60 seconds.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[28px] border border-amber-100 bg-gradient-to-br from-amber-50/50 to-white p-12 md:p-20 text-center">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
                Ready to transform your patient communications?
              </h2>
              <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Let's discuss how we can customize our services for your practice.
              </p>
              <div className="mt-10">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-slate-900 shadow-lg ring-1 ring-inset ring-amber-600/20 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition bg-[#D4AF37] hover:bg-[#C5A028]">
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5" />
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

