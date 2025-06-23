export default function Reads() {
  return (
    <>
      <section id="reads">
        <div className="reads-content">
          <div className="reads-text">
            <h2 className="reads-title">reads</h2>
            <p className="reads-description">
              this is where we share what we’re learning, building, and thinking about. <br />
              you’ll find blog posts, updates from the lab, and sometimes papers or notes we find interesting.
            </p>

            {/* founder's note */}
            <div className="reads-log mt-6">
              <div className="read-item">
                <span className="read-name">&gt; founder's-note</span>
                </div>
                <p className="read-desc">
                  why pxlcorp exists. who’s building it. <br />
                  what this is all about.
                </p>
                <a href="/reads/founder-note" className="read-link">
                  [ read note → ]
                </a>
        
            </div>

            {/* blog */}
            <div className="reads-log mt-6">
              <div className="read-item">
                <span className="read-name">&gt; blog</span>
                </div>   
                <p className="read-desc">
                long-form thoughts & internet experiments from pxlcorp.
                </p>
                <a href="/reads/blogs" className="read-link">
                  [ read blogs → ]
                </a>
            
            </div>

            {/* build notes */}
            <div className="reads-log mt-6">
              <div className="read-item">
                <span className="read-name">&gt; build-notes</span>
                </div>
                <p className="read-desc">
                raw notes, experiments, and logs from inside pxlcorp.
                </p>
                <a href="/reads/builds-notes" className="read-link">
                  [ read builds → ]
                </a>
          
            </div>



          </div>
        </div>
      </section>

      <div className="section-divider"></div>
    </>
  )
}
