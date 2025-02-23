import Image from "next/image"
import { Mail, Phone, Rocket } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-sipsa-blue text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/logo-big.svg"
              alt="SIPSA CR Logo"
              width={189}
              height={189}
            />
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Contáctenos</h2>
            <p className="text-gray-300">Lunes a Viernes, 08:00 a.m - 05:00 p.m.</p>

            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="h-5 w-5" />
                <a href="tel:+50640811829" className="hover:text-gray-300">
                  +506 4081-1829
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="h-5 w-5" />
                <a href="tel:+50688937631" className="hover:text-gray-300">
                  +506 8893-7631
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:operaciones@sipsacr.com" className="hover:text-gray-300">
                  operaciones@sipsacr.com
                </a>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="flex justify-center items-center gap-x-4">
            <Rocket/>
            <h2 className="text-xl font-medium">¡Queremos contribuir al éxito de tus operaciones!</h2>
          </div>
        </div>
      </div>
    </footer>
  )
}