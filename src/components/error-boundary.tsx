import React from 'react';
import type { Props, State } from '../interfaces/error-boundary';
import { alertReinteryStyle } from '../styles/alert-retry';

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    if (this.props.onError) {
      this.props.onError(error, info);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    const { hasError } = this.state;
    const { FallbackComponent, children } = this.props;

    if (hasError) {
      if (FallbackComponent) {
        return <FallbackComponent error={hasError} resetErrorBoundary={this.handleRetry} />;
      }

      return (
        <div role="alert" style={alertReinteryStyle}>
          <p>Algo salió mal. Por favor, inténtalo de nuevo.</p>
          <button onClick={this.handleRetry}>Reintentar</button>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
