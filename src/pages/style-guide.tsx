import Layout from '@theme/Layout';

export default function StyleGuide() {
  return (
    <Layout title="Style Guide" description="InspectorWiki brand identity, typography, colors, and design tokens.">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Style Guide</h1>
            <p>
              InspectorWiki's visual identity is built around clarity, professionalism, and readability. This guide documents our design tokens and usage.
            </p>

            <h2>Typography</h2>
            <table>
              <thead>
                <tr><th>Role</th><th>Font</th><th>Weight</th></tr>
              </thead>
              <tbody>
                <tr><td>Headings</td><td>Playfair Display</td><td>700, 900</td></tr>
                <tr><td>Body</td><td>Source Serif 4</td><td>300, 400</td></tr>
                <tr><td>UI / Labels / Code</td><td>IBM Plex Mono</td><td>400, 500</td></tr>
              </tbody>
            </table>

            <h2>Color Palette</h2>
            <h3>Core Colors</h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem', margin: '1rem 0'}}>
              {[
                {name: 'Ink', value: '#1a1612'},
                {name: 'Paper', value: '#f5f2ec'},
                {name: 'Amber', value: '#c97d1e'},
                {name: 'Navy', value: '#1c3349'},
                {name: 'Green', value: '#1c5e3e'},
                {name: 'Border', value: '#d6d0c4'},
              ].map(c => (
                <div key={c.name} style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                  <div style={{width: 40, height: 40, background: c.value, border: '1px solid var(--iw-border)', flexShrink: 0}} />
                  <div>
                    <strong style={{display: 'block', fontSize: '0.9rem'}}>{c.name}</strong>
                    <code style={{fontSize: '0.8rem'}}>{c.value}</code>
                  </div>
                </div>
              ))}
            </div>

            <h2>Logo</h2>
            <p>
              The InspectorWiki mark is a 34x34px dark square containing "IW" in IBM Plex Mono. The wordmark uses Playfair Display at 700 weight.
            </p>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1.5rem', border: '1px solid var(--iw-border)', background: 'var(--iw-paper-2)', marginTop: '1rem'}}>
              <div style={{width: 34, height: 34, background: '#1a1612', color: '#f5f2ec', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--ifm-font-family-monospace)', fontSize: '0.8rem', fontWeight: 500}}>IW</div>
              <span style={{fontFamily: 'var(--ifm-heading-font-family)', fontSize: '1.15rem', fontWeight: 700}}>InspectorWiki</span>
            </div>

            <h2>Content Guidelines</h2>
            <ul>
              <li>Write in a professional, direct tone — no salesy copy</li>
              <li>Use admonitions (tip, warning, danger) for safety-critical information</li>
              <li>Include standards references where applicable (ASHI, InterNACHI, IRC)</li>
              <li>Structure articles with clear h2/h3 hierarchy for table of contents</li>
              <li>All content is licensed under CC BY-SA 4.0</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
