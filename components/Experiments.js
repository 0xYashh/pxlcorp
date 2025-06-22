export default function Experiments() {
  return (
    <>
      <section id="experiments">
        <div className="experiments-content">
          <div className="experiments-text">
            <h2 className="experiments-title">experiments</h2>
            <p className="experiments-description">
              a growing stack of <span className="highlight">&quot;what if we built this?&quot;</span> ideas.
            </p>
            <div className="experiments-log mt-6">
              <a href="https://buildslog.pxlcorp.xyz" className="experiment-item" target="_blank" rel="noopener">
                <div className="experiment-header">
                  <span className="exp-name">buildslog</span>
                  <span className="exp-status">[⚡ in progress]</span>
                </div>
              </a>
              <p className="exp-desc">
                buildslog is a public directory of indie builds — alive, paused, or dead.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>
    </>
  )
} 