function Experiences({ experiences }) {
  return (
    <section className="section-block" aria-labelledby="experience-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Mon parcours</p>
          <h2 id="experience-title">Expériences</h2>
        </div>
        <span className="section-index">01 — 02</span>
      </div>

      <div className="timeline">
        {experiences.map((experience) => (
          <article className="experience-item" key={`${experience.company}-${experience.role}`}>
            <div className="timeline-marker" aria-hidden="true" />
            <div className="experience-meta">
              <span>{experience.period}</span>
              <span>{experience.location}</span>
            </div>
            <h3>{experience.role}</h3>
            <p className="experience-company">{experience.company}</p>
            <p className="experience-description">{experience.description}</p>
            <ul className="tag-list" aria-label="Technologies et domaines">
              {experience.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experiences
