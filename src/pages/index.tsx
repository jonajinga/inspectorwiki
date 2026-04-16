import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const topics = [
  'Structural Systems', 'Roofing', 'Plumbing', 'Electrical',
  'HVAC', 'Exterior & Siding', 'Interior & Finishes', 'Insulation & Ventilation',
  'Foundations & Basements', 'Fire & Safety', 'Standards of Practice', 'Business & Marketing',
];

function Stat({value, label}: {value: string; label: string}) {
  return (
    <div className="stat-box">
      <span className="stat-box__value">{value}</span>
      <span className="stat-box__label">{label}</span>
    </div>
  );
}

function Hero() {
  return (
    <header className="hero--iw">
      <div className="container" style={{display: 'flex', alignItems: 'center', gap: '3rem', position: 'relative', zIndex: 1}}>
        <div style={{flex: 1, maxWidth: 640}}>
          <span className="hero__eyebrow">The Inspector's Reference</span>
          <h1 style={{fontFamily: 'var(--ifm-heading-font-family)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '0.75rem'}}>
            Everything you need to know about property inspection
          </h1>
          <p className="hero__accent">Free. Forever.</p>
          <p className="hero__sub">
            A community-driven knowledge base covering standards, systems, defects, and business practices for residential and commercial inspectors.
          </p>
          <div className="hero__actions">
            <Link to="/wiki/intro" className="btn--primary">Browse the Wiki</Link>
            <Link to="/blog" className="btn--ghost">Read the Blog</Link>
          </div>
        </div>
        <div className="hero__stats">
          <Stat value="6" label="Chapters" />
          <Stat value="12" label="Topics" />
          <Stat value="Free" label="Always" />
          <Stat value="CC" label="Licensed" />
        </div>
      </div>
    </header>
  );
}

function PathCards() {
  return (
    <section className="section-block">
      <div className="container">
        <div className="path-grid">
          <Link to="/wiki/foundations/types-and-defects" className="path-card path-card--green">
            <span className="section-label">New to inspecting?</span>
            <h3>Start Here</h3>
            <p>Learn the fundamentals of property inspection from the ground up — standards, systems, and reporting.</p>
          </Link>
          <Link to="/wiki/intro" className="path-card path-card--navy">
            <span className="section-label">Already practicing?</span>
            <h3>Browse the Wiki</h3>
            <p>Deep-dive into specific systems, defect identification, code references, and advanced techniques.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

function TopicTable() {
  return (
    <section className="section-block section-block--alt">
      <div className="container">
        <span className="section-label">Knowledge Base</span>
        <h2 style={{fontFamily: 'var(--ifm-heading-font-family)', fontSize: '1.75rem', marginBottom: '1.5rem'}}>Wiki Topics</h2>
        <div className="topic-table">
          {topics.map((topic, i) => (
            <div className="topic-table__cell" key={topic}>
              <span className="topic-table__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="topic-table__name">{topic}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="cta-band">
      <div className="cta-band__inner">
        <div>
          <h2>Help Build the Wiki</h2>
          <p>InspectorWiki is open source and community-driven. Contribute articles, fix errors, or suggest new topics.</p>
        </div>
        <Link to="/wiki/intro" className="btn--primary">Learn How to Contribute</Link>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="The Free Encyclopedia for Property Inspectors"
      description="InspectorWiki is a free, community-driven knowledge base covering every aspect of property inspection.">
      <Hero />
      <main>
        <PathCards />
        <TopicTable />
        <CtaBand />
      </main>
    </Layout>
  );
}
