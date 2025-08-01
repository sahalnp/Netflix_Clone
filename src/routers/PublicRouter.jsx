import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../hooks/Context';

export const PublicRouter = ({ children }) => {
  const { user } = useUser();

  if (user) {
    return <Navigate to="/" />;
  }

  return children;
};
