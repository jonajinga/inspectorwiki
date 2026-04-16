import Layout from '@theme/Layout';

export default function Contact() {
  return (
    <Layout title="Contact" description="Get in touch with InspectorWiki — questions, suggestions, or partnership inquiries.">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Contact Us</h1>
            <p>
              Have a question, suggestion, or want to contribute? Fill out the form below and we'll get back to you.
            </p>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="iw-form"
            >
              {/* Replace with your Web3Forms access key */}
              <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />
              <input type="hidden" name="subject" value="InspectorWiki Contact Form" />
              <input type="hidden" name="from_name" value="InspectorWiki" />
              <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />

              <div className="iw-form__field">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required placeholder="Your name" />
              </div>

              <div className="iw-form__field">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required placeholder="you@example.com" />
              </div>

              <div className="iw-form__field">
                <label htmlFor="subject">Subject</label>
                <select name="subject_line" id="subject" required>
                  <option value="">Select a topic</option>
                  <option value="General Question">General Question</option>
                  <option value="Content Suggestion">Content Suggestion</option>
                  <option value="Bug Report">Bug Report</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="iw-form__field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows={6} required placeholder="How can we help?" />
              </div>

              <button type="submit" className="btn--primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
