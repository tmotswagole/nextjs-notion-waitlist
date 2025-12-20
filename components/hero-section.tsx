import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaSubtext: string;
  trustSignals: string[];
}

export default function HeroSection({
  headline,
  subheadline,
  ctaText,
  ctaSubtext,
  trustSignals,
}: HeroSectionProps) {
  return (
    <motion.div
      className="flex w-full max-w-4xl flex-col gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      
      {/* Trust Signals Badge */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center">
          <div className="flex w-fit items-center justify-center rounded-full bg-muted/80 text-center">
            <AnimatedShinyText className="px-4 py-1">
              <span>{trustSignals.join(" | ")}</span>
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>

      {/* Logo */}
      <motion.img
        src="/logo.svg"
        alt="Jurifica Logo"
        className="mx-auto h-24 w-24"
        variants={itemVariants}
      />

      {/* Main Headline */}
      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-3xl font-bold tracking-tighter sm:text-5xl lg:text-6xl"
          text={headline}
        />
      </motion.div>

      {/* Subheadline */}
      <motion.div variants={itemVariants}>
        <TextBlur
          className="mx-auto max-w-3xl pt-1.5 text-center text-lg text-zinc-300 sm:text-xl lg:text-2xl"
          text={subheadline}
          duration={0.8}
        />
      </motion.div>

      {/* CTA Section */}
      <motion.div variants={itemVariants} className="flex flex-col items-center gap-2">
        <div className="text-center">
          <p className="text-lg font-semibold text-white sm:text-xl">{ctaText}</p>
          <p className="text-sm text-zinc-400 sm:text-base">{ctaSubtext}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}