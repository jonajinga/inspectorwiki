import Layout from '@theme/Layout';

export default function Feedback() {
  return (
    <Layout title="Feedback" description="Share your feedback about InspectorWiki — help us improve the knowledge base.">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Share Your Feedback</h1>
            <p>
              Your feedback helps us improve InspectorWiki. Whether you found an error, have a suggestion for a new topic, or want to share your experience using the site, we want to hear from you.
            </p>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="iw-form"
            >
              <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />
              <input type="hidden" name="subject" value="InspectorWiki Feedback" />
              <input type="hidden" name="from_name" value="InspectorWiki Feedback" />
              <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />

              <div className="iw-form__field">
                <label htmlFor="name">Name <span className="iw-form__optional">(optional)</span></label>
                <input type="text" name="name" id="name" placeholder="Your name" />
              </div>

              <div className="iw-form__field">
                <label htmlFor="email">Email <span className="iw-form__optional">(optional)</span></label>
                <input type="email" name="email" id="email" placeholder="you@example.com" />
              </div>

              <div className="iw-form__field">
                <label htmlFor="category">Category</label>
                <select name="category" id="category" required>
                  <option value="">Select a category</option>
                  <option value="Content Error">Content Error</option>
                  <option value="Missing Topic">Missing Topic</option>
                  <option value="Suggestion">Suggestion</option>
                  <option value="Compliment">Compliment</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="iw-form__field">
                <label htmlFor="page_url">Related Page URL <span className="iw-form__optional">(optional)</span></label>
                <input type="url" name="page_url" id="page_url" placeholder="https://inspectorwiki.com/wiki/..." />
              </div>

              <div className="iw-form__field">
                <label htmlFor="message">Your Feedback</label>
                <textarea name="message" id="message" rows={6} required placeholder="Tell us what you think..." />
              </div>

              <button type="submit" className="btn--primary">Submit Feedback</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
