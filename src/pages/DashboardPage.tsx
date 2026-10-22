import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { createUser } from '../utils/storage';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      setError('Please complete all fields.');
      return;
    }

    const existing = JSON.parse(localStorage.getItem('dear-tomorrow-users') ?? '[]') as { email: string }[];

    if (existing.some((item) => item.email.toLowerCase() === form.email.toLowerCase())) {
      setError('An account with that email already exists.');
      return;
    }

    createUser(form.name.trim(), form.email.trim(), form.password.trim());
    navigate('/dashboard');
  };

  return (
    <Layout>
      <div className="auth-shell">
        <form className="auth-form" onSubmit={handleSubmit}>
          <p className="eyebrow">Create your account</p>
          <h1>Sign up</h1>

          {error && <div className="form-feedback form-feedback--error">{error}</div>}

          <label>
            Full name
            <input
              type="text"
              value={form.name}
              onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={form.password}
              onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
              minLength={6}
              required
            />
          </label>

          <button type="submit" className="primary-button wide-button">
            Create account
          </button>

          <p className="auth-subtle">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default SignUpPage;
