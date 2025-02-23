import Image from "next/image"
import Button from "./button"

interface CTA {
  text: string
  href: string
}

interface HeroBannerProps {
  title: string
  description?: string
  backgroundImage: string
  ctas?: CTA[]
}

// TODO: define the placeholder.svg file

export function HeroBanner({ title, description, backgroundImage, ctas }: HeroBannerProps) {
  return (
    <div className="relative py-20 md:py-28 w-full overflow-hidden">
      <Image src={backgroundImage || "/placeholder.svg"} alt="Background" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-r from-sipsa-blue from-30% to-transparent">
      </div>
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <h1 className="mb-4 md:mb-8 text-4xl font-bold text-white md:text-5xl lg:text-6xl">{title}</h1>
            {description && (
              <p className="mb-8 md:mb-12 text-lg text-gray-200 md:text-2xl">{description}</p>
            )}
            {ctas && ctas.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {ctas.map((cta, index) => (
                  <Button key={index} text={cta.text} href={cta.href} style={index > 2 ? "primary" : "secondary"} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

