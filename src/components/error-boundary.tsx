import React from "react";
import type { IProps, IState } from "../interfaces/error-boundary";

export class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): IState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  
  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.error("ErrorBoundary atrapó un error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Algo salió mal. Por favor, intenta de nuevo.</h1>;
    }

    return this.props.children;
  }
}
