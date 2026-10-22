import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import { getCurrentUser } from '../utils/storage';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  if (!getCurrentUser()) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
