'use client'

import Link from 'next/link'

export default function Hero() {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <section id="hero">
        <div className="hero-content">
          <h1 className="bytesized-regular hero-title">pxlcorp</h1>
          <p className="hero-subtitle">building cool things on internet.</p>

          <nav className="hero-nav">
            <Link href="/about" onClick={() => handleScroll('about')}>
              <span className="bracket">[</span>pxlcorp?<span className="bracket">]</span>
            </Link>
            <span className="separator">|</span>
            <Link href="/experiments" onClick={() => handleScroll('experiments')}>
              <span className="bracket">[</span>experiments<span className="bracket">]</span>
            </Link>
            <span className="separator">|</span>
            <Link href="/reads" onClick={() => handleScroll('reads')}>
              <span className="bracket">[</span>reads<span className="bracket">]</span>
            </Link>
            <span className="separator">|</span>
            <Link href="/team" onClick={() => handleScroll('team')}>
              <span className="bracket">[</span>team<span className="bracket">]</span>
            </Link>
          </nav>
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider"></div>
    </>
  )
} 