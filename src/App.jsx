import './App.css'
import siteConfig from './siteConfig'

function App() {
  const { artistName, tagline, bio, contact, links } = siteConfig

  return (
    <main className="site">
      <header className="hero">
        <p className="eyebrow">Singer-Songwriter</p>
        <h1>{artistName}</h1>
        <p className="tagline">{tagline}</p>
      </header>

      <section className="section">
        <h2>About</h2>
        <p>{bio}</p>
      </section>

      <section className="section">
        <h2>Listen & Follow</h2>
        <ul className="links">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Contact</h2>
        <p>
          Booking & collaborations:{' '}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
        <p>
          Phone: <a href={`tel:${contact.phone}`}>{contact.phone}</a>
        </p>
      </section>
    </main>
  )
}

export default App
