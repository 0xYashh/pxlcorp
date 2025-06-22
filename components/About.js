import Image from 'next/image'

export default function About() {
  return (
    <>
      <section id="about">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">pxlcorp?</h2>
            
            <p className="about-description">
              pxlcorp is a tiny internet lab where we experiment and build stuffs on internet we wish existed.
            </p>
            
            <p className="about-manifesto">
              &gt;pxl? : a pixel is the tiniest building block of every image you see. 
              just like pixels, we believe small ideas stacked with care, 
              creativity, and hustle can turn into something beautiful and 
              impactful.
            </p>
            
            <div className="about-manifesto">
              <p>we build.</p>
              <p>we break.</p>
              <p>we learn.</p>
              <p>we repeat.</p>
              <p><span className="highlight">we ship. we iterate. we document. we evolve.</span></p>
            </div>
          </div>
          
          <div className="about-image">
            <Image src="/images/mac.png" alt="Inspiration" width={500} height={400} />
          </div>
        </div>
      </section>

      <div className="section-divider"></div>
    </>
  )
} 