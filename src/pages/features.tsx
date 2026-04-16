import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const features = [
  {
    title: 'Comprehensive Wiki',
    description: 'In-depth articles covering 11 inspection topics — from foundations to business practices. Each article includes defect identification, standards references, and reporting guidance.',
    link: '/wiki/intro',
  },
  {
    title: 'Dark Mode',
    description: 'Toggle between light and dark themes, or let the site follow your system preference. Designed for comfortable reading in any environment.',
  },
  {
    title: 'Blog',
    description: 'Articles, guides, and industry updates written for inspectors at every experience level. Subscribe via RSS or Atom feed.',
    link: '/blog',
  },
  {
    title: 'Sidebar Navigation',
    description: 'Every wiki article includes a persistent sidebar for quick navigation between topics. Browse by category or jump to any article instantly.',
  },
  {
    title: 'Table of Contents',
    description: 'Auto-generated table of contents on every article, with scroll-tracking to show your current position in the document.',
  },
  {
    title: 'Full-Text Search',
    description: 'Search across all wiki articles, blog posts, and pages. Find exactly what you need without browsing through categories.',
  },
  {
    title: 'Mobile Friendly',
    description: 'Fully responsive design that works on phones, tablets, and desktops. Reference articles in the field from any device.',
  },
  {
    title: 'Open Source',
    description: 'All content is licensed under CC BY-SA 4.0. The source code is on GitHub. Anyone can contribute articles, fix errors, or suggest improvements.',
    link: 'https://github.com/jonajinga/inspectorwiki',
  },
  {
    title: 'Offline Support (PWA)',
    description: 'Install InspectorWiki as an app on your device for offline access. Perfect for inspectors working in areas with limited connectivity.',
  },
];

export default function Features() {
  return (
    <Layout title="Features" description="InspectorWiki features — everything you need in a property inspection knowledge base.">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Features</h1>
            <p style={{fontSize: '1.1rem'}}>
              InspectorWiki is built to be the most useful reference tool for property inspectors. Here's what's included.
            </p>
          </div>
        </div>
        <div className="row" style={{marginTop: '2rem'}}>
          {features.map((feature) => (
            <div className="col col--4" key={feature.title} style={{marginBottom: '2rem'}}>
              <div className="card-item" style={{height: '100%'}}>
                <h3 style={{fontFamily: 'var(--ifm-heading-font-family)', fontSize: '1.15rem', marginBottom: '0.5rem'}}>
                  {feature.title}
                </h3>
                <p style={{fontSize: '0.9rem', color: 'var(--iw-ink-2)'}}>{feature.description}</p>
                {feature.link && (
                  <Link
                    to={feature.link}
                    style={{fontFamily: 'var(--ifm-font-family-monospace)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em'}}
                  >
                    Learn more &rarr;
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
