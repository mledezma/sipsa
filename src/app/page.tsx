import { HeroBanner } from "../components/hero-banner"
import { PageSection } from "../components/page-section"
import { FeaturedSection } from "../components/featured-section"

export default function Page() {
  return (
    <>
      <HeroBanner
        title="Descubre Nuestros Servicios de Logística Integral"
        description="Explora cómo podemos simplificar tus operaciones de transporte."
        backgroundImage="/truck-long.jpg"
        ctas={[
          { text: "Cotiza hoy mismo", href: "/contacto" },
        ]}
      />
      <PageSection
        id="logistica-integral"
        sectionTitle="Nuestros servicios"
        title="Logística Integral de Transporte Marítimo, Aéreo y Terrestre"
        description="Soluciones logísticas integrales para el transporte marítimo, aéreo y terrestre, con conexiones globales, tecnología de seguimiento en tiempo real y gestión aduanera simplificada. Optimizamos rutas y tiempos de entrega para garantizar envíos seguros y puntuales en todo el mundo."
        listItems={[
          "Conexiones Globales",
          "Tramites Aduaneros Simplificados",
          "Alianzas Estratégicas",
          "Alianzas Estratégicas",
        ]}
        image="/truck-1.jpg"
        ctas={[
          { text: "Cotiza hoy mismo", href: "/contacto" },
        ]}
      />
      <PageSection
        id="transporte-nacional"
        title="Transporte Nacional de Carga"
        description="Transporte de carga dentro del país con rutas estratégicamente optimizadas para garantizar entregas rápidas, seguras y al mejor costo. Cumplimos con todas las normativas vigentes para ofrecer un servicio eficiente y confiable"
        listItems={[
          "Rapidez y Eficiencia",
          "Garantía de Entregas a Tiempo",
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
        description="Soluciones eficientes para el transporte internacional de carga, asegurando el cumplimiento de normativas aduaneras y la protección de la mercancía en todo su recorrido. Optimizamos costos y tiempos para ofrecer un servicio seguro y confiable en cada envío."
        listItems={[
          "Envíos Ágiles y Eficientes",
          "Máxima Seguridad y Protección",
          "Optimización de Costos Logísticos",
          "Cumplimiento Aduanero Garantizado",
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
