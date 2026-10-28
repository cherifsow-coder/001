function Competences({ groups }) {
  return (
    <section className="section-block skills-section" aria-labelledby="skills-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Ce que je sais faire</p>
          <h2 id="skills-title">Compétences</h2>
        </div>
        <span className="section-index">02</span>
      </div>

      {groups.map((group) => (
        <div className="skill-group" key={group.title}>
          <h3>{group.title}</h3>
          <ul className="skill-list">
            {group.skills.map((skill) => (
              <li className="skill-item" key={skill.name}>
                <div className="skill-label">
                  <span>{skill.name}</span>
                  <span className="skill-level">{skill.level}</span>
                </div>
                <div
                  className="skill-track"
                  role="progressbar"
                  aria-label={skill.name}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow={skill.value}
                >
                  <span className="skill-fill" style={{ width: `${skill.value}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default Competences
