import { Link, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { getLetters } from '../utils/storage';

const CapsuleDetailsPage = () => {
  const { id } = useParams();
  const letters = getLetters();
  const letter = letters.find((item) => item.id === id);

  if (!letter) {
    return (
      <Layout>
        <div className="content-page narrow-page">
          <h1>Letter not found</h1>
          <Link to="/dashboard" className="primary-button">
            Return to dashboard
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="content-page narrow-page">
        <div className="content-header">
          <p className="eyebrow">Time capsule</p>
          <h1>{letter.title}</h1>
        </div>

        <div className="capsule-card">
          <div className="capsule-meta">
            <span>Status: {letter.status}</span>
            <span>Opens: {new Date(letter.futureOpenDate).toLocaleDateString()}</span>
          </div>
          <div className="capsule-body">
            <p>{letter.content}</p>
          </div>
          <div className="form-actions">
            <Link to="/dashboard" className="secondary-button">
              Dashboard
            </Link>
            <Link to="/write" className="primary-button">
              Write another
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CapsuleDetailsPage;
