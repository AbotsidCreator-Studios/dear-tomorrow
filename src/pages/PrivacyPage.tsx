import Layout from '../components/Layout';

const PrivacyPage = () => (
  <Layout>
    <div className="content-page narrow-page">
      <div className="content-header">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy Policy</h1>
      </div>
      <div className="policy-box">
        <p>
          Dear Tomorrow is designed to help you preserve private reflections and future letters. We store content in a secure account
          context and restrict access to the owning user.
        </p>
        <p>
          Users may delete their account and content through account controls. The product is intended to respect user ownership and
          privacy preferences.
        </p>
        <p>
          Production deployments should use secure authentication, environment variables for secrets, and server-side services with
          access controls.
        </p>
      </div>
    </div>
  </Layout>
);

export default PrivacyPage;
