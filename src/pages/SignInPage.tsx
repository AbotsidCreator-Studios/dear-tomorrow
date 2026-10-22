import Layout from '../components/Layout';

const faqs = [
  {
    question: 'Can I edit a sealed letter?',
    answer: 'No. Once you seal a letter, it is intentional and locked to preserve the version of you at that moment. You can still edit drafts before sealing.',
  },
  {
    question: 'Are my letters private?',
    answer: 'Yes. Dear Tomorrow keeps content private to your account and is designed to respect user ownership and security controls.',
  },
  {
    question: 'What happens when a letter is ready?',
    answer: 'A notification is prepared for your account when the future date arrives, and the letter becomes available for you to read.',
  },
  {
    question: 'Can I delete my account?',
    answer: 'Yes. From your privacy settings or account preferences, you can remove your content and account data with clear controls.',
  },
];

const FAQsPage = () => (
  <Layout>
    <div className="content-page">
      <div className="content-header">
        <p className="eyebrow">FAQs</p>
        <h1>Everything you need to know before you begin.</h1>
      </div>

      <div className="faq-list">
        {faqs.map((faq) => (
          <div className="faq-item" key={faq.question}>
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default FAQsPage;
