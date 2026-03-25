import { CssBaseline, LinearProgress } from '@mui/material';
import { ErrorBoundary } from './components';
import { StrictMode, Suspense, lazy } from 'react';
import { FallbackError } from './components/fallback-error';
import './styles/index.css';
const CharacterListPage = lazy(() => import('./pages/character/character-page'));
function App() {
  return (
    <>
      <StrictMode>
        <CssBaseline />
        <ErrorBoundary
          FallbackComponent={({
            error,
            resetErrorBoundary,
          }: {
            error: boolean;
            resetErrorBoundary: () => void;
          }) => <FallbackError error={error} resetErrorBoundary={resetErrorBoundary} />}
          onError={(error: Error, info: React.ErrorInfo) => {
            console.error(
              'error boundary puede enviar algun mensaje externo a un canal',
              error,
              info,
            );
          }}
        >
          <Suspense fallback={<LinearProgress />}>
            <CharacterListPage />
          </Suspense>
        </ErrorBoundary>
      </StrictMode>
    </>
  );
}

export default App;
