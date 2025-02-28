"use client"

import Link from "next/link"
import { cn } from "../lib/utils"

interface ButtonProps {
  text: string
  onClick?: () => void
  href?: string
  external?: boolean
  style?: "primary" | "secondary",
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export default function Button({ text, onClick, href, external = false, style = "primary", type, disabled }: ButtonProps) {
  const commonClasses = cn(
    "relative overflow-hidden px-6 py-3 rounded-full text-semibold text-xl transition-all duration-300 ease-in-out group inline-block",
    style === "primary" && "bg-sipsa-blue text-white",
    style === "secondary" && "bg-white text-sipsa-blue",
  )

  const innerContent = (
    <>
      <span className="relative z-10">{text}</span>
      <div
        className="absolute inset-0 transition-transform duration-300 ease-in-out bg-sipsa-orange translate-y-full group-hover:translate-y-0"
      />
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "radial-gradient(circle, transparent 20%, #0A163D 20%, #0A163D 80%, transparent 80%, transparent) 0% 0% / 5px 5px",
          opacity: 0.1,
        }}
      />
    </>
  )

  if (href) {
    const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {}
    return (
      <Link
        href={href}
        className={commonClasses}
        {...linkProps}
      >
        {innerContent}
      </Link>
    )
  }

  return (
    <button
      className={commonClasses}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {innerContent}
    </button>
  )
}

