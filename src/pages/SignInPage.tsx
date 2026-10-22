import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { loginUser } from '../utils/storage';

const SignInPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const account = loginUser(form.email, form.password);

    if (!account) {
      setError('We could not find an account with those credentials.');
      return;
    }

    navigate('/dashboard');
  };

  return (
    <Layout>
      <div className="auth-shell">
        <form className="auth-form" onSubmit={handleSubmit}>
          <p className="eyebrow">Welcome back</p>
          <h1>Sign in</h1>

          {error && <div className="form-feedback form-feedback--error">{error}</div>}

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
              required
            />
          </label>

          <button type="submit" className="primary-button wide-button">
            Continue
          </button>

          <p className="auth-subtle">
            New here? <Link to="/signup">Create account</Link>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default SignInPage;
