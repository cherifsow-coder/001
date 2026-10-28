import PersonalInfo from './components/PersonalInfo.jsx'
import Experiences from './components/Experiences.jsx'
import Competences from './components/Competences.jsx'

const profile = {
  firstName: 'Cherif chamsidine',
  lastName: 'Sow',
  role: 'Développeuse web junior',
  location: 'Paris, France',
  email: 'cherifchamsidines@gmail.com',
  phone: '+221 78 308 60 24',
  website: 'cherifsow.github.io',
  initials: 'CS',
  introduction:
    'Curieuse et motivée, je conçois des interfaces web accessibles et soignées. J’aime transformer des idées en expériences numériques simples, utiles et agréables.',
}

const experiences = [
  {
    role: 'Développeuse front-end — Stage',
    company: 'Studio Créatif',
    period: '2025 — Aujourd’hui',
    location: 'Paris, France',
    description:
      'Conception de pages web adaptatives avec React et intégration de maquettes. Participation aux revues de code et à l’amélioration de l’accessibilité.',
    tags: ['React', 'JavaScript', 'Figma'],
  },
  {
    role: 'Assistante communication numérique',
    company: 'Association Horizon',
    period: '2024 — 2025',
    location: 'Lyon, France',
    description:
      'Mise à jour du site, création de contenus et suivi des retours des utilisateurs en collaboration avec une équipe pluridisciplinaire.',
    tags: ['WordPress', 'Contenu', 'Équipe'],
  },
]

const skillGroups = [
  {
    title: 'Développement',
    skills: [
      { name: 'HTML & CSS', level: 'Avancé', value: 85 },
      { name: 'JavaScript', level: 'Intermédiaire', value: 68 },
      { name: 'React', level: 'Intermédiaire', value: 62 },
    ],
  },
  {
    title: 'Outils & méthodes',
    skills: [
      { name: 'Git & GitHub', level: 'Intermédiaire', value: 65 },
      { name: 'Figma', level: 'Intermédiaire', value: 60 },
      { name: 'Travail en équipe', level: 'Avancé', value: 82 },
    ],
  },
]

function App() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="#accueil" aria-label="Retour en haut de page">
          <span className="brand-mark">CV</span>
          <span>Portfolio personnel</span>
        </a>
        <button className="print-link" type="button" onClick={() => window.print()}>
          <span aria-hidden="true">↓</span> Imprimer le CV
        </button>
      </header>

      <div className="resume" id="accueil">
        <PersonalInfo profile={profile} />

        <div className="resume-grid">
          <section className="main-column" aria-label="Parcours professionnel">
            <Experiences experiences={experiences} />
          </section>
          <aside className="side-column" aria-label="Compétences">
            <Competences groups={skillGroups} />
            <section className="education-card">
              <p className="eyebrow">Formation</p>
              <h2>Développement web</h2>
              <p className="education-school">École / Université · 2023 — 2025</p>
              <p className="education-copy">
                Formation à personnaliser avec votre diplôme, votre établissement et les dates.
              </p>
            </section>
            <section className="languages-card">
              <p className="eyebrow">Langues</p>
              <div className="language-row">
                <span>Français</span>
                <span className="language-level">Natif</span>
              </div>
              <div className="language-row">
                <span>Anglais</span>
                <span className="language-level">B2</span>
              </div>
            </section>
          </aside>
        </div>

        <footer className="resume-footer">
          <span>Merci pour votre visite.</span>
          <span>CV · {profile.firstName} {profile.lastName}</span>
        </footer>
      </div>
    </main>
  )
}

export default App
