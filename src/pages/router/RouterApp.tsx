import { lazy, Suspense } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import ProgressPage from '../../components/ProgressPage';
import { ProtectedRoute } from '../../components/ProtectedRoute';
import AuthPage from '../auth/auth-page';

const CharacterListPage = lazy(() => import('../character/character-page'));

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectedRoute redirectTo="/home">
              <Suspense fallback={<ProgressPage />}>
                <AuthPage />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="home"
          element={
            <ProtectedRoute redirectTo="/login">
              <Suspense fallback={<ProgressPage />}>
                <CharacterListPage />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route path="/">
          <Navigate to="/login" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
