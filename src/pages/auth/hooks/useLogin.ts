import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { ApiError } from '../../../core/api-error';
import { TOKEN } from '../constants/auth-constants';
import { authService } from '../services/auth.service';

const useLogin = () => {
  const initialValues = z.object({
    email: z.email({
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'el correo no es valido',
    }),
    password: z.string().min(8, { message: 'La contraseña debe tener al menos 8 caracteres' }),
  });
  type FormData = z.infer<typeof initialValues>;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(initialValues),
  });

  const navigate = useNavigate();
  const [user, setUser] = useState<string>();
  const formLogin = async (values: FormData) => {
    try {
      const loginActin = await authService.login(values);
      if (loginActin.status) {
        setUser(loginActin.data.token);
        localStorage.setItem(TOKEN, loginActin.data.token);
        navigate('/home');
      }
    } catch (error) {
      if (error instanceof ApiError) {
        console.error(error.message);
      }
    } finally {
      reset();
    }
  };

  return { formLogin, register, handleSubmit, errors, user };
};
export default useLogin;
