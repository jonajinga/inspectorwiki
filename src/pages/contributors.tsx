import Layout from '@theme/Layout';

const contributors = [
  {
    name: 'Jon Ajinga',
    role: 'Founder & Lead Developer',
    url: 'https://github.com/jonajinga',
  },
  // Add more contributors here:
  // {
  //   name: 'Name',
  //   role: 'Role or contribution',
  //   url: 'https://github.com/username',
  // },
];

export default function Contributors() {
  return (
    <Layout title="Contributors" description="The people who build and maintain InspectorWiki.">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Contributors</h1>
            <p>
              InspectorWiki is built and maintained by a community of inspectors, developers, and educators. Thank you to everyone who has contributed.
            </p>

            <div style={{marginTop: '2rem'}}>
              {contributors.map((c) => (
                <div key={c.name} className="contributor-card">
                  <div className="contributor-card__avatar">
                    {c.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="contributor-card__name">
                      {c.url ? <a href={c.url} target="_blank" rel="noopener noreferrer">{c.name}</a> : c.name}
                    </h3>
                    <p className="contributor-card__role">{c.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <hr style={{margin: '3rem 0 2rem'}} />

            <h2>Want to Contribute?</h2>
            <p>
              We welcome contributions of all kinds — articles, edits, code, or design. Visit our <a href="https://github.com/jonajinga/inspectorwiki" target="_blank" rel="noopener noreferrer">GitHub repository</a> to get started, or reach out via the <a href="/contact">contact page</a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
