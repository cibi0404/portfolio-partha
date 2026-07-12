import { useState, useEffect } from 'react'
import './index.css'
import PROJECTS from './data/Projects'
import SKILL_GROUPS from './data/Skills'
import CERTS from './data/Certificates'
import LEARNING from './data/Learnings'
import NAV_LINKS from './data/Navbar'




function Tape({ className = '', color = 'mustard' }) {
  return <span className={`tape tape-${color} ${className}`} aria-hidden="true" />
}

function Pin({ color = 'copper' }) {
  return <span className={`pin pin-${color}`} aria-hidden="true" />
}

function Chip({ children }) {
  return (
    <span className="chip">
      <span className="chip-pins chip-pins-top" aria-hidden="true">
        <i /><i /><i />
      </span>
      <span className="chip-body">{children}</span>
      <span className="chip-pins chip-pins-bottom" aria-hidden="true">
        <i /><i /><i />
      </span>
    </span>
  )
}

export default function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className="page">
      <header className="topbar">
        <a href="#top" className="brand">
          <span className="brand-mark">PM</span>
          <span className="brand-name">Parthasarathi<span className="dot">.</span>M</span>
        </a>
        <nav className="nav">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <button className="theme-toggle" onClick={() => setDark((d) => !d)}>
          {dark ? '☾ dark' : '☀ light'}
        </button>
      </header>

      <main id="top" className="board">
        {/* HERO */}
        <section className="hero">
          <div className="hero-card">
            <Tape className="hero-tape" color="mustard" />
            <p className="eyebrow">PARTHASARATHI M · FRONTEND DEVELOPER</p>
            <h1>
              I design dashboards,<br />
              <span className="accent">then write the SQL that brings them to life.</span>
            </h1>
            <p className="hero-body">
              I'm a Programmer Analyst at Sterlo, our company's own low-code/no-code
              platform. I build dashboard UIs and full application screens for it —
              designing the front end in HTML, CSS and Tailwind, then writing the
              SQL queries that map real-time data into each dashboard. I've built
              out three separate modules on the platform so far: CCRMS, CRM, and
              Insurance &amp; License Management.
            </p>
            <div className="hero-tags">
              <span className="hero-tag"><i className="dot-mustard" />Built CCRMS, CRM &amp; Insurance/License apps</span>
              <span className="hero-tag"><i className="dot-blue" />Low-code/no-code dashboard development</span>
              <span className="hero-tag"><i className="dot-copper" />Learning AI full-stack development</span>
            </div>
            <div className="hero-actions">
              <a className="btn btn-primary" href="mailto:parthasarathi0404@gmail.com">Say hello →</a>
              <a className="btn btn-ghost" href="https://github.com/cibi0404" target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn btn-ghost" href="https://www.linkedin.com/in/parthasarathi-m-834b99263" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="polaroid">
            <Tape className="polaroid-tape" color="blue" />
            <div className="polaroid-photo">
            <img src="/profile.jpg" alt="Parthasarathi M" />
            </div>
            <p className="polaroid-caption">that's me — parthasarathi, Chennai</p>
            <a className="resume-stamp" href="/resume.pdf" download="Parthasarathi_M_Resume.pdf" rel="noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v12" />
                <path d="M7 10l5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
              Download Résumé
            </a>
          </div>
        </section>

        {/* BOARD NAV */}
        <p className="section-label">— pinned to the board —</p>
        <section className="board-grid">
          <a href="#work" className="board-card">
            <Pin color="copper" />
            <p className="board-card-eyebrow">EXPERIENCE</p>
            <h3>Work</h3>
            <p>The three modules I've built day to day on the Sterlo platform.</p>
            <span className="board-card-link">See the role →</span>
          </a>
          <a href="#projects" className="board-card">
            <Pin color="olive" />
            <p className="board-card-eyebrow">PROJECTS</p>
            <h3>Projects</h3>
            <p>Work modules I've built, and personal projects on the side.</p>
            <span className="board-card-link">Browse projects →</span>
          </a>
          <a href="#skills" className="board-card">
            <Pin color="blue" />
            <p className="board-card-eyebrow">SKILLS</p>
            <h3>Skills</h3>
            <p>The stack I reach for, and the one I'm currently soldering together.</p>
            <span className="board-card-link">See the stack →</span>
          </a>
          <a href="#notes" className="board-card">
            <Pin color="mustard" />
            <p className="board-card-eyebrow">NOTES</p>
            <h3>Notes</h3>
            <p>Certifications, education, and what I'm learning right now.</p>
            <span className="board-card-link">Read notes →</span>
          </a>
        </section>

        {/* EXPERIENCE */}
        <section id="work" className="section">
          <p className="section-label">— on the workbench —</p>
          <div className="exp-card">
            <Tape className="exp-tape" color="copper" />
            <div className="exp-head">
              <div>
                <h2>Frontend Developer — Programmer Analyst</h2>
                <p className="exp-sub">Sterlo Pvt Ltd &middot; Sterlo Low-Code/No-Code Platform</p>
              </div>
              <span className="exp-date">Aug 2024 — Present</span>
            </div>
            <p className="exp-projects">Three modules, each built independently on the Sterlo platform</p>

            <p className="exp-projects">Module: CCRMS</p>
            <ul className="exp-list">
              <li>Built the dashboard and application screens for CCRMS on Sterlo, our company's low-code/no-code platform.</li>
              <li>Designed the front end in HTML, CSS and Tailwind, then wrote the SQL Server queries that map real-time data onto the dashboard's tables, metrics, and widgets.</li>
            </ul>

            <p className="exp-projects">Module: CRM</p>
            <ul className="exp-list">
              <li>Built the dashboard and app screens for CRM — a separate module from CCRMS, covering its own set of business workflows.</li>
              <li>Reused and refined the dashboard-design-plus-SQL-mapping workflow from CCRMS, with new templates and query patterns for this module's data.</li>
            </ul>

            <p className="exp-projects">Module: Insurance &amp; License Management</p>
            <ul className="exp-list">
              <li>Developed the app and dashboard for the Insurance &amp; License Management module using the low-code/no-code platform.</li>
              <li>Wrote the SQL queries mapping policy, licensing, and renewal data onto the dashboard in real time.</li>
            </ul>

            <p className="exp-projects">Across all three modules</p>
            <ul className="exp-list">
              <li>Implemented form validation, duplicate-check logic, grid permission control, and conditional show/hide behavior using the platform's internal JavaScript API, reducing data-entry errors.</li>
              <li>Authored and optimized SQL queries and stored procedures across multiple schemas to power dashboard KPIs and reports.</li>
              <li>Diagnosed and resolved frontend and backend issues using Chrome DevTools and SQL query validation, keeping each module stable in production.</li>
              <li>Use Claude, ChatGPT, and GitHub Copilot daily as part of an AI-assisted workflow to build faster and catch issues earlier.</li>
            </ul>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <p className="section-label">— freshly on the desk —</p>
          <div className="projects-grid">
            {PROJECTS.map((p) => (
              <article className="project-card" key={p.id}>
                <Tape className="project-tape" color={p.pin} />
                <p className="project-tag">{p.tag}</p>
                <h3>{p.title}</h3>
                <p className="project-stack">{p.stack}</p>
                <p className="project-desc">{p.desc}</p>
                <p className="project-detail">{p.detail}</p>
                {p.link && (
                  <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                    {p.linkLabel} →
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <p className="section-label">— components on hand —</p>
          <div className="skills-board">
            {SKILL_GROUPS.map((group) => (
              <div className="skills-row" key={group.label}>
                <p className="skills-row-label">{group.label}</p>
                <div className="skills-row-chips">
                  {group.skills.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NOTES: certs + education */}
        <section id="notes" className="section">
          <p className="section-label">— margin notes —</p>
          <div className="notes-grid">
            <div className="sticky-note note-mustard">
              <Tape className="note-tape" color="mustard" />
              <h4>Certified</h4>
              <ul>
                {CERTS.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
            <div className="sticky-note note-blue">
              <Tape className="note-tape" color="blue" />
              <h4>Currently learning</h4>
              <ul>
                {LEARNING.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
            <div className="sticky-note note-copper">
              <Tape className="note-tape" color="copper" />
              <h4>Education</h4>
              <p className="note-edu-degree">B.E., Electronics &amp; Communication Engineering</p>
              <p className="note-edu-school">SRM Valliammai Engineering College, Chennai (Anna University) — 2024</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-note">Thanks for stopping by the workbench.</p>
        <div className="footer-links">
          <a href="mailto:parthasarathi0404@gmail.com">Email</a>
          <a href="https://github.com/cibi0404" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/parthasarathi-m-834b99263" target="_blank" rel="noreferrer">LinkedIn</a>
          <span className="footer-meta">Chennai, India · Notice period 40–60 days</span>
        </div>
      </footer>
    </div>
  )
}