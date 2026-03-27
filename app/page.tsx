import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import ProjectsList from "@/components/Projects"
import TechnologiesList from "@/components/Technologies"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechnologiesList />
      <ProjectsList />
      <Footer />
    </>
  )
}