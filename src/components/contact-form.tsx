'use client';

import dynamic from "next/dynamic";
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input'
import { useReCaptcha } from "next-recaptcha-v3";
import 'react-phone-number-input/style.css'
import Button from './button';
import { cn } from '../lib/utils';
import { FormData } from '../lib/types';
const Select = dynamic(() => import("react-select"), { ssr: false });

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullname: '',
    email: '',
    serviceType: 'internationalTransport',
    zipCode: '',
    phoneNumber: '',
    additionalInfo: '',
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  // Import 'executeRecaptcha' using 'useReCaptcha' hook
  const { executeRecaptcha } = useReCaptcha();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value?: string) => {
    setFormData({ ...formData, phoneNumber: value || '' });
  };

  const handleSelectChange = (selectedOption: any) => {
    setFormData({ ...formData, serviceType: selectedOption.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Generate ReCaptcha token
    const token = await executeRecaptcha("form_submit");
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: formData,
          token: token,
        }),
      });

      const data = await res.json();
      if (data.error) {
        setResponse('Algo salió mal. Por favor inténtelo de nuevo más tarde.');
        setSuccess(false);
        setError(true);
      } else {
        setResponse(data.message);
        setError(false);
        setSuccess(true);
        setFormData({
          fullname: '',
          email: '',
          serviceType: 'internationalTransport',
          zipCode: '',
          phoneNumber: '',
          additionalInfo: '',
        });
      }
    } catch (error) {
      setResponse('Algo salió mal. Por favor inténtelo de nuevo más tarde.');
      setError(true);
    }

    setLoading(false);
  };

  const fieldsetClasses = 'flex flex-col gap-y-2';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      <fieldset className={fieldsetClasses}>
        <label htmlFor="fullname">Nombre completo*</label>
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          required
        />
      </fieldset>
      <fieldset className={fieldsetClasses}>
        <label htmlFor="email">Correo electrónico*</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </fieldset>
      <fieldset className={fieldsetClasses}>
        <label htmlFor="serviceType">Tipo de servicio*</label>
        <Select
          id="serviceType"
          name="serviceType"
          value={{ value: formData.serviceType, label: formData.serviceType === 'internationalTransport' ? 'Transporte internacional' : 'Transporte local' }}
          onChange={handleSelectChange}
          options={[
            { value: 'internationalTransport', label: 'Transporte internacional' },
            { value: 'localTransport', label: 'Transporte local' }
          ]}
          styles={{
            control: (styles, { isFocused }) => ({
              ...styles,
              borderColor: isFocused ? 'hsl(var(--sipsa-blue))' : 'hsl(var(--sipsa-gray))',
              borderRadius: 'calc(var(--radius) - 2px)',
              color: 'hsl(var(--sipsa-blue))',
              transition: 'all',
              transitionDuration: '300ms',
              padding: '0.25rem 0.5rem',
            }),
            option: (styles, { isFocused }) => ({
              ...styles,
              backgroundColor: isFocused ? 'hsl(var(--sipsa-blue))' : 'white',
              color: isFocused ? 'white' : 'hsl(var(--sipsa-blue))',
              transition: 'all',
              transitionDuration: '300ms',
            }),
          }}
          required
        />
      </fieldset>
      <div className="flex gap-x-8">
        <fieldset className={fieldsetClasses}>
          <label htmlFor="zipCode">Código postal*</label>
          <input
            id="zipCode"
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
            className="max-w-20"
          />
        </fieldset>
        <fieldset className={cn(fieldsetClasses,
          'flex-1')}>
          <label htmlFor="phoneNumber">Número de teléfono</label>
          <PhoneInput
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handlePhoneChange}
          />
        </fieldset>
      </div>
      <fieldset className={fieldsetClasses}>
        <label htmlFor="additionalInfo">Información adicional</label>
        <textarea name="additionalInfo" id="additionalInfo" onChange={handleChange} value={formData.additionalInfo} rows={5} className="resize-none">
        </textarea>
      </fieldset>

      <Button type="submit" disabled={loading} text={loading ? 'Solicitando...' : 'Solicitar más información'} />
      {(response && success) && <p className="text-center text-green-600 text-xl mt-4 font-semibold">Muchas gracias por tu mensaje, pronto estaremos en contacto.</p>}
      {(response && error) && <p className="text-center text-red-600 text-xl mt-4 font-semibold">{response}</p>}
    </form>
  );
}
