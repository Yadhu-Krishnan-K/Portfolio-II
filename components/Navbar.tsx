"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type NavLink = {
  name: string
  id: string
}

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      // Hide if scrolling down, show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navLinks: NavLink[] = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
  ]

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
        >
          <nav className="flex items-center gap-1 rounded-2xl border-2 border-black bg-white p-2 shadow-[4px_4px_0_#000]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative px-6 py-2 text-sm font-bold text-black transition-all hover:text-blue-600 active:scale-95"
              >
                {link.name}
              </button>
            ))}
            
              {/* Optional: Add a high-contrast CTA button inside the nav
              <button
                onClick={() => scrollToSection('contact')}
                className="ml-2 rounded-xl border-2 border-black bg-yellow-400 px-5 py-2 text-sm font-black text-black shadow-[2px_2px_0_#000] transition-all hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
              >
                Hire Me
              </button> */}
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  )
}