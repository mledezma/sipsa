import Image from "next/image"
import Button from "./button"
import { HandshakeIcon, MapPin, Tag } from "lucide-react"

export function FeaturedSection() {
  const infoCards = [
    {
      title: "Servicio Personalizado",
      icon: HandshakeIcon,
      iconSizeClass: "w-20 h-16",
      description:
        "Nos adaptamos a las necesidades particulares de cada cliente, ofreciendo un trato directo y soluciones a medida.",
    },
    {
      title: "Precios competitivos",
      icon: Tag,
      iconSizeClass: "w-16 h-16",
      description:
        "Ofrecemos tarifas que combinan calidad y costo-beneficio, permitiendo a nuestros clientes obtener el mejor valor en el mercado.",
    },
    {
      title: "Cobertura nacional e internacional",
      icon: MapPin,
      iconSizeClass: "w-16 h-16",
      description:
        "Contamos con una red extensa que nos permite cubrir rutas tanto a nivel local como internacional, asegurando conectividad y opciones flexibles para nuestros clientes.",
    },
  ]

  return (
    <section className="text-sipsa-blue bg-sipsa-blue-foreground" id="conozcanos">
      <div className="container mx-auto py-12 md:py-28 px-4">
        <div className="flex flex-col md:flex-row mb-12 md:mb-28">
          <div className="flex-1 text-left py-6">
            <div className="max-w-[540px]">
              <h2 className="text-2xl md:text-4xl font-semibold mb-1">Somos SIPSA</h2>
              <h3 className="mb-8 text-xl md:text-3xl font-semibold">SOLUCIONES INTEGRALES PRIME S.A.</h3>
              <p className="text-lg mb-4">Somos una empresa de transportes locales e internacionales que se enorgullece de su compromiso y experiencia trabajando con grandes empresas como lo son Gualapack, Molinos de Guadalupe, Laboratorios Griffith, en el área de alimentos.</p>
              <p className="text-lg mb-4">Contamos con diversos camiones, lo que nos permite ofrecer soluciones de transporte flexibles y confiables, ofreciéndole nuestro servicio desde los almacenes fiscales o para realizar alguna entrega o recolección a nivel local.</p>
              <p className="text-lg mb-4">Nuestra trayectoria con clientes de renombre respalda nuestra dedicación a la excelencia en el servicio. Nos encantaría platicar de cómo podemos satisfacer las necesidades de transporte de la empresa y contribuir al éxito de sus operaciones.</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative w-full h-full min-h-72">
              <Image src="/truck-4.jpg" alt="SOLUCIONES INTEGRALES PRIME S.A." fill className="rounded-md object-cover"/>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="space-y-8 mb-8 md:mb-14">
          <h2 className="text-2xl font-bold text-center text-sipsa-blue">Lo que nos caracteriza</h2>
          <div className="grid md:grid-cols-3 gap-8">
            { infoCards.map((card, index) => (
              <div key={index} className="bg-white py-14 px-10 rounded-xl shadow-sm space-y-6 text-center">
                <card.icon className={`${card.iconSizeClass} text-sipsa-orange mx-auto`} />
                <h3 className="font-semibold text-sipsa-blue text-2xl">{card.title}</h3>
                <p className="text-sipsa-blue text-lg">{card.description}</p>
              </div>
            )) }
          </div>
        </section>

        <div className="text-center">
          <Button text="Solicita tu cotización" href="/contacto" />
        </div>
      </div>
    </section>
  )
}
