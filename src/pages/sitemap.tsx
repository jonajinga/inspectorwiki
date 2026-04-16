import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const sections = [
  {
    title: 'Wiki',
    links: [
      {label: 'Getting Started', to: '/wiki/intro'},
      {label: 'Foundations & Basements', to: '/wiki/foundations/types-and-defects'},
      {label: 'Roofing', to: '/wiki/roofing/overview'},
      {label: 'Plumbing', to: '/wiki/plumbing/overview'},
      {label: 'Electrical', to: '/wiki/electrical/overview'},
      {label: 'HVAC', to: '/wiki/hvac/overview'},
      {label: 'Exterior & Siding', to: '/wiki/exterior/overview'},
      {label: 'Interior & Finishes', to: '/wiki/interior/overview'},
      {label: 'Insulation & Ventilation', to: '/wiki/insulation/overview'},
      {label: 'Fire & Safety', to: '/wiki/fire-safety/overview'},
      {label: 'Standards of Practice', to: '/wiki/standards/overview'},
      {label: 'Business & Marketing', to: '/wiki/business/overview'},
    ],
  },
  {
    title: 'Blog',
    links: [
      {label: 'All Posts', to: '/blog'},
      {label: 'Archive', to: '/blog/archive'},
      {label: 'Tags', to: '/blog/tags'},
    ],
  },
  {
    title: 'About',
    links: [
      {label: 'About InspectorWiki', to: '/about'},
      {label: 'Features', to: '/features'},
      {label: 'Style Guide', to: '/style-guide'},
      {label: 'Accessibility', to: '/accessibility'},
    ],
  },
  {
    title: 'Support',
    links: [
      {label: 'Contact', to: '/contact'},
      {label: 'Feedback', to: '/feedback'},
      {label: 'Privacy Policy', to: '/privacy'},
    ],
  },
];

export default function Sitemap() {
  return (
    <Layout title="Sitemap" description="Complete sitemap of InspectorWiki — all pages organized by section.">
      <div className="container margin-vert--lg">
        <h1>Sitemap</h1>
        <p>A complete index of all pages on InspectorWiki.</p>
        <div className="row" style={{marginTop: '2rem'}}>
          {sections.map((section) => (
            <div className="col col--6" key={section.title} style={{marginBottom: '2rem'}}>
              <h2>{section.title}</h2>
              <ul style={{listStyle: 'none', padding: 0}}>
                {section.links.map((link) => (
                  <li key={link.to} style={{padding: '0.35rem 0', borderBottom: '1px solid var(--iw-border)'}}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
