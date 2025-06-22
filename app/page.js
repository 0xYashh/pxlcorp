import Hero from '../components/Hero'
import About from '../components/About'
import Experiments from '../components/Experiments'
import Reads from '../components/Reads'
import Team from '../components/Team'
import Footer from '../components/Footer'

export const metadata = {
  title: 'pxlcorp',
  description: 'tiny internet lab building weird things on the internet',
}

export default function Home() {
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