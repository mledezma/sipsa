import * as React from 'react';
import { FormData } from '../lib/types';
import {
  Body,
  Container,
  Head,
  Column,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Hr,
} from '@react-email/components';

// TODO: For some reason process.env.VERCEL_URL is not working
// const baseUrl = process.env.VERCEL_URL
//   ? `https://sipsacr.com`
//   : '';
const baseUrl = 'https://sipsacr.com';

export const EmailTemplate: React.FC<Readonly<FormData>> = ({
  fullname,
  email,
  serviceType,
  zipCode,
  phoneNumber,
  additionalInfo,
}) => (
  <Html>
    <Head />
    <Body>
      <Preview>
        Has recibido un nuevo contacto desde sitio web SipsaCR.
      </Preview>
      <Container>
        <Section>
          <Img
            src={`${baseUrl}/logo.svg`}
            width="200"
            height="200"
            alt="SipsaCR"
            style={{ margin: 'auto' }}
          />
        </Section>
        <Hr style={{ borderColor: '#0A163D', marginTop: '32px' }} />
        <Section>
          <Row>
            <Column>
              <Text style={{ fontWeight: 700, color: '#0A163D', fontSize: '16px' }}>Nombre Completo:</Text>
              <Text>{fullname}</Text>
            </Column>
          </Row>
          <Row>
            <Column>
              <Text style={{ fontWeight: 700, color: '#0A163D', fontSize: '16px' }}>Correo electrónico:</Text>
              <Text>{email}</Text>
            </Column>
          </Row>
          <Row>
            <Column>
              <Text style={{ fontWeight: 700, color: '#0A163D', fontSize: '16px' }}>Tipo de servicio:</Text>
              <Text>{serviceType === 'internationalTransport' ? 'Transporte internacional' : 'Transporte local'}</Text>
            </Column>
          </Row>
          <Row>
            <Column>
              <Text style={{ fontWeight: 700, color: '#0A163D', fontSize: '16px' }}>Código postal:</Text>
              <Text>{zipCode}</Text>
            </Column>
          </Row>
          <Row>
            <Column>
              <Text style={{ fontWeight: 700, color: '#0A163D', fontSize: '16px' }}>Número de teléfono:</Text>
              <Text>{phoneNumber}</Text>
            </Column>
          </Row>
          <Row>
            <Column>
              <Text style={{ fontWeight: 700, color: '#0A163D', fontSize: '16px' }}>Información adicional:</Text>
              <Text>{additionalInfo}</Text>
            </Column>
          </Row>
          <Row style={{ marginTop: '32px' }}>
            <Column>
              <Link href="https://sipsacr.com" style={{ color: '#0A163D', fontStyle: 'italic', fontSize: '16px' }}>
                Visita nuestro sitio web
              </Link>
            </Column>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
);