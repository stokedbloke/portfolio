import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" })

export const metadata: Metadata = {
  title: "Neil Sethi - Digital Health Product Visionary",
  description: "Product portfolio showcasing Neil Sethi's work in digital health from 2014-2024",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <body className={`${inter.variable} ${manrope.variable} font-sans bg-gray-950 text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'