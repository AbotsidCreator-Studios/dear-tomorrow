import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const LetterPreviewPage = () => (
  <Layout>
    <div className="content-page narrow-page">
      <div className="content-header">
        <p className="eyebrow">Preview</p>
        <h1>Letter Preview and Seal</h1>
      </div>

      <div className="preview-card">
        <h2>Before the day arrives</h2>
        <p>
          Review your words carefully before sealing them. Once a letter is sealed, editing is intentionally restricted to protect the
          integrity of the version you are sending to your future self.
        </p>
        <div className="preview-box">
          <h3>My next chapter</h3>
          <p>
            I know this season feels uncertain, but I hope I can look back and remember how much I grew through it. I hope I was brave
            enough to keep showing up.
          </p>
        </div>

        <div className="form-actions">
          <Link to="/dashboard" className="secondary-button">
            Back to dashboard
          </Link>
          <button type="button" className="primary-button">
            Seal letter
          </button>
        </div>
      </div>
    </div>
  </Layout>
);

export default LetterPreviewPage;
