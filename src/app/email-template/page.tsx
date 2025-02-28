import { HeroBanner } from "../../components/hero-banner"
import { EmailTemplate } from "../../components/email-template"

export default function EmailTemplatePage() {
  return (
    <>
      <HeroBanner
        title="Email template test"
        backgroundImage="/truck-contact.jpg"
      />
      <div className="container mx-auto py-12 md:py-28 px-4">
         <EmailTemplate firstName="Test" />
      </div>
    </>
  )
}
