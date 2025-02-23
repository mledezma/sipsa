"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.svg?height=102&width=102" alt="SIPSA CR Logo" className="h-[102px] w-[102px] mr-4" />
          <span className="text-4xl font-bold text-sipsa-blue">SIPSA CR</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection("logistica-integral")} className="text-gray-600 hover:text-gray-900">
            Logística Integral
          </button>
          <button
            onClick={() => scrollToSection("transporte-internacional")}
            className="text-gray-600 hover:text-gray-900"
          >
            Transporte Internacional
          </button>
          <button onClick={() => scrollToSection("transporte-nacional")} className="text-gray-600 hover:text-gray-900">
            Transporte Nacional
          </button>
          <button onClick={() => scrollToSection("conozcanos")} className="text-gray-600 hover:text-gray-900">
            Conózcanos
          </button>
          <Link
            href="/contacto"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Contacto
          </Link>
        </nav>
        <button className="md:hidden text-gray-600 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}

