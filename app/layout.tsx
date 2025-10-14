import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Customer Care First - 24/7 Medical Answering & Triage Services",
  description:
    "We care, we collaborate, we put you first. Professional HIPAA-compliant medical answering service for healthcare providers. Never miss a patient call with our 24/7 nurse triage and EHR integration.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} style={{ scrollBehavior: "smooth" }}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
