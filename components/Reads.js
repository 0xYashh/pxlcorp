import Image from 'next/image'

export default function Reads() {
  return (
    <>
      <section id="reads">
        <div className="reads-content">
          <div className="reads-text">
            <h2 className="reads-title">reads</h2>
            
            <p className="reads-description">
              this is where we share what we&apos;re learning, building, and thinking about.
              you&apos;ll find blog posts, updates from the lab, and sometimes papers or notes we find interesting.
            </p>
            
            <p className="reads-manifesto">
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