"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#FFF8E7]"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], x: [0, -80, 0], y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-yellow-400/20 blur-3xl"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Badge */}
        {/* <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="mb-6 rounded-full border-2 border-black bg-white px-5 py-2 text-sm font-extrabold text-blue-600 shadow-[3px_3px_0_#000]"
        >
          🚀 Available for Work
        </motion.div> */}

        {/* Title */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
          className="text-5xl font-extrabold tracking-tight text-black sm:text-7xl lg:text-8xl"
        >
          Hey, I’m{" "}
          <span className="text-blue-600 hover:animate-bounce inline-block">
            Yadhu
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-5 max-w-xl text-lg font-medium text-zinc-700 sm:text-xl"
        >
          I build scalable web apps and bring ideas to life with clean UI &
          solid backend systems.
        </motion.p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row">
          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}>
            <Button
              onClick={scrollToProjects}
              className="h-14 rounded-xl border-2 border-black bg-blue-600 px-8 text-lg font-bold text-white shadow-[5px_5px_0_#000] hover:bg-blue-700"
            >
              View Projects <ArrowDown className="ml-2" />
            </Button>
          </motion.div>

          <div className="flex gap-4">
            <SocialLink href="https://github.com/your-username">
              <FaGithub size={26} />
            </SocialLink>

            <SocialLink href="https://linkedin.com/in/your-link">
              <FaLinkedin size={26} />
            </SocialLink>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ scale: 1.1, rotate: 4 }}
      whileTap={{ scale: 0.9 }}
      className="rounded-xl border-2 border-black bg-white p-3 shadow-[3px_3px_0_#000] transition hover:bg-yellow-300"
    >
      {children}
    </motion.a>
  )
}