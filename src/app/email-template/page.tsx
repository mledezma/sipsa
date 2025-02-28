import { EmailTemplate } from "../../components/email-template"

export default function EmailTemplatePage() {
  return (
    <>
      <div className="container mx-auto py-12 md:py-28 px-4">
         <EmailTemplate
          fullname="Test"
          email="test@test.com"
          serviceType="internationalTransport"
          zipCode="000"
          phoneNumber="000-000"
          additionalInfo="This is a test message."
        />
      </div>
    </>
  )
}
