import type { ReactNode } from 'react';

export interface Props {
  children: ReactNode;
  FallbackComponent: React.ComponentType<{ error: boolean; resetErrorBoundary: () => void }>;
  onError?: (error: Error, info: React.ErrorInfo) => void;
}

export interface State {
  hasError: boolean;
}
