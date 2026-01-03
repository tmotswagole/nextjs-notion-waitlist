"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Footer() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-auto w-full border-t bg-background">
      
      {/* Final CTA Section */}
      <motion.div 
        variants={itemVariants}
        className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Ready to Scale Without Legal Roadblocks?
        </h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join our exclusive founder cohort and lock in early access pricing. 
          Limited spots available for companies serious about global expansion.
        </p>
        <div className="text-sm text-muted-foreground">
          <span className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-semibold">
            Early Access • Founder Pricing • Priority Support
          </span>
        </div>
      </motion.div>

      {/* Contact and Links Section */}
      <motion.div 
        variants={itemVariants}
        className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-6 border-t text-muted-foreground">
        
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="text-sm">
            © 2025 Jurifica Global, Inc. All rights reserved
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="mailto:hello@jurifica.com"
            className="text-sm hover:text-foreground transition-colors duration-200">
            hello@jurifica.com
          </Link>
          <Link
            href="https://linkedin.com/company/jurifica"
            rel="noopener noreferrer"
            target="_blank"
            className="text-sm hover:text-foreground transition-colors duration-200">
            LinkedIn
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
