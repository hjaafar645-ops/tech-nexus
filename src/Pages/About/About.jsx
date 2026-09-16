import './About.css'

function About() {

  /*===== Particles =====*/
  const particleClasses = ['pr1', 'pr2', 'pr3', 'pr4', 'pr5', 'pr6', 'pr7', 'pr8', 'pr9', 'pr10'
    , 'pr11', 'pr12', 'pr13', 'pr14', 'pr15', 'pr16', 'pr17', 'pr18', 'pr19', 'pr20'];

  return (
    <>
      <main className="about-page">
        {particleClasses.map((pr, index) => (
          <div key={`elec-p-${index}`} className={`particles ${pr}`}></div>
        ))}
        
        <div className="about-container">
          <section className="about-text-side">
            <h1 className="about-title">
              <i className="bi bi-info-circle-fill"></i> Our Story
            </h1>
            <div className="about-line"></div>

            <p className="about-description">
              Welcome to <strong>TechNexus</strong>, the ultimate digital vault engineered for tech enthusiasts
              , elite developers, and hard-core gamers. Founded with a vision to redefine hardware retail,
              we bridge the gap between supreme computing quality and next-generation innovation.
            </p>

            <p className="about-description">
              Every component, laptop, and gaming masterpiece hosted within our secure vault
              is strictly curated to guarantee relentless performance under the most demanding digital loads.
            </p>

            <div className="about-values">
              <div className="values">
                <i className="bi bi-lightning-charge-fill"></i>
                <div>
                  <h5>Supreme Performance</h5>
                  <p>Uncompromised speed tailored for heavy digital architecture.</p>
                </div>
              </div> {/* values */}

              <div className="values">
                <i className="bi bi-shield-check"></i>
                <div>
                  <h5>Verified Trust</h5>
                  <p>Every transaction and connection is secured end-to-end.</p>
                </div>
              </div>
            </div> {/* values */}
          </section> {/* about-text-side */}

          <section className="about-visual-side">
            <div className="about-image">
              <img
                src="/Images/robot.jpg"
                alt="TechNexus Core Infrastructure"
                className="about-rob-img"
              />
              <div className="glow"></div>
            </div>
          </section> {/* bout-visual-side */}

        </div> {/* about-container */}
      </main> {/* about-page */}
    </>
  )
}

export default About
