import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from "@react-email/components"

interface ContactEmailProps {
  name: string
  email: string
  message: string
}

export default function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New portfolio message from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Contact Form Submission</Heading>
          <Section style={section}>
            <Text style={label}>From</Text>
            <Text style={value}>
              {name} ({email})
            </Text>
          </Section>
          <Hr style={hr} />
          <Section style={section}>
            <Text style={label}>Message</Text>
            <Text style={{ ...value, whiteSpace: "pre-wrap" }}>{message}</Text>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>Sent from your portfolio's contact form.</Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#0f1117",
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  padding: "40px 0",
}

const container = {
  backgroundColor: "#181b23",
  borderRadius: "12px",
  padding: "32px",
  maxWidth: "560px",
  margin: "0 auto",
}

const heading = {
  color: "#f5f7fa",
  fontSize: "20px",
  fontWeight: 700,
  marginBottom: "24px",
}

const section = {
  marginBottom: "8px",
}

const label = {
  color: "#4fd1a5",
  fontSize: "12px",
  fontWeight: 600,
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
  marginBottom: "4px",
}

const value = {
  color: "#e4e7eb",
  fontSize: "15px",
  lineHeight: "1.6",
}

const hr = {
  borderColor: "#2a2e38",
  margin: "16px 0",
}

const footer = {
  color: "#8b8f99",
  fontSize: "12px",
  marginTop: "16px",
}
