import React from 'react';
import { Navigate } from 'react-router-dom';

export function IsUserRedirect({ user, path, children }) {
   return <>{user ? <Navigate to={path} replace={true} /> : children}</>;
}

export function ProtectedRoute({ user, children, path }) {
   return <>{user ? children : <Navigate to={path} replace={true} />}</>;
}
