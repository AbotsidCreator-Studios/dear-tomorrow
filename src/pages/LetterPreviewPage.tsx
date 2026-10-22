import { FormEvent, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { createLetter, getCurrentUser, updateLetter } from '../utils/storage';

const WriteLetterPage = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();
  const initialState = useMemo(
    () => ({
      title: '',
      futureOpenDate: '',
      content: '',
      status: 'draft' as const,
    }),
    [],
  );

  const [form, setForm] = useState(initialState);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!currentUser) {
    return null;
  }

  const handleSave = (event: FormEvent) => {
    event.preventDefault();

    if (!form.title.trim() || !form.futureOpenDate || !form.content.trim()) {
      setError('Add a title, a future opening date, and some content before saving.');
      return;
    }

    const letter = createLetter({
      userId: currentUser.id,
      title: form.title.trim(),
      futureOpenDate: form.futureOpenDate,
      content: form.content.trim(),
      status: 'draft',
    });

    updateLetter(letter.id, { status: 'draft' });
    setSuccess('Draft saved. You can edit it before sealing.');
    setError('');
    navigate(`/capsule/${letter.id}`);
  };

  const handleSeal = (event: FormEvent) => {
    event.preventDefault();

    if (!form.title.trim() || !form.futureOpenDate || !form.content.trim()) {
      setError('A sealed letter needs a title, content, and opening date.');
      return;
    }

    const letter = createLetter({
      userId: currentUser.id,
      title: form.title.trim(),
      futureOpenDate: form.futureOpenDate,
      content: form.content.trim(),
      status: 'sealed',
      sealedAt: new Date().toISOString(),
    });

    setError('');
    setSuccess('Your letter has been sealed and will return on your chosen date.');
    navigate(`/capsule/${letter.id}`);
  };

  return (
    <Layout>
      <div className="write-shell">
        <div className="content-header compact-header">
          <p className="eyebrow">Write a letter</p>
          <h1>Leave a message for your future self.</h1>
        </div>

        <form className="letter-form" onSubmit={handleSave}>
          {error && <div className="form-feedback form-feedback--error">{error}</div>}
          {success && <div className="form-feedback form-feedback--success">{success}</div>}

          <label>
            Letter title
            <input
              type="text"
              value={form.title}
              onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))}
              placeholder="What is this letter about?"
            />
          </label>

          <label>
            Future opening date
            <input
              type="date"
              value={form.futureOpenDate}
              onChange={(event) => setForm((current) => ({ ...current, futureOpenDate: event.target.value }))}
            />
          </label>

          <label>
            Your letter
            <textarea
              rows={14}
              value={form.content}
              onChange={(event) => setForm((current) => ({ ...current, content: event.target.value }))}
              placeholder="Write what you hope to remember, learn, or celebrate..."
            />
          </label>

          <div className="form-actions">
            <button type="submit" className="secondary-button">Save draft</button>
            <button type="button" className="primary-button" onClick={handleSeal}>Seal letter</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default WriteLetterPage;
