"use client"

import { Button } from "./ui/button"
import { GitBranchIcon, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import Image from "next/image"

type ProjectCardProps = {
  name: string
  description: string
  link: string
  live: string
  technologies: string[]
}

export default function ProjectCard({
  name,
  description,
  technologies,
  link,
  live,
}: ProjectCardProps) {
  const projectImage = `/projects/${name
    .toLowerCase()
    .replace(/\s+/g, "-")}.png`

  return (
    <div className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-lg">
      
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-2xl font-semibold text-black sm:text-3xl">
          {name}
        </h3>

        <div className="flex gap-3">
          {live && (
            <a href={live} target="_blank">
              <Button className="flex items-center gap-2 text-sm">
                Live <ExternalLink size={16} />
              </Button>
            </a>
          )}

          <a href={link} target="_blank">
            <Button variant="outline" size="icon">
              <FaGithub size={18} />
            </Button>
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm text-zinc-600 sm:text-base">
        {description}
      </p>

      {/* Image */}
      <div className="relative mt-6 overflow-hidden rounded-xl">
        <Image
          src={projectImage}
          alt={name}
          width={1200}
          height={700}
          className="w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Tech */}
      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-zinc-100 px-2 py-1 font-mono text-xs text-zinc-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}