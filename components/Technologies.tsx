"use client"

import { motion } from "framer-motion"

type TechItem = {
  name: string
  description: string
  color: string
}

export default function TechnologiesList() {
  const technologies: TechItem[] = [
    { name: "JavaScript", description: "Core language of the web", color: "#F7DF1E" },
    { name: "TypeScript", description: "Type-safe JavaScript", color: "#3178C6" },
    { name: "MongoDB", description: "NoSQL database", color: "#47A248" },
    { name: "TailwindCSS", description: "Utility-first styling", color: "#06B6D4" },
    { name: "React", description: "Component-based UI", color: "#61DAFB" },
    { name: "Git", description: "Version control system", color: "#F05032" },
    { name: "Node.js", description: "Backend runtime", color: "#339933" },
  ]

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center bg-[#FFF8E7] pb-28 pt-20"
    >
      <div className="w-full max-w-6xl px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-black sm:text-6xl">
            My <span className="text-blue-600">Tech Stack</span>
          </h2>

          <p className="mt-4 text-lg text-zinc-600 sm:text-xl">
            Tools I use to build scalable and performant apps.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="group h-full rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:shadow-md">
                
                {/* Icon block */}
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg text-xs font-bold text-white"
                  style={{ backgroundColor: tech.color }}
                >
                  {tech.name[0]}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-black">
                  {tech.name}
                </h3>

                {/* Description */}
                <p className="mt-1 text-sm text-zinc-600">
                  {tech.description}
                </p>

                {/* subtle dev touch */}
                <span className="mt-3 inline-block font-mono text-xs text-zinc-400">
                  #{tech.name.toLowerCase()}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}