import { HeroBanner } from "../components/hero-banner"
import { PageSection } from "../components/page-section"
import { FeaturedSection } from "../components/featured-section"

export default function Page() {
  return (
    <>
      <HeroBanner
        title="Descubre Nuestros Servicios de Logística Integral"
        description="Explora cómo podemos simplificar tus operaciones de transporte."
        backgroundImage="/placeholder.jpg"
        ctas={[
          { text: "Cotiza hoy mismo", href: "/contacto" },
        ]}
      />
      <PageSection
        id="logistica-integral"
        sectionTitle="Nuestros servicios"
        title="Logística Integral de Transporte Marítimo, Aéreo y Terrestre"
        description="Servicios integrales de planificación y gestión de la cadena de suministro, optimizando rutas y tiempos de entrega."
        listItems={[
          "Rapidez y Eficiencia",
          "Garantía de protección",
          "Costos optimizados",
          "Cumplimiento normativo",
        ]}
        image="/truck-1.jpg"
        ctas={[
          { text: "Cotiza hoy mismo", href: "/contacto" },
        ]}
      />
      <PageSection
        id="transporte-nacional"
        title="Transporte Nacional de Carga"
        description="Servicios de transporte de mercancías dentro del país, con rutas optimizadas para asegurar entregas rápidas y seguras."
        listItems={[
          "Rapidez y Eficiencia",
          "Garantía de protección",
          "Costos optimizados",
          "Cumplimiento normativo",
        ]}
        image="/truck-2.jpg"
        ctas={[
          { text: "Cotiza hoy mismo", href: "/contacto" },
        ]}
        orientation="right"
        backgroundColorClass="bg-sipsa-blue-foreground"
      />
      <PageSection
        id="transporte-internacional"
        title="Transporte Internacional de Carga"
        description="Transporte de mercancías entre diferentes países, cumpliendo con todas las normativas aduaneras y garantizando la seguridad de los bienes durante el tránsito."
        listItems={[
          "Rapidez y Eficiencia",
          "Garantía de protección",
          "Costos optimizados",
          "Cumplimiento normativo",
        ]}
        image="/truck-3.jpg"
        ctas={[
          { text: "Cotiza hoy mismo", href: "/contacto" },
        ]}
      />
      <FeaturedSection />
    </>
  )
}
