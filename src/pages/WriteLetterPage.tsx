import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { getCurrentUser, getLetters, deleteCurrentUserAccount } from '../utils/storage';

const DashboardPage = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const letters = getLetters().filter((letter) => letter.userId === user?.id);

  if (!user) {
    return null;
  }

  const upcoming = letters.filter((letter) => letter.status !== 'opened');
  const opened = letters.filter((letter) => letter.status === 'opened');

  const handleDeleteAccount = () => {
    if (window.confirm('Delete your account and all content? This action cannot be undone.')) {
      deleteCurrentUserAccount();
      navigate('/');
    }
  };

  return (
    <Layout>
      <div className="dashboard-shell">
        <div className="dashboard-header">
          <div>
            <p className="eyebrow">Dashboard</p>
            <h1>Hello, {user.name}</h1>
          </div>
          <div className="header-actions">
            <Link to="/write" className="primary-button">
              Write a letter
            </Link>
            <button type="button" className="secondary-button" onClick={handleDeleteAccount}>
              Delete account
            </button>
          </div>
        </div>

        <section className="panel">
          <div className="panel-header">
            <h2>Upcoming letters</h2>
          </div>
          {upcoming.length === 0 ? (
            <p className="empty-state">No letters are scheduled yet. Start with a new memory.</p>
          ) : (
            <div className="letter-list">
              {upcoming.map((letter) => (
                <Link key={letter.id} to={`/capsule/${letter.id}`} className="letter-card">
                  <div>
                    <p className="letter-meta">{letter.status}</p>
                    <h3>{letter.title}</h3>
                    <p>{new Date(letter.futureOpenDate).toLocaleDateString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        <section className="panel">
          <div className="panel-header">
            <h2>Previously opened</h2>
          </div>
          {opened.length === 0 ? (
            <p className="empty-state">No memories opened yet.</p>
          ) : (
            <div className="letter-list">
              {opened.map((letter) => (
                <Link key={letter.id} to={`/capsule/${letter.id}`} className="letter-card">
                  <div>
                    <p className="letter-meta">Open date reached</p>
                    <h3>{letter.title}</h3>
                    <p>{new Date(letter.openedAt ?? letter.futureOpenDate).toLocaleDateString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default DashboardPage;
