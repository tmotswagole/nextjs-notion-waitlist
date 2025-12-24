import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface JurificaEmailProps {
  userFirstname: string;
}

export const JurificaWaitlistEmail = ({ userFirstname }: JurificaEmailProps) => {
  const firstName = userFirstname.split(' ')[0];
  
  return (
    <Html>
      <Head />
      <Preview>Welcome to Jurifica's Private Beta, {firstName}! 🚀</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`/logo.svg`}
            width="220"
            height="100"
            alt="Jurifica Logo"
            style={logo}
          />
          <Text style={greeting}>Hi {firstName},</Text>
        <Text style={paragraph}>
          Welcome to Jurifica's exclusive private beta waitlist! I'm Thabiso, 
          co-founder and CEO of Jurifica. Thank you for joining us on this journey 
          to revolutionize global legal compliance.
        </Text>
        <Text style={paragraph}>
          You're now part of an exclusive group getting early access to the AI 
          co-pilot that will transform how your business scales internationally. 
          No more $10,000 legal bottlenecks, no more template roulette, and no 
          more admin nightmares.
        </Text>
        <Text style={paragraph}>
          As a private beta member, you'll get:
        </Text>
        <Text style={bulletPoint}>• Founder pricing (significant savings)</Text>
        <Text style={bulletPoint}>• Direct access to our founding team</Text>
        <Text style={bulletPoint}>• Priority support and feature requests</Text>
        <Text style={bulletPoint}>• First look at our AI-native legal compliance platform</Text>
        <Text style={paragraph}>
          We'll keep you updated on our progress and notify you the moment your 
          beta access is ready. Have questions or want to share your legal compliance 
          challenges? Reply directly to{" "}
          <a href="mailto:hello@jurifica.com" style={link}>
            hello@jurifica.com
          </a>
          {" "}— we read every email.
        </Text>
        <Text style={paragraph}>
          Connect with us on LinkedIn for updates and insights:{" "}
          <a href="https://linkedin.com/company/jurifica" style={link}>
            Jurifica on LinkedIn
          </a>
        </Text>
        <Text style={signOff}>
          Looking forward to building the future of legal compliance together,
          <br />
          <br />
          Thabiso Motswagole
          <br />
          Co-Founder & CEO, Jurifica
          <br />
          Forbes 30 Under 30 | Techstars
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          You received this email because you joined Jurifica's private beta waitlist.
          © 2025 Jurifica Global, Inc. All rights reserved.
        </Text>
      </Container>
    </Body>
  </Html>
  );
};

JurificaWaitlistEmail.PreviewProps = {
  userFirstname: "Tyler",
} as JurificaEmailProps;

export default JurificaWaitlistEmail;

const main = {
  background: "linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)",
  fontFamily: 'figtree, "Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: "40px 0",
  color: "#cccccc",
};

const container = {
  margin: "0 auto",
  padding: "24px 32px 48px",
  backgroundColor: "#1a1a1a",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
};

const logo = {
  margin: "0 auto",
  paddingBottom: "20px",
};

const greeting = {
  fontSize: "18px",
  lineHeight: "28px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "20px",
};

const link = {
  color: "#F7FF9B",
  textDecoration: "underline",
};

const signOff = {
  fontSize: "16px",
  lineHeight: "26px",
  marginTop: "20px",
};

const bulletPoint = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "8px",
  marginLeft: "20px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8c8c8c",
  fontSize: "12px",
};
