import type { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAdminAuthenticated } from '../lib/adminAuth';

type RequireAdminAuthProps = {
  children: ReactElement;
};

export default function RequireAdminAuth({ children }: RequireAdminAuthProps) {
  const location = useLocation();

  if (!isAdminAuthenticated()) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
}
