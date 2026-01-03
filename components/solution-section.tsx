"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

interface FeatureBlockProps {
  headline: string;
  description: string;
}

interface SolutionSectionProps {
  sectionHeader: string;
  features: FeatureBlockProps[];
}

export default function SolutionSection({
  sectionHeader,
  features,
}: SolutionSectionProps) {
  return (
    <motion.section
      className="w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Section Header */}
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl lg:text-5xl">
          {sectionHeader}
        </h2>
      </motion.div>

      {/* Three feature blocks layout */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center text-center space-y-4"
          >
            {/* Feature Icon - using different colors for solution vs problem */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <span className="text-2xl">
                {index === 0 ? "🌍" : index === 1 ? "🤖" : "📖"}
              </span>
            </div>

            {/* Feature Headline */}
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              {feature.headline}
            </h3>

            {/* Feature Description */}
            <p className="text-zinc-300 leading-relaxed max-w-sm">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}