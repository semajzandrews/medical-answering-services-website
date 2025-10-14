"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Phone, Menu, X, ArrowRight, Heart, Shield, Users, Badge, Lock, FileCheck, Building, CheckCircle, Clock, Linkedin } from "lucide-react"

export default function AboutPage() {
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
      {/* Header - Same as home page */}
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
                <a href="/about" className="px-3 py-2 rounded-xl text-sm font-medium text-slate-900 bg-[#D4AF37] hover:bg-[#C5A028] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 transition">About</a>
                <a href="/services" className="px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 transition">Services</a>
                <a href="/contact" className="px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 transition">Contact</a>
              </nav>

              <div className="flex items-center gap-2">
                <a href="/contact" className="hidden md:inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-amber-600/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition bg-[#D4AF37] hover:bg-[#C5A028]">
                  Get Started
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
                <a href="/" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-slate-800 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300">Home</a>
                <a href="/about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-slate-900 bg-[#D4AF37]">About</a>
                <a href="/services" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-slate-800 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300">Services</a>
                <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-slate-800 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300">Contact</a>
              </nav>
              <div className="p-4 border-t border-slate-200">
                <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-amber-600/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition bg-[#D4AF37] hover:bg-[#C5A028]">
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
            <section className="relative">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                  {/* Text */}
                  <div className="order-2 lg:order-1">
                    <div className="mb-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">About Us</p>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
                      Healthcare communications built with{" "}
                      <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#F5C842]">
                        care
                      </span>
                    </h1>
                    <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed">
                      Founded by healthcare professionals who understand the critical importance of every patient call.
                    </p>
                  </div>

                  {/* Leadership Photos */}
                  <div className="order-1 lg:order-2">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Caramel Skin Executive */}
                      <div className="relative">
                        <img 
                          src="/about-caramel-woman.jpg" 
                          alt="Dr. Jasmine Williams - Founder & CEO" 
                          className="w-full rounded-[20px] border border-slate-200 shadow-lg object-cover aspect-[3/4]"
                        />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="rounded-xl border border-slate-200 bg-white/95 backdrop-blur px-3 py-2 shadow-sm text-center">
                            <div className="text-sm font-semibold text-slate-900">Dr. Jasmine Williams</div>
                            <div className="text-xs text-slate-600">Founder & CEO</div>
                          </div>
                        </div>
                      </div>

                      {/* Darker Skin Executive */}
                      <div className="relative mt-8">
                        <img 
                          src="/about-darker-woman.jpg" 
                          alt="Dr. Naomi Johnson - Chief Operating Officer" 
                          className="w-full rounded-[20px] border border-slate-200 shadow-lg object-cover aspect-[3/4]"
                        />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="rounded-xl border border-slate-200 bg-white/95 backdrop-blur px-3 py-2 shadow-sm text-center">
                            <div className="text-sm font-semibold text-slate-900">Dr. Naomi Johnson</div>
                            <div className="text-xs text-slate-600">Chief Operating Officer</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 text-center">
              Why we started Customer Care First
            </h2>
            
            <div className="mt-10 space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                After years working in healthcare administration, I saw the same problem everywhere: missed calls meant missed patients. Busy practices were losing revenue, patients were frustrated, and staff were overwhelmed.
              </p>
              <p>
                We started Customer Care First to solve this. Not with generic call center scripts, but with healthcare-specific training, HIPAA compliance, and a genuine understanding of what patients and providers need.
              </p>
              <p>
                Today, we serve practices of all sizes—from solo practitioners to multi-location groups—helping them deliver exceptional patient communication without adding to their team's workload.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200 text-center">
              <div className="text-3xl font-serif text-slate-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>Dr. Jasmine Williams</div>
              <div className="text-sm text-slate-600">Founder & CEO</div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-8 md:py-10 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">What drives us</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center">
                <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-xl bg-rose-100">
                  <Heart className="w-7 h-7 text-rose-700" />
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">Patient-First Mindset</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Every call is someone seeking care. We treat each interaction with empathy and urgency.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center">
                <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-xl bg-emerald-100">
                  <Shield className="w-7 h-7 text-emerald-700" />
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">Trust & Compliance</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  HIPAA isn't just a checkbox—it's our foundation. Your patients' privacy is sacred.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center">
                <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-xl bg-sky-100">
                  <Users className="w-7 h-7 text-sky-700" />
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">True Partnership</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  We're an extension of your team, not a vendor. Your success is our success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Meet the Team</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                Led by healthcare and operations experts
              </h2>
              <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
                Our leadership combines clinical expertise, operational excellence, and deep healthcare experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Team Member 1 - Sarah Mitchell */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition group flex flex-col">
                <img 
                  src="/team-sarah-mitchell.jpg" 
                  alt="Sarah Mitchell - Practice Administrator" 
                  className="h-48 w-full rounded-xl object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-slate-900">Sarah Mitchell</h3>
                <div className="text-sm text-slate-600 mb-3">Practice Administrator</div>
                <p className="text-sm text-slate-600 leading-relaxed min-h-[3rem] flex-grow">
                  Former Practice Manager with 10+ years experience in healthcare operations and patient care coordination.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-[#D4AF37] hover:text-[#C5A028]">
                    <Linkedin className="w-4 h-4" />
                    Connect
                  </a>
                </div>
              </div>

              {/* Team Member 2 - Jamal Murray */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition group flex flex-col">
                <img 
                  src="/team-carlos-rodriguez.jpg" 
                  alt="Jamal Murray - Director of Operations" 
                  className="h-48 w-full rounded-xl object-cover mb-4 object-top"
                />
                <h3 className="text-lg font-semibold text-slate-900">Jamal Murray</h3>
                <div className="text-sm text-slate-600 mb-3">Director of Operations</div>
                <p className="text-sm text-slate-600 leading-relaxed min-h-[3rem] flex-grow">
                  Former RN and call center operations leader, passionate about patient experience.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-[#D4AF37] hover:text-[#C5A028]">
                    <Linkedin className="w-4 h-4" />
                    Connect
                  </a>
                </div>
              </div>

              {/* Team Member 3 - Dr. Michelle Chen */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition group flex flex-col">
                <img 
                  src="/team-asian-woman-ceo.jpg" 
                  alt="Dr. Michelle Chen - Founder & CEO" 
                  className="h-48 w-full rounded-xl object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-slate-900">Dr. Michelle Chen</h3>
                <div className="text-sm text-slate-600 mb-3">Founder & CEO</div>
                <p className="text-sm text-slate-600 leading-relaxed min-h-[3rem] flex-grow">
                  15+ years in healthcare administration, former Practice Manager at Regional Medical Center.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-[#D4AF37] hover:text-[#C5A028]">
                    <Linkedin className="w-4 h-4" />
                    Connect
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-8 md:py-10 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Trusted & Compliant</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Badge 1 */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                <Shield className="w-10 h-10 mx-auto text-emerald-700 mb-3" />
                <h3 className="text-lg font-semibold text-emerald-900">HIPAA Compliant</h3>
                <p className="text-sm text-emerald-700 mt-1">Full BAA available</p>
              </div>

              {/* Badge 2 */}
              <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6 text-center">
                <Lock className="w-10 h-10 mx-auto text-violet-700 mb-3" />
                <h3 className="text-lg font-semibold text-violet-900">SOC 2 Type II</h3>
                <p className="text-sm text-violet-700 mt-1">Independently audited</p>
              </div>

              {/* Badge 3 */}
              <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6 text-center">
                <Badge className="w-10 h-10 mx-auto text-sky-700 mb-3" />
                <h3 className="text-lg font-semibold text-sky-900">Licensed Nurses</h3>
                <p className="text-sm text-sky-700 mt-1">RN-led triage team</p>
              </div>

              {/* Badge 4 */}
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
                <FileCheck className="w-10 h-10 mx-auto text-amber-700 mb-3" />
                <h3 className="text-lg font-semibold text-amber-900">HITRUST Aligned</h3>
                <p className="text-sm text-amber-700 mt-1">Enterprise security controls</p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">By the numbers</h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Stat 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <Phone className="w-8 h-8 mx-auto text-[#D4AF37] mb-3" />
                <div className="text-4xl font-semibold tracking-tight text-slate-900">10,000+</div>
                <div className="text-sm text-slate-600 mt-2">Calls handled daily</div>
              </div>

              {/* Stat 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <Building className="w-8 h-8 mx-auto text-[#D4AF37] mb-3" />
                <div className="text-4xl font-semibold tracking-tight text-slate-900">500+</div>
                <div className="text-sm text-slate-600 mt-2">Healthcare providers served</div>
              </div>

              {/* Stat 3 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <CheckCircle className="w-8 h-8 mx-auto text-[#D4AF37] mb-3" />
                <div className="text-4xl font-semibold tracking-tight text-slate-900">98.7%</div>
                <div className="text-sm text-slate-600 mt-2">First-call resolution rate</div>
              </div>

              {/* Stat 4 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <Clock className="w-8 h-8 mx-auto text-[#D4AF37] mb-3" />
                <div className="text-4xl font-semibold tracking-tight text-slate-900">&lt;10s</div>
                <div className="text-sm text-slate-600 mt-2">Average answer time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tagline Feature */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[28px] border border-amber-100 bg-gradient-to-tr from-amber-50/50 to-white p-12 md:p-16 text-center">
              <blockquote className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                "We care, we collaborate, we put you first."
              </blockquote>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Our tagline isn't marketing—it's our operating principle across every call, escalation, and patient interaction.
              </p>
            </div>
          </div>
        </section>

        {/* Careers Preview */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Text & Benefits */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Careers</p>
                <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                  Join our mission
                </h2>
                <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
                  Help us build the most trusted medical answering service in healthcare.
                </p>

                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span>Comprehensive health, dental, and vision</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span>Remote-first, flexible schedules</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span>Professional development stipend</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span>401(k) with company match</span>
                  </div>
                </div>
              </div>

              {/* Right: Job Listings */}
              <div className="space-y-3">
                {/* Job 1 */}
                <div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <div>
                    <h3 className="font-semibold text-slate-900">Registered Nurse (Triage)</h3>
                    <p className="text-sm text-slate-600">Remote (US) · Full-time</p>
                  </div>
                  <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-slate-900 bg-[#D4AF37] hover:bg-[#C5A028] transition">
                    Apply Now
                  </a>
                </div>

                {/* Job 2 */}
                <div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <div>
                    <h3 className="font-semibold text-slate-900">Healthcare Support Specialist</h3>
                    <p className="text-sm text-slate-600">Remote (US) · Full-time</p>
                  </div>
                  <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-slate-900 bg-[#D4AF37] hover:bg-[#C5A028] transition">
                    Apply Now
                  </a>
                </div>

                {/* Job 3 */}
                <div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <div>
                    <h3 className="font-semibold text-slate-900">Operations Manager</h3>
                    <p className="text-sm text-slate-600">Remote (US) · Full-time</p>
                  </div>
                  <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-slate-900 bg-[#D4AF37] hover:bg-[#C5A028] transition">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[28px] border border-amber-100 bg-gradient-to-br from-amber-50/50 to-white p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                Ready to work together?
              </h2>
              <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Let's discuss how Customer Care First can support your practice and your patients.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-amber-600/20 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition bg-[#D4AF37] hover:bg-[#C5A028]">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/#services" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 transition">
                  See Our Services
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

