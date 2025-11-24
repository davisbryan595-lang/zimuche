import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Satisfy as Satoshi } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
})

const satoshi = Satoshi({
  subsets: ["latin"],
  variable: "--font-satoshi",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Zimuche Health Harmony | Mental Health Counseling El Paso",
  description:
    "Mental health counseling and medication management with Mariagorety Nwiloh, DNP in El Paso, Texas. Compassionate psychiatric care.",
  generator: "v0.app",
  keywords: "psychiatrist, mental health, counseling, medication management, El Paso, DNP",
  openGraph: {
    title: "Zimuche Health Harmony",
    description: "Where Your Mind Finds Its Peace",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${satoshi.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-satoshi antialiased bg-lavender-50 text-slate-700">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
