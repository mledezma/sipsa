'use client';

import { useState } from 'react';

interface FormData {
  fullname: string;
  email: string;
  serviceType: string;
  zipCode: string;
  phoneNumber: string;
  additionalInfo: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullname: '',
    email: '',
    serviceType: '',
    zipCode: '',
    phoneNumber: '',
    additionalInfo: '',
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      setResponse('Something went wrong. Please try again.');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Nombre completo</label>
      <input
        id="fullname"
        type="text"
        name="fullname"
        value={formData.fullname}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="p-2 border rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="p-2 border rounded"
      />
      <button type="submit" disabled={loading} className="p-2 bg-blue-500 text-white rounded">
        {loading ? 'Sending...' : 'Send Message'}
      </button>
      {response && <p className="text-center">{response}</p>}
    </form>
  );
}
