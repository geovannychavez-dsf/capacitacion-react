import type { ReactNode } from "react";

export interface IProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export interface IState {
  hasError: boolean;
}