import { Alert, type AlertColor } from '@mui/material';

interface AlertsMessageProps {
  severity: AlertColor;
  message: string;
}

export default function AlertsMessage({ severity, message }: AlertsMessageProps) {
  return (
    <Alert
      severity={severity}
      variant="filled"
      sx={{ borderRadius: 2, boxShadow: '0 10px 28px rgba(0, 0, 0, 0.35)' }}
    >
      {message}
    </Alert>
  );
}
