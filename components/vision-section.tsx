"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

interface VisionSectionProps {
  headline: string;
  description: string;
  marketStats: {
    marketSize: string;
    architecture: string;
    design: string;
  };
}

export default function VisionSection({
  headline,
  description,
  marketStats,
}: VisionSectionProps) {
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
          {headline}
        </h2>
        <p className="mt-4 text-lg text-zinc-300 sm:text-xl max-w-3xl mx-auto">
          {description}
        </p>
      </motion.div>

      {/* Market Statistics - Three key metrics */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12"
      >
        {/* Market Size */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center space-y-4"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
            <span className="text-2xl">📈</span>
          </div>
          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            {marketStats.marketSize}
          </h3>
          <p className="text-zinc-300 leading-relaxed max-w-sm">
            The global legal tech market is exploding as businesses expand internationally and compliance becomes increasingly complex.
          </p>
        </motion.div>

        {/* AI-Native Architecture */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center space-y-4"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
            <span className="text-2xl">🧠</span>
          </div>
          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            {marketStats.architecture}
          </h3>
          <p className="text-zinc-300 leading-relaxed max-w-sm">
            Built from the ground up with AI at its core, not retrofitted onto legacy systems. This is the future of legal technology.
          </p>
        </motion.div>

        {/* Global-First Design */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center space-y-4"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
            <span className="text-2xl">🌐</span>
          </div>
          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            {marketStats.design}
          </h3>
          <p className="text-zinc-300 leading-relaxed max-w-sm">
            Designed for the borderless economy from day one. Multi-jurisdictional intelligence that scales with your global ambitions.
          </p>
        </motion.div>
      </motion.div>

      {/* Call to Action for Vision */}
      <motion.div variants={itemVariants} className="text-center mt-12">
        <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
          The future of business is borderless. The companies that win will be those that can navigate global compliance with confidence and speed.
        </p>
      </motion.div>
    </motion.section>
  );
}