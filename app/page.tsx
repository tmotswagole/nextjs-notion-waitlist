"use client";

import { toast } from "sonner";
import { useState } from "react";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import SolutionSection from "@/components/solution-section";
import TeamSection from "@/components/team-section";
import VisionSection from "@/components/vision-section";
import Form from "@/components/form";
import Logos from "@/components/logos";
import Particles from "@/components/ui/particles";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!name || !email) {
      toast.error("Please fill in all fields 😠");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address 😠");
      return;
    }

    setLoading(true);

    const promise = new Promise(async (resolve, reject) => {
      try {
        // First, attempt to send the email
        const mailResponse = await fetch("/api/mail", {
          cache: "no-store",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstname: name, email }),
        });

        if (!mailResponse.ok) {
          if (mailResponse.status === 429) {
            reject("Rate limited");
          } else {
            reject("Email sending failed");
          }
          return; // Exit the promise early if mail sending fails
        }

        // If email sending is successful, proceed to insert into Notion
        const notionResponse = await fetch("/api/notion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        });

        if (!notionResponse.ok) {
          if (notionResponse.status === 429) {
            reject("Rate limited");
          } else {
            reject("Notion insertion failed");
          }
        } else {
          resolve({ name });
        }
      } catch (error) {
        reject(error);
      }
    });

    toast.promise(promise, {
      loading: "Getting you on the waitlist... 🚀",
      success: (data) => {
        setName("");
        setEmail("");
        return "Thank you for joining the waitlist 🎉";
      },
      error: (error) => {
        if (error === "Rate limited") {
          return "You're doing that too much. Please try again later";
        } else if (error === "Email sending failed") {
          return "Failed to send email. Please try again 😢.";
        } else if (error === "Notion insertion failed") {
          return "Failed to save your details. Please try again 😢.";
        }
        return "An error occurred. Please try again 😢.";
      },
    });

    promise.finally(() => {
      setLoading(false);
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-clip pt-12 md:pt-24">
      <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <Header />

        <HeroSection
          headline="Stop Guessing. Start Scaling. The AI Co-Pilot for Global Legal Compliance"
          subheadline="Transform your startup's legal compliance from a $10,000 bottleneck into your competitive advantage. Join 500+ founders building the borderless future."
          ctaText="Join the Private Beta Waitlist"
          ctaSubtext="Limited spots available • Exclusive founder pricing"
          trustSignals={["Techstars", "Forbes 30 Under 30", "Nvidia Inception"]}
        />

        <Form
          name={name}
          email={email}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handleSubmit={handleSubmit}
          loading={loading}
        />

        <Logos />
      </section>

      {/* Problem Section */}
      <ProblemSection
        sectionHeader="The Legal Compliance Crisis Killing Startups"
        columns={[
          {
            icon: "💸",
            headline: "The $10,000 Bottleneck",
            description: "Law firms charge premium rates for basic compliance work, creating cash flow nightmares for growing startups. Months of delays for simple contract reviews while your deals sit in legal limbo."
          },
          {
            icon: "🎲",
            headline: "Template Roulette",
            description: "Generic templates from the internet leave you exposed to massive compliance risks. One missed jurisdiction requirement could cost you everything you've built."
          },
          {
            icon: "📋",
            headline: "The Admin Nightmare",
            description: "Drowning in contract versions, compliance checklists, and regulatory updates across multiple countries. Your team spends more time on paperwork than building your product."
          }
        ]}
      />

      {/* Solution Section */}
      <SolutionSection
        sectionHeader="Meet Your AI Co-Pilot for Global Legal Compliance"
        features={[
          {
            headline: "One Document. Multiple Countries",
            description: "Our AI understands the nuances of international law. Generate compliant contracts that work across jurisdictions, automatically adapting to local requirements while maintaining your business logic."
          },
          {
            headline: "We Don't Do Fill-in-the-Blanks",
            description: "Forget generic templates. Our generative AI creates bespoke legal documents tailored to your specific business model, industry, and growth stage. Every document is crafted for your unique needs."
          },
          {
            headline: "Finally, Legal in Plain English",
            description: "No more legal jargon confusion. Our AI explains every clause, highlights risks, and suggests improvements in language you actually understand. Make informed decisions with confidence."
          }
        ]}
      />

      {/* Team Section */}
      <TeamSection
        sectionHeader="Meet the Founders"
        subheader="Experienced entrepreneurs and legal tech experts building the future of global compliance"
        members={[
          {
            name: "Thabiso Motswagole",
            role: "Co-Founder & CEO",
            title: "Forbes 30 Under 30 | Techstars",
            description: "Serial entrepreneur with deep expertise in AI and international business scaling. Previously built and scaled tech companies across multiple continents."
          },
          {
            name: "Nicolette Chinomona",
            role: "Co-Founder & COO",
            title: "Techstars MBA | Operations Expert",
            description: "Operations and strategy leader with proven track record of scaling startups from seed to Series A. Expert in international market expansion and regulatory compliance."
          },
          {
            name: "Ratidzo Murwisi",
            role: "Co-Founder & CTO",
            title: "15+ Years Legal Technology",
            description: "Legal technology veteran with deep expertise in AI, machine learning, and regulatory systems. Previously led engineering teams at major legal tech companies."
          }
        ]}
      />

      {/* Vision Section */}
      <VisionSection
        headline="Building the Borderless Future"
        description="We're not just building another legal tool. We're creating the infrastructure that will power the next generation of global businesses."
        marketStats={{
          marketSize: "$60B+ Global Market Opportunity",
          architecture: "AI-Native Architecture",
          design: "Global-First Design"
        }}
      />

      <Footer />

      <Particles
        quantityDesktop={350}
        quantityMobile={100}
        ease={80}
        color={"#F7FF9B"}
        refresh
      />
    </main>
  );
}
