import Layout from '../components/Layout';

const PricingPage = () => (
  <Layout>
    <div className="content-page">
      <div className="content-header">
        <p className="eyebrow">Pricing</p>
        <h1>Thoughtful plans for your future reflections.</h1>
      </div>

      <div className="pricing-grid">
        <article className="pricing-card">
          <h2>Free</h2>
          <p className="price">$0 <span>/ month</span></p>
          <ul>
            <li>1 active letter</li>
            <li>Draft saving</li>
            <li>Basic reminders</li>
          </ul>
          <button type="button">Get started</button>
        </article>

        <article className="pricing-card pricing-card--featured">
          <div className="pill">Most loved</div>
          <h2>Memory</h2>
          <p className="price">$12 <span>/ month</span></p>
          <ul>
            <li>Unlimited letters</li>
            <li>Future opening dates</li>
            <li>Private time capsules</li>
          </ul>
          <button type="button">Start free</button>
        </article>

        <article className="pricing-card">
          <h2>Legacy</h2>
          <p className="price">$24 <span>/ month</span></p>
          <ul>
            <li>All Memory features</li>
            <li>Photo and voice support</li>
            <li>Priority support</li>
          </ul>
          <button type="button">Talk to us</button>
        </article>
      </div>
    </div>
  </Layout>
);

export default PricingPage;
