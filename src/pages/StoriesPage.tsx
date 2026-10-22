import Layout from '../components/Layout';

const HowItWorksPage = () => (
  <Layout>
    <div className="content-page">
      <div className="content-header">
        <p className="eyebrow">How it works</p>
        <h1>Write, seal, and return to your future.</h1>
      </div>

      <div className="feature-grid">
        <article className="feature-card">
          <span>01</span>
          <h2>Capture the moment</h2>
          <p>Write a letter while life is vivid. Save your thoughts, worries, dreams, and milestones in a private, guided space.</p>
        </article>
        <article className="feature-card">
          <span>02</span>
          <h2>Choose your date</h2>
          <p>Set a future opening date that feels meaningful: a year from now, five years ahead, or a milestone in between.</p>
        </article>
        <article className="feature-card">
          <span>03</span>
          <h2>Seal and revisit</h2>
          <p>When the date arrives, the note unlocks and returns the memory to you with context, tenderness, and perspective.</p>
        </article>
      </div>
    </div>
  </Layout>
);

export default HowItWorksPage;
