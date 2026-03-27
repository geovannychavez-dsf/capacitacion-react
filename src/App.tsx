import { Box, CssBaseline, LinearProgress } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { StrictMode, Suspense, lazy } from 'react';

import { ErrorBoundary, FallbackError } from './components';
import { appTheme } from './theme/appTheme';
import './styles/index.css';

const CharacterListPage = lazy(() => import('./pages/character/character-page'));

function App() {
  return (
    <StrictMode>
      <ThemeProvider theme={appTheme}>
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
          <Suspense
            fallback={
              <Box sx={{ width: '100%', position: 'fixed', top: 0, left: 0, zIndex: 9999 }}>
                <LinearProgress color="primary" />
              </Box>
            }
          >
            <CharacterListPage />
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;
