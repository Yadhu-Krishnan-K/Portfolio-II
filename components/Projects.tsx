"use client"

import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"

type Project = {
  name: string
  live: string
  description: string
  link: string
  technologies: string[]
}

export default function ProjectsList() {
  const projects: Project[] = [
    {
      name: "Kana-Kona",
      live: "https://kana-kona.vercel.app/",
      description:
        "Real-time chat application with authentication, instant messaging, and scalable backend architecture.",
      link: "https://github.com/Yadhu-Krishnan-K/Kana-Kona",
      technologies: [
        "Socket.IO",
        "Express",
        "React",
        "MongoDB",
        "Tailwind",
        "OAuth",
      ],
    },
  ]

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center bg-[#FFF8E7] pb-28 pt-20"
    >
      <div className="w-full max-w-6xl px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-black sm:text-6xl">
            Featured <span className="text-blue-600">Projects</span>
          </h2>

          <p className="mt-4 text-lg text-zinc-600">
            A selection of projects showcasing my full-stack development skills.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}