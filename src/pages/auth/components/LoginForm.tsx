import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

import { TextFieldStyle } from '../styles/auth-style';

export const LoginForm = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        bgcolor: '#1A1A2E',
      }}
    >
      {/* Left Side - Decorative */}

      {/* Right Side - Form */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: { xs: 3, sm: 6 },
          bgcolor: '#16213E',
        }}
      >
        <Box sx={{ maxWidth: 400, width: '100%' }}>
          {/* Logo */}
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" sx={{ color: '#fff', fontWeight: 600, mb: 1 }}>
              Inicia Sesión
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
              Ingresa tus credenciales para continuar
            </Typography>
          </Box>

          <Box component="form">
            <TextField fullWidth placeholder="Usuario o correo electrónico" sx={TextFieldStyle} />

            <TextField fullWidth placeholder="Contraseña" sx={TextFieldStyle} />

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 4,
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: 'rgba(255,255,255,0.3)',
                      '&.Mui-checked': { color: '#6690ea' },
                    }}
                  />
                }
                label={
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                    Recordarme
                  </Typography>
                }
              />
              <Link
                component="button"
                type="button"
                sx={{
                  color: '#6690ea',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                py: 1.75,
                background: 'linear-gradient(135deg, #6690ea 0%, #4b78a2 100%)',
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                '&:hover': {
                  background: 'linear-gradient(135deg, #5a85d6 0%, #4b78a2 100%)',
                },
              }}
            >
              Iniciar Sesión
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
