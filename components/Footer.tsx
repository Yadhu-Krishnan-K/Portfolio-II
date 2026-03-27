"use client"

import { GitBranchIcon, Link2Icon } from "lucide-react"
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-black/10 bg-[#FFF8E7] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        
        {/* Left */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-black">
            Yadhu Krishnan
          </h3>
          <p className="mt-1 text-sm text-zinc-500">
            © {currentYear} • Built with focus
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <SocialLink
            href="https://www.linkedin.com/in/yadhu-krishnan-k-7166581ab/"
            label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </SocialLink>

          <SocialLink
            href="https://github.com/Yadhu-Krishnan-K"
            label="GitHub"
          >
            <FaGithub size={20} />
          </SocialLink>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  href,
  children,
  label,
}: {
  href: string
  children: React.ReactNode
  label: string
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-white text-black transition hover:bg-zinc-100"
      aria-label={label}
    >
      {children}
    </motion.a>
  )
}