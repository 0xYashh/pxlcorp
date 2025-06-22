'use client'

import { useEffect } from 'react'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Experiments from '../../components/Experiments'
import Reads from '../../components/Reads'
import Team from '../../components/Team'
import Footer from '../../components/Footer'

export default function TeamPage() {
  useEffect(() => {
    setTimeout(() => {
      const element = document.getElementById('team')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }, [])

  return (
    <main id="main-content">
      <Hero />
      <About />
      <Experiments />
      <Reads />
      <Team />
      <Footer />
    </main>
  )
} 