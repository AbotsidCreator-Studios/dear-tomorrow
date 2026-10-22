import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HowItWorksPage from './pages/HowItWorksPage';
import StoriesPage from './pages/StoriesPage';
import PricingPage from './pages/PricingPage';
import FAQsPage from './pages/FAQsPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import WriteLetterPage from './pages/WriteLetterPage';
import LetterPreviewPage from './pages/LetterPreviewPage';
import CapsuleDetailsPage from './pages/CapsuleDetailsPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import ProtectedRoute from './components/ProtectedRoute';
import { getCurrentUser } from './utils/storage';

function App() {
  const currentUser = getCurrentUser();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/stories" element={<StoriesPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/faqs" element={<FAQsPage />} />
      <Route path="/login" element={currentUser ? <Navigate to="/dashboard" replace /> : <SignInPage />} />
      <Route path="/signup" element={currentUser ? <Navigate to="/dashboard" replace /> : <SignUpPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/write"
        element={
          <ProtectedRoute>
            <WriteLetterPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/preview"
        element={
          <ProtectedRoute>
            <LetterPreviewPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/capsule/:id"
        element={
          <ProtectedRoute>
            <CapsuleDetailsPage />
          </ProtectedRoute>
        }
      />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
    </Routes>
  );
}

export default App;
