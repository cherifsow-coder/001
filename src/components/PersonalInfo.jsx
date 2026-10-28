function PersonalInfo({ profile }) {
  return (
    <section className="profile-card" aria-labelledby="profile-name">
      <div className="profile-topline">
        <span className="availability">
          <span className="availability-dot" aria-hidden="true" />
          Disponible pour de nouvelles opportunités
        </span>
        <span className="profile-location">
          <span aria-hidden="true">⌖</span> {profile.location}
        </span>
      </div>

      <div className="profile-content">
        <div className="avatar" aria-hidden="true">{profile.initials}</div>
        <div className="profile-copy">
          <p className="eyebrow">Bonjour, je suis</p>
          <h1 id="profile-name">
            {profile.firstName} <span>{profile.lastName}</span>
          </h1>
          <p className="profile-role">{profile.role}</p>
          <p className="profile-introduction">{profile.introduction}</p>
          <div className="contact-list">
            <a href={`mailto:${profile.email}`}>
              <span aria-hidden="true">↗</span> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replaceAll(' ', '')}`}>
              <span aria-hidden="true">↗</span> {profile.phone}
            </a>
            <a href={`https://${profile.website}`} target="_blank" rel="noreferrer">
              <span aria-hidden="true">↗</span> {profile.website}
            </a>
          </div>
        </div>
      </div>
      <div className="profile-bottomline">
        <span>CRÉER · APPRENDRE · PARTAGER</span>
        <span>CV / {new Date().getFullYear()}</span>
      </div>
    </section>
  )
}

export default PersonalInfo
