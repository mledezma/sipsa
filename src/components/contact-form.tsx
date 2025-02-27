import type React from "react"
import Form from 'next/form'

export default function ContactForm() {
  const sendMail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const response = await fetch('/api/send', {
      method: 'POST',
      body: formData,
    })
    if (response.ok) {
      alert('Email sent')
    }
  }

  return (
    <Form action="#" onSubmit={sendMail}>
      <button type="submit">Submit</button>
    </Form>
  )
}

