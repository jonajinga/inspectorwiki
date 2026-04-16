import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About" description="About InspectorWiki — a free, open-source knowledge base for property inspectors.">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>About InspectorWiki</h1>
            <p className="hero__sub" style={{fontSize: '1.15rem', maxWidth: 'none'}}>
              InspectorWiki is a free, community-driven encyclopedia covering every aspect of property inspection. Our goal is to make inspection knowledge accessible to everyone.
            </p>

            <h2>Why InspectorWiki?</h2>
            <p>
              The property inspection industry lacks a centralized, open knowledge base. Training materials are locked behind paywalls, scattered across forums, or buried in outdated textbooks. InspectorWiki changes that by providing free, high-quality reference content for inspectors at every level.
            </p>

            <h2>Who is this for?</h2>
            <ul>
              <li><strong>New inspectors</strong> — studying for certification or building foundational knowledge</li>
              <li><strong>Working inspectors</strong> — quick reference on systems, defects, and codes</li>
              <li><strong>Home buyers and sellers</strong> — understanding inspection reports</li>
              <li><strong>Educators and trainers</strong> — developing inspection curriculum</li>
            </ul>

            <h2>How to contribute</h2>
            <p>
              InspectorWiki is open source. You can contribute by writing articles, editing existing content, or suggesting new topics. Visit our <a href="https://github.com/jonajinga/inspectorwiki">GitHub repository</a> to get started.
            </p>
            <p>
              All content is licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>, meaning anyone can use, share, and adapt it with proper attribution.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
