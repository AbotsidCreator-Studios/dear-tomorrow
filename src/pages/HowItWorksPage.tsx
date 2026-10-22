import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { createWaitlistEntry } from '../utils/storage';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    const entry = createWaitlistEntry(email.trim());
    setStatus('success');
    setMessage(`Thanks, ${entry.email}. You’re on the waitlist.`);
    setEmail('');
  };

  return (
    <Layout homeVariant>
      <section className="hero-panel">
        <div className="hero-background" aria-hidden="true" />
        <div className="hero-content">
          <div className="social-proof" aria-label="Social proof">
            <div className="avatar-stack" aria-hidden="true">
              <span className="avatar avatar--one">A</span>
              <span className="avatar avatar--two">M</span>
              <span className="avatar avatar--three">J</span>
            </div>
            <span>10,000+ letters travelling ahead</span>
          </div>

          <h1>Write to Your Future Self</h1>
          <p>
            Capture your thoughts, dreams, and milestones today — and rediscover them years from now. A quiet space to reflect,
            remember, and reconnect with who you were becoming.
          </p>

          <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email to get early access"
              aria-invalid={status === 'error'}
              aria-describedby="waitlist-feedback"
            />
            <button type="submit">Join Waitlist</button>
          </form>

          {status !== 'idle' && (
            <div id="waitlist-feedback" className={status === 'success' ? 'form-feedback form-feedback--success' : 'form-feedback form-feedback--error'}>
              {message}
            </div>
          )}

          <Link to="/login" className="demo-link" aria-label="Watch demo">
            <span>Watch demo</span>
            <span className="demo-icon" aria-hidden="true">
              ▶
            </span>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default LandingPage;
