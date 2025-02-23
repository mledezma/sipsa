import Image from "next/image"
import Button from "./button"
import { CTA } from "../lib/types"
import { TitleWithUnderline } from "./title-with-underline"
import { Check } from "lucide-react"

interface PageSectionProps {
  id?: string
  sectionTitle?: string
  title: string
  description: string
  listItems: string[]
  image: string
  ctas?: CTA[]
  orientation?: "left" | "right"
  backgroundColorClass?: string
}

export function PageSection({ id, sectionTitle, title, description, listItems, image, ctas, orientation = "left", backgroundColorClass = "bg-white" }: PageSectionProps) {
  return (
    <section className={`text-center text-sipsa-blue ${backgroundColorClass}`} id={id}>
      <div className="container mx-auto py-12 md:py-28 px-4">
        {sectionTitle && <TitleWithUnderline>{sectionTitle}</TitleWithUnderline>}
        <div className={`${orientation === "left" ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"} flex gap-y-6 gap-x-6 md:gap-x-12`}>
          <div className="flex-1 text-left py-6">
            <div className="max-w-[540px]">
              <h2 className="text-2xl md:text-4xl font-semibold mb-1">{title}</h2>
              <p className="mb-8 text-lg md:text-xl">{description}</p>
              <ul className="mb-4 md:mb-8 grid gap-x-4 grid-cols-2">
                {listItems.map((item, index) => (
                  <li className="p-3 flex items-center gap-x-2 font-medium text-base" key={index}>
                    <span className="rounded-full bg-sipsa-orange p-0.5">
                      <Check size={24} color="#fff"/>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div>
                {ctas && ctas.map((cta, index) => (
                  <Button key={index} text={cta.text} href={cta.href} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative w-full h-full min-h-72">
              <Image src={image} alt={title} fill className="rounded-md object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
