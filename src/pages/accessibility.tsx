import Layout from '@theme/Layout';

export default function Accessibility() {
  return (
    <Layout title="Accessibility" description="InspectorWiki accessibility commitment — WCAG 2.2 AA compliance.">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Accessibility Statement</h1>
            <p>
              InspectorWiki is committed to making our content accessible to everyone, including people with disabilities. We strive to meet <strong>WCAG 2.2 Level AA</strong> standards across the entire site.
            </p>

            <h2>What We Do</h2>
            <ul>
              <li><strong>Semantic HTML</strong> — proper heading hierarchy, landmarks, and ARIA labels throughout</li>
              <li><strong>Keyboard navigation</strong> — all interactive elements are fully accessible via keyboard</li>
              <li><strong>Color contrast</strong> — minimum 4.5:1 ratio for normal text, 3:1 for large text</li>
              <li><strong>Dark mode</strong> — respects your system preference with a manual toggle available</li>
              <li><strong>Reduced motion</strong> — animations respect the <code>prefers-reduced-motion</code> setting</li>
              <li><strong>Focus indicators</strong> — visible focus rings on all interactive elements</li>
              <li><strong>Form labels</strong> — all form fields have associated labels</li>
              <li><strong>Alt text</strong> — descriptive alt text on all meaningful images</li>
              <li><strong>Responsive design</strong> — content reflows properly at all viewport sizes</li>
            </ul>

            <h2>Known Limitations</h2>
            <p>
              While we work to ensure accessibility, some content contributed by the community may not yet meet all standards. We actively review and improve content accessibility.
            </p>

            <h2>Report an Issue</h2>
            <p>
              If you encounter an accessibility barrier on InspectorWiki, please let us know via the <a href="/feedback">feedback form</a> or <a href="/contact">contact page</a>. We take accessibility issues seriously and will work to resolve them promptly.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
