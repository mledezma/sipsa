"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"
import Button from "./button"
import { cn } from "../lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const scrollToSection = (sectionId: string) => {
    if (pathname === "/") {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
        setIsMobileMenuOpen(false)
      }
    } else {
      // If not on home page, navigate to home and then scroll
      window.location.href = `/#${sectionId}`
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const headerLinks = [
    { id: "logistica-integral", name: "Logística Integral" },
    { id: "transporte-nacional", name: "Transporte Nacional" },
    { id: "transporte-internacional", name: "Transporte Internacional" },
    { id: "conozcanos", name: "Conózcanos" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white"}`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
        <Link href="/">
          <div className="flex items-center">
            <Image
              alt="SIPSA CR Logo"
              height={102}
              width={102}
              src="/logo.svg"
              className="h-[102px] w-[102px] mr-4"
            />

            <span className="text-4xl font-bold text-sipsa-blue">SIPSA CR</span>
          </div>
        </Link>
        <nav className="hidden xl:flex items-center gap-x-6">
          {headerLinks.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-sipsa-blue hover:text-sipsa-dark-orange text-xl transition-all duration-300"
            >
              {section.name}
            </button>
          ))}
          <Button
            href="/contacto"
            text="Contacto"
          />
        </nav>
        <button className={
          cn(
            "xl:hidden text-gray-600 hover:text-gray-900",
            isMobileMenuOpen && "absolute right-4 z-50"
          )
        } onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <X className="h-10 w-10" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        {/* Mobile Menu */}
        <div
          className={`xl:hidden fixed inset-0 z-40 bg-white transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col h-full justify-center items-center gap-y-12 p-4">
            <img src="/logo.svg?height=102&width=102" alt="SIPSA CR Logo" className="h-[102px] w-[102px] mr-4 text-center" />
            {headerLinks.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="text-sipsa-blue hover:text-sipsa-dark-orange text-xl transition-all duration-300"
              >
                {section.name}
              </button>
            ))}
            <Button
              href="/contacto"
              text="Contacto"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

