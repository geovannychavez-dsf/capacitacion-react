import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5eead4',
      dark: '#2dd4bf',
      light: '#99f6e4',
    },
    secondary: {
      main: '#fbbf24',
      dark: '#d97706',
    },
    error: {
      main: '#f87171',
    },
    background: {
      default: '#070b12',
      paper: 'rgba(15, 23, 42, 0.72)',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#94a3b8',
    },
    divider: 'rgba(94, 234, 212, 0.14)',
  },
  typography: {
    fontFamily: '"DM Sans", system-ui, sans-serif',
    h4: {
      fontFamily: '"Syne", system-ui, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontFamily: '"Syne", system-ui, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h6: {
      fontFamily: '"Syne", system-ui, sans-serif',
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 500,
      color: '#94a3b8',
    },
    body2: {
      color: '#cbd5e1',
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: '100vh',
          backgroundColor: '#070b12',
          backgroundImage: `
            radial-gradient(ellipse 120% 80% at 50% -20%, rgba(45, 212, 191, 0.18), transparent 55%),
            radial-gradient(ellipse 80% 50% at 100% 50%, rgba(251, 191, 36, 0.06), transparent 50%),
            radial-gradient(ellipse 60% 40% at 0% 80%, rgba(94, 234, 212, 0.08), transparent 45%)
          `,
          backgroundAttachment: 'fixed',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(94, 234, 212, 0.12)',
          boxShadow: '0 18px 40px rgba(0, 0, 0, 0.35)',
          transition: 'transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease',
          '&:hover': {
            borderColor: 'rgba(94, 234, 212, 0.35)',
            boxShadow: '0 24px 48px rgba(0, 0, 0, 0.45)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 12,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
});
