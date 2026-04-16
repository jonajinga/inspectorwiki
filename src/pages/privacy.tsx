import Layout from '@theme/Layout';

export default function Privacy() {
  return (
    <Layout title="Privacy Policy" description="InspectorWiki privacy policy — how we handle your data.">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Privacy Policy</h1>
            <p><em>Last updated: April 2026</em></p>

            <h2>Overview</h2>
            <p>
              InspectorWiki is committed to protecting your privacy. This policy explains what data we collect, how we use it, and your rights regarding your information.
            </p>

            <h2>Data We Collect</h2>
            <h3>Contact and Feedback Forms</h3>
            <p>
              When you submit a form on our site, we collect the information you provide (name, email, message). This data is processed by <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer">Web3Forms</a> and delivered to us via email. We do not store form submissions in a database.
            </p>

            <h3>Analytics</h3>
            <p>
              We may use privacy-respecting analytics to understand how visitors use the site. We do not use cookies for tracking, and we do not sell or share analytics data with third parties.
            </p>

            <h3>Local Storage</h3>
            <p>
              Your theme preference (light/dark mode) is stored in your browser's local storage. This data never leaves your device.
            </p>

            <h2>Third-Party Services</h2>
            <ul>
              <li><strong>Cloudflare Pages</strong> — site hosting and CDN</li>
              <li><strong>Web3Forms</strong> — form submission processing</li>
              <li><strong>Google Fonts</strong> — web font delivery</li>
              <li><strong>GitHub</strong> — source code hosting and content contributions</li>
            </ul>

            <h2>Your Rights</h2>
            <p>
              You have the right to access, correct, or delete any personal data we hold about you. To exercise these rights, contact us via the <a href="/contact">contact form</a>.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Changes will be reflected on this page with an updated revision date.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
