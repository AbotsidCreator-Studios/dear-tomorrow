import Layout from '../components/Layout';

const TermsPage = () => (
  <Layout>
    <div className="content-page narrow-page">
      <div className="content-header">
        <p className="eyebrow">Terms</p>
        <h1>Terms of Service</h1>
      </div>
      <div className="policy-box">
        <p>
          By using Dear Tomorrow, you agree to use the service for lawful and respectful personal reflection. You remain responsible for
          the content you create and submit.
        </p>
        <p>
          We may update the service, pricing, or features over time. Users can manage account data and deletion options through account
          controls.
        </p>
        <p>
          This MVP is an implementation prototype and should be reviewed before production deployment with legal and privacy standards
          specific to your region and product.
        </p>
      </div>
    </div>
  </Layout>
);

export default TermsPage;
