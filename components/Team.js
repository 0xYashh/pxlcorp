export default function team() {
  return (
    <>
      <section id="team">
        <div className="team-content">
          <div className="team-text">
            <h2 className="team-title">teams</h2>
            <p className="team-description">
              the team behind pxlcorp.
            </p>
            <div className="team-log mt-6">
              <div className="team-item">
                <div className="team-header">
                  <span className="teammate-name">yash</span>
                  <span className="teammate-status">[ founder/ceo ]</span>
                </div>
              </div>

              <a href="/team/yash" className="team-link">
                [ about yash → ]
              </a>

            </div>
            {/* you? */}
            <div className="team-item mt-4">
              <div className="team-header">
                <span className="teammate-name">wanna join ?</span>
                <span className="teammate-status">[ open position ]</span>
                </div>
              </div>
              <a href="/team/join-team" className="team-link  hover:text-pxl-purple">
                [ join the team → ]
              </a>
         
          </div>
        </div>
      </section>

      <div className="section-divider"></div>
    </>
  )
} 