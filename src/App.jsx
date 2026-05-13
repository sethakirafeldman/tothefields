import { useEffect, useMemo, useState } from 'react'
import './App.css'
import siteConfig from './siteConfig'

function getPageHref(slug) {
  return slug ? `#/${slug}` : '#/'
}

function getPageKeyFromHash(hash, pageEntries) {
  const normalizedHash = hash.replace(/^#\/?/, '').replace(/\/$/, '')
  const fallbackKey = pageEntries[0]?.[0] ?? 'home'

  if (!normalizedHash) {
    return fallbackKey
  }

  const matchedEntry = pageEntries.find(([, page]) => page.slug === normalizedHash)
  return matchedEntry?.[0] ?? fallbackKey
}

function Section({
  title,
  intro,
  children,
}) {
  return (
    <section className="section-block">
      <div className="section-heading">
        <h2>{title}</h2>
        {intro ? <p>{intro}</p> : null}
      </div>
      {children}
    </section>
  )
}

function HomePage({ page }) {
  return (
    <div className="page page-home">
      <section className="hero-panel">
        <p className="eyebrow">{page.hero.eyebrow}</p>
        <h2 className="hero-title">{page.hero.title}</h2>
        <p className="hero-copy">{page.hero.description}</p>
      </section>

      <Section title={page.welcome.title} intro={page.welcome.description}>
        <div className="card-grid">
          {page.welcome.highlights.map((highlight) => (
            <article className="card" key={highlight.title}>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title={page.featuredLinks.title} intro={page.featuredLinks.description}>
        <div className="card-grid">
          {page.featuredLinks.items.map((item) => (
            <a
              className="card card-link"
              href={item.url}
              key={item.label}
              rel="noreferrer"
              target="_blank"
            >
              <h3>{item.label}</h3>
              <p>{item.description}</p>
            </a>
          ))}
        </div>
      </Section>
    </div>
  )
}

function AboutPage({ page }) {
  return (
    <div className="page">
      <header className="page-header">
        <h2>{page.title}</h2>
        <p>{page.intro}</p>
      </header>

      <div className="split-layout">
        <section className="card prose-card">
          {page.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section className="card">
          <h3>{page.factsTitle}</h3>
          <dl className="fact-list">
            {page.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </div>
  )
}

function MusicPage({ page }) {
  return (
    <div className="page">
      <header className="page-header">
        <h2>{page.title}</h2>
        <p>{page.intro}</p>
      </header>

      <div className="card-grid">
        {page.releases.map((release) => (
          <article className="card" key={release.title}>
            <p className="card-eyebrow">
              {release.year} · {release.format}
            </p>
            <h3>{release.title}</h3>
            <p>{release.description}</p>
            <a href={release.url} rel="noreferrer" target="_blank">
              {release.linkLabel}
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}

function ShowsPage({ page }) {
  return (
    <div className="page">
      <header className="page-header">
        <h2>{page.title}</h2>
        <p>{page.intro}</p>
      </header>

      <div className="schedule">
        {page.upcoming.map((show) => (
          <article className="card show-card" key={`${show.date}-${show.venue}`}>
            <div>
              <p className="show-date">{show.date}</p>
              <h3>{show.venue}</h3>
              <p>{show.location}</p>
            </div>
            <p>{show.note}</p>
            <a href={show.url} rel="noreferrer" target="_blank">
              {show.linkLabel}
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}

function PressPage({ page }) {
  return (
    <div className="page">
      <header className="page-header">
        <h2>{page.title}</h2>
        <p>{page.intro}</p>
      </header>

      <div className="card-grid">
        {page.quotes.map((quote) => (
          <article className="card quote-card" key={quote.source}>
            <p className="quote-mark">“</p>
            <p>{quote.text}</p>
            <p className="quote-source">{quote.source}</p>
          </article>
        ))}
      </div>

      <section className="card">
        <h3>{page.assetsTitle}</h3>
        <ul className="bullet-list">
          {page.assets.map((asset) => (
            <li key={asset}>{asset}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

function ContactPage({ page }) {
  return (
    <div className="page">
      <header className="page-header">
        <h2>{page.title}</h2>
        <p>{page.intro}</p>
      </header>

      <div className="split-layout">
        <section className="card">
          <h3>{page.methodsTitle}</h3>
          <ul className="contact-list">
            {page.methods.map((method) => (
              <li key={method.label}>
                <span>{method.label}</span>
                <a href={method.href}>{method.value}</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h3>{page.socialsTitle}</h3>
          <ul className="contact-list">
            {page.socials.map((social) => (
              <li key={social.label}>
                <span>{social.label}</span>
                <a href={social.url} rel="noreferrer" target="_blank">
                  {social.value}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

function renderPage(pageKey, page) {
  switch (pageKey) {
    case 'about':
      return <AboutPage page={page} />
    case 'music':
      return <MusicPage page={page} />
    case 'shows':
      return <ShowsPage page={page} />
    case 'press':
      return <PressPage page={page} />
    case 'contact':
      return <ContactPage page={page} />
    case 'home':
    default:
      return <HomePage page={page} />
  }
}

function App() {
  const { artistName, role, pages } = siteConfig
  const pageEntries = useMemo(() => Object.entries(pages), [pages])
  const [activePageKey, setActivePageKey] = useState(() =>
    getPageKeyFromHash(window.location.hash, pageEntries),
  )

  useEffect(() => {
    const handleHashChange = () => {
      setActivePageKey(getPageKeyFromHash(window.location.hash, pageEntries))
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [pageEntries])

  const activePage = pages[activePageKey] ?? pageEntries[0]?.[1]

  return (
    <main className="site">
      <header className="site-header">
        <div>
          <p className="eyebrow">{role}</p>
          <a className="site-home-link" href="#/">
            <h1>{artistName}</h1>
          </a>
        </div>

        <nav aria-label="Primary" className="site-nav">
          {pageEntries.map(([key, page]) => (
            <a
              className={key === activePageKey ? 'active' : ''}
              href={getPageHref(page.slug)}
              key={key}
            >
              {page.label}
            </a>
          ))}
        </nav>
      </header>

      {activePage ? renderPage(activePageKey, activePage) : null}
    </main>
  )
}

export default App
