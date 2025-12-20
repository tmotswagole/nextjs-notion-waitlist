import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

interface TeamMemberProps {
  name: string;
  role: string;
  title: string;
  description: string;
}

interface TeamSectionProps {
  sectionHeader: string;
  subheader: string;
  members: TeamMemberProps[];
}

export default function TeamSection({
  sectionHeader,
  subheader,
  members,
}: TeamSectionProps) {
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
        <p className="mt-4 text-lg text-zinc-300 sm:text-xl">
          {subheader}
        </p>
      </motion.div>

      {/* Three-column team layout */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12"
      >
        {members.map((member, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center text-center space-y-4"
          >
            {/* Profile Icon/Avatar */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
              <span className="text-3xl">👤</span>
            </div>

            {/* Name and Role */}
            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                {member.name}
              </h3>
              <p className="text-blue-400 font-medium">
                {member.role}
              </p>
              <p className="text-zinc-400 text-sm font-medium">
                {member.title}
              </p>
            </div>

            {/* Description */}
            <p className="text-zinc-300 leading-relaxed max-w-sm">
              {member.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}