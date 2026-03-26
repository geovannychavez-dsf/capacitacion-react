import { Alert, Stack, type AlertColor } from '@mui/material';

export default function AlertsMessage({
  severity,
  message,
}: Readonly<{
  severity: AlertColor;
  message: string;
}>) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={severity}>{message}</Alert>
    </Stack>
  );
}
