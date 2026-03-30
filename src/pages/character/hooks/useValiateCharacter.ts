import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

export const useValiateCharacter = () => {
  const initialValues = z.object({
    name: z.string({ message: 'El nombre es requerido' }),
    status: z.string({ message: 'El status es requerido' }),
    species: z.string({ message: 'La especie es requerida' }),
    type: z.string({ message: 'El tipo es requerido' }),
    gender: z.string({ message: 'El genero es requerido' }),
    image: z.url({ message: 'La imagen no es valida' }),
  });
  type FormData = z.infer<typeof initialValues>;
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(initialValues),
  });
  return { register, handleSubmit, errors, watch, initialValues };
};
