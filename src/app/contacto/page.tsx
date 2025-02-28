import { HeroBanner } from "../../components/hero-banner"
import ContactForm from "../../components/contact-form"

export default function Contacto() {
  return (
    <>
      <HeroBanner
        title="Cotiza nuestros servicios"
        backgroundImage="/truck-contact.jpg"
      />
      <div className="container mx-auto py-12 md:py-28 px-4">
        <p className="text-sipsa-blue text-2xl mb-8">Cuéntanos los detalles del servicio que necesitas y te estaremos enviando la cotización a la mayor brevedad.</p>
        <ContactForm />
      </div>
    </>
  )
}
